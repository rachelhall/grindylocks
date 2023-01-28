import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@apollo/client";
import { gql } from "apollo-server-micro";
import { IMediaItem } from "lib/types/mediaItem";
import { IPost } from "lib/types/post";
import { NextPage } from "next";
import { Button, TextInput } from "styleComponents";

import Post from "components/Post";

const AllPostsQuery = gql`
  query allPostsQuery($first: Int, $after: String) {
    posts(first: $first, after: $after) {
      edges {
        node {
          id
          name
          description
          # park {
          #   id
          #   name
          # }
        }
      }
    }
  }
`;

const Posts: NextPage = () => {
  const { data, loading, error, fetchMore } = useQuery(AllPostsQuery);

  useEffect(() => console.log(data), [data]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      {data.posts.edges.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
