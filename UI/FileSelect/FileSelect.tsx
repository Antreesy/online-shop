import s from "./fileSelect.module.scss"

interface FileSelectProps {
  value: File | null
  setValue: (file: File) => void
}

const FileSelect: React.FC<FileSelectProps> = (props) => {
  const { value, setValue } = props
  return (
    <div className={s.file_select}>
      <input value={value?.name} className={s.input} />
      <input
        className={s.file_input}
        type={"file"}
        onChange={(e) => e.target.files?.[0] && setValue(e.target.files?.[0])}
      />

      <button className={s.button}>Select</button>
    </div>
  )
}

export default FileSelect
