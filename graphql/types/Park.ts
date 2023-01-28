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
    t.string("surface");
    t.int("lat");
    t.int("lon");
    t.int("address_number");
    t.string("street");
    t.int("post_code");
    t.string("city");
    t.string("region");
    t.string("region_code");
    t.string("country");
    t.list.field("posts", {
      type: Post,
      resolve(root, args, ctx) {
        return ctx.prisma.park
          .findUnique({
            where: {
              id: root.id,
            },
          })
          .posts();
      },
    });
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
            take: args.first!!,
            skip: 1,
            cursor: {
              id: args.after,
            },
          });
        } else {
          queryResults = await ctx.prisma.park.findMany({
            take: args.first!!,
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

export const ParkEdge = objectType({
  name: "ParkEdge",
  definition(t) {
    t.string("cursor");
    t.field("node", {
      type: Park,
    });
  },
});

export const ParkPageInfo = objectType({
  name: "ParkPageInfo",
  definition(t) {
    t.string("endCursor");
    t.boolean("hasNextPage");
  },
});

export const ParkResponse = objectType({
  name: "ParkResponse",
  definition(t) {
    t.field("ParkPageInfo", { type: ParkPageInfo });
    t.list.field("edges", {
      type: ParkEdge,
    });
  },
});

export const CreateParkMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createPark", {
      type: Park,
      args: {
        name: nonNull(stringArg()),
        description: nonNull(stringArg()),
        lat: nonNull(intArg()),
        lon: nonNull(intArg()),
        address_number: nonNull(intArg()),
        street: nonNull(stringArg()),
        post_code: nullable(intArg()),
        city: nonNull(stringArg()),
        region: nullable(stringArg()),
        region_code: nullable(stringArg()),
        country: nullable(stringArg()),
      },
      async resolve(_parent, args, ctx) {
        if (!ctx.user) {
          throw new Error(`You need to be logged in to perform an action.`);
        }

        const newPark = {
          name: args.name,
          description: args.description,
          lat: args.lat,
          lon: args.lon,
          address_number: args.address_number,
          street: args.street,
          post_code: args.post_code,
          city: args.city,
          region: args.region,
          region_code: args.region_code,
          country: args.country,
        };

        return await ctx.prisma.park.create({
          data: newPark,
        });
      },
    });
  },
});
