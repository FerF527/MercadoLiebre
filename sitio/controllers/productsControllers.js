const dbProduct = require('../data/productsDataBase.json')

module.exports = {
    listar: function(req, res){
        res.send(dbProduct)
    } 
}