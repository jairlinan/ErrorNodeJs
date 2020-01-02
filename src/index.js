const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();

// Setting
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan("dev"));

// routes
app.use(require("./routes/customers"));

// Listening on server
app.listen(app.get("port"), () => {
    console.log("Servidor escuchando en el puerto ", app.get("port"))
});