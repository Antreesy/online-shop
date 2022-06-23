import { InputLabel } from "@mui/material"
import { FileUpload, Button } from "UI"

import s from "./fileUpload.module.scss"

interface ImageUploadProps {
  label?: string
  amount?: number
}

const ImageUpload: React.FC<ImageUploadProps> = ({ label, amount = 1 }) => {
  return (
    <div>
      {label && <InputLabel className={s.label}>{label}</InputLabel>}
      <div className={s.image_upload}>
        <h4 className={s.caption}>Select New Image or Drag</h4>
        <div className={s.wrapper}>
          {Array.from(Array(amount)).map((item, index) => (
            <FileUpload
              key={index}
              className={s.uploader}
              title="(JPG, JPEG, PNG,
            Minimum 600x800)"
            />
          ))}
        </div>
        <p className={s.text}>
          The image you upload must be in JPEG or PNG format
        </p>
        <p className={s.text}>
          The image you upload must have a minimum 600x800 standard and a
          maximum size of 5MB.
        </p>
        <p className={s.text}>
          <a>Click</a> to view visual rules
        </p>
        <Button className={s.button}>Load</Button>
      </div>
    </div>
  )
}

export default ImageUpload
