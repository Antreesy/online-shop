//Global Dependencies
import type { NextPage } from "next"

//Project Components
import Head from "next/head"

import { Card } from "UI"

import { HeaderLight } from "Сomponents"
import picForBrands from "public/assets/img/pic_for_brands.png"
import picForInfluencers from "public/assets/img/pic_for_influencers.png"

//Project Styles
import s from "styles/pages/Register.module.scss"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Register</title>
      </Head>

      <HeaderLight />

      <main className={s.main}>
        <div className={s.scrollContainer}>
          <div className={s.container}>
            <h1 className={s.heading}>
              <span>Featured Influencer’s Shops</span>
            </h1>
            <p className={s.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur ipsam modi fugiat autem earum aliquam delectus eaque
              facilis eum, harum consequuntur vero nisi! Mollitia, quo.
              Sapiente, eaque? Et, maiores nisi. Doloribus corporis repellat
              eveniet maiores. Impedit temporibus perspiciatis animi expedita
              tenetur tempore maxime odio saepe repudiandae sed accusamus
              commodi voluptatem, eos inventore quaerat ut nihil aliquam,
              consequuntur, ad repellendus.
              <br />
              <br />
              Corporis? Perspiciatis dignissimos atque, maxime dolor, earum
              perferendis magnam beatae voluptatum asperiores non praesentium
              laboriosam ipsam velit similique modi eum facere optio nisi sed.
              Atque, incidunt maxime. Consequuntur reprehenderit modi ratione?
              Debitis, saepe esse obcaecati eum laboriosam rem maxime deserunt
              placeat provident! Corporis dicta dolore consectetur modi nesciunt
              optio illum similique corrupti, consequuntur quae nihil ut,
              repellat quas cupiditate odit pariatur!
            </p>

            <div className={s.card_wrapper}>
              <Card
                className={s.card_brand}
                imageSrc={picForBrands}
                buttonTitle="FOR BRANDS"
              />
              <Card
                className={s.card}
                imageSrc={picForInfluencers}
                buttonTitle="FOR INFLUENCERS"
              />
            </div>
          </div>
        </div>
      </main>

      <div className={s.circle}></div>
    </>
  )
}

export default Home
