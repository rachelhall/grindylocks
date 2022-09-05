import React from "react";
import cx from "classnames";

import "./TextInputLabel.scss";

interface IProps {
  className?: string;
  label?: string;
  subLabel?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
}

export const TextInputLabel: React.FC<IProps> = (props) => {
  const { children, className, label, subLabel, fontSize, fontWeight, color } =
    props;

  const mainClass = cx("TextInputLabel", className);

  return (
    <div className="TextInputLabel">
      <label className={mainClass}>
        {!!label && <p>{label}</p>}
        {children}
        {!!subLabel && <p>{subLabel}</p>}
      </label>
    </div>
  );
};

export default TextInputLabel;
