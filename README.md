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