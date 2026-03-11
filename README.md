# 🚗 Clothing - Marketplace

![React Js](https://img.shields.io/badge/React_JS-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=firebase&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-039BE5?style=for-the-badge&logo=stripe&logoColor=white)

> Full-stack E-commerce focado em vestuário, integrando autenticação robusta, gestão de estado global e um fluxo de checkout profissional com Stripe.

---

## 💻 Sobre o Projeto

Este projeto simula uma experiência real de compra online. O diferencial técnico reside na arquitetura híbrida: utilizei o Firebase para agilidade no gerenciamento de usuários e banco de dados NoSQL, enquanto desenvolvi uma API independente em Node.js para processar pagamentos de forma segura, garantindo a proteção de chaves sensíveis e seguindo as melhores práticas de mercado.

## 🛠 Tecnologias Utilizadas

### Front-end

- **[React.js + TypeScript]**
- **[Styled Components]**
- **[Context API]**
- **[Firebase]**
- **[Tailwind]**

### Back-end (Checkout Service)

- **[Node.js & Express]**
- **[Stripe API]**
- **[CORS]**

---

### 📊 Arquitetura e Estado Global

- **Context API:** Centralização da lógica de autenticação e dados de anúncios, evitando o prop drilling e melhorando a manutenção do código.
- **Custom Hooks:** Abstração de lógicas complexas para componentes reutilizáveis e código mais limpo.

### 🎨 UI/UX Responsiva (Mobile-First)

- Interface construída com Tailwind CSS, garantindo que a experiência de compra seja idêntica e fluida tanto em dispositivos móveis quanto em desktops.

---

## ⚙️ Funcionalidades Principais

- [x] Autenticação Flexível: Login via Google OAuth ou e-mail/senha através do Firebase.
- [x] Catálogo Dinâmico: Listagem de produtos consumida em tempo real do Firestore.
- [x] Carrinho Inteligente: Gerenciamento de estado complexo com Context API, permitindo persistência e manipulação de quantidades.
- [x] Checkout Seguro: Integração com Stripe para processamento de pagamentos em ambiente seguro, redirecionando o usuário de volta para o site após a conclusão.
- [x] Design Responsivo: Interface moderna e adaptável para qualquer disposi

## 🏗️ Arquitetura do Projeto

- Para este projeto, optei por separar as responsabilidades em dois deploys distintos, demonstrando conhecimento em infraestrutura:

- [x] Client (Vercel): Interface do usuário e lógica de persistência de dados.
- [x] Payment API (Render): Servidor dedicado para comunicação segura com o Stripe, evitando a exposição de Secret Keys no front-end.

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js instalado (v18 ou superior).
- Uma conta no Firebase para configuração das chaves de API.

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone (https://github.com/JudsonCiribelli/seu-repositorio.git)
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Configure as variáveis de ambiente:**
   **Crie um arquivo .env.local na raiz e adicione suas credenciais do Firebase**
   - Front-end:

   ```Snippet de código
   REACT_APP_FIREBASE_API_KEY=...
   REACT_APP_API_URL=http://localhost:5001
   ```

   - Back-end:

   ```Snippet de código
   STRIPE_SECRET_API_KEY=...
   FRONT_END_URL=http://localhost:3000
   ```

4. **Rode o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

- Desenvolvido por Judson Rodrigues Ciribelli Filho 🚀
