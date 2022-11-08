import axios from "axios";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

async function parks(req: NextApiRequest, res: NextApiResponse) {
  const parksUrl = `${process.env.API_URL}/park/parks`;

  try {
    const response = await axios.get(parksUrl);
    res.status(200).json(response.data);
  } catch (error) {
    res
      .status(500)
      .send({ error, message: "Sorry, something's not quite right." });
  }
}

export default withIronSessionApiRoute(parks, sessionOptions);
