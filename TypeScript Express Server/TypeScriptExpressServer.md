1. Run `yarn init -y`
2. Run `yarn add express dotenv ts-node`
3. Run `yarn add typescript nodemon @types/node @types/express --save-dev`
4. Run `yarn tsc --init`
5. Replace tsconfig with the [tsconfig](tsconfig.json) file in this repo.
6. Add gitignore `touch .gitignore`
7. add [Node .gitignore content from here](https://github.com/github/gitignore/blob/main/Node.gitignore)
8. Create an env file `touch .env`
9. Add `PORT=8000` to the env file
10. Create src directory `mkdir src`
11. Run `cd src`
12. Create an index.ts file `touch index.ts`
13. Add server [boilerplate](boilerplate.ts) to index.ts
14. Change the package.json main to `src/index.ts` & add [scripts](scripts.json) in package.json`
