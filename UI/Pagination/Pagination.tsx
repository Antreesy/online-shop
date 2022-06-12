import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import cn from "classnames"

import { Pagination, PaginationItem } from "@mui/material"

import s from "./pagination.module.scss"

interface PaginationProps {
  className?: string
  pagesCount: number
  isShort?: boolean
  onChange?: () => void
  value: number
}

const CustomPagination: React.FC<PaginationProps> = (props) => {
  const { className, pagesCount, isShort, onChange, value } = props
  const router = useRouter()

  const [page, setPage] = useState<number>(value)

  const paginationClass = cn(s.pagination_wrapper, className)

  const firstElement = () => <>&lt;&lt;</>
  const previousElement = () => <>&lt;</>
  const nextElement = () => <>&gt;</>
  const lastElement = () => <>&gt;&gt;</>

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
    onChange?.(page)
  }

  useEffect(() => {
    router.push(`${router.pathname}/?page=${page}`)
    console.log("pag")
  }, [page])

  return (
    <div className={paginationClass}>
      {!!pagesCount && (
        <Pagination
          className={s.nav_block}
          count={pagesCount}
          page={page}
          defaultPage={1}
          onChange={handleChange}
          hideNextButton={isShort || page === pagesCount}
          hidePrevButton={isShort || page === 1}
          showFirstButton={!isShort && page !== 1}
          showLastButton={!isShort && page !== pagesCount}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              classes={{
                root: isShort ? s.item_short : s.item,
                selected: s.active,
              }}
              components={{
                first: firstElement,
                last: lastElement,
                next: nextElement,
                previous: previousElement,
              }}
            />
          )}
        />
      )}
    </div>
  )
}

export default CustomPagination
