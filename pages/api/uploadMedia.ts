import { v2 as cloudinary } from "cloudinary";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

async function uploadMedia(req: NextApiRequest, res: NextApiResponse) {
  //   console.log(req.body);

  try {
    const response = await cloudinary.uploader.upload(req.body);
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send({ error });
    console.error(error);
  }
}

export default withIronSessionApiRoute(uploadMedia, sessionOptions);
