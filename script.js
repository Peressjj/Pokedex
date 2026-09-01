const fs = require('fs');

const pokemons = [
   { numero: 1,   nome: "Bulbasaur"  },
   { numero: 4,   nome: "Charmander" },
   { numero: 7,   nome: "Squirtle"   },
   { numero: 25,  nome: "Pikachu"    },
   { numero: 39,  nome: "Jigglypuff" },
   { numero: 52,  nome: "Meowth"     },
   { numero: 54,  nome: "Psyduck"    },
   { numero: 94,  nome: "Gengar"     },
   { numero: 129, nome: "Magikarp"   },
   { numero: 143, nome: "Snorlax"    },
]

for (let i = 0; i < pokemons.length; i++) {
   console.log(`Numero: ${pokemons[i].numero}\nNome: ${pokemons[i].nome}\n`);
}

// Converte o array em texto JSON formatado
const textoJson = JSON.stringify(pokemons, null, 2);

// Cria (ou sobrescreve) o arquivo pokemons.json com esse conteúdo
fs.writeFileSync('pokemons.json', textoJson);

console.log('Arquivo pokemons.json criado com sucesso!');

fetch("pokemons.json")
   .then((resposta) => resposta.json())
   .then((pokemons) => {
      const container = document.getElementById("cards_container")

      pokemons.forEach((pokemon) => {
         const card = document.createElement("div")
         card.className = "pokemon_card"

         card.innerHTML = `
            <div class="imagem_placeholder">✕</div>
            <span class="numero_pokemon">Nº ${pokemon.numero}</span>
            <span class="nome_pokemon">${pokemon.nome}</span>
         `

         container.appendChild(card)
      })
   })
   .catch((erro) => console.error("Erro ao carregar pokemons:", erro))