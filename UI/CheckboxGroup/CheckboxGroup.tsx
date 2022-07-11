import cn from "classnames"

import { Checkbox, FormGroup, FormControlLabel } from "@mui/material"

import s from "./CheckboxGroup.module.scss"

interface CheckboxProps {
  labels: string | string[]
  rounded?: boolean
  className?: string
  checkboxClassName?: string
  color?: string
  colorChecked?: string
  inColumn?: boolean
  value?: boolean
  setValue?: (newValue: boolean) => void
}

interface IconProps {
  checked?: boolean
  rounded?: boolean
  color?: string
  colorChecked?: string
}

const IconCheckbox = (props: IconProps) => {
  const {
    checked = false,
    rounded = false,
    color = "#8100ef",
    colorChecked = "#8100ef",
  } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      {checked && !rounded && (
        <path
          d="M 19 3 H 3 v 18 h 18 V 3 z m -9 14 l -5 -5 l 1.41 -1.41 L 10 14.17 l 7.59 -7.59 L 19 8 l -9 9 z"
          fill={colorChecked}
        />
      )}
      {!checked && !rounded && (
        <rect
          x="4"
          y="4"
          width="16.5"
          height="16.5"
          fill="transparent"
          stroke={color}
          strokeWidth={1.5}
        />
      )}
      {checked && rounded && (
        <path
          d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          fill={colorChecked}
        />
      )}
      {!checked && rounded && (
        <rect
          x="4"
          y="4"
          rx="1"
          ry="1"
          width="16.5"
          height="16.5"
          fill="transparent"
          stroke={color}
          strokeWidth={1.5}
        />
      )}
    </svg>
  )
}

const CheckboxGroup: React.FC<CheckboxProps> = (props) => {
  const {
    rounded = false,
    labels,
    className,
    checkboxClassName,
    color,
    colorChecked,
    inColumn,
    value,
    setValue,
  } = props

  const labelsArray = typeof labels === "string" ? [labels] : labels

  const groupClass = cn(s.group, { [s.column]: inColumn }, className)
  const checkboxClass = cn(s.checkbox, checkboxClassName)

  return (
    <FormGroup className={groupClass}>
      {labelsArray?.map((label: string) => (
        <FormControlLabel
          key={label}
          control={
            <Checkbox
              className={checkboxClass}
              checked={value}
              onChange={(e) => {
                setValue?.(e.target.checked)
              }}
              icon={<IconCheckbox rounded={rounded} color={color} />}
              checkedIcon={
                <IconCheckbox
                  checked
                  rounded={rounded}
                  colorChecked={colorChecked}
                />
              }
            />
          }
          label={label}
        />
      ))}
    </FormGroup>
  )
}

export default CheckboxGroup
