import axios from "axios";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

async function park(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;
  const parksUrl = id
    ? `${process.env.API_URL}/park/parks${id}`
    : `${process.env.API_URL}/park/parks`;

  try {
    const response = await axios.get(parksUrl);
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

export default withIronSessionApiRoute(park, sessionOptions);
