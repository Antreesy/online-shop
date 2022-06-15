import cn from "classnames"

import { Navigation, Autoplay } from "swiper"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"

import { Icon } from "UI"

import "swiper/css"
import "swiper/css/navigation"

import s from "./carousel.module.scss"

interface CarouselProps {
  items: React.ReactElement[]
  autoplayDelay?: number
}

const SlidePrevButton = () => {
  const swiper = useSwiper()

  return (
    <button
      className={cn(s.swiperBtn, s.prev)}
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
      className={cn(s.swiperBtn, s.next)}
      onClick={() => swiper.slideNext()}
    >
      <Icon type="arrow_right" />
    </button>
  )
}

const Carousel: React.FC<CarouselProps> = ({ items, autoplayDelay }) => {
  return (
    <>
      {items.length !== 0 ? (
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={4}
          spaceBetween={20}
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
          <SlidePrevButton />
          {items.map((item) => (
            <SwiperSlide key={Math.random()}>{item}</SwiperSlide>
          ))}
          <SlideNextButton />
        </Swiper>
      ) : (
        <div className={s.flex}>
          <p className={s.isEmptyText}>There are no images yet.</p>
        </div>
      )}
    </>
  )
}

export default Carousel
