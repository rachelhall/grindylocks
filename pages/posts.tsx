import { useEffect, useState } from "react";
import axios from "axios";
import { IPost } from "lib/types/post";
import { NextPage } from "next";

import Post from "components/Post";

const Posts: NextPage = () => {
  const [posts, setPosts] = useState<IPost[]>();

  useEffect(() => {
    axios("api/post").then((res) => setPosts(res.data));
  }, []);

  if (!posts) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {posts?.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
