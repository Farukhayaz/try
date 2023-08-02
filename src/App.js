import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Indoor from "./pages/Indoor";
import News from "./pages/News";
import Tax from "./pages/Tax";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />}>
    //       <Route path="/indoor" element={<Indoor />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    // <BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/indoor" element={<Indoor />} />
        <Route path="/news" element={<News />} />
        <Route path="/credit" element={<Tax />} />


      </Routes>
    </BrowserRouter>


  );
}

export default App;
