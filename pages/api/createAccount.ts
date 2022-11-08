import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

async function createAccount(req: NextApiRequest, res: NextApiResponse) {
  const formData = req.body;

  const createAccountUrl = `${process.env.API_URL}/user/create/`;

  try {
    const response = await axios.post(createAccountUrl, formData);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).send({
      error: error,
    });
  }
}

export default createAccount;
