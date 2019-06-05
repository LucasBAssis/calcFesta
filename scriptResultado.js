$(document).ready(function () {
    var $wrapper = document.querySelector('.botoes');
    var HTMLItem = '';
    var comiloes = localStorage.getItem("comiloes");
    var beberroes = localStorage.getItem("beberroes");
    var semAlcool = localStorage.getItem("semAlcool");
    var convidados = localStorage.getItem("convidados");

        for (loop = 0; loop < localStorage.length; loop++)
        {   
            var produtoComCodigo = localStorage.key(loop);
            if(!(produtoComCodigo == "convidados" || produtoComCodigo == "semAlcool" || produtoComCodigo == "comiloes" || produtoComCodigo == "beberroes"))
            {
                var porcao =  localStorage.getItem(produtoComCodigo);
                if(produtoComCodigo[0] == "c") //se for comida
                {
                    var quantidade = ((convidados-comiloes)*porcao)+(comiloes*porcao*1.5);
                    var unidade = "g";
                }
            
                else if (produtoComCodigo[0] == "b") //se for bebida
                {
                    var quantidade = (semAlcool * porcao) + ((convidados-semAlcool)*porcao*0.5);
                    var unidade = "ml";
                }
                    
                else if (produtoComCodigo[0] == "d") //se for doce
                {
                    var quantidade = (convidados*porcao);
                    var unidade = "g";
                }
                    
                else if (produtoComCodigo[0] == "a") //se for bebida alcoolica
                {
                    var quantidade = ((convidados-semAlcool-beberroes)*porcao)+(beberroes*porcao*1.5);
                    var unidade = "ml";
                }
                    
                var produto = produtoComCodigo.substr(1);
                HTMLItem += `<div class='row'>
                                <div class='col-md-8'>
                                    <p> ${produto}</p>
                                </div>
                                <div class='col-md-4'>
                                    <p>${quantidade}${unidade}</p>
                                </div>    
                            </div>`;
            }
        }

        $wrapper.insertAdjacentHTML('beforebegin', HTMLItem);
        localStorage.clear();
  });
