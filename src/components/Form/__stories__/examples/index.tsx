import React, { useRef } from "react";
import styled from "styled-components";
import Input from "../../../Input";
import MultiSelect from "../../../MultiSelect";
import Select from "../../../Select";
import Button from "../../../Button";
import CheckBox from "../../../CheckBox";
import CheckBoxGroup from "../../../CheckBoxGroup";
import InputDate from "../../../InputDate/DatePicker";
import Form, { IFormInstance, TFormValidator } from "../../";
import InputNumber from "../../../InputNumber";

const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
` as typeof Form;

interface IFormBasic {
  username: string;
  password: string;
  isRemember: boolean;
}

interface IFormValidateCustom {
  min: number;
  max: number;
}

export const FormBaseExample: React.FC = () => {
  const handleFinish = (values: IFormBasic): void => {
    window.console.log(values);
  };

  return (
    <FormStyled<IFormBasic> name="basic" onFinish={handleFinish}>
      <Form.Field
        name="username"
        rules={[{ max: 5 }, { min: 3, isWarning: true }]}>
        <Input placeholder="username" />
      </Form.Field>
      <Form.Field name="password">
        <Input type="password" placeholder="password" />
      </Form.Field>
      <Form.Field name="isRemember">
        <CheckBox label="Remember me" />
      </Form.Field>
      <Button type="submit">Login</Button>
    </FormStyled>
  );
};

export const FormUseFormExample: React.FC = () => {
  const form = Form.useForm<IFormBasic>();

  const username = Form.useWatch("username", form);

  const onGeneratePassword = (event: React.MouseEvent): void => {
    event.preventDefault();
    form.setFieldValue("password", "12345");
  };

  const handleFinish = (values: IFormBasic): void => {
    window.console.log(values);
  };

  const onClickLogin = (event: React.MouseEvent): void => {
    event.preventDefault();
    form.submit();
  };

  return (
    <FormStyled<IFormBasic> name="useForm" form={form} onFinish={handleFinish}>
      <Form.Field name="username">
        <Input placeholder="username" />
      </Form.Field>
      <Form.Field name="password">
        <Input type="password" placeholder="password" />
      </Form.Field>
      <Form.Field name="isRemember">
        <CheckBox label="Remember me" />
      </Form.Field>
      <Button viewType="secondary" onClick={onGeneratePassword}>
        Generate password
      </Button>
      <Button onClick={onClickLogin}>Login</Button>
      <p>username: {username}</p>
    </FormStyled>
  );
};

export const FormRefExample: React.FC = () => {
  const formRef = useRef<IFormInstance<IFormBasic>>(undefined);

  const onGeneratePassword = (event: React.MouseEvent): void => {
    event.preventDefault();
    formRef.current?.setFieldValue("password", "12345");
  };

  const handleFinish = (values: IFormBasic): void => {
    window.console.log(values);
  };

  const onClickLogin = (event: React.MouseEvent): void => {
    event.preventDefault();
    formRef.current?.submit();
  };

  return (
    <FormStyled<IFormBasic> name="ref" ref={formRef} onFinish={handleFinish}>
      <Form.Field name="username">
        <Input placeholder="username" />
      </Form.Field>
      <Form.Field name="password">
        <Input type="password" placeholder="password" />
      </Form.Field>
      <Form.Field name="isRemember">
        <CheckBox label="Remember me" />
      </Form.Field>
      <Button viewType="secondary" onClick={onGeneratePassword}>
        Generate password
      </Button>
      <Button onClick={onClickLogin}>Login</Button>
    </FormStyled>
  );
};

interface IFormInitialValue {
  user: {
    fullName: string;
  };
  skills: string[];
}

export const FormInitialValueExample: React.FC = () => {
  const handleFinish = (values: IFormInitialValue): void => {
    window.console.log(values);
  };

  const initialValue = {
    user: {
      fullName: "User User"
    },
    skills: ["work", "ts"],
    department: "front",
    isRemember: true
  };

  return (
    <FormStyled<IFormInitialValue>
      name="basic"
      onFinish={handleFinish}
      initialValues={initialValue}>
      <Form.Field name="user.fullName">
        <Input placeholder="fullName" />
      </Form.Field>
      <Form.Field name="skills">
        <MultiSelect
          placeholder="skills"
          options={[
            { label: "work", value: "work" },
            { label: "ts", value: "ts" }
          ]}
        />
      </Form.Field>
      <Form.Field name="department">
        <Select
          placeholder="department"
          options={[
            { label: "front", value: "front" },
            { label: "back", value: "back" }
          ]}
        />
      </Form.Field>
      <Form.Field name="isRemember" valuePropName="isChecked">
        <CheckBox label="Remember me" />
      </Form.Field>
      <Button type="submit">Save</Button>
    </FormStyled>
  );
};

export const FormBaseValidationExample: React.FC = () => {
  const handleFinish = (values: IFormBasic): void => {
    window.console.log(values);
  };

  return (
    <FormStyled<IFormBasic> name="basic" onFinish={handleFinish}>
      <Form.Field name="username" rules={[{ required: true }]}>
        <Input placeholder="username" />
      </Form.Field>
      <Form.Field
        name="password"
        rules={[
          { required: true },
          {
            pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$",
            message:
              "The password must contain at least 8 characters, including one uppercase letter and one number."
          }
        ]}>
        <Input type="password" placeholder="password" />
      </Form.Field>
      <Form.Field name="isRemember">
        <CheckBox label="Remember me" />
      </Form.Field>
      <Button type="submit">Login</Button>
    </FormStyled>
  );
};

export const FormDateValidationExample: React.FC = () => {
  const handleFinish = (values: IFormBasic): void => {
    window.console.log(values);
  };

  return (
    <FormStyled<IFormBasic> name="basic" onFinish={handleFinish}>
      <Form.Field name="username" rules={[{ required: true }]}>
        <Input placeholder="username" />
      </Form.Field>
      <Form.Field
        name="birthday"
        rules={[{ minDate: "21.05.2020", maxDate: "21.05.2023" }]}>
        <InputDate placeholder="birthday" />
      </Form.Field>
      <Button type="submit">Login</Button>
    </FormStyled>
  );
};

export const FormCheckBoxesValidationExample: React.FC = () => {
  const OPTIONS = [
    {
      label: "Admin",
      value: "admin"
    },
    {
      label: "User",
      value: "user"
    }
  ];
  const handleFinish = (values: any): void => {
    window.console.log(values);
  };

  return (
    <FormStyled name="basic" onFinish={handleFinish}>
      <Form.Field name="Roles" rules={[{ required: true }]}>
        <CheckBoxGroup options={OPTIONS} />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </FormStyled>
  );
};

export const FormNotNestedValuesExample: React.FC = () => {
  const handleFinish = (values: IFormBasic): void => {
    window.console.log(values);
  };

  return (
    <FormStyled<IFormBasic>
      name="basic"
      onFinish={handleFinish}
      isDotSeparator={false}>
      <Form.Field
        name="user.name"
        rules={[{ max: 5 }, { min: 3, isWarning: true }]}>
        <Input placeholder="username.4" />
      </Form.Field>
      <Form.Field name="password">
        <Input type="password" placeholder="password" />
      </Form.Field>
      <Form.Field name="isRemember">
        <CheckBox label="Remember me" />
      </Form.Field>
      <Button type="submit">Login</Button>
    </FormStyled>
  );
};

export const FormList: React.FC = () => {
  const handleFinish = (values: IFormBasic): void => {
    window.console.log(values);
  };

  return (
    <FormStyled<IFormBasic> name="basic" onFinish={handleFinish}>
      <Form.List name="users.names">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => (
              <div key={field.key}>
                <Form.Field name={[field.name, "user"]}>
                  <Input />
                </Form.Field>
                <button type="button" onClick={() => remove(index)}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={() => add({ name: "" })}>
              Add User
            </button>
          </>
        )}
      </Form.List>
      <Button type="submit">Login</Button>
    </FormStyled>
  );
};

export const CustomValidationForm: React.FC = () => {
  const form = Form.useForm<IFormValidateCustom>();
  const max = Form.useWatch("max", form);

  const handleFinish = (values: IFormValidateCustom): void => {
    window.console.log(values);
  };

  const validator: TFormValidator<IFormValidateCustom> = (
    _,
    value
  ): Promise<void> => {
    if (max && value !== null && value > max) {
      return Promise.reject(new Error());
    }
    return Promise.resolve();
  };

  return (
    <FormStyled<IFormValidateCustom>
      name="basic"
      form={form}
      onFinish={handleFinish}
      isDotSeparator={false}>
      <Form.Field
        name="min"
        rules={[
          {
            message:
              "The minimum value cannot be greater than the maximum value.",
            validator
          }
        ]}>
        <InputNumber placeholder="Minimum" />
      </Form.Field>
      <Form.Field name="max">
        <InputNumber placeholder="Maximum" />
      </Form.Field>
      <Button type="submit">Login</Button>
    </FormStyled>
  );
};
