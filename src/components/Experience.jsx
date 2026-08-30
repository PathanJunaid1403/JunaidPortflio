import React, { useState } from "react";
import { Tag } from "antd";
import { EnvironmentOutlined, CalendarOutlined } from "@ant-design/icons";

const experiences = [
  // {
  //   id: 1,
  //   role: "Frontend Developer Intern",
  //   company: "SAP Infosystems Pvt. Ltd.",
  //   type: "Internship",
  //   duration: "Aug 2025 – Feb 2026",
  //   location: "Pune, Maharashtra",
  //   desc: "Completed a 6-month frontend development internship, working on real-world web UI projects in a professional team environment.",
  //   points: [
  //     "Built and maintained responsive web interfaces using HTML5, CSS3, and JavaScript.",
  //     "Worked with React basics — functional components, props, and useState/useEffect hooks.",
  //     "Translated design mockups into pixel-accurate, cross-browser compatible layouts.",
  //     "Collaborated with the team on UI reviews, bug fixes, and iterative feature improvements.",
  //     "Gained hands-on experience with Git version control and VS Code workflow.",
  //   ],
  //   tags: ["HTML5", "CSS3", "JavaScript", "React", "Git", "Responsive Design"],
  //   color: "#00c853",
  // },
  {
    id: 2,
    role: "Diploma in FrontEnd Development",
    company: "Training Institute",
    type: "Certification",
    duration: "Nov 2024 – Apr 2025",
    location: "Pune, Maharashtra",
    desc: "Completed 6-month diploma program covering FrontEnd Development fundamentals.",
    points: [
      "Learned HTML5 semantic markup, CSS3 layouts, flexbox, and grid systems.",
      "Built interactive web pages using JavaScript (DOM manipulation, events, forms).",
      "Created Single page applications using React Js, Vite.",
      "Developed responsive websites compatible with mobile, tablet, and desktop screens.",
      "Created 3+ mini projects including a portfolio site, quiz app, and to-do list.",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "React Js", "Responsive Design"],
    color: "#e2ff5d",
  },
  {
    id: 3,
    role: "Lab Attendant",
    company: "BAIF Development Research Foundation",
    type: "Work Experience",
    duration: "Jan 2022 – Jul 2022",
    location: "Pune, Maharashtra",
    desc: "Supported day-to-day laboratory operations in an organized, disciplined environment.",
    points: [
      "Assisted in routine laboratory tasks including handling and organizing samples.",
      "Maintained cleanliness and ensured proper storage and labeling of lab materials.",
      "Maintained basic inventory records with accuracy and attention to detail.",
      "Demonstrated strong time management, teamwork, and adherence to workplace procedures.",
    ],
    tags: ["Documentation", "File Management", "Teamwork", "Organization"],
    color: "#00d4ff",
  },
];

const education = [
  {
    degree: "B.Sc Environmental Science",
    institution: "Shivneri College, Tq: Shirur Anantpal, Dist. Latur, Maharashtra",
    duration: "Passed: 2024",
    grade: "CGPA: 7.73",
    color: "#a78bfa",
  },
  {
    degree: "Intermediate – General (HSC)",
    institution: "Vittalrao Dhumal College, Tq: Nilanga, Maharashtra",
    duration: "Passed: 2018",
    grade: "47%",
    color: "#fbbf24",
  },
  {
    degree: "10th Class (SSC)",
    institution: "NVBS School, Dist. Jind, Haryana",
    duration: "Passed: 2014",
    grade: "75%",
    color: "#34d399",
  },
];

const certifications = [
  { name: "Diploma in FrontEnd Development", year: "Nov 2024 – Apr 2025", color: "#e2ff5d" },
  { name: "MSCIT (Maharashtra State Certificate in Information Technology)", year: "Jul 2025", color: "#00d4ff" },
];

const Experience = () => {
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-header">
          <span className="section-num">04.</span>
          <h2 className="section-title">Experience & Education</h2>
          <span className="section-line" />
        </div>

        {/* Tabs */}
        <div className="experience__layout">
          <div className="experience__tabs">
            {experiences.map((exp, i) => (
              <button
                key={exp.id}
                className={`experience__tab ${activeExp === i ? "experience__tab--active" : ""}`}
                onClick={() => setActiveExp(i)}
                style={{ "--accent": exp.color }}
              >
                <span className="experience__tab-company">{exp.company}</span>
                <span className="experience__tab-role">{exp.role}</span>
              </button>
            ))}
          </div>

          <div className="experience__panel">
            {(() => {
              const e = experiences[activeExp];
              return (
                <div key={e.id} className="experience__detail">
                  <div className="experience__detail-header">
                    <div>
                      <h3 className="experience__role">
                        {e.role}{" "}
                        <span className="experience__company" style={{ color: e.color }}>
                          @ {e.company}
                        </span>
                      </h3>
                      <div className="experience__meta">
                        <span><CalendarOutlined /> {e.duration}</span>
                        <span><EnvironmentOutlined /> {e.location}</span>
                        <Tag className="experience__type-tag">{e.type}</Tag>
                      </div>
                    </div>
                  </div>
                  <p className="experience__summary">{e.desc}</p>
                  <ul className="experience__points">
                    {e.points.map((pt) => (
                      <li key={pt} className="experience__point">
                        <span className="experience__bullet" style={{ background: e.color }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="experience__tags">
                    {e.tags.map((t) => (
                      <Tag key={t} className="project-card__tag">{t}</Tag>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Certifications */}
        <div className="education" style={{ marginBottom: "48px" }}>
          <h3 className="education__title">Certifications</h3>
          <div className="education__cards">
            {certifications.map((cert) => (
              <div key={cert.name} className="education__card" style={{ "--accent": cert.color }}>
                <div className="education__card-accent" />
                <h4 className="education__degree">🏅 {cert.name}</h4>
                <div className="education__meta">
                  <span><CalendarOutlined /> {cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="education">
          <h3 className="education__title">Education</h3>
          <div className="education__cards">
            {education.map((edu) => (
              <div key={edu.degree} className="education__card" style={{ "--accent": edu.color }}>
                <div className="education__card-accent" />
                <h4 className="education__degree">{edu.degree}</h4>
                <p className="education__institution">{edu.institution}</p>
                <div className="education__meta">
                  <span><CalendarOutlined /> {edu.duration}</span>
                  <span className="education__grade">{edu.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;