import React from "react";
import { Row, Col, Tag } from "antd";
import {
  CalendarOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  UserOutlined,
} from "@ant-design/icons";

const stats = [
  { value: "1+", label: "Month of Training" },
  { value: "5+", label: "Projects Built" },
  { value: "1", label: "Certifications" },
  { value: "3", label: "Languages Known" },
];

const facts = [
  { icon: <CalendarOutlined />, text: "DOB: 14 March 1997" },
  { icon: <EnvironmentOutlined />, text: "Kalewadi, Pune, Maharashtra – 411017" },
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
            <div className="about__image-wrap">
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
            <div className="about__content">
              <Tag className="about__tag">Fresher — Available Immediately</Tag>

              <p className="about__text">
                Hello! I'm <strong>Juned Khan</strong>, a motivated and hardworking fresher
                from Pune, Maharashtra. I recently completed a{" "}
                <strong>Diploma in FrontEnd Development (Nov 2024 – Apr 2025)</strong> and hold a{" "}
                <strong>B.Sc in Environmental Science (CGPA: 7.73)</strong>.
              </p>

              <p className="about__text">
                I have hands-on skills in <strong>HTML, CSS, JavaScript</strong>, along with
                proficiency in <strong>Microsoft Excel, Word, and PowerPoint</strong>. I'm comfortable
                with data entry, file management, documentation, and have a good typing speed —
                making me equally suited for FrontEnd development and back-office/administrative roles.
              </p>

              <p className="about__text">
                I'm a quick learner with a positive attitude, strong teamwork ability and
                excellent time management skills. I'm eager to join a reputed organization
                where I can apply my skills and grow professionally.
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