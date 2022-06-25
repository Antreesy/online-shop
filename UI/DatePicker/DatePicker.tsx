import { useState } from "react"
import DateAdapter from "@mui/lab/AdapterDayjs"
import enLocale from "dayjs/locale/en-gb"
import cn from "classnames"

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { InputLabel, TextField } from "@mui/material"
import { Icon } from "UI"

import s from "./datePicker.module.scss"

interface DatePickerProps {
  className?: string
  pickerClassName?: string
  disabled?: boolean
  initValue?: Date
  label?: string
  onChange(value: Date | null): void
}

const DateIcon = () => <Icon type={"date"} />

const DateInput: React.FC<DatePickerProps> = (props) => {
  const {
    className,
    pickerClassName,
    disabled,
    initValue = null,
    label,
    onChange,
  } = props
  const [value, setValue] = useState<Date | null>(initValue)

  const onChangeDate = (date: Date | null) => {
    setValue(date)
    onChange(date)
  }

  const pickerClass = cn(s.picker, pickerClassName)

  return (
    <div className={cn(s.picker_wrapper, className)}>
      {label && (
        <InputLabel className={s.picker_label} id="picker-label">
          {label}
        </InputLabel>
      )}

      <LocalizationProvider dateAdapter={DateAdapter} locale={enLocale}>
        <DatePicker
          disabled={disabled}
          mask={"__.__.____"}
          inputFormat={"DD.MM.YYYY"}
          value={value}
          onChange={onChangeDate}
          components={{
            OpenPickerIcon: DateIcon,
          }}
          renderInput={(params: any) => (
            <TextField
              className={pickerClass}
              {...params}
              ref={params.inputRef}
              inputProps={{ ...params.inputProps, placeholder: "DD.MM.YYYY" }}
            />
          )}
        />
      </LocalizationProvider>
    </div>
  )
}

export default DateInput
