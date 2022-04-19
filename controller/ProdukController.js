const {getProdukModel} = require("../model/ProdukModel");
const getProduk = async(req,res) => {
    const data = await getProdukModel();
    
    res.json({dataProdukToko : data});
};

module.exports = {getProduk};