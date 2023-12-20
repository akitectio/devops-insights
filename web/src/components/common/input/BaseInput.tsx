import React, { CSSProperties } from "react";
import { useField } from "formik";
import Form from "react-bootstrap/Form";

interface BaseInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  name: string;
  inputStyle?: CSSProperties;
  readOnly?: boolean;
  disabled?: boolean;
  inputClassName?: string;
  size?: "sm" | "lg";
}

const BaseInput: React.FC<BaseInputProps> = ({
  name,
  inputStyle,
  readOnly,
  disabled,
  inputClassName,
  size,
  ...props
}) => {
  const [field] = useField(name);

  return (
    <Form.Control
      {...field}
      type="text"
      style={inputStyle}
      readOnly={readOnly}
      disabled={disabled}
      className={inputClassName}
      size={size}
      {...props}
    />
  );
};

export { BaseInput };
export type { BaseInputProps };
