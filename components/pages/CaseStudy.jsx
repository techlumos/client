import React from "react";
import { Row, Col, } from "antd";

import { ArrowRightOutlined } from "@ant-design/icons";
export default function CaseStudy() {
  return (
    <>
      <div className="case-study">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} lg={6} xl={12}>
            <img
              src="/images/IT_for_Healthcare.webp"
              alt="healthcare-image"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={12}>
            <div className="study-container">
              <h2>
                Case
                <span>Studies</span>
              </h2>
              <p>Solution showcase across industries</p>
              <div className="test">
                <div className="bar"></div>
                <div>
                  <h4>IT for Healthcare</h4>
                  <p>Electronic Health Records, Telemedicine</p>
                  <p>Solutions and Compliance</p>
                </div>
              </div>

              <div className="case-study-links">
                <div>
                  <h5>Financial Services</h5>
                  <p>Portfolio Management, Reconciliation and Reporting</p>
                  <ArrowRightOutlined />
                </div>
                <div>
                  <h5>Compliance &amp; Regulatory</h5>
                  <p>Smarsh, Global Relay and DTCC System Integrations</p>
                  <ArrowRightOutlined className="arrow" />
                </div>
                <div>
                  <h5>Cybersecurity &amp; Data Protection</h5>
                  <p>
                    DevSecOps implementation to achieve SOC2 and ISO27001/2
                    certification
                  </p>
                  <ArrowRightOutlined className="arrow" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
