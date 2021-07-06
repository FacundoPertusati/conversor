const valor = {
    Dólar: 95.88,
    Euro:113.72 ,
    Yen : 0.86,
    Libra: 132.85,
    Franco : 103.98,
    Corona : 11.20 ,
    Real : 17,
    

}



const impuestos = {
    "0%": 0,
    "8%": 0.8,
    "30%": 0.30,
    "35%": 0.35,
    "43%": 0.43,
    "65%": 0.65,
}


let cantidad = $("#cantidadDinero");
let Divisa2 = $("#selector2");
let comision = $("#comision");
let boton = $("#boton")

let lista = []

boton.click(convertir)
function convertir() {



    


    /*let resultado = Divisa2.val *cantidad.value * Divisa1.value * comision.value
    console.log (`${divisa2.value} x ${cantidad.value} x ${Divisa1.value} x ${comision.value} = ${resultado}`);
    $("#resultado").textContent = resultado.toFixed(2) +"$"*/
 

   
    if (cantidad.val() >= cantidad.attr("min")  ) {  
        // .attr("min") hace referencia al valor configurado en el atributo min del <input>
        valorDinero = cantidad.val();
      } else {
        cantidad.val(1);
        valorDinero = cantidad.val();
      }
    
      const dinero = valorDinero * Divisa2.children(":selected").val()
      const impuesto = comision.children(":selected").val();
      const operacion = dinero + (dinero * impuesto);
      $("#resultado").html("$" + operacion )
    
    


    function agregarALista() {
        lista.push( "$"+operacion)
      const historial = JSON.stringify(lista)
        localStorage.intercambio = historial;

    }


    agregarALista()

    $(".lista").append(`<div> <p>  ${lista} </p> </div>` )


    $(".historial").click(() => {

        $(".lista").slideToggle("fast");

    }


    )

}








function rellenarSelec(selec, obj) {

    for (const key in obj) {

        const opcion = `<option value="${obj[key]}">${key}</option>`
        //document.createElement("option")
        //opcion.value=obj[key]
        //opcion.textContent=key
        selec.append(opcion)

    }



}

rellenarSelec(Divisa2, valor);
rellenarSelec(comision, impuestos);



const URLJSON = "divisas.json";



$("#btn").click(()=>{
    $.getJSON(URLJSON,function(respuesta,estado){
        if(estado ==="success"){
        let misDatos= respuesta;
        for(const dato of misDatos) {
            $("#money").append(`
            <div>
            <p class="nombre">${dato.nombre}</p>
            <p class="precio">${"$"+ dato.precio}</p>
                </div>`)
        } }

    })

})




