let User = require('../models/UserModel')
let mongoose = require('mongoose')

exports.action_login_index = (req, res, next ) => {
	res.render('login/index')
}

exports.user_login = function (req, res) {

    User.FindUserByCorreo(req.body.correo,req.body.password,function(err,usuario) {
        if (err) {
            return next(err);
        }
        if(usuario && (req.body.correo == usuario.correo && req.body.password == usuario.password)){
            req.session.user = usuario  
            console.log(req.session.user)
            res.redirect('/'); 
        }else{
            res.render('login/index',{ error: 'Correo y/o contraseña invalida' });
        }
    });
};

exports.user_logout = function(req,res) {
    req.session.user = null;
    res.redirect('/');
}