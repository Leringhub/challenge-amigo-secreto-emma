// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
console.log (listaAmigos);
function agregarAmigo() {
    let agregarnombre = document.getElementById("amigo").value;
    if (agregarnombre === "") {
        alert("Por favor, inserte un nombre");
    } else {
        listaAmigos.push(agregarnombre);
    }
 limpiar();
 lista();
 return;
}

function limpiar() {
    document.getElementById("amigo").value = "";
}

function lista() {
    let listas = document.getElementById("listaAmigos");
    listas.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
     let crear = document.createElement("li");
      crear.textContent = listaAmigos[i];
      listas.appendChild(crear);
    }   
 return;
}
function sortearAmigo(){
    let resultadoAmigo = document.getElementById("resultado");
    if (listaAmigos.length === 0) {
        alert("Por favor, inserte el nombre de sus amigos");
    } else {
        let nombreAleatorio = Math.floor(Math.random()*listaAmigos.length);

        resultadoAmigo.innerHTML = listaAmigos[nombreAleatorio];
        
    }
    return;
}
