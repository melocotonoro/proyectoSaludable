function planClass(){ 
    const planNutricional= new PlanNutricional("","","","");
}

/*window.onload=()=>{*/
    function inicio(){
        planClass();
        mostrarTituloPrincipal();
        añadirPlanes();
        eventoDescripPlanes();
        mostrarPricing();
        accesoApi1();
        accesoApi2();
        accesoApi3();
        eleccionCuotasPlan1()
        eleccionCuotasPlan2()
        eleccionCuotasPlan3()
        confirmacionCuotas()
}

function mostrarTituloPrincipal(){

//Animacion Titulo "Elige tu plan"
    $(".contenedorTit").hide()
    $(".contenedorTit").prepend("<h1>ELIGE TU PLAN NUTRICIONAL</h1>");
    
//Animacion Planes 

    $(".contenedorTit").fadeIn(1600, ()=>
{
});

}

function añadirPlanes(){

//Armado de plan dinámico N° 1

    $("#planUno").hide();

    $("#planUno").prepend(`<img src="imagenes/planUno500x400px.jpg" class="estiloImg" alt=""> 
    <div><button  id="botonEleccionPlanes1"class="botonEleccionPlanes" name="Plan 1" value="text" type="button" >
    Elige Plan 1 
    </button></div>`);

    $("#planUno").fadeIn(2000);

//Armado de plan dinámico N° 2

    $( "#planDos").hide();
    $("#planDos").prepend(`<img src="imagenes/planDos500x400px.jpg" class="estiloImg"alt=""> 
    <div><button   id="botonEleccionPlanes2"class="botonEleccionPlanes" name="Plan 2" value="text" type="button" >
    Elige Plan 2 
    </button></div>`);

    $("#planDos").fadeIn(3000);

//Armado de plan dinámico N° 3
    $("#planTres").hide();
    $("#planTres").prepend(`<img src="imagenes/planTres500x400px.jpg"class="estiloImg" alt=""> 
    <div><button id="botonEleccionPlanes3"class="botonEleccionPlanes" name="Plan 3" value="text" type="button">
    Elige Plan 3 
    </button></div>`);

    $("#planTres").fadeIn(4000);

}

// ACCESO AJAX LOCAL (JSON) PARA CADA PLAN //

//Llama el archivo Json del plan 1
function accesoApi1(){

let buttonPlanId1 = document.getElementById("botonEleccionPlanes1");

const callJson1= "json/alimentos1.json"
    
    $.get(callJson1, function (respuesta,estado){
        if (estado ==="success"){

//evento click para que imprima listado de alimentos que pertenecen al plan 1

        $(buttonPlanId1).one("click", ()=>{

            imprimeListaComida1(respuesta);
}) 
}
        else{
        alert ("Ups...Algo salió mal")
}
})
}

//Llama el archivo Json del plan 2 
function accesoApi2(){

let buttonPlanId2 = document.getElementById("botonEleccionPlanes2");

const callJson2= "json/alimentos2.json"

    $.get(callJson2, function (respuesta,estado){
        if (estado ==="success"){

//evento click para que imprima listado de alimentos que pertenecen al plan 2

        $(buttonPlanId2).one("click", ()=>{

// $(".listaPlan1").toggle(); SE DEJA INACTIVO- funciona solo en secuencia click P.n°, click P.N°2 y luego P.N°3

        imprimeListaComida2(respuesta);

}) 
}
        else{
        alert ("Ups...Algo salió mal")
}
})
}

//Llama el archivo Json del plan 3 
function accesoApi3(){

let buttonPlanId3 = document.getElementById("botonEleccionPlanes3");

const callJson3= "json/alimentos3.json"

    $.get(callJson3, function (respuesta,estado){
        if (estado ==="success"){

//evento click para que imprima listado de alimentos que pertenecen al plan 3
    
    $(buttonPlanId3).one("click",()=>{

// $(".listaPlan2").toggle(); SE DEJA INACTIVO- funciona solo en secuencia click P.n°, click P.N°2 y luego P.N°3

imprimeListaComida3(respuesta);

}) 
}
        else{
        alert ("Ups...Algo salió mal")
}
})
}



//Imprime lista de comidas de plan 1
function imprimeListaComida1(respuesta){

    let longArray1 = respuesta.length;                
    
        for(var i=0; i<longArray1; i++){
    
        const enlistarPlan1= `<div><img src=${respuesta[i].img} class="estiloImg"alt=""></div>
                    <dl> 
                    <dt><strong>${respuesta[i].alimento}</strong>
                    <dd> ${respuesta[i].calorias} calorias
                    <dd> <input class="cantidadPorcion" type="number"name="cantidad">${respuesta[i].cantidades}
                    </dl>`;
    
        document.querySelector(".listaPlan1").innerHTML+=enlistarPlan1 ;
    }
    
    obtenerCaloria1(respuesta)
    }
    
    //Operación para obtener calorías 
    function obtenerCaloria1(respuesta){
    
    //Crea el botón para sumar calorías 
    const btnSumar= document.createElement("button")
    btnSumar.setAttribute("id","button-confirm")
    btnSumar.textContent="Sumar Calorías"
    
    $(".listaPlan1").append(btnSumar)
    
    $("#button-confirm").on("click",()=>{
    
    multiplicarRacion1(respuesta)
    })
    }
    
    // Multiplica valor de inputs por calorias de c/comida
    
    function multiplicarRacion1(respuesta){
let valorInput= document.querySelectorAll(".cantidadPorcion")
let sumaValor = 0;
    for (let index = 0; index < respuesta.length && index <valorInput.length; index++) {
        const valorCaloria= `${respuesta[index].calorias}`
        let unidadCaloria= Number (valorCaloria)
        let capacidadInput= valorInput[index].value
        if (capacidadInput === "" || capacidadInput === null){
        alert ("Error!Por favor, completar los datos")
}
        let valorFinalCaloria=unidadCaloria*capacidadInput

        console.log(`La suma de calorías por comida es de ${valorFinalCaloria}`);
        
        sumaValor = sumaValor + valorFinalCaloria
        }
        //Luego de recorrer todo el ciclo mostramos sumaValor
        
        let totalCalorias1=`Total de calorías ${sumaValor}`;
        
        document.getElementById('resultado1').innerHTML = (totalCalorias1)
        }
    
//Imprime lista de comidas de plan 2
function imprimeListaComida2(respuesta){

    let longArray2= respuesta.length;                
    
        for(var i=0; i<longArray2; i++){
    
        const enlistarPlan2= `<div><img src=${respuesta[i].img} class="estiloImg"alt=""></div>
                    <dl> 
                    <dt><strong>${respuesta[i].alimento}</strong>
                    <dd> ${respuesta[i].calorias} calorias
                    <dd> <input class="cantidadPorcion" type="number"name="cantidad">${respuesta[i].cantidades}
                    </dl>`;
    
        document.querySelector(".listaPlan2 ").innerHTML+=enlistarPlan2 ;
    }
    
    obtenerCaloria2(respuesta)
    }
    
    //Operación para obtener calorías 
    function obtenerCaloria2(respuesta){
    
    //Crea el botón para sumar calorías 
    const btnSumar= document.createElement("button")
    btnSumar.setAttribute("id","button-confirm")
    btnSumar.textContent="Sumar Calorías"
    
    $(".listaPlan2").append(btnSumar)
    
    $("#button-confirm").on("click",()=>{
    
    multiplicarRacion2(respuesta)
    })
    }
    
    // Multiplica valor de inputs por calorias de c/comida
    
    function multiplicarRacion2(respuesta){
let valorInput= document.querySelectorAll(".cantidadPorcion")
let sumaValor = 0;
    for (let index = 0; index < respuesta.length && index <valorInput.length; index++) {
        const valorCaloria= `${respuesta[index].calorias}`
        let unidadCaloria= Number (valorCaloria)
        let capacidadInput= valorInput[index].value
        if (capacidadInput === "" || capacidadInput === null){
            alert ("Error!Por favor, completar los datos")
        }

        let valorFinalCaloria=unidadCaloria*capacidadInput

        console.log(`La suma de calorías por comida es de ${valorFinalCaloria}`);

        sumaValor = sumaValor + valorFinalCaloria
        }
//Luego de recorrer todo el ciclo mostramos sumaValor

            let totalCalorias2=`Total de calorías ${sumaValor}`;
        
            document.getElementById('resultado2').innerHTML = (totalCalorias2)
        }


//Imprime lista de comidas de plan 3
function imprimeListaComida3(respuesta){

let longArray3 = respuesta.length;                

    for(var i=0; i<longArray3; i++){

    const enlistarPlan3= `<div><img src=${respuesta[i].img} class="estiloImg"alt=""></div>
                <dl> 
                <dt><strong>${respuesta[i].alimento}</strong>
                <dd> ${respuesta[i].calorias} calorias
                <dd> <input class="cantidadPorcion" type="number"name="cantidad">${respuesta[i].cantidades}
                </dl>`;

    document.querySelector(".listaPlan3").innerHTML+=enlistarPlan3 ;
}

obtenerCaloria3(respuesta)
}

//Operación para obtener calorías 
function obtenerCaloria3(respuesta){

//Crea el botón para sumar calorías 
const btnSumar= document.createElement("button")
btnSumar.setAttribute("id","button-confirm")
btnSumar.textContent="Sumar Calorías"
$(".listaPlan3").append(btnSumar)

$("#button-confirm").on("click",()=>{

multiplicarRacion3(respuesta)
})
}

// Multiplica valor de inputs por calorias de c/comida

function multiplicarRacion3(respuesta){
    
let valorInput= document.querySelectorAll(".cantidadPorcion")
let sumaValor = 0;
    for (let index = 0; index < respuesta.length && index <valorInput.length; index++) {
    const valorCaloria= `${respuesta[index].calorias}`
    let unidadCaloria= Number (valorCaloria)
    let capacidadInput= valorInput[index].value
    if (capacidadInput === "" || capacidadInput === null){
    alert ("Error!Por favor, completar los datos")
    }

    let valorFinalCaloria=unidadCaloria*capacidadInput

    console.log(`La suma de calorías por comida es de ${valorFinalCaloria}`);

    sumaValor = sumaValor + valorFinalCaloria
    }
    //Luego de recorrer todo el ciclo mostramos sumaValor

    let totalCalorias3=`Total de calorías ${sumaValor}`;

    document.getElementById('resultado3').innerHTML = (totalCalorias3)

    }



//Mostrar Pricing por plan 
function mostrarPricing(){

$(".pagoPlan1").hide()
$(".pagoPlan2").hide()
$(".pagoPlan3").hide()

$(".pagoPlan1").append(`<h3 class="titdescripcion">Plan Nutricional bajar de peso</h3>
<div><p>A partir de:</p></div>
<div><strong id="valorPlan1"> $ ${planNutricionalBajarPeso.precio}</strong></div>
<div><input type="radio"value="1" name="bajarPeso" id="bajarCuota3">3 cuotas de<p id="cuota3Plan1"></p></div>
<div><input type="radio"value="2" name="bajarPeso" id="bajarCuota6">6 cuotas de<p id="cuota6Plan1"></p></div>
<div><input type="radio"value="3" name="bajarPeso" id="bajarCuota12">12 cuotas de<p id="cuota12Plan1"></p></div>
<button id="button-confirm" class="validacionCuota">Confirmar</button>`)

$(".pagoPlan2").append(`<h3 class="titdescripcion">Plan Nutricional subir de peso</h3>
<div><p>A partir de:</p></div>
<div><strong id="valorPlan2"> $ ${planNutricionalSubirPeso.precio}</strong></div>
<div><input type="radio" value="4"name="subirPeso" id="subirCuota3">3 cuotas de<p id="cuota3Plan2"></p></div>
<div><input type="radio"value="5" name="subirPeso"id="subirCuota6">6 cuotas de<p id="cuota6Plan2"></p></div>
<div><input type="radio"value="6" name="subirPeso" id="subirCuota12">12 cuotas de <p id="cuota12Plan2"></p></div>
<button id="button-confirm" class="validacionCuota">Confirmar</button>`)

$(".pagoPlan3").append(`<h3 class="titdescripcion">Plan Nutricional ganar masa muscular</h3>
<div><p>A partir de:</p></div>
<div><strong id="valorPlan3"> $ ${planNutricionalGanarMusculatura.precio}</strong></div>
<div><input type="radio"value="1" name="ganar Musculatura" id="ganarCuota3">3 cuotas de<p id="cuota3Plan3"></p></div>
<div><input type="radio" value="2"name="ganar Musculatura" id="ganarCuota6">6 cuotas de<p id="cuota6Plan3"></p></div>
<div><input type="radio"value="3"name="ganar Musculatura" id="ganarCuota12">12 cuotas de <p id="cuota12Plan3"></p></div>
<button id="button-confirm" class="validacionCuota">Confirmar</button>`)

$(".pagoPlan1").fadeIn(2000)
$(".pagoPlan2").fadeIn(3000)
$(".pagoPlan3").fadeIn(4000)
}




function eleccionCuotasPlan1(){

// RRESULTADO EN 3 CUOTAS
$("input#bajarCuota3").on('click',()=> {

let plan1Cuota3=planNutricionalBajarPeso.en3Cuotas()
plan1Cuota3=parseInt (plan1Cuota3)
document.getElementById("cuota3Plan1").innerHTML=`$ ${plan1Cuota3}`
})
// RRESULTADO EN 6 CUOTAS
$("input#bajarCuota6").on('click',()=> {

let plan1Cuota6=planNutricionalBajarPeso.en6Cuotas()
plan1Cuota6=parseInt (plan1Cuota6)
document.getElementById("cuota6Plan1").innerHTML=`$ ${plan1Cuota6}`
})

// RRESULTADO EN AHORA 12
$("input#bajarCuota12").on('click',()=> {

let plan1Cuota12=planNutricionalBajarPeso.ahora12()
plan1Cuota12=parseInt(plan1Cuota12)
document.getElementById("cuota12Plan1").innerHTML=`$ ${plan1Cuota12}`
})
}


function eleccionCuotasPlan2(){

// RRESULTADO EN 3 CUOTAS
$("input#subirCuota3").on('click',()=> {

let plan2Cuota3=planNutricionalSubirPeso.en3Cuotas()
plan2Cuota3=parseInt (plan2Cuota3)
document.getElementById("cuota3Plan2").innerHTML=`$ ${plan2Cuota3}`
})
// RRESULTADO EN 6 CUOTAS
$("input#subirCuota6").on('click',()=> {

let plan2Cuota6=planNutricionalSubirPeso.en6Cuotas()
plan2Cuota6=parseInt (plan2Cuota6)
document.getElementById("cuota6Plan2").innerHTML=`$ ${plan2Cuota6}`
})

// RRESULTADO EN AHORA 12
$("input#subirCuota12").on('click',()=> {

let plan2Cuota12=planNutricionalSubirPeso.ahora12()
plan2Cuota12=parseInt(plan2Cuota12)
document.getElementById("cuota12Plan2").innerHTML=`$ ${plan2Cuota12}`
})
}

function eleccionCuotasPlan3(){

// RRESULTADO EN 3 CUOTAS
$("input#ganarCuota3").on('click',()=> {

let plan3Cuota3=planNutricionalGanarMusculatura.en3Cuotas()
plan3Cuota3=parseInt (plan3Cuota3)
document.getElementById("cuota3Plan3").innerHTML=`$ ${plan3Cuota3}`
})
// RRESULTADO EN 6 CUOTAS
$("input#ganarCuota6").on('click',()=> {

let plan3Cuota6=planNutricionalGanarMusculatura.en6Cuotas()
plan3Cuota6=parseInt (plan3Cuota6)
document.getElementById("cuota6Plan3").innerHTML=`$ ${plan3Cuota6}`
})

// RRESULTADO EN AHORA 12
$("input#ganarCuota12").on('click',()=> {

let plan3Cuota12=planNutricionalGanarMusculatura.ahora12()
plan3Cuota12=parseInt(plan3Cuota12)
document.getElementById("cuota12Plan3").innerHTML=`$ ${plan3Cuota12}`
})
}




