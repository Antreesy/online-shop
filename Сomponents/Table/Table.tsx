import React, { useState, useEffect } from "react"
import cn from "classnames"

import SimpleBar from "simplebar-react"
import Image from "next/image"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { Icon, Pagination, Select } from "UI"

import arrow from "public/assets/icons/arrow_table.svg"

import s from "./table.module.scss"

interface HeaderItem {
  name: string
  isSort?: boolean
  alignCenter?: boolean
}

type InnerCell = {
  value: React.ReactNode
  alignCenter?: boolean
}

type InnerRow = InnerCell[]

interface TableProps {
  headers: HeaderItem[]
  innerRows: InnerRow[]
  isControl?: boolean
}

const CustomTable: React.FC<TableProps> = ({
  headers,
  innerRows = [],
  isControl = false,
}) => {
  const [rows, setRows] = useState(innerRows)
  const [rowsPerPage, setRowsPerPage] = useState<string | number>(3)
  const [page, setPage] = useState(1)
  const pages = Math.ceil(rows.length / Number(rowsPerPage))

  function sortCourses(position: number, ascendingSortOrder = true) {
    const sortedData = [...rows]

    const compareNum = (firstValue: InnerRow, secondValue: InnerRow) => {
      return ascendingSortOrder
        ? Number(firstValue[position].value) -
            Number(secondValue[position].value)
        : Number(firstValue[position].value) -
            Number(secondValue[position].value)
    }
    sortedData.sort(compareNum)
    setPage(1)
    setRows(
      rows[0][position] === sortedData[0][position]
        ? sortedData.reverse()
        : sortedData,
    )
  }

  const splitRows = rows.slice(
    (page - 1) * Number(rowsPerPage),
    (page - 1) * Number(rowsPerPage) + Number(rowsPerPage),
  )

  useEffect(() => {
    setPage(1)
  }, [rowsPerPage])

  return (
    <div>
      {isControl && (
        <div className={s.table__control}>
          <Select
            className={s.date_select}
            values={[]}
            placeholder="Order Date"
          />
          <Select
            className={s.sort_select}
            values={[]}
            placeholder="Old to New"
          />
          <div className={s.page_select}>
            <span className={s.page_select_caption}>On Every Page</span>
            <Select
              className={s.page_select_control}
              initValue={rowsPerPage}
              onChange={setRowsPerPage}
              values={[
                { title: "3 Product", value: 3 },
                { title: "10 Product", value: 10 },
                { title: "20 Product", value: 20 },
                { title: "50 Product", value: 50 },
              ]}
            />
          </div>
          <Pagination
            className={s.pagination_desktop}
            pagesCount={pages}
            value={page}
            onChange={setPage}
          />
        </div>
      )}
      <SimpleBar className={s.scrollbar} autoHide={false}>
        <Table className={s.table} aria-label="simple table">
          <TableHead className={s.table__header}>
            <TableRow>
              {headers.map((el, index) => (
                <TableCell key={index} className={s.cell}>
                  <div
                    className={cn(s.cell_header, {
                      [s.center]: el.alignCenter,
                    })}
                  >
                    {el.name}{" "}
                    {el.isSort && (
                      <div className={s.arrows__container}>
                        <div className={s.arrows}>
                          <Image
                            src={arrow}
                            onClick={() => {
                              sortCourses(index, false)
                            }}
                          />
                          <Image
                            src={arrow}
                            onClick={() => {
                              sortCourses(index)
                            }}
                            className={s.arrow_down}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {!!rows.length && (
            <TableBody>
              {splitRows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td": {
                      borderBottom: "1px solid $color-grey-de",
                    },
                    "&:nth-child(odd)": { backgroundColor: "#FAFAFA" },
                  }}
                >
                  {row.map((el, index) => (
                    <TableCell
                      key={index}
                      align={el.alignCenter ? "center" : undefined}
                      className={s.cell}
                    >
                      {el.value}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
        {!rows.length && (
          <div className={s.empty}>
            <div className={s.empty__body}>
              <div className={s.round}>
                <Icon type={"data"} color={"white"} />
              </div>
              <span>No Data Found</span>
            </div>
          </div>
        )}
      </SimpleBar>
      <Pagination
        className={s.pagination_mobile}
        pagesCount={pages}
        value={page}
        onChange={setPage}
      />
    </div>
  )
}

export default CustomTable
