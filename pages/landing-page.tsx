import { NextPage } from "next"
import Image from "next/image"
import React from "react"
import { footerNav } from "shared/constants/footernav"
import { Button, Card, Carousel } from "UI"
import { Breadcrumbs, Footer, Header } from "Сomponents"
import img2 from "../public/assets/img/İlayda-Akçatepe.png"
import s from "../styles/pages/landing-page.module.scss"

const SampleCard = () => (
  <Card
    className={s.card_small}
    imageSrc="/../public/assets/img/picture_1.png"
    title="Gizem Sancak"
    buttonTitle="Go To Store"
    topButtonTitle="Follow"
  />
)

const LandingPage: NextPage = () => {
  return (
    <div className={s.landingPage}>
      <Header />

      <main>
        <div className={s.blank}></div>
        <div className={s.background}>
          <div className={s.image}>
            <Image src={img2} />
          </div>
          <div>
            <Button>Go to Store</Button>
          </div>
          <div>
            <h3> Lorem ipsum dolor sit amet</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lacinia, lacus mattis semper lacinia, metus urna dapibus quam, eu
            maximus sapien ipsum at justo. In varius accumsan magna, vel
            eleifend nisi maximus et.
          </div>
        </div>

        <Breadcrumbs />
        <div>
          Influencers shops
          <div className={s.carousel}>
            {/* <Carousel items={new Array(10).fill(SampleCard)} /> */}
          </div>
          <Button>Show all</Button>
        </div>

        <div>
          Testimonials
          <div className={s.carousel}>
            {/* <Carousel items={new Array(10).fill(SampleCard)} /> */}
          </div>
          <Button>Show all</Button>
        </div>
      </main>

      <Footer links={footerNav} />
    </div>
  )
}

export default LandingPage
