import { useState } from "react"
import cn from "classnames"

import { Icon, Input, Select } from "UI"
import { SelectItem } from "UI/Select/Select"

import s from "./toolbar.module.scss"

interface ToolbarProps {
  values: SelectItem[]
  className?: string
}

const Toolbar: React.FC<ToolbarProps> = (props) => {
  const { values, className } = props

  const [inputValue, setInputValue] = useState<string>("")

  return (
    <div className={cn(s.toolbar, className)}>
      <div className={s.search}>
        <Icon type="search" className={s.searchIcon} />
        <Input
          variant="black_outline"
          value={inputValue}
          setValue={setInputValue}
          placeholder="Search"
        />
      </div>

      <Select
        selectClassName={s.select}
        iconClassName={s.selectIcon}
        values={values}
        placeholder={"Filter"}
      />
    </div>
  )
}

export default Toolbar
