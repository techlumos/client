import React from 'react'

export default function CarouselLogo({img}) {
    return (
        <>
          <div className="carousel">
            <div className="logos" style={{ background: `url(${img})` }}></div>
            <div className="mask"></div>
          </div>
        </>
      );
}

