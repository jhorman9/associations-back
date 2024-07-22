import express from 'express';
import db from './utils/database.js';
import 'dotenv/config';
import initModels from './models/initModel.js';

initModels();

db.authenticate().then(() => console.log('conexión de base de datos exitoso')).catch((error) => console.log(error));

db.sync({ force: true }).then(() => console.log('Base de datos sincronizada')).catch((error) => console.log(error));

const PORT = process.env.PORT ?? 8000;

const app = express();

app.get('/', (req, res) => {
    res.send('OK');
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});