console.log("scriptpokemons.js carregado!")

const section = document.getElementById("section")

let pokedex = []
let listaAtual = [] 

function criarCard(element) {
   const card = document.createElement("article")
   card.classList.add("card")
   card.innerHTML = `
   <div class="card_header">
      <p class="card_id">ID: ${element.id}</p>
   
      <div class="botoes">
         <button class="sword_button">
            ⚔️
         </button>
         <button class="hearth_button" aria-label="Favoritar pokémon">
            <ion-icon name="heart-outline"></ion-icon>   
         </button>
      </div>

   </div>
   <div class="card_main">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${element.id}.png" alt="${element.name}" class="card_img">
   </div>
   <div class="card_footer">
      <p class="card_title" style="text-transform: uppercase">${element.name}</p>
   </div>
`
   card.addEventListener("click", () => {
      abrirDetalhes(element)
   })

   const heartButton = card.querySelector(".hearth_button")

   atualizarCoracao(heartButton, ehFavorito(element.id))

   heartButton.addEventListener("click", (event) => {
      event.stopPropagation()
      atualizarCoracao(heartButton, alternarFavorito(element.id, element.name))
   })

   section.appendChild(card)
}

const POR_PAGINA = 200
const botaoVerMais = document.getElementById("ver_mais")

let exibidos = 0

function mostrarMais() {
   const proximos = listaAtual.slice(exibidos, exibidos + POR_PAGINA)

   proximos.forEach((pokemon) => criarCard(pokemon))
   exibidos += proximos.length

   botaoVerMais.hidden = exibidos >= listaAtual.length
}

function exibirLista(lista) {
   listaAtual = lista
   section.innerHTML = ""
   exibidos = 0
   mostrarMais()
}

async function carregarPokedex() {
   try {
      const resposta = await fetch(
         "https://pokeapi.co/api/v2/pokemon?limit=100000",
      )
      if (!resposta.ok) throw new Error("Erro " + resposta.status)

      const dados = await resposta.json()

      pokedex = dados.results
         .map(({ name, url }) => ({
            id: Number(url.split("/").filter(Boolean).pop()),
            name,
         }))
         .filter((pokemon) => pokemon.id < 10000)

      exibirLista(pokedex)
   } catch (erro) {
      console.error("Não foi possível carregar os pokémons:", erro)
   }
}

botaoVerMais.addEventListener("click", mostrarMais)

carregarPokedex()
