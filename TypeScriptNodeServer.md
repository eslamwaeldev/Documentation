1- Run `yarn init -y`
2- Create src directory `mkdir src`
3- `cd src`
4- create an index.ts file `touch index.ts`
5- Run `yarn add typescript @types/node --save-dev`
6- Run `yarn tsc --init --rootDir src --outDir build \--esModuleInterop --resolveJsonModule --lib es6 \--module commonjs --allowJs true --noImplicitAny true`
7- Replace tsconfig with these `{"compilerOptions": {"lib": ["es6"],"target": "es6","module": "NodeNext","esModuleInterop": true,"allowSyntheticDefaultImports": true,"noImplicitAny": true,"moduleResolution": "NodeNext","sourceMap": true,"outDir": "dist","baseUrl": ".","paths": {"*": ["node_modules/*", "src/types/*"]}},"include": ["src/**/*.ts"],"exclude": ["node_modules", "**/*.spec.ts"]}`
8- Add nodemon and ts-node by running `yarn add nodemon ts-node`
9- Change the main to `src/index.ts` & add Scripts object in package.json `"scripts": {"dev": "nodemon --watch 'src/**/*.ts' --esm","ts": "tsc","start": "node dist/index.js"},`
10- Inside index.ts create a server `import * as http from "http";const server = http.createServer((req, res) => {});const port = 3000;const hostname = "127.0.0.1";server.listen(port, hostname, () => {console.log("Server running");});`
11- Create a gitignore file `touch .gitignore`
12- add [Node gitignore instruction](https://github.com/github/gitignore/blob/main/Node.gitignore)
