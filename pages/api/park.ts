import axios from "axios";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

async function park(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const parksUrl = `${process.env.API_URL}/park/parks/`;

  try {
    console.log({ id });
    if (id) {
      const response = await axios.get(`${parksUrl}?id=${id}`);
      res.status(200).json(response.data[0]);
    } else {
      const response = await axios.get(parksUrl);
      res.status(200).json(response.data);
    }
  } catch (error) {
    res
      .status(500)
      .send({ error, message: "Sorry, something's not quite right." });
  }
}

export default withIronSessionApiRoute(park, sessionOptions);
