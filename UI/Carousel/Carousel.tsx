import cn from "classnames"

import { Navigation, Autoplay } from "swiper"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"

import { Icon } from "UI"

import "swiper/css"
import "swiper/css/navigation"

import s from "./carousel.module.scss"

interface CarouselProps {
  items: React.ReactNode[]
  autoplayDelay?: number
  slidesMobile?: number
  slidesTablet?: number
  slidesLaptop?: number
  slidesDesktop?: number
  outsideArrows?: boolean
}

const DEFAULT_SLIDESPERVIEW = 4

const SlidePrevButton = () => {
  const swiper = useSwiper()

  return (
    <button
      className={cn(s.swiper_button, s.prev)}
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
      className={cn(s.swiper_button, s.next)}
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
    slidesMobile = DEFAULT_SLIDESPERVIEW,
    slidesTablet = DEFAULT_SLIDESPERVIEW,
    slidesLaptop = DEFAULT_SLIDESPERVIEW,
    slidesDesktop = DEFAULT_SLIDESPERVIEW,
    outsideArrows,
  } = props

  return (
    <>
      {items.length !== 0 ? (
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={slidesMobile}
          slidesPerGroup={1}
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
          spaceBetween={20}
          centeredSlides={true}
          autoplay={
            autoplayDelay
              ? {
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }
              : false
          }
          initialSlide={Math.floor(items.length / 2)}
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
          <p className={s.no_items}>There are no images yet.</p>
        </div>
      )}
    </>
  )
}

export default Carousel
