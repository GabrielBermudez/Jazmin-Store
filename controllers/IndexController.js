let Product = require('../models/ProductModel')
let mongoose = require('mongoose')
const mercadopago = require("mercadopago");

exports.action_index = (req,res,next) => {
	let lista_global = []
	let lista_preferences = [];

	mercadopago.configure({
		access_token: 'TEST-3758305417201668-121901-6cdc72d4925d13881f75e392bee0ba6d-182964265'
	});

	Product.FindProductAll((err,products) => {
        if (err) {
            return next(err);
        }
        
        products.forEach((product)=>{
        	let preference = {
				items: [
				    {
				      id: product._id,
				      title: product.nombre,
				      description: product.descripcion,
				      currency_id: 'ARS',
				      unit_price: product.precio,
				      quantity: 1,
				    }
				]
				//payer:
			};
			lista_preferences.push(preference);
        })

        let cantidad_productos = lista_preferences.length
        let aux = 1
        //console.log(lista_preferences[0],lista_preferences[1],lista_preferences[2])
        products.forEach((product) =>{
        	let preference = {
				items: [
				    {
				      id: product._id,
				      title: product.nombre,
				      description: product.descripcion,
				      currency_id: 'ARS',
				      unit_price: product.precio,
				      quantity: 1,
				    }
				]
				//payer:
			};

        	mercadopago.preferences.create(preference)
				.then(function(response){
					lista_global.push({'id':response.body.id,'product':product})

					if(aux == cantidad_productos){
						lista_global.sort(function (a, b) {

							if (a.product.fecha_creacion > b.product.fecha_creacion) {
							    return 1;
							}
							if (a.product.fecha_creacion < b.product.fecha_creacion) {
							    return -1;
							}
							  // a must be equal to b
							return 0;
						});
						return res.render('index',{preferences:lista_global })
					}
					aux++
				}).catch(function(error){
					res.status(500).json(error)
			})
			
        })
    });
}

