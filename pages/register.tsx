import { useState } from "react"
import type { NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Head from "next/head"
import { ModalWindow } from "UI"
import { AccountCreated } from "UI/Modals"
import { StepNull, StepOne, StepTwo, StepThree } from "views/register"

import s from "styles/pages/register.module.scss"

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["app", "common", "modal"])),
    },
  }
}

const Register: NextPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [step, setStep] = useState<number>(0)
  const handleModalClose = () => setShowModal(false)

  const RenderStep = () => {
    switch (step) {
      case 1:
        return <StepOne setStep={setStep} />
      case 2:
        return <StepTwo setStep={setStep} />
      case 3:
        return <StepThree setShowModal={setShowModal} setStep={setStep} />

      default:
        return <StepNull setStep={setStep} />
    }
  }

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Register</title>
      </Head>

      <main className={s.main}>
        <div className={s.scrollContainer}>
          <div className={s.container}>
            <RenderStep />
          </div>
        </div>
      </main>

      <ModalWindow
        isOpen={showModal}
        onClose={handleModalClose}
        iconType="okay"
      >
        <AccountCreated
          title="You are now ready"
          content="We received the request to create a membership. We will get back to you via  e-mail within 24 hours."
          onClick={handleModalClose}
        />
      </ModalWindow>

      <div className={s.circle}></div>
    </>
  )
}

export default Register
