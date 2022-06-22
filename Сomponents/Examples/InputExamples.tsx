import React, { useState } from "react"
import { Input } from "UI"

import s from "styles/pages/components-example.module.scss"

const InputExamples: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("")

  return (
    <div className={s.grid_column}>
      <Input label="default" setValue={setInputValue} value={inputValue} />
      <Input
        variant="footer"
        buttonLabel="button"
        label="footer"
        setValue={setInputValue}
        value={inputValue}
        placeholder={"value"}
      />
      <Input
        variant="black_button"
        isRequired={true}
        buttonLabel="button"
        label="modal"
        setValue={setInputValue}
        value={inputValue}
        placeholder={"value"}
      />
      <Input
        variant="blue_outline"
        buttonLabel="button"
        label="blue_outline"
        setValue={setInputValue}
        value={inputValue}
        placeholder={"value"}
      />
      <Input
        buttonLabel="button"
        label="className: error"
        setValue={setInputValue}
        value={inputValue}
        className={"error"}
        placeholder={"value"}
        errorText={"error"}
      />
    </div>
  )
}

export default InputExamples
