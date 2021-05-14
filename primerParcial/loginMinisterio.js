function validateForm() {
    var x = document.forms["formulario"]["contraseña"].value;
    var y = document.forms["formulario"]["usuario"].value;
    
    if (x.length < 4) {
        alert("La contraseña tiene que tener minimo 4 caracteres");
        return false;
      }
  }

  var dato = null
  function capturar(aaa) {
    dato = document.getElementsById("usuario").value
  }

  
  