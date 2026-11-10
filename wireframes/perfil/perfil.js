console.log("JS conectado!\n")

function atualizarPerfil() {
   const favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
   const vistos = JSON.parse(localStorage.getItem("vistos")) || []

   document.getElementById("stat_favoritos").textContent = favoritos.length
   document.getElementById("stat_vistos").textContent = vistos.length

   exibirFavoritosPerfil(favoritos)
}

function exibirFavoritosPerfil(favoritos) {
   const grid = document.querySelector(".grid_pokemons")
   grid.innerHTML = ""

   if (favoritos.length === 0) {
      grid.innerHTML = `<p class="sem_favoritos">Você ainda não favoritou nenhum Pokémon.</p>`
      return
   }

   favoritos.slice(0, 5).forEach((favorito) => {
      const cardElement = document.createElement("article")
      cardElement.classList.add("card")
      cardElement.innerHTML = `
         <div class="card_header">
            <p class="card_id">ID: ${favorito.id}</p>
            <div class="botoes">
               <button class="hearth_button favoritado">
                  <ion-icon name="heart"></ion-icon>
               </button>
            </div>
         </div>
         <div class="card_main">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${favorito.id}.png" alt="${favorito.name}" class="card_img">
         </div>
         <div class="card_footer">
            <p class="card_title">${favorito.name}</p>
         </div>
      `

      cardElement.querySelector(".hearth_button").onclick = () => {
         removerFavorito(favorito.id)
      }

      grid.appendChild(cardElement)
   })
}

function removerFavorito(id) {
   let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
   favoritos = favoritos.filter((favorito) => favorito.id !== id)
   localStorage.setItem("favoritos", JSON.stringify(favoritos))
   atualizarPerfil()
}

atualizarPerfil()
