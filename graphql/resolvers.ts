export const resolvers = {
  Query: {
    users: (_parent, _args, ctx) => {
      return ctx.prisma.user.findMany();
    },
    posts: (_parent, _args, ctx) => {
      return ctx.prisma.post.findMany();
    },
    parks: (_parent, _args, ctx) => {
      return ctx.prisma.park.findMany();
    },
  },
};
