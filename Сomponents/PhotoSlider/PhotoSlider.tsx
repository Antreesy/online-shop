import s from "./PhotoSlider.module.scss"
import React, { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/thumbs"
import "swiper/css/pagination"

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper"

interface PhotoSliderProps {
  photos: string[]
}

const PhotoSlider: React.FC<PhotoSliderProps> = (props) => {
  const { photos } = props
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const Large = photos.map((el, i, photos) => (
    <SwiperSlide className={s.swiper_slide_main}>
      <img src={el} />
    </SwiperSlide>
  ))
  const Small = photos.map((el, i, photos) => (
    <SwiperSlide className={s.swiper_slide_other}>
      <img src={el} />
    </SwiperSlide>
  ))
  return (
    <>
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Pagination, Navigation, Thumbs]}
        className={s.swiper_slide_large}
      >
        {Large}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        freeMode={true}
        watchSlidesProgress={true}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        modules={[FreeMode, Pagination, Navigation, Thumbs]}
        className={s.swiper_slide_small}
      >
        {Small}
      </Swiper>
    </>
  )
}

export default PhotoSlider
