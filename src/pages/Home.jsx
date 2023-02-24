import { createSignal, createResource, onMount } from "solid-js";
import { Routes, Route, useNavigate, A, useLocation } from "@solidjs/router";
import { getStatus } from "./login";
import "../style/index.css";
const Home = () => {
  const navigate = useNavigate();
  function movetoProducts() {
    navigate("/allProducts");
  }
  function movetoCategory() {
    navigate("/category");
  }
  onMount(async () => {
    getStatus();
  });

  return (
    <>
      <div class="container-fluid px-0 mb-5">
        <div
          id="header-carousel"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="w-100"
                src="https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.jpg?s=612x612&w=0&k=20&c=EWKEahyVLY8iAHyirCCDESHRGW37lqUJ7In0SssNSLE="
                alt="Images"
              />
              <div class="carousel-caption">
                <div class="container">
                  <div class="row justify-content-start">
                    <div class="col-lg-7 text-start">
                      <p class="fs-4 text-white animated slideInRight">
                        Welcome to
                        <strong>GrowMark</strong>
                      </p>
                      <h1 class="display-1 text-white mb-4 animated slideInRight">
                        Get the best out of market
                      </h1>
                      <A
                        href="/"
                        class="btn btn-primary rounded-pill py-3 px-5 animated slideInRight"
                      >
                        Explore More
                      </A>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class="w-100" src="./../img/carousel-2.jpg" alt="Image" />
              <div class="carousel-caption">
                <div class="container">
                  <div class="row justify-content-end">
                    <div class="col-lg-7 text-end">
                      <p class="fs-4 text-white animated slideInLeft">
                        Welcome to <strong>GrowMark</strong>
                      </p>
                      <h1 class="display-1 text-white mb-5 animated slideInLeft">
                        Ready to Grow Your Business
                      </h1>
                      <a
                        href=""
                        class="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft"
                      >
                        Explore More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-0 feature-row">
            <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <div class="feature-item border h-100 p-5">
                <div
                  class="btn-square bg-light rounded-circle mb-4"
                  style="width: 64px; height: 64px;"
                >
                  <img
                    class="img-fluid"
                    src="https://source.unsplash.com/500x500/?laptop"
                    alt="Icon"
                  />
                </div>
                <h5 class="mb-3">Laptops</h5>
                <p class="mb-0">Get the best laptops from out store!</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <div class="feature-item border h-100 p-5">
                <div
                  class="btn-square bg-light rounded-circle mb-4"
                  style="width: 64px; height: 64px;"
                >
                  <img
                    class="img-fluid"
                    src="https://source.unsplash.com/500x500/?Professional"
                    alt="Icon"
                  />
                </div>
                <h5 class="mb-3">Professional Stuff</h5>
                <p class="mb-0">
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div class="feature-item border h-100 p-5">
                <div
                  class="btn-square bg-light rounded-circle mb-4"
                  style="width: 64px; height: 64px;"
                >
                  <img
                    class="img-fluid"
                    src="https://source.unsplash.com/500x500/?price"
                    alt="Icon"
                  />
                </div>
                <h5 class="mb-3">Fair Prices</h5>
                <p class="mb-0">
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <div class="feature-item border h-100 p-5">
                <div
                  class="btn-square bg-light rounded-circle mb-4"
                  style="width: 64px; height: 64px;"
                >
                  <img
                    class="img-fluid"
                    src="https://source.unsplash.com/500x500/?20/7"
                    alt="Icon"
                  />
                </div>
                <h5 class="mb-3">24/7 Support</h5>
                <p class="mb-0">
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-xxl about my-5">
        <div class="container">
          <div class="row g-0">
            <div class="col-lg-6">
              <div
                class="h-100 d-flex align-items-center justify-content-center"
                style="min-height: 300px;"
              >
                <button
                  type="button"
                  class="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
              </div>
            </div>
            <div class="col-lg-6 pt-lg-5 wow fadeIn" data-wow-delay="0.5s">
              <div class="bg-white rounded-top p-5 mt-lg-5">
                <p class="fs-5 fw-medium text-primary">About Us</p>
                <h1 class="display-6 mb-4">
                  The Best Marketing Agency to Improve Your Business
                </h1>
                <p class="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </p>
                <div class="row g-5 pt-2 mb-5">
                  <div class="col-sm-6">
                    <img
                      class="img-fluid mb-4"
                      src="./../img/icon/icon-5.png"
                      alt=""
                    />
                    <h5 class="mb-3">Managed Services</h5>
                    <span>Clita erat ipsum et lorem et sit sed stet lorem</span>
                  </div>
                  <div class="col-sm-6">
                    <img
                      class="img-fluid mb-4"
                      src="./../img/icon/icon-2.png"
                      alt=""
                    />
                    <h5 class="mb-3">Dedicated Experts</h5>
                    <span>Clita erat ipsum et lorem et sit sed stet lorem</span>
                  </div>
                </div>
                <A
                  class="btn btn-primary rounded-pill py-3 px-5"
                  href="/"
                >
                  Explore More
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
