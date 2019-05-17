$(document).ready(function () {
    // Seleciona o elemento no DOM
    var $wrapper = document.querySelector('.container');
      
        for (loop = 0; loop < localStorage.length-4; loop++)
        {   
            if(!(localStorage.key(loop) == "convidados" || localStorage.key(loop) == "semAlcool" || localStorage.key(loop) == "comiloes" || localStorage.key(loop) == "beberroes")){
            HTMLItem = "<div class='row'><div class='col-md-4'>"+localStorage.getItem(localStorage.key(loop))+"</div>";
            HTMLKey = "<div class='col-md-8'>"+localStorage.key(loop)+"</div></div>";
            // Insere o texto antes do conteúdo atual do elemento
            $wrapper.insertAdjacentHTML('afterbegin', HTMLItem);
            $wrapper.insertAdjacentHTML('afterbegin', HTMLKey);
            }
        }
    
  });
