import React from "react";
import CarouselLogo from "./CarouselLogo";

export default function Alliances() {
  return (
    <div style={{margin:"100px 0px 100px 0px"}}>
      <h1 style={{ textAlign: "center",fontSize: "6rem", margin: "20px" ,paddingBottom:"20px"}}>
        Technology{" "}
        <span style={{ fontFamily: "Roboto-Light", color: "#2764a3" }}>
          Alliances
        </span>
      </h1>
      <div style={{marginBottom:"50px"}}>      <CarouselLogo img="/images/Technology_Alliances_Logos.webp" /></div>
    </div>
  );
}
