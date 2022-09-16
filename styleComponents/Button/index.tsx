import React from "react";
import cx from "classnames";

import styles from "./Button.module.scss";
import Link from "next/link";

interface IProps extends React.HTMLProps<HTMLButtonElement> {
  allowClickWhenDisabled?: boolean;
  ariaLabel?: string;
  buttonRef?: React.RefObject<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
  color?: "primary" | "secondary" | "black" | "transparent";
  currentTabLinkTo?: string;
  inline?: boolean;
  isLoading?: boolean;
  linkTo?: string;
  onClick?: () => void;
  onClickEvent?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseMove?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  replace?: boolean;
  buttonSize?:
    | "xSmall"
    | "small"
    | "medium"
    | "large"
    | "full"
    | "fit"
    | undefined;
  borderRadius?: 1 | 2 | 3 | "none";
  textButton?: boolean;
  type?: "submit" | "reset" | "button";
}

const Button: React.FC<IProps> = (props) => {
  const {
    allowClickWhenDisabled,
    ariaLabel,
    borderRadius = 2,
    buttonRef,
    children,
    className,
    color = "primary",
    currentTabLinkTo,
    disabled,
    inline,
    isLoading,
    linkTo,
    onClick,
    onClickEvent,
    onMouseMove,
    replace,
    buttonSize = "medium",
    textButton = false,
    type = "button",
    ...buttonProps
  } = props;

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!!onClickEvent && !disabled) {
      onClickEvent(e);
    } else if (!!onClick && !disabled) {
      onClick();
    }

    if (allowClickWhenDisabled) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  if (!!linkTo && !disabled) {
    return <Link href={linkTo}>{children}</Link>;
  }

  return <button onClick={handleOnClick}>{children}</button>;
};

export default Button;
