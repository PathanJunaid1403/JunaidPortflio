import React, { useState } from "react";
import { Row, Col, Form, Input, Button, notification } from "antd";
import {
  MailOutlined, PhoneOutlined, LinkedinOutlined,
  GithubOutlined, SendOutlined, EnvironmentOutlined,
} from "@ant-design/icons";
import emailjs from "@emailjs/browser";

const { TextArea } = Input;

// 🔑 Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID  = "service_jtgxf2w";
const EMAILJS_TEMPLATE_ID = "template_avruhav";
const EMAILJS_PUBLIC_KEY  = "atAwhWWUsoAX1TZI2";

const contactInfo = [
  { icon: <MailOutlined />, label: "Email", value: "pathanjunaidkhan12@gmail.com", href: "mailto:pathanjunaidkhan12@gmail.com" },
  { icon: <PhoneOutlined />, label: "Phone", value: "+91 8767334052", href: "tel:+918767334052" },
  { icon: <EnvironmentOutlined />, label: "Location", value: "Hinjewadi Phase 1, Pune, Maharashtra – 411057", href: null },
  { icon: <LinkedinOutlined />, label: "LinkedIn", value: "linkedin.com/in/junedkhan", href: "https://www.linkedin.com/in/junaid-khan-pathan/" },
  { icon: <GithubOutlined />, label: "GitHub", value: "https://github.com/PathanJunaid", href: "https://github.com/PathanJunaid1403" },
];

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  values.name,
          from_email: values.email,
          subject:    values.subject,
          message:    values.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      form.resetFields();
      notification.success({
        message: "Message Sent! 🎉",
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
        placement: "topRight",
        className: "custom-notification",
      });
    } catch (error) {
      notification.error({
        message: "Failed to Send",
        description: "Something went wrong. Please try emailing me directly at pathanjunaidkhan12@gmail.com",
        placement: "topRight",
        className: "custom-notification",
      });
    } finally {
      setLoading(false);
    }
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
          I'm actively looking for full-time frontend development opportunities.
          If you have an opening or would like to connect, feel free to reach out —
          I'd love to hear from you!
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