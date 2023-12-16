import React from "react";

interface BadgeProps {
  text: string;
  colorKey?: keyof typeof colorClasses;
}

const colorClasses = {
  red: "text-red-600 bg-red-50 ring-red-500",
  blue: "text-blue-600 bg-blue-50 ring-blue-500",
  green: "text-green-600 bg-green-50 ring-green-500",
  yellow: "text-yellow-600 bg-yellow-50 ring-yellow-500",
  indigo: "text-indigo-600 bg-indigo-50 ring-indigo-500",
  purple: "text-purple-600 bg-purple-50 ring-purple-500",
  pink: "text-pink-600 bg-pink-50 ring-pink-500",
  gray: "text-gray-600 bg-gray-50 ring-gray-500",
  white: "text-white bg-white ring-white",
  black: "text-black bg-black ring-black",
};

const Badge: React.FC<BadgeProps> = ({ text, colorKey = "red" }) => {
  const color = colorClasses[colorKey];
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${color}`}
    >
      {text}
    </span>
  );
};

export default Badge;
