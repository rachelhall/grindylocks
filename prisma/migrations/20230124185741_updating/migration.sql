/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Park` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Post` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Surface" AS ENUM ('CONCRETE', 'WOOD');

-- AlterTable
ALTER TABLE "Park" ADD COLUMN     "surface" "Surface" NOT NULL DEFAULT 'CONCRETE';

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "parkId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Park_id_key" ON "Park"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Post_id_key" ON "Post"("id");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_parkId_fkey" FOREIGN KEY ("parkId") REFERENCES "Park"("id") ON DELETE SET NULL ON UPDATE CASCADE;
