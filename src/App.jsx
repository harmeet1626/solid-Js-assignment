import toast, { Toaster } from "solid-toast";
import Routes from "./routes/routes";
import Navbar from "./components/Navbar";
import { createSignal, createEffect, Show } from "solid-js";
import { isLogin } from "./pages/login";
import Test from './test'
function App() {
  
  createEffect(() => {
    console.log(isLogin())
  });
  return (
    <div>
      {/* <button onClick={() => test()}>chk</button>
      <Test/> */}
      <Toaster />
      <Show when={isLogin() == true}>
        <Navbar />
      </Show>
      <Routes />
    </div>
  );
}

export default App;
