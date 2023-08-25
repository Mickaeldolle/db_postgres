const promos = require("../../data/promos.json");


const promoController = {
  renderAllPromosPage(req, res) {
    function compare(a, b) {
      if( a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      } else if(a.name.toLowerCase() > b.name.toLowerCase()){
        return 1;
      }
      return 0;
    }
    const sortedPromo = promos.sort(compare);
    res.render("promos", { promos: sortedPromo }); // Equivalent : { promos: promos }
  },

  renderOnePromoPage(req, res, next) {
    const promoId = parseInt(req.params.id);

    // Vérification 
    // Si c'est pas un nombre => on renvoie la 404 
    if (isNaN(promoId)) {
      next(); // Appelle le prochain middleware : la 404
      return; // Arrête la fonction, pas besoin d'aller plus loin !
    }

    // Sinon, c'est que promoId est un ID valide !! (ie. un nombre)

    // Objectif : récupérer les données de la promo demandée : promoId !
    // ON A    : promos = [{}, {}, {}]
    // ON VEUT : promo = {} qui match le bon ID

    // const promo = promos.find((promo) => { return promo.id === promoId; });
    const promo = promos.find(promo => promo.id === promoId);
    if (!promo) { // si promo === undefined
      next(); // On passe la main à la 404
      return; // Et on arrête la fonction !
    }

    // Sinon, c'est qu'on a une promo valide ! 
    res.render("promo", { promo });
  }
};

module.exports = promoController;
