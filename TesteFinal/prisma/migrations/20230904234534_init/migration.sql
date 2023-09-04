-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bebe" (
    "nome" TEXT NOT NULL,
    "dataNasc" TEXT NOT NULL,
    "pesoNasc" INTEGER NOT NULL,
    "altura" INTEGER NOT NULL,
    "cpfMae" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "crmMedico" TEXT NOT NULL,
    CONSTRAINT "Bebe_cpfMae_fkey" FOREIGN KEY ("cpfMae") REFERENCES "Mae" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bebe_crmMedico_fkey" FOREIGN KEY ("crmMedico") REFERENCES "Medico" ("crm") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Bebe" ("altura", "cpfMae", "crmMedico", "dataNasc", "nome", "pesoNasc") SELECT "altura", "cpfMae", "crmMedico", "dataNasc", "nome", "pesoNasc" FROM "Bebe";
DROP TABLE "Bebe";
ALTER TABLE "new_Bebe" RENAME TO "Bebe";
CREATE UNIQUE INDEX "Bebe_cpfMae_key" ON "Bebe"("cpfMae");
CREATE UNIQUE INDEX "Bebe_crmMedico_key" ON "Bebe"("crmMedico");
CREATE TABLE "new_Mae" (
    "cpf" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "telefone" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "dataNasc" TEXT NOT NULL,
    "endereco" TEXT NOT NULL
);
INSERT INTO "new_Mae" ("cpf", "dataNasc", "endereco", "nome", "telefone") SELECT "cpf", "dataNasc", "endereco", "nome", "telefone" FROM "Mae";
DROP TABLE "Mae";
ALTER TABLE "new_Mae" RENAME TO "Mae";
CREATE UNIQUE INDEX "Mae_cpf_key" ON "Mae"("cpf");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
