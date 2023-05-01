# Automation Challenge by Apply Digital

> Automation technical challenge with JavaScript and [Playwright](https://playwright.dev/) 🎭

### The project uses structures for large-scale maintenance, performance and reuse, such as:

- Page Objects Model
- Centralized test data with control structure (factory)
- Multi-environment configuration (dynamic test data)
- Parallel execution (playwright bring it ready)
- Multiple browsers (playwright bring it ready)
- Deep validations (feature validated as a whole)
- Real e2e tests -> simulating user
- Happy and sad flow validation

---

## Delivery 🚀

To know about Test plan, Design, and Strategy: [delivery](DELIVERY.md).

---

## Requirements ⚡

- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [VSCode](https://code.visualstudio.com)

### VSCode Required Extensions

- `VisualStudioExptTeam.vscodeintellicode`
- `EditorConfig.EditorConfig`
- `dbaeumer.vscode-eslint`
- `esbenp.prettier-vscode`

### VSCode Recommended Extensions

- `christian-kohler.path-intellisense`
- `aaron-bond.better-comments`
- `PKief.material-icon-theme`
- `oderwat.indent-rainbow`
- `Gruntfuggly.todo-tree`
- `natqe.reload`

---

### Setup ⚙️

### Install Browser and Dependencies

1. Install project dependencies

```
yarn install
```

2. Install playwright dependencies

```
yarn setup
```

---

## How to Run 🎡

### Test Running

- Run all tests:

```
yarn test
```

- Run debug mode:

```
yarn test:debug
```

- Run headed mode:

```
yarn test:headed
```

### View Reports

- View html report:

```
yarn report:html
```

- View error trace:

```
yarn report:trace [path/url to trace.zip]
```

### Test Running Options

- Specify tag

```
-g [@tag_you_want]
```

- Specify browser

```
--project [chromium|firefox|webkit]
```

---

## Dependencies 🔧

- [playwright](https://playwright.dev)
- [expect-playwright](https://github.com/playwright-community/expect-playwright)
- [faker](https://fakerjs.dev)
- [eslint](https://eslint.org)
- [eslint-plugin-playwright](https://github.com/playwright-community/eslint-plugin-playwright)
- [prettier](https://prettier.io)

---

### Reports 📂

At the end of the execution, the test evidence will be generated in the folder `reports`.
