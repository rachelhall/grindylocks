/*
  Warnings:

  - You are about to drop the `Link` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_LinkToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_LinkToUser" DROP CONSTRAINT "_LinkToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_LinkToUser" DROP CONSTRAINT "_LinkToUser_B_fkey";

-- DropTable
DROP TABLE "Link";

-- DropTable
DROP TABLE "_LinkToUser";
