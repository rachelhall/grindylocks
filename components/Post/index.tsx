import React, { useEffect, useState } from "react";
import axios from "axios";
import { IAccount } from "lib/types/account";
import { IPark } from "lib/types/park";
import { IPost } from "lib/types/post";
import Card from "styleComponents/Card";

import PostMedia from "components/PostMedia";

import { Text, TextInput } from "../../styleComponents";

import styles from "./Post.module.scss";

interface IProps {
  post: IPost;
}

export const Post: React.FC<IProps> = (props) => {
  const { post } = props;

  const [account, setAccount] = useState<IAccount>();
  const [park, setPark] = useState<IPark>();

  const getAccount = async () => {
    const { data } = await axios.get(
      `${window.location.origin}/api/account?user=${post.user}`
    );
    setAccount(data);
  };

  const getPark = async () => {
    const { data } = await axios.get(
      `${window.location.origin}/api/park?id=${post.park}`
    );
    console.log({ data });
    setPark(data);
  };

  useEffect(() => {
    getAccount();
    getPark();
  }, []);

  return (
    <Card>
      <div className={styles.Post}>
        <div className={styles.postHeader}>
          <Text color="dark" fontSize="small" fontWeight="bold">
            {account?.name}
          </Text>
          <Text color="dark" fontSize="small">
            {park?.name}
          </Text>
        </div>
        <PostMedia alt={post.description} media={post.media} />
        <div className={styles.postDetails}>
          <Text color="dark" fontSize="small">
            <>
              <span style={{ fontWeight: 900 }}>{account?.name}</span>
              {post.title} {post.description}
            </>
          </Text>

          <Text color="dark" fontSize="small" fontWeight="bold">
            View all 4 comments.
          </Text>
          <Text color="dark" fontSize="small">
            <Text color="dark" fontSize="small">
              <>
                <span style={{ fontWeight: 900 }}>Meeshisk8es</span>
                wow! look at that big air grindylocks!
              </>
            </Text>
          </Text>
          <div className={styles.commentForm}>
            <TextInput
              label={""}
              required={false}
              placeholder="Add a comment"
              submitButton
              onSubmit={() => console.log("submitting comment")}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Post;
