import Image from "next/image";

import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
}

const MyImage: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
}) => {
  return (
    <div className={className}>
      <Image src={src} alt={alt} width={width} height={height} fill={fill} />
    </div>
  );
};

export default MyImage;
export type { ImageProps };
