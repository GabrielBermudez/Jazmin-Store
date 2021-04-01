var campoNombre = document.querySelector("#nombre");
var campoApellido = document.querySelector("#apellido");
var campoEdad = document.querySelector("#edad");
var campoDNI = document.querySelector("#dni");
var campoEmail = document.querySelector("#email");
var campoContraseña = document.querySelector("#password");
var campoConfirmContraseña = document.querySelector("#confirm-password");
var botonEnviar = document.querySelector("#btnEnviar");
var formulario = document.querySelector("#form");

var labelNombre = document.querySelector("#labelNombre");
var labelApellido = document.querySelector("#labelApellido");
var labelEdad = document.querySelector("#labelEdad");
var labelDNI = document.querySelector("#labelDNI");
var labelEmail = document.querySelector("#labelEmail");
var labelContraseña = document.querySelector("#labelPassword");
var labelConfirmContraseña = document.querySelector("#labelPasswordConfirm");


var errorNombre = "<sup>*</sup> Ingrese un nombre con 3 caracteres minimo";
var errorApellido = "<sup>*</sup> Ingrese un apellido con 3 caracteres minimo";
var errorEdad = "<sup>*</sup> La edad debe ser menor a 100 años";
var errorDNI = "<sup>*</sup> El DNI debe contener almenos 7 numeros";
var errorEmail = "<sup>*</sup> La direccion de email es incorrecta";
var errorContraseña = "<sup>*</sup> La contraseña debe contener minimo 8 caracteres";
var errorConfirContraseña = "<sup>*</sup> Las contraseñas debe ser iguales";

labelNombre.style.color="red";
labelApellido.style.color="red";
labelEdad.style.color="red";
labelDNI.style.color="red";
labelEmail.style.color="red";
labelContraseña.style.color="red";
labelConfirmContraseña.style.color="red";


campoNombre.onchange = function(){
   
    if(campoNombre.value.length >= 3){
        labelNombre.innerHTML="";

    }else{
        
        labelNombre.innerHTML =errorNombre; 
        
    }
}

campoApellido.onchange = function(){
   
    if(campoApellido.value.length >= 3){
        labelApellido.innerHTML="";

    }else{
       
        labelApellido.innerHTML=errorApellido;
    }
}

campoEdad.onchange = function(){
    
    if(campoEdad.value < 100 && campoEdad.value > 0){
        labelEdad.innerHTML="";

    }else{
       
        labelEdad.innerHTML=errorEdad;
    }
}

campoDNI.onchange = function(){
    
    if(campoDNI.value.length >= 7 && campoDNI.value.length <=8){
        labelDNI.innerHTML="";

    }else{
       
        labelDNI.innerHTML=errorDNI;
    }
}

campoEmail.onchange = function validarEmail() {

    if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(campoEmail.value)){
        labelEmail.innerHTML = "";
    
    } else {
        
        labelEmail.innerHTML = errorEmail;
    }
    
    }


campoContraseña.onchange = function(){

    if(campoContraseña.value.length >= 8){
        labelContraseña.innerHTML="";

    }else{
       
        labelContraseña.innerHTML=errorContraseña;
    }
}

campoConfirmContraseña.onchange = function(){

    if(campoConfirmContraseña.value == campoContraseña.value){
        labelConfirmContraseña.innerHTML="";

    }else{
        
        labelConfirmContraseña.innerHTML=errorConfirContraseña;
    }
}

formulario.onsubmit = function(event) {
    if(campoNombre.value.trim() == ""){
        labelNombre.innerHTML="";
        labelNombre.innerHTML="El campo nombre es obligatorio"
        event.preventDefault();

    }else if(campoApellido.value.trim() == ""){
        labelApellido.innerHTML="";
        labelApellido.innerHTML="El campo apellido es obligatorio"
        event.preventDefault();

    }else if(campoEdad.value.trim() == ""){
        labelEdad.innerHTML="";
        labelEdad.innerHTML="El campo edad es obligatorio"
        event.preventDefault();

    }else if(campoDNI.value.trim() == ""){
        labelDNI.innerHTML="";
        labelDNI.innerHTML="El campo DNI es obligatorio"
        event.preventDefault();

    }else if(campoEmail.value.trim() == ""){
        labelEmail.innerHTML="";
        labelEmail.innerHTML="El campo email es obligatorio"
        event.preventDefault();

    }else if(campoContraseña.value.trim() == ""){
        labelContraseña.innerHTML="";
        labelContraseña.innerHTML="El campo contraseña es obligatorio"
        event.preventDefault();
    
    }else if(campoConfirmContraseña.value.trim() == ""){
        labelConfirmContraseña.innerHTML="";
        labelConfirmContraseña.innerHTML="El campo apellido es obligatorio"
        event.preventDefault();
    }

}