# ONGManager

## Instalação para rodar o projeto

### Fazer a instalação dos repositorios seguindo a sequencia abaixo:


### 1° - Instalar os pacotes do NODE:

```bash
npm init -y
```

### 2° - Instalar as dependencias do Express para controle das rotas:

```bash
npm install express --save
```

```bash
npm i express-joi-validation joi --save
```

### 3° - Instalar as dependencias do banco de dados:

```bash
npm install --save mysql2
```

### 4° - Instalar as dependencias de segurança:

```bash
npm install bcrypt
```
```bash
npm install dotenv --save
```
```bash
npm install cors
```

### 5° - Instalar as dependencias de importação e manipulação de arquivo:

```bash
npm install multer
```
```bash
npm install fs
```

## Após instalar todas as dependencias basta rodar o projeto usando o comando abaixo:

```bash
node --watch app.js
```

## Ou

```bash
node app.js
```

## Observação

### O codigo do Banco de Dados está localizado no Trello, após rodar o banco de dados ai executa o projeto para não gerar erro ap iniciar o servidor.
