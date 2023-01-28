import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "apollo-server-micro";
import { NextPage } from "next";

import { Text } from "../styleComponents";

const Parks: NextPage = () => {
  const AllParksQuery = gql`
    query allParksQuery($first: Int, $after: String) {
      parks(first: $first, after: $after) {
        edges {
          node {
            id
            name
            description
          }
        }
      }
    }
  `;

  const { data, loading, error, fetchMore } = useQuery(AllParksQuery);

  const parks = data?.parks.edges;

  useEffect(() => console.log({ parks }), [parks]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <p>Parks</p>
      {data.parks.edges?.map((park, index) => (
        <div key={index}>
          <Text>{park.node.name}</Text>
        </div>
      ))}
    </div>
  );
};

export default Parks;
