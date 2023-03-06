import { Button } from "solid-bootstrap";
import { isLogin, setisLogin } from "../pages/login";
import { createSignal, createMemo, Show } from "solid-js";
import "../css/bootstrap.min.css";
import "../css/style.css";
import { Routes, Route, useNavigate, A, useLocation } from "@solidjs/router";
import { userDetails } from "../pages/login";
import Category from "../pages/Category";
import Drawer from "../components/Drawer";
import { cartData } from "./cartData";

export default function navbar() {
  const navigate = useNavigate();
  function logout() {
    setisLogin(false);
    isLogin();
    localStorage.removeItem('isLogin')
    navigate("/login");
  }
  return (
    <>
      <div class="container-fluid  text-white d-none d-lg-flex" style={"background-color:#413d91"}>
        <div class="container py-3" >
          <div class="d-flex align-items-center">

            <h2 class="text-white fw-bold m-0">Product Store</h2>

            <div class="ms-auto d-flex align-items-center">
              <small class="ms-4">
                <i class="fa fa-map-marker-alt me-3"></i> Sector 67, Sahibzada
                Ajit Singh Nagar, Punjab 160062
              </small>
              <small class="ms-4">
                <i class="fa fa-envelope me-3"></i>info@softprodigy.com
              </small>
              <small class="ms-4">
                <i class="fa fa-phone-alt me-3"></i>+012 345 67890
              </small>
            </div>
            <Show when={isLogin()} fallback={<div class="ms-auto d-none d-lg-block">
              <a
                onClick={() => navigate('/login')}
                class="btn btn-primary rounded-pill py-2 px-3"
              >
                login
              </a>
            </div>}>

              <div class="ms-auto d-none d-lg-block">
                <a
                  onClick={() => logout()}
                  class="btn btn-primary rounded-pill py-2 px-3"
                >
                  logout
                </a>
              </div>
            </Show>
          </div>
        </div>
      </div>
      <div class="container-fluid bg-white sticky-top">
        <div class="container">
          <nav class="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
            <a href="index.html" class="navbar-brand d-lg-none">
              <h1 class="fw-bold m-0">GrowMark</h1>
            </a>
            <button
              type="button"
              class="navbar-toggler me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav">
                <A href="/" class="nav-item nav-link active">
                  Home
                </A>
                <A href="/category" class="nav-item nav-link">
                  Categories
                </A>
                <A href="/allProducts" class="nav-item nav-link">
                  Products
                </A>

                <div class="nav-item dropdown">
                  <A
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Popular
                  </A>
                  <div class="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                    <A href="/productsByCategory/laptops" class="dropdown-item">
                      Laptops
                    </A>
                    <A
                      href="/productsByCategory/smartphones"
                      class="dropdown-item"
                    >
                      Smartphones
                    </A>
                    <A
                      href="/productsByCategory/mens-shoes"
                      class="dropdown-item"
                    >
                      Shoes
                    </A>
                    <A
                      href="/productsByCategory/womens-watches"
                      class="dropdown-item"
                    >
                      Watch
                    </A>
                    <A
                      href="/productsByCategory/motorcycle"
                      class="dropdown-item"
                    >
                      Bike
                    </A>
                  </div>
                </div>
              </div>
              <div class="ms-auto d-none d-lg-block">

                <A href="/cart" class="nav-item nav-link">
                  Cart&#8209;
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>({cartData?.length})
                </A>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
