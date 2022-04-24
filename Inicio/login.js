var label = document.getElementById("labelRefDatos");
label.style.display = 'none'

var nombreLogueado; 

function ValidarDatosLogin(){
    var form = document.getElementById("FormularioLogin"); 
    var objPersona = JSON.parse(localStorage.getItem("persona"));

    var cont = 0;

    //cedula y contraseña de la pantalla del login
    var cedulaLog = document.getElementById("txtCedula").value;
    var contrasennaLog = document.getElementById("txtContrasenna").value;
    
    try{

        if(objPersona === 0 ||objPersona === null ||objPersona === undefined ){
            label.style.display = 'inline';
            label.style.color = 'red';
            label.style.fontWeight = 'bold';
        }else{
            objPersona.forEach(per => {
                if(per.CedulaRegistroUsu === cedulaLog && per.Contrasenna1 === contrasennaLog){           
                    console.log("La cedula es del usuario: ", per.Nombres);

                    localStorage.setItem("NombreDelLogueado",per.Nombres);
                    localStorage.setItem("cedulaDelLogueado",per.CedulaRegistroUsu);    
                    
                    var myModal = new bootstrap.Modal(document.getElementById("myModal"))
                    nombreLogueado = per.Nombres;
                    var contenidoLabel = document.getElementById("labelNombreUsu");
                    contenidoLabel.textContent ="Hola Bienvenido "+ nombreLogueado;
                    myModal.show(); /// activa el modal que nombre arriba

                    cont = 1;
                }else{
                    form.reset();
                }
            });
            if(cont === 1 ){
                //no necitito validacion , ta imprimo el nombre arriba con un alert
            }else{
                // o sea si no encontro ningun usuario , haga esto
                label.style.display = 'inline';
                label.style.color = 'red';
                label.style.fontWeight = 'bold';
            }
        }

    }catch(error){
        alert("entro aqui al catch")
        label.style.display = 'inline';
        label.style.color = 'red';
        label.style.fontWeight = 'bold';
    }
}
function CapturarEventoKey(){
    addEventListener("keydown",(event)=>{
        label.style.display = 'none';
        label.style.display = 'none';
    });
}
CapturarEventoKey();// se ejucuta una accion al inicio del form

function Continuar(){
    window.location.href= "/DashBoard/Dashboard.html"; 
}
function Detener(){
    window.location.reload(); 
}
function MensajeParaCerrarseccionUsu(){
    localStorage.removeItem("cedulaDelLogueado");
    localStorage.removeItem("NombreDelLogueado");
    window.location.href= "/Cliente/Buscar_viaje.html";
}
function IrMenuPrincipal(){
  MensajeParaCerrarseccionUsu();
}
