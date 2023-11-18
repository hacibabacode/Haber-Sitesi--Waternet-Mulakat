const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
const port = 3000;

const db = new sqlite3.Database('haberler.db');


app.get('/', (req, res) => {
    res.send('Ana Sayfa'); // İstediğiniz bir metni gönderebilirsiniz.
});

app.get('/api/news', (req, res) => {
    db.all('SELECT * FROM haberler', (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(rows);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
