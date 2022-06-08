import Image from "next/image"
import { ImageProps } from "next/image"
import { useEffect, useState } from "react"
import { Icon } from "UI"
import cn from "classnames"
import s from "./selectProduct.module.scss"

interface SelectProduct {
  imageSrc: ImageProps["src"]
  imageTitle: string
  imageSize: string
  date: string
  id?: number
  setID?: (id: number) => void
}

const SelectProduct: React.FC<SelectProduct> = (props) => {
  const { imageSrc, imageTitle, imageSize, date, id, setID } = props

  const [select, setSelect] = useState(false)

  // useEffect(() => {
  //   select ? setID(id) : null
  // }, [select])

  const SelectProductClass = cn(s.main, {
    [s.main_select]: select === true,
  })
  const SelectProductIcon = cn(s.icon, {
    [s.icon_select]: select === true,
  })
  return (
    <div
      className={SelectProductClass}
      onClick={() => setSelect(select ? false : true)}
    >
      <div className={s.image_container}>
        <Image src={imageSrc} width="289" height="290" />
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
