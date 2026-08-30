import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Progress, Tooltip } from "antd";

const skillCategories = [
  {
    category: "Frontend Core",
    icon: "💻",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript (ES6+)", level: 72 },
      { name: "React (Basics)", level: 65 },
      { name: "Responsive Design", level: 82 },
    ],
  },
  {
    category: "UI & Styling",
    icon: "🎨",
    skills: [
      { name: "Flexbox & Grid", level: 85 },
      { name: "CSS Animations", level: 75 },
      { name: "Bootstrap", level: 78 },
    ],
  },
  {
    category: "Dev Tools & Workflow",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 72 },
      { name: "VS Code", level: 88 },
      { name: "Browser DevTools", level: 80 },
      { name: "React Components & Hooks", level: 65 },
    ],
  },
  {
    category: "Soft Skills",
    icon: "🌟",
    skills: [
      { name: "Communication", level: 85 },
      { name: "Teamwork", level: 90 },
      { name: "Problem Solving", level: 78 },
      { name: "Time Management", level: 82 },
    ],
  },
];

const techBadges = [
  "HTML5", "CSS3", "JavaScript", "ES6+", "React", "JSX",
  "React Hooks", "Components", "Responsive Design",
  "Flexbox", "CSS Grid", "CSS Animations", "Bootstrap",
  "Git", "GitHub", "VS Code", "Browser DevTools",
  "Cross-browser Testing", "Quick Learner", "Team Player",
];

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills section">
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-num">02.</span>
          <h2 className="section-title">Skills & Tech</h2>
          <span className="section-line" />
        </div>

        <Row gutter={[32, 32]}>
          {skillCategories.map((cat) => (
            <Col xs={24} sm={12} lg={6} key={cat.category}>
              <div className="skill-card">
                <div className="skill-card__header">
                  <span className="skill-card__icon">{cat.icon}</span>
                  <h3 className="skill-card__title">{cat.category}</h3>
                </div>
                <div className="skill-card__list">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-item__meta">
                        <span className="skill-item__name">{skill.name}</span>
                        <span className="skill-item__level">{skill.level}%</span>
                      </div>
                      <Progress
                        percent={visible ? skill.level : 0}
                        showInfo={false}
                        className="skill-item__bar"
                        strokeColor={{ "0%": "#6366f1", "100%": "#a78bfa" }}
                        trailColor="rgba(99,102,241,0.08)"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="skills__badges">
          <h3 className="skills__badges-title">All skills at a glance:</h3>
          <div className="skills__badge-cloud">
            {techBadges.map((b) => (
              <Tooltip title={b} key={b}>
                <span className="skills__badge">{b}</span>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;