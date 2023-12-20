import React from "react";
import Button from "react-bootstrap/Button";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  className: string;
  children: React.ReactNode;
}

const BaseButton: React.FC<ButtonProps> = ({ type, className, children }) => {
  return (
    <Button type={type} className={className}>
      {children}
    </Button>
  );
};

export default BaseButton;
export type { ButtonProps };
