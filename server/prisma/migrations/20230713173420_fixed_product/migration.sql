-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_idCategoria_fkey";

-- DropIndex
DROP INDEX "Product_idCategoria_key";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "idCategoria" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categoria"("id") ON DELETE SET NULL ON UPDATE SET NULL;
