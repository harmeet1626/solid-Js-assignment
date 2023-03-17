import { Toaster } from "solid-toast";
import Routes from "./routes/routes";
import { useLocation } from "@solidjs/router";
import Navbar from "./components/Navbar";
import { Show } from "solid-js";

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
