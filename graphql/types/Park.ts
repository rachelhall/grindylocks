import {
  extendType,
  intArg,
  nonNull,
  nullable,
  objectType,
  stringArg,
} from "nexus";

import { Post } from "./Post";
import { User } from "./User";

export const Park = objectType({
  name: "Park",
  definition(t) {
    t.id("id");
    t.string("name");
    t.string("description");
    // t.list.field("users", {
    //   type: User,
    //   async resolve(_parent, _args, ctx) {
    //     return await ctx.prisma.park.findUnique({
    //       where: {
    //         id: _parent.id ?? "",
    //       },
    //     });
    //   },
    // });
  },
});

export const ParksQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("parks", {
      type: "Response",
      args: {
        first: intArg(),
        after: stringArg(),
      },
      async resolve(_, args, ctx) {
        let queryResults = null;

        if (args.after) {
          queryResults = await ctx.prisma.park.findMany({
            take: args.first,
            skip: 1,
            cursor: {
              id: args.after,
            },
          });
        } else {
          queryResults = await ctx.prisma.park.findMany({
            take: args.first,
          });
        }
        if (queryResults.length > 0) {
          const lastParkInResults = queryResults[queryResults.length - 1];
          const myCursor = lastParkInResults.id;

          const secondQueryResults = await ctx.prisma.park.findMany({
            take: args.first,
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
              hasNextPage: secondQueryResults.length >= args.first,
            },
            edges: queryResults.map((park) => ({
              cursor: park.id,
              node: park,
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
      type: Park,
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
    t.field("PageInfo", { type: PageInfo });
    t.list.field("edges", {
      type: Edge,
    });
  },
});

// export const CreateParkMutation = extendType({
//   type: "Mutation",
//   definition(t) {
//     t.nonNull.field("createPark", {
//       type: Park,
//       args: {
//         name: nonNull(stringArg()),
//         description: nonNull(stringArg()),
//         post: nullable(Post),
//       },
//       async resolve(_parent, args, ctx) {
//         if (!ctx.user) {
//           throw new Error(`You need to be logged in to perform an action.`);
//         }

//         const newPark = {
//           name: args.name,
//           description: args.description,
//           park: args.park,
//         };

//         return await ctx.prisma.park.create({
//           data: newPark,
//         });
//       },
//     });
//   },
// });
