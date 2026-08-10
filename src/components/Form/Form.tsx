import React, {
  forwardRef,
  useImperativeHandle,
  FormEvent,
  Ref,
  useEffect
} from "react";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import type { IFormInstance, IFormProps } from "./types";
import { FormProvider } from "./FormContext";
import { useForm } from "./useForm";

const Form = forwardRef(
  <TValues extends Record<string, any>>(
    {
      component: Component = "form",
      children,
      form,
      onValuesChange,
      initialValues,
      onFinish,
      className,
      onReset,
      onFinishFailed,
      validateMessages,
      isDotSeparator = true,
      onFieldChange,
      ...props
    }: TPropsWithAttributes<IFormProps<TValues>, "form">,
    ref: Ref<IFormInstance<TValues>>
  ) => {
    const formInstance = useForm<TValues>(form);

    const {
      setInitialValues,
      setCallbacks,
      setValidateMessages,
      setIsDotSeparator
    } = formInstance.getInternalHooks();

    useImperativeHandle(ref, () => formInstance);

    setCallbacks({
      onValuesChange,
      onFinish,
      onFinishFailed,
      onFieldChange
    });

    useEffect(() => {
      setIsDotSeparator(isDotSeparator);
      setInitialValues(initialValues);
      if (validateMessages) {
        setValidateMessages(validateMessages);
      }
    }, []);

    let childrenNode: React.ReactNode;
    const childrenRenderProps = typeof children === "function";
    if (childrenRenderProps) {
      const values = formInstance.getFieldsValue();
      childrenNode = children(values as TValues, formInstance);
    } else {
      childrenNode = children;
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      event.stopPropagation();
      formInstance.submit();
    };

    const handleReset = (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      formInstance.resetFields();
      onReset?.(event);
    };

    return (
      <FormProvider<TValues> form={formInstance}>
        <Component
          {...props}
          onSubmit={handleSubmit}
          onReset={handleReset}
          className={className}>
          {childrenNode}
        </Component>
      </FormProvider>
    );
  }
);

Form.displayName = "Form";

export default Form as <TValues = Record<string, any>>(
  props: IFormProps<TValues> & {
    ref?: Ref<IFormInstance<TValues> | undefined>;
  }
) => React.ReactElement;
