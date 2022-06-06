import Head from "next/head"
import React, { useState } from "react"
import { Button, Icon, Input, ModalWindow, Select } from "UI"
import { HeaderLight } from "Сomponents"
import s from "../styles/pages/register-page.module.scss"

const Modal = () => {
  return (
    <div className={s.modal}>
      <div>
        <Icon type="okay" />
      </div>
      <h2>You are now ready</h2>
      <p>
        We recieved the request to create a membership. We will get back to you
        via e-mail within 24 hours.
      </p>
    </div>
  )
}

const RegisterPage = () => {
  const [taxNumber, setTaxNumber] = useState<string>("")
  const [showModal, setShowModal] = useState<boolean>(false)
  const [step, setStep] = useState<number>(1)
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

      <main>
        <ModalWindow isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal />
        </ModalWindow>

        {step === 1 ? (
          <form className={s.step_one}>
            <h1>
              Step <span>01</span>
            </h1>

            <Select
              className={s.select}
              placeholder="Sale Category"
              items={[
                { title: "one", value: 1 },
                { title: "two", value: 2 },
                { title: "three", value: 3 },
              ]}
              onChange={() => {
                return
              }}
            />

            <Select
              className={s.select}
              placeholder="Company Type"
              items={[
                { title: "one", value: 1 },
                { title: "two", value: 2 },
                { title: "three", value: 3 },
              ]}
              onChange={() => {
                return
              }}
            />

            <div className={s.blank}></div>
            <Input
              value={taxNumber}
              setValue={setTaxNumber}
              label=""
              placeholder="Tax Number"
            />

            <div className={s.blank}></div>
            <Input
              value={taxNumber}
              setValue={setTaxNumber}
              label=""
              placeholder="Mersis No (Optional)"
              isRequired={false}
            />

            <div className={s.blank}></div>
            <Button onClick={() => setStep(2)}>Next Step</Button>
          </form>
        ) : (
          <form className={s.step_one}>
            <h4>Create your shop, and get eaaly access</h4>

            <Input
              value={taxNumber}
              setValue={setTaxNumber}
              label=""
              placeholder="Name"
            />

            <div className={s.blank}></div>
            <Input
              value={taxNumber}
              setValue={setTaxNumber}
              label=""
              placeholder="Email"
              isRequired={false}
            />

            <Select
              className={s.select}
              placeholder="Category"
              items={[
                { title: "one", value: 1 },
                { title: "two", value: 2 },
                { title: "three", value: 3 },
              ]}
              onChange={() => {
                return
              }}
            />

            <Input
              value={taxNumber}
              setValue={setTaxNumber}
              label=""
              placeholder="@Instagram"
            />

            <div className={s.blank}></div>
            <Input
              value={taxNumber}
              setValue={setTaxNumber}
              label=""
              placeholder="Password"
              isRequired={false}
            />

            <div className={s.blank}></div>
            <div className={s.blank}></div>
            <div className={s.blank}></div>
            <Button
              onClick={() => {
                setStep(1), setShowModal(true)
              }}
            >
              Create Account
            </Button>

            <p className={s.one}></p>
          </form>
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
