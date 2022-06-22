import { useState } from "react"
import { LocalizationProvider, DatePicker } from "@mui/lab"
import DateAdapter from "@mui/lab/AdapterDayjs"
import enLocale from "dayjs/locale/en-gb"
import cn from "classnames"

import { TextField } from "@mui/material"
import { Icon } from "UI"

import s from "./datePicker.module.scss"

interface DatePickerProps {
  className?: string
  disabled?: boolean
  initValue?: Date
  onChange(value: Date | null): void
}

const DateIcon = () => <Icon type={"date"} />

const DateInput: React.FC<DatePickerProps> = (props) => {
  const { className, disabled, initValue = null, onChange } = props
  const [value, setValue] = useState<Date | null>(initValue)

  const onChangeDate = (date: Date | null) => {
    setValue(date)
    onChange(date)
  }

  const datePickerClass = cn(s.date_picker, className)

  return (
    <LocalizationProvider dateAdapter={DateAdapter} locale={enLocale}>
      <DatePicker
        disabled={disabled}
        clearable={true}
        mask={"__.__.____"}
        inputFormat={"DD.MM.YYYY"}
        value={value}
        onChange={onChangeDate}
        components={{
          OpenPickerIcon: DateIcon,
        }}
        renderInput={(params) => (
          <TextField
            className={datePickerClass}
            {...params}
            ref={params.inputRef}
            inputProps={{ ...params.inputProps, placeholder: "DD.MM.YYYY" }}
          />
        )}
      />
    </LocalizationProvider>
  )
}

export default DateInput
