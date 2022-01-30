class PlanNutricional{
    constructor (nombre,dias,calorias,precio)
{
    this.nombre=nombre;
    this.dias=[dias+ " días"];
    this.calorias=[calorias+ " calorias"];
    this.precio=precio;
}
en3Cuotas()
{
return this.precio / 3; 
}
en6Cuotas()
{
return this.precio / 6;
}
ahora12()
{
return this.precio /12;   
}

}




