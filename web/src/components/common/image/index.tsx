import Image from "next/image";
import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}

const MyImage: React.FC<ImageProps> = ({
  src,
  alt,
  width = undefined,
  height = undefined,
  fill = false,
  priority = false,
  className,
}) => {
  return (
    <div className={`img-container ${className || ""}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout={fill ? "fill" : "responsive"}
        priority={priority}
      />
    </div>
  );
};

export default MyImage;
export type { ImageProps };
