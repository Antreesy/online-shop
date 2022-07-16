import { useState } from "react"
import { NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

import Head from "next/head"
import { BackButton } from "Сomponents"
import { Button, Tabs, Input, Icon, SelectProduct, ImageUpload } from "UI"

import useResize from "shared/hooks/useResize"
import { images } from "shared/constants/ImageSelectProduct"

import s from "styles/pages/visual-operations.module.scss"

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "app",
        "common",
        "header",
        "footer",
        "visualOperations",
      ])),
    },
  }
}

const VisualOperations: NextPage = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [select, setSelect] = useState(false)
  const [delet, setDelet] = useState<number[]>([])
  const width = useResize()
  const { t } = useTranslation(["visualOperations", "common"])

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
            className={s.tabs}
            labels={[
              t("activeImages", { number: images.length }),
              t("rejectedImages", { number: images.length }),
            ]}
            variant={width > 1024 ? "no_border" : "spaces"}
            values={[
              <>
                <div className={s.toolbar}>
                  <div className={s.search}>
                    <Icon type="search" className={s.searchIcon} />
                    <Input
                      inputClassName={s.input}
                      variant="default"
                      value={inputValue}
                      setValue={setInputValue}
                      placeholder={t("searchAnyProduct")}
                    />
                  </div>

                  <div className={s.button_container}>
                    <Button
                      onClick={() => setSelect(!select)}
                      className={s.button_text}
                      variant="text"
                    >
                      {t("selectAllAndDownload")}
                    </Button>
                    <Button
                      onClick={() => setSelect(!select)}
                      className={s.button_text}
                      variant="text"
                    >
                      {t("selectAllAndDelete")}
                    </Button>
                    <Button className={s.button_text} variant="text">
                      {t("delete", { number: delet.length })}
                    </Button>
                  </div>

                  <Button className={s.button_excel} iconLeft="download">
                    {t("excelDownload")}
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
                    <ImageUpload />
                  </div>
                </div>
              </>,

              <>
                <div className={s.toolbar}>
                  <div className={s.search}>
                    <Icon type="search" className={s.searchIcon} />
                    <Input
                      inputClassName={s.input}
                      variant="default"
                      value={inputValue}
                      setValue={setInputValue}
                      placeholder={t("searchAnyProduct")}
                    />
                  </div>

                  <div className={s.buttons_rejected}>
                    <Button className={s.button} variant="text">
                      {t("allRestore")}
                    </Button>
                    <Button className={s.button} variant="text">
                      {t("restore")}
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
