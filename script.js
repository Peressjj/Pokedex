console.log(`JS conectado!\n`)

const footer = document.getElementById("footer")
footer.classList.add("footer")
footer.innerHTML = `
   <button class="github_button" onclick="window.open('https://github.com/Peressjj/pokedex', '_blank', 'noopener,noreferrer')">
      <ion-icon name="logo-github"></ion-icon>
   </button>
`

const raiz = document.currentScript.src.replace(/script\.js$/, "");

const header = document.getElementById("header")
if (header) {
   header.classList.add("header")
   header.innerHTML = `
      <div id="header-content">
         <button class="more_options_button">
            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
         </button>

         <h1 class="title_pokedex">
            ${document.title}
         </h1>

         <button class="profile_button" onclick="window.location.href='${raiz}wireframes/perfil/perfil.html'">
            <ion-icon name="person-circle-outline"></ion-icon>
         </button>
      </div>

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
}

const popup = document.querySelector(".popup")

if (popup) {
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
   document.querySelector(".more_options_button")
      ?.addEventListener("click", () => popup.showModal())

   popup.querySelector(".fechar_popup")
      ?.addEventListener("click", () => popup.close())
}

const detalhes = document.getElementById("detalhes")
detalhes.classList.add("detalhes")

async function abrirDetalhes(pokemon) {
   const imagem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

   const tipos = await Promise.all(
      pokemon.types.map(async ({ type }) => {
         const resposta = await fetch(
            `https://pokeapi.co/api/v2/type/${type.name}/`
         );

         const tipoObj = await resposta.json();
         const id = tipoObj.id;

         return `
            <span class="detalhe-tipo">
                  <img
                     src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/${id}.png"
                     alt="${type.name}"
                     class="icone-tipo"
                  >
            </span>
         `;
      })
   );

   const tiposHTML = tipos.join("");

   detalhes.innerHTML = `
      <div class="detalhe-cabecalho">

         <div class="detalhe-principal">

            <p class="detalhe-id">
               #${String(pokemon.id).padStart(4, "0")}
            </p>

            <div class="detalhe-principal-info">

               <h2 class="detalhe-nome">
                  ${pokemon.name}
               </h2>

               ${tiposHTML}
            </div>
         </div>

         <div class="detalhe-botoes">

            <button class="hearth_button" aria-label="Favoritar pokémon">
               <ion-icon name="heart-outline"></ion-icon>   
            </button>

            <button class="detalhe-fechar" aria-label="Fechar detalhes">
               X
            </button>

         </div>
      </div>

      <div class="detalhe-layout">

            <section class="detalhe-galeria">
               <div class="detalhe-imagem-container">
                  <button class="detalhe-seta">‹</button>

                  <img
                        class="detalhe-imagem"
                        src="${imagem}"
                        alt="${pokemon.name}"
                  >

                  <button class="detalhe-seta">›</button>
               </div>

               <div class="detalhe-miniaturas">
                  ${[1, 2, 3, 4].map((n) => `
                        <button class="detalhe-miniatura ${n === 1 ? "selecionada" : ""}">
                           <img src="${imagem}" alt="Visualização ${n}">
                        </button>
                  `).join("")}
               </div>
            </section>

            <section class="detalhe-informacoes">

               <article class="detalhe-painel detalhe-descricao">
                  <h3>Descrição</h3>
                  <p>
                        Informações sobre ${pokemon.name}.
                        Conheça mais sobre este Pokémon.
                  </p>
               </article>

               <div class="detalhe-grade">

                  <article class="detalhe-painel">
                        <h3>Informações Gerais</h3>

                        <div class="detalhe-linha">
                           <span>♧ Altura</span>
                           <strong>—</strong>
                        </div>

                        <div class="detalhe-linha">
                           <span>▣ Peso</span>
                           <strong>—</strong>
                        </div>

                        <div class="detalhe-linha">
                           <span>◎ Espécie</span>
                           <strong>—</strong>
                        </div>

                        <div class="detalhe-linha">
                           <span>♡ Gênero</span>
                           <strong>—</strong>
                        </div>

                        <div class="detalhe-linha">
                           <span>★ Habilidade(s)</span>
                           <strong>—</strong>
                        </div>

                        <div class="detalhe-linha">
                           <span>✦ Habilidade Oculta</span>
                           <strong>—</strong>
                        </div>
                  </article>

                  <article class="detalhe-painel">
                        <div class="detalhe-titulo-status">
                           <h3>Status Base</h3>
                           <span>Total: —</span>
                        </div>

                        ${["HP", "Ataque", "Defesa", "Ataque Esp.", "Defesa Esp.", "Velocidade"].map((status) => `
                           <div class="detalhe-status">
                              <span>${status}</span>
                              <strong>—</strong>
                              <div class="detalhe-barra">
                                    <span></span>
                              </div>
                           </div>
                        `).join("")}
                  </article>

               </div>

               <div class="detalhe-grade detalhe-grade-inferior">

                  <article class="detalhe-painel">
                        <h3>Evolução</h3>

                        <div class="detalhe-evolucao">
                           <div>🐣<small>Inicial</small></div>
                           <span>→</span>
                           <div>🐥<small>Intermediário</small></div>
                           <span>→</span>
                           <div>🐉<small>Final</small></div>
                        </div>
                  </article>
               </div>
            </section>
      </div>
   `;

   detalhes.querySelector(".detalhe-fechar").addEventListener("click", () => {
      detalhes.close();
   });

   detalhes.showModal();
}

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
