import React, { ReactNode } from "react";
import { useField } from "formik";
import { InputGroup, Form } from "react-bootstrap";

interface InputGroupComponentProps {
  name: string;
  type: string;
  placeholder: string;
  icon?: ReactNode;
}

const InputGroupComponent: React.FC<InputGroupComponentProps> = ({
  name,
  type,
  placeholder,
  icon,
}) => {
  const [field, meta] = useField(name);

  return (
    <InputGroup className="mb-3">
      <Form.Control
        {...field}
        type={type}
        placeholder={placeholder}
        isValid={meta.touched && !meta.error}
        isInvalid={meta.touched && !!meta.error}
      />
      {icon && <InputGroup.Text>{icon}</InputGroup.Text>}
      {meta.touched && meta.error && (
        <Form.Control.Feedback type="invalid">
          {meta.error}
        </Form.Control.Feedback>
      )}
    </InputGroup>
  );
};

export default InputGroupComponent;
