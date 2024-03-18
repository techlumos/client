import React from 'react'
import { Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function HeroSection({ title, subtitle , img }) {
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="overlay">
        <h1 className="title" id="heading">
          {title}
        </h1>
        <h2 className="subtitle">{subtitle}</h2>
        <Link href="/">
          <Button type="primary" size="large" icon={<SendOutlined />}>
            Explore
          </Button>
        </Link>
      </div>
    </div>
  )
}
