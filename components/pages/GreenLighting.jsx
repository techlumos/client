import React from 'react'
import { Button } from "antd";
import Link from "next/link";
import { SendOutlined } from "@ant-design/icons";

export default function GreenLighting({ img, details }) {
  return (
    <div className="img-container " style={{ backgroundImage: `url(${img})` }}>
    <div className="front-container tailored-container green-lighting-container">
      <h1>
      Greenlighting Your
        <br /> <span>Success Journey</span>
      </h1>
      <p className="typing">{details}</p>
      <div className="test">
        <div className="bar"></div>
        <div className="content">
          <p>Digital Transformation</p>
          <p>Integrate digital technology to business,

creating value for customers</p>
        </div>
      </div>
      <Link href="/">
        <Button type="primary" size="large" icon={<SendOutlined />}>
          Learn More
        </Button>
      </Link>
    </div>
  </div>
  )
}
