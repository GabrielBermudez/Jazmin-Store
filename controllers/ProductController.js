let Product = require('../models/ProductModel');
let mongoose = require('mongoose');
let mv = require('mv');
const fs = require('fs').promises;

exports.action_product_index = function (req, res) {
    Product.FindProductAll(function(err,products) {
        if (err) {
            return next(err);
        }
        res.render('admin/product/index',{ products });
    });
};

exports.action_product_view = function (req, res) {

    Product.FindProductByID(req.params.id, function(err,product) {
        if (err) {
            return next(err);
        }

     	res.render('admin/product/view',{ product });
    });
};

exports.action_product_create = function (req, res) {

    res.render('admin/product/create',{ product:null });
};

exports.action_product_update = function (req, res) {

    Product.FindProductByID(req.params.id, function(err,product) {
        if (err) {
            return next(err);
        }

     	res.render('admin/product/update',{ product });
    });
};

exports.product_create = function(req, res) {
    let date = new Date();

    UploadFile(req);

	let product = new Product({
		nombre: req.body.nombre,
		descripcion: req.body.descripcion,
		precio: req.body.precio,
		stock: req.body.stock,
		categoria: req.body.categoria,
		fecha_creacion: date,
		fecha_actualizacion: date,
		disponibilidad: req.body.disponibilidad,
        url: `/images/${req.body.categoria}/${req.files.image.name}`,
	});
    console.log(product,date);
	Product.AddProduct(product,function(err){
		if(err){
			return next(err);
		}
		console.log('Product Created successfully');
		res.redirect('/admin/product/index');
	});
};

exports.product_update = function(req, res) {
    let date = new Date();

	Product.FindProductByID(req.params.id, function(err,product) {
        if (err) {
            return next(err);
        }
        
        if(req.files === null){

         	product.nombre = req.body.nombre;
            product.descripcion = req.body.descripcion;
            product.precio = req.body.precio;
            product.stock = req.body.stock;
            product.categoria = req.body.categoria;
            product.fecha_actualizacion = date;
            product.disponibilidad = req.body.disponibilidad;

         	product.save();

         	console.log('Product Updated Successfully');
    		res.redirect('/admin/product/index');

        }else{
            UploadFile(req);
            fs.unlink(`./public${product.url}`)
                .then(() => {
                    console.log(`Image of ${product.nombre} has removed`)
                    product.nombre = req.body.nombre;
                    product.descripcion = req.body.descripcion;
                    product.precio = req.body.precio;
                    product.stock = req.body.stock;
                    product.categoria = req.body.categoria;
                    product.fecha_actualizacion = date;
                    product.disponibilidad = req.body.disponibilidad;
                    product.url = `/images/${req.body.categoria}/${req.files.image.name}`;
                    product.save();
                    res.redirect('/admin/product/index');

                }).catch(err => {
                    console.error('Something wrong happened removing the file', err)
                    res.redirect('/admin/product/index');
            })
        }

    });
};

exports.product_delete = function (req, res) {
    Product.FindProductByID(req.params.id, function(err,product) {
        if (err) {
            return next(err);
        }

        fs.unlink(`./public${product.url}`)
          .then(() => {
            console.log(`Image of ${product.nombre} has removed`)
            RemoveProduct(product.id);

            res.redirect('/admin/product/index');

          }).catch(err => {
            console.error('Something wrong happened removing the file', err)
            res.redirect('/admin/product/index');
          })
    });

};


function RemoveProduct(id){
    console.log(id);
    Product.RemoveProductByID(id, function(err){
        if (err) {
            return next(err);
        }
        console.log('Product Deleted Successfully');
    });
}

function UploadFile(req,){
    let oldPath = req.files.image.tempFilePath;
    let newPath = `./public/images/${req.body.categoria}/${req.files.image.name}`;

    mv(oldPath, newPath, {mkdirp: true}, function(err) {
        if(err) 
            return res.status(500).send({ message : err })

        console.log(`File ${req.files.image.name} has moved in public/images/...`)
    });
}
