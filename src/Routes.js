import React from "react";
import Dhiwise from "pages/Dhiwise";
import Figmatoreact from "pages/Figmatoreact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/figmatoreact" element={<Figmatoreact />} />
        <Route path="/dhiwise" element={<Dhiwise />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
