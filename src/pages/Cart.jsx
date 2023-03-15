import { createSignal, createResource, createMemo } from "solid-js";
import { userDetails, setuserDetails } from "./login";
import toast, { Toaster } from "solid-toast";
import { createStore, produce } from "solid-js/store";
import { cartData, setcartData } from "../components/cartData";

const cart = () => {
  function delete_item(i) {
    setcartData(
      produce((data) => {
        data.splice(i(), 1);
      })
    );

    // if server side cart functionnality required
    // fetch(`https://dummyjson.com/carts/${userDetails?.id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (res.isDeleted) {
    //       toast.success("Deleted successfully!");
    //     } else {
    //       toast.error("Can not delete product");
    //     }
    //   });
  }

  var stripe = Stripe(
    "pk_test_51Mg4qcSHH6lTciJepNZxG7YQJvNYcnXm58AXGOrt3hzfyPaxofrhn3LvVBfTzFmkgTh9DPG8AaHEzmjeNQ65FaCM00v5XlKKXf"
  );

  function pay() {
    stripe.redirectToCheckout({
      lineItems: [{ price: "price_1MiXSzSHH6lTciJeIXraVQrh", quantity: 1 }],
      mode: "payment",
      successUrl: "https://shoppinguser.netlify.app/",
      cancelUrl: "https://example.com/canceled",
    });
  }
  const totalQty = createMemo(() => {
    const sum = cartData.reduce((accumulator, object) => {
      return accumulator + object.qty;
    }, 0);
    return sum;
  });
  const totalAmount = createMemo(() => {
    const sum = cartData.reduce((accumulator, object) => {
      return accumulator + object.price * object.qty;
    }, 0);
    return sum;
  });

  // if server side cart functionnality required
  // const getproducts = async () =>
  //   (await fetch(`https://dummyjson.com/carts/${userDetails?.id}`))
  //     .json()
  //     .then((res) => {
  //       return res;
  //     });

  // const [product, setproducts] = createResource(getproducts);
  const [product, setproduct] = createStore([...cartData]);
  return (
    <>
      <section
        class="h-100 h-custom"
        style="background-color: #eee; height: 10vh !important;"
      >
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
              <div class="card">
                <div class="card-body p-4">
                  <div class="row">
                    <div class="col-lg-7">
                      <h5 class="mb-3">
                        <a href="#!" class="text-body">
                          <i class="fas fa-long-arrow-alt-left me-2"></i>
                          Continue shopping
                        </a>
                      </h5>
                      <hr />

                      <div class="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p class="mb-1">Shopping cart</p>
                          <p class="mb-0">
                            You have {cartData?.length} items in your cart
                          </p>
                        </div>
                      </div>
                      <For each={cartData}>
                        {(products, i) => (
                          <div class="card mb-3 mb-lg-0">
                            <div class="card-body">
                              <div class="d-flex justify-content-between">
                                <div class="d-flex flex-row align-items-center">
                                  <div></div>
                                  <div class="ms-3">
                                    <h5>{products.title}</h5>
                                    <p class="small mb-0"></p>
                                  </div>
                                </div>
                                <div class="d-flex flex-row align-items-center">
                                  <div style="width: 80px;">
                                    <h5 class="mb-0">${products.price}</h5>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      if (products.qty > 1) {
                                        setcartData(
                                          produce((data) => {
                                            data[i()].qty = data[i()].qty - 1;
                                          })
                                        );
                                      }
                                    }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      class="bi bi-bag-dash-fill"
                                      viewBox="0 0 16 16"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"
                                      />
                                    </svg>
                                  </button>
                                  <div style="width: 30px; padding-left:10px; white-space: nowrap;">
                                    <h5 class="fw-normal mb-0">
                                      {products.qty}
                                    </h5>
                                  </div>
                                  <div style={"padding-left:2px;"}>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setcartData(
                                          produce((data) => {
                                            data[i()].qty = data[i()].qty + 1;
                                          })
                                        )
                                      }
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-bag-plus-fill"
                                        viewBox="0 0 16 16"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"
                                        />
                                      </svg>
                                    </button>
                                  </div>
                                  <a href="#!" style="color: #cecece;">
                                    <i class="fas fa-trash-alt"></i>
                                  </a>
                                  <div style={"padding-left:50px;"}>
                                    <button
                                      onClick={() => delete_item(i)}
                                      type="button"
                                      class="btn btn-primary"
                                    >
                                      Delete
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </For>
                    </div>
                    <div class="col-lg-5">
                      <div class="card bg-primary text-white rounded-3">
                        <div class="card-body">
                          <div class="d-flex justify-content-between ">
                            <p class="mb-2">Total Products</p>
                            <p class="mb-2">{cartData?.length}</p>
                          </div>
                          <div class="d-flex justify-content-between ">
                            <p class="mb-2">Total Quantity</p>
                            <p class="mb-2">{totalQty}</p>
                          </div>
                          <div class="d-flex justify-content-between">
                            <p class="mb-2">Total</p>
                            <p class="mb-2">${totalAmount}</p>
                          </div>
                          <button
                            type="button"
                            class="btn btn-info btn-block btn-lg"
                          >
                            <div class="d-flex justify-content-between">
                              <span>${totalAmount}</span>
                              <span onClick={() => pay()}>
                                Checkout
                                <i class="fas fa-long-arrow-alt-right ms-2"></i>
                              </span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default cart;
