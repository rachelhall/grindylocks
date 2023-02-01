import {
  InputFieldRef,
  InputShapeFromFields,
  MaybePromise,
} from "@pothos/core";
import { Account, Park, Post, User } from "@prisma/client";
import { GraphQLResolveInfo } from "graphql";
import { builder } from "graphql/builder";
import prisma from "lib/prisma/prisma";
import { queryComplexityPlugin } from "nexus";

builder.prismaObject("Account", {
  fields: (t) => ({
    id: t.exposeID("id"),
    email: t.exposeString("email"),
    name: t.exposeString("name"),
    pronouns: t.exposeString("pronouns"),
    bio: t.exposeString("bio"),
    avatar: t.exposeString("avatar"),
    user: t.relation("user"),
  }),
});

builder.queryField("posts", (t) =>
  t.prismaConnection({
    type: "Account",
    cursor: "id",
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.account.findMany({ ...query }),
  })
);

const CreateAccountInput = builder.inputType("CreateAccountInput", {
  fields: (t) => ({
    name: t.string({ required: true }),
    email: t.string({ required: true }),
    pronouns: t.string({ required: false }),
    bio: t.string({ required: false }),
    avatar: t.string({ required: false }),
    userId: t.id({ required: true }),
  }),
});

builder.mutationField("createAccount", (t) =>
  t.prismaField({
    type: "Account",
    args: {
      input: t.arg({ type: CreateAccountInput, required: true }),
    },
    resolve: (query, _, { input }) =>
      prisma.account.create({
        ...query,
        data: {
          name: input.name,
          email: input.email,
          pronouns: input.pronouns ?? "",
          bio: input.bio ?? "",
          avatar: input.avatar ?? "",
          user: {
            connect: {
              id: input.userId.toString(),
            },
          },
        },
      }),
  })
);
