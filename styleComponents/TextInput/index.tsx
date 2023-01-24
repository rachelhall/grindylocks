import React, { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";
import { Path } from "react-hook-form";
import { Button } from "styleComponents/Button";
import TextFieldButton from "styleComponents/TextFieldButton";

import styles from "./TextInput.module.scss";

interface IProps {
  className?: string;
  label: Path<any>;
  required: boolean;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  withClear?: boolean;
  withDollarSign?: boolean;
  withPercentSign?: boolean;
  register?: UseFormRegister<any>;
  submitButton?: boolean;
  onSubmit?: () => void;
}

export const TextInput: React.FC<IProps> = ({
  label,
  register,
  required,
  placeholder,
  submitButton = false,
  type,
  onSubmit,
}) => {
  return (
    <div className={styles.textInput}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.textInputField}>
        {register ? (
          <input
            type={type}
            {...register(label, { required })}
            className={styles.input}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            className={styles.input}
          />
        )}
        {submitButton && (
          <TextFieldButton onSubmit={onSubmit}>Post</TextFieldButton>
        )}
      </div>
    </div>
  );
};
