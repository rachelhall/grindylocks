import React, { useContext } from 'react';
import { ModalContext } from '@/providers/ModalProvider';
import CloseButton from '../CloseModalButton';
import styles from './ModalContent.module.css';

type IProps = {
  content: JSX.Element;
};

export const ModalContent: React.FC<IProps> = () => {
  const { handleModal, modalContent } = useContext(ModalContext);
  return (
    <div className={styles['ModalContent']}>
      <CloseButton handleClose={handleModal} />
      <div className="ModalContent-inner">{modalContent}</div>
    </div>
  );
};

export default ModalContent;
