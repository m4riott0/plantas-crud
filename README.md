# 🌱 Plantas CRUD

CRUD completo de plantas desenvolvido com Next.js, TypeScript, Tailwind CSS, Prisma e banco de dados PostgreSQL (Neon). Um projeto simples, escalável e ideal para estudos e ponto de partida para aplicações fullstack com autenticação integrada.

## 🚀 Tecnologias

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Prisma ORM
* PostgreSQL (via Neon)
* 
## 📌 Funcionalidades

* ✅ Cadastro e autenticação de usuários
* 🔐 Middleware de proteção de rotas
* 🌿 CRUD de plantas:
  * Criar, listar, atualizar e excluir plantas
* 🧱 Integração com banco de dados PostgreSQL usando Prisma
* 💡 Estrutura organizada e pronta para escalar
* 📱 Design responsivo com Tailwind CSS

## 🛠 Instalação e Uso

### 📂 Clonando o repositório

```bash
git clone https://github.com/m4riott0/plantas-crud.git
cd plantas-crud
```

### 📦 Instalando dependências

```bash
npm install
```

ou

```bash
yarn install
```

### 🔐 Configurando variáveis de ambiente

Crie um arquivo `.env` baseado no `.env.example` com suas credenciais do banco de dados Neon e configurações do Auth.js.

### 🧱 Rodando as migrações do banco

```bash
npx prisma migrate dev
```

### 🚀 Iniciando o servidor de desenvolvimento

```bash
npm run dev
```

ou

```bash
yarn dev
```

Acesse em: `http://localhost:3000`

## 📝 Licença

MIT

---

Feito com 💚 por [m4riott0](https://github.com/m4riott0)

