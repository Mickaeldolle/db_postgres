// Charger les variables d'environnement
require("dotenv").config();
// require("dotenv/config"); // Alternativement

// Import dependences
const express = require("express");
const router = require("./app/router");

// Create app
const app = express();

// Configure view engine
app.set("view engine", "ejs");
app.set("views", "./app/views");

// On configure le dossier public comme dossier static pour l'utilisation du css et des images.
app.use(express.static(__dirname + "/app/public"));
// Configure routes
app.use(router);

// Start app
const PORT = process.env.PORT || 3000; // Port par défaut classique : 3000 / 8080 / 8000 (fallback = filet de sécurité = ici par défaut, PORT=3000)
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

