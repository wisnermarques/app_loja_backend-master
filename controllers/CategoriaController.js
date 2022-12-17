const slugify = require("slugify");
const Categoria = require("../models/Categoria");

function save(req, res) {
  const categoria = req.body.categoria;
  if (categoria != undefined) {
    Categoria.create({
      categoria,
      slug: slugify(categoria),
    })
      .then((categoria) => res.status(201).json(categoria))
      .catch((erro) => {
        res.status(400).json({ erro: "Houve um erro interno" });
        console.log(erro);
      });
  } else {
    res.status(202).json({ erro: "Categoria inválida" });
  }
}

function listarCategorias(req, res) {
  Categoria.findAll()
    .then((categorias) => {
      res.status(200).json(categorias);
    })
    .catch((erro) => {
      res.status(400).json({ erro: "Houve um erro interno" });
      console.log(erro);
    });
}

/*
function deleteCategory(req, res) {
  const id = req.body.id;
  if (id != undefined) {
    if (!isNaN(id)) {
      Category.destroy({
        where: {
          id: id,
        },
      }).then(() => {
        res.redirect("/admin/categories");
      });
    } else {
      res.redirect("/admin/categories");
    }
  } else {
    res.redirect("/admin/categories");
  }
}

function editCategory(req, res) {
  const id = req.params.id;
  if (isNaN(id)) {
    res.redirect("/admin/categories");
  }
  Category.findByPk(id)
    .then((category) => {
      if (category != undefined) {
        res.render("./admin/category/edit", { category, ativo: "categorias" });
      } else {
        res.redirect("/admin/categories");
      }
    })
    .catch((erro) => {
      res.redirect("/admin/categories");
    });
}

function updateCategory(req, res) {
  const { id, title } = req.body;

  Category.update(
    { title: title, slug: slugify(title) },
    {
      where: { id: id },
    }
  ).then(() => {
    res.redirect("/admin/categories");
  });
}*/

module.exports = {
  save,
  listarCategorias,
};
