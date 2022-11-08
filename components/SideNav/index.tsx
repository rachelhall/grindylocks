import React from "react";
import fetchJson from "lib/fetchJson";
import useUser from "lib/hooks/useUser";
import { useRouter } from "next/router";
import NavButton from "styleComponents/NavButton";

import { Text } from "../../styleComponents";

import styles from "./SideNav.module.scss";

interface IProps {}

export const SideNav: React.FC<IProps> = (props) => {
  const {} = props;

  const { mutateUser } = useUser();
  const router = useRouter();

  const handleNavigate = (route?: string) => {
    router.push(`/${route}`);
  };

  const handleCreate = () => {};

  return (
    <div className={styles.SideNav}>
      <Text>Grindylocks</Text>
      <nav>
        <NavButton handleClick={handleNavigate} route="posts" title="Home" />
        <NavButton handleClick={handleNavigate} route="search" title="Search" />
        <NavButton handleClick={handleCreate} title="Create" />
        <NavButton
          handleClick={handleNavigate}
          route="account"
          title="Profile"
        />
      </nav>
      <a
        href={"/api/logout"}
        onClick={async (e) => {
          e.preventDefault();
          mutateUser(await fetchJson("/api/logout", { method: "POST" }), false);
          router.push("/login");
        }}
      >
        <div className={styles.logout}>
          <Text>Logout</Text>
        </div>
      </a>
    </div>
  );
};

export default SideNav;
