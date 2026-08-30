import React, { useState } from "react";
import { Row, Col, Tag, Button, Modal } from "antd";
import { GithubOutlined, LinkOutlined, EyeOutlined } from "@ant-design/icons";

const getMicrolinkThumb = (url) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

const projects = [
  {
    id: 1,
    title: "GlucoTrack - Blood Sugar Monitor",
    subtitle: "HTML / CSS / React Js / Vite",
    desc: "GlucoTrack is a blood sugar monitoring application that helps users track glucose levels, readings, Time in Range, and estimated HbA1c through an easy-to-use dashboard.",
    longDesc: "GlucoTrack is a blood sugar monitoring and tracking application designed to help users understand and manage their glucose levels. It provides a centralized dashboard to view blood sugar readings, average glucose, total logs, high/low readings, Time in Range, and estimated HbA1c. Users can also record readings along with meal details and review their glucose trends through charts and reports.",
    tags: ["HTML5", "CSS3", "Vite", "React Js"],
    color: "#00d4ff",
    github: "https://github.com/PathanJunaid1403/Glucose-Tracker",
    live: "https://glucose-tracker-omega.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Nimbus - Weather Dashboard",
    subtitle: "HTML / CSS / React js / Vite",
    desc: "Nimbus is a real-time weather application that provides current weather conditions, atmospheric data, and 5-day forecasts for locations worldwide.",
    longDesc: "Nimbus is a real-time weather intelligence application powered by OpenWeatherMap. It allows users to search for locations and view current temperature, weather conditions, humidity, wind speed, visibility, cloud cover, and atmospheric pressure. The app also provides detailed 3-hour interval forecasts and a 5-day weather outlook, with support for live geolocation and metric units.",
    tags: ["HTML5", "CSS3", "JavaScript", "React js", "Vite"],
    color: "#ff6b6b",
    github: "https://github.com/PathanJunaid1403/Weather_app",
    live: "https://weathernimbus-live.vercel.app/",
    featured: true,
  },
];

const ProjectThumbnail = ({ project }) => {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const isPlaceholder = project.live === "https://example.com";

  return (
    <div className="project-card__thumb">
      {/* Emoji fallback — always rendered behind the image */}
      <div className="project-card__thumb-fallback" style={{ "--accent": project.color }}>
        <span>{project.emoji}</span>
      </div>

      {/* Microlink screenshot — hidden if placeholder URL or load error */}
      {!isPlaceholder && !imgError && (
        <img
          className={`project-card__thumb-img ${imgLoaded ? "loaded" : ""}`}
          src={getMicrolinkThumb(project.live)}
          alt={`${project.title} preview`}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
        />
      )}

      {/* Loading shimmer — visible until image loads */}
      {!isPlaceholder && !imgError && !imgLoaded && (
        <div className="project-card__thumb-shimmer" />
      )}
    </div>
  );
};

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

                {/* Thumbnail */}
                <ProjectThumbnail project={project} />

                <div className="project-card__body">
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
            {/* Thumbnail in modal header */}
            <div className="project-modal__thumb-wrap">
              <ProjectThumbnail project={selected} />
            </div>

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