import React from "react";

import { Text } from "../../styleComponents";

import styles from "./NewPostForm.module.scss";

interface IProps {}

export const NewPostForm: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <div className={styles.NewPostForm}>
      <Text color="dark">New Post</Text>
    </div>
  );
};

export default NewPostForm;
