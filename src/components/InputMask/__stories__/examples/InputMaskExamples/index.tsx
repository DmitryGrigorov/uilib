import React, { useState } from "react";
import {
  IconSetting1,
  IconInfoDanger,
  IconInfoWarning,
  IconTickCircle
} from "@dmitrygrigorov/icons";
import InputMask from "../../../";
import { InputMaskTypes } from "../../../types";
import { TInputSize } from "../../../../InputBase/interfaces";

const MASK_TEL = "+7 (000) 000 00 00";

export const InputMaskDefaultExample: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <InputMask
      width="400px"
      isShowMask={true}
      placeholder="Date input example"
      mask={Date}
      value={value}
      onChange={(_e, val) => setValue(val)}
      placeholderChar="_"
    />
  );
};

export const InputMaskTelExample: React.FC = () => {
  const [value, setValue] = useState("+7924");

  return (
    <InputMask
      isShowMask={true}
      placeholder="Phone input example"
      value={value}
      mask={MASK_TEL}
      onChange={(_e, val) => setValue(val)}
      placeholderChar="_"
    />
  );
};

export const InputMaskExample: React.FC<{ size?: TInputSize }> = ({ size }) => {
  const [value, setValue] = useState("");

  return (
    <InputMask
      mask={Date}
      size={size}
      width="400px"
      placeholder={["Label 1", "Label 2"]}
      value={value}
      onChange={(_e, val: string) => setValue(val)}
    />
  );
};

export const InputMaskRequired: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <InputMask
      mask={Date}
      size={size}
      width="400px"
      placeholder={["Label 1", "Label 2"]}
      value={value}
      isRequired
      onChange={(_e, val: string) => setValue(val)}
    />
  );
};

export const InputMaskIconLeft: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("05");

  return (
    <InputMask
      mask={Date}
      size={size}
      placeholder={["Label 1", "Label 2"]}
      value={value}
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      iconLeft={<IconSetting1 width={14} height={14} />}
    />
  );
};

export const InputMaskRequiredIconLeft: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <InputMask
      mask={Date}
      placeholder={["Label 1", "Label 2"]}
      value={value}
      size={size}
      width="400px"
      isRequired
      onChange={(_e, val: string) => setValue(val)}
      iconLeft={<IconSetting1 width={14} height={14} />}
    />
  );
};

export const InputMaskIconRight: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("05");

  return (
    <InputMask
      mask={Date}
      size={size}
      placeholder={["Label 1", "Label 2"]}
      value={value}
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      iconRight={<IconSetting1 width={14} height={14} />}
    />
  );
};

export const InputMaskRequiredIconRight: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <InputMask
      mask={Date}
      size={size}
      placeholder={["Label 1", "Label 2"]}
      value={value}
      isRequired
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      iconRight={<IconSetting1 width={14} height={14} />}
    />
  );
};

export const InputMaskDisabled: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("31");

  return (
    <InputMask
      mask={Date}
      size={size}
      placeholder={["Label 1", "Label 2"]}
      value={value}
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      isDisabled
    />
  );
};

export const InputMaskRequiredDisabled: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <InputMask
      mask={Date}
      placeholder={["Label 1", "Label 2"]}
      value={value}
      isRequired
      size={size}
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      isDisabled
    />
  );
};

export const InputMaskError: React.FC<{ size?: TInputSize }> = ({ size }) => {
  const [value, setValue] = useState("20");

  return (
    <InputMask
      mask={Date}
      size={size}
      placeholder="Error label"
      value={value}
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      status="error"
      statusText="Error text"
      isShowMaskOnFocus
    />
  );
};

export const InputMaskErrorIsIcon: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <InputMask
      mask={Date}
      size={size}
      placeholder="Error label"
      value={value}
      onChange={(_e, val: string) => setValue(val)}
      status="error"
      width="400px"
      statusText="Error text"
      iconLeft={<IconInfoDanger width={14} height={14} />}
    />
  );
};

export const InputMaskWarning: React.FC<{ size?: TInputSize }> = ({ size }) => {
  const [value, setValue] = useState("15");

  return (
    <InputMask
      mask={Date}
      size={size}
      placeholder="Warning label"
      value={value}
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      status="warning"
      statusText="Warning text"
    />
  );
};

export const InputMaskWarningIsIcon: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <InputMask
      mask={Date}
      size={size}
      placeholder="Warning label"
      value={value}
      onChange={(_e, val: string) => setValue(val)}
      status="warning"
      width="400px"
      statusText="Warning text"
      iconLeft={<IconInfoWarning width={14} height={14} />}
    />
  );
};

export const InputMaskWarningIsIconRequired: React.FC<{
  size?: TInputSize;
}> = ({ size }) => {
  const [value, setValue] = useState("");

  return (
    <InputMask
      mask={Date}
      size={size}
      placeholder="Warning label"
      value={value}
      isRequired
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      status="warning"
      statusText="Warning text"
      iconLeft={<IconInfoWarning width={14} height={14} />}
    />
  );
};

export const InputMaskSuccessIsIconRequired: React.FC<{
  size?: TInputSize;
}> = ({ size }) => {
  const [value, setValue] = useState("");

  return (
    <InputMask
      mask={Date}
      size={size}
      placeholder="Success label"
      value={value}
      isRequired
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      status="success"
      statusText="Success text"
      iconLeft={<IconTickCircle width={14} height={14} />}
    />
  );
};

export const InputMaskErrorUsage: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <InputMask
      mask={Date}
      size={size}
      placeholder="Error label"
      value={value}
      onChange={(_e, val: string) => setValue(val)}
      status="error"
      statusText="Error text"
    />
  );
};

export const InputMaskWarningUsage: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <InputMask
      mask={Date}
      size={size}
      placeholder="Warning label"
      value={value}
      onChange={(_e, val: string) => setValue(val)}
      status="warning"
      statusText="Warning text"
    />
  );
};

export const InputMaskSuccessUsage: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("10.");

  return (
    <InputMask
      width="400px"
      mask={Date}
      size={size}
      placeholder="Success label"
      value={value}
      onChange={(_e, val: string) => setValue(val)}
      status="success"
      statusText="Success text"
    />
  );
};

export const InputMaskRegexpExample: React.FC = () => (
  <InputMask
    width="400px"
    mask={/^\d+$/}
    size="l"
    placeholder="Regular expression"
  />
);

export const InputMaskFunctionExample: React.FC = () => {
  const mask = (value: string): boolean =>
    /^\d*$/.test(value) &&
    value.split("").every((ch, i) => {
      const prevCh = value[i - 1];
      return !prevCh || prevCh < ch;
    });

  return (
    <InputMask
      width="400px"
      mask={mask}
      size="l"
      placeholder="Sequence from 0 to 9"
    />
  );
};

export const InputMaskStringCardExample: React.FC = () => (
  <InputMask
    width="400px"
    mask="0000 0000 0000 0000"
    size="l"
    placeholder="Bank card"
    isShowMask
  />
);

export const InputMaskStringNumberCarExample: React.FC = () => (
  <InputMask
    width="400px"
    mask="a 000 aa 00[0]"
    size="l"
    placeholder="License plate"
    isShowMask
  />
);

export const InputMaskArrayColorExample: React.FC = () => (
  <InputMask
    width="400px"
    mask={[
      {
        mask: "RGB,RGB,RGB",
        blocks: {
          RGB: {
            mask: InputMaskTypes.MaskedRange,
            from: 0,
            to: 255
          }
        }
      },
      /^#[\da-f]{0,6}$/i
    ]}
    size="l"
    placeholder="Color"
    isShowMask
  />
);

export const InputMaskContractNumberExample: React.FC = () => (
  <InputMask
    width="400px"
    mask="Contract no. NN dated DD.MM.2\02Y"
    size="l"
    placeholder="Contract"
    isShowMask
    blocks={{
      NN: {
        mask: "**"
      },
      DD: {
        mask: InputMaskTypes.MaskedRange,
        from: 1,
        to: 31
      },
      MM: {
        mask: InputMaskTypes.MaskedRange,
        from: 1,
        to: 12
      },
      Y: {
        mask: "0"
      }
    }}
  />
);
