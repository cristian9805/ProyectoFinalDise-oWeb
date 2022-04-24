function ObjPersona(){
  const form = document.getElementById("formularioRegistroUsu"); 
  /*form.addEventListener("submit",function(event){
    event.preventDefault();
    let transaFormData = new FormData(form);
    let objPersonaDatos = ConvertirDatosformDataOBJ(transaFormData)
    console.log(objPersonaDatos);
  })*/
  let transaFormData = new FormData(form);
  let objPersonaDatos = ConvertirDatosformDataOBJ(transaFormData)
  AlmacenarEnLocalStorage(objPersonaDatos)
  form.reset();
}
function AlmacenarEnLocalStorage(objPersonaDatos){
  // || esto significa ,que si esta vacio o null "||" entonces es un array vacio
  let datos = JSON.parse(localStorage.getItem("persona")) || [];
  datos.push(objPersonaDatos); 
  let arrayJson = JSON.stringify(datos); 
  localStorage.setItem("persona",arrayJson);

  var myModal = new bootstrap.Modal(document.getElementById("myModalGuardarUsu"));//llamar al modal y pregunbtar si desea eliminar el ride
  myModal.show();
}

function ConvertirDatosformDataOBJ(transaFormData){
  let Apellido1 = transaFormData.get("txtApellido1");
  let Apellido2 = transaFormData.get("txtApellido2");
  let NumCel = transaFormData.get("txtNumTelefono");
  let Nombres = transaFormData.get("txtNombres");
  let FechaNaci = transaFormData.get("dateFechaNaci");
  let CedulaRegistro = transaFormData.get("txtCedulaRegistroUsu");
  let Contrasenna1 = transaFormData.get("txtContrasenna1");
  let Contrasenna2 = transaFormData.get("txtContrasenna2");
  return {
    "Apellido1":Apellido1, 
    "Apellido2": Apellido2, 
    "NumTelefono":NumCel ,
    "Nombres": Nombres,
    "dateFechaNaci": FechaNaci,
    "CedulaRegistroUsu": CedulaRegistro, 
    "Contrasenna1": Contrasenna1,
    "Contrasenna2": Contrasenna2
  }
}
function GuardarDatosRegistroUsu(){   
  ObjPersona();
    /*let persona = [document.getElementById("txtApellido1").value,
    document.getElementById("txtApellido2").value,
    document.getElementById("txtNumTelefono").value,
    document.getElementById("txtNombres").value,        
    document.getElementById("dateFechaNaci").value,      
    document.getElementById("txtCedulaRegistroUsu").value,
    document.getElementById("txtContrasenna1").value,    
    document.getElementById("txtContrasenna2").value
    ];*/     
    /*let persona = {
      Apellido1 : document.getElementById("txtApellido1").value,
      Apellido2 : document.getElementById("txtApellido2").value,
      NumCel : document.getElementById("txtNumTelefono").value,
      Nombres : document.getElementById("txtNombres").value,
      FechaNaci : document.getElementById("dateFechaNaci").value,
      CedulaRegistro : document.getElementById("txtCedulaRegistroUsu").value,
      Contrasenna1 : document.getElementById("txtContrasenna1").value,
      Contrasenna2 : document.getElementById("txtContrasenna2").value
    }*/

    let datos = JSON.parse(localStorage.getItem("persona"));
    datos.push(persona); 
    let arrayJson = JSON.stringify(datos); 
    localStorage.setItem("persona",arrayJson);

    FormularioRegistroUsu.reset();
    window.alert("Usted se ah registrdo exitosamente");
    window.location.href= "login.html";
 
    return persona;
    
  };
function Continuar(){
  window.location.href= "/Inicio/login.html";
}

/*function ObtenerDaatosLocalStorage (){
  let exist = true;
  if(localStorage.getItem("persona")){
    let per = JSON.parse(localStorage.getItem("persona"));   
    console.log(per);
    exist = true
    console.log(exist);
  }else{
    console.log("No har datos registrados de personas")
    exist = false;
    console.log(exist);
  }
  return exist;
}*/

