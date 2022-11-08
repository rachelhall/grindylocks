import React from "react";
import { useRouter } from "next/router";

import { Button, Text } from "..";

import styles from "./NavButton.module.scss";

interface IProps {
  handleClick: (route?: string) => void;
  title: string;
  route?: string;
}

export const NavButton: React.FC<IProps> = (props) => {
  const { handleClick, route, title } = props;
  const router = useRouter();

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
