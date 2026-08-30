import React from "react";
import { Row, Col, Tag } from "antd";
import {
  CalendarOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  UserOutlined,
} from "@ant-design/icons";

const stats = [
  { value: "6", label: "Months of Course" },
  { value: "3+", label: "Projects Built" },
  { value: "2", label: "Certifications" },
  { value: "3", label: "Languages Known" },
];

const facts = [
  { icon: <CalendarOutlined />, text: "DOB: 14 March 1997" },
  { icon: <EnvironmentOutlined />, text: "Hinjewadi Phase 1, Pune, Maharashtra – 411057" },
  { icon: <GlobalOutlined />, text: "Languages: English, Hindi, Marathi" },
  { icon: <UserOutlined />, text: "B.Sc Environmental Science, CGPA: 7.73" },
];

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <span className="section-num">01.</span>
          <h2 className="section-title">About Me</h2>
          <span className="section-line" />
        </div>

        <Row gutter={[60, 40]} align="middle">
          <Col xs={24} md={10}>
            <div className="about__image-wrap reveal">
              <div className="about__image-frame">
                <div className="about__avatar">
                  <div className="about__avatar-initials">JK</div>
                  <div className="about__avatar-ring" />
                </div>
                <div className="about__image-deco about__image-deco--1" />
                <div className="about__image-deco about__image-deco--2" />
              </div>

              <div className="about__stats">
                {stats.map((s) => (
                  <div key={s.label} className="about__stat">
                    <span className="about__stat-value">{s.value}</span>
                    <span className="about__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          <Col xs={24} md={14}>
            <div className="about__content reveal">
              <Tag className="about__tag">Frontend Developer — Available Immediately</Tag>

              <p className="about__text">
                Hello! I'm <strong>Juned Khan</strong>, a Frontend Developer from Latur,
                Maharashtra. I hold a{" "}
                <strong>Diploma in Front End Development (Oct 2024 – March 2025)</strong> and a{" "}
                <strong>B.Sc in Environmental Science (CGPA: 7.73)</strong> 
                {/* — backed by real-world experience from a{" "} */}
                {/* <strong>6-month internship at SAP Infosystems Pvt. Ltd. (Aug 2025 – Feb 2026).</strong> */}
              </p>

              <p className="about__text">
                During my Diploma, I worked on building and refining responsive web interfaces,
                translating designs into clean, structured code using <strong>HTML5</strong>,{" "}
                <strong>CSS3</strong>, <strong>JavaScript</strong>, and got hands-on with{" "}
                <strong>React Js</strong> — including functional components, props, and hooks.
                I gained practical exposure to UI workflows, cross-browser compatibility, and
                delivering polished front-end experiences in a professional team environment.
              </p>

              <p className="about__text">
                I write semantic, maintainable markup and care deeply about UI detail — from
                layout consistency to smooth interactions. I'm a fast learner who thrives in
                collaborative settings and is ready to contribute from day one.
              </p>

              <div className="about__facts">
                {facts.map((f) => (
                  <div key={f.text} className="about__fact">
                    <span className="about__fact-icon">{f.icon}</span>
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;