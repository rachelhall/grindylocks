import axios from "axios";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { ApiResponse } from "lib/types/apiResponse";
import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

interface NextConnectApiRequest extends NextApiRequest {
  files: Express.Multer.File[];
}

type ResponseData = ApiResponse<string[], string>;

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callBack) => {
      callBack(null, "./static/media/uploads");
    },
    filename: (req, file, callBack) => callBack(null, file.originalname),
  }),
});

const apiRoute = nextConnect({
  onError(error, req: NextApiRequest, res: NextApiResponse) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

const uploadMiddleware = upload.array("media");

apiRoute.use(uploadMiddleware);

// apiRoute.post(
//   (req: NextConnectApiRequest, res: NextApiResponse<ResponseData>) => {
//     res.status(200).json({ data: "success" });
//   }
// );
// export default apiRoute;

async function addPark(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const addParkUrl = `${process.env.API_URL}/park/parks/`;

  try {
    const response = apiRoute.post(
      (req: NextConnectApiRequest, res: NextApiResponse<ResponseData>) => {
        console.log(req.files, req.body);
        res.status(200).json(response);
      }
    );
  } catch (error) {
    res
      .status(500)
      .send({ error, message: "Sorry, something's not quite right." });
  }
}

export default withIronSessionApiRoute(addPark, sessionOptions);

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
