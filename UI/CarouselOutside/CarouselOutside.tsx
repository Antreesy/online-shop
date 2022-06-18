import cn from "classnames"

import { Navigation, Autoplay } from "swiper"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"

import { Icon } from "UI"

import "swiper/css"
import "swiper/css/navigation"

import s from "./carouselOutside.module.scss"

interface CarouselProps {
  items: React.ReactElement[]
  autoplayDelay?: number
}

const SlidePrevButton = () => {
  const swiper = useSwiper()

  return (
    <button
      className={s.swiperBtn}
      onClick={() => swiper.slidePrev()}
    >
      <Icon type="arrow_left" />
    </button>
  )
}

const SlideNextButton = () => {
  const swiper = useSwiper()

  return (
    <button
      className={s.swiperBtn}
      onClick={() => swiper.slideNext()}
    >
      <Icon type="arrow_right" />
    </button>
  )
}

const CarouselOutside: React.FC<CarouselProps> = ({ items, autoplayDelay }) => {
  return (
    <>
      {items.length !== 0 ? (
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={6}
          spaceBetween={25}
          slidesPerGroup={1}
          centeredSlides={true}
          initialSlide={1}
          autoplay={
            autoplayDelay
              ? {
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }
              : false
          }
          loop={true}
          className={s.flex}
        >
          {items.map((item) => (
            <SwiperSlide key={Math.random()}>{item}</SwiperSlide>
          ))}
          <div className={s.button_group}>
          <SlidePrevButton />
          <SlideNextButton />
          </div>
        </Swiper>
      ) : (
        <div className={s.flex}>
          <p className={s.isEmptyText}>There are no images yet.</p>
        </div>
      )}
    </>
  )
}

export default CarouselOutside
