import React, { useEffect, useRef } from "react";
import { Button } from "antd";
import { ArrowDownOutlined, GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero__bg-grid" />
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />

      <div className="hero__content" ref={titleRef}>
        <p className="hero__greeting">
          <span className="hero__greeting-line" />
          Hi there, I'm
        </p>

        <h1 className="hero__name">
          Juned<br />
          <span className="hero__name-outline">Khan.</span>
        </h1>

        <h2 className="hero__title">
          FrontEnd Developer &amp; Back-Office Executive
          <span className="hero__title-cursor">|</span>
        </h2>


        <p className="hero__desc">
          A motivated fresher with a <mark>Diploma in FrontEnd Development</mark> and strong
          skills in <mark>HTML</mark>, <mark>CSS</mark> &amp; <mark>JavaScript</mark>.
          Seeking a full-time opportunity to grow and contribute effectively in
          FrontEnd development or back-office/administrative roles.
        </p>

        <div className="hero__actions">
          <Button
            className="hero__btn hero__btn--primary"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
          <Button
            className="hero__btn hero__btn--outline"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Me
          </Button>
        </div>

        <div className="hero__socials">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hero__social-link">
            <GithubOutlined />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hero__social-link">
            <LinkedinOutlined />
          </a>
          <a href="mailto:pathanjunaidkhan12@gmail.com" className="hero__social-link">
            <MailOutlined />
          </a>
        </div>
      </div>

      <div className="hero__scroll-hint" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
        <ArrowDownOutlined />
        <span>Scroll</span>
      </div>

      <div className="hero__badge">
        <span className="hero__badge-dot" />
        Open to opportunities
      </div>
    </section>
  );
};

export default Hero;