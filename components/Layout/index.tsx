import React from "react";
import { Modal } from "styleComponents";
import { Portal } from "utils/Portal";

import SideNav from "components/SideNav";

import styles from "./Layout.module.scss";

interface IProps {
  children: JSX.Element;
}

export const Layout: React.FC<IProps> = (props) => {
  const { children } = props;

  return (
    <div className={styles.Layout}>
      <SideNav />
      <main className={styles.main}>
        {children}
        <Portal>
          <Modal isOpen={false}></Modal>
        </Portal>
      </main>
    </div>
  );
};

export default Layout;
