
// renderizar e salvar tarefas na tela 
function displayFavorito(){

    const  favoritos =  JSON.parse(localStorage.getItem("favoritos")) || []

    const cards = document.getElementById("section")

    cards.innerHTML = ""

    favoritos.forEach((favorito) =>{

        const cardElement = document.createElement("div");
        cardElement.classList.add("card_pokemon");

        cardElement.innerHTML = `
                    <div class="card_header">
                        <p class="card_id">ID: ${favorito.id}</p>
                        <button class="sword_button" aria-label="Comparar pokémon">⚔️</button>
                        <button  class="removeFavorito" aria-label="remove pokemon">
                            <ion-icon name="heart"}"></ion-icon>
                        </button>
                    </div>
                    <div class="card_main">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${favorito.id}.png" alt="${favorito.name}" class="card_img">
                    </div>
                    <div class="card_footer">
                        <p class="card_title">Name: ${favorito.name}</p>
                    </div>
                `;
            
        const removeBtn = cardElement.querySelector(".removeFavorito");
        removeBtn.onclick = () => {
        removeFavorito(favorito.id);
        }

        cards.appendChild(cardElement)
    })
}

//funcao remover o pokemon
function removeFavorito(favoritoRemove) {

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []

    favoritos = favoritos.filter((favorito) => favorito.id !== favoritoRemove) 

    localStorage.setItem("favoritos", JSON.stringify(favoritos))

    displayFavorito()
}

//inicializar a funcao atualizada

displayFavorito()
