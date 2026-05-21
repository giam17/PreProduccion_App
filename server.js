const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

const dbPath = path.join(__dirname, 'database.json');

app.get('/api/datos', (req, res) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) return res.status(500).send("Error conectando a la BD JSON");
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`Servidor de pre-producción corriendo en puerto ${PORT}`);
});