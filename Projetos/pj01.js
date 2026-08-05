const CONFIG = {
    URL_API: "https://pokeapi.co/api/v2/pokemon/"
}

const DOM = {
    imgPokemon: document.getElementById("imgPokemon"),
    teste: document.getElementById("teste"),
    text: document.getElementById("texto"),
    input: document.getElementById("input"),
    boton: document.getElementById("boton"),
}

boton.addEventListener("click", async function (){
    let nomePokemon = DOM.input.value
    await main(nomePokemon)
})

function concNameApi(nomePokemon) {
    let urlCompletApi = CONFIG.URL_API + nomePokemon
    return urlCompletApi
}

async function sharePokemon(urlCompletApi) {
    const response = await fetch(urlCompletApi)
    let datePokemon = await response.json()
    return datePokemon
}

function dateDados(datePokemon) {
    let a = datePokemon.sprites.front_default
    let b = datePokemon.id
    const POKEMON = {
        image: a,
        id:  b
    }
    return POKEMON
}

function upDateUi(POKEMON) {
    DOM.imgPokemon.src = POKEMON.image
    //DOM (futuro id)
}
async function main(nomePokemon){

    let urlCompletApi = concNameApi(nomePokemon)

    let datePokemon = await sharePokemon(urlCompletApi)

    let POKEMON = dateDados(datePokemon)

    upDateUi(POKEMON)
}