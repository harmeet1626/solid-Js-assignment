import { Toaster } from "solid-toast";
import Routes from "./routes/routes";
import { useLocation } from "@solidjs/router";
import Navbar from "./components/Navbar";
import { onMount, Show } from "solid-js";
import { getUserDetails } from "./pages/login";


function App() {
  const location = useLocation();
  onMount(()=>{
    getUserDetails()
  })

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
