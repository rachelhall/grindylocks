import React, { createContext } from "react";
import { useModal } from "lib/hooks/useModal";
import { Modal } from "styleComponents";
import { Portal } from "utils/Portal";

interface IModalContext {
  modal: boolean;
  handleModal: (content?: JSX.Element) => void;
  modalContent: JSX.Element | undefined;
}

const ModalContext = createContext<IModalContext>();

const ModalProvider = ({ children }: { children: JSX.Element }) => {
  let { modal, handleModal, modalContent } = useModal();
  return (
    <ModalContext.Provider value={{ modal, handleModal, modalContent }}>
      <Portal>
        <Modal />
      </Portal>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
