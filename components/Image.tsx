import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className: string;
  height?: string;
  width?: string;
  minWidth?: string;
  minHeight?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className, height, width, minHeight, minWidth}) => (
  <img src={src} alt={alt} className={className} height={height} width={width} style={{ minHeight: minHeight, minWidth: minWidth }}/>
);

export default Image;
