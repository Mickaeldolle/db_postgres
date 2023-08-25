const promos = require("../../data/promos.json");
const students = require("../../data/students.json");


const studentController = {
  renderPromoStudentsPage(req, res, next) {
    // On recupére l'id de la promo dans les params et on le parseint pour le type number.
    const promoId = parseInt(req.params.promoId);
    // On recherche les students avec l'id de la promo === promoId
    const studentsPromo = students.filter(student => student.promo === promoId);
    // On vérifie que la promoId correspond bien a une promo existante.
    const promoExist = promos.some(promo => promo.id === promoId);
    // Si le student ou la promo n'existe pas, on renvoie une page 404
    if(!promoExist) {
      next();
      return;
    }
    // Sinon, on renvoie la views students avec la data sur les students.
    res.render("students", { students: studentsPromo});
  },
  renderStuderDetails(req, res, next) {
    const id = parseInt(req.params.student);
    const foundedStudent = students.find(student => student.id === id);
    const promo = promos.find(promo => promo.id === foundedStudent.promo);
    // if(!foundedStudent) {
    //   console.log(foundedStudent);
    //   next();
    //   return;
    // }
    res.render("student", { student: foundedStudent, promo: promo });
  }
};

module.exports = studentController;