class Acceso{

    constructor (nombre,apellido,contrasena,cliente)
    {
        this.nombre= nombre;
        this.apellido= apellido;
        this.contrasena=contrasena;
        this.cliente=cliente;
    }

sesion(nombre,apellido,contrasena,cliente)
{

    const sesion1= new Acceso(nombre,apellido,contrasena,cliente);

    localStorage.setItem (cliente,JSON.stringify(sesion1))

    console.log (sesion1)


const obternerInfo=localStorage.getItem(cliente);

console.log(obternerInfo);

    window.location.href="index.html"

}

}




