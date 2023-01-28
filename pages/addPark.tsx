import React from "react";

const AddParkForm = dynamic(() => import("../components/AddParkForm"), {
  ssr: false,
});

import { Text } from "../styleComponents";

import styles from "../styles/pages/AddPark.module.scss";

interface IProps {}

import dynamic from "next/dynamic";

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

  return (
    <div className={styles.AddPark}>
      <Text>Upload new park</Text>
      <AddParkForm />
    </div>
  );
};

export default AddPark;
