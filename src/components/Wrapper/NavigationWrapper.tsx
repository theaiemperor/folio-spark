
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Layout from "../../pages/Layout";
import NoPage from "../../pages/NoPage/NoPage";
import Contact from "../../pages/Contact/Contact";

export default function NavigationWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
