import cx from 'classnames';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import { useKeyPress } from '@/utils';
import CloseButton from '../CloseModalButton';
import styles from './Modal.module.css';

type IProps = {
  content: JSX.Element;
};

export const Modal: React.FC<IProps> = ({ content }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      close: () => setIsOpen(false),
      open: () => setIsOpen(true),
    }),
    []
  );

  const escapePressed = useKeyPress('Escape');

  useEffect(() => {
    if (isOpen && escapePressed) {
      setIsOpen(false);
    }
  }, [escapePressed, isOpen]);

  const modalClass = cx(styles['modal'], !isOpen && styles['modal-closed']);
  return (
    <div className={modalClass}>
      <div className={styles['ModalContent']}>
        <CloseButton handleClose={() => setIsOpen(false)} />
        <div className={styles['ModalContent-inner']}>{content}</div>
      </div>
      <div
        className={styles['modal-overlay']}
        onClick={() => setIsOpen(false)}
        onKeyDown={() => setIsOpen(false)}
        role="button"
        tabIndex={0}
      />
    </div>
  );
};
