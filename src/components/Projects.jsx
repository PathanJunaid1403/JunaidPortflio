import React, { useState } from "react";
import { Row, Col, Tag, Button, Modal } from "antd";
import { GithubOutlined, LinkOutlined, EyeOutlined } from "@ant-design/icons";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    subtitle: "HTML / CSS / JavaScript",
    desc: "A responsive personal portfolio website built from scratch to showcase skills, education, and certifications. Fully mobile-friendly with smooth scroll and contact form.",
    longDesc: "Built a complete multi-section personal portfolio website using HTML5, CSS3 and vanilla JavaScript. Features include smooth scrolling navigation, responsive layout for all screen sizes, an animated hero section, skills showcase, and a working contact form.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    color: "#e2ff5d",
    emoji: "🌐",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "To-Do List App",
    subtitle: "HTML / CSS / JavaScript",
    desc: "An interactive task management app with add, delete, and mark-complete features. Uses localStorage to save tasks even after the browser is closed.",
    longDesc: "A fully functional To-Do List application that allows users to add new tasks, mark them as complete, delete tasks, and filter between all/active/completed tasks. Data is saved in the browser's localStorage so tasks persist on page reload.",
    tags: ["HTML5", "CSS3", "JavaScript", "localStorage"],
    color: "#00d4ff",
    emoji: "✅",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Student Result Calculator",
    subtitle: "HTML / CSS / JavaScript",
    desc: "A web tool for calculating student grades, percentages, and pass/fail status from entered marks. Useful for educational institutions.",
    longDesc: "A utility web application that takes student marks as input for multiple subjects, calculates the total, percentage, and grade (A/B/C/D/F), and displays a detailed result card. Includes form validation and a printable result view.",
    tags: ["HTML5", "CSS3", "JavaScript", "Forms"],
    color: "#ff6b6b",
    emoji: "🎓",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 4,
    title: "Data Entry Form with Validation",
    subtitle: "HTML / CSS / JavaScript",
    desc: "A professional data entry form with client-side validation, error messages, and a tabular display of all submitted records.",
    longDesc: "A complete data entry solution featuring multi-field form validation (name, email, phone, DOB), real-time error messages, and a dynamic table that displays all submitted records. Records can be edited or deleted. Designed for back-office use cases.",
    tags: ["HTML5", "CSS3", "JavaScript", "Validation"],
    color: "#a78bfa",
    emoji: "📋",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 5,
    title: "Digital Business Card",
    subtitle: "HTML / CSS",
    desc: "An elegant, responsive digital business card page with contact details, social links, and a downloadable vCard option.",
    longDesc: "A clean digital business card built with HTML and CSS that can be shared as a link. Displays name, role, contact information, and social media links in a card format. Fully responsive and includes a hover animation effect.",
    tags: ["HTML5", "CSS3", "Responsive Design"],
    color: "#fbbf24",
    emoji: "💳",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 6,
    title: "Simple Quiz App",
    subtitle: "HTML / CSS / JavaScript",
    desc: "A multiple-choice quiz application with timer, score tracking, and result summary. Great for e-learning or self-testing.",
    longDesc: "An interactive quiz application with 10 multiple-choice questions, a countdown timer per question, score tracking, and a final result screen showing correct/incorrect answers. Questions and options are stored in a JavaScript array.",
    tags: ["HTML5", "CSS3", "JavaScript", "DOM"],
    color: "#34d399",
    emoji: "🧠",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered = filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <span className="section-num">03.</span>
          <h2 className="section-title">Projects</h2>
          <span className="section-line" />
        </div>

        <div className="projects__filters">
          {["all", "featured"].map((f) => (
            <button
              key={f}
              className={`projects__filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <Row gutter={[28, 28]}>
          {filtered.map((project) => (
            <Col xs={24} sm={12} lg={8} key={project.id}>
              <div className="project-card" style={{ "--accent": project.color }}>
                <div className="project-card__top">
                  <span className="project-card__emoji">{project.emoji}</span>
                  <div className="project-card__links">
                    <a href={project.github} target="_blank" rel="noreferrer"><GithubOutlined /></a>
                    <a href={project.live} target="_blank" rel="noreferrer"><LinkOutlined /></a>
                  </div>
                </div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__subtitle">{project.subtitle}</p>
                <p className="project-card__desc">{project.desc}</p>
                <div className="project-card__tags">
                  {project.tags.slice(0, 4).map((t) => (
                    <Tag key={t} className="project-card__tag">{t}</Tag>
                  ))}
                </div>
                <button className="project-card__details-btn" onClick={() => setSelected(project)}>
                  <EyeOutlined /> Details
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <Modal
        open={!!selected}
        onCancel={() => setSelected(null)}
        footer={null}
        className="project-modal"
        width={620}
        centered
      >
        {selected && (
          <div className="project-modal__content">
            <div className="project-modal__header" style={{ "--accent": selected.color }}>
              <span className="project-modal__emoji">{selected.emoji}</span>
              <div>
                <h2 className="project-modal__title">{selected.title}</h2>
                <p className="project-modal__subtitle">{selected.subtitle}</p>
              </div>
            </div>
            <p className="project-modal__desc">{selected.longDesc}</p>
            <div className="project-modal__tags">
              {selected.tags.map((t) => (
                <Tag key={t} className="project-card__tag">{t}</Tag>
              ))}
            </div>
            <div className="project-modal__actions">
              <Button className="project-modal__btn project-modal__btn--primary" href={selected.live} target="_blank">
                <LinkOutlined /> Live Demo
              </Button>
              <Button className="project-modal__btn project-modal__btn--ghost" href={selected.github} target="_blank">
                <GithubOutlined /> GitHub
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;