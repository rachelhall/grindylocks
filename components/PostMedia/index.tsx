import React from "react";
import Image from "next/image";

import styles from "./PostMedia.module.scss";

interface IProps {
  src: string;
  alt: string;
}

export const PostMedia: React.FC<IProps> = (props) => {
  const { src, alt } = props;

  return (
    <div className={styles.PostMedia}>
      <Image alt={alt} src={src ?? ""} height="300" width="300" />
    </div>
  );
};

export default PostMedia;
