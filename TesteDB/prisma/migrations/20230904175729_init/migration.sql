/*
  Warnings:

  - The primary key for the `Mae` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Mae` table. All the data in the column will be lost.
  - You are about to drop the column `nascimento` on the `Mae` table. All the data in the column will be lost.
  - The primary key for the `Bebe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_mae` on the `Bebe` table. All the data in the column will be lost.
  - You are about to alter the column `altura` on the `Bebe` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.
  - You are about to alter the column `pesoNasc` on the `Bebe` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.
  - Added the required column `cpf` to the `Mae` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataNasc` to the `Mae` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpfMae` to the `Bebe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `crmMedico` to the `Bebe` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Medico" (
    "crm" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "especialidade" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Mae" (
    "cpf" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "telefone" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "dataNasc" DATETIME NOT NULL,
    "endereco" TEXT NOT NULL
);
INSERT INTO "new_Mae" ("endereco", "nome", "telefone") SELECT "endereco", "nome", "telefone" FROM "Mae";
DROP TABLE "Mae";
ALTER TABLE "new_Mae" RENAME TO "Mae";
CREATE UNIQUE INDEX "Mae_cpf_key" ON "Mae"("cpf");
CREATE TABLE "new_Bebe" (
    "nome" TEXT NOT NULL,
    "dataNasc" DATETIME NOT NULL,
    "pesoNasc" INTEGER NOT NULL,
    "altura" INTEGER NOT NULL,
    "cpfMae" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "crmMedico" TEXT NOT NULL,
    CONSTRAINT "Bebe_cpfMae_fkey" FOREIGN KEY ("cpfMae") REFERENCES "Mae" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bebe_crmMedico_fkey" FOREIGN KEY ("crmMedico") REFERENCES "Medico" ("crm") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Bebe" ("altura", "dataNasc", "nome", "pesoNasc") SELECT "altura", "dataNasc", "nome", "pesoNasc" FROM "Bebe";
DROP TABLE "Bebe";
ALTER TABLE "new_Bebe" RENAME TO "Bebe";
CREATE UNIQUE INDEX "Bebe_cpfMae_key" ON "Bebe"("cpfMae");
CREATE UNIQUE INDEX "Bebe_crmMedico_key" ON "Bebe"("crmMedico");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Medico_crm_key" ON "Medico"("crm");
