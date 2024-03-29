import { useState } from "react"
import cn from "classnames"

import Image, { ImageProps } from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Thumbs, Pagination } from "swiper"

import s from "./photoSlider.module.scss"

interface PhotoSliderProps {
  photos: ImageProps["src"][]
  className?: string
}

const PhotoSlider: React.FC<PhotoSliderProps> = (props) => {
  const { photos, className } = props
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  const mainSlides = photos.map((elem, index) => (
    <SwiperSlide key={index} className={cn(s.slide, s.slide_main)}>
      <div className={s.slide_wrapper}>
        <Image src={elem} layout="fill" />
      </div>
    </SwiperSlide>
  ))

  const gallerySlides = photos.map((elem, index) => (
    <SwiperSlide key={index} className={cn(s.slide, s.slide_gallery)}>
      <div className={s.slide_wrapper}>
        <Image src={elem} layout="fill" />
      </div>
    </SwiperSlide>
  ))

  return (
    <div className={cn(s.photoslider, className)}>
      <Swiper
        freeMode={true}
        pagination={{
          el: `.photoslider_pagination_container`,
          clickable: true,
          type: "bullets",
          bulletClass: `${s.bullet}`,
          bulletActiveClass: `${s.bullet_active}`,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Pagination, Thumbs]}
        className={s.swiper_main}
      >
        {mainSlides}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        freeMode={true}
        spaceBetween={15}
        slidesPerView={3}
        watchSlidesProgress={true}
        modules={[FreeMode, Pagination, Thumbs]}
        className={s.swiper_gallery}
      >
        {gallerySlides}
      </Swiper>

      <div
        className={cn(
          s.pagination_container,
          "photoslider_pagination_container",
        )}
      />
    </div>
  )
}

export default PhotoSlider
