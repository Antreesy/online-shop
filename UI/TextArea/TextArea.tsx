import TextareaAutosize from "@mui/material/TextareaAutosize"
import cn from "classnames"
import s from "./textArea.module.scss"

interface TextAriaProps {
  style?: object
  placeholder?: string
  className?: object
  value: string
  setValue: (newValue: string) => void
  onChange?: () => void
}

const CustomTextArea: React.FC<TextAriaProps> = (props) => {
  const {
    value,
    placeholder = "",
    className = "",
    onChange,
    setValue,
  } = props

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
    onChange?.()
  }

  return (
    <TextareaAutosize
      onChange={handleChange}
      value={value}
      className={cn(s.aria, className)}
      placeholder={placeholder}
    />
  )
}

export default CustomTextArea
