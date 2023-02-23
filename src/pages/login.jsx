import { createSignal, createEffect } from "solid-js";
import toast, { Toaster } from "solid-toast";
import { createStore, produce } from "solid-js/store";
import { useNavigate } from "@solidjs/router";
export const [userDetails, setuserDetails] = createStore({
  id: "",
  email: "",
  firstName: "",
  gender: "",
  image: "",
  lastName: "",
  username: "",
});
export const [isLogin, setisLogin] = createSignal(getStatus());
export function getStatus(){
  return localStorage.getItem('isLogin')
}


const login = () => {
  const [username, setusername] = createSignal("");
  const [password, setpassword] = createSignal("");
  const navigate = useNavigate();
  function login() {
    try {
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username(),
          password: password(),
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (!res.token) {
            toast.error("Check the creadentials");
          } else {
            setisLogin(true);
            localStorage.setItem('isLogin', JSON.stringify(true))
            toast.success("Welcome!");
            navigate("/");
            setuserDetails(
              produce((details) => {
                (details.id = res.id),
                  (details.email = res.email),
                  (details.firstName = res.firstName),
                  (details.gender = res.gender),
                  (details.image = res.image),
                  (details.lastName = res.lastName),
                  (details.username = res.username);
              })
            );
          }
        });
    } catch (e) {
      toast.error(e);
    }
  }
  return (
    <>
      <section class="vh-100">
        <div
          class="container-fluid h-custom"
          style="height: calc(100% - 73px);"
        >
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid"
                alt="Sample image"
              />
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    onInput={(e) => setusername(e.currentTarget.value)}
                    id="form3Example3"
                    class="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                  <label class="form-label" for="form3Example3">
                    Username
                  </label>
                </div>

                <div class="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    onInput={(e) => setpassword(e.currentTarget.value)}
                    class="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                  <label class="form-label" for="form3Example4">
                    Password
                  </label>
                </div>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="form-check mb-0">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label class="form-check-label" for="form2Example3">
                      Remember me
                    </label>
                  </div>
                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                  <button
                    onClick={() => login()}
                    type="button"
                    class="btn btn-primary btn-lg"
                    style="padding-left: 2.5rem; padding-right: 2.5rem;"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div class="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>
          <div>
            <a href="#!" class="text-white me-4">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#!" class="text-white me-4">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#!" class="text-white me-4">
              <i class="fab fa-google"></i>
            </a>
            <a href="#!" class="text-white">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default login;
