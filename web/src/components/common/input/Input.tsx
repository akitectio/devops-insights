import React, { CSSProperties } from "react";
import { useField } from "formik";
import { BaseInput, BaseInputProps } from "./BaseInput";

interface InputProps extends BaseInputProps {
  label?: string;
  className?: string;
  placeholder?: string;
  groupStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  errorStyle?: CSSProperties;
  groupClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  inputClassName,
  placeholder,
  groupStyle,
  labelStyle,
  groupClassName,
  labelClassName,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div
      style={groupStyle}
      className={`flex flex-col space-y-2 ${groupClassName}`}
    >
      {label && (
        <label
          htmlFor={props.name}
          className={`block text-sm font-medium ${labelClassName}  ${
            meta.touched && meta.error ? "text-red-500" : null
          }`}
        >
          {label}
        </label>
      )}
      <BaseInput
        {...field}
        {...props}
        placeholder={placeholder}
        inputClassName={`border rounded-md p-2 ${inputClassName} ${
          meta.touched && meta.error ? "border-red-500" : null
        }`}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-xs">{meta.error}</div>
      ) : null}
    </div>
  );
};

export { Input };
export type { InputProps };
