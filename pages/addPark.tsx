import React from "react";
import axios from "axios";

import AddParkForm from "components/AddParkForm";

import { Text } from "../styleComponents";

import styles from "../styles/pages/AddPark.module.scss";

interface IProps {}

import { IPark } from "../lib/types/park";

export const AddPark: React.FC<IProps> = (props) => {
  const {} = props;

  type TKey =
    | "id"
    | "name"
    | "street_number"
    | "street_name"
    | "city"
    | "state"
    | "postal_code"
    | "country"
    | "description"
    | "media";

  const addPark = async (data: IPark) => {
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }

    axios
      .post("api/addPark", formData, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then((res) => console.log(res));
  };

  return (
    <div className={styles.AddPark}>
      <Text>Upload new park</Text>
      <AddParkForm onSubmit={addPark} />
    </div>
  );
};

export default AddPark;
