import { useState } from "react";
import "./Navbar.scss";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className={open ? "open" : ""}>
        <a href="#services" onClick={() => setOpen(false)}>Hjem</a>
        <a href="#cases" onClick={() => setOpen(false)}>Om LeoLov</a>
        <a href="#team" onClick={() => setOpen(false)}>Advokaterne</a>
        <a href="#footer" onClick={() => setOpen(false)}>Kontakt</a>
      </nav>

      <span className="logo">Leo-Lov</span>
      
      {/* RESPONSIV MENU */}
      <button
        className={`burger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}