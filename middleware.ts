// /middleware.ts
import { getIronSession } from "iron-session/edge";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
// import { sessionOptions } from "utils/withSession";

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next();
  // const session = await getIronSession(req, res, sessionOptions);

  // do anything with session here:
  // const { user } = session;

  // like mutate user:
  // user.something = someOtherThing;
  // or:
  // session.user = someoneElse;

  // uncomment next line to commit changes:
  // await session.save();
  // or maybe you want to destroy session:
  // await session.destroy();

  // demo:
  // if (user?.admin !== true) {
  //   // unauthorized to see pages inside admin/
  //   return NextResponse.redirect(new URL("/unauthorized", req.url)); // redirect to /unauthorized page
  // }

  return res;
};

export const config = {
  matcher: "/admin",
};
