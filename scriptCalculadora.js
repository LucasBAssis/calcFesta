function obterMarcados() {
  var listaMarcados = document.getElementsByTagName("INPUT");
  
  for (loop = 0; loop < listaMarcados.length; loop++) {
     var item = listaMarcados[loop];
     if (item.type == "checkbox" && item.checked) {
        localStorage.setItem(item.id, item.value);
     }
  }
}

var form = document.getElementById('formulario');
var convidados = document.getElementById('convidados');
var semAlcool = document.getElementById('semAlcool');
var comiloes = document.getElementById('comiloes');
var beberroes = document.getElementById('beberroes');

form.addEventListener('submit', function(e) {
    // alerta o valor do campo
    localStorage.setItem("convidados", convidados.value);
    localStorage.setItem("semAlcool", semAlcool.value);
    localStorage.setItem("comiloes", comiloes.value);
    localStorage.setItem("beberroes", beberroes.value);

    // impede o envio do form
    //e.preventDefault();
});