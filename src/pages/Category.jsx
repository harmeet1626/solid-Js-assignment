import { createSignal, createResource } from "solid-js";
import { Routes, Route, useNavigate, A, useLocation, useParams } from "@solidjs/router";
const Category = () => {
  const navigate =useNavigate()
  const getCategory = async () =>
    (await fetch(`https://dummyjson.com/products/categories`)).json();
  const [categories] = createResource(getCategory);
function openDetails(products){
navigate(`/productsByCategory/${products}`)
}
  return (
    <>
      <section style="background-color: #eee;">
        <div class="container py-5">
          <h4 class="text-center mb-5">
            <strong>Product Category</strong>
          </h4>
          <div class="row">
            <For each={categories()}>
              {(products, i) => (
                <div class="col-lg-4 col-md-6 mb-4">
                  <div style="cursor: pointer;" class="bg-image hover-zoom ripple shadow-1-strong rounded" onClick={()=>openDetails(products)}>
                    <img
                      style="padding-left: 75px;"
                      src={`https://source.unsplash.com/160x160/?${products}`}
                      class="w-10"
                    />
                    <a>
                      <div
                        class="mask"
                        style="background-color: rgba(0, 0, 0, 0.3);"
                      >
                        <div class="d-flex justify-content-start align-items-start h-100">
                          <h5>
                            <span class="badge bg-light pt-2 ms-3 mt-3 text-dark">
                              {products}
                            </span>
                          </h5>
                        </div>
                      </div>
                      <div class="hover-overlay">
                        <div
                          class="mask"
                          style="background-color: rgba(253, 253, 253, 0.15);"
                        ></div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>
    </>
  );
};
export default Category;
