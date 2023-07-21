exports.action_index = function (req, res) {
	let message = 'Bienvenido...';
    res.render('admin/index',{ message });
};

exports.action_product_index = function (req, res) {
    res.render('admin/product/index');
};

exports.action_product_create = function (req, res) {
    res.render('admin/product/create');
};