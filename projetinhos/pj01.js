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
    let urlReady = CONFIG.URL_API + nomePokemon
    return urlReady
}

async function sharePokemon(urlReady) {
    const response = await fetch(urlReady)
    if (response.ok){
        return dataPokemon = await response.json()
    } else{
        return null
    }

}

function dataDados(dataPokemon) {
    let a = dataPokemon.sprites.front_default
    let b = dataPokemon.id
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

    let urlReady = concNameApi(nomePokemon)

    let dataPokemon = await sharePokemon(urlReady)

    let POKEMON = dataDados(dataPokemon)

    upDateUi(POKEMON)
}