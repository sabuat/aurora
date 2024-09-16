import React from "react";
import logo from '../Imagens/logo-barra.png';
import menu from '../Imagens/menu-aurora.png';
import "../Styles/barra.css"

export default function Barra() {
  return (
    <div id="barra-cont">
      <nav id="nav-bar" class="navbar bg-body-tertiary fixed-top">
        <div
          class="d-flex align-items-center justify-content-between"
        >
          <div class="nav-item col-6 col-md-4">
            <a class="navbar-brand" href="{{ url_for ('home')}}">
              <img
                width="100%"
                id="logo"
                src={logo}
                alt="Logo Aurora"
              />
            </a>
          </div>
          {/* <!-- Links --> */}
          <div
            class="navbar navbar-expand-lg d-none d-lg-block col-4"
            id="link-bar"
          >
            <ul class="navbar-nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/loja">
                  Loja
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/sobre">
                  Sobre
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/blog">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contato">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Icone do carrinho --> */}
          <div class="d-flex d-none d-lg-block col-4">
            <a class="d-flex flex-row justify-content-end">
              <img id="cart" src="../static/images/cart.png" alt="" />
            </a>
          </div>
          {/* <!-- Botao do menu--> */}
          <button
            id="menu-icon" 
            class="navbar-toggler d-block d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span><img src={menu} width="50%" alt="Imagem Menu"/></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <a class="navbar-brand " href="{{ url_for ('home')}}">
                <img src={logo} alt="Logo Aurora"/>
              </a>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body text-center">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/loja">
                    Loja
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/sobre">
                    Sobre
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/blog">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contato">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
