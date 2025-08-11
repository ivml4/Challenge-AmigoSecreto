//array que almacena los nombres de los amigos
let amigos = [];

//funcion para agregar un amigo
function agregarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const nombreAmigo = inputAmigo.value.trim();

  //limpiar campo de entrada 
  inputAmigo.value = "";

  //valida que el campo no este vacio
  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre.");
    return; //detiene la ejecucion de la funcion
  }

  //validar que el nombre no este duplicado
  if (amigos.includes(nombreAmigo)) {
    alert(`El nombre ${nombreAmigo} ya esta en la lista`);
    return;
  }  

  //agregar el nombre a la array de amigos
  amigos.push(nombreAmigo);
  console.log(amigos)


  //actualizar la lista en el HTML
  actualizarLista();

}

function actualizarLista(){
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = "";
  for (let index = 0; index < amigos.length; index++) {
    const nombreAmigo = amigos[index];
    let amigoLi = document.createElement('li');
    
    amigoLi.textContent= nombreAmigo;

    listaAmigos.appendChild(amigoLi);
    
  }
}
// funcion para sortear amigos
function sortearAmigo(){
    if (amigos.length === 0) {
        document.getElementById('listaAmigos').innerHTML = 'agrega un nombre.';
        return;
    }

    let index = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[index];

    document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

}