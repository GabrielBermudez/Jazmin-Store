let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productSchema = new Schema({
	nombre: String,
	descripcion: String,
	precio: Number,
	stock: Number,
	categoria: String,
	fecha_creacion: Date,
	fecha_actualizacion: Date,
	disponibilidad: Boolean,
	url: String,
});

productSchema.statics.AddProduct = function(product,callback){
	return this.create(product,callback);
};

productSchema.statics.FindProductAll = function(callback){ //Method for find alls user in schema, i havent filters
	return this.find({},callback);
};

productSchema.statics.FindProductByID = function(id,callback){
	return this.findOne({_id:id}, callback);
};

productSchema.statics.RemoveProductByID = function(id, callback){
	return this.deleteOne({_id:id},callback);
}

module.exports = mongoose.model('products',productSchema);
