# Remote App Two

This project uses **Vite** and **Module Federation**.

<img width="1920" height="1048" alt="image" src="https://github.com/user-attachments/assets/6cd235f4-8d9c-4f54-a7bf-046b9a874578" />

## Getting Started

### Install Dependencies

```bash
npm install
```
## Module Federation Details

### Serve as remote

- Open two terminals
- In one terminal to run build with watch flag to listen build file changes

  ```bash
  npm run build:watch
  ```

- In other terminal run preview of the application, serving the remoteEntry.js

  ```bash
  npm run preview
  ```
- Now it is ready and served to host

## Module Federation Vite config explaination

```javascript
federation({
    name: 'remote-app-two',
    filename: 'remoteEntry.js',
    exposes: {
      "./App": "./src/App",
    },
    shared: ['react', 'react-dom'],
  }),
```

- federation plugin is added to vite.config.js
- `name` is used to identify the remote app with name.
- `filename` is used to give name to file serving the bulid to host
- `exposes` includes component to be exposed to host
- `shared` includes dependecies required to run app as remote

## Run as Standalone App

```bash
npm start
```
