import { NextPage } from "next"
import Head from "next/head"
import { Breadcrumbs } from "Сomponents"
import enot from "../public/test.png"
import { Button, Tabs, Input, Icon, SelectProduct, FileUpload } from "UI"

import s from "styles/pages/visual-operations.module.scss"
import { useState } from "react"

const VisualOperations: NextPage = () => {
  const [inputValue, setInputValue] = useState<string>("")
  return (
    <>
      <Head>
        <title>ILONSI SHOP | VisualOperations</title>
      </Head>
      <Breadcrumbs />
      <Button className={s.button_back} iconLeft="arrow_left">
        Back
      </Button>

      <div className={s.main}>
        <div className={s.main_content}>
          <Tabs
            className={s.tabs}
            labels={["Active Images (34543)", "Rejected Images (23563)"]}
            variant={"no_border"}
            values={[
              <>
                <div className={s.main_menu}>
                  <div className={s.menu_input}>
                    <div className={s.search}>
                      <Icon type="search" className={s.searchIcon} />
                      <Input
                        variant="default"
                        value={inputValue}
                        setValue={setInputValue}
                        placeholder="Search any product..."
                      />
                    </div>
                  </div>
                  <div className={s.main_buttons}>
                    <Button className={s.button_smalltext} variant="text">
                      Select All and Downloand
                    </Button>
                    <Button className={s.button_smalltext} variant="text">
                      Select All and Delete
                    </Button>
                    <Button className={s.button_smalltext} variant="text">
                      Delet Selected(0)
                    </Button>
                    <Button className={s.button_excel} iconLeft="download">
                      Excel Download
                    </Button>
                  </div>
                </div>
                <div className={s.content}>
                  <div className={s.content_item}>
                    <SelectProduct
                      imageSrc={enot}
                      imageTitle={"test.png"}
                      imageSize={"690x680"}
                      date={new Date().toLocaleDateString()}
                    />
                    <SelectProduct
                      imageSrc={enot}
                      imageTitle={"test.png"}
                      imageSize={"690x680"}
                      date={new Date().toLocaleDateString()}
                    />
                    <SelectProduct
                      imageSrc={enot}
                      imageTitle={"test.png"}
                      imageSize={"690x680"}
                      date={new Date().toLocaleDateString()}
                    />
                    <SelectProduct
                      imageSrc={enot}
                      imageTitle={"test.png"}
                      imageSize={"690x680"}
                      date={new Date().toLocaleDateString()}
                    />
                  </div>
                  <div className={s.content_select_input}>
                    <h1>
                      Select New Image or
                      <br /> Drag
                    </h1>
                    <div className={s.select_input}>
                      <FileUpload title="(JPG, JPEG, PNG, Minimum 600x800)" />
                    </div>
                    <p className={s.first}>
                      The image you upload must be in JPEG or PNG format
                    </p>
                    <p>
                      The image you upload must have a minimum 600x800 standart
                      and a maximum size of 5MB.
                    </p>
                    <p><span>Click</span> to visual rules</p>
                    <Button className={s.button_black}>Confirm</Button>
                  </div>
                </div>
              </>,
              <>
                <div className={s.main_menu}>
                  <div className={s.menu_input}>
                    <div className={s.search}>
                      <Icon type="search" className={s.searchIcon} />
                      <Input
                        variant="default"
                        value={inputValue}
                        setValue={setInputValue}
                        placeholder="Search any product..."
                      />
                    </div>
                  </div>
                  <div className={s.main_buttons}>
                    <Button className={s.button_smalltext} variant="text">
                      Select All and Restore
                    </Button>
                    <Button className={s.button_smalltext} variant="text">
                      Restore the selected (0)
                    </Button>
                  </div>
                </div>
                <div className={s.content}>
                  <div className={s.content_item_rejected}>
                    <SelectProduct
                      imageSrc={enot}
                      imageTitle={"enot.png"}
                      imageSize={"690x680"}
                      date={new Date().toLocaleDateString()}
                    />
                    <SelectProduct
                      imageSrc={enot}
                      imageTitle={"enot.png"}
                      imageSize={"690x680"}
                      date={new Date().toLocaleDateString()}
                    />
                  </div>
                </div>
              </>,
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default VisualOperations
