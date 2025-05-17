// js/footer.js
document.addEventListener("DOMContentLoaded", function () {
  const footer = `
    <footer class="footer_section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-3 info_col">
            <div class="info_contact">
              <h4>Endereço</h4>
              <div class="contact_link_box">
                <a href="https://maps.app.goo.gl/BYW1CjeoqbEcMejL6">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Localização</span>
                </a>
                <a href="https://api.whatsapp.com/send?phone=551899816xxxx">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>Ligue (18) 99816-XXXX</span>
                </a>
                <a href="mailto:demo@gmail.com">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  <span>demo@gmail.com</span>
                </a>
              </div>
            </div>
            <div class="info_social">
              <a href="https://www.instagram.com/construtora_ampla/">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/construtora_ampla/">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/construtora_ampla/">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/construtora_ampla/">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 info_col">
            <div class="info_detail">
              <h4>Informações</h4>
              <p>Site em parceria com</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-2 mx-auto info_col">
            <div class="info_link_box">
              <h4>Links</h4>
              <div class="info_links">
                <a href="index.html">Home</a>
                <a href="service.html">Serviços</a>
                <a href="about.html">Quem somos</a>
                <a href="contact.html">Contato</a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 info_col">
            <h4>Subscribe</h4>
            <form action="#">
              <input type="text" placeholder="Enter email" />
              <button type="submit">ENVIAR</button>
            </form>
          </div>
        </div>
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By
          <a href="https://html.design/">dev.leocarvalho@gmail.com</a>
        </p>
      </div>
    </footer>
  `;
  document.body.insertAdjacentHTML("beforeend", footer);
})