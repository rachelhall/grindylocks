import axios from "axios";
import useUser from "lib/hooks/useUser";
import { IAccount } from "lib/types/account";
import { IUser } from "lib/types/user";
import { NextPage } from "next";
import { useCallback, useEffect, useMemo, useState } from "react";

const Account: NextPage = () => {
  const [account, setAccount] = useState<IAccount>();
  const [user, setUser] = useState<IUser>();

  useEffect(() => console.log(user), [user]);

  useEffect(() => {
    axios("api/user").then((res) => setUser(res.data));
  }, []);

  const getAccount = useCallback(async () => {
    const { data } = await axios.get(`${window.location.origin}/api/account`, {
      data: { user: user },
    });
    setAccount(data);
  }, []);

  useEffect(() => {
    if (user) {
      getAccount();
    }
  }, [user]);

  const accountDetails = useMemo(
    () => ({ name: account?.name, avatar: account?.avatar, bio: account?.bio }),
    [account]
  );

  if (!account) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Account page</p>
      <p>{accountDetails.name}</p>
    </div>
  );
};

export default Account;
