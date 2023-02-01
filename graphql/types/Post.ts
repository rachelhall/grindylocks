import { builder } from "graphql/builder";
import prisma from "lib/prisma/prisma";

builder.prismaObject("Post", {
  fields: (t) => ({
    id: t.exposeID("id"),

    // createdAt: t.expose('createdAt', { type: 'DateTime' }),
    // updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
    title: t.exposeString("post"),
    description: t.exposeString("description"),
    park: t.relation("park"),
  }),
});

builder.queryField("posts", (t) =>
  t.prismaConnection({
    type: "Post",
    cursor: "id",
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.post.findMany({ ...query }),
  })
);

const CreatePostInput = builder.inputType("CreatePostInput", {
  fields: (t) => ({
    title: t.string({ required: true }),
    description: t.string({ required: true }),
    parkId: t.id({ required: true }),
  }),
});

builder.mutationField("createPost", (t) =>
  t.prismaField({
    type: "Post",
    args: {
      input: t.arg({ type: CreatePostInput, required: true }),
    },
    resolve: (query, _, { input }) =>
      prisma.post.create({
        ...query,
        data: {
          title: input.title,
          description: input.description,
          park: {
            connect: {
              id: input.parkId.toString(),
            },
          },
        },
      }),
  })
);
