import React, { useRef } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function CurrencySlider() {
    const sliderRef = useRef(null)
    const items = [
        'apsdwedft', 'arsdsdsdqb', 'sadsadabsc', 'cadafdfadfd', 'efadfadfdnu', 'etjhjkhgjgjfhh', 'ojfhjfhjfhjkc', 'opvxcvxcvt', 'shrwerwera', 'sosdasdal', 'gbvbxcvzks'
    ]

    const handleDragStart = (e) => {
        e.preventDefault();
    }

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true,
        touchMove: true,
        centerPadding: "10px",
      }
  return (
    <div
      className="relative"
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
    >
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div key={index} className="my-auto focus:outline-none">
            <p className='text-primary text-lg tracking-widest'>{` ${item} / `}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}
