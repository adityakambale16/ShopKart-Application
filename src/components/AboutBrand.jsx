import React from 'react'

const AboutBrand = ({image, name}) => {
  return (
    <div className='about-brand-card'>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  )
}

export default AboutBrand
