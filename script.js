function obterMarcados() {
  var listaMarcados = document.getElementsByTagName("INPUT");
  for (loop = 0; loop < listaMarcados.length; loop++) {
     var item = listaMarcados[loop];
     if (item.type == "checkbox" && item.checked) {
       alert(item.id);
     }
  }
}