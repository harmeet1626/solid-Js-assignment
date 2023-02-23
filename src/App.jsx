import toast, { Toaster } from "solid-toast";
import Routes from "./routes/routes";
import Navbar from "./components/Navbar";
import { createSignal, createEffect, Show } from "solid-js";
import { isLogin } from "./pages/login";

function App() {
  const [state, setstate] = createSignal();
  createEffect(() => {
    setstate(isLogin());
  });

  return (
    <div>
      <Toaster />
      <Show when={state()}>
        <Navbar />
      </Show>
      <Routes />
    </div>
  );
}

export default App;
