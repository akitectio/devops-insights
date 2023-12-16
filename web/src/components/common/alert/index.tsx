import React from "react";

interface BannerProps {
  message: string;
  type?: keyof typeof bannerClasses;
}

const bannerClasses = {
  error: "bg-red-500",
  success: "bg-green-500",
  warning: "bg-yellow-500",
  info: "bg-blue-500",
};

const Alert: React.FC<BannerProps> = ({ message, type = "info" }) => {
  const bannerColor = bannerClasses[type];
  return (
    <div className={`${bannerColor} text-white px-4 py-2 rounded-md mb-4`}>
      {message}
    </div>
  );
};

export default Alert;
