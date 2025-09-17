# Chatbot RAG Admin - WhatsApp AI Assistant

## 📋 Sobre o Projeto

Sistema administrativo completo para gerenciamento de chatbot RAG (Retrieval-Augmented Generation) integrado ao WhatsApp Business API e potencializado pela OpenAI. Oferece uma interface moderna e intuitiva para monitoramento de conversas, gestão de base de conhecimento e análise de performance.

## 🚀 Funcionalidades Principais

### 🔐 Sistema de Autenticação
- Login e cadastro seguro com Supabase Auth
- Proteção de rotas e sessões persistentes
- Interface responsiva para autenticação

### 📊 Dashboard Administrativo
- **Métricas em Tempo Real**: Total de conversas, usuários únicos, taxa de resolução
- **Gráficos Analíticos**: Conversas por período, tempo de resposta, tendências
- **Status do Sistema**: Monitoramento de uptime e performance

### 💬 Gerenciamento de Conversas
- Lista de conversas recentes com status
- Filtros por status (ativa, resolvida, precisa atenção)
- Métricas de satisfação do usuário
- Histórico detalhado de mensagens

### 🧠 Base de Conhecimento (RAG)
- Upload e gerenciamento de documentos
- Indexação automática para busca semântica
- Status de processamento de documentos
- Métricas de precisão por fonte

### 🎨 Design System
- Interface moderna com Tailwind CSS
- Sistema de tokens semânticos para cores
- Suporte completo a modo escuro/claro
- Componentes reutilizáveis do shadcn/ui

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** com TypeScript
- **Tailwind CSS** para estilização
- **shadcn/ui** para componentes
- **Recharts** para gráficos
- **Lucide React** para ícones
- **React Router** para navegação

### Backend & Infraestrutura
- **Supabase** para backend-as-a-service
- **Supabase Auth** para autenticação
- **PostgreSQL** via Supabase
- **Real-time subscriptions** para atualizações em tempo real

### Ferramentas de Desenvolvimento
- **Vite** como build tool
- **TypeScript** para tipagem
- **ESLint** para linting
- **React Query** para gerenciamento de estado

## 🏗️ Arquitetura do Sistema

```
src/
├── pages/                 # Páginas principais
│   ├── Auth.tsx          # Autenticação
│   ├── Dashboard.tsx     # Dashboard principal
│   └── NotFound.tsx      # Página 404
├── components/
│   ├── ui/               # Componentes base do shadcn/ui
│   ├── dashboard/        # Componentes específicos do dashboard
│   └── ProtectedRoute.tsx # Proteção de rotas
├── hooks/
│   └── useAuth.tsx       # Hook de autenticação
├── integrations/
│   └── supabase/         # Configuração do Supabase
└── lib/
    └── utils.ts          # Utilitários
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+ instalado
- Conta no Supabase (opcional, para backend)

### Instalação
```bash
# Instale as dependências
npm install

# Execute o projeto em desenvolvimento
npm run dev
```

### Configuração do Supabase (Opcional)
O projeto já está configurado com Supabase. Para usar seu próprio projeto:
1. Crie um projeto no [Supabase](https://supabase.com)
2. Configure as variáveis de ambiente no arquivo `.env`

## 📦 Deploy para Produção

### Deploy Automático via Lovable
1. Abra seu projeto no [Lovable](https://lovable.dev/projects/72de9d20-a5c9-465c-b0f3-84a77387bb0a)
2. Clique em "Share" -> "Publish"
3. Seu projeto estará online em segundos!

### Build Local
```bash
# Gerar build otimizado
npm run build

# Preview do build
npm run preview
```

### Deploy Manual
Você pode fazer deploy em qualquer provedor que suporte sites estáticos:
- **Vercel**: Deploy automático via GitHub
- **Netlify**: Drag & drop da pasta `dist`
- **Cloudflare Pages**: Integração com Git

## 🔮 Próximas Funcionalidades

### Integrações Planejadas
- [ ] **WhatsApp Business API** - Integração completa
- [ ] **OpenAI API** - Processamento de linguagem natural
- [ ] **Banco Vetorial** - Para busca semântica (Pinecone/Weaviate)
- [ ] **Edge Functions** - Lógica de backend customizada

### Funcionalidades Avançadas
- [ ] **Analytics Avançados** - Relatórios personalizados
- [ ] **Multi-tenancy** - Suporte a múltiplas empresas
- [ ] **API REST** - Integração com sistemas externos
- [ ] **Webhooks** - Notificações em tempo real

## 🎯 Próximos Passos para Implementação

1. **Configurar WhatsApp Business API**
2. **Integrar OpenAI para processamento RAG**
3. **Implementar banco vetorial para busca semântica**
4. **Criar sistema de upload de documentos**
5. **Adicionar monitoramento em tempo real**

## 📄 Licença

Este projeto está sob a licença MIT.

---

**Desenvolvido com ❤️ usando [Lovable](https://lovable.dev)**
