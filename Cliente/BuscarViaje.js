var labelOcultoInfo = document.getElementById("labelOcultoinfo");
var labelOculto = document.getElementById("labelOculto");
function MostrarDatosDeLosRides(){    
    try{
        let arrayRides = JSON.parse(localStorage.getItem("Ride"));
        arrayRides.forEach(rides =>{
        let idDeLaTablaPrincipal = document.getElementById("jtablePrincipal");
      
        let newRoW = idDeLaTablaPrincipal.insertRow(-1); 
        
        let newCell = newRoW.insertCell(0); 
        newCell.textContent = rides["NumViaje"];

        newCell = newRoW.insertCell(1);
        newCell.textContent = rides["LugarSalida"];

        newCell = newRoW.insertCell(2);
        newCell.textContent = rides["LugarDestino"];

        let newCellButtons = newRoW.insertCell(3); //inserta la nueva celda en la pocision insertada en este caso en la pocicion 3
        let btnEliminar = document.createElement("button"); //crea el elemento del boton en la celda
        let btn = btnEliminar.textContent = "Solicitar"// agrega el texto al boton
        btnEliminar.setAttribute("class","btn-success");
        newCellButtons.appendChild(btnEliminar);
               
        btnEliminar.setAttribute("id","btnEliminar");
        
    });
    }catch(error){

    }
}
function CambiarEstiloDeBotonReservarTable(){
    document.getElementById("btnEliminar").style.fontSize = "25px";
    document.getElementById("btnEliminar").style.padding = "9px";
    document.getElementById("btnEliminar").style.letterSpacing = "1px";
    document.getElementById("btnEliminar").style.transition = "0.1s";
    document.getElementById("btnEliminar").style.border = "none";
    document.getElementById("btnEliminar").style.borderRadius = "10px";

}
MostrarDatosDeLosRides();

function BuscarRide(){
    var txtOrigen = document.getElementById("txtOrigen").value;
    var txtDestino = document.getElementById("txtDestino").value;

    var arrayRides= JSON.parse(localStorage.getItem("Ride"))
    console.log(arrayRides);

    var cont1 = 0;

    arrayRides.forEach(rides =>{
        if(txtOrigen === rides.LugarSalida && txtDestino === rides.LugarDestino){
            var numviaje = rides.NumViaje;
            var salida = rides.LugarSalida;
            var destino = rides.LugarDestino;
            localStorage.setItem("Busqueda NunViaje",numviaje);
            localStorage.setItem("Busqueda salida",salida);
            localStorage.setItem("Busqueda destino",destino);
            cont1 = 1
        }else{
            
        }

    });
    if(cont1 >= 1){
        let viajenum = localStorage.getItem("Busqueda NunViaje");
        let sali = localStorage.getItem("Busqueda salida");
        let desti = localStorage.getItem("Busqueda destino");

        labelOculto.style.display = 'inline';
        labelOcultoInfo.style.display = 'inline';

        labelOculto.textContent = "Viaje Disponible"
        labelOculto.style.color = '#09ff00'
        labelOculto.style.fontWeight = 'bold'
        labelOcultoInfo.textContent = "Lugar de salida "+sali+" Hasta "+desti+" con el numero de viaje "+viajenum;

    }else{
        labelOculto.style.display = 'inline';
        labelOcultoInfo.style.display = 'none';

        labelOculto.textContent = "Este Viaje no se encuentra"
        labelOculto.style.color = 'red'
        labelOculto.style.fontWeight = 'bold'
    }
}
function CapturarEvento(){
    
    addEventListener("keydown",(event)=>{

        labelOculto.style.display = 'none';
        labelOcultoInfo.style.display = 'none';

        localStorage.removeItem("Busqueda NunViaje");
        localStorage.removeItem("Busqueda salida");
        localStorage.removeItem("Busqueda destino");
    });
}
CapturarEvento();
function IralLogin(){
    window.location.href = "/Inicio/login.html"
  }