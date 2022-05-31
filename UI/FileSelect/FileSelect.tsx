import React, { useState } from "react"
import s from "./file-select.module.scss"

const FileSelect = () => {
  const [value, setValue] = useState<File>()
  return (
    <div className={s.fileSelect}>
      <input value={value?.name} className={s.input} />
      <input
        className={s.fileInput}
        type={"file"}
        
        onChange={(e) => setValue(e.target.files?.[0])}
      />

      <button className={s.button}>Select</button>
    </div>
  )
}

export default FileSelect
