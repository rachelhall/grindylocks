import { useMutation } from "@apollo/client";
import { gql } from "apollo-server-micro";
import axios from "axios";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

async function createPost(req: NextApiRequest, res: NextApiResponse) {
  const createPostUrl = `${process.env.API_URL}/post/posts/`;

  try {
    const response = await axios.post(createPostUrl, req.body);

    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send({ error, message: "yo, my bad..." });
  }
}

export default withIronSessionApiRoute(createPost, sessionOptions);
