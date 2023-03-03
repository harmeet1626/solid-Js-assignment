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
  const totalQty = createMemo(() => {
    const sum = cartData.reduce((accumulator, object) => {
      return accumulator + object.qty;
    }, 0);
    return sum;
  });
  const totalAmount = createMemo(() => {
    const sum = cartData.reduce((accumulator, object) => {
      return accumulator + object.price;
    }, 0);
    return sum;
  });
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
        style="background-color: #eee; height: 100vh !important;"
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
                        <div>
                          <p class="mb-0">
                            <span class="text-muted">Sort by:</span>{" "}
                            <a href="#!" class="text-body">
                              price <i class="fas fa-angle-down mt-1"></i>
                            </a>
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
                                  <div style="width: 50px;">
                                    <h5 class="fw-normal mb-0">
                                      {products.qty}
                                    </h5>
                                  </div>
                                  <div style="width: 80px;">
                                    <h5 class="mb-0">${products.price}</h5>
                                  </div>
                                  <a href="#!" style="color: #cecece;">
                                    <i class="fas fa-trash-alt"></i>
                                  </a>
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
                        )}
                      </For>
                    </div>
                    <div class="col-lg-5">
                      <div class="card bg-primary text-white rounded-3">
                        <div class="card-body">
                          <div class="d-flex justify-content-between ">
                            <p class="mb-2">totalProducts</p>
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

                          {/* <div class="d-flex justify-content-between">
                            <p class="mb-2">Discounted Total</p>
                            <p class="mb-2">${product?.length}</p>
                          </div> */}

                          <button
                            type="button"
                            class="btn btn-info btn-block btn-lg"
                          >
                            <div class="d-flex justify-content-between">
                              <span>${totalAmount}</span>
                              <span>
                                {" "}
                                Checkout
                                <stripe-buy-button
                                  buy-button-id="buy_btn_1MhVrVSHH6lTciJeFXyDghG1"
                                  publishable-key="pk_test_51Mg4qcSHH6lTciJepNZxG7YQJvNYcnXm58AXGOrt3hzfyPaxofrhn3LvVBfTzFmkgTh9DPG8AaHEzmjeNQ65FaCM00v5XlKKXf"
                                ></stripe-buy-button>
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
