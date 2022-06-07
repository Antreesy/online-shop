import { NextPage } from "next"
import Head from "next/head"

import { SupportSection } from "Сomponents"
import { Accordion } from "UI"

import { questions } from "shared/constants/questions"

import s from "styles/pages/account/help.module.scss"

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Help page</title>
      </Head>

      <SupportSection />
      <h1 className={s.faq_heading}>FAQ</h1>
      <div className={s.faq_accordions}>
        {questions.map(({ header, content }, index) => {
          return (
            <Accordion
              key={index}
              header={header}
              headerClassName={s.acc_header}
            >
              <p className={s.acc_description}>{content}</p>
            </Accordion>
          )
        })}
      </div>
    </>
  )
}

export default Profile
