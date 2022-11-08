import { useEffect, useState } from "react";
import axios from "axios";
import { IPark } from "lib/types/park";
import { NextPage } from "next";

const Parks: NextPage = () => {
  const [parks, setParks] = useState<IPark[]>();

  useEffect(() => {
    axios("api/parks").then((res) => setParks(res.data));
  });

  if (!parks) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <p>Parks</p>
      {/* {parks?.map((park) => (
        <div key={park.id}>
          <p>{park.name}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Parks;
