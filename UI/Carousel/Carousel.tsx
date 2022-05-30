// Import React
import React, { useRef, useState, useEffect } from "react"
import cn from "classnames"

// Import UI kit
import { Icon } from "UI"

// Import Swiper React components
import { Swiper as SwiperObj, Navigation, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

// Import styles
import s from "./carousel.module.scss"

interface CarouselProps {
  items: any[]
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [swiper, setSwiper] = useState<SwiperObj>()
  const prevRef = useRef() as React.MutableRefObject<HTMLButtonElement>
  const nextRef = useRef() as React.MutableRefObject<HTMLButtonElement>

  useEffect(() => {
    if (swiper) {
      swiper.navigation.prevEl = prevRef.current
      swiper.navigation.nextEl = nextRef.current
      swiper.navigation.init()
      swiper.navigation.update()
    }
  }, [swiper])

  const leftButtonStyles = cn(s.swiperBtn, s.prev)
  const rightButtonStyles = cn(s.swiperBtn, s.next)

  return (
    <>
      <Swiper
        // installation Swiper modules
        onInit={(s) => console.log(s)}
        modules={[Navigation, Autoplay]}
        slidesPerView={4}
        spaceBetween={20}
        slidesPerGroup={1}
        centeredSlides={true}
        initialSlide={1}
        autoplay={{
          //autoplay for demo purposes
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        onSwiper={setSwiper}
        className={s.swiper}
      >
        <button className={leftButtonStyles} ref={prevRef}>
          <Icon type="arrow_left" />
        </button>
        <button className={rightButtonStyles} ref={nextRef}>
          <Icon type="arrow_right" />
        </button>
        {items.map((item) => (
          <SwiperSlide key={item.toString()}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Carousel
