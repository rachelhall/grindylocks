import axios from "axios";
import { v2 as cloudinary } from "cloudinary";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

async function addPark(req: NextApiRequest, res: NextApiResponse) {
  const addParkUrl = `${process.env.API_URL}/park/parks/`;

  console.log(req.body);

  try {
    const response = await cloudinary.uploader.upload(req.body.image);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send({ error: error });
    console.error(error);
  }
}

export default withIronSessionApiRoute(addPark, sessionOptions);
