console.log(`JS conectado!\n`)

const footer = document.getElementById("footer")
footer.classList.add("footer")
footer.innerHTML = `
   <button class="github_button" onclick="window.open('https://github.com/Peressjj/pokedex', '_blank', 'noopener,noreferrer')">
      <ion-icon name="logo-github"></ion-icon>
   </button>
`

const raiz = document.currentScript.src.replace(/script\.js$/, "")

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
         <p class="config_text">Alterar tema:</p>
         <button class="light_button" aria-label="Alternar modo escuro">
            <ion-icon name="sunny-outline"></ion-icon>
         </button>
      </div>
      <button class="fechar_popup">Fechar</button>
   `

   document
      .querySelector(".more_options_button")
      ?.addEventListener("click", () => popup.showModal())

   popup
      .querySelector(".fechar_popup")
      ?.addEventListener("click", () => popup.close())

   popup.querySelector(".light_button").addEventListener("click", alterar_tema)
}

function aplicar_tema(amarelo) {
   document.body.classList.toggle("tema_amarelo", amarelo)

   document
      .querySelector(".light_button ion-icon")
      ?.setAttribute("name", amarelo ? "moon-outline" : "sunny-outline")
}

function alterar_tema() {
   const amarelo = !document.body.classList.contains("tema_amarelo")

   localStorage.setItem("tema", amarelo ? "amarelo" : "roxo")
   aplicar_tema(amarelo)
}

aplicar_tema(localStorage.getItem("tema") === "amarelo")

const detalhes = document.getElementById("detalhes")
detalhes.classList.add("detalhes")

async function buscarJSON(url) {
   const resposta = await fetch(url)
   if (!resposta.ok) throw new Error(`Erro ${resposta.status} em ${url}`)
   return resposta.json()
}

const idDaUrl = (url) => Number(url.split("/").filter(Boolean).pop())
const formatar = (texto) => texto.replace(/-/g, " ")

const cacheDetalhes = {}

function extrairEvolucao(chain) {
   const etapas = []
   let nivel = [chain]

   while (nivel.length > 0) {
      etapas.push(
         nivel.map((no) => ({
            nome: no.species.name,
            id: idDaUrl(no.species.url),
         })),
      )
      nivel = nivel.flatMap((no) => no.evolves_to)
   }

   return etapas
}

function formatarGenero(taxa) {
   if (taxa === -1) return "Sem gênero"

   const femea = (taxa / 8) * 100
   const macho = 100 - femea
   return `♂ ${macho.toLocaleString("pt-BR")}% · ♀ ${femea.toLocaleString("pt-BR")}%`
}

async function buscarDetalhes(id) {
   if (cacheDetalhes[id]) return cacheDetalhes[id]

   const [pokemon, especie] = await Promise.all([
      buscarJSON(`https://pokeapi.co/api/v2/pokemon/${id}`),
      buscarJSON(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
   ])

   const evolucao = await buscarJSON(especie.evolution_chain.url)

   const emIngles = (lista) => lista.find((item) => item.language.name === "en")

   const arte = pokemon.sprites.other["official-artwork"]

   const dados = {
      id: pokemon.id,
      nome: pokemon.name,
      tipos: pokemon.types.map(({ type }) => ({
         nome: type.name,
         id: idDaUrl(type.url),
      })),
      imagens: [
         arte.front_default,
         arte.front_shiny,
         pokemon.sprites.front_default,
         pokemon.sprites.back_default,
      ].filter(Boolean),
      descricao:
         emIngles(especie.flavor_text_entries)?.flavor_text.replace(
            /[\n\f]/g,
            " ",
         ) ?? "—",
      especie: emIngles(especie.genera)?.genus ?? "—",
      genero: formatarGenero(especie.gender_rate),
      altura: pokemon.height / 10,
      peso: pokemon.weight / 10,
      habilidades: pokemon.abilities
         .filter((a) => !a.is_hidden)
         .map((a) => formatar(a.ability.name)),
      oculta: pokemon.abilities
         .filter((a) => a.is_hidden)
         .map((a) => formatar(a.ability.name)),
      stats: pokemon.stats.map((s) => s.base_stat),
      total: pokemon.stats.reduce((soma, s) => soma + s.base_stat, 0),
      evolucao: extrairEvolucao(evolucao.chain),
   }

   cacheDetalhes[id] = dados
   return dados
}

function montarDetalhes(d) {
   const tiposHTML = d.tipos
      .map(
         (tipo) => `
         <span class="detalhe-tipo">
            <img
               src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/${tipo.id}.png"
               alt="${tipo.nome}"
               class="icone-tipo"
            >
         </span>`,
      )
      .join("")

   const miniaturasHTML = d.imagens
      .map(
         (src, i) => `
         <button class="detalhe-miniatura ${i === 0 ? "selecionada" : ""}" data-src="${src}">
            <img src="${src}" alt="Visualização ${i + 1}">
         </button>`,
      )
      .join("")

   const nomesStatus = [
      "HP",
      "Ataque",
      "Defesa",
      "Ataque Esp.",
      "Defesa Esp.",
      "Velocidade",
   ]

   const statusHTML = d.stats
      .map(
         (valor, i) => `
         <div class="detalhe-status">
            <span>${nomesStatus[i]}</span>
            <strong>${valor}</strong>
            <div class="detalhe-barra">
               <span style="width: ${Math.min(100, (valor / 255) * 100)}%"></span>
            </div>
         </div>`,
      )
      .join("")

   const naoEvolui = d.evolucao.length === 1 && d.evolucao[0].length === 1

   const evolucaoHTML = naoEvolui
      ? `<p>Este Pokémon não evolui.</p>`
      : d.evolucao
           .map(
              (etapa) => `
              <div class="detalhe-etapa">
                 ${etapa
                    .map(
                       (p) => `
                       <div>
                          <img
                             src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png"
                             alt="${p.nome}"
                          >
                          <small>${formatar(p.nome)}</small>
                       </div>`,
                    )
                    .join("")}
              </div>`,
           )
           .join(`<span>→</span>`)

   return `
      <div class="detalhe-cabecalho">
         <div class="detalhe-principal">
            <p class="detalhe-id">#${String(d.id).padStart(4, "0")}</p>
            <div class="detalhe-principal-info">
               <h2 class="detalhe-nome">${d.nome}</h2>
               ${tiposHTML}
            </div>
         </div>

         <div class="detalhe-botoes">
            <button class="hearth_button" aria-label="Favoritar pokémon">
               <ion-icon name="heart-outline"></ion-icon>
            </button>
            <button class="detalhe-fechar" aria-label="Fechar detalhes">X</button>
         </div>
      </div>

      <div class="detalhe-layout">
         <section class="detalhe-galeria">
            <div class="detalhe-imagem-container">
               <button class="detalhe-seta">‹</button>
               <img class="detalhe-imagem" src="${d.imagens[0]}" alt="${d.nome}">
               <button class="detalhe-seta">›</button>
            </div>
            <div class="detalhe-miniaturas">${miniaturasHTML}</div>
         </section>

         <section class="detalhe-informacoes">
            <article class="detalhe-painel detalhe-descricao">
               <h3>Descrição</h3>
               <p>${d.descricao}</p>
            </article>

            <div class="detalhe-grade">
               <article class="detalhe-painel">
                  <h3>Informações Gerais</h3>
                  <div class="detalhe-linha"><span>♧ Altura</span><strong>${d.altura.toLocaleString("pt-BR")} m</strong></div>
                  <div class="detalhe-linha"><span>▣ Peso</span><strong>${d.peso.toLocaleString("pt-BR")} kg</strong></div>
                  <div class="detalhe-linha"><span>◎ Espécie</span><strong>${d.especie}</strong></div>
                  <div class="detalhe-linha"><span>♡ Gênero</span><strong>${d.genero}</strong></div>
                  <div class="detalhe-linha"><span>★ Habilidade(s)</span><strong>${d.habilidades.join(", ") || "—"}</strong></div>
                  <div class="detalhe-linha"><span>✦ Habilidade Oculta</span><strong>${d.oculta.join(", ") || "—"}</strong></div>
               </article>

               <article class="detalhe-painel">
                  <div class="detalhe-titulo-status">
                     <h3>Status Base</h3>
                     <span>Total: ${d.total}</span>
                  </div>
                  ${statusHTML}
               </article>
            </div>

            <div class="detalhe-grade detalhe-grade-inferior">
               <article class="detalhe-painel">
                  <h3>Evolução</h3>
                  <div class="detalhe-evolucao">${evolucaoHTML}</div>
               </article>
            </div>
         </section>
      </div>
   `
}

async function abrirDetalhes(pokemon) {
   registrarVisto(pokemon.id)

   detalhes.innerHTML = `<p>Carregando...</p>`
   detalhes.showModal()

   try {
      const dados = await buscarDetalhes(pokemon.id)
      detalhes.innerHTML = montarDetalhes(dados)
   } catch (erro) {
      console.error("Falha ao carregar os detalhes:", erro)
      detalhes.innerHTML = `
         <p>Não foi possível carregar os detalhes.</p>
         <button class="detalhe-fechar">Fechar</button>
      `
   }

   detalhes
      .querySelector(".detalhe-fechar")
      .addEventListener("click", () => detalhes.close())

   detalhes.querySelectorAll(".detalhe-miniatura").forEach((botao) => {
      botao.addEventListener("click", () => {
         detalhes.querySelector(".detalhe-imagem").src = botao.dataset.src

         detalhes
            .querySelectorAll(".detalhe-miniatura")
            .forEach((b) => b.classList.remove("selecionada"))
         botao.classList.add("selecionada")
      })
   })
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

function registrarVisto(id) {
   const vistos = JSON.parse(localStorage.getItem("vistos")) || []

   if (!vistos.includes(id)) {
      vistos.push(id)
      localStorage.setItem("vistos", JSON.stringify(vistos))
   }
}