import toast, { Toaster } from "solid-toast";
import Routes from "./routes/routes";
import { useLocation } from "@solidjs/router";
import Navbar from "./components/Navbar";
import { createSignal, createEffect, Show, createMemo } from "solid-js";
import { isLogin } from "./pages/login";

function App() {
  const location = useLocation();

  return (
    <div>
      <Toaster />
      <Show when={location.pathname !== "/login"}>
        <Navbar />
      </Show>
      <Routes />
    </div>
  );
}

export default App;
