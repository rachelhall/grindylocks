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

import { Park } from "./Park";

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.string("id");
    t.string("user");
    t.string("account");
    t.string("title");
    t.string("description");
    t.string("comment");
    // t.field("park", {
    //   type: Park,
    //   resolve(root, args, ctx) {
    //     return ctx.prisma.post.findUnique({
    //       where: {
    //         id: root.id,
    //       },
    //     });
    //   },
    // });
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

export const PostEdge = objectType({
  name: "PostEdge",
  definition(t) {
    t.string("cursor");
    t.field("node", {
      type: Post,
    });
  },
});

export const PostPageInfo = objectType({
  name: "PostPageInfo",
  definition(t) {
    t.string("endCursor");
    t.boolean("hasNextPage");
  },
});

export const PostResponse = objectType({
  name: "PostResponse",
  definition(t) {
    t.field("pageInfo", { type: PostPageInfo });
    t.list.field("edges", {
      type: PostEdge,
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
        parkId: nullable(stringArg()),
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
          parkId: args.parkId,
        };

        return await ctx.prisma.post.create({
          data: newPost,
        });
      },
    });
  },
});
