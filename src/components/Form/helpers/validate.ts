import Schema, { ValidateError, RuleItem } from "async-validator";
import React from "react";
import {
  datePattern,
  DateStartPlaceholder,
  PlaceholderChar
} from "../../InputDate/constants";
import { formatISO8601ToDate } from "../../utils/date";
import { IRuleError, TFormRuleObject, IFieldValidateOptions } from "../types";
import deepmerge from "../../utils/deepmerge";
import { defaultValidateMessages } from "../constants/messages";
import {
  TValueObjectType,
  TKeyObjectType
} from "../../utils/types/typesDeepObject";

interface IParamsValidateRules<TValues = Record<string, any>> {
  name: TKeyObjectType<TValues>;
  value: TValueObjectType<TValues, TKeyObjectType<TValues>> | undefined;
  rules: TFormRuleObject<TValues>[];
  options?: IFieldValidateOptions;
  messageVariables?: Record<string, string>;
}

interface IParamsValidateRule<TValues = Record<string, any>> {
  name: TKeyObjectType<TValues>;
  value: TValueObjectType<TValues, TKeyObjectType<TValues>> | undefined;
  rule: TFormRuleObject<TValues>;
  options?: IFieldValidateOptions;
  messageVariables?: Record<string, string>;
}

interface IOptionsValidateDate {
  minDate?: string;
  maxDate?: string;
  message?: string | React.ReactElement;
}

function replaceMessage(template: string, kv: Record<string, string>): string {
  return template.replace(/\${\w+}/g, (str: string) => {
    const key = str.slice(2, -1);
    return kv[key];
  });
}

const checkValidDate = async (
  date: string,
  opt: IOptionsValidateDate
): Promise<any> => {
  if (date === DateStartPlaceholder) {
    return Promise.resolve();
  }
  if (date.includes(PlaceholderChar)) {
    return Promise.resolve();
  }
  const minDate = formatISO8601ToDate(opt.minDate || "01.01.1700");
  const maxDate = formatISO8601ToDate(opt.maxDate || "31.12.2999");
  if (datePattern.test(date)) {
    const dateInISO = formatISO8601ToDate(date);
    const isMinimalDateValid =
      opt.minDate === undefined || minDate <= dateInISO;
    const isMaximalDateValid =
      opt.maxDate === undefined || maxDate >= dateInISO;
    if (!isMinimalDateValid) {
      return Promise.reject([
        { message: opt.message || defaultValidateMessages.date.minDate }
      ]);
    }
    if (!isMaximalDateValid) {
      return Promise.reject([
        { message: opt.message || defaultValidateMessages.date.maxDate }
      ]);
    }
  }
  return Promise.resolve();
};

const checkValidDateRange = async (
  date: string,
  opt: IOptionsValidateDate
): Promise<any> => {
  const [dateStart, dateEnd] = date.split(" / ");

  if (!datePattern.test(dateStart) && !datePattern.test(dateEnd)) {
    return undefined;
  }

  const dateStartISO = formatISO8601ToDate(dateStart);
  const dateEndISO = formatISO8601ToDate(dateEnd);
  await checkValidDate(dateStart, opt);
  await checkValidDate(dateEnd, opt);

  if (dateStartISO > dateEndISO) {
    return Promise.reject([
      { message: opt.message || defaultValidateMessages.date.range }
    ]);
  }

  return Promise.resolve();
};

const validateRule = async <TValues>({
  name,
  value,
  rule,
  options,
  messageVariables
}: IParamsValidateRule<TValues>): Promise<string[]> => {
  const cloneRule = { ...rule };
  delete (cloneRule as any).index;

  if (cloneRule.validator) {
    const validator = cloneRule.validator;
    cloneRule.validator = (...args) => {
      try {
        return validator(...args);
      } catch (err) {
        window.console.error(err);
        return Promise.reject(err);
      }
    };
  }
  if (rule.rangeDate) {
    cloneRule.validator = () =>
      checkValidDateRange(value as unknown as string, {
        minDate: rule.minDate,
        maxDate: rule.maxDate,
        message: rule.message
      });
  } else if (rule.minDate && rule.maxDate) {
    cloneRule.validator = () =>
      checkValidDate(value as unknown as string, {
        minDate: rule.minDate,
        maxDate: rule.maxDate,
        message: rule.message
      });
  } else if (rule.minDate) {
    cloneRule.validator = () =>
      checkValidDate(value as unknown as string, {
        minDate: rule.minDate,
        message: rule.message
      });
  } else if (rule.maxDate) {
    cloneRule.validator = () =>
      checkValidDate(value as unknown as string, {
        maxDate: rule.maxDate,
        message: rule.message
      });
  }

  const asyncValidator = new Schema({
    [name]: [cloneRule as RuleItem]
  });

  const messages = deepmerge(
    defaultValidateMessages,
    options?.validateMessages || {}
  );
  asyncValidator.messages(messages);

  let result: string[] = [];

  try {
    await Promise.resolve(asyncValidator.validate({ [name]: value }));
  } catch (err: any) {
    if (err.errors) {
      result = (err.errors as ValidateError[]).map(
        ({ message }) => message as string
      );
    }
  }
  const kv = {
    ...(rule as Record<string, string | number>),
    name,
    ...messageVariables
  };

  return result.map((error) => {
    if (typeof error === "string") {
      return replaceMessage(error, kv);
    }
    return error;
  });
};

export const validateRules = <TValues>({
  name,
  value,
  rules,
  options,
  messageVariables
}: IParamsValidateRules<TValues>): Promise<IRuleError<TValues>[]> => {
  const filledRules: TFormRuleObject<TValues>[] = rules
    .map((currentRule, index) => {
      const validatorFunc = currentRule.validator;
      const cloneRule = {
        ...currentRule,
        index
      };

      if (validatorFunc) {
        cloneRule.validator = (rule, val, callback) => {
          let hasPromise = false;
          const wrappedCallback = (arg?: string): Promise<any> =>
            Promise.resolve().then(() => {
              if (!hasPromise) {
                window.console.warn(
                  "Your validator function has already return a promise. `callback` will be ignored."
                );
                callback(arg);
              }
            });
          const promise = validatorFunc(rule, val, wrappedCallback);
          hasPromise = (promise &&
            typeof promise.then === "function" &&
            typeof promise.catch === "function") as boolean;
          if (hasPromise) {
            (promise as Promise<void>)
              .then(() => {
                callback();
              })
              .catch((err) => {
                callback(err || "");
              });
          }
        };
      }
      return cloneRule;
    })
    .sort(({ isWarning: w1, index: i1 }, { isWarning: w2, index: i2 }) => {
      if (w1 === w2) {
        return i1 - i2;
      }
      if (w1) {
        return 1;
      }
      return -1;
    });

  const rulePromises = filledRules.map((rule) =>
    validateRule<TValues>({
      name,
      value,
      rule,
      options,
      messageVariables
    }).then((errors) => ({
      errors,
      rule
    }))
  );

  const summaryPromise = Promise.all(rulePromises).then(
    (
      errorList: IRuleError<TValues>[]
    ): IRuleError<TValues>[] | Promise<IRuleError<TValues>[]> => errorList
  );

  summaryPromise.catch((e) => e);

  return summaryPromise;
};
