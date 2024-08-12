const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Liku@123',
  database: 'banner_db',
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected...');
});

app.get('/api/banner', (req, res) => {
  const query = 'SELECT * FROM banner_settings LIMIT 1';
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});

app.post('/api/banner', (req, res) => {
  const { visible, description, timer, link } = req.body;
  const query = `UPDATE banner_settings SET visible = ?, description = ?, timer = ?, link = ? WHERE id = 1`;
  db.query(query, [visible, description, timer, link], (err, result) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
