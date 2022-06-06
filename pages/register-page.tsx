import Head from "next/head"
import React, { useState } from "react"
import { Icon, ModalWindow } from "UI"
import { HeaderLight } from "Сomponents"
import { RegisterFormsStepTwo } from "Сomponents"
import { RegisterFormStepOne } from "Сomponents"
import s from "../styles/pages/register-page.module.scss"

const RegisterPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [step, setStep] = useState<number>(1)

  const isFirstStep = step === 1
  const handleModalClose = () => setShowModal(false)

  return (
    <div className={s.registerPage}>
      <Head>
        <title>ILONSI SHOP | Register Page</title>
      </Head>

      <div className={s.header}>
        <HeaderLight />
      </div>

      <div className={s.decorationHeader}>
        <div className={s.circle}></div>
        <div className={s.line}></div>
      </div>

      <main className={s.main}>
        <ModalWindow isOpen={showModal} onClose={handleModalClose}>
          <div className={s.modal}>
            <div className={s.icon}>
              <Icon type="okay" />
            </div>
            <h2>You are now ready</h2>
            <p>
              We recieved the request to create a membership. We will get back
              to you via e-mail within 24 hours.
            </p>
          </div>
        </ModalWindow>

        {isFirstStep ? (
          <RegisterFormStepOne setStep={setStep} />
        ) : (
          <RegisterFormsStepTwo setShowModal={setShowModal} setStep={setStep} />
        )}
      </main>

      <div className={s.decorationFooter}>
        <div className={s.line}></div>
        <div className={s.circle}></div>
      </div>
    </div>
  )
}

export default RegisterPage
