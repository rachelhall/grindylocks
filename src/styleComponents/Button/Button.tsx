import React from "react";
import cx from "classnames";

import "./Button.scss";
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

export const Button: React.FC<IProps> = (props) => {
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

  const mainClass = cx(
    "Button",
    className,
    buttonSize === "xSmall"
      ? "Button-xSmall"
      : buttonSize === "small"
      ? "Button-small"
      : buttonSize === "medium"
      ? "Button-medium"
      : buttonSize === "large"
      ? "Button-large"
      : buttonSize === "fit"
      ? "Button-fit"
      : "Button-full",
    borderRadius === 1
      ? "Button-radius1"
      : borderRadius === 2
      ? "Button-radius2"
      : borderRadius === 3
      ? "Button-radius3"
      : "Button-radius-none",
    color === "primary"
      ? "Button-primary"
      : color === "secondary"
      ? "Button-secondary"
      : color === "black"
      ? "Button-black"
      : "Button-transparent",
    textButton ? "Button-textButton" : undefined,
    disabled && "Button-disabled"
  );

  if (!!linkTo && !disabled) {
    return (
      <Link className={mainClass} href={linkTo}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={handleOnClick} className={mainClass}>
      {children}
    </button>
  );
};

export default Button;
