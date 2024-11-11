import React from 'react'
import './Hero.scss'

const Hero = ({ image, title, text }) => {
  return (
    <section className="hero">
        <div className="container">
            <div className="hero__wrap">
                <img src={image} alt="" />

                <div>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <button>Купить</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero