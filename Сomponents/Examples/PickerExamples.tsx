import React, { useState } from "react"
import { ColorPicker, SizePicker } from "Сomponents"
import { DatePicker, FileSelect, FileUpload, Input, Select, Slider } from "UI"

import { colors } from "shared/constants/colors"
import { countriesForSelect } from "shared/constants/countries"

import s from "styles/pages/ComponentsExample.module.scss"

const PickerExamples: React.FC = () => {
  const [value, setValue] = useState<File | null>(null)

  return (
    <div className={s.grid_column}>
      <h2>Date Picker</h2>
      <DatePicker
        initValue={new Date()}
        onChange={() => {
          return
        }}
      />
      <h2>Color Picker</h2>
      <ColorPicker colors={colors} />
      <h2>Size Picker</h2>
      <SizePicker labels={["S", "M", "L", "XL", "XXL", "3XL"]} />
      <h2>Select</h2>
      <Select
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
        label="Select"
        placeholder="Country*"
        items={countriesForSelect()}
        onChange={() => {
          return
        }}
      />
      <h2>Slider</h2>
      <Slider min={0} max={50} value={[0, 30]} />
      <h2>File Upload</h2>
      <FileUpload />
      <h2>File Select</h2>
      <FileSelect value={value} setValue={setValue} />
    </div>
  )
}

export default PickerExamples
