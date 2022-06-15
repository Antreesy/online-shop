import { NextPage } from "next"
import Head from "next/head"
import s from "styles/pages/brand-information.module.scss"
import { Button, FileUpload, Icon, Input } from "UI"
import cn from "classnames"

const brandInformation: NextPage = () => {
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Brand information</title>
      </Head>

      <div className={s.container}>
        <div className={s.nav}>
          <ul className={s.navigation}>
            <li>Profile</li>
            <li>Brand Information</li>
            <li>All Product</li>
            <li>All Cancellations</li>
            <li>On Sale</li>
            <li>That Need Revision</li>
            <li>Not On Sale</li>
          </ul>
        </div>
        <Button iconLeft="arrow_left" className={s.backBtn} variant="text">
          Back
        </Button>
        <h1>Brand Informations</h1>

        <div className={s.brandInfo}>
          <div className={s.brandItem}>
            <div className={s.iconWrapper}>
              <Icon type="brand_name" />
            </div>
            <div className={s.textBlock}>
              <p className={s.brandName}>Brand Name:</p>
              <p className={s.description}>Saint Laurent</p>
            </div>
          </div>
          <div className={s.brandDisplay}>
            <div className={s.iconWrapper}>
              <Icon type="brand_display_name" />
            </div>
            <div className={s.textBlock}>
              <p className={s.brandName}>Brand Display Name:</p>
              <p className={s.description}> Saint Laurent</p>
            </div>
          </div>
        </div>

        <div className={s.brandUploads}>
          <div className={s.uploadLogo}>
            <p>Brand Logo:</p>
            <div className={s.uploader}>
              <FileUpload
                title="Select or Drag Image"
                setValue={() => console.log("")}
                className={s.fileUploader}
              />
            </div>
            <Button variant="text" className={s.brandBlackBtn}>
              Load
            </Button>
          </div>
          <div className={s.uploadBanner}>
            <p>Brand Banner:</p>
            <div className={s.uploader}>
              <FileUpload
                title="Select or Drag Image"
                setValue={() => console.log("")}
                className={s.fileUploader}
              />
            </div>
            <Button variant="text" className={s.brandBlackBtn}>
              Load
            </Button>
          </div>
        </div>
        <h1>Company Informations</h1>
      </div>
      <div className={s.formSection}>
        <div className={s.container}>
          <div className={s.firstLineInputs}>
            <Input
              value=""
              setValue={() => {}}
              className={s.input}
              label="Brand Name"
              isRequired
            />
            <Input
              value=""
              setValue={() => {}}
              className={s.input}
              label="Cari Ünvan"
            />
            <Input
              value=""
              setValue={() => {}}
              className={s.input}
              label="Brand Name"
            />
          </div>
          <div className={s.secondLineInputs}>
            <Input
              value=""
              setValue={() => {}}
              className={s.input}
              label="Brand Name"
              isRequired
            />
            <Input
              value=""
              setValue={() => {}}
              className={s.input}
              label="Tax Administration"
            />
            <Input
              value=""
              setValue={() => {}}
              className={s.input}
              label="KEP Address"
            />
          </div>
          <Input
            value=""
            setValue={() => {}}
            className={s.inputTextArea}
            label="Tax number"
          />
          <Button variant="text" className={cn(s.brandBlackBtn, s.saveBtn)}>
            Save
          </Button>
        </div>
      </div>
    </>
  )
}
export default brandInformation
