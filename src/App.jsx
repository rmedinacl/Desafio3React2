import { Routes, Route } from "react-router-dom";
import NavbarPok from "./components/Navbar";
import Home from "./views/Home";
import PokeSearch from "./views/PokeSearch";
import PokeDetail from "./views/PokeDetail";
export default function App() {
  return (
    <>
      <NavbarPok />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokesearch/" element={<PokeSearch />} />
        <Route path="/pokesearch/:name" element={<PokeDetail />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}
