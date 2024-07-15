import express from 'express';

const PORT = process.env.PORT ?? 8000;

const app = express();

app.get('/', (req, res) => {
    res.send('OK');
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});