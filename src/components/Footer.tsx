import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a1420] border-t border-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-600 text-lg font-light">
          {" "}
          <Link
            to="https://github.com/bastian-js"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            bastian-js
          </Link>{" "}
          © 2026
        </p>
      </div>
    </footer>
  );
};
