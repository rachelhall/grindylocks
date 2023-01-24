import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { IMediaItem } from "lib/types/mediaItem";
import { IPost } from "lib/types/post";
import { NextPage } from "next";
import { Button, TextInput } from "styleComponents";

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
      {posts.length > 1 ? (
        posts.map((post) => <Post post={post} key={post.id} />)
      ) : (
        <Post post={posts} />
      )}
    </div>
  );
};

export default Posts;
