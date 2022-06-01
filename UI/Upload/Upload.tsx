import classNames from "classnames"
import { FC, useRef, useState } from "react"
import { Icon } from "UI/Icon"
import s from "./upload.module.scss"

interface UploadProps {
  title?: string
  className?: string
  formats?: string[]
  maxSize?: number
  minWidth?: number
  minHeight?: number
  filesNumber?: number
}

const Upload: FC<UploadProps> = (props) => {
  const {
    title = "Select or Drag Image",
    formats = ["jpg", "png", "jpeg"],
    maxSize = 10000000,
    filesNumber = 5,
    minWidth = 1920,
    minHeight = 1080,
    className,
  } = props

  const [drag, setDrag] = useState(false)
  const [error, setError] = useState("")
  const fileInputRef: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null)

  const dragLeaveHandler = (e: React.DragEvent) => {
    e.preventDefault()
    setDrag(false)
  }

  const dragOverHandler = (e: React.DragEvent) => {
    e.preventDefault()
    setDrag(true)
  }

  const checkInputImageFormat = (files: File[]) => {
    if (files.length !== filesNumber) {
      setError(`Error number of files it must be ${filesNumber}`)
      return false
    }

    for (let i = 0; i < files.length; i++) {
      if (files[i].size > maxSize) {
        setError(`Error maximum size of file ${maxSize} got ${files[i].size}`)
        return false
      }
    }

    const filesFormats = files.map((file) => {
      return file.type.split("/")[1]
    })
    for (let i = 0; i < files.length; i++) {
      if (!formats.includes(filesFormats[i])) {
        setError(`Error format file it must be ${formats}`)
        return false
      }
    }

    setError("")
    return true
  }

  const checkImageFormatSize = (file: File) => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.src = URL.createObjectURL(file)
      img.addEventListener("load", function () {
        if (minWidth > img.width || minHeight > img.height) {
          setError(
            `Error width or height it must be ${minWidth} x ${minHeight}`,
          )
          resolve(false)
        } else {
          resolve(true)
        }
      })
    })
  }

  const filesHandler = async (e: any) => {
    let files: File[]

    if (drag) {
      e.preventDefault()
      files = [...e.dataTransfer.files]
      setDrag(false)
    } else {
      files = Array.from(fileInputRef.current?.files || [])
    }

    const isCorrectInput: boolean = checkInputImageFormat(files)
    const promises = []
    if (isCorrectInput) {
      for (let i = 0; i < files.length; i++) {
        promises.push(checkImageFormatSize(files[i]))
      }
    }
    Promise.all(promises).then((res) => {
      if (res.every((res) => res)) {
        console.log(files) // files correct
      }
    })
  }

  return (
    <>
      <div
        className={classNames(s.upload, className)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => filesHandler(e)}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          onChange={filesHandler}
          ref={fileInputRef}
          type="file"
          hidden
          multiple
        />
        <Icon type="upload" />
        {title}
        <div className={s.error}>{error}</div>
      </div>
    </>
  )
}

export default Upload
