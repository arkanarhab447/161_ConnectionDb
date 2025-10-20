const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


const biodataRoutes = require('./routes/biodata');


app.use('/biodata', biodataRoutes);


app.listen(port, () => {
  console.log(`🚀 Server berjalan di http://localhost:${port}`);
});
