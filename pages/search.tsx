import { useEffect, useState } from "react";
import axios from "axios";
import { IAccount } from "lib/types/account";
import { TextInput } from "styleComponents";

import { AccountList } from "components/AccountList";
import { AccountListCard } from "components/AccountListCard";
import { useForm } from "react-hook-form";
import { SearchResult } from "lib/types/searchResult";

interface IProps {}
const Search: React.FC<IProps> = ({}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [accountMatches, setAccountMatches] = useState<IAccount[]>(accounts);

  const getAccounts = async () => {
    const { data } = await axios.get(`${window.location.origin}/api/account`);
    setAccounts(data);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SearchResult>();

  const getMatches = () => {
    if (!searchTerm || searchTerm === "") {
      setAccountMatches(accounts);
      if (searchTerm !== "") {
        const searchMatches = accounts.filter((account) =>
          account.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())
        );

        setAccountMatches(searchMatches);
      }
    }
  };

  useEffect(() => {
    getAccounts();
  }, []);

  useEffect(() => {
    getMatches();
  }, [searchTerm]);

  return (
    <div className="search">
      <p>Search for accounts</p>

      <TextInput handleChange={setSearchTerm} label={"accounts"} />

      <AccountList accounts={accountMatches} />
    </div>
  );
};

export default Search;
