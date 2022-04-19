const {readFileSync} = require("fs")
const path = require("path");
const getProdukModel = async () => {
    const loc = path.join(__dirname,"");
    const produk = await readFileSync(`${loc}/Produk.json`,"utf-8");
    return JSON.parse(produk);
};

module.exports = {getProdukModel};