var dbCttCtt = {
    "data": [
        {
            "id": 1,
            "nome": "Rafael Gomes",
            "desc": "amigo da minha prima"
        }
    ]
}

var dbCtt = JSON.parse(localStorage.getItem('dbCtt'));
if (!dbCtt) {
    dbCtt = dbCttCtt
};

function insertCtt(Ctt) {

    let novoId = dbCtt.data[dbCtt.data.length - 1].id + 1;
    let novoCtt = {
        "id": novoId,
        "nome": Ctt.nome,
        "desc": Ctt.desc
    };

    dbCtt.data.push(novoCtt);

    localStorage.setItem('dbCtt', JSON.stringify(dbCtt));
}
