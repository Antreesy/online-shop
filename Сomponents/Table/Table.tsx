import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import s from "./Table.module.scss"
import { Icon } from "../../UI"
import arrow from "../../public/assets/icons/arrow_table.svg"
import Image from "next/image"

interface TableProps {
  headers: { name: string; isSort: boolean; align?: "center" }[]
  innerRows: Array<
    Array<{ value: string | number | React.ReactNode; align?: "center" }>
  >
}

export const CustomTable: React.FC<TableProps> = ({ headers, innerRows }) => {
  const [rows, setRows] = React.useState(innerRows)

  function sortCourses(position: number, ascendingSortOrder = true) {
    const sortedData = [...rows]

    const compareNum = (firstValue: any, secondValue: any) => {
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

    setRows(sortedData)
  }

  console.log(rows)

  return (
    <TableContainer component={Paper}>
      <Table
        className={s.table}
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead className={s.table__header}>
          <TableRow>
            {headers.map((el, index) => (
              <TableCell align={el.align ? "center" : ""} className={s.cell}>
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
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        {!!rows.length && (
          <TableBody>
            {rows.map((row) => (
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
  )
}
