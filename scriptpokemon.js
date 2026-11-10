console.log("scriptpokemons.js carregado!")

const section = document.getElementById("section")

let pokedex = []

function lerFavoritos() {
   return JSON.parse(localStorage.getItem("favoritos")) || []
}

function salvarFavoritos(lista) {
   localStorage.setItem("favoritos", JSON.stringify(lista))
}

function estaFavoritado(id) {
   return lerFavoritos().some((fav) => fav.id === id)
}

function alternarFavorito(pokemon) {
   const favoritos = lerFavoritos()

   if (estaFavoritado(pokemon.id)) {
      salvarFavoritos(favoritos.filter((fav) => fav.id !== pokemon.id))
      return false
   }

   favoritos.push({ id: pokemon.id, name: pokemon.name })
   salvarFavoritos(favoritos)
   return true
}

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
   const heartIcon = heartButton.querySelector("ion-icon")

   function atualizarCoracao(favoritado) {
      heartIcon.setAttribute("name", favoritado ? "heart" : "heart-outline")
      heartButton.classList.toggle("favoritado", favoritado)
   }

   atualizarCoracao(estaFavoritado(element.id))

   heartButton.addEventListener("click", (event) => {
      event.stopPropagation()
      atualizarCoracao(alternarFavorito(element))
   })

   section.appendChild(card)
}

const POR_PAGINA = 50
const botaoVerMais = document.getElementById("ver_mais")

let exibidos = 0

function mostrarMais() {
   const proximos = pokedex.slice(exibidos, exibidos + POR_PAGINA)

   proximos.forEach((pokemon) => criarCard(pokemon))
   exibidos += proximos.length

   botaoVerMais.hidden = exibidos >= pokedex.length
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

      mostrarMais()
   } catch (erro) {
      console.error("Não foi possível carregar os pokémons:", erro)
   }
}

botaoVerMais.addEventListener("click", mostrarMais)

carregarPokedex()