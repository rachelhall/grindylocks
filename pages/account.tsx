import axios from "axios";
import useUser from "lib/hooks/useUser";
import { IAccount } from "lib/types/account";
import { IUser } from "lib/types/user";
import { NextPage } from "next";
import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";

const Account: NextPage = () => {
  const [account, setAccount] = useState<IAccount>();
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    axios("api/user").then((res) => setUser(res.data));
  }, []);

  const getAccount = useCallback(async () => {
    const { data } = await axios.get(`${window.location.origin}/api/account`, {
      data: { user: user },
    });

    setAccount(data);
  }, [user]);

  useEffect(() => {
    if (user) {
      getAccount();
    }
  }, [getAccount, user]);

  if (!account) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Account page</p>
      <Image
        alt={`picture of ${name}`}
        src={account.avatar}
        height="100"
        width="100"
      />
      <p>{account.name}</p>
      <p>{account.bio}</p>
      <p>{account.pronouns}</p>
    </div>
  );
};

export default Account;
