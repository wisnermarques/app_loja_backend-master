const express = require("express");

const CategoriaRoutes = require("./routes/CategoriaRoutes");
const ProdutoRoutes = require("./routes/ProdutoRoutes");

const app = express();

app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/categoria", CategoriaRoutes);
app.use("/produto", ProdutoRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
