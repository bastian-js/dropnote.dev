import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<div>About Page</div>} />
      <Route path="/contact" element={<div>Contact Page</div>} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}
