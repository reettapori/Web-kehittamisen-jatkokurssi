// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 5000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'liikuntapaivakirja',
  password: 'database',
  port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

// Lisää uusi liikuntasuoritus
app.post('/api/liikuntasuoritukset', async (req, res) => {
  const { nimi, paivamaara, kesto, liikuntalaji, keskinopeus, matka, lisatiedot } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO liikuntasuoritukset (nimi, paivamaara, kesto, liikuntalaji, keskinopeus, matka, lisatiedot) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [nimi, paivamaara, kesto, liikuntalaji, keskinopeus, matka, lisatiedot]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Tietokantavirhe:', err.message);
    res.status(500).json({ error: 'Tietokantavirhe' });
  }
});

//hakee liikuntasuoritukset sekä haussa että listaan
app.get('/api/liikuntasuoritukset', async (req, res) => {
  const { paivamaara, liikuntalaji, nimi } = req.query;
  let query = 'SELECT * FROM liikuntasuoritukset WHERE true'; // Peruslauseke
  const params = [];

  // Jos päivämäärä on määritelty, lisää se kyselyyn
  if (paivamaara) {
    query += ' AND paivamaara::date = $' + (params.length + 1);
    params.push(paivamaara);
  }

  // Jos liikuntalaji on määritelty, lisää se kyselyyn
  if (liikuntalaji) {
    query += ' AND liikuntalaji ILIKE $' + (params.length + 1);
    params.push(`%${liikuntalaji}%`);
  }

  // Jos nimi on määritelty, lisää se kyselyyn
  if (nimi) {
    query += ' AND nimi ILIKE $' + (params.length + 1);
    params.push(`%${nimi}%`);
  }

  // Järjestä hakutulokset päivämäärän mukaan
  query += ' ORDER BY paivamaara DESC';

  // Suorita kysely
  try {
    const result = await pool.query(query, params);
    res.json(result.rows); // Palauta suodatetut tulokset
  } catch (err) {
    console.error('Virhe tietokannassa:', err.message);
    res.status(500).json({ error: 'Tietokantavirhe' });
  }
});


// Poista suoritus
app.delete('/api/liikuntasuoritukset/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM liikuntasuoritukset WHERE id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    console.error('Tietokantavirhe:', err.message);
    res.status(500).json({ error: 'Tietokantavirhe' });
  }
});

// Viikkotilastot
app.get('/api/weekly-stats', async (req, res) => {
  try {
    const longestDurationResult = await pool.query(`
      SELECT MAX(kesto) AS longestduration FROM liikuntasuoritukset
      WHERE paivamaara >= CURRENT_DATE - INTERVAL '7 days'
    `);

    const fastestSpeedResult = await pool.query(`
      SELECT MAX(keskinopeus) AS fastestspeed FROM liikuntasuoritukset
      WHERE paivamaara >= CURRENT_DATE - INTERVAL '7 days'
    `);

    const longestDistanceResult = await pool.query(`
      SELECT MAX(matka) AS longestdistance FROM liikuntasuoritukset
      WHERE paivamaara >= CURRENT_DATE - INTERVAL '7 days'
    `);

    const mostActivePersonResult = await pool.query(`
      SELECT nimi, COUNT(*) AS count FROM liikuntasuoritukset
      WHERE paivamaara >= CURRENT_DATE - INTERVAL '7 days'
      GROUP BY nimi
      ORDER BY count DESC
      LIMIT 1
    `);

    res.json({
      longestDuration: longestDurationResult.rows[0]?.longestduration || 0,
      fastestSpeed: fastestSpeedResult.rows[0]?.fastestspeed || 0,
      longestDistance: longestDistanceResult.rows[0]?.longestdistance || 0,
      mostActivePerson: mostActivePersonResult.rows[0]?.nimi || '-',
    });
  } catch (err) {
    console.error('Tietokantavirhe:', err.message);
    res.status(500).json({ error: 'Tietokantavirhe' });
  }
});

// Hae käyttäjän tehdyt tunnit
app.get('/api/user-progress', async (req, res) => {
  const { nimi } = req.query;

  if (!nimi) {
    return res.status(400).json({ error: 'Nimi vaaditaan' });
  }

  try {
    const result = await pool.query(`
      SELECT SUM(kesto) AS totalHours FROM liikuntasuoritukset
      WHERE nimi ILIKE $1
      AND paivamaara >= CURRENT_DATE - INTERVAL '7 days'
    `, [`%${nimi}%`]);

    const totalHours = result.rows[0]?.totalhours || 0; // Jos tuloksia ei ole, palautetaan 0
    res.json({ totalHours });
  } catch (err) {
    console.error('Tietokantavirhe:', err.message);
    res.status(500).json({ error: 'Tietokantavirhe' });
  }
});


// Muokkaa liikuntasuoritusta
app.put('/api/liikuntasuoritukset/:id', async (req, res) => {
  const { id } = req.params;
  const { nimi, paivamaara, kesto, liikuntalaji, keskinopeus, matka, lisatiedot } = req.body;

  try {
    const result = await pool.query(
      'UPDATE liikuntasuoritukset SET nimi = $1, paivamaara = $2, kesto = $3, liikuntalaji = $4, keskinopeus = $5, matka = $6, lisatiedot = $7 WHERE id = $8 RETURNING *',
      [nimi, paivamaara, kesto, liikuntalaji, keskinopeus, matka, lisatiedot, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Liikuntasuoritus ei löytynyt' });
    }

    res.json(result.rows[0]);  // Palautetaan päivitetty suoritus
  } catch (err) {
    console.error('Tietokantavirhe:', err.message);
    res.status(500).json({ error: 'Tietokantavirhe' });
  }
});


// Käynnistä palvelin
app.listen(port, () => {
  console.log(`Palvelin käynnissä portissa ${port}`);
});
