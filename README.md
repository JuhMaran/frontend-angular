# Frontend Angular

## Pré-Requisitos

Antes de criar o projeto, é importante garantir que o ambiente esteja configurado corretamente.

### Linguagens e Tecnologias

* JavaScript
* TypeScript
* HTML
* CSS ou SCSS

### Verificação de Versões

Execute os comandos abaixo no terminal para verificar as versões instaladas:

```bash
node -v
npm -v
ng version
```

### Versões Utilizadas

| Ferramenta      | Versão     |
| --------------- | ---------- |
| Angular CLI     | 20.3.6     |
| Node.js         | 22.20.0    |
| Package Manager | npm 11.6.1 |

### Instalação do Angular CLI

Caso o Angular CLI não esteja instalado ou precise atualizar para a última versão:

```bash
npm install -g @angular/cli@latest
```

### Principais Pacotes CLI

| Pacote                       | Versão              |
| :--------------------------- | :------------------ |
| `@angular-devkit/architect`  | 0.2003.5 (cli-only) |
| `@angular-devkit/core`       | 20.3.6 (cli-only)   |
| `@angular-devkit/schematics` | 20.3.6 (cli-only)   |
| `@schematics/angular`        | 20.3.6 (cli-only)   |

---

## Criação do Projeto Angular

Para criar o projeto, execute o comando no terminal:

```bash
ng new taptrack-frontend
```

Durante a criação, o Angular CLI fará algumas perguntas.
Abaixo estão as respostas recomendadas e utilizadas neste projeto:

| Pergunta                                                                                             | Resposta                   | Referência                                                                                                                                       |
| ---------------------------------------------------------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Which stylesheet format would you like to use?**                                                   | `Sass (SCSS)`              | [Sass Documentation](https://sass-lang.com/documentation/syntax#scss)                                                                            |
| **Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)?** | `Yes`                      | —                                                                                                                                                |
| **Do you want to create a 'zoneless' application without zone.js?**                                  | `No`                       | —                                                                                                                                                |
| **Which AI tools do you want to configure with Angular best practices?**                             | `Cursor`, `GitHub Copilot` | [Cursor Docs](https://docs.cursor.com/en/context/rules), [GitHub Copilot Docs](https://code.visualstudio.com/docs/copilot/copilot-customization) |

---

## Explicações Resumidas

* **SCSS** → Escolhido por oferecer recursos avançados de estilo, como variáveis, mixins e nesting.
* **SSR / SSG** → Ativado para permitir renderização no servidor, melhorando SEO e performance.
* **Zone.js** → Mantido (`No` para zoneless) para simplificar o ciclo de detecção de mudanças.
* **AI Tools** → Configuradas para auxiliar no desenvolvimento com sugestões inteligentes no editor.

---

## Referências

* [Angular.dev — Documentação Oficial](https://angular.dev)
* [Sass — SCSS Syntax](https://sass-lang.com/documentation/syntax#scss)
* [Cursor — Context Rules](https://docs.cursor.com/en/context/rules)
* [GitHub Copilot — Customization](https://code.visualstudio.com/docs/copilot/copilot-customization)

---

## Base Angular (Estrutura e Comandos)

### Objetivo

Criar a base do frontend Angular para a aplicação backend Container Measure. Este documento contém: estrutura de pastas sugerida, comandos `ng` / `mkdir` para criar módulos, componentes, services, interceptors, enums, models e exemplos de código (esqueleto) usando boas práticas Angular — DRY, SOLID e separação `core` / `shared` / `features`.

---

## 1. Visão Geral da Estrutura Sugerida (dentro do `src/app`)

```
src/app
├─ core/ # Serviços singletons, interceptors, guards, token providers
│ ├─ services/
│ │ └─ container-measure.service.ts
│ ├─ interceptors/
│ │ └─ http-error.interceptor.ts
│ ├─ models/ # modelos reutilizáveis internos (se necessário)
│ └─ core.module.ts
├─ shared/ # componentes, pipes e diretivas reutilizáveis
│ ├─ components/
│ │ └─ loading-spinner/
│ ├─ pipes/
│ └─ shared.module.ts
├─ models/ # enums/interfaces que representam DTOs do backend
│ ├─ enums/
│ │ ├─ container-category.enum.ts
│ │ └─ container-type.enum.ts
│ ├─ container-measure-request.model.ts
│ └─ container-measure-response.model.ts
├─ features/
│ └─ container-measure/
│ ├─ list/
│ │ └─ container-measure-list.component.ts
│ ├─ form/
│ │ └─ container-measure-form.component.ts
│ ├─ detail/
│ │ └─ container-measure-detail.component.ts
│ └─ container-measure-routing.module.ts
├─ app.module.ts
└─ app.routes.ts
```

> **Observação:** seu projeto já contém arquivos `app.config.ts` e `app.routes.ts`. Usaremos `app.config.ts` para obter `API_BASE_URL` e manter compatibilidade com a estrutura atual.

---

## 2. Comandos para criar pacotes / arquivos (Linux/macOS - adaptações para Windows)

> **Nota:** Angular CLI não tem um `enum` generator; para enums crie arquivos manualmente com `mkdir` + `cat/editor`. Para outros artefatos, usamos `ng generate`.

### Criar Patas Básicas

```bash
cd taptrack-frontend

mkdir src/app/core
mkdir src/app/core/services
mkdir src/app/core/interceptors
mkdir src/app/core/models

mkdir src/app/shared
mkdir src/app/shared/components
mkdir src/app/shared/pipes

mkdir src/app/models
mkdir src/app/models/enums

mkdir src/app/features
mkdir src/app/features/container-measure
mkdir src/app/features/container-measure/list
mkdir src/app/features/container-measure/form
mkdir src/app/features/container-measure/detail
```

### Gerar módulos e componentes (Angular CLI)

```bash
# Core e Shared
ng g module core --flat false --module app
ng g module shared --flat false --module app

# Feature module (container-measure)
ng g module features/container-measure --module app --route container-measure

# Componentes da feature
ng g component features/container-measure/list --export false
ng g component features/container-measure/form --export false
ng g component features/container-measure/detail --export false

# Service singleton no core
ng g service core/services/container-measure --skip-tests

# Interceptor
ng g interceptor core/interceptors/http-error --skip-tests
```

### Gerar Interfaces / Models

```bash
# Interfaces/models
ng g interface models/container-measure-request --type=model --skip-tests
ng g interface models/container-measure-response --type=model --skip-tests


# Se preferir criar enums manualmente (recomendado)
mkdir -p src/app/models/enums
# Ex: criar arquivos container-category.enum.ts e container-type.enum.ts com seu editor
```