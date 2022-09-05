import React from 'react';
import styles from './Paragraph.module.css';

type TProps = {
  children: JSX.Element | string;
};

export const Paragraph: React.FC<TProps> = ({ children }) => {
  return (
    <div className={styles['Paragraph']}>
      <p>{children}</p>
    </div>
  );
};
