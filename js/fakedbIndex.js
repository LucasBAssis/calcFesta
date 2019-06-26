// declara um conjunto fake de dados para contatos
var dbfake = {
    "data": [
        {
            "id": 1,
            "usuario": "dayanne",
            "senha": "dayanne123"
        },
        
        {
            "id": 2,
            "usuario": "pedro",
            "senha": "pedro123"
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
        "senha": usuario.senha
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
    db.data[index].senha = usuario.senha,

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