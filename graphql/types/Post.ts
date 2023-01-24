import {
  booleanArg,
  extendType,
  idArg,
  intArg,
  nonNull,
  nullable,
  objectType,
  stringArg,
} from "nexus";

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.string("id");
    t.string("user");
    t.string("account");
    t.string("title");
    t.string("description");
    t.string("comment");
    t.string("park");
  },
});

export const PostsQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("posts", {
      type: "Response",
      args: {
        first: intArg(),
        after: stringArg(),
      },
      async resolve(_, args, ctx) {
        let queryResults = null;

        if (args.after) {
          queryResults = await ctx.prisma.post.findMany({
            take: args.first!!,
            skip: 1,
            cursor: {
              id: args.after,
            },
          });
        } else {
          queryResults = await ctx.prisma.post.findMany({
            take: args.first!!,
          });
        }
        if (queryResults.length > 0) {
          const lastPostInResults = queryResults[queryResults.length - 1];
          const myCursor = lastPostInResults.id;

          const secondQueryResults = await ctx.prisma.post.findMany({
            take: args.first!!,
            cursor: {
              id: myCursor,
            },
            // orderBy: {
            //   index: "asc",
            // },
          });

          const result = {
            pageInfo: {
              endCursor: myCursor,
              hasNextPage:
                args.first && secondQueryResults.length >= args.first,
            },
            edges: queryResults.map((post) => ({
              cursor: post.id,
              node: post,
            })),
          };
          return result;
        }
        return {
          pageInfo: {
            endCursor: null,
            hasNextPage: false,
          },
          edges: [],
        };
      },
    });
  },
});

export const Edge = objectType({
  name: "Edge",
  definition(t) {
    t.string("cursor");
    t.field("node", {
      type: Post,
    });
  },
});

export const PageInfo = objectType({
  name: "PageInfo",
  definition(t) {
    t.string("endCursor");
    t.boolean("hasNextPage");
  },
});

export const Response = objectType({
  name: "Response",
  definition(t) {
    t.field("pageInfo", { type: PageInfo });
    t.list.field("edges", {
      type: Edge,
    });
  },
});

export const CreatePostMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createPost", {
      type: Post,
      args: {
        title: nonNull(stringArg()),
        description: nonNull(stringArg()),
        park: nullable(stringArg()),
        // media:
      },
      async resolve(_parent, args, ctx) {
        if (!ctx.user) {
          throw new Error(`You need to be logged in to perform an action.`);
        }

        const user = await ctx.prisma.user.findUnique({
          where: {
            email: ctx.user?.email,
          },
        });

        const newPost = {
          title: args.title,
          description: args.description,
          park: args.park,
        };

        return await ctx.prisma.post.create({
          data: newPost,
        });
      },
    });
  },
});
