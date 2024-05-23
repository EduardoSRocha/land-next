import React from 'react';

interface IconButtonProps {
  className: string;
  icon: string;
}

const IconButton: React.FC<IconButtonProps> = ({ className, icon }) => (
  <a className={className}>
    <svg className="icon-button__icon">
      <use xlinkHref={`icons/sprites.svg#${icon}`}></use>
    </svg>
  </a>
);

export default IconButton;
