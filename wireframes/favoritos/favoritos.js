function displayFavorito(){

    const  favoritos =  JSON.parse(localStorage.getItem("favoritos")) || []

    const cards = document.getElementById("section")

    cards.innerHTML = ""

    favoritos.forEach((favorito) => {
        const cardElement = document.createElement("article");
        cardElement.classList.add("card");
        cardElement.innerHTML = `
            <div class="card_header">
                <p class="card_id">ID: ${favorito.id}</p> 
                <div class="botoes">
                    <button class="sword_button">
                    ⚔️
                    </button>
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
            const pokemonCompleto = pokedex.find(
                (pokemon) => pokemon.id === favorito.id
            );

            if (pokemonCompleto) {
                abrirDetalhes(pokemonCompleto);
            }

        });
                    
        const removeBtn = cardElement.querySelector(".removeFavorito");
        removeBtn.onclick = () => {
            event.stopPropagation();
            removeFavorito(favorito.id);
        }

        cards.appendChild(cardElement)    
    })
}

function removeFavorito(favoritoRemove) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
    favoritos = favoritos.filter((favorito) => favorito.id !== favoritoRemove) 
    localStorage.setItem("favoritos", JSON.stringify(favoritos))
    displayFavorito()
}

displayFavorito()