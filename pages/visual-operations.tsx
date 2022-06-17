import { useState } from "react"
import { NextPage } from "next"

import Head from "next/head"
import { BackButton } from "Сomponents"
import { Button, Tabs, Input, Icon, SelectProduct, FileUpload } from "UI"

import useResize from "shared/hooks/useResize"
import { images } from "shared/constants/ImageSelectProduct"

import s from "styles/pages/visual-operations.module.scss"

const VisualOperations: NextPage = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [select, setSelect] = useState(false)
  const [delet, setDelet] = useState<number[]>([])

  const width = useResize(1025)

  const secTest = (item: number) => {
    setDelet([...delet, item])
  }

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Visual Operations</title>
      </Head>

      <div className={s.container}>
        <div className={s.button_wrapper}>
          <BackButton />
        </div>

        <div className={s.page_content}>
          <Tabs
            labels={[
              `Active Images (${images.length})`,
              `Rejected Images (${images.length})`,
            ]}
            variant={width > 1024 ? "no_border" : "spaces"}
            values={[
              <>
                <div className={s.toolbar}>
                  <div className={s.search}>
                    <Icon type="search" className={s.searchIcon} />
                    <Input
                      variant="default"
                      value={inputValue}
                      setValue={setInputValue}
                      placeholder="Search any product..."
                    />
                  </div>

                  <div className={s.button_container}>
                    <div className={s.buttons}>
                      <Button
                        onClick={() => setSelect(!select)}
                        className={s.button}
                        variant="text"
                      >
                        Select All and Downloand
                      </Button>
                      <Button
                        onClick={() => setSelect(!select)}
                        className={s.button}
                        variant="text"
                      >
                        Select All and Delete
                      </Button>
                      <Button className={s.button} variant="text">
                        Delete Selected ({delet.length})
                      </Button>
                    </div>
                  </div>

                  <Button className={s.button_excel} iconLeft="download">
                    Excel Download
                  </Button>
                </div>
                <div className={s.content}>
                  <div className={s.gallery}>
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
                  <div className={s.file_upload}>
                    <h1>
                      Select New Image or
                      <br /> Drag
                    </h1>
                    <div className={s.select_input}>
                      <FileUpload title="(JPG, JPEG, PNG, Minimum 600x800)" />
                    </div>
                    <p>The image you upload must be in JPEG or PNG format</p>
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
                <div className={s.toolbar}>
                  <div className={s.search}>
                    <Icon type="search" className={s.searchIcon} />
                    <Input
                      variant="default"
                      value={inputValue}
                      setValue={setInputValue}
                      placeholder="Search any product..."
                    />
                  </div>

                  <div className={s.buttons_rejected}>
                    <Button className={s.button} variant="text">
                      Select All and Restore
                    </Button>
                    <Button className={s.button} variant="text">
                      Restore the selected ()
                    </Button>
                  </div>
                </div>
                <div className={s.content_rejected}>
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
              </>,
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default VisualOperations
