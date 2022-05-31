import Image from "next/image"

import LightLogo from "public/assets/img/LightLogo.svg"
import DarkLogo from "public/assets/img/DarkLogo.svg"

interface LogoProps {
  className?: string
  type: "light" | "dark"
}

const Logo: React.FC<LogoProps> = (props) => {
  const { className, type } = props

  return (
    <Image
      src={type === "light" ? LightLogo : DarkLogo}
      className={className}
    />
  )
}

export default Logo
