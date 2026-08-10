import React, { useState } from "react";
import { NumberFormatValues } from "react-number-format";
import InputNumber from "../../../index";
import { TInputSize } from "../../../../InputBase/interfaces";

export const InputNumberExample: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <InputNumber
      size={size}
      width="400px"
      placeholder="Example"
      value={value}
      onValueChange={(values: NumberFormatValues) =>
        setValue(values.floatValue)
      }
    />
  );
};

export const InputNumberRequired: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <InputNumber
      placeholder="Example"
      value={value}
      isRequired
      size={size}
      width="400px"
      onValueChange={(values: NumberFormatValues) =>
        setValue(values.floatValue)
      }
    />
  );
};

export const InputNumberDecimalScale: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <InputNumber
      placeholder="2 decimal places"
      value={value}
      size={size}
      width="400px"
      decimalScale={2}
      onValueChange={(values: NumberFormatValues) =>
        setValue(values.floatValue)
      }
    />
  );
};

export const InputNumberMaxLength: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <InputNumber
      placeholder="Maximum length: 5"
      value={value}
      size={size}
      width="400px"
      maxLength={5}
      onValueChange={(values: NumberFormatValues) =>
        setValue(values.floatValue)
      }
    />
  );
};

export const InputNumberSuffix: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <InputNumber
      placeholder="Number suffix"
      value={value}
      size={size}
      width="400px"
      suffix=" ₽"
      onValueChange={(values: NumberFormatValues) =>
        setValue(values.floatValue)
      }
    />
  );
};

export const InputNumberThousandSeparator: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <InputNumber
      placeholder="Thousands separator"
      value={value}
      size={size}
      width="400px"
      thousandSeparator=" "
      onValueChange={(values: NumberFormatValues) =>
        setValue(values.floatValue)
      }
    />
  );
};

export const InputNumberDisabled: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <InputNumber
      placeholder="Disabled"
      value={value}
      size={size}
      width="400px"
      onValueChange={(values: NumberFormatValues) =>
        setValue(values.floatValue)
      }
      isDisabled
    />
  );
};

export const InputNumberRequiredDisabled: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <InputNumber
      placeholder="Disabled"
      value={value}
      isRequired
      size={size}
      width="400px"
      onValueChange={(values: NumberFormatValues) =>
        setValue(values.floatValue)
      }
      isDisabled
    />
  );
};

export const InputNumberStep: React.FC<{ size?: TInputSize }> = ({ size }) => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <InputNumber
      placeholder="Step: 1"
      value={value}
      step={1}
      size={size}
      width="400px"
      onValueChange={(values: NumberFormatValues) =>
        setValue(values.floatValue)
      }
    />
  );
};

export const InputNumberStepDisabled: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <InputNumber
      placeholder="Step: 1, disabled"
      value={value}
      step={1}
      size={size}
      width="400px"
      onValueChange={(values: NumberFormatValues) =>
        setValue(values.floatValue)
      }
      isDisabled
    />
  );
};

export const InputNumberError: React.FC<{ size?: TInputSize }> = ({ size }) => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <InputNumber
      placeholder="Error label"
      value={value}
      size={size}
      width="400px"
      onValueChange={(values: NumberFormatValues) =>
        setValue(values.floatValue)
      }
      status="error"
      statusText="Error text"
    />
  );
};

export const InputNumberErrorRequired: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <InputNumber
      placeholder="Error label"
      value={value}
      isRequired
      size={size}
      width="400px"
      onValueChange={(values: NumberFormatValues) =>
        setValue(values.floatValue)
      }
      status="error"
      statusText="Error text"
    />
  );
};

export const InputNumberWarning: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <InputNumber
      placeholder="Warning label"
      value={value}
      size={size}
      width="400px"
      onValueChange={(values: NumberFormatValues) =>
        setValue(values.floatValue)
      }
      status="warning"
      statusText="Warning text"
    />
  );
};

export const InputNumberWarningRequired: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <InputNumber
      placeholder="Warning label"
      value={value}
      isRequired
      size={size}
      width="400px"
      onValueChange={(values: NumberFormatValues) =>
        setValue(values.floatValue)
      }
      status="warning"
      statusText="Warning text"
    />
  );
};

export const InputNumberSuccess: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <InputNumber
      size={size}
      width="400px"
      placeholder="Success label"
      value={value}
      onValueChange={(values: NumberFormatValues) =>
        setValue(values.floatValue)
      }
      status="success"
      statusText="Success text"
    />
  );
};

export const InputNumberSuccessRequired: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <InputNumber
      size={size}
      width="400px"
      placeholder="Success label"
      value={value}
      isRequired
      onValueChange={(values: NumberFormatValues) =>
        setValue(values.floatValue)
      }
      status="success"
      statusText="Success text"
    />
  );
};

export const InputNumberExampleUsage: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <InputNumber
      size={size}
      placeholder="Example"
      value={value}
      onValueChange={(values: NumberFormatValues) => {
        setValue(values.floatValue);
      }}
    />
  );
};

export const InputNumberSuffixUsage: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <InputNumber
      placeholder="Number suffix"
      value={value}
      size={size}
      suffix=" ₽"
      onValueChange={(values: NumberFormatValues) =>
        setValue(values.floatValue)
      }
    />
  );
};

export const InputNumberStepUsage: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <InputNumber
      placeholder="Step: 1"
      value={value}
      step={1}
      size={size}
      onValueChange={(values: NumberFormatValues) =>
        setValue(values.floatValue)
      }
    />
  );
};
