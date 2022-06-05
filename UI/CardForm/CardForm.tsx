import cn from "classnames"
import { useRef, useState } from "react"
import { Button } from "UI/Button"
import { CreditCard } from "UI/CreditCard"
import { Input } from "UI/Input"

import s from "./cardForm.module.scss"

const CardForm: React.FC = () => {
  const [numberData, setNumberData] = useState("")
  const [nameData, setNameData] = useState("")
  const [expData, setExpData] = useState("")
  const [secData, setSecData] = useState("")

  let cardNumber = numberData
  cardNumber = cardNumber.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();

  let cardName = nameData
  cardName = cardName.replace(/[^a-zA-Z ]/, "")
  cardName = cardName.toUpperCase()

  let cardExp = expData
  cardExp = cardExp.replace(/[^0-9]/, "")
  cardExp = cardExp.replace(/^(.{2})/, "$1/")

  let cardSec = secData.replace(/[^0-9]/, "")

  return (
    <div className={s.cardForm}>
      <div className={s.cardInputs}>
        <Input
          type="tel"
          label="Card number"
          setValue={setNumberData}
          value={cardNumber}
          inputProps={{ maxLength: 19 }}
          placeholder="1234 8547 7294 3959"
          className={cn(s.longInput)}
        />
        <Input
          type="text"
          label="Name on the card"
          setValue={setNameData}
          value={cardName}
          inputProps={{ maxLength: 20 }}
          placeholder="Yalçın Topkaya"
          className={cn(s.longInput)}
        />
        <div className={s.flex}>
          <Input
            type="tel"
            label="Expiration date"
            setValue={setExpData}
            value={cardExp}
            inputProps={{ maxLength: 5 }}
            placeholder="06/2026"
            className={cn(s.shortInput)}
          />
          <Input
            type="password"
            label="Security info"
            setValue={setSecData}
            value={cardSec}
            inputProps={{ maxLength: 3 }}
            placeholder="CVC/CVV"
            className={cn(s.shortInput)}
          />
        </div>
        <Button className={s.desktopButton}>Save</Button>
      </div>
      <CreditCard
        isColored
        key={4}
        id={8375}
        cardNumber={cardNumber}
        cardHolder={cardName}
        expireDate={cardExp}
        onDelete={() => {
          console.log("test")
        }}
      />
      <Button className={s.mobileButton}>Save</Button>
    </div>
  )
}

export default CardForm
