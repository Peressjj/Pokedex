const urlApi = "https://pokeapi.co/api/v2/pokemon/"

let namePokemon = null
let data = null
let pokemonImg = document.getElementById("pokemon")
let teste = document.getElementById("teste")
let text = document.getElementById("texto");
let input = document.getElementById("bo");
let boton = document.getElementById("boton");

async function concApi() {
    const urlCompletApi = "https://pokeapi.co/api/v2/pokemon/" + namePokemon

    const response = await fetch(urlCompletApi)
    data = await response.json()
    console.log(data)
    Img(data)
}

boton.addEventListener("click", function () {
    text.innerText = input.value;
    namePokemon = input.value;
    input.value = null;
    console.log(input.value)
    concApi()
});

function Img(){
    pokemonImg.src = data.sprites.front_default
    teste.innerText = pokemonImg.src
}