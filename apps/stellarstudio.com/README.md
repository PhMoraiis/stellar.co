# ✨ Stellar Studio

<div align="center">
  <h3>Transformando ideias em produtos digitais de alto impacto</h3>
  <p>Website institucional da Stellar Studio - Soluções completas em Design e Desenvolvimento</p>
</div>

---

## 🚀 Sobre o Projeto

Este é o website oficial da **Stellar Studio**, um estúdio criativo especializado em oferecer soluções de tecnologia de alta qualidade e acessíveis para pequenos empresários. 

Reconhecemos uma lacuna na indústria criativa: pequenas empresas frequentemente têm dificuldade em encontrar soluções de tecnologia de qualidade, porém acessíveis. É por isso que existimos.

### 🎯 Nossos Serviços

- **💻 Desenvolvimento Web** - Front-end e Back-end de alta performance
- **🛍️ E-commerce** - Soluções completas para vendas online
- **📱 Product Design** - UI/UX Design e Prototipagem
- **🔍 SEO & Otimização** - Atraímos novos clientes com websites estratégicos
- **🤝 Parcerias Contínuas** - Impulsionamos seu crescimento através de parcerias

---

## 🛠️ Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias de ponta:

### Core

- **[Next.js 15.3.3](https://nextjs.org/)** - Framework React com App Router e Turbopack
- **[React 19.1.0](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[TypeScript 5](https://www.typescriptlang.org/)** - Superset JavaScript tipado

### Styling

- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[PostCSS](https://postcss.org/)** - Processador CSS
- **[tw-animate-css](https://www.npmjs.com/package/tw-animate-css)** - Animações CSS para Tailwind

### UI Components & Animation

- **[Motion (Framer Motion) 12.6.2](https://motion.dev/)** - Biblioteca de animações para React
- **[Lenis 1.3.11](https://lenis.darkroom.engineering/)** - Smooth scroll library de alta performance
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis e sem estilo
  - Accordion, Avatar, Dialog, Separator, Slot, Tabs
- **[Vaul](https://vaul.emilkowal.ski/)** - Drawer component
- **[Lucide React](https://lucide.dev/)** - Ícones modernos
- **[Phosphor Icons](https://phosphoricons.com/)** - Família de ícones flexível

### Utilities

- **[class-variance-authority](https://cva.style/)** - Variantes de componentes
- **[clsx](https://github.com/lukeed/clsx)** - Utilitário para classes condicionais
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge de classes Tailwind

### Integrations

- **[Cal.com Embed](https://cal.com/)** - Sistema de agendamento integrado
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Suporte a temas

### Development Tools

- **[Biome](https://biomejs.dev/)** - Linter e formatter ultrarrápido
- **[pnpm](https://pnpm.io/)** - Gerenciador de pacotes eficiente

---

## 📦 Estrutura do Projeto

```
stellar.co/
├── public/
│   ├── fonts/           # Fontes customizadas (Movatif, Gorga)
│   └── images/          # Assets de imagens
├── src/
│   ├── app/             # App Router do Next.js
│   │   ├── globals.css  # Estilos globais
│   │   ├── layout.tsx   # Layout raiz
│   │   └── page.tsx     # Página principal
│   ├── components/      # Componentes React
│   │   ├── FAQ/
│   │   ├── Fast-About/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Logos/
│   │   ├── PreFooter/
│   │   ├── Pricing/
│   │   ├── Stats/
│   │   └── ui/          # Componentes UI reutilizáveis
│   ├── hooks/           # Custom React Hooks
│   └── lib/             # Utilitários e helpers
├── biome.json           # Configuração do Biome
├── components.json      # Configuração de componentes
├── next.config.ts       # Configuração do Next.js
├── postcss.config.mjs   # Configuração do PostCSS
├── tailwind.config.ts   # Configuração do Tailwind
└── tsconfig.json        # Configuração do TypeScript
```

---

## 🎨 Funcionalidades

### ✨ Animações de Scroll

Implementamos animações sofisticadas usando Motion (Framer Motion) que proporcionam uma experiência fluida e engajadora:

- **Scroll-triggered animations** com `whileInView`
- **Fade-in progressivo** em todos os componentes
- **Movimentos suaves** (vertical, horizontal, escala)
- **Delays estratégicos** para narrativa visual
- **Performance otimizada** com `viewport.once: true`

📖 Documentação completa: [SCROLL_ANIMATIONS.md](./SCROLL_ANIMATIONS.md)

### 🎯 Calculadora de Orçamento

Sistema interativo que permite aos clientes:

- Selecionar tipo de serviço (Desenvolvimento / Product Design)
- Escolher nível de urgência
- Adicionar entregas extras
- Visualizar estimativa em tempo real
- Enviar orçamento por e-mail

### 📅 Agendamento Integrado

- Integração com Cal.com
- Agendamento de reuniões direto no site
- Interface intuitiva e responsiva

### 🎨 Design System

- Componentes reutilizáveis e acessíveis
- Tipografia customizada (Movatif, Gorga)
- Paleta de cores consistente
- Dark mode support

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- pnpm instalado globalmente

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/PhMoraiis/stellar.co.git
cd stellar.co
```

2. Instale as dependências:

```bash
pnpm install
```

3. Execute o servidor de desenvolvimento:

```bash
pnpm dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

### Scripts Disponíveis

```bash
pnpm dev      # Inicia o servidor de desenvolvimento com Turbopack
pnpm build    # Cria a build de produção
pnpm start    # Inicia o servidor de produção
pnpm lint     # Executa o linter (Biome)
```

---

## 🎨 Customização

### Cores

As cores principais podem ser configuradas em `src/app/globals.css`:

- `--primaryds` - Cor primária (laranja)
- `--secondaryds` - Cor secundária (bege)
- `--primary` - Cor de fundo primária

### Fontes

Fontes customizadas localizadas em `public/fonts/`:

- **Movatif** - Família tipográfica principal
- **Gorga** - Fonte decorativa

### Componentes UI

Componentes base localizados em `src/components/ui/` seguem o padrão do shadcn/ui.

---

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

---

## ⚡ Performance

- ✅ **Turbopack** para builds ultrarrápidas
- ✅ **Otimização de imagens** automática do Next.js
- ✅ **Code splitting** automático
- ✅ **Server Components** para melhor performance
- ✅ **Animações otimizadas** com GPU acceleration

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os passos:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto é propriedade da **Stellar Studio**. Todos os direitos reservados.

---

## 📞 Contato

**Stellar Studio**

- 🌐 Website: [stellarbr.studio](https://stellarbr.studio)
- 📧 Email: <hello@stellarbr.studio>
- 📅 Agende um meet: [cal.com/stellar-studio](https://cal.com/stellar-studio)

---

## 🌟 Agradecimentos

- [Next.js](https://nextjs.org/) pela excelente framework
- [Vercel](https://vercel.com/) pelo hosting e ferramentas
- [Motion](https://motion.dev/) pelas incríveis animações
- [Radix UI](https://www.radix-ui.com/) pelos componentes acessíveis
- [Tailwind CSS](https://tailwindcss.com/) pelo framework CSS

---

<div align="center">
  <p>Feito com 🧡 pelo Philipe Morais para a Stellar Studio.</p>
  <p>© 2025 Stellar Studio. Todos os direitos reservados.</p>
</div>
