// js/header.js
document.addEventListener("DOMContentLoaded"), function () {
  const header = 
      <header class="header_section">
      <div class="container">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="index.html">
            <span>
              <img src="images/fevicon.png" width="50" height="auto" alt="Logo Ampla"> Ampla
            </span>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Casa</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="service.html">Serviços</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">Quem somos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contato</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Loja-de-vendas/index.html">Loja da construção</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  document.body.insertAdjacentHTML("afterbegin", header);
}