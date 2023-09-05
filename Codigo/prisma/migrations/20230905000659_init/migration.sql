-- CreateTable
CREATE TABLE "Mae" (
    "cpf" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "telefone" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "dataNasc" TEXT NOT NULL,
    "endereco" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Bebe" (
    "nome" TEXT NOT NULL,
    "dataNasc" TEXT NOT NULL,
    "pesoNasc" INTEGER NOT NULL,
    "altura" INTEGER NOT NULL,
    "cpfMae" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "crmMedico" TEXT NOT NULL,
    CONSTRAINT "Bebe_cpfMae_fkey" FOREIGN KEY ("cpfMae") REFERENCES "Mae" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bebe_crmMedico_fkey" FOREIGN KEY ("crmMedico") REFERENCES "Medico" ("crm") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Medico" (
    "crm" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "especialidade" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Mae_cpf_key" ON "Mae"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Bebe_cpfMae_key" ON "Bebe"("cpfMae");

-- CreateIndex
CREATE UNIQUE INDEX "Bebe_crmMedico_key" ON "Bebe"("crmMedico");

-- CreateIndex
CREATE UNIQUE INDEX "Medico_crm_key" ON "Medico"("crm");
