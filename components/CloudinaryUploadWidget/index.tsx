import React from "react";
import { UploadApiOptions } from "cloudinary";
import Script from "next/script";
import { Button } from "styleComponents";
import { openUploadWidget } from "utils/CloudinaryService";

import styles from "./CloudinaryUploadWidget.module.scss";

interface IProps {
  publicId: string[];
  setPublicId: (id: string[]) => void;
}

export const CloudinaryUploadWidget: React.FC<IProps> = (props) => {
  const { setPublicId } = props;

  const cloudOptions = {
    cloudName: "dyspjkmgs",
    uploadPreset: "grindylocks_park",
  };

  const onMediaUpload = (error, result) => {
    try {
      const files = result.info.files;
      if (files) {
        files.forEach((file) => setPublicId(file.uploadInfo.public_id));
      }
    } catch (error) {
      console.warn(error);
    }
    console.log("the media upload callback has run", error, result);
  };

  const uploadWidget = () => {
    const myUploadWidget = window.cloudinary.openUploadWidget(
      cloudOptions,
      onMediaUpload
    );

    myUploadWidget.open();
  };
  return (
    <div className={styles.CloudinaryUploadWidget}>
      <Button onClick={uploadWidget}>Open widget</Button>
      <Script
        src="https://widget.cloudinary.com/v2.0/global/all.js"
        type="text/javascript"
      />
    </div>
  );
};

export default CloudinaryUploadWidget;
