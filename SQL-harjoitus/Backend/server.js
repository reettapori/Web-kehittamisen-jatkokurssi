const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Käytetään JSON-middlewarea POST-datan käsittelyyn
app.use(express.json());

// Yhdistä SQLite-tietokantaan
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Tietokantavirhe:', err.message);
    } else {
        console.log('Yhteys SQLite-tietokantaan onnistui.');
    }
});

// Luo taulu, jos sitä ei ole olemassa
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nimimerkki TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  ikä INTEGER,
  kaupunki TEXT,
  päivämäärä TEXT DEFAULT (DATE('now'))
)`);

// Luo uusi käyttäjä (Create)
app.post('/users', (req, res) => {
    const { nimimerkki, email, ikä, kaupunki } = req.body;
    if (!nimimerkki || !email) {
        return res.status(400).json({ error: 'Nimimerkki ja sähköposti vaaditaan' });
    }

    const query = `INSERT INTO users (nimimerkki, email, ikä, kaupunki) VALUES (?, ?, ?, ?)`;
    db.run(query, [nimimerkki, email, ikä || null, kaupunki || null], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID, nimimerkki, email });
    });
});

// Hae kaikki käyttäjät (Read)
app.get('/users', (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    });
  });

// Käynnistä palvelin
app.listen(port, () => {
    console.log(`Palvelin käynnissä osoitteessa http://localhost:${port}`);
});