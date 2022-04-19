const express = require("express");
const App = express();
const ProdukRoute = require("./route/ProdukRoute")

App.use("/produk", ProdukRoute);

App.listen(5001,() => {
    console.log("server hidup")
})