# Noctua (API)

Noctua é um sistema de blog desenvolvido para conectar estudantes e professores. 
Professores podem criar, editar e organizar conteúdos educativos, enquanto estudantes têm acesso a esses materiais para aprendizado e interação por meio de comentários.

## Funcionalidades

### Para Professores
- Criar, editar e excluir posts.
- Organizar posts em categorias.
- Gerenciar categorias (criar, editar, excluir).

### Para Estudantes
- Visualizar posts e categorias.
- Comentar nos posts.

## Tecnologias Utilizadas
- **Backend**: Node.js com Express
- **Banco de Dados**: MySql com ORM Sequelize
- **Autenticação**: JWT (JSON Web Token)

## Como Executar o Projeto

### Requisitos
- Node.js (v18+ recomendado)
- MySql
- Gerenciador de pacotes (npm ou yarn)

### Passos para Instalação
1. Clone o repositório:
   ```bash
   git clone https://https://github.com/ejuniorls/noctua-api.git
   cd noctua-api
   ```
2. Instale as dependências do backend:
   ```bash
   npm install
   ```
3. Configure o banco de dados MySql e copie o arquivo `.env.example` e renomeie par `.env` no diretório do projeto com as seguintes variáveis:

4. Execute as migrações do banco:
   ```bash
   npx prisma migrate dev
   ```
5. Inicie o servidor:
   ```bash
   npm run dev
   ```

O backend da API estará disponível em [http://localhost:3000](http://localhost:3000).

## Contribuições
Contribuições são bem-vindas! Por favor, envie um pull request com suas sugestões ou melhorias.

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais informações.

