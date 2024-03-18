import React from 'react'
import { Button } from "antd";
import Link from "next/link";
import { SendOutlined } from "@ant-design/icons";

export default function FrontRunnerSection({ img, details }) {
  return (
    <div className="img-container front-container-bg" style={{ backgroundImage: `url(${img})` }}>
    <div className="front-container">
      <h1>
        Front
        <br /> <span>Runner</span>
      </h1>
      <p className="typing">{details}</p>
      <Link href="/">
        <Button type="primary" size="large" icon={<SendOutlined />}>
          Learn More
        </Button>
      </Link>
    </div>
  </div>
  )
}
