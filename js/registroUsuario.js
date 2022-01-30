

function ingresoUsuario()
{
const nombre1= document.getElementById("firstName").value;
const apellido=document.getElementById("lastName").value;
const contrasena=document.getElementById("password").value;
const numeroCliente= document.getElementById("clients").value;


const ingresoUsuario1=new Acceso("","","","");

ingresoUsuario1.sesion (nombre1,apellido,contrasena,numeroCliente);
}


