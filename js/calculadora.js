


// Consulta al usuario el peso

function peso() {
    
    let pesoUsuario= "Ingrese su peso";
    let consultaPeso=0;
    do{
      consultaPeso= parseInt(prompt(pesoUsuario));
    }
    while (consultaPeso<0 || consultaPeso>200)
    
    console.log ("Su peso es " + consultaPeso + " kg")
    return consultaPeso
    }
    
    // Consulta al usuario la altura
    
    function altura ()
    {
    let consultaAltura=0;
    let alturaUsuario= "Escribe cuál es tu estatura en centímetros.\n No use puntos"; 
    do{
      consultaAltura= parseInt(prompt(alturaUsuario));
    }
    while (consultaAltura<0 || consultaAltura>210)
    
    console.log ("Su altura es " + consultaAltura + " cms")
    }
    
    
    // Consulta al usuario la edad
    
    function edad ()
    {
    let consultaEdad=0;
    let edadUsuario= "Ingrese su edad";
    do{
      consultaEdad= parseInt(prompt(edadUsuario));
    }
    while (consultaEdad<0 || consultaEdad>100)
    
    console.log ("Su edad es " + consultaEdad + " años")
    }
    
    
    // Consulta al usuario el nivel de actividad fisica 
    
    function nivelActividadFisica()
    {
    let factorActividad= "Nivel de actividad \n"
    factorActividad+="1- Poco o ninguna actividad \n";
    factorActividad+="2- Ejercicio ligero (1-3 días a la semana)\n";
    factorActividad+="3- Ejercicio moderado (3-5 días a la semana)\n";
    factorActividad+="4- Ejercicio fuerte (6-7 días a la semana)\n";
    factorActividad+="5- Atletas profesionales\n";
    
    let actividadFisica= 0;
    
    while (actividadFisica<0 && actividadFisica<6);
    {
     actividadFisica= parseInt(prompt(factorActividad));
        switch(actividadFisica)
        {
        case 1:
        {
        var Actividad=1.2;
        console.log (Actividad)
        break;
        }
        case 2:
        {
            var Actividad=1.375;
            console.log (Actividad)
        break;
        }
        case 3:
        {
            var Actividad=1.55;
            console.log (Actividad)
        break;
        }
        case 4:
        {
            var Actividad=1.725;
            console.log (Actividad)
        break;
        }
        case 5:
        {
            var Actividad=1.9;
            console.log (Actividad)
        break;
        }
    
        default:
        {
        alert("La opción es inválida.Vuelva a intentarlo")
        }
        }
    }
    }
    
    
    /* Consulta si es mujer u hombre, y aroja una formula que depende
    del peso, la altura, la edad y la actividad fisica*/
    
    function sexo()
    {
    let sexoUsuario= "Escriba 1 si es Mujer \n Escriba 2 si es Hombre";
    let consultaSexo= 0;
    
    while (consultaSexo!==1 && consultaSexo!==2)
     {
    consultaSexo= parseInt(prompt(sexoUsuario));
    
    switch (consultaSexo) {
        case 1:
        console.log ("Es Mujer")
            break;
    
        case 2:
        console.log ("Es hombre")
            break;
        default:
        console.log ("Vuelva a intentarlo")
            break;
    }  
    }
    }
    
    
    