import React, { FC, ReactNode } from "react";

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

  const containerClasses = `${className} ${reverse || raised ? "m-1.5" : ""} ${
    disabled ? "opacity-50" : ""
  }`;
  const iconClasses = `${isRotateRTL ? "rotate-180" : ""}`;

  return (
    <div className={containerClasses}>
      <button
        className={`flex items-center justify-center ${raised ? "shadow" : ""}`}
        style={{
          backgroundColor: getBackgroundColor(),
          width: size * 2,
          height: size * 2,
          borderRadius: size,
        }}
        disabled={disabled}
        onClick={onPress}
      >
        <div
          className={iconClasses}
          style={{ color: reverse ? reverseColor : color, fontSize: size }}
        >
          {icon}
        </div>
      </button>
    </div>
  );
};
