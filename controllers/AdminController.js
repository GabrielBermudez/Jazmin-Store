exports.action_index = function (req, res) {
	let message = 'Bienvenido...';
    res.render('admin/index',{ message });
};
