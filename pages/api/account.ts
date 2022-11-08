import axios from "axios";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

async function account(req: NextApiRequest, res: NextApiResponse) {
  const accountUrl = `${process.env.API_URL}/account/accounts/`;

  try {
    const response = await axios.get(accountUrl);
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

export default withIronSessionApiRoute(account, sessionOptions);
