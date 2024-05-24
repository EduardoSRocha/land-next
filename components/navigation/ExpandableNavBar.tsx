import React from "react";

type SystemColor =
  | "color-danger"
  | "color-danger-light"
  | "color-danger-dark"
  | "color-warning"
  | "color-warning-light"
  | "color-warning-dark"
  | "color-success"
  | "color-success-light"
  | "color-success-dark"
  | "color-white"
  | "color-white-light"
  | "color-white-dark"
  | "color-primary"
  | "color-primary-light"
  | "color-primary-dark"
  | "color-secondary-light"
  | "color-secondary"
  | "color-secondary-dark"
  | "color-tertiary-light"
  | "color-tertiary"
  | "color-tertiary-dark"
  | "color-black-blue"
  | "color-gray-dark"
  | "color-gray";

interface NavItem {
    type: "text" | "icon"
    label: string
    href: string
    icon?: string
}

interface NavBarProps {
    items: NavItem[]
    color: SystemColor
}

const ExpandableNavBar: React.FC<NavBarProps> = () => {
    return (<></>)
}

export default ExpandableNavBar;