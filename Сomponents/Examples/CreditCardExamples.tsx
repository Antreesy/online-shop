import { CreditCard } from "UI"

import s from "styles/pages/components-example.module.scss"

const CreditCardExamples: React.FC = () => {
  return (
    <div className={s.creditcard}>
      <CreditCard
        size={200}
        isColored
        key={1}
        isHidden
        id={8375}
        cardNumber="1234 8547 7294 3959"
        cardHolder="Test Test"
        expireDate="01/2023"
        onDelete={() => {
          console.log("test")
        }}
      />
      <CreditCard
        size={250}
        key={2}
        isHidden
        id={7335}
        cardNumber="1234 1234 1234 1234"
        cardHolder="Test Test"
        expireDate="01/2023"
      />
      <CreditCard
        size={300}
        key={3}
        id={2341}
        isColored
        cardNumber="1234 1234 1234 1234"
        cardHolder="Test Test"
        expireDate="01/2023"
        onDelete={() => {
          console.log("test")
        }}
      />
    </div>
  )
}

export default CreditCardExamples
