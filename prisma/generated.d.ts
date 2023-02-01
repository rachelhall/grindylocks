/* eslint-disable */
import type { Prisma, Account, User, Park, Post } from "./client";
export default interface PrismaTypes {
    Account: {
        Name: "Account";
        Shape: Account;
        Include: Prisma.AccountInclude;
        Select: Prisma.AccountSelect;
        OrderBy: Prisma.AccountOrderByWithRelationInput;
        WhereUnique: Prisma.AccountWhereUniqueInput;
        Where: Prisma.AccountWhereInput;
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Types: PrismaTypes["User"];
            };
        };
    };
    User: {
        Name: "User";
        Shape: User;
        Include: Prisma.UserInclude;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        RelationName: "Account";
        ListRelations: "Account";
        Relations: {
            Account: {
                Shape: Account[];
                Types: PrismaTypes["Account"];
            };
        };
    };
    Park: {
        Name: "Park";
        Shape: Park;
        Include: Prisma.ParkInclude;
        Select: Prisma.ParkSelect;
        OrderBy: Prisma.ParkOrderByWithRelationInput;
        WhereUnique: Prisma.ParkWhereUniqueInput;
        Where: Prisma.ParkWhereInput;
        RelationName: "posts";
        ListRelations: "posts";
        Relations: {
            posts: {
                Shape: Post[];
                Types: PrismaTypes["Post"];
            };
        };
    };
    Post: {
        Name: "Post";
        Shape: Post;
        Include: Prisma.PostInclude;
        Select: Prisma.PostSelect;
        OrderBy: Prisma.PostOrderByWithRelationInput;
        WhereUnique: Prisma.PostWhereUniqueInput;
        Where: Prisma.PostWhereInput;
        RelationName: "park";
        ListRelations: never;
        Relations: {
            park: {
                Shape: Park;
                Types: PrismaTypes["Park"];
            };
        };
    };
}