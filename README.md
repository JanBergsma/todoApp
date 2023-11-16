# todoapp

> **Todo:** Input field too far to the left.

## Comments from Artyom Ulanchik

This template should help get you started developing with Vue 3 in Vite.
Overall it works and looks good as expected however, it lacks of two key features that are crucial (not your fault, but it would be nice to bring it to the next level):

1. When you're switching between All,Active,Completed tabs there's no clear indication which tab is currently active unless you start clicking around and figure it out (as user) on your own. This will drastically improve user experience.

2. Each tab lacks of default text if there's nothing to display to either of the todo items. For example:

   - All tab could display No todo's to show

   - Active tab can show: No active todo's to show

   - Completed tab can show: No completed todo's to show

3. Switching between tabs you can notice that underline is changing its size. I am guessing that this happens due to underline length depends on the container size that renders list items. Perhaps you have to make that container size static (let's say min-width: 400px ) and align content inside.

All in all, it looks good!

Keep it up!

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
