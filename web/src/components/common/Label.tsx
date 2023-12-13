import React from "react";

const Label: React.FC<React.HTMLProps<HTMLLabelElement>> = ({
  children,
  ...props
}) => {
  return <label {...props}>{children}</label>;
};

export default Label;
