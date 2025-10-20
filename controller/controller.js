const db = require('../config/db');


exports.getAllBiodata = (req, res) => {
  const sql = 'SELECT * FROM biodata';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error mengambil data:', err);
      return res.status(500).json({ message: 'Gagal mengambil data.' });
    }
    res.json(results);
  });
};
