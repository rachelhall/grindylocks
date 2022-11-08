import React, { createContext, useContext, useMemo } from "react";

export const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalContextProvider = ({
  closeModal,
  children,
}: {
  closeModal: () => void;
  children: JSX.Element;
}) => {
  const context = useMemo(() => {
    return {
      closeModal,
    };
  }, [closeModal]);
  return (
    <ModalContext.Provider value={context}>{children}</ModalContext.Provider>
  );
};
