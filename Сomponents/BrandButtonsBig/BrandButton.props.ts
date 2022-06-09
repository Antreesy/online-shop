import { DetailedHTMLProps, HTMLAttributes } from "react"
import { IconType } from "shared/interfaces/iconTypes"

export interface BrandButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  icon: IconType
  appearance?: "purple" | "white"
  size?: "big" | "small"
  h3_title?: string
  h3_value?: number
  last_day?: number
  delays?: number
  smallBtnText?: string
  smallBtnNumber?: number
}
