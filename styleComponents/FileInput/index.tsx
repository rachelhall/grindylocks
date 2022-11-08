import React from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { IPark } from "lib/types/park";

import styles from "./FileInput.module.scss";

interface IProps {
  label: Path<IPark>;
  register: UseFormRegister<IPark>;
  required: boolean;
}

export const FileInput: React.FC<IProps> = (props) => {
  const { label, register, required } = props;

  return (
    <div className={styles.FileInput}>
      <input {...register(label, { required })} type="file" />
    </div>
  );
};

export default FileInput;
