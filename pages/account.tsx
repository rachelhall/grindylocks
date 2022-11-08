import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { IAccount } from "lib/types/account";
import { IPost } from "lib/types/post";
import { IUser } from "lib/types/user";
import { NextPage } from "next";

import { AccountInfoCard } from "components/AccountInfoCard";
import Post from "components/Post";

import styles from "../styles/pages/Account.module.scss";

const Account: NextPage = () => {
  const [user, setUser] = useState<IUser>();

  const [account, setAccount] = useState<IAccount>();
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    axios("api/post").then((res) => setPosts(res.data));
  }, []);

  useEffect(() => {
    axios("api/user").then((res) => setUser(res.data));
  }, []);

  const getAccount = useCallback(async () => {
    const { data } = await axios.get(
      `${window.location.origin}/api/currentAccount`,
      {
        data: { user: user },
      }
    );

    setAccount(data);
  }, [user]);

  useEffect(() => {
    if (user) {
      getAccount();
    }
  }, [getAccount, user]);

  if (!account) {
    return (
      <div>
        {/* <Header /> */}
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.account}>
      {/* <Header /> */}
      <AccountInfoCard account={account} />
      <div className={styles.gridContainer}>
        <div className={styles.postGrid}>
          {posts.map((post) => (
            <div key={post.id}>
              <Post post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Account;
