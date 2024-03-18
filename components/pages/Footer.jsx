import React from "react";
import { Row, Col } from "antd";
import {
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  XOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <div className="footer">
          <Row gutter={[16, 16]}>
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={6}
              xl={5}
              style={{ borderRight: "1px solid #fff" }}
            >
              <div>
                <img
                  src="images/EM_Logo.webp"
                  className="img-fluid"
                  alt="EM_Logo"
                />
              </div>
            </Col>
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={6}
              xl={8}
              style={{ borderRight: "1px solid #fff" }}
            >
              <Row>
                <p style={{color:"#007bff"}}>LINKS</p>
              </Row>
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8} lg={6} xl={12}>
                  <Row>
                    <a href="/industries">Industries</a>
                  </Row>
                  <Row>
                    <a href="/services">Services</a>
                  </Row>
                  <Row>
                    <a href="/technologies">Technologies</a>
                  </Row>
                  <Row>
                    <a href="/resources">Resources</a>
                  </Row>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6} xl={12}>
                  <Row>
                    <a href="/news">News</a>
                  </Row>
                  <Row>
                    <a href="/success-stories">Success Stories</a>
                  </Row>
                  <Row>
                    <a href="/blogs">Blogs</a>
                  </Row>
                  <Row>
                    <a href="/careers">Careers</a>
                  </Row>
                </Col>
              </Row>
            </Col>

            <Col
              xs={24}
              sm={12}
              md={8}
              lg={6}
              xl={5}
              style={{ borderRight: "1px solid #fff" }}
            >
              <Row>
                <p style={{color:"#007bff"}}>POLICIES</p>
              </Row>
              <Row>
                <a href="/">Cookie Policy</a>
              </Row>
              <Row>
                <a href="/">Privacy Policy</a>
              </Row>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={4}>
              <div className="footer-icons">
                <a href title="LinkedIn" style={{ marginRight: "10px" }}>
                  <LinkedinOutlined />
                </a>
                <a href title="Youtube" style={{ marginRight: "10px" }}>
                  <YoutubeOutlined />
                </a>
                <a href title="Youtube" style={{ marginRight: "10px" }}>
                  <XOutlined />
                </a>{" "}
              </div>
            </Col>
          </Row>
        </div>
        <div className="footer-sub">
          <Row justify="center">
            <Col xs={24} sm={12} md={8} lg={6} xl={12}>
              <p style={{ textAlign: "center", color: "white" }}>
                © 2024 Engineers Mind. All Rights Reserved.
              </p>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={12}>
              <p style={{ textAlign: "center" }}>
                Powered by: <a href="https://lumos.in/">LUMOS.in</a>
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
