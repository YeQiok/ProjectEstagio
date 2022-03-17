import 'regenerator-runtime/runtime';
import axios from 'axios';


// const axios = require('axios');

criarCards();

async function makePost() {
    const titulo = document.querySelector('.titulo');
    const descricao = document.querySelector('.descricao');

    let payload = { title: titulo, description: descricao };
    let res = await axios.post('https://chronos.compraqui.app/api/tasks', payload);
    let data = res.data;

    console.log(data);

}

async function makeGet() {

    let res = await axios.get('https://chronos.compraqui.app/api/tasks');
    let data = res.data;

    console.log(data);
    return data;
}

async function criarCards() {


    let data = await makeGet();
    for (const index in data) {

        var divNome = document.createElement("div");
        var divDescricao = document.createElement("div");
        var divStatus = document.createElement("div");

        var pontos = document.getElementById("tres-pontos");
        var opcoes = document.getElementById("popUpOpcoes");

        var tresPontos = pontos.cloneNode(true);
        tresPontos.setAttribute("name", data[index].guid);
        tresPontos.classList.remove("display-off");

        var divWrapper = opcoes.cloneNode(true);
        divWrapper.classList.remove("display-off");

        divNome.innerHTML = data[index].title;
        divNome.classList.add("nome");

        divDescricao.innerHTML = data[index].description;
        divDescricao.classList.add("trabalho");

        divStatus.innerHTML = data[index].situation;
        divStatus.classList.add("situacao");

        divNome.appendChild(divWrapper);
        divNome.appendChild(tresPontos);

        var li = document.createElement("li");
        li.appendChild(divNome);
        li.appendChild(divDescricao);
        li.appendChild(divStatus);

        var ul = document.getElementById("listatarefa");

        ul.appendChild(li);

    }
}

async function makePut() {
    const titulo = document.querySelector('#titulo');
    const id = document.querySelector('');
    const descricao = document.querySelector('#descricao');

    let payload = { title: titulo, description: descricao, guid: id };
    let res = await axios.put('https://chronos.compraqui.app/api/tasks', payload);
    let data = res.data;

    console.log(data);

}

async function makedelete() {
    const id = document.querySelector('');

    let payload = id;
    let res = await axios.delete('https://chronos.compraqui.app/api/tasks', payload);
    let data = res.data;

    console.log(data);

}