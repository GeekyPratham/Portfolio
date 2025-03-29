import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { FiMenu, FiX } from "react-icons/fi";

export const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4 md:px-8">
        <h1 className="text-2xl font-bold">Pratham Raj</h1>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          <Button buttonName="Home" onClick={() => navigate("/")} />
          <Button buttonName="Resume" onClick={() => navigate("/resume")} />
          <Button buttonName="Work" onClick={() => navigate("/work")} />
          <Button buttonName="Experience" onClick={() => navigate("/Experience")} />
          <Button buttonName="Hire Me" onClick={() => navigate("/HireMe")} />
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center space-y-4 pb-4">
          <Button buttonName="Home" onClick={() => { navigate("/"); setMenuOpen(false); }} width="w-40" />
          <Button buttonName="Resume" onClick={() => { navigate("/resume"); setMenuOpen(false); }} width="w-40"/>
          <Button buttonName="Work" onClick={() => { navigate("/work"); setMenuOpen(false); }} width="w-40"/>
          <Button buttonName="Experience" onClick={() => { navigate("/Experience"); setMenuOpen(false); }}width="w-40" />
          <Button buttonName="Hire Me" onClick={() => { navigate("/HireMe"); setMenuOpen(false); }} width="w-40"/>
        </nav>
      )}
    </header>
  );
};
