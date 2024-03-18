import React, { useState } from "react";
import Image from "next/image";
import {MenuFoldOutlined, MenuUnfoldOutlined
} from '@ant-design/icons'

export default function TopNavHero() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (

      <nav
      className="nav-container"
      >
        <div style={{ fontSize: "2.5rem", padding:"10px", marginRight:"100px"}}>
          <Image
            src="/images/EM_logo.webp"
            alt="Logo"
            width={200}
            height={50}
          />
        </div>
        <div className="nav-container-elements"
        >
        <a href="/" >
        SERVICES
          </a>
          <a href="/about" >
          INDUSTRIES
          </a>
          <a href="/contact" >
          TECHNOLOGIES
          </a>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            ...(isOpen
              ? { display: "flex", flexDirection: "column" }
              : { display: "none" }),
          }}
        >
          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            BLOGS
          </a>
          <a href="/about" style={{ color: "white", textDecoration: "none" }}>
            CASE STUDY
          </a>
        </div>
        <button

          onClick={toggleMenu}
        >
          {isOpen ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
        </button>
        <a href="/" style={{ color: "white", textDecoration: "none",  marginLeft:"100px"}}>
        CONTACT
          </a>
      </nav>
    );
}
