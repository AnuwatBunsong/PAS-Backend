-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "admin_department_id_fkey";

-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "admin_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "ContactDetail" DROP CONSTRAINT "contact_detail_department_id_fkey";

-- DropForeignKey
ALTER TABLE "ContactDetail" DROP CONSTRAINT "contact_detail_ministry_id_fkey";

-- DropForeignKey
ALTER TABLE "Department" DROP CONSTRAINT "department_minisid_fkey";

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "admin_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "admin_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactDetail" ADD CONSTRAINT "contact_detail_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactDetail" ADD CONSTRAINT "contact_detail_ministry_id_fkey" FOREIGN KEY ("ministry_id") REFERENCES "Ministry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "department_minisid_fkey" FOREIGN KEY ("minisid") REFERENCES "Ministry"("id") ON DELETE SET NULL ON UPDATE CASCADE;
