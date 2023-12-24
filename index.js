const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to database
const sequelize = require('./config/database');
sequelize
  .sync()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err));
require('./routes/routes')(app);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));