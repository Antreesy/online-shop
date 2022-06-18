import { NextPage } from "next"

import Image from "next/image"
import { Button, Card, Carousel } from "UI"
import { Breadcrumbs } from "Сomponents"

import img2 from "../public/assets/img/İlayda-Akçatepe.png"

import s from "../styles/pages/landing-page.module.scss"

const InfluencersCard = () => (
  <Card
    className={s.influencers_card}
    imageSrc="/../public/assets/img/picture_1.png"
    title="Gizem Sancak"
    buttonTitle="Go To Store"
    isButtonHidden
  />
)

const LandingPage: NextPage = () => {
  return (
    <>
      <div className={s.hero}>
        <div className={s.content}>
          <Image className={s.content_image} src={img2} />

          <div className={s.content_wrapper}>
            <div>
              <h3 className={s.info_title}>Autumn Collection</h3>
              <p className={s.info_number}>01</p>
            </div>

            <Button className={s.content_button}>Go to Store</Button>

            <div>
              <h3 className={s.descr_caption}>Lorem ipsum dolor sit amet,</h3>
              <p className={s.descr_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                lacinia, lacus mattis semper lacinia, metus urna dapibus quam,
                eu maximus sapien ipsum at justo. In varius accumsan magna, vel
                eleifend nisi maximus et.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Breadcrumbs />

      <div className={s.container}>
        <div className={s.text_content}>
          <h2 className={s.heading}>Featured Influencer’s Shops</h2>
          <p className={s.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lacinia, lacus mattis semper lacinia, metus urna dapibus quam, eu
            maximus sapien ipsum at justo. In varius accumsan magna, vel
            eleifend nisi maximus et. Aliquam faucibus facilisis viverra. Fusce
            urna ipsum, tempor in erat elementum, malesuada porta libero.
            Aliquam mollis nunc quis porttitor feugiat.
          </p>
          <p className={s.description}>
            Pellentesque faucibus leo magna, a convallis metus congue sit amet.
            Vestibulum ornare efficitur suscipit. Sed vitae vehicula dolor.
            Praesent sit amet dui justo. Maecenas id lorem vitae orci interdum
            commodo nec non dolor.
          </p>
        </div>

        <div className={s.influencers_carousel}>
          <Carousel items={new Array(10).fill(InfluencersCard)} />

          <Button className={s.button_more}>Show All</Button>
        </div>
      </div>

      <div className={s.text_content}>
        <h2 className={s.heading}>Featured Brands</h2>
        <p className={s.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          lacinia, lacus mattis semper lacinia, metus urna dapibus quam, eu
          maximus sapien ipsum at justo. In varius accumsan magna, vel eleifend
          nisi maximus et. Aliquam faucibus facilisis viverra. Fusce urna ipsum,
          tempor in erat
        </p>
      </div>

      <div className={s.text_content}>
        <h2 className={s.heading}>Lorem Ipsum Dolor Sit Amet</h2>
        <p className={s.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          lacinia, lacus mattis semper lacinia, metus urna dapibus quam, eu
          maximus sapien ipsum at justo. In varius accumsan magna, vel eleifend
          nisi maximus et. Aliquam faucibus facilisis viverra. Fusce urna ipsum,
          tempor in erat elementum, malesuada porta libero. Aliquam mollis nunc
          quis porttitor feugiat.
        </p>
      </div>

      <Carousel items={new Array(10).fill(InfluencersCard)} />

      <div className={s.influencers_carousel}>
        <h2 className={s.heading}>Lorem Ipsum Dolor Sit Amet</h2>
        <p className={s.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          lacinia, lacus mattis semper lacinia, metus urna dapibus quam, eu
          maximus sapien ipsum at justo. In varius accumsan magna, vel eleifend
          nisi maximus et. Aliquam faucibus facilisis viverra. Fusce urna ipsum,
          tempor in erat elementum, malesuada porta libero. Aliquam mollis nunc
          quis porttitor feugiat.
        </p>

        <Carousel items={new Array(10).fill(InfluencersCard)} />

        <Button className={s.button_more}>Show All</Button>
      </div>
    </>
  )
}

export default LandingPage
