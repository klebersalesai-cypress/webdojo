# Documentação dos Testes Automatizados - Webdojo

Este projeto contém os testes automatizados da aplicação **Webdojo**, utilizando o framework **Cypress** para testes end-to-end na aplicação web.

A aplicação Webdojo está no mesmo repositório dos testes. Portanto, antes de executar os testes automatizados, é necessário iniciar a aplicação localmente.

---

## Tecnologias Utilizadas

- Cypress
- JavaScript
- Node.js
- npm
- Serve

---

## Estrutura do Projeto Cypress

A estrutura principal dos testes está localizada dentro da pasta `cypress`.

```bash
cypress/
├── e2e/
│   └── login.cy.js
│
├── fixtures/
│   ├── cep.json
│   ├── consultancy.json
│   └── document.pdf
│
└── support/
    ├── commands.js
    ├── e2e.js
    └── utils.js
```

---

## Descrição das Pastas e Arquivos

### `cypress/e2e`

Esta pasta contém os arquivos de testes end-to-end.

Os testes end-to-end simulam o comportamento real do usuário dentro da aplicação, como login, navegação, preenchimento de formulários, validações e fluxos principais.

Exemplo:

```bash
cypress/e2e/login.cy.js
```

O arquivo `login.cy.js` contém os testes relacionados ao fluxo de login da aplicação Webdojo.

---

### `cypress/fixtures`

A pasta `fixtures` contém arquivos de dados utilizados durante a execução dos testes.

Esses arquivos ajudam a manter os testes mais organizados, evitando que dados fixos fiquem diretamente dentro dos arquivos de teste.

Arquivos disponíveis:

```bash
cep.json
consultancy.json
document.pdf
```

#### `cep.json`

Arquivo utilizado para armazenar dados relacionados a CEP.

Pode ser usado em testes que validam preenchimento automático de endereço, consulta de CEP ou cenários relacionados a localização.

#### `consultancy.json`

Arquivo utilizado para armazenar dados relacionados a consultoria.

Pode conter informações como nome, e-mail, telefone, mensagem ou outros dados necessários para preencher formulários durante os testes.

#### `document.pdf`

Arquivo PDF utilizado em testes que envolvem upload de documento.

---

### `cypress/support`

A pasta `support` contém arquivos de suporte, comandos customizados e funções auxiliares utilizadas pelos testes.

Arquivos disponíveis:

```bash
commands.js
e2e.js
utils.js
```

#### `commands.js`

Arquivo utilizado para criar comandos customizados do Cypress.

Exemplo:

```javascript
Cypress.Commands.add('login', () => {
  // comando customizado de login
})
```

Comandos customizados ajudam a reduzir repetição de código e deixam os testes mais limpos.

#### `e2e.js`

Arquivo de configuração global dos testes end-to-end.

Este arquivo é carregado automaticamente antes da execução dos testes e pode ser usado para importar comandos, configurações globais ou comportamentos compartilhados.

#### `utils.js`

Arquivo utilizado para armazenar funções auxiliares.

Essas funções podem ser reutilizadas em diferentes testes, deixando o código mais organizado e fácil de manter.

---

## Pré-requisitos

Antes de executar os testes, é necessário ter instalado:

- Node.js
- npm
- Dependências do projeto instaladas

Para instalar as dependências, execute:

```bash
npm install
```

---

## Executando a Aplicação Webdojo

A aplicação Webdojo está no mesmo repositório dos testes.

Antes de rodar os testes automatizados, execute o seguinte comando para iniciar a aplicação:

```bash
npm run dev
```

Este comando inicia a aplicação localmente utilizando:

```json
"dev": "serve -s dist -p 3000"
```

A aplicação será executada na porta:

```bash
http://localhost:3000
```

---

## Scripts Disponíveis

Os scripts de execução estão configurados no arquivo `package.json`.

```json
"scripts": {
  "dev": "serve -s dist -p 3000",
  "test": "npx cypress run --config viewportWidth=1440,viewportHeight=900",
  "test:ui": "npx cypress open",
  "test:login": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=1440,viewportHeight=900",
  "test:login:mobile": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=414,viewportHeight=896"
}
```

---

## Como Executar os Testes

### 1. Iniciar a aplicação

Antes de executar qualquer teste, inicie a aplicação Webdojo:

```bash
npm run dev
```

A aplicação ficará disponível em:

```bash
http://localhost:3000
```

---

### 2. Executar todos os testes em modo headless

Para executar todos os testes pelo terminal, use:

```bash
npm run test
```

Este comando executa o Cypress em modo headless com a seguinte configuração de viewport:

```bash
viewportWidth=1440
viewportHeight=900
```

Esse tamanho simula uma tela desktop.

---

### 3. Abrir o Cypress em modo interativo

Para abrir a interface visual do Cypress, execute:

```bash
npm run test:ui
```

Este modo é útil durante o desenvolvimento dos testes, pois permite visualizar a execução passo a passo.

---

### 4. Executar apenas os testes de login

Para executar somente o arquivo de teste de login em modo desktop:

```bash
npm run test:login
```

Este comando executa o arquivo:

```bash
cypress/e2e/login.cy.js
```

Com viewport:

```bash
1440x900
```

---

### 5. Executar os testes de login em modo mobile

Para executar os testes de login simulando um dispositivo mobile:

```bash
npm run test:login:mobile
```

Este comando executa o mesmo arquivo de teste:

```bash
cypress/e2e/login.cy.js
```

Com viewport:

```bash
414x896
```

Esse tamanho simula uma tela mobile.

---

## Viewports Utilizados

O projeto possui configurações diferentes para execução em desktop e mobile.

### Desktop

```bash
viewportWidth=1440
viewportHeight=900
```

Usado nos comandos:

```bash
npm run test
npm run test:login
```

### Mobile

```bash
viewportWidth=414
viewportHeight=896
```

Usado no comando:

```bash
npm run test:login:mobile
```

---

## Fluxo Recomendado para Execução Local

Para executar os testes localmente, siga a ordem abaixo:

### Terminal 1

Inicie a aplicação:

```bash
npm run dev
```

### Terminal 2

Execute os testes:

```bash
npm run test
```

Ou, para abrir a interface do Cypress:

```bash
npm run test:ui
```

---

## Boas Práticas do Projeto

Algumas boas práticas aplicadas ou recomendadas para este projeto:

- Manter os testes dentro da pasta `cypress/e2e`
- Utilizar `fixtures` para dados de teste
- Criar comandos customizados em `commands.js`
- Criar funções reutilizáveis em `utils.js`
- Evitar repetição de código nos testes
- Separar testes por funcionalidade
- Usar nomes descritivos para arquivos e cenários de teste
- Executar testes em desktop e mobile quando necessário

---

## Exemplo de Organização de Teste

Exemplo de estrutura básica para um teste Cypress:

```javascript
describe('Login', () => {
  it('Deve realizar login com sucesso', () => {
    cy.visit('/')

    cy.get('[data-cy="email"]').type('usuario@email.com')
    cy.get('[data-cy="password"]').type('senha123')
    cy.get('[data-cy="login-button"]').click()

    cy.url().should('include', '/dashboard')
  })
})
```

---

## Exemplo de Uso de Fixtures

Os arquivos dentro de `fixtures` podem ser utilizados nos testes da seguinte forma:

```javascript
cy.fixture('consultancy').then((data) => {
  cy.get('[data-cy="name"]').type(data.name)
  cy.get('[data-cy="email"]').type(data.email)
})
```

---

## Exemplo de Upload de Documento

Caso seja necessário usar o arquivo `document.pdf` em um teste de upload:

```javascript
cy.get('input[type="file"]').selectFile('cypress/fixtures/document.pdf')
```

---

## Comandos Customizados

Comandos customizados podem ser criados no arquivo:

```bash
cypress/support/commands.js
```

Exemplo:

```javascript
Cypress.Commands.add('login', (email, password) => {
  cy.get('[data-cy="email"]').type(email)
  cy.get('[data-cy="password"]').type(password)
  cy.get('[data-cy="login-button"]').click()
})
```

Depois, o comando pode ser usado em qualquer teste:

```javascript
cy.login('usuario@email.com', 'senha123')
```

---

## Troubleshooting

### Erro: aplicação não está carregando

Verifique se a aplicação foi iniciada com:

```bash
npm run dev
```

E confirme se ela está disponível em:

```bash
http://localhost:3000
```

### Erro: Cypress não encontrado

Execute a instalação das dependências:

```bash
npm install
```

Depois tente novamente:

```bash
npm run test
```

### Erro: teste falhando por elemento não encontrado

Verifique se:

- O seletor utilizado no teste está correto
- A página terminou de carregar
- O elemento existe na versão desktop e mobile
- O elemento possui o mesmo comportamento em diferentes resoluções

---

## Sugestão de Convenção para Nomes de Testes

Para manter o projeto organizado, recomenda-se utilizar nomes claros e descritivos.

Exemplos:

```bash
login.cy.js
consultancy.cy.js
upload-document.cy.js
cep.cy.js
```

---

## Sugestão de Padrão para Commits

Exemplos de commits:

```bash
test: add login validation tests
test: add mobile login scenario
test: add consultancy form tests
test: improve upload document test
fix: update login selectors
```

---

## Resumo dos Comandos

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia a aplicação Webdojo na porta 3000 |
| `npm run test` | Executa todos os testes em modo headless |
| `npm run test:ui` | Abre a interface visual do Cypress |
| `npm run test:login` | Executa apenas os testes de login em desktop |
| `npm run test:login:mobile` | Executa os testes de login em resolução mobile |

---

## Conclusão

Este projeto utiliza Cypress para automatizar testes end-to-end da aplicação Webdojo.

A aplicação deve ser iniciada localmente com:

```bash
npm run dev
```

Depois disso, os testes podem ser executados via terminal ou pela interface visual do Cypress.

O projeto está organizado utilizando as pastas padrão do Cypress:

```bash
cypress/e2e
cypress/fixtures
cypress/support
```

Essa estrutura facilita a manutenção, reutilização de código e evolução dos testes automatizados.
