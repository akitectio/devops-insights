import React from "react";
import Alert from "react-bootstrap/Alert";

interface BannerProps {
  message: string;
  type?: "error" | "success" | "warning" | "info";
}

const AlertBanner: React.FC<BannerProps> = ({ message, type = "info" }) => {
  const variantMapping = {
    error: "danger",
    success: "success",
    warning: "warning",
    info: "info",
  };

  const variant = variantMapping[type];

  return (
    <Alert variant={variant} className="mb-4">
      {message}
    </Alert>
  );
};

export default AlertBanner;
