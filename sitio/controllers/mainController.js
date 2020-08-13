const dbProduct = require('../data/database')

module.exports={
    index: function(req, res, next) {
        let visitada = dbProduct.filter(producto=>{
            return producto.category == "visited";
        })
        let oferta = dbProduct.filter(producto=>{
            return producto.category == "in-sale";
        })
        res.render('index', { 
            title: 'Mercado Liebre', 
            oferta: oferta,
            visitada: visitada });
    }
}