// declara um conjunto fake de dados para contatos
var dbfake = {
    "data": [
        {
            "id": 1,
            "usuario": "Carolina Alves",
            "email": "carol.alves@pucminas.sga.br",
            "senha": "carol123",
            "data_nascimento": "05/06/1999"
        },
        {
            "id": 2,
            "usuario": "Dayanne Beatriz",
            "email": "dayanne.beatriz@sga.pucminas.br",
            "senha": "dayanne123",
            "data_nascimento": "02/11/1999"
        },
        {
            "id": 3,
            "usuario": "Gabriel de Moura",
            "email": "gabriel.moura@sga.pucminas.br",
            "senha": "gabriel123",
            "data_nascimento": "02/11/1999"
        },
        {
            "id": 4,
            "usuario": "Pedro Borges",
            "email": "pedro.borges@sga.pucminas.br",
            "senha": "pedro123",
            "data_nascimento": "02/11/1999"
        }
    ]
}

// Caso exista no Local Storage, recupera os dados salvos
var db = JSON.parse(localStorage.getItem('db'));
if (!db) {
    db = dbfake;
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertUsuario(usuario) {
    // Calcula novo Id a partir do último código existente no array
    let novoId = db.data[db.data.length - 1].id + 1;
    
    let novoUsuario = {
        "id": novoId,
        "usuario": usuario.usuario,
        "email": usuario.email,
        "senha": usuario.senha,
        "data_nascimento": usuario.data_nascimento
    };

    // Insere o novo objeto no array
    db.data.push(novoUsuario);
    displayMessage("Usuário inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db', JSON.stringify(db));
}

function updateUsuario(id, usuario) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].usuario = usuario.usuario,
    db.data[index].email = usuario.email,
    db.data[index].senha = usuario.senha,
    db.data[index].data_nascimento = usuario.data_nascimento

    displayMessage("Usuário alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Usuário removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db', JSON.stringify(db));
}

function procuraUsuario(procurado) {
    
    for (i = 0; i < db.data.length; i++) {
        var  listaUsuario = db.data[i];
        console.log("USUARIO");
        console.log(listaUsuario.usuario);
        console.log("PROCURADO");
        console.log(procurado.usuario);
        if (listaUsuario.usuario == procurado.usuario)
        {
            if (listaUsuario.senha == procurado.senha)
                return 1;
            else
                return 2;
        }
    }
    return 3;
}