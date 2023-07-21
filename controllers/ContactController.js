var nodemailer = require('nodemailer');

exports.action_contact_send = (req,res,next) => {
	res.render('contact/form',{logoFacebook:true});
}

exports.contact_send = function (req, res, next) {
    var transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
           user: 'sakuradevcode@gmail.com',
           pass: '39237216'
       }
	});

	var mailOptions = {
       from: 'sakuradevcode@gmail.com',
       to: 'gabrielbermudez0@gmail.com',
       subject: 'Consulta',
       text: "Nombre:" + req.body.nombre + "\n" +
       "Apellido: " + req.body.apellido + "\n" +
       "Teléfono: " + req.body.telefono + "\n" +
       "Mensaje: " + req.body.mensaje,
	};

	transporter.sendMail(mailOptions, function(error, info){
	    if (error){
	        console.log(error);
	        
	    } else {
	        console.log("Email sent" + info.response);
	        
	    }
	});
  	res.redirect('/');
};

