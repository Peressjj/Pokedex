console.log(`JS conectado!\n`)

function botao() {
   alert("Botao")
}

const head = document.getElementById("header")
header.classList.add("header")
header.innerHTML = `
      <button class="more_options_button" onclick="alert('Você clicou no botão!')">
         <ion-icon name="ellipsis-vertical-outline"></ion-icon>
      </button>

      <h1 class="title_pokedex">
         ${document.title}
      </h1>

      <button class="mail_box_button" onclick="window.location.href='wireframes/perfil/perfil.html'">
         <ion-icon name="mail-outline"></ion-icon>
      </button>

      <button class="profile_button" onclick="window.location.href='wireframes/perfil/perfil.html'">
         <ion-icon name="person-circle-outline"></ion-icon>
      </button>
`

const nav = document.getElementById("navbar")
navbar.classList.add("navbar")
navbar.innerHTML = `
   <button class="about_button" onclick="window.location.href='wireframes/sobre/sobre.html'">
         Sobre
      </button>

      <button class="home_button" onclick="window.location.href='wireframes/index/index.html'">
         Início
      </button>

      <button class="favorites_button" onclick="window.location.href='wireframes/favoritos/favoritos.html'">
         Favoritos
      </button>
`

const foot = document.getElementById("footer")
footer.classList.add("footer")
footer.innerHTML = `
   <button class="github_button" onclick="alert('Você clicou no botão!')">
      <ion-icon name="logo-github"></ion-icon>
   </button>
            
   <button class="zap_button" onclick="alert('Você clicou no botão!')">
      <ion-icon name="logo-whatsapp"></ion-icon>
   </button>
`