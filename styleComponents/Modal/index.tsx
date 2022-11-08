import React from "react";
import { ModalContextProvider } from "lib/context/ModalContext";
import { CloseModalButton } from "styleComponents/CloseModalButton";

import styles from "./Modal.module.scss";

interface IProps {
  isOpen: boolean;
  children: JSX.Element;
}

export const Modal: React.FC<IProps> = (props) => {
  const { children, isOpen } = props;

  const closeModal = () => {};

  if (!isOpen) {
    return null;
  }
  return (
    <ModalContextProvider closeModal={closeModal}>
      <div className={styles.Modal}>
        <CloseModalButton handleClose={() => {}} />
        <div className={styles.modalContent}>{children}</div>
      </div>
    </ModalContextProvider>
  );
};

export default Modal;
