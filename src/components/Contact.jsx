import React, { useState } from "react";
import { Row, Col, Form, Input, Button, notification } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  GithubOutlined,
  SendOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;

const contactInfo = [
  { icon: <MailOutlined />, label: "Email", value: "pathanjunaidkhan12@gmail.com", href: "mailto:pathanjunaidkhan12@gmail.com" },
  { icon: <PhoneOutlined />, label: "Phone", value: "+91 8767334052", href: "tel:+918767334052" },
  { icon: <EnvironmentOutlined />, label: "Location", value: "Kalewadi, Pune, Maharashtra – 411017", href: null },
  { icon: <LinkedinOutlined />, label: "LinkedIn", value: "linkedin.com/in/junedkhan", href: "https://linkedin.com" },
  { icon: <GithubOutlined />, label: "GitHub", value: "github.com/junedkhan", href: "https://github.com" },
];

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    form.resetFields();
    notification.success({
      message: "Message Sent! 🎉",
      description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      placement: "topRight",
      className: "custom-notification",
    });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <span className="section-num">05.</span>
          <h2 className="section-title">Get In Touch</h2>
          <span className="section-line" />
        </div>

        <p className="contact__intro">
          I'm actively looking for full-time job opportunities in FrontEnd development or
          back-office/administrative roles. If you have an opening or would like to
          connect, feel free to reach out — I'd love to hear from you!
        </p>

        <Row gutter={[48, 40]}>
          <Col xs={24} md={10}>
            <div className="contact__info">
              <h3 className="contact__info-title">Contact Details</h3>
              <div className="contact__links">
                {contactInfo.map((c) => (
                  <div key={c.label} className="contact__link-item">
                    <div className="contact__link-icon">{c.icon}</div>
                    <div className="contact__link-content">
                      <span className="contact__link-label">{c.label}</span>
                      {c.href ? (
                        <a href={c.href} target="_blank" rel="noreferrer" className="contact__link-value">
                          {c.value}
                        </a>
                      ) : (
                        <span className="contact__link-value">{c.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact__availability">
                <div className="contact__avail-dot" />
                <div>
                  <strong>Available for opportunities</strong>
                  <p>Full-time / Part-time / Internship</p>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={24} md={14}>
            <div className="contact__form-wrap">
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                className="contact__form"
              >
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="name"
                      label="Your Name"
                      rules={[{ required: true, message: "Please enter your name" }]}
                    >
                      <Input placeholder="John Doe" className="contact__input" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="email"
                      label="Email Address"
                      rules={[
                        { required: true, message: "Please enter your email" },
                        { type: "email", message: "Enter a valid email" },
                      ]}
                    >
                      <Input placeholder="john@example.com" className="contact__input" />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name="subject"
                  label="Subject"
                  rules={[{ required: true, message: "Please enter a subject" }]}
                >
                  <Input placeholder="Job Opportunity / Project / Collaboration" className="contact__input" />
                </Form.Item>

                <Form.Item
                  name="message"
                  label="Message"
                  rules={[{ required: true, message: "Please write your message" }]}
                >
                  <TextArea
                    rows={5}
                    placeholder="Tell me about the opportunity or how I can help..."
                    className="contact__input"
                  />
                </Form.Item>

                <Button
                  htmlType="submit"
                  loading={loading}
                  className="contact__submit-btn"
                  block
                >
                  {!loading && <SendOutlined />}
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;