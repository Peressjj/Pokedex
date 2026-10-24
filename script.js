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
   
`

const navbar = document.getElementById("navbar")
navbar.classList.add("navbar")
navbar.innerHTML = `
   <button class="about_button" onclick="window.location.href='${raiz}wireframes/sobre/sobre.html'">
      Sobre
   </button>

   <button class="home_button" onclick="window.location.href='${raiz}index.html'">
      Início
   </button>

   <button class="favorites_button" onclick="window.location.href='${raiz}wireframes/favoritos/favoritos.html'">
      Favoritos
   </button>
`

const footer = document.getElementById("footer")
footer.classList.add("footer")
footer.innerHTML = `
   <button class="github_button" onclick="window.open('https://github.com/Peressjj/pokedex', '_blank', 'noopener,noreferrer')">
      <ion-icon name="logo-github"></ion-icon>
   </button>
`

const popup = document.querySelector(".popup")

document.querySelector(".more_options_button").addEventListener("click", () => {
   popup.showModal()
})

popup.querySelector(".fechar_popup").addEventListener("click", () => {
   popup.close()
})