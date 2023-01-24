import { v2 as cloudinary } from "cloudinary";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

async function mediaUpload(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await cloudinary.uploader.upload(req.body.file);

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).send({
      error,
      message: "Sorry, media could not be uploaded.",
    });
    console.error(error);
  }
}

export default withIronSessionApiRoute(mediaUpload, sessionOptions);
