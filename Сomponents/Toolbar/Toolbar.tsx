import { useState } from "react"
import cn from "classnames"

import { Icon, Input, Select } from "UI"
import { SelectItem } from "shared/interfaces/selectProps"

import s from "./toolbar.module.scss"

interface ToolbarProps {
  values: SelectItem[]
  className?: string
  onChangeSearch?: () => void
  onChangeSelect?: () => void
}

const Toolbar: React.FC<ToolbarProps> = (props) => {
  const { values, className, onChangeSearch, onChangeSelect } = props

  const [inputValue, setInputValue] = useState<string>("")

  return (
    <div className={cn(s.toolbar, className)}>
      <div className={s.search}>
        <Icon type="search" className={s.search_icon} />
        <Input
          variant="black_outline"
          value={inputValue}
          setValue={setInputValue}
          placeholder="Search"
          onChange={onChangeSearch}
        />
      </div>

      <Select
        className={s.select_wrapper}
        selectClassName={s.select}
        iconClassName={s.select_icon}
        values={values}
        placeholder={"Filter"}
        onChange={onChangeSelect}
      />
    </div>
  )
}

export default Toolbar
