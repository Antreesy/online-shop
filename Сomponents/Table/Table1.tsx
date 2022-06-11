import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import s from "./Table.module.scss"
import {Icon} from "../../UI";


interface Table1Props{
    headers: {name: string, isSort: boolean, align?: "center"}[]
    innerRows: Array<Array<{value: string | number| React.ReactNode, align?: "center"}>>
}

export const Table1: React.FC<Table1Props> = ({headers, innerRows}) => {

    const [rows, setRows] = React.useState(innerRows)

    function sortCourses(position: number, ascendingSortOrder: boolean = true) {

        let sortedData = [...rows]

        const compareNum = (firstValue: any, secondValue: any) => {

            if (ascendingSortOrder ? firstValue[position].value > secondValue[position].value : firstValue[position].value < secondValue[position].value) {
                return 1
            } else if (ascendingSortOrder ? secondValue[position].value > firstValue[position].value : secondValue[position].value < firstValue[position].value) {
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
            <Table className={s.table} sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead className={s.table__header}>
                    <TableRow>
                        {headers.map((el, index) =>   <TableCell align={el.align ? "center" : ""} className={s.cell}>{el.name} {el.isSort && <><span onClick={() => {sortCourses(index, false)}}>↓</span><span onClick={() => {sortCourses(index)}}>↑</span></>}</TableCell>)}
                    </TableRow>
                </TableHead>
                {!!rows.length && <TableBody>
                    {rows.map((row) => (
                            <TableRow
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                {row.map((el) => (
                                    <TableCell align={el.align ? "center" : ""} className={s.cell}>{el.value}</TableCell>
                                ))}
                            </TableRow>
                        )
                    )}
                </TableBody>}
            </Table>
            {!rows.length && <div className={s.empty}>
                <div className={s.empty__body}>
                    <div className={s.round}>
                        <Icon type={"data"} color={"white"} />
                    </div>
                    <span>No Data Found</span>
                </div>
            </div>}
        </TableContainer>
    );
}
