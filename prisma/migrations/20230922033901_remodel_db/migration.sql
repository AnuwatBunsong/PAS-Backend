-- CreateEnum
CREATE TYPE "userrole" AS ENUM ('SUPER_ADMIN', 'ADMIN');

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR,
    "password" VARCHAR,
    "role" "userrole",
    "picture" VARCHAR,
    "organization_id" INTEGER,
    "department_id" INTEGER,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactDetail" (
    "id" SERIAL NOT NULL,
    "department_id" INTEGER,
    "ministry_id" INTEGER,
    "hotline" VARCHAR,
    "fax" VARCHAR,
    "phone" VARCHAR,
    "mobile" VARCHAR,
    "email" VARCHAR,
    "name " VARCHAR(50),
    "position " VARCHAR(128),
    "adderr " VARCHAR(256),
    "picture " VARCHAR(50),

    CONSTRAINT "contact_detail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "minisid" INTEGER,
    "name" VARCHAR,

    CONSTRAINT "department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ministry" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR,

    CONSTRAINT "ministry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR,
    "logo" VARCHAR,

    CONSTRAINT "organization_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "admin_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "admin_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "Organization"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ContactDetail" ADD CONSTRAINT "contact_detail_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ContactDetail" ADD CONSTRAINT "contact_detail_ministry_id_fkey" FOREIGN KEY ("ministry_id") REFERENCES "Ministry"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "department_minisid_fkey" FOREIGN KEY ("minisid") REFERENCES "Ministry"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
