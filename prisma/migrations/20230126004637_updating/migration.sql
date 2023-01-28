-- AlterTable
ALTER TABLE "Park" ADD COLUMN     "address_number" INTEGER,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "lat" INTEGER,
ADD COLUMN     "lon" INTEGER,
ADD COLUMN     "post_code" INTEGER,
ADD COLUMN     "region" TEXT,
ADD COLUMN     "region_code" TEXT,
ADD COLUMN     "street" TEXT;
