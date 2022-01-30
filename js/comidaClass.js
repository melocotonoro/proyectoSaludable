class Comidas {


    constructor(

        comida,
        calorias,
        cantidad
    )
    {
        this.comida=comida,
        this.calorias=calorias,
        this.cantidad=cantidad
    }

    agregarAlimento(comida){
        this.comida.push(comida);
    }

}