const botaoBtn = document.querySelector(".botao");
const popup = document.querySelector(".popup-wrapper");

botaoBtn.addEventListener("click", () => {
    popup.style.display = "block";
});

popup.addEventListener("click", event => {
    const classNameOfClickElement = event.target.classList[0];
    const className = ['popup-close', 'popup-wrapper'];
    const clousepopupverfic = className.some(className => className === classNameOfClickElement);

    if (clousepopupverfic) {
        popup.style.display = "none";
    }
});

function adcElemento(nome, descricao, stats) {
    var liNova = document.createElement("li");
    var conteudoNovo = document.createTextNode("Nome:" + nome + "<br>Descrição" + descricao + "<br>Stats" + stats);
    liNova.appendChild(conteudoNovo);
    var ulAtual = document.getElementById("listatarefa");
    ulAtual.appendChild(liNova);
}

const ellipsisBtn = document.querySelector(".fa-ellipsis-v");
const popupedit = document.querySelector(".popup-wrapper-1");

ellipsisBtn.addEventListener("click", () => {
    popupedit.style.display = "block";
});

popupedit.addEventListener("click", event => {
    const classNameOfClickElementedit = event.target.classList[0];
    const classNameedit = ['fa-ellipsis-v', 'popup-wrapper-1'];
    const closeverif = classNameedit.some(classNameedit => classNameedit === classNameOfClickElementedit);

    if (closeverif) {
        popupedit.style.display = "none";
    }
});

const alterarBtn = document.querySelector(".bxs-edit-alt");
const excluirBtn = document.querySelector(".bxs-trash-alt");
const popupAlterar = document.querySelector(".popup-wrapper");

alterarBtn.addEventListener("click", () => {
    popupAlterar.style.display = "block";
});

popupAlterar.addEventListener("click", event => {
    const classNameOfClickElementAlterar = event.target.classList[0];
    const classNameAlterar = ['popup-close', 'popup-wrapper'];
    const closepopupAlterar = classNameAlterar.some(classNameAlterar => classNameAlterar === classNameOfClickElementAlterar);

    if (closepopupAlterar) {
        popupAlterar.style.display = "none";
    }
});