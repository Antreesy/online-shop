import { useState } from "react"
import dynamic from "next/dynamic"
import { useTranslation } from "next-i18next"

import { Button, Progressbar } from "UI"
import { BackButton } from "Сomponents"
import { StepOne, StepThree, StepTwo } from "./Steps"

import { AddProductFormProps } from "./AddProductForm"
const AddProductForm = dynamic<AddProductFormProps>(() =>
  import("./").then((module) => module.AddProductForm),
)

import s from "styles/pages/account/add-product.module.scss"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UniversalAddProductProps {}

const UniversalAddProduct = () => {
  const steps = [1, 2, 3]
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [showForm, setShowForm] = useState<boolean>(false)

  const toggleForm = () => setShowForm((prev) => !prev)

  const { t } = useTranslation("addproduct")
  return (
    <>
      <div className={s.button_wrapper}>
        <BackButton />
        {showForm && (
          <Button className={s.button_add} onClick={toggleForm}>
            {t("bulkAddProduct")}
          </Button>
        )}
      </div>

      {!showForm ? (
        <>
          <div className={s.header}>
            <Progressbar steps={steps} currentStep={currentStep} />
            <h2>{t("addProduct")} </h2>
            <p>
              {t("textEasy")} <a>Ilonsi!</a>
            </p>
          </div>
          <div className={s.steps_wrapper}>
            <StepOne
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
            <StepTwo
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
            <StepThree
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          </div>
          <Button className={s.button_add} onClick={toggleForm}>
            {t("addSingleProduct")}
          </Button>
        </>
      ) : (
        <AddProductForm />
      )}
    </>
  )
}

export default UniversalAddProduct
