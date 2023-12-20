import React, { CSSProperties } from "react";
import { useField, FieldHookConfig } from "formik";
import Form from "react-bootstrap/Form";
import { BaseInput, BaseInputProps } from "./BaseInput";

interface InputProps extends BaseInputProps {
  label?: string;
  groupClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  groupStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  errorStyle?: CSSProperties;
}

const Input: React.FC<InputProps> = ({
  label,
  groupClassName,
  labelClassName,
  errorClassName,
  groupStyle,
  labelStyle,
  errorStyle,
  ...props
}) => {
  const { name } = props;
  const [field, meta] = useField(name as string | FieldHookConfig<any>);
  return (
    <Form.Group style={groupStyle} className={groupClassName}>
      {label && (
        <Form.Label
          htmlFor={name}
          style={labelStyle}
          className={labelClassName}
        >
          {label}
        </Form.Label>
      )}
      <BaseInput
        {...field}
        {...props}
        className={meta.touched && meta.error ? "is-invalid" : ""}
      />
      {meta.touched && meta.error && (
        <Form.Control.Feedback
          type="invalid"
          style={errorStyle}
          className={errorClassName}
        >
          {meta.error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export { Input };
export type { InputProps };
