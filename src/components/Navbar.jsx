import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const navItems = [
  { key: "home", label: "Home" },
  { key: "about", label: "About" },
  { key: "skills", label: "Skills" },
  { key: "projects", label: "Projects" },
  { key: "experience", label: "Experience" },
  { key: "contact", label: "Contact" },
];

const Navbar = ({ activeSection, scrolled }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <div className="navbar__logo" onClick={() => scrollTo("home")}>
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-name">Juned</span>
          <span className="navbar__logo-slash"> /</span>
          <span className="navbar__logo-bracket">&gt;</span>
        </div>

        <ul className="navbar__links">
          {navItems.map((item) => (
            <li
              key={item.key}
              className={`navbar__link ${activeSection === item.key ? "navbar__link--active" : ""}`}
              onClick={() => scrollTo(item.key)}
            >
              {item.label}
              <span className="navbar__link-dot" />
            </li>
          ))}
        </ul>

        <Button
          className="navbar__resume-btn"
          href="/resume.pdf"
          target="_blank"
        >
          Resume
        </Button>

        <button className="navbar__hamburger" onClick={() => setDrawerOpen(true)}>
          <MenuOutlined />
        </button>
      </div>

      <Drawer
        placement="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        className="mobile-drawer"
        closeIcon={<CloseOutlined style={{ color: "#e2ff5d" }} />}
        width={280}
      >
        <div className="mobile-drawer__logo">
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-name">Juned</span>
          <span className="navbar__logo-slash"> /</span>
          <span className="navbar__logo-bracket">&gt;</span>
        </div>
        <ul className="mobile-drawer__links">
          {navItems.map((item) => (
            <li
              key={item.key}
              className={`mobile-drawer__link ${activeSection === item.key ? "mobile-drawer__link--active" : ""}`}
              onClick={() => scrollTo(item.key)}
            >
              <span className="mobile-drawer__num">0{navItems.indexOf(item) + 1}.</span>
              {item.label}
            </li>
          ))}
        </ul>
      </Drawer>
    </nav>
  );
};

export default Navbar;