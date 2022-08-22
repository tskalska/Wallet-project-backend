const mongoose = require('mongoose');
const app = require('./app');

const { DB_HOST, PORT = 3001 } = process.env;

// app.get('/', (req, res) => { res.send('Hello from Express!')})


mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Database connection successful');
    app.listen(PORT);
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });

  // app.listen(PORT);