import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IPark } from "lib/types/park";
import { Button, TextInput } from "styleComponents";
import FileInput from "styleComponents/FileInput";

import styles from "./AddParkForm.module.scss";

interface IProps {
  onSubmit: (formData: IPark) => void;
}

export const AddParkForm: React.FC<IProps> = (props) => {
  const { onSubmit } = props;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPark>();

  return (
    <div className={styles.AddParkForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="name"
          required={false}
          type="text"
          register={register}
        />
        <TextInput
          label="street_number"
          required={false}
          type="text"
          register={register}
        />
        <TextInput
          label="street_name"
          required={false}
          type="text"
          register={register}
        />
        <TextInput
          label="city"
          required={false}
          type="text"
          register={register}
        />
        <TextInput
          label="state"
          required={false}
          type="text"
          register={register}
        />
        <TextInput
          label="postal_code"
          required={false}
          type="text"
          register={register}
        />
        <TextInput
          label="country"
          required={false}
          type="text"
          register={register}
        />
        <TextInput
          label="description"
          required={false}
          type="text"
          register={register}
        />
        <FileInput label="media" register={register} required={false} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddParkForm;
