import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

const StylePage = () => (
  <div className="p-4">
    <h1 className="text-2xl mb-4">Styled Navigation</h1>
    <nav className="grid grid-cols-2 gap-4">
      <Link to="/table" className="p-3 bg-green-400 text-white rounded text-center">Table Page</Link>
      <Link to="/toast-test" className="p-3 bg-orange-400 text-white rounded text-center">Toast Test</Link>
    </nav>
    <BackButton />
  </div>
);

export default StylePage;