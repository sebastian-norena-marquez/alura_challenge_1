// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", () => {
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    const amigos = []; // Almacena los nombres de los amigos

    // Agregar amigo a la lista
    function agregarAmigo() {
        const nombre = inputAmigo.value.trim();
        
        if (!validarNombre(nombre)) {
            alert("Ingrese un nombre válido (solo letras, mínimo 3 caracteres).");
            return;
        }
        
        if (amigos.includes(nombre)) {
            alert("Este nombre ya ha sido agregado.");
            return;
        }
        
        amigos.push(nombre);
        actualizarLista();
        inputAmigo.value = "";
    }

    // Validar que el nombre solo contenga letras y tenga al menos 3 caracteres
    function validarNombre(nombre) {
        const regex = /^[A-Za-zÀ-ÿ ]{3,}$/;
        return regex.test(nombre);
    }

    // Actualizar la lista de amigos en la interfaz
    function actualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach((amigo, index) => {
            const li = document.createElement("li");
            li.textContent = amigo;
            listaAmigos.appendChild(li);
        });
    }

    // Sortear un amigo secreto
    function sortearAmigo() {
        if (amigos.length < 2) {
            alert("Debe haber al menos dos nombres en la lista para sortear.");
            return;
        }
        
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio];
        
        resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
    }

    // Asignar eventos a los botones
    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});
