import React, { InputHTMLAttributes, useState } from "react";
import cx from "classnames";
import { FieldValues, UseFormRegister } from "react-hook-form";

import styles from "TextInput.module.scss";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  type?: string;
  value?: string;
  withClear?: boolean;
  withDollarSign?: boolean;
  withPercentSign?: boolean;
}

const TextInput: React.FC<IProps> = ({
  disabled,
  label,
  name,
  placeholder,
  type,
  value,
  onChange,
}) => {
  const [defaultValue, setDefaultValue] = useState(placeholder);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <div>
      {label && <label className="TextInput-labelContent">{label}</label>}

      <input
        placeholder={defaultValue}
        disabled={disabled}
        name={name}
        onFocus={() => setDefaultValue("")}
        onBlur={() => setDefaultValue(placeholder)}
        onChange={handleChange}
        type={type}
      />
    </div>
  );
};

export default TextInput;
