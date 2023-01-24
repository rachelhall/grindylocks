// /graphql/context.ts
import { Claims, getSession } from "@auth0/nextjs-auth0";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../lib/prisma/prisma";

export type Context = {
  user?: Claims;
  accessToken?: string;
  prisma: PrismaClient;
};
export async function createContext({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  const session = await getSession(req, res);
  if (!session)
    return {
      prisma,
    };

  const { user, accessToken } = session;

  return {
    user,
    accessToken,
    prisma,
  };
}
