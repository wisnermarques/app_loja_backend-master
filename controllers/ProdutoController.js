const slugify = require("slugify");
const Categoria = require("../models/Categoria");
const Produto = require("../models/Produto");

function save(req, res) {
  const { produto, detalhes, preco, idCategoria, img, desconto, informacoes } =
    req.body;

  if (produto != undefined && detalhes != undefined && preco != undefined) {
    Produto.create({
      produto,
      detalhes,
      preco,
      categoriaId: idCategoria,
      img,
      desconto,
      informacoes,
    })
      .then((produto) => res.status(201).json(produto))
      .catch((erro) => {
        res.status(400).json({ erro: "Houve um erro interno" });
        console.log(erro);
      });
  } else {
    res.status(202).json({ erro: "Produto inválido" });
  }
}

function listarProdutos(req, res) {
  Produto.findAll().then((produtos) => {
    res.status(200).json(produtos);
  });
}

function listarProddutosPorCategoria(req, res) {
  const categoriaProduto = req.params.categoria;

  Categoria.findOne({
    where: { slug: categoriaProduto },
  })
    .then((categoria) => {
      if (categoria) {
        Produto.findAll({
          where: { categoriaId: categoria.id },
        })
          .then((produtos) => res.status(200).json(produtos))
          .catch((erro) => {
            res.status(400).json({ erro: "Houve um erro interno" });
            console.log(erro);
          });
      }
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
        res.render("./admin/category/edit", { category, ativo: "Produtos" });
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
  listarProdutos,
  listarProddutosPorCategoria,
};
