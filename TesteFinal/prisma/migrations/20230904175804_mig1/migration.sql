/*
  Warnings:

  - Made the column `nome` on table `Medico` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nome` on table `Mae` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Medico" (
    "crm" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "especialidade" TEXT NOT NULL
);
INSERT INTO "new_Medico" ("crm", "especialidade", "nome", "telefone") SELECT "crm", "especialidade", "nome", "telefone" FROM "Medico";
DROP TABLE "Medico";
ALTER TABLE "new_Medico" RENAME TO "Medico";
CREATE UNIQUE INDEX "Medico_crm_key" ON "Medico"("crm");
CREATE TABLE "new_Mae" (
    "cpf" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "telefone" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "dataNasc" DATETIME NOT NULL,
    "endereco" TEXT NOT NULL
);
INSERT INTO "new_Mae" ("cpf", "dataNasc", "endereco", "nome", "telefone") SELECT "cpf", "dataNasc", "endereco", "nome", "telefone" FROM "Mae";
DROP TABLE "Mae";
ALTER TABLE "new_Mae" RENAME TO "Mae";
CREATE UNIQUE INDEX "Mae_cpf_key" ON "Mae"("cpf");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
