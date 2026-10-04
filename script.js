console.log("Mi asistente esta conectado");

function responder(){}
    const mensaje=
document.getElementById("mensaje");
    const respuesta=
document.getElementById("respuesta");    

    
    const texto = mensaje.value.trim();

    if (texto ===""){
        respuesta.textoContent = "pensando...";

        fetch("/preguntar",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({mensaje:texto})
        })
    .then(response =>j.son())
    .then(data =>{
        if (data.respuesta){
            respuesta.textContent = "No pude obtener una respuesta.";
        }
    })
    .catch(error =>{
        console.error(error);
        respuesta.texContent = "Ocurrio un error.";
    });

    mensaje.value ="";
}
