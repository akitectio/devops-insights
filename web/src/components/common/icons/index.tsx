import React, { FC, ReactNode } from "react";
import Button from "react-bootstrap/Button";

interface IconProps {
  icon: ReactNode;
  size: number;
  color: string;
  className?: string;
  reverse?: boolean;
  raised?: boolean;
  reverseColor?: string;
  disabled?: boolean;
  isRotateRTL?: boolean;
  onPress?: () => void;
}

export const Icon: FC<IconProps> = ({
  icon,
  size = 24,
  color = "black",
  className,
  reverse = false,
  raised = false,
  reverseColor = "white",
  disabled = false,
  isRotateRTL = false,
  onPress,
}) => {
  const getBackgroundColor = () => {
    if (reverse) {
      return color;
    }
    return raised ? "white" : "transparent";
  };

  const containerClasses = `d-inline-flex p-1 ${
    disabled ? "opacity-50" : ""
  } ${className}`;
  const iconClasses = `flex-center ${isRotateRTL ? "rotate-180" : ""}`;

  const iconStyle = {
    color: reverse ? reverseColor : color,
    fontSize: size,
    width: size * 2,
    height: size * 2,
    borderRadius: size,
  };

  return (
    <div className={containerClasses}>
      <Button
        variant={raised ? "outline-secondary" : ""}
        style={{
          backgroundColor: getBackgroundColor(),
          ...iconStyle,
        }}
        disabled={disabled}
        onClick={onPress}
      >
        <div className={iconClasses}>{icon}</div>
      </Button>
    </div>
  );
};
