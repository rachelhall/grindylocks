import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { IUser } from "lib/types/user";
import { NextApiRequest, NextApiResponse } from "next";

export default withIronSessionApiRoute(logoutRoute, sessionOptions);

function logoutRoute(req: NextApiRequest, res: NextApiResponse<IUser>) {
  req.session.destroy();
  res.json({
    isLoggedIn: false,
    email: "",
    admin: false,
    user_id: "",
    token: "",
  });
}
