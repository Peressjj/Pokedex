const pokemon = {
   id: 0, 
   name: "", 
   base_experience: 0, 
   height: 0, 
   weight: 0, 
   is_default: true, 
   order: 0,

   
   types: [
      {
         slot: 1, 
         type: {
            name: "",
            url: "",
         },
      },
      {
         slot: 2, 
         type: {
            name: "",
            url: "",
         },
      },
   ],

   abilities: [
      {
         is_hidden: false, 
         slot: 1, 
         ability: {
            name: "",
            url: "",
         },
      },
   ],

   stats: [
      {
         base_stat: 0, 
         stat: {
            name: "", 
            url: "",
         },
      },
   ],

   sprites: {
      front_default: "", 
   },
   species: {
      name: "",
      url: "",
   },
}

function criarPokemon(id, name, baseExp, height, weight, tipos) {
   return {
      id,
      name,
      base_experience: baseExp,
      height,
      weight,
      is_default: true,
      order: id,
      types: tipos.map((nome, index) => ({
         slot: index + 1,
         type: { name: nome, url: "" },
      })),
      abilities: [],
      stats: [],
      sprites: { front_default: "" },
      species: { name, url: "" },
   }
}

const pokedex = [
   criarPokemon(1, "bulbasaur", 64, 7, 69, ["grass", "poison"]),
   criarPokemon(4, "charmander", 62, 6, 85, ["fire"]),
   criarPokemon(7, "squirtle", 63, 5, 90, ["water"]),
   criarPokemon(25, "pikachu", 112, 4, 60, ["electric"]),
   criarPokemon(39, "jigglypuff", 95, 5, 55, ["normal", "fairy"]),
   criarPokemon(52, "meowth", 58, 4, 42, ["normal"]),
   criarPokemon(54, "psyduck", 64, 8, 196, ["water"]),
   criarPokemon(94, "gengar", 250, 15, 405, ["ghost", "poison"]),
   criarPokemon(129, "magikarp", 40, 9, 100, ["water"]),
   criarPokemon(143, "snorlax", 189, 21, 4600, ["normal"]),
]

const section = document.getElementById("section");

pokedex.forEach((element) => {
   const card = document.createElement("article")
   card.classList.add("card")

   card.innerHTML = `
      <div class="card_header">
         <p class="card_id">ID: ${element.id}</p>
         <div class="botoes">
            <button class="sword_button" aria-label="Comparar pokémon">
               ⚔️
            </button>
            <button class="hearth_button" aria-label="Favoritar pokémon">
               <ion-icon name="heart-outline"></ion-icon>   
            </button>
         </div>
      </div>
      <div class="card_main">
         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${element.id}.png" alt="${element.name}" class="card_img">
      </div>
      <div class="card_footer">
         <p class="card_title">${element.name}</p>
      </div>
   `

   section.appendChild(card)
})
