import React from "react";
import { IPost } from "lib/types/post";
import Card from "styleComponents/Card";

import PostMedia from "components/PostMedia";

import { Text } from "../../styleComponents";

import styles from "./Post.module.scss";

interface IProps {
  post: IPost;
}

export const Post: React.FC<IProps> = (props) => {
  const { post } = props;

  return (
    <Card>
      <div className={styles.Post}>
        <PostMedia alt={post.description} src={post.image} />
        <div className={styles.PostDetails}>
          <Text color="dark">{post.title}</Text>
          <Text color="dark" fontSize="small">
            {post.description}
          </Text>
        </div>
      </div>
    </Card>
  );
};

export default Post;
