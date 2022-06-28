import React from "react"
import s from "./BrandVisualOperations.module.scss"
import { ImageUpload } from "UI/FileUpload"

export const BrandVisualOperations: React.FC = () => {
  return (
    <div className={s.block}>
      <ImageUpload />
    </div>
  )
}
