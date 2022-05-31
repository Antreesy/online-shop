import React, { useRef, useState, useEffect } from "react"

import { Swiper as SwiperObj, Navigation, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import cn from "classnames"

import { Icon } from "UI"

import "swiper/css"
import "swiper/css/navigation"

import s from "./carousel.module.scss"
interface CarouselProps {
  items: React.ReactElement[]
  autoplayDelay: number
}

const Carousel: React.FC<CarouselProps> = ({ items, autoplayDelay }) => {
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
      {items.length !== 0 && (
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={4}
          spaceBetween={20}
          slidesPerGroup={1}
          centeredSlides={true}
          initialSlide={1}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current,
          }}
          onSwiper={setSwiper}
          className={s.flex}
        >
          <button className={leftButtonStyles} ref={prevRef}>
            <Icon type="arrow_left" />
          </button>
          <button className={rightButtonStyles} ref={nextRef}>
            <Icon type="arrow_right" />
          </button>
          {items.map((item) => (
            <SwiperSlide key={Math.random()}>{item}</SwiperSlide>
          ))}
        </Swiper>
      )}
      {items.length === 0 && (
        <div className={s.flex}>
          <p className={s.isEmptyText}>There are no images yet.</p>
        </div>
      )}
    </>
  )
}

export default Carousel
