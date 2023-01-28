export const resolvers = {
  Query: {
    links: (_parent, _args, ctx) => {
      return ctx.prisma.link.findMany();
    },
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
