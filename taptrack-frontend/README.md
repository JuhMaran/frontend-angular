# TaptrackFrontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---

## Estrutura do Frontend

```text
src/
├── app/
│   ├── core/                     # Núcleo da aplicação (serviços, guards, interceptors, etc.)
│   │   ├── config/               # Configurações globais (ex: app-config, environment utils)
│   │   ├── guards/               # AuthGuards e rotas protegidas
│   │   ├── interceptors/         # HTTP interceptors (token, logging, error handling)
│   │   ├── models/               # Modelos globais (DTOs, enums comuns)
│   │   ├── services/             # Serviços compartilhados (ex: AuthService, BaseHttpService)
│   │   ├── utils/                # Funções utilitárias puras e helpers
│   │   ├── core.module.ts
│   │   └── index.ts
│   │
│   ├── shared/                   # Componentes, diretivas e pipes reutilizáveis
│   │   ├── components/           # Ex: ButtonComponent, CardComponent, TableComponent, etc.
│   │   ├── directives/           # Diretivas utilitárias
│   │   ├── pipes/                # Pipes (formatadores, máscaras, etc.)
│   │   ├── validators/           # Validações personalizadas
│   │   ├── shared.module.ts
│   │   └── index.ts
│   │
│   ├── features/                 # Cada domínio de negócio isolado (DDD-friendly)
│   │   ├── container-measures/
│   │   │   ├── components/       # Componentes específicos do domínio
│   │   │   │   ├── list-container-measures/
│   │   │   │   │   ├── list-container-measures.component.ts
│   │   │   │   │   ├── list-container-measures.component.html
│   │   │   │   │   ├── list-container-measures.component.scss
│   │   │   │   │   └── index.ts
│   │   │   ├── models/           # Enums e DTOs específicos do domínio
│   │   │   │   ├── container-category.enum.ts
│   │   │   │   ├── container-type.enum.ts
│   │   │   │   ├── container-measure-request.dto.ts
│   │   │   │   ├── container-measure-response.dto.ts
│   │   │   │   └── index.ts
│   │   │   ├── services/         # Serviços HTTP e lógica de domínio
│   │   │   │   ├── container-measure.service.ts
│   │   │   │   └── index.ts
│   │   │   ├── pages/            # Páginas (views) integradas ao roteamento
│   │   │   │   ├── container-measures-page/
│   │   │   │   │   ├── container-measures-page.component.ts
│   │   │   │   │   ├── container-measures-page.component.html
│   │   │   │   │   └── container-measures-page.component.scss
│   │   │   ├── container-measures-routing.module.ts
│   │   │   ├── container-measures.module.ts
│   │   │   └── index.ts
│   │   │
│   │   └── (outros domínios futuros...)
│   │
│   ├── layout/                   # Estrutura visual principal (header, sidebar, footer)
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── sidebar/
│   │   │   ├── footer/
│   │   └── layout.module.ts
│   │
│   ├── app-routing.module.ts     # Rotas globais
│   ├── app.component.ts
│   ├── app.module.ts
│   └── index.ts
│
├── assets/                       # Imagens, ícones, traduções, etc.
│   ├── i18n/
│   └── styles/
│       ├── _variables.scss
│       ├── _mixins.scss
│       ├── main.scss
│
├── environments/                 # Configurações de ambiente
│   ├── environment.ts
│   ├── environment.prod.ts
│   └── proxy.conf.json
│
└── main.ts
```

## Comandos

```bash
# Criar aplicação Standalone
ng new taptrack-frontend 

# Criar aplicação Não Standalone
ng new taptrack-frontend --no-standalone

# Criar Pasta/Diretório
mkdir src/app/models/enums

# Criar Module
ng generate module core
ng generate module shared
ng generate module layout

# Criar Component
ng generate component features/container-measures/presentation/pages/list/container-measure-list --type component --skip-tests

# Criar Service
ng generate service features/container-measures/services/container-measure --type service

# Criar Interface
ng generate interface models/interfaces/container-measure-response --type interface

# Criar Enum
ng generate enum features/container-measures/models/container-category --type enum
ng generate enum features/container-measures/models/container-type --type enum

# Criar Interface (Model)
ng generate interface features/container-measures/models/container-measure-request --type model
ng generate interface features/container-measures/models/container-measure-response --type model

# Criar Interceptor
ng generate interceptor core/interceptors/http-error --type interceptor 

# Listar arquivos dentro de /app
ls src/app 

ng analytics disable --global

# Criar ambientes de desenvolvimento e produção
ng generate environments --project taptrack-frontend
```

* `--skip-tests`: não incluir arquivo de teste
* `--type`: incluir o tipo de arquivo (exemplo: interface, interceptor, model etc.)

---

## Environment

No **Angular CLI (v20+)**, os arquivos de ambiente não são criados automaticamente em projetos **Standalone SSR**, então você precisa criá-los **manualmente** ou **gerar via comando**.

### Opção 1: Criar manualmente (recomendada para Standalone SSR)

No terminal, dentro do projeto Angular (`taptrack-frontend`):

```bash
cd taptrack-frontend/src
mkdir environments
```

Crie o arquivo `environment.development.ts` dentro dessa pasta:

`src/environments/environment.development.ts`

```ts
export const environment = {
    production: false,
    apiUrl: 'http://localhost:8080/api/v1/container-measures'
};
```

(Opcional) Crie também o arquivo de produção:

`src/environments/environment.ts`

```ts
    export const environment = {
    production: true,
    apiUrl: 'https://api.taptrack.com/api/v1/container-measures'
};
```

### Opção 2: Gerar com Angular CLI

O Angular 20 traz um schematic interno para gerar ambientes automaticamente.

Execute o comando:

```bash
ng generate environments --project taptrack-frontend
```

Isso criará automaticamente a pasta `src/environments` com os arquivos:

```text
src/
└─ environments/
   ├─ environment.development.ts
   └─ environment.ts
```

Você então só precisa editar o conteúdo de `environment.development.ts`:

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api/v1/container-measures'
};
```

---

## Executar a Aplicação

Durante o build:

* `ng serve --open`: usa `environment.development.ts`
* `ng build --configuration=production`: usa `environment.ts`

Essa substituição é configurada automaticamente no `angular.json`:

```json
"fileReplacements": [
  {
    "replace": "src/environments/environment.ts",
    "with": "src/environments/environment.development.ts"
  }
]
```

---

## Estrutura /taptrack-frontend

```text
TAPTRACK-FRONTEND
├── .angular/
├── .cursor/          # IA Cursor
├── .github/          # IA GitHub Copilot
├── .junie/           # IA Guide Lines
├── .vscode/
├── node_modules/
├── public/
│   └── favicon.ico
├── src/
│   └── app/
├── .editorconfig
├── angular.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

## Estrutura /src

```text
src/
├── app/
│   ├── core/                     # Módulo central (singleton services, interceptors, guards, configs)
│   │   ├── config/
│   │   │   ├── app.config.ts
│   │   │   └── environment.config.ts
│   │   ├── interceptors/
│   │   │   ├── auth.interceptor.ts
│   │   │   └── http-error.interceptor.ts
│   │   ├── guards/
│   │   │   └── auth.guard.ts
│   │   ├── services/
│   │   │   ├── http/
│   │   │   │   └── api-client.service.ts
│   │   │   └── storage/
│   │   │       └── local-storage.service.ts
│   │   ├── models/
│   │   │   ├── base.model.ts
│   │   │   └── response.model.ts
│   │   └── core.module.ts
│   ├── shared/                   # Componentes, pipes, directives reutilizáveis
│   │   ├── components/
│   │   │   ├── button/
│   │   │   │   ├── button.component.ts
│   │   │   │   ├── button.component.html
│   │   │   │   └── button.component.scss
│   │   │   └── table/
│   │   │       ├── table.component.ts
│   │   │       └── table.component.html
│   │   ├── directives/
│   │   ├── pipes/
│   │   └── shared.module.ts
│   ├── features/                 # Domínios / Módulos de negócio
│   │   ├── container-measures/
│   │   │   ├── application/      # Casos de uso / lógica de orquestração
│   │   │   │   └── measure.facade.ts
│   │   │   ├── domain/           # Entidades e Regras de Negócio (puro TypeScript)
│   │   │   │   ├── entities/
│   │   │   │   │   └── container-measure.entity.ts
│   │   │   │   ├── repositories/
│   │   │   │   │   └── container-measure.repository.ts (interface)
│   │   │   │   └── services/
│   │   │   │       └── validation.service.ts
│   │   │   ├── infrastructure/   # Implementações (HTTP, APIs)
│   │   │   │   ├── http/
│   │   │   │   │   └── container-measure.api.service.ts
│   │   │   │   └── mappers/
│   │   │   │       └── measure.mapper.ts
│   │   │   ├── presentation/     # Componentes de UI, rotas, states
│   │   │   │   ├── pages/
│   │   │   │   │   ├── list/
│   │   │   │   │   │   ├── container-measure-list.component.ts
│   │   │   │   │   │   ├── container-measure-list.component.html
│   │   │   │   │   │   └── container-measure-list.component.scss
│   │   │   │   │   └── form/
│   │   │   │   │       └── container-measure-form.component.ts
│   │   │   │   ├── routes/
│   │   │   │   │   └── container-measure.routes.ts
│   │   │   │   └── state/
│   │   │   │       └── container-measure.store.ts
│   │   │   └── index.ts          # Barrel para exportações
│   │   │
│   │   └── another-feature/
│   │       └── ...
│   ├── layouts/                  # Layouts e estrutura visual da aplicação
│   │   ├── main-layout/
│   │   │   ├── main-layout.component.ts
│   │   │   ├── main-layout.component.html
│   │   │   └── main-layout.component.scss
│   │   └── auth-layout/
│   │       └── ...
│   ├── app.routes.ts
│   ├── app.component.ts
│   ├── app.component.html
│   └── app.config.ts
├── environments/
│   ├── environment.development.ts
│   └── environment.ts
├── index.html
├── main.server.ts
├── main.ts
├── proxy.confi.json
├── server.ts
└── styles.scss
```

---

## Descrição dos Diretórios de Pacotes

* **Layout:** Componentes estruturais do app — cabeçalho, menu lateral, rodapé, etc. Separar a estrutura de navegação da lógica de domínio evita acoplamento.
* **Assets:** Conteúdo estático — ícones, traduções (`i18n`), imagens, e estilos globais SCSS.
* **Environments:** Configurações específicas de ambiente (`dev`, `prod`, etc.), incluindo `proxy.conf.json`.

### Boas práticas aplicadas

* Modularização por domínio (DDD friendly)
* Camadas claras (core, shared, features)
* Isolamento de responsabilidades
* Alta escalabilidade (cada domínio cresce independente)
* Facilita lazy loading de módulos
* Evita dependências circulares
* Pronto para integração contínua e testes unitários por módulo

### Organização de imports

Adicione **paths customizados** no `tsconfig.json` para simplificar imports:

```json
"compilerOptions": {
  "baseUrl": "src",
  "paths": {
    "@core/*": ["app/core/*"],
    "@shared/*": ["app/shared/*"],
    "@features/*": ["app/features/*"]
  }
}
```

Assim, você pode importar assim:

```ts
import { BaseHttpService } from '@core/services/base-http.service';
import { ContainerMeasureService } from '@features/container-measures/services';
```

---

## Padrões e Princípios Aplicados

### 1. Clean Architecture

* `presentation` = camada UI (Angular Components)
* `application` = ccasos de uso / orquestração / facades
* `domain` = entidades e regras de negócio puras
* `infrastructure` = implementação concreta (APIs, persistência)

> Facilita **testabilidade**, **substituição de tecnologias**, **separação de dependências**.

### 2. SOLID

* Single Responsibility: Cada classe/serviço tem um único propósito.
* Open/Closed: Facades e Services podem ser estendidos sem modificação.
* Liskov Substitution: Interfaces para abstrair implementações (ex: `Repository`).
* Interface Segregation: Repositórios e casos de uso pequenos e focados.
* Dependency Inversion: Camada de domínio nunca depende de infra.

### 3. DRY

* Serviços genéricos (ex: `ApiClientService`)
* Módulos `Shared` e `Core` reduzem duplicações
* Barrel files (`index.ts`) para centralizar imports

### 4. Design Pattern usados

| Padrão                   | Onde aplicar              | Descrição                                         |
| ------------------------ | ------------------------- | ------------------------------------------------- |
| **Facade**               | `application/*.facade.ts` | Camada intermediária entre componentes e serviços |
| **Repository**           | `domain/repositories`     | Contratos para acesso a dados                     |
| **Strategy**             | `infrastructure/mappers`  | Converter dados da API de diferentes formas       |
| **Factory**              | `domain/entities`         | Criar entidades a partir de DTOs da API           |
| **Dependency Injection** | `CoreModule`              | Gerencia dependências compartilhadas              |

### 5. Configuração dos ambientes

`src/environments/environment.development.ts`

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api/v1'
};
```

`src/environments/environment.ts`

```ts
export const environment = {
  production: true,
  apiUrl: 'https://api.taptrack.com/api/v1'
};
```

---

## Exemplo de fluxo (Camada por camada)

```text
ContainerMeasureListComponent
        ↓
ContainerMeasureFacade (application)
        ↓
ContainerMeasureRepository (domain)
        ↓
ContainerMeasureApiService (infrastructure)
        ↓
HttpClient → environment.apiUrl
```
