/*
  Warnings:

  - You are about to drop the column `adderr ` on the `ContactDetail` table. All the data in the column will be lost.
  - You are about to drop the column `name ` on the `ContactDetail` table. All the data in the column will be lost.
  - You are about to drop the column `picture ` on the `ContactDetail` table. All the data in the column will be lost.
  - You are about to drop the column `position ` on the `ContactDetail` table. All the data in the column will be lost.
  - You are about to drop the `Department` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ContactDetail" DROP CONSTRAINT "contact_detail_department_id_fkey";

-- DropForeignKey
ALTER TABLE "Department" DROP CONSTRAINT "department_minisid_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "admin_department_id_fkey";

-- AlterTable
ALTER TABLE "ContactDetail" DROP COLUMN "adderr ",
DROP COLUMN "name ",
DROP COLUMN "picture ",
DROP COLUMN "position ",
ADD COLUMN     "adderr" VARCHAR(256),
ADD COLUMN     "name" VARCHAR(50),
ADD COLUMN     "picture" VARCHAR(50),
ADD COLUMN     "position" VARCHAR(128);

-- AlterTable
ALTER TABLE "Ministry" ADD COLUMN     "organization_id" INTEGER NOT NULL DEFAULT 1;

-- DropTable
DROP TABLE "Department";

-- CreateTable
CREATE TABLE "department" (
    "id" SERIAL NOT NULL,
    "minisid" INTEGER,
    "name" VARCHAR,

    CONSTRAINT "department_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "admin_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactDetail" ADD CONSTRAINT "contact_detail_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "department" ADD CONSTRAINT "department_minisid_fkey" FOREIGN KEY ("minisid") REFERENCES "Ministry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ministry" ADD CONSTRAINT "Ministry_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
