var dbCalcCalc = {
    "data": [
        {
            "id": 1,
            "produto": ["Batata Frita", "Salgadinho", "Hamburguer","Bala", "Sorvete", "Refrigerante","Suco"],
            "qtd": [590,30,12,100,5,10,20]
        }
    ]
}

var dbCalc = JSON.parse(localStorage.getItem('dbCalc'));
if (!dbCalc) {
    dbCalc = dbCalcCalc
};

function insertCalc(calc) {

    let novoId = dbCalc.data[dbCalc.data.length - 1].id + 1;
    let novaCalc = {
        "id": novoId,
        "produto": calc.produto,
        "qtd": calc.qtd
    };

    dbCalc.data.push(novaCalc);

    localStorage.setItem('dbCalc', JSON.stringify(dbCalc));
}
