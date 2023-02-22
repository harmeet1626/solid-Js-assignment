import { useParams, useNavigate } from "@solidjs/router";
import { Toast } from "solid-bootstrap";
import { createSignal, For } from "solid-js";
import toast, { Toaster } from "solid-toast";
const productDetails = () => {
  const navigate = useNavigate();
  const [products, setproducts] = createSignal();
  const { ...Params } = useParams();
  function getId() {
    return { ...Params }.id;
  }
  function addToCart() {
    fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 1,
        products: [
          {
            id: getId(),
            quantity: qty(),
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then(toast.success(`Product added to the cart with qty of ${qty()}`))
      .then(navigate("/Allproducts"));
  }
  const [qty, setqty] = createSignal(1);
  async function getProducts() {
    await fetch(`https://dummyjson.com/products/${getId()}`)
      .then((res) => res.json())
      .then((res) => {
        setproducts([res]);
      });
  }
  getProducts();
  return (
    <div>
      <div class="container bootstrap snippets bootdey">
        <For each={products()}>
          {(product, i) => (
            <div
              class="panel-body inf-content"
              style="border:1px solid #DDDDDD;
              margin-top: 4em;
              -webkit-border-radius:10px;
              -moz-border-radius:10px;
              border-radius:10px;
              box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.3)
              "
            >
              <div class="row">
                <div class="col-md-4" style="    min-height: 26rem;">
                  <img
                    alt=""
                    style="width:600px;"
                    title=""
                    class="img-circle img-thumbnail isTooltip"
                    src={product.thumbnail}
                    data-original-title="Usuario"
                  />
                  <ul title="Ratings" class="list-inline ratings text-center">
                    <li>
                      <a>
                        <span class="glyphicon glyphicon-star"></span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="glyphicon glyphicon-star"></span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="glyphicon glyphicon-star"></span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="glyphicon glyphicon-star"></span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="glyphicon glyphicon-star"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <strong>Information</strong>
                  <br />
                  <div class="table-responsive">
                    <table class="table table-user-information">
                      <tbody>
                        <tr>
                          <td>
                            <strong>
                              <span class="glyphicon glyphicon-asterisk text-primary"></span>
                              product Id
                            </strong>
                          </td>
                          <td class="text-primary">{product.id}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>
                              <span class="glyphicon glyphicon-user  text-primary"></span>
                              Product name
                            </strong>
                          </td>
                          <td class="text-primary">{product.title}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>
                              <span class="glyphicon glyphicon-bookmark text-primary"></span>
                              description
                            </strong>
                          </td>
                          <td class="text-primary">{product.description}</td>
                        </tr>

                        <tr>
                          <td>
                            <strong>
                              <span class="glyphicon glyphicon-eye-open text-primary"></span>
                              price
                            </strong>
                          </td>
                          <td class="text-primary"> ${product.price}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>
                              <span class="glyphicon glyphicon-envelope text-primary"></span>
                              brand
                            </strong>
                          </td>
                          <td class="text-primary">{product.brand}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>
                              <span class="glyphicon glyphicon-calendar text-primary"></span>
                              category
                            </strong>
                          </td>
                          <td class="text-primary">{product.category}</td>
                        </tr>
                      </tbody>
                    </table>
                    <button
                      type="button"
                      onClick={() => {
                        if (qty() > 1) {
                          setqty(qty() - 1);
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
                    &nbsp {qty()} &nbsp
                    <button type="button" onClick={() => setqty(qty() + 1)}>
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
                    &nbsp; &nbsp; &nbsp;
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => addToCart()}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};
export default productDetails;
