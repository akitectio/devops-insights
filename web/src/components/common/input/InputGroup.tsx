import React, { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { useField } from "formik";
import { BaseInput, BaseInputProps } from "./BaseInput";

interface InputGroupProps extends BaseInputProps {
  label?: string;
  className?: string;
  placeholder?: string;
  groupStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  errorStyle?: CSSProperties;
  iconStyle?: CSSProperties;
  iconClassName?: string;
  groupClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  icon?: ReactNode;
  onIconClick?: MouseEventHandler<HTMLDivElement>;
}

const InputGroup: React.FC<InputGroupProps> = ({
  label,
  inputClassName,
  placeholder,
  groupStyle,
  labelStyle,
  groupClassName,
  labelClassName,
  errorStyle,
  icon,
  iconStyle,
  iconClassName = "",
  onIconClick,
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
          style={labelStyle}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <BaseInput
          {...field}
          {...props}
          placeholder={placeholder}
          inputClassName={`border rounded-md p-2 w-full ${inputClassName} ${
            meta.touched && meta.error ? "border-red-500" : null
          }`}
        />
        {icon && (
          <div
            className={`absolute inset-y-0 right-5 flex items-center ${iconClassName}`}
            style={{ ...iconStyle }}
            onClick={onIconClick}
          >
            {icon}
          </div>
        )}
      </div>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-xs" style={errorStyle}>
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export { InputGroup };
export type { InputGroupProps };
