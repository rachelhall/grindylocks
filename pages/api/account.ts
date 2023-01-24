import axios from "axios";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

async function account(req: NextApiRequest, res: NextApiResponse) {
  const accountUrl = `${process.env.API_URL}/account/accounts/`;

  const { user } = req.query;

  try {
    if (user) {
      const response = await axios.get(`${accountUrl}?user=${user}`);
      res.status(200).json(response.data[0]);
    } else {
      const response = await axios.get(accountUrl);
      if (response.data.length === 1) {
        res.status(200).json(response.data[0]);
      } else {
        res.status(200).json(response.data);
      }
    }
  } catch (error) {
    res
      .status(500)
      .send({ error, message: "Sorry, something's not quite right." });
  }
}

export default withIronSessionApiRoute(account, sessionOptions);
