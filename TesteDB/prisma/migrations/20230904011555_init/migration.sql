-- CreateTable
CREATE TABLE "Mae" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "nascimento" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Bebe" (
    "id_mae" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "dataNasc" DATETIME NOT NULL,
    "pesoNasc" REAL NOT NULL,
    "altura" REAL NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Mae_id_key" ON "Mae"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Bebe_id_mae_key" ON "Bebe"("id_mae");
