import { Button } from "solid-bootstrap";
import { isLogin, setisLogin } from "../pages/login";
import { createSignal, createMemo } from "solid-js";
import "../css/bootstrap.min.css";
import "../css/style.css";
import { Routes, Route, useNavigate, A, useLocation } from "@solidjs/router";
import { userDetails } from "../pages/login";
import Category from "../pages/Category";
import Drawer from "../components/Drawer";

export default function navbar() {
  const navigate = useNavigate();
  function logout() {
    setisLogin(false);
    isLogin();
    navigate("/login");
  }
  return (
    <>
      {/* <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid" style="background-color: #2e2e2e;">
          <Drawer />
          <br></br>
          <A class="navbar-brand" href="/" style="color: white;">
            Welcome {userDetails?.firstName}
          </A>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            <div class="btn-toolbar pull-right">
              <div class="btn-group">
                <button
                  onClick={() => logout()}
                  type="button"
                  class="btn btn-secondary"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
      <div class="container-fluid bg-primary text-white d-none d-lg-flex">
        <div class="container py-3">
          <div class="d-flex align-items-center">
            <a href="index.html">
              <h2 class="text-white fw-bold m-0">Product Store</h2>
            </a>
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
                <A href="/cart" class="nav-item nav-link">
                  Cart
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
                <a
                  onClick={() => logout()}
                  class="btn btn-primary rounded-pill py-2 px-3"
                >
                  logout
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
