import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Products from "./pages/Products";
import Apps from "./pages/apps";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <>
      <div></div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="course" element={<Course />} />
          <Route path="products" element={<Products />} />
          <Route path="apps" element={<Apps />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
