/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Categoria` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Categoria` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Categoria" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_name_key" ON "Categoria"("name");
