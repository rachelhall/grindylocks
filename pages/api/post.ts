import axios from "axios";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

async function post(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;

  const postUrl = `${process.env.API_URL}/post/posts`;

  try {
    const response = await axios.get(postUrl);
    if (response.data.length === 1) {
      res.status(200).json(response.data[0]);
    } else {
      res.status(200).json(response.data);
    }
  } catch (error) {
    res
      .status(500)
      .send({ error, message: "Sorry, something's not quite right." });
  }
}

export default withIronSessionApiRoute(post, sessionOptions);
