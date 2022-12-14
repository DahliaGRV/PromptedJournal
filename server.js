const express = require('express');
const cors = require("cors");
const allRoutes = require('./controllers');

const sequelize = require('./config/connection');

// Sets up the Express App
// =============================================================
const app = express();
//DEVELOP MODE
app.use(cors());

app.options('/journals', cors())
app.options('/users', cors())
//PROD MODE
// app.use(cors({
//     origin:"https:.com"
// }));

const PORT = process.env.PORT || 3001;
// Requiring our models for syncing
const { User, Journal} = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/',allRoutes);

sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});
