import React from "react";
import Badge from "react-bootstrap/Badge";

interface BadgeProps {
  text: string;
  colorKey?:
    | "red"
    | "blue"
    | "green"
    | "yellow"
    | "indigo"
    | "purple"
    | "pink"
    | "gray"
    | "white"
    | "black";
}

const BadgeComponent: React.FC<BadgeProps> = ({ text, colorKey = "red" }) => {
  const variantMapping = {
    red: "danger",
    blue: "primary",
    green: "success",
    yellow: "warning",
    indigo: "primary",
    purple: "secondary",
    pink: "info",
    gray: "secondary",
    white: "light",
    black: "dark",
  };

  const variant = variantMapping[colorKey];

  return <Badge bg={variant}>{text}</Badge>;
};

export default BadgeComponent;
