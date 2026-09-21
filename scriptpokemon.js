const pokemon = {
   id: 0, // Identificador unico
   name: "", // Nome
   base_experience: 0, // Base de experiencia
   height: 0, // altura em decímetros
   weight: 0, // peso em hectogramas
   is_default: true, // Forma padrao (true/false)
   order: 0,

   // TIPOS
   types: [
      // tipos elementais
      {
         slot: 1, // tipo 1
         type: {
            name: "",
            url: "",
         },
      },
      {
         slot: 2, // tipo 2
         type: {
            name: "",
            url: "",
         },
      },
   ],

   abilities: [
      // habilidades passivas
      {
         is_hidden: false, // habilidade oculta
         slot: 1, // tipo 1
         ability: {
            name: "",
            url: "",
         },
      },
   ],

   stats: [
      // status
      {
         base_stat: 0, // valor numerico do status
         stat: {
            name: "", // "hp", "attack", "defense", "special-attack", "special-defense", "speed"
            url: "",
         },
      },
   ],

   sprites: {
      // imagens/icones do pokemon
      front_default: "", // imagem padrao (frente)
   },
   species: {
      // espécies do pokemon
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

console.log(pokedex[0].name);

pokedex.forEach(element => {
  console.log(`ID: ${element.id}`);
  console.log(`Nome: ${element.name}`);
  console.log(`Base Experience: ${element.base_experience}`);
  console.log(`Height: ${element.height}`);
  console.log(`Weight: ${element.weight}`);
  console.log(`Is default? ${element.is_default}`);
  console.log(`Order: ${element.order}`);
  console.log(`Types: ${JSON.stringify(element.types)}`)
  console.log(`Abilities: ${element.abilities}`);
  console.log(`Stats ${element.stats}\n`);
  console.log(`Sprites: ${element.sprites}`)
});

const section = document.getElementById("section");

pokedex.forEach((element) => {
   const card = document.createElement("article")
   card.classList.add("card")

   card.innerHTML = `
      <header class="card_header">
         <p class="card_id">ID: ${element.id}</p>
         <button class="sword_button" aria-label="Comparar pokémon">
            ⚔️
         </button>
         <button class="hearth_button" aria-label="Favoritar pokémon">
            <ion-icon name="heart-outline"><ion-icon>   
         </button>
      </header>
      <main class="card_main">
         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${element.id}.png" alt="${element.name}" class="card_img">
      </main>
      <footer class="card_footer">
         <p class="card_title">Name: ${element.name}</p>
      </footer>
   `

   section.appendChild(card)
})
