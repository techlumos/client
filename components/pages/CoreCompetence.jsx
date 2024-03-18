import React from 'react'

import { Row, Col } from "antd";

export default function CoreCompetence() {
  return (
    <div className="container-core">
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
      <div className="core-text">
            <h2>Core <br /><span>Competence</span></h2>
            <p>Simple and Transformative.</p>
          </div>
          <div className="intro-text-2">
            &nbsp;
            <p>
              Domain expertise, deep contextual understanding enables you to
              stay competitive, and delight you customers.
            </p>
            &nbsp;
            <p>
              Delivering customized solutions mapped to business outcomes and
              operational efficiencies
            </p>
          </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
      <div className="intro-img">
            <img
              src="/images/Core_Competence.webp"
              className="img-fluid"
              alt="intro-image"
            />
          </div>
      </Col>
    </Row>
  </div>
  )
}
