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

   if (estaFavoritado(element.id)) {
      heartIcon.setAttribute("name", "heart")
   }

   heartButton.addEventListener("click", (event) => {
      event.stopPropagation()
      const virouFavorito = alternarFavorito(element)
      heartIcon.setAttribute("name", virouFavorito ? "heart" : "heart-outline")
   })

   section.appendChild(card)
}

async function carregarPokedex() {
   try {
      const resposta = await fetch("./pokemons.json")
      if (!resposta.ok) throw new Error("Erro " + resposta.status)

      pokedex = await resposta.json()
      pokedex.forEach((pokemon) => criarCard(pokemon))
   } catch (erro) {
      console.error("Não foi possível carregar os pokémons:", erro)
   }
}

carregarPokedex()
