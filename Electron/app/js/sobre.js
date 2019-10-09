const { ipcRenderer, shell } = require('electron');
const node = require('process');


let linkGithub = document.querySelector("#link-github");
let btnFechar = document.querySelector('#btn-fechar');
let versaoNode = document.querySelector('#versao-node');
let versaoElectron = document.querySelector('#versao-electron');

window.onload = function(){
    versaoNode.textContent = node.version;
    versaoElectron.textContent = node.versions.electron;
}
btnFechar.addEventListener('click', function() {
    ipcRenderer.send('fechar-janela-sobre');
});

linkGithub.addEventListener('click', function () {
    shell.openExternal("https://www.github.com/1henriq1");
    ipcRenderer.send('fechar-janela-sobre');
})