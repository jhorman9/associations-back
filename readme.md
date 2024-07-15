# Asociaciones
 ## Levantar el proyecto
 ```shell
 npm init -y
 ```

 Instalar las dependecias del proyecto
  ```shell
 npm install express sequelize pg pg-hstore cors dotenv
 ```

  Instalar las dependecias del desarrollo
  ```shell
 npm install nodemon -D
 ```

 ## Modificar el packaje.json
 
 1.- Agregar el soporte para es6 -> "type": "module"
 
 ```json
"type": "module"
 ```
 
 2.- Agregar los scripts de arranque y desarrollo

 ```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon ./app.js",
    "start": "node ./app.js"
},
 ```

 Y al final queda asi:

 ```json
 {
  "name": "associations-back",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon ./src/app.js",
    "start": "node ./src/app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "pg": "^8.12.0",
    "pg-hstore": "^2.3.4",
    "sequelize": "^6.37.3"
  }
}
 ```

 ## Crear nuestras carpetas y archivos

 - /
    - /src
        - /models
        - /components
        - /utils
        - app.js
    - .gitignore
    - .env

En .gitignore agregamos los siguiente:

```
node_modules
.env
```

## Crear un servidor básico

Nos dirigimos al archivos app.js

1.- Importamos express
```js
import express from 'express';
```

2.- Crear una instancia de express
```js
    const app = express();
```

3.- Creamos una ruta para healtCheck
```js
app.get('/', (req, res) => {
    res.send('OK')
})
```

4.- Creamos una variable para nuestro puerto
```js
import express from 'express';

const PORT = process.env.PORT ?? 8000;

const app = express();

app.get('/', (req, res) => {
    res.send('OK')
})
```

5.- Dejar escuchando al servidor en el puerto
```js
import express from 'express';

const PORT = process.env.PORT ?? 8000;

const app = express();

app.get('/', (req, res) => {
    res.send('OK')
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
```