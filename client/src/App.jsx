import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { bgimage } from "./assets";
import { Home, CreatePost } from "./pages";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <header className="pt-2 pb-2 sticky top-0 z-40 backdrop-blur w-full flex justify-between items-center bg-slate-900 sm:px-8 px-4 border-b border-slate-800">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <Link
          to="/create-post"
          className="font-Inter font-medium bg-sky-900  hover:bg-sky-700 text-white px-5 py-2 rounded-md"
        >
          Create your image
        </Link>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-slate-900 min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
