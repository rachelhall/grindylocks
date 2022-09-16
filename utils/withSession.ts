export const sessionOptions = {
  password:
    process.env.SECRET_COOKIE_PASSWORD ?? "abdcjdklfjdfj13jfjk334l4343lkja",
  cookieName: "__grindylocksapp",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
