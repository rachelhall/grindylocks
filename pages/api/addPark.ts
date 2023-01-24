import axios from "axios";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { ApiResponse } from "lib/types/apiResponse";
import { NextApiRequest, NextApiResponse } from "next";

async function addPark(req: NextApiRequest, res: NextApiResponse) {
  const addParkUrl = `${process.env.API_URL}/park/parks/`;

  try {
    const response = await axios.post(addParkUrl, req.body);

    res.status(200).send(response);
  } catch (error) {
    res
      .status(500)
      .send({ error, message: "Sorry, something's not quite right." });
  }
}

export default withIronSessionApiRoute(addPark, sessionOptions);
