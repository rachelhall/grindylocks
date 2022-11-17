import React, { useContext } from "react";
import { ModalContext } from "lib/context/ModalContext";
import fetchJson from "lib/fetchJson";
import useUser from "lib/hooks/useUser";
import { useRouter } from "next/router";
import NavButton from "styleComponents/NavButton";

import AddParkForm from "components/AddParkForm";
import NewPostForm from "components/NewPostForm";

import { Text } from "../../styleComponents";

import styles from "./SideNav.module.scss";

interface IProps {}

export const SideNav: React.FC<IProps> = (props) => {
  const {} = props;

  const { mutateUser } = useUser();
  const router = useRouter();

  const handleLogout = async (e) => {
    e.preventDefault();
    mutateUser(await fetchJson("/api/logout", { method: "POST" }), false);
    router.push("/login");
  };

  const handleNavigate = (route?: string) => {
    router.push(`/${route}`);
  };

  const { handleModal } = useContext(ModalContext);

  const handleCreate = () => {
    handleModal(<NewPostForm />);
  };
  return (
    <div className={styles.SideNav}>
      <Text>Grindylocks</Text>
      <nav>
        <NavButton onClick={handleNavigate} route="posts" title="Home" />
        <NavButton onClick={handleNavigate} route="search" title="Search" />
        <NavButton onClick={handleCreate} title="Create" />
        <NavButton onClick={handleNavigate} route="addPark" title="Add Park" />
        <NavButton onClick={handleNavigate} route="account" title="Profile" />
      </nav>
      <a href={"/api/logout"} onClick={handleLogout}>
        <div className={styles.logout}>
          <Text>Logout</Text>
        </div>
      </a>
    </div>
  );
};

export default SideNav;
