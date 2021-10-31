const express = require('express');
const todoRoutes = require('./routes/todoRoutes');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
let port = process.env.PORT || 4000;

// esxpress app
const app = express();

// connect to MongoDb
const dbURI =
  'mongodb+srv://louisJackson:energie12@todolistappdb.5emmc.mongodb.net/toDolistAppDb?retryWrites=true&w=majority';
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(port);
    console.log(
      'successfully connected to the data base\nListening on port:' + port
    );
  })
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use('/todos', todoRoutes);
