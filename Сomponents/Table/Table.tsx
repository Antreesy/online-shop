import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import s from "./Table.module.scss"
import { Icon, Pagination, Select } from "../../UI"
import arrow from "../../public/assets/icons/arrow_table.svg"
import Image from "next/image"
import cn from "classnames"

interface HeaderItem {
  name: string
  isSort: boolean
  align?: "center"
}

interface innerRow {
  value: string | number | React.ReactNode
  align?: "center"
}

interface TableProps {
  headers: HeaderItem[]
  innerRows: Array<Array<innerRow>>
}

export const CustomTable: React.FC<TableProps> = ({
  headers,
  innerRows = [],
}) => {
  const [rows, setRows] = React.useState(innerRows)
  const [rowsPerPage, setRowsPerPage] = React.useState(3)
  const [page, setPage] = React.useState(1)
  const pages = Math.ceil(rows.length / rowsPerPage)

  function sortCourses(position: number, ascendingSortOrder = true) {
    const sortedData = [...rows]

    const compareNum = (
      firstValue: Array<Array<innerRow>>,
      secondValue: Array<Array<innerRow>>,
    ) => {
      if (
        ascendingSortOrder
          ? firstValue[position].value > secondValue[position].value
          : firstValue[position].value < secondValue[position].value
      ) {
        return 1
      } else if (
        ascendingSortOrder
          ? secondValue[position].value > firstValue[position].value
          : secondValue[position].value < firstValue[position].value
      ) {
        return -1
      } else {
        return 0
      }
    }

    sortedData.sort(compareNum)
    setPage(1)
    setRows(sortedData)
  }

  const splitRows = rows.slice(
    (page - 1) * rowsPerPage,
    (page - 1) * rowsPerPage + rowsPerPage,
  )

  React.useEffect(() => {
    setPage(1)
    console.log("Chaned")
  }, [rowsPerPage])

  console.log("page", page)
  return (
    <div>
      <div className={s.table__control}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginRight: "50px",
          }}
        >
          <span>On Every Page</span>
          <Select
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
        <Pagination pagesCount={pages} value={page} onChange={setPage} />
      </div>
      <TableContainer component={Paper}>
        <Table className={s.table} aria-label="simple table">
          <TableHead className={s.table__header}>
            <TableRow>
              {headers.map((el, index) => (
                <TableCell className={s.cell}>
                  <div className={cn(s.cell_header, el.align ? s.center : "")}>
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
                            className={s.reversedArrow}
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
              {splitRows.map((row) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {row.map((el) => (
                    <TableCell
                      align={el.align ? "center" : ""}
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
      </TableContainer>
    </div>
  )
}
