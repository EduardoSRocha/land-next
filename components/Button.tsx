import React from 'react';

interface ButtonProps {
  href: string;
  className: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

export default Button;
