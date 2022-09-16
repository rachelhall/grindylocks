import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "utils/withSession";

export default withIronSessionApiRoute(async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = await req.body;

  const url = `${process.env.API_URL}/user/token/`;

  try {
    const response = await axios.post(url, {
      email,
      password,
    });

    const { data, headers } = response;
    res.status(200).json(data);

    // if (data) {
    //   const userData = data.data;
    //   const user = {
    //     isLoggedIn: true,
    //     user_id: String(userData.id),
    //     email: email,
    //   };

    //   res.status(200).json(response.data);
    // } else if (data.data.errors) {
    //   res.status(500).send({
    //     message: data.data.errors
    //       .map((e: { message: string }) => e.message)
    //       .join(" "),
    //   });
    // } else {
    //   res.status(500).send({ message: "Something isn't quite right." });
    // }
  } catch (error) {
    res.status(500).send({ error, message: "sorry there is an error." });
  }
},
sessionOptions);
