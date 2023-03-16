/*
  Warnings:

  - You are about to drop the column `drow` on the `GameBotStat` table. All the data in the column will be lost.
  - You are about to drop the column `drow` on the `GameUserStat` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "GameBotStat" DROP COLUMN "drow",
ADD COLUMN     "draw" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "GameUserStat" DROP COLUMN "drow",
ADD COLUMN     "draw" INTEGER NOT NULL DEFAULT 0;
