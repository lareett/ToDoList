// Seleção de elementos

let inputTarefa = document.querySelector('#inputTarefa');
let btn = document.querySelector('#btnAdd');
let main = document.querySelector('#orderlist');


//Funções

function addTarefa() {
    // validar o campo input

    let valorInput = inputTarefa.value;

    // condicional
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        let addNovoItem = `<div class="containerlist">
            <h3>${valorInput}</h3>
            <button class="finish">Terminado</button>
            <button class="edit-todo">Editar</button>
            <button class="remove-todo">Cancelar</button>
        </div>`; // colocando o HTML item card

        // ADICIONAR NOVO ITEM

        main.innerHTML += addNovoItem;

        // ZERAR O CAMPO
        inputTarefa.value = "";
        inputTarefa.focus();
    }

    //usar tecla enter



    


};


//Eventos