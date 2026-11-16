console.log("favoritos.js conectado!");

function displayFavorito() {
   const favoritos = lerFavoritos()
   const cards = document.getElementById("section")

   cards.innerHTML = ""

   if (favoritos.length === 0) {
      cards.innerHTML = `
      
      <div class="centro">
         <p class="sem_favoritos">Você ainda não favoritou nenhum Pokémon.</p>
      </div>   
         `
      
         return
   }

   favoritos.forEach((favorito) => {
      const cardElement = document.createElement("article")
      cardElement.classList.add("card")
      cardElement.innerHTML = `
         <div class="card_header">
            <p class="card_id">ID: ${favorito.id}</p>
            <div class="botoes">
               <button class="sword_button">⚔️</button>
               <button class="removeFavorito">
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

      cardElement.addEventListener("click", () => {
         abrirDetalhes({ id: favorito.id })
      })

      cardElement
         .querySelector(".removeFavorito")
         .addEventListener("click", (evento) => {
            evento.stopPropagation()
            removeFavorito(favorito.id)
         })

      cards.appendChild(cardElement)
   })
}

function removeFavorito(id) {
   const novaLista = lerFavoritos().filter((fav) => fav.id !== id)
   localStorage.setItem("favoritos", JSON.stringify(novaLista))

   cancelarComparacao()
   displayFavorito()
}

detalhes?.addEventListener("close", displayFavorito)

displayFavorito()
