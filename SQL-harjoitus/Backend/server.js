const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3000;

// Käytetään JSON-middlewarea POST-datan käsittelyyn
app.use(express.json());

// Palvellaan staattiset tiedostot "public" -kansiosta
app.use(express.static(path.join(__dirname, 'public')));

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
  ika INTEGER,
  kaupunki TEXT,
  paiva DATE
)`);

// Luo uusi käyttäjä (Create)
app.post('/users', (req, res) => {
    const { nimimerkki, email, ika, kaupunki, paiva } = req.body;

    if (!nimimerkki || !email || !ika || !kaupunki || !paiva) {
        return res.status(400).json({ error: 'Täytä kaikki kentät.' });
    }

    // Tarkistetaan, onko nimimerkki jo olemassa
    const checkQuery = `SELECT id FROM users WHERE nimimerkki = ?`;
    db.get(checkQuery, [nimimerkki], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (row) {
            // Jos nimimerkki löytyy, palautetaan virheilmoitus
            return res.status(400).json({ error: 'Tämä nimimerkki on jo käytössä.' });
        }

        // Jos nimimerkki ei ole käytössä, lisätään uusi käyttäjä
        const query = `INSERT INTO users (nimimerkki, email, ika, kaupunki, paiva) VALUES (?, ?, ?, ?, ?)`;
        db.run(query, [nimimerkki, email, ika || null, kaupunki || null, paiva], function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ id: this.lastID, nimimerkki, email });
        });
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

// Päivitä käyttäjän tiedot (Update)
app.put('/users/:id', (req, res) => {
    const { nimimerkki, email, ika, kaupunki } = req.body;
    const { id } = req.params;

    if (!nimimerkki || !email || !ika || !kaupunki) {
        return res.status(400).json({ error: 'Täytä kaikki kentät.' });
    }

    const query = `UPDATE users SET nimimerkki = ?, email = ?, ika = ?, kaupunki = ? WHERE id = ?`;
    db.run(query, [nimimerkki, email, ika, kaupunki, id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Käyttäjää ei löytynyt' });
        }
        res.json({ message: 'Käyttäjän tiedot päivitetty', id });
    });
});

// Poista käyttäjä (Delete)
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
  
    db.run(`DELETE FROM users WHERE id = ?`, id, function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: 'Käyttäjää ei löytynyt' });
      }
      res.json({ message: 'Käyttäjä poistettu', id });
    });
});

// Käynnistä palvelin
app.listen(port, () => {
    console.log(`Palvelin käynnissä osoitteessa http://localhost:${port}`);
});
