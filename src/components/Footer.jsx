import React from "react";
import { GithubOutlined, LinkedinOutlined, MailOutlined, HeartFilled } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-name">Juned</span>
          <span className="navbar__logo-slash"> /</span>
          <span className="navbar__logo-bracket">&gt;</span>
        </div>

        <p className="footer__tagline">
          Built with <HeartFilled className="footer__heart" /> using React, Ant Design & SCSS
        </p>

        <div className="footer__socials">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="footer__social">
            <GithubOutlined />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer__social">
            <LinkedinOutlined />
          </a>
          <a href="mailto:pathanjunaidkhan12@gmail.com" className="footer__social">
            <MailOutlined />
          </a>
        </div>

        <p className="footer__copy">
          © {new Date().getFullYear()} Juned Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;