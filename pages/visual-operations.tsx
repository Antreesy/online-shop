import { useState } from "react"
import { NextPage } from "next"

import Head from "next/head"
import { Breadcrumbs } from "Сomponents"
import { Button, Tabs, Input, Icon, SelectProduct, FileUpload } from "UI"

import { images } from "shared/constants/ImageSelectProduct"

import s from "styles/pages/visual-operations.module.scss"

const VisualOperations: NextPage = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [select, setSelect] = useState(false)
  const [delet, setDelet] = useState<number[]>([])

  console.log(delet)

  const secTest = (item: number) => {
    setDelet([...delet, item])
  }
  return (
    <>
      <Head>
        <title>ILONSI SHOP | VisualOperations</title>
      </Head>
      <Breadcrumbs />

      <div className={s.main}>
        <div className={s.main_button_back}>
          <Button className={s.button_back} iconLeft="arrow_left">
            Back
          </Button>
        </div>
        <div className={s.main_content}>
          <Tabs
            className={s.tabs}
            labels={[
              `Active Images (${images.length})`,
              `Rejected Images (${images.length})`,
            ]}
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
                  <div className={s.button_container}>
                    <div className={s.main_buttons}>
                      <Button
                        onClick={() => setSelect(!select)}
                        className={s.button_smalltext}
                        variant="text"
                      >
                        Select All and Downloand
                      </Button>
                      <Button
                        onClick={() => setSelect(!select)}
                        className={s.button_smalltext}
                        variant="text"
                      >
                        Select All and Delete
                      </Button>
                      <Button className={s.button_smalltext} variant="text">
                        Delet Selected ({delet.length})
                      </Button>
                    </div>
                    <Button className={s.button_excel} iconLeft="download">
                      Excel Download
                    </Button>
                  </div>
                </div>
                <div className={s.content}>
                  <div className={s.content_item}>
                    {images.map((im) => (
                      <SelectProduct
                        key={im.id}
                        imageSrc={im.src.src}
                        imageTitle={im.title}
                        imageSize={im.size}
                        selected={select}
                        setDelete={() => secTest(im.id)}
                        date={im.date}
                      />
                    ))}
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
                    <p>
                      <span>Click</span> to visual rules
                    </p>
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
                      Restore the selected ()
                    </Button>
                  </div>
                </div>
                <div className={s.content}>
                  <div className={s.content_item_rejected}>
                    {images.map((im) => (
                      <SelectProduct
                        key={im.id}
                        imageSrc={im.src.src}
                        imageTitle={im.title}
                        imageSize={im.size}
                        selected={select}
                        setDelete={() => secTest(im.id)}
                        date={im.date}
                      />
                    ))}
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
