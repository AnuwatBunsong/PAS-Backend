/*
  Warnings:

  - You are about to drop the column `minisid` on the `department` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "department" DROP CONSTRAINT "department_minisid_fkey";

-- AlterTable
ALTER TABLE "department" DROP COLUMN "minisid",
ADD COLUMN     "ministry_id" INTEGER;

-- AddForeignKey
ALTER TABLE "department" ADD CONSTRAINT "department_minisid_fkey" FOREIGN KEY ("ministry_id") REFERENCES "Ministry"("id") ON DELETE SET NULL ON UPDATE CASCADE;
