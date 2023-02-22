import { createSignal, createEffect, createResource, For } from "solid-js";
import {
  Routes,
  Route,
  useNavigate,
  A,
  useLocation,
  useParams,
} from "@solidjs/router";
const productsByCategory = () => {

  const navigate = useNavigate();
  const Params = useParams();
  function getcategory() {
    return { ...Params }.category;
  }
  
  const getProducts = async () =>
    (await fetch(`https://dummyjson.com/products/category/${getcategory()}`))
      .json()
      .then((res) => {
        return res.products;
      });
  const [Products, { mutate, refetch }] = createResource(getProducts);
  function moveToDetails(id) {
    navigate(`/ProductsDetails/${id}`);
  }
  return (
    <>
      <div class="form-outline"></div>
      <div class="container d-flex justify-content-center mt-50 mb-50">
        <div class="row">
          <For each={Products()}>
            {(Product, i) => (
              <div
                class="col-md-4 mt-2"
                onClick={() => moveToDetails(Product.id)}
              >
                <div class="card">
                  <div class="card-body" style="width:200px; height:200px">
                    <div
                      class="card-img-actions"
                      style="width:300px; height:300px"
                    >
                      <img
                        src={Product?.thumbnail}
                        class="card-img img-fluid"
                        width="96"
                        height="350"
                        alt=""
                      />
                    </div>
                  </div>

                  <div class="card-body bg-light text-center">
                    <div class="mb-2">
                      <h6 class="font-weight-semibold mb-2">
                        <a class="text-default mb-2" data-abc="true">
                          {Product?.title}
                        </a>
                      </h6>

                      <a class="text-muted" data-abc="true">
                        {Product?.description}
                      </a>
                    </div>

                    <h3 class="mb-0 font-weight-semibold">${Product?.price}</h3>

                    <div>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </>
  );
};
export default productsByCategory;
