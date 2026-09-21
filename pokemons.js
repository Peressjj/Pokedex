const pokemons=[
  {
    id: 1,
    name: "bulbasaur",
    height: 7,
    weight: 69,
    abilities: [
      {
        slot: 1,
        ability: {
          name: "overgrow",
          url: "https://pokeapi.co/api/v2/ability/65/"
        }
      },
      {
        slot: 3,
        ability: {
          name: "chlorophyll",
          url: "https://pokeapi.co/api/v2/ability/34/"
        }
      }
    ],
    species: {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon-species/1/"
    },
    sprites: {
      other: {
        'official-artwork': {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        }
      }
    },
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        }
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        }
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        }
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        }
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        }
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/",
        }
      }
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],

  },
  {
    id: 4,
    name: "charmander",
    height: 6,
    weight: 85,
    abilities: [
      {
        slot: 1,
        ability: {
          name: "blaze",
          url: "https://pokeapi.co/api/v2/ability/66/"
        }
      },
      {
        slot: 3,
        ability: {
          name: "solar-power",
          url: "https://pokeapi.co/api/v2/ability/94/"
        }
      }
    ],
    species: {
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon-species/4/"
    },
    sprites: {
      other: {
        'official-artwork': {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
        }
      }
    },
    stats: [
      {
        base_stat: 39,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        }
      },
      {
        base_stat: 52,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        }
      },
      {
        base_stat: 43,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        }
      },
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        }
      },
      {
        base_stat: 50,
        effort: 0,
        stat:{
          name:"special-defense",
          url:"https://pokeapi.co/api/v2/stat/5/",
        }
      },
      {
        base_stat: 65,
        effort: 1,
        stat:{
          name:"speed",
          url:"https://pokeapi.co/api/v2/stat/6/",
        }
      }
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],

  },
  {
    id: 7,
    name: "squirtle",
    height: 5,
    weight: 90,
    abilities: [
      {
        slot: 1,
        ability: {
          name: "torrent",
          url: "https://pokeapi.co/api/v2/ability/67/"
        }
      },
      {
        slot: 3,
        ability: {
          name: "rain-dish",
          url: "https://pokeapi.co/api/v2/ability/44/"
        }
      }
    ],
    species: {
      name: "squirtle",
      url: "https://pokeapi.co/api/v2/pokemon-species/7/"
    },
    sprites: {
      other: {
        'official-artwork': {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
        }
      }
    },
    stats: [
      {
        base_stat: 44,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        }
      },
      {
        base_stat: 48,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        }
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        }
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        }
      },
      {
        base_stat: 64,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        }
      },
      {
        base_stat: 43,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/",
        }
      }
    ],
    types:[
      {
        slot: 1,
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
  }
]

console.log(JSON.stringify(pokemons))

//console.log(pokemons[0].sprites.other["official-artwork"].front_default)
