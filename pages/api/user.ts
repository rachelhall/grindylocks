import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { IUser } from "lib/types/user";
import { NextApiRequest, NextApiResponse } from "next";

async function userRoute(req: NextApiRequest, res: NextApiResponse) {
  res.send({ user: req.session.user });

  //   if (req.session?.user) {
  //     // in a real world application you might read the user id from the session and then do a database request
  //     // to get more information on the user if needed
  //     res.status(200).json({
  //       ...req.session.user,
  //       isLoggedIn: true,
  //     });
  //   } else {
  //     res.json({
  //       isLoggedIn: false,
  //       user_id: "",
  //       email: "",
  //       token: "",
  //     });
  //   }
}

export default withIronSessionApiRoute(userRoute, sessionOptions);
