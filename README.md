# O CÓDIGO FINAL ESTÁ NA PASTA CODIGO.

## Utilizado:

- Typescript
- Prisma
- Visual Paradigm

## Contribuintes:

- [Paulo Said](https://github.com/PauloSaid)
- [Matheus Muruci](https://github.com/Matheusmslopes)

## Descrição do projeto

Um berçário deseja informatizar suas operações. Quando um bebê nasce, algumas informações são armazenadas sobre ele, tais como: nome, data do nascimento, peso do nascimento, altura, a mãe deste bebê e o médico que fez seu parto. Para as mães, o berçário também deseja manter um controle, guardando informações como: nome, endereço, telefone e data de nascimento. Para os médicos, é importante saber: CRM, nome, telefone celular e especialidade.



# Preparando o ambiente

Siga os seguintes passos para inicializar o trabalho

```npm init -y```

## Instalar o Typescript

```npm install typescript --save-dev```

## Inicializar e Configurar o Typescript

```npx tsc --init```

## Formato do tsconfig.json recomendado:

```{
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

## Instalando o Prisma (ORM):

```npm install prisma --save-dev```

```npx prisma init --datasource-provider sqlite```

## Como compilar o projeto

```npx tsc``` - Transforma typscript -> javascript :

```node ./dist/nome.js``` - roda o código que anteriormente foi passado para javascript.
