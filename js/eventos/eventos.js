function eventoDescripPlanes(){


//Evento Mouseover para mostrar características Plan 1
$("#planUno").mouseover(()=>
{
    arrayPlanes.find(e=>e=== planNutricionalBajarPeso)

    $("#planUno").prepend(`<div class="infoPlan" id="divInfoPlan1"><h3 class="titPlan">${planNutricionalBajarPeso.nombre} </h3>
                                                                    <p>${planNutricionalBajarPeso.dias}</p>
                                                                    <p>${planNutricionalBajarPeso.calorias}</p>
                                                                    <p>$ ${planNutricionalBajarPeso.precio}</p>
                                                                    <p>Incluye suplementos proteicos</p></div>`);
})
    
    $("#planUno").mouseout(()=>
{
    $("#divInfoPlan1").hide()
})



//Evento Mouseover para mostrar características Plan 2
$("#planDos").mouseover(()=>
{
    arrayPlanes.find(e=>e=== planNutricionalSubirPeso)

    $("#planDos").prepend(`<div class="infoPlan"id="divInfoPlan2"><h3 class="titPlan">${planNutricionalSubirPeso.nombre}</h3>
                                                                <p>${planNutricionalSubirPeso.dias}</p>
                                                                <p>${planNutricionalSubirPeso.calorias}</p>
                                                                <p>$ ${planNutricionalSubirPeso.precio}</p> 
                                                                <p>Incluye suplementos proteicos</p></div>`);
})

    $("#planDos").mouseout(()=>
{
    $("#divInfoPlan2").hide()
})

//Evento Mouseover para mostrar características Plan 3
$("#planTres").mouseover(()=>
{
    arrayPlanes.find(e=>e=== planNutricionalGanarMusculatura)

    $("#planTres").prepend(`<div class="infoPlan"id="divInfoPlan3"><h3 class="titPlan">${planNutricionalGanarMusculatura.nombre}</h3>
                                                                    <p>${planNutricionalGanarMusculatura.dias}</p>
                                                                    <p>${planNutricionalGanarMusculatura.calorias}</p>
                                                                    <p>$ ${planNutricionalGanarMusculatura.precio}</p> 
                                                                    <p>Incluye suplementos proteicos</p></div>`);
})

$("#planTres").mouseout(()=>
{
$("#divInfoPlan3").hide();
})

}

/************Modal Confirmación final******/
function confirmacionCuotas(){
$(".validacionCuota").click(()=>{

$(".confirmacionFinal").append (`<div>
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">¡Has confirmado tu plan!</h5>
    </div>
    <div class="modal-body">
      <p>Estarás recibiendo un mail con el plan armado por una nutricionista</p>
      <p>En la próxima semana estarás recibiendo los suplementos proteícos</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn botonEleccionPlanes" data-bs-dismiss="modal"onclick= "eventoFinalizacion()">Aceptar</button>
    </div>
  </div>
</div>
</div>`)
})
}

function eventoFinalizacion(){ window.location.href="index.html"}


