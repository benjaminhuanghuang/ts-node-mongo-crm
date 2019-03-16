## Reference 
- [TypeScript for Node.js developer](https://www.linkedin.com/learning/typescript-for-node-js-developers/typescript-with-node-js)


- https://www.typescriptlang.org/docs/handbook/compiler-options.html

## Setup
```
  npm i -g typescript
  npm i -g ts-node
```
Install types 
```
  npm i -S @types/node @types/body-parser @types/express @types/mongoose
```
Create ts config file tsconfig.json
```
```
Script
```
  "build": "tsc --w",
  "start": "tsc && ts-node ./dist/index.js"
```