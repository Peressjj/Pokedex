console.log(`JS conectado!\n`)

const raiz = document.currentScript.src.replace(/script\.js$/, "");

function botao() {
   alert("Botao")
}

const header = document.getElementById("header")
header.classList.add("header")
header.innerHTML = `
   <button class="more_options_button">
      <ion-icon name="ellipsis-vertical-outline"></ion-icon>
   </button>

   <h1 class="title_pokedex">
      ${document.title}
   </h1>

   <button class="profile_button" onclick="window.location.href='${raiz}wireframes/perfil/perfil.html'">
      <ion-icon name="person-circle-outline"></ion-icon>
   </button>

   <nav id="navbar">
      <button class="about_button" onclick="window.location.href='${raiz}wireframes/sobre/sobre.html'">
         Sobre
      </button>

      <button class="home_button" onclick="window.location.href='${raiz}index.html'">
         Início
      </button>

      <button class="favorites_button" onclick="window.location.href='${raiz}wireframes/favoritos/favoritos.html'">
         Favoritos
      </button>
   </nav>
`

const searchbar = document.getElementById("searchbar")
searchbar.classList.add("searchbar")
searchbar.innerHTML = `
   <input type="search" id="search_input" class="search_input"
      placeholder="Pesquisar..." autocomplete="off" aria-label="Pesquisar Pokémon">
   <span class="search_icon">🔍</span>
`

const inputPesquisa = document.getElementById("search_input")

searchbar.addEventListener("click", () => inputPesquisa.focus())

function normalizar(texto) {
   return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()
}

const semResultado = document.getElementById("sem_resultado")

inputPesquisa.addEventListener("input", () => {
   const termo = normalizar(inputPesquisa.value)
   const cards = document.querySelectorAll(".card")
   let encontrados = 0

   cards.forEach((card) => {
      const nome = normalizar(card.querySelector(".card_title").textContent)
      const id = normalizar(card.querySelector(".card_id").textContent)
      const combina = nome.includes(termo) || id.includes(termo)

      card.hidden = !combina
      if (combina) encontrados++
   })

   semResultado.hidden = encontrados > 0
})








const footer = document.getElementById("footer")
footer.classList.add("footer")
footer.innerHTML = `
   <button class="github_button" onclick="window.open('https://github.com/Peressjj/pokedex', '_blank', 'noopener,noreferrer')">
      <ion-icon name="logo-github"></ion-icon>
   </button>
`

const popup = document.querySelector(".popup")
popup.classList.add("popup")
popup.innerHTML = `
   <h2 class="title_popup">Configurações:</h2>
   <div class="config_grid">
      <p class="config_text">Modo claro:</p>
      <button class="light_button" aria-label="Alternar modo escuro">
         <ion-icon name="sunny-outline"></ion-icon>
      </button>
   </div>
   <button class="fechar_popup">Fechar</button>
`

document.querySelector(".more_options_button").addEventListener("click", () => {
   popup.showModal()
})

popup.querySelector(".fechar_popup").addEventListener("click", () => {
   popup.close()
})