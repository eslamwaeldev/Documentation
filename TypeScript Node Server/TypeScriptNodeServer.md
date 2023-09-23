1. Run `yarn init -y`
2. Create src directory `mkdir src`
3. Run `cd src`
4. create an index.ts file `touch index.ts`
5. Run `yarn add typescript @types/node --save-dev`
6. Run `yarn tsc --init --rootDir src --outDir build \--esModuleInterop --resolveJsonModule --lib es6 \--module commonjs --allowJs true --noImplicitAny true`
7. Replace tsconfig with the ts config file in this repo.
8. Add nodemon and ts-node by running `yarn add nodemon ts-node`
9. Change the package.json main to `src/index.ts` & add [scripts](TypeScript%20Node%20Server/scripts.json) in package.json `
10. Add server [boilerplate](TypeScript%20Node%20Server/boilerplate.ts) to index.ts
11. Create a gitignore file `touch .gitignore`
12. add [Node geetignore content from here](https://github.com/github/gitignore/blob/main/Node.gitignore)
