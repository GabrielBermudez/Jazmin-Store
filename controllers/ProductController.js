var Product = require('../models/ProductModel');
let mongoose = require('mongoose');

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

    Product.FindProductByID(req.params.id, function(err,product) {
        if (err) {
            return next(err);
        }

     	res.render('admin/product/create',{ product });
    });
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
	let product = new Product({
		nombre: req.body.nombre,
		descripcion: req.body.descripcion,
		precio: req.body.precio,
		stock: req.body.stock,
		categoria: req.body.categoria,
		fecha_creacion: req.body.fecha_creacion,
		fecha_actualizacion: req.body.fecha_actualizacion,
		estado: req.body.estado,
	});
    console.log(product);
	Product.AddProduct(product,function(err){
		if(err){
			return next(err);
		}
		console.log('Product Created successfully');
		res.redirect('/admin/product/index');
	});
};

exports.product_update = function(req, res) {
	Product.FindProductByID(req.params.id, function(err,product) {
        if (err) {
            return next(err);
        }

     	product.nombre = req.body.nombre;
		product.descripcion = req.body.descripcion;
		product.precio = req.body.precio;
		product.stock = req.body.stock;
		product.categoria = req.body.categoria;
		product.fecha_creacion = req.body.fecha_creacion;
		product.fecha_actualizacion = req.body.fecha_actualizacion;
		product.estado = req.body.estado;

     	product.save();

     	console.log('Product Updated Successfully');
		res.redirect('/admin/product/index');

    });
};

exports.product_delete = function (req, res) {
	Product.RemoveProductByID(req.params.id, function(err){
		if (err) {
            return next(err);
        }
        console.log('Product Deleted Successfully');
        res.redirect('/admin/product/index');
	});
};

