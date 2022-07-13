import React, { useState } from "react"
import { NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import cn from "classnames"

import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import Head from "next/head"
import Image from "next/image"
import { Button, Card, Carousel } from "UI"
import { Breadcrumbs, Footer, Header } from "Сomponents"

import { footerNav } from "shared/constants/footernav"
import img1 from "public/assets/img/picture_1.png"
import img2 from "public/assets/img/İlayda-Akçatepe.png"
import armani_logo from "public/assets/img/armani_logo.png"
import play from "public/assets/img/play.svg"
import testim from "public/assets/img/testimonials.png"
import { Autoplay, Pagination } from "swiper"

import s from "styles/pages/landing-page.module.scss"

export async function getStaticProps(props: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(props.locale, [
        "app",
        "common",
        "header",
        "footer",
        "landing",
      ])),
    },
  }
}

const InfluencersCard = () => (
  <Card
    className={s.influencers_card}
    imageSrc={img1}
    title="Gizem Sancak"
    buttonTitle="Go To Store"
    isButtonHidden
  />
)

const TestimonialsCard = () => (
  <div className={s.testimonials_card}>
    <div className={s.image_wrapper}>
      <Image src={testim} layout="fill" />
      <p>Burberry</p>
    </div>
    <p className={s.card_caption}>
      Influencers
      <span>Blanca Miro Scrimieri</span>
    </p>
    <p className={s.card_descr}>
      Lorem ipsum dolor sit amet, consectetur piscing elit. Integer lacinia,
      lacus mattis semper lacinia, metus urna dapibus quam,
    </p>
  </div>
)

const BrandCard = () => (
  <div className={s.brand_card}>
    <Image src={armani_logo} width={117} height={32} />
  </div>
)

const SlideNum = () => {
  const swiper = useSwiper()
  const [index, setIndex] = useState<number>(swiper.activeIndex)

  setInterval(() => {
    setIndex(swiper.activeIndex)
  }, 500)

  return <div className={s.pag_num}>{`0${index + 1}`}</div>
}

const LandingPage: NextPage = () => {
  const { t } = useTranslation("landing")

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Landing Page</title>
      </Head>

      <Header />

      <main className={s.main}>
        <div className={s.slider}>
          <div className={cn(s.pag_thumb, "swiper-pagination")} />

          <Swiper
            modules={[Pagination, Autoplay]}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            direction={"horizontal"}
            breakpoints={{
              768: {
                direction: "vertical",
              },
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: function (index, className) {
                return (
                  '<div class="' +
                  className +
                  '" style=color:#fff;width:3px;height:32px;border-radius:0;margin-bottom:5px;background:#fff;transition:height 1s' +
                  ">" +
                  "</div>"
                )
              },
            }}
          >
            <SlideNum />

            <SwiperSlide>
              <div className={s.hero}>
                <div className={s.content}>
                  <Image className={s.content_image} src={img2} />

                  <div className={s.content_wrapper}>
                    <div>
                      <h3 className={s.info_title}>Autumn Collection</h3>
                      <p className={s.info_number}>01</p>
                    </div>

                    <Button className={s.content_button}>
                      {t("go_to_store")}
                    </Button>

                    <div>
                      <h3 className={s.descr_caption}>
                        Lorem ipsum dolor sit amet,
                      </h3>
                      <p className={s.descr_text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer lacinia, lacus mattis semper lacinia, metus urna
                        dapibus quam, eu maximus sapien ipsum at justo. In
                        varius accumsan magna, vel eleifend nisi maximus et.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.hero}>
                <div className={s.content}>
                  <Image className={s.content_image} src={img2} />

                  <div className={s.content_wrapper}>
                    <div>
                      <h3 className={s.info_title}>Autumn Collection</h3>
                      <p className={s.info_number}>02</p>
                    </div>

                    <Button className={s.content_button}>
                      {t("go_to_store")}
                    </Button>

                    <div>
                      <h3 className={s.descr_caption}>
                        Lorem ipsum dolor sit amet,
                      </h3>
                      <p className={s.descr_text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer lacinia, lacus mattis semper lacinia, metus urna
                        dapibus quam, eu maximus sapien ipsum at justo. In
                        varius accumsan magna, vel eleifend nisi maximus et.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.hero}>
                <div className={s.content}>
                  <Image className={s.content_image} src={img2} />

                  <div className={s.content_wrapper}>
                    <div>
                      <h3 className={s.info_title}>Autumn Collection</h3>
                      <p className={s.info_number}>03</p>
                    </div>

                    <Button className={s.content_button}>
                      {t("go_to_store")}
                    </Button>

                    <div>
                      <h3 className={s.descr_caption}>
                        Lorem ipsum dolor sit amet,
                      </h3>
                      <p className={s.descr_text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer lacinia, lacus mattis semper lacinia, metus urna
                        dapibus quam, eu maximus sapien ipsum at justo. In
                        varius accumsan magna, vel eleifend nisi maximus et.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.hero}>
                <div className={s.content}>
                  <Image className={s.content_image} src={img2} />

                  <div className={s.content_wrapper}>
                    <div>
                      <h3 className={s.info_title}>Autumn Collection</h3>
                      <p className={s.info_number}>04</p>
                    </div>

                    <Button className={s.content_button}>
                      {t("go_to_store")}
                    </Button>

                    <div>
                      <h3 className={s.descr_caption}>
                        Lorem ipsum dolor sit amet,
                      </h3>
                      <p className={s.descr_text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer lacinia, lacus mattis semper lacinia, metus urna
                        dapibus quam, eu maximus sapien ipsum at justo. In
                        varius accumsan magna, vel eleifend nisi maximus et.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <Breadcrumbs />

        <div className={s.container}>
          <div className={s.text_content}>
            <h2 className={cn(s.heading, s.heading_bubble_right)}>
              <span>{t("influencers_shop")}</span>
            </h2>
            <p className={s.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              lacinia, lacus mattis semper lacinia, metus urna dapibus quam, eu
              maximus sapien ipsum at justo. In varius accumsan magna, vel
              eleifend nisi maximus et. Aliquam faucibus facilisis viverra.
              Fusce urna ipsum, tempor in erat elementum, malesuada porta
              libero. Aliquam mollis nunc quis porttitor feugiat.
            </p>
            <p className={s.description}>
              Pellentesque faucibus leo magna, a convallis metus congue sit
              amet. Vestibulum ornare efficitur suscipit. Sed vitae vehicula
              dolor. Praesent sit amet dui justo. Maecenas id lorem vitae orci
              interdum commodo nec non dolor.
            </p>
          </div>

          <div className={s.influencers_carousel}>
            <Carousel
              items={new Array(6).fill(InfluencersCard)}
              slidesMobile={2}
              slidesTablet={3}
              slidesLaptop={3}
              slidesDesktop={4}
            />

            <Button className={s.button_more}>{t("show_all")}</Button>
          </div>

          <div className={s.brands_wrapper}>
            <div className={s.brand_content}>
              <h2 className={s.heading}>{t("brands")}</h2>
              <p className={s.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                lacinia, lacus mattis semper lacinia, metus urna dapibus quam,
                eu maximus sapien ipsum at justo. In varius accumsan magna, vel
                eleifend nisi maximus et. Aliquam faucibus facilisis viverra.
                Fusce urna ipsum, tempor in erat
              </p>
              <div className={s.brands_bg} />
              <Carousel
                items={new Array(8).fill(BrandCard)}
                outsideArrows
                slidesMobile={3}
                slidesTablet={4}
                slidesLaptop={5}
                slidesDesktop={6}
              />
            </div>
          </div>

          <div className={s.text_content}>
            <h2 className={cn(s.heading, s.heading_bubble_left)}>
              <span>Lorem Ipsum Dolor Sit Amet</span>
            </h2>
            <p className={s.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              lacinia, lacus mattis semper lacinia, metus urna dapibus quam, eu
              maximus sapien ipsum at justo. In varius accumsan magna, vel
              eleifend nisi maximus et. Aliquam faucibus facilisis viverra.
              Fusce urna ipsum, tempor in erat elementum, malesuada porta
              libero. Aliquam mollis nunc quis porttitor feugiat.
            </p>
          </div>

          <div className={s.video_wrapper}>
            <div className={s.play}>
              <Image src={play} width={48} height={48} />
            </div>
            <h2 className={s.heading}>Lorem Ipsum Dolor Sit Amet</h2>
            <p className={s.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              lacinia, lacus mattis semper lacinia, metus urna dapibus quam, eu
              maximus sapien ipsum at justo. In varius accumsan magna, vel
              eleifend nisi maximus et. Aliquam faucibus facilisis viverra.
              Fusce urna ipsum, tempor in erat
            </p>
          </div>

          <div className={s.testimonials_wrapper}>
            <h2 className={cn(s.heading, s.heading_bubble_testimonials)}>
              <span>{t("testimonials")}</span>
            </h2>
            <p className={s.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              lacinia, lacus mattis semper lacinia, metus urna dapibus quam, eu
              maximus sapien ipsum at justo. In varius accumsan magna, vel
              eleifend nisi maximus et. Aliquam faucibus facilisis viverra.
              Fusce urna ipsum, tempor in erat elementum, malesuada porta
              libero. Aliquam mollis nunc quis porttitor feugiat.
            </p>

            <div className={s.testim_desktop}>
              <Carousel
                items={new Array(6).fill(TestimonialsCard)}
                slidesTablet={3}
              />
            </div>

            <div className={s.testim_mobile}>
              <TestimonialsCard />
              <TestimonialsCard />
              {/* <Pagination pagesCount={5} isShort /> */}
            </div>

            <Button className={s.button_more}>{t("show_all")}</Button>
          </div>
        </div>
      </main>

      <Footer links={footerNav} />
    </>
  )
}

export default LandingPage
