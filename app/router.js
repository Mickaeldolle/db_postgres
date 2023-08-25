const { Router } = require("express"); // On recupère la "fabrique" à routers depuis le module express // Ici, on import juste le Router depuis le module

const router = Router(); // On créé un router

const mainController = require("./controllers/mainController");
const promoController = require("./controllers/promoController");
const studentController = require("./controllers/studentController");


// On paramètre notre router
router.get("/", mainController.renderHomePage);
router.get("/promos", promoController.renderAllPromosPage);
router.get("/promo/:id", promoController.renderOnePromoPage);
router.get("/promo/:promoId/students", studentController.renderPromoStudentsPage);
router.get("/student/:student", studentController.renderStuderDetails);

// Middleware 404
// Ce middleware va être appelé APRES les middleware GET déclarés au dessus, pour TOUTES les routes qui arriveraient à ce niveau !
// On pourrait très bien le mettre dans le fichier index.js APRES le app.use(router)
router.use((req, res) => {
  res.status(404).render("404");
});

module.exports = router; // Attention erreur classique, oublie du "s" à `exports`
