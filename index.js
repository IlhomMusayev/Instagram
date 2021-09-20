const express = require('express');
const routes = require('./router/routes')
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 3000;


const app = express();
app.listen(PORT, (_) => console.log(`SERVER READY AT ${PORT}`));

try {
    // middlewares
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, "public")));

    // await mongo();


    // settings
    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "views"));
} finally {
    routes(app);
}