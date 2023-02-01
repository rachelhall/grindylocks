import { Surface } from "@prisma/client";
import prisma from "lib/prisma/prisma";

import { builder } from "../builder";

builder.prismaObject("Park", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    description: t.exposeString("description"),
    surface: t.expose("surface", { type: Surface }),
    lat: t.exposeInt("lat"),
    lon: t.exposeInt("lon"),
    address_number: t.exposeInt("address_number"),
    street: t.exposeString("street"),
    post_code: t.exposeInt("post_code"),
    city: t.exposeString("city"),
    region: t.exposeString("region"),
    region_code: t.exposeString("region_code"),
    country: t.exposeString("country"),
    posts: t.relatedConnection("posts", {
      cursor: "id",
      query: {
        orderBy: { createdAt: "desc" },
      },
    }),
  }),
});

builder.queryField("parks", (t) =>
  t.prismaConnection({
    type: "Park",
    cursor: "id",
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.park.findMany({ ...query }),
  })
);

export const CreateParkInput = builder.inputType("CreateParkInput", {
  fields: (t) => ({
    name: t.string({ required: true }),
    description: t.string({ required: true }),
    surface: t.field({ type: Surface }),
    lat: t.int({ required: true }),
    lon: t.int({ required: true }),
    address_number: t.int({ required: true }),
    street: t.string({ required: true }),
    post_code: t.int({ required: true }),
    city: t.string({ required: true }),
    region: t.string({ required: true }),
    region_code: t.string({ required: true }),
    country: t.string({ required: true }),
  }),
});

builder.mutationField("createPark", (t) =>
  t.prismaField({
    type: "Park",
    args: {
      name: t.arg.string({ required: true }),
      description: t.arg.string({ required: true }),
      surface: t.arg({ type: Surface, required: true }),
      lat: t.arg.int({ required: true }),
      lon: t.arg.int({ required: true }),
      address_number: t.arg.int({ required: true }),
      street: t.arg.string({ required: true }),
      post_code: t.arg.int({ required: true }),
      city: t.arg.string({ required: true }),
      region: t.arg.string({ required: true }),
      region_code: t.arg.string({ required: true }),
      country: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const {
        name,
        description,
        surface,
        lat,
        lon,
        address_number,
        street,
        post_code,
        city,
        region,
        region_code,
        country,
      } = args;

      if (!ctx.user) {
        throw new Error("You have to be logged in to perform this action");
      }
      return prisma.park.create({
        ...query,
        data: {
          name,
          description,
          surface,
          lat,
          lon,
          address_number,
          street,
          post_code,
          city,
          region,
          region_code,
          country,
        },
      });
    },
  })
);
