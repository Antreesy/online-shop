import { useState } from "react"
import { LocalizationProvider, DatePicker } from "@mui/lab"
import DateAdapter from "@mui/lab/AdapterDayjs"
import ruLocale from "dayjs/locale/ru"

import { Box, TextField } from "@mui/material"

// import CloseIcon from "@mui/icons-material/Close"
import s from "./datePicker.module.scss"

interface DatePickerProps {
  className?: string
  disabled?: boolean
  isHasClearBtn?: boolean
  isOutside?: boolean
  initValue: Date | null
  onChange(value: Date | null): void
}

const DateInput: React.FC<DatePickerProps> = (props) => {
  const { className, disabled, initValue, isHasClearBtn, isOutside, onChange } =
    props
  const [value, setValue] = useState<Date | null>(initValue || null)

  const clearValue = () => {
    setValue(null)
    onChange(null)
  }

  const onChangeDate = (date: Date | null) => {
    setValue(date)
    onChange(date)
  }

  // const clearBtn = <IconBtn icon={<CloseIcon className={s.clrBtn} />} onClick={clearValue} />;

  return (
    <LocalizationProvider dateAdapter={DateAdapter} locale={ruLocale}>
      <DatePicker
        disabled={disabled}
        clearable={true}
        mask={"__.__.____"}
        inputFormat={"DD.MM.YYYY"}
        value={value}
        onChange={onChangeDate}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <Box
            className={`${s.inputWrapper}${
              (isOutside && " " + s.isOutside) || " " + s.isInside
            }`}
          >
            <TextField
              variant="outlined"
              size="small"
              label={null}
              className={`${className} ${s.customInputBase}`}
              fullWidth={true}
              ref={inputRef}
              inputProps={{ ...inputProps, placeholder: "дд.мм.гггг" }}
              // InputProps={{
              //   endAdornment: isHasClearBtn && !!value ? clearBtn : null,
              // }}
            />
            {InputProps?.endAdornment}
          </Box>
        )}
      />
    </LocalizationProvider>
  )
}

export default DateInput
