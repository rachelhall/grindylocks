import React, { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";
import { Path } from "react-hook-form";

import styles from "./TextInput.module.scss";

interface IProps {
  className?: string;
  label: Path<any>;
  required: boolean;
  type?: HTMLInputTypeAttribute;
  withClear?: boolean;
  withDollarSign?: boolean;
  withPercentSign?: boolean;
  register?: UseFormRegister<any>;
}

export const TextInput: React.FC<IProps> = ({ label, register, required }) => {
  return (
    <div className={styles.textInput}>
      {label && <label className={styles.label}>{label}</label>}
      {register ? (
        <input
          {...register(label, { required })}
          className={styles.textInputField}
        />
      ) : (
        <input className={styles.textInputField} />
      )}
    </div>
  );
};
