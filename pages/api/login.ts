import axios from "axios";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = await req.body;

  const tokenUrl = `${process.env.API_URL}/user/token/`;
  const userUrl = `${process.env.API_URL}/user/me/`;

  try {
    const tokenResponse = await axios.post(tokenUrl, {
      email,
      password,
    });

    const token = await tokenResponse.data.token;

    axios.defaults.headers.common["Authorization"] = `Token ${token}`;
    axios.defaults.headers.common["Content-Type"] = "application/json";

    const userResponseData = await axios.get(userUrl);
    const userId = userResponseData.data.id;

    const user = {
      admin: false,
      isLoggedIn: false,
      user_id: userId,
      email,
      token,
    };

    req.session.user = user;

    await req.session.save();
    res.send({ ok: true });
  } catch (error) {
    res.status(500).send({ error, message: (error as Error).message });
  }
}

export default withIronSessionApiRoute(loginRoute, sessionOptions);
