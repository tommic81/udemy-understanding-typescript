# udemy-understanding-typescript

##### Installing Typescript

- [download node](https://nodejs.org/en/)

- Install typescript

```
sudo npm -g install typescript
```

Using TypeScript

- Compilation

```
tsc script.ts
```

Setting the Workspace

- Put current folder under control of npm

```
npm init
```

- Install lite-server as development only dependency

```
npm install lite-server --save-dev 
```

- Run lite-server on start

```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server"
  }
```

- Starting app

```
npm start
```

- Put current folder under control of tsc

```
tsc --init
// tsconfig.json is created
```

- Now you can compile typing `tsc`

#### Using Types for a better code

