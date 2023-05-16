function validarForm() {
  var bien = true;
  var email = document.getElementById('email');
  if (email.value.includes('@') && email.value.includes('gmail.com')) {
    email.className = "form-control is-valid";
    document.getElementById('feedbackMail').style.display = "none";
  } else {
    email.className = "form-control is-invalid";
    document.getElementById('feedbackMail').style.display = "block";
    bien = false;
  }
  var contraseña = document.getElementById("contra");
  if (contraseña.value.length >= 8) {
    contraseña.className = "form-control is-valid";
    document.getElementById('feedbackContra').style.display = "none";
  } else {
    contraseña.className = "form-control is-invalid";
    document.getElementById('feedbackContra').style.display = "block";
    bien = false;
  }
  var dni = document.getElementById('DNI');
  if (dni.value.length == 8) {
    dni.className = "form-control is-valid";
    document.getElementById('feedbackDni').style.display = "none";
  } else {
    dni.className = "form-control is-invalid";
    document.getElementById('feedbackDni').style.display = "block";
    bien = false;
  }
  var celu = document.getElementById('celular');
  console.log(celu.value.length);
  if (celu.value.includes('+54 9 11') && celu.value.length == 18) {
    celu.className = "form-control is-valid";
    document.getElementById('feedbackCelu').style.display = "none";
  } else if (!celu.value.includes('+54 9 11') && celu.value.length != 18) {
    celu.className = "form-control is-invalid";
    document.getElementById('feedbackCelu1').style.display = "block";
    bien = false;
  }
  else if (!celu.value.includes('+54 9 11')) {
    console.log(celu.value.includes('+54 9 11'));
    celu.className = "form-control is-invalid";
    document.getElementById('feedbackCelu2').style.display = "block";
    bien = false;
  }
  else if (celu.value.length != 18) {
    celu.className = "form-control is-invalid";
    document.getElementById('feedbackCelu3').style.display = "block";
    bien = false;
  }
  if(bien){
    window.open("./insert");
  }
}