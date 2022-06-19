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
  slidesMobile?: number
  slidesTablet?: number
  slidesLaptop?: number
  slidesDesktop?: number
  outsideArrows?: boolean
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

const Carousel: React.FC<CarouselProps> = (props) => {
  const {
    items,
    autoplayDelay,
    slidesMobile = 4,
    slidesTablet = 4,
    slidesLaptop = 4,
    slidesDesktop = 4,
    outsideArrows,
  } = props

  return (
    <>
      {items.length !== 0 ? (
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={slidesMobile}
          breakpoints={{
            600: {
              slidesPerView: slidesTablet,
            },
            1024: {
              slidesPerView: slidesLaptop,
            },
            1440: {
              slidesPerView: slidesDesktop,
            },
          }}
          slidesPerGroup={1}
          spaceBetween={20}
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
          className={cn(s.flex, { [s.flex_outside]: outsideArrows })}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className={s.slide}>
              {item}
            </SwiperSlide>
          ))}
          {outsideArrows ? (
            <div className={s.button_group}>
              <SlidePrevButton />
              <SlideNextButton />
            </div>
          ) : (
            <>
              <SlidePrevButton />
              <SlideNextButton />
            </>
          )}
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
