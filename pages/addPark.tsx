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
    const mediaFormData = new FormData();

    for (const mediaItem of data.media) {
      console.log(data.media);
      mediaFormData.append("media_item", mediaItem);
    }
    console.log(mediaFormData);
    const response = await axios.post("api/uploadMedia", mediaFormData);
    console.log(response);

    // axios.post("api/addPark", formData).then((res) => console.log(res));
  };

  return (
    <div className={styles.AddPark}>
      <Text>Upload new park</Text>
      <AddParkForm onSubmit={addPark} />
    </div>
  );
};

export default AddPark;
