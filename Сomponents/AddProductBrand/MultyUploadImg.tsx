import React from "react"
import s from "./addProductBrand.module.scss"
import { FileUpload, Button } from "UI"

const MyltyUploadImg: React.FC = () => {
  return (
    <div className={s.upload_img}>
      <h2>Select New Image or Drag</h2>
      <div className={s.file_gallery}>
        <FileUpload
          className={s.upload_img_gallery}
          title="(JPG, JPEG, PNG,
              Minimum 600x800)"
          setValue={() => {}}
        />{" "}
        <FileUpload
          className={s.upload_img_gallery}
          title="(JPG, JPEG, PNG,
            Minimum 600x800)"
          setValue={() => {}}
        />{" "}
        <FileUpload
          className={s.upload_img_gallery}
          title="(JPG, JPEG, PNG,
          Minimum 600x800)"
          setValue={() => {}}
        />
      </div>
      <p>The image you upload must be in JPEG or PNG format</p>
      <p>
        The image you upload must have a minimum 600x800 standard and a maximum
        size of 5MB.
      </p>
      <p>
        <span>Click</span> to view visual rules
      </p>
      <Button className={s.button_black}>Confirm</Button>
    </div>
  )
}

export default MyltyUploadImg
