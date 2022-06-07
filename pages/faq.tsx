import { NextPage } from "next"
import Head from "next/head"

import { SupportSection } from "Сomponents"
import { Accordion } from "UI"

import { questions } from "shared/constants/questions"

import s from "styles/pages/faq.module.scss"

const FaqPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ILONSI SHOP | FAQ page</title>
      </Head>

      <div className={s.content}>
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
      </div>
    </>
  )
}

export default FaqPage
