import { useState } from "react"
import cn from "classnames"

import Image, { ImageProps } from "next/image"
import { Icon } from "UI"

import s from "./selectProduct.module.scss"

interface SelectProduct {
  imageSrc: ImageProps["src"]
  imageTitle: string
  imageSize: string
  date: string
  selected?: boolean
  setDelete?: () => void
}

const SelectProduct: React.FC<SelectProduct> = (props) => {
  const { imageSrc, selected, imageTitle, imageSize, date, setDelete } = props

  const [select, setSelect] = useState<boolean>(false)

  const selectProduct = () => {
    setSelect(!select)
    setDelete && setTimeout(setDelete, 100)
  }
  const unselectProduct = () => {
    setSelect(!select)
  }

  const SelectProductClass = cn(s.main, {
    [s.main_select]: selected || select,
  })
  const SelectProductIcon = cn(s.icon, {
    [s.icon_select]: select || selected,
  })
  return (
    <div
      className={SelectProductClass}
      onClick={select ? unselectProduct : selectProduct}
    >
      <div className={s.image_container}>
        <Image src={imageSrc} layout="fill" />
      </div>
      <span className={s.image_name}>{imageTitle}</span>
      <span className={s.image_info}>
        {imageSize} {date}
      </span>
      <Icon className={SelectProductIcon} type={"mark"} color={"white"} />
    </div>
  )
}

export default SelectProduct
