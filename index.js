const express = require('express');
const ProfilRoute = require('./router/ProfilRoute');
const HomeRoute = require('./router/HomeRoute');
const path = require('path');



require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use('/profil', ProfilRoute);
app.use('/', HomeRoute);


app.listen(port, () => {console.log("Server is running on port " + port);})