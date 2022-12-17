const { Router } = require("express");
const {
  save,
  listarProdutos,
  listarProddutosPorCategoria,
} = require("../controllers/ProdutoController");

const router = Router();

//router.get("/categories", admin, listCategories);

router.post("/save", save);

router.get("/listar", listarProdutos);

router.get("/porcategoria/:categoria", listarProddutosPorCategoria);

module.exports = router;
