const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to a SQLite database using Sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.db',
    logging: true // Print SQL commands
});

// Define User model
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nimimerkki: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    ika: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    kaupunki: {
        type: DataTypes.STRING,
        allowNull: false
    },
    paiva: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

// Synchronize database
sequelize.sync()
    .then(() => console.log("Database synchronized"))
    .catch(err => console.error("Error synchronizing database:", err));

// Create a new user (Create)
app.post('/users', async (req, res) => {
    try {
        const { nimimerkki, email, ika, kaupunki, paiva } = req.body;
        if (!nimimerkki || !email || !ika || !kaupunki || !paiva   ) {
            return res.status(400).json({ error: 'Täytä kaikki kentät' });
        }
        const user = await User.create({ nimimerkki, email, ika, kaupunki, paiva });
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Search all users (Read)
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update user information (Update)
app.put('/users/:id', async (req, res) => {
    try {
        const { nimimerkki, email, ika, kaupunki, paiva } = req.body;
        const { id } = req.params;
        if (!nimimerkki || !email || !ika || !kaupunki || !paiva) {
            return res.status(400).json({ error: 'Täytä kaikki kentät' });
        }
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: 'Käyttäjää ei löydy' });
        }
        user.nimimerkki = nimimerkki;
        user.email = email;
        user.ika = ika;
        user.kaupunki = kaupunki;
        user.paiva = paiva;
        await user.save();
        res.json({ message: 'Käyttäjän tiedot päivitetty', user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete user (Delete)
app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: 'Käyttäjää ei löytynyt' });
        }
        await user.destroy();
        res.json({ message: 'Käyttäjätiedot poistettu', id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

/*
The required modules can be installed with a single command:
npm install express sequelize sqlite3 cors
*/