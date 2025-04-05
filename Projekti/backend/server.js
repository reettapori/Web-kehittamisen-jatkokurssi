const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend toimii!');
});

app.listen(PORT, () => {
  console.log(`Serveri käynnissä portissa ${PORT}`);
});
