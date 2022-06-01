import { icons } from "shared/constants/icons"
import s from "./icon.module.scss"

export type IconType = typeof icons[number]

interface IconProps {
  type: IconType
  color?: string
}

export const Icon: React.FC<IconProps> = (props) => {
  const { type, color } = props
  return <span style={{ color }} className={s.icon + " " + s[type]}></span>
}
