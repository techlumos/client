import React from 'react'

export default function BackgroundImage({img}) {
  return (
    <div className="img-container" style={{ backgroundImage: `url(${img})` }}>
    </div>
  )
}
