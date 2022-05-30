import classNames from "classnames"
import React, { FC, useRef, useState } from "react"
import { Icon } from "UI/Icon"
import s from "./upload.module.scss"

interface IUpload {
  title: string
  className?: string
  formats?: string[]
  maxSize?: number
  filesNumber?: number
}

const Upload: FC<IUpload> = (props) => {
  const {
    title,
    className,
    formats = ["jpg", "png", "jpeg"],
    maxSize = 10000000,
    filesNumber = 1,
  } = props

  const [drag, setDrag] = useState(false)
  const [error, setError] = useState("")
  const fileInputRef: any = useRef<HTMLInputElement>()

  const dragLeaveHandler = (e: React.DragEvent) => {
    e.preventDefault()
    setDrag(false)
  }

  const dragOverHandler = (e: React.DragEvent) => {
    e.preventDefault()
    setDrag(true)
  }

  const checkInputFiles = (files: File[]) => {
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

  const filesHandler = (e: any) => {
    let files

    if (drag) {
      e.preventDefault()
      files = [...e.dataTransfer.files]
      setDrag(false)
    } else {
      files = Array.from(fileInputRef.current.files)
    }

    const isCorrectInput: boolean = checkInputFiles(files)
    if (isCorrectInput) {
      console.log(files) //files correct
    }
  }

  return (
    <>
      <div
        className={classNames(s.upload, className)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => filesHandler(e)}
        onClick={() => fileInputRef.current.click()}
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
      </div>
      <div className={s.error}>{error}</div>
    </>
  )
}

export default Upload
