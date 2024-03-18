import React from 'react'
import { Button } from "antd";
import Link from "next/link";
import { SendOutlined } from "@ant-design/icons";
export default function TailoredSucced({ img, details }) {
  return (
    <div className="img-container " style={{ backgroundImage: `url(${img})` }}>
    <div className="front-container tailored-container ">
      <h1>
        Tailored to
        <br /> <span>Succeed</span>
      </h1>
      <p className="typing">{details}</p>
      <div className="test">
        <div className="bar"></div>
        <div className="content">
          <p>Financial Services</p>
          <a href="" >
            Impact,<span> </span>
          </a>
          <a href="" >
            Solutions,<span> </span>
          </a>
          <a href="">
            Tech Leadership
          </a>
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
