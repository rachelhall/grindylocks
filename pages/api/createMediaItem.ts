import axios from "axios";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

async function createMediaItem(req: NextApiRequest, res: NextApiResponse) {
  const createMediaItemUrl = `${process.env.API_URL}/mediaItem/mediaItems/`;

  try {
    const response = await axios.post(createMediaItemUrl, req.body);
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send({ error, message: "stuck again..." });
  }
}

export default withIronSessionApiRoute(createMediaItem, sessionOptions);
