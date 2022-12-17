const { Router } = require("express");
const {
  save,
  listarCategorias,
} = require("../controllers/CategoriaController");

const router = Router();

//router.get("/categories", admin, listCategories);

router.post("/save", save);

router.get("/listar", listarCategorias);

module.exports = router;
