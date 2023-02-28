/*
  Warnings:

  - You are about to alter the column `nickname` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(40)`.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "passwordUpdatedAt" TIMESTAMP(3),
ALTER COLUMN "nickname" SET DATA TYPE VARCHAR(40);
