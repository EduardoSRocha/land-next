import React from 'react';

interface TypographyProps {
  tag: keyof JSX.IntrinsicElements;
  className: string;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ tag: Tag, className, children }) => {
  return <Tag className={className}>{children}</Tag>;
};

export default Typography;
