import React from "react";

import { Button, Text } from "..";

import styles from "./NavButton.module.scss";

interface IProps {
  onClick: (route?: string) => void;
  title: string;
  route?: string;
}

export const NavButton: React.FC<IProps> = (props) => {
  const { onClick, route, title } = props;

  const handleClick = () => {
    if (route) {
      onClick(route);
    } else {
      onClick();
    }
  };

  return (
    <div className={styles.NavButton}>
      <Button onClick={handleClick} textButton>
        <Text uppercase fontSize="small">
          {title}
        </Text>
      </Button>
    </div>
  );
};

export default NavButton;
