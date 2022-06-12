import { CustomTable } from "../Сomponents/Table/Table"
import Image from "next/image"
import dress from "../public/assets/img/Knitted_dress.png"
import { Icon } from "../UI"
import * as React from "react"

const Tables = () => {
  const headers1 = [
    { name: "Category", isSort: false },
    { name: "Net Sales", isSort: true },
    { name: "Net Turnover", isSort: true },
    { name: "Average Selling Price", isSort: true },
  ]

  const innerRows1 = [
    [{ value: "clothes" }, { value: 5435 }, { value: 1232 }, { value: 45658 }],
    [{ value: "clothes" }, { value: 2 }, { value: 3123 }, { value: 67886 }],
    [{ value: "clothes" }, { value: 3123 }, { value: 3111 }, { value: 3454 }],
    [{ value: "clothes" }, { value: 117 }, { value: 6688 }, { value: 5346 }],
  ]

  const headers2 = [
    { name: "Production Information", isSort: false },
    { name: "Net Sales", isSort: true },
    { name: "Net Turnover", isSort: true },
    { name: "Average Selling Price", isSort: true },
    { name: "Current Turnover", isSort: false },
    { name: "Day", isSort: false },
  ]

  const innerRows2 = [] as Array<
    Array<{ value: string | number | React.ReactNode; align?: "center" }>
  >

  const headers3 = [
    { name: "Product Image", isSort: false, align: "center" },
    { name: "Product Name", isSort: false },
    { name: "Product Code", isSort: false },
    { name: "Brand", isSort: false },
    { name: "Commission", isSort: false },
    { name: "Price", isSort: false },
    { name: "Stock", isSort: false },
    { name: "Status", isSort: false },
    { name: "Detail", isSort: false },
  ]

  const innerRows3 = [
    [
      {
        value: (
          <div>
            <Image src={dress} width={46} height={83} />
          </div>
        ),
        align: "center",
      },
      { value: "Black Printed Long Sleeve Midi Dress" },
      { value: "BFNSKBGDHKSF" },
      { value: "Yves Saint L" },
      { value: "%25" },
      { value: "$213" },
      { value: 32132 },
      { value: "Not available" },
      {
        value: <Icon type={"exclamation"} />,
        align: "center",
      },
    ],
  ]

  const headers4 = [
    { name: "Order No", isSort: false, align: "center" },
    { name: "Order Date", isSort: false },
    { name: "Name", isSort: false },
  ]

  return (
    <div style={{ padding: "50px" }}>
      <div style={{ marginBottom: "50px" }}>
        <CustomTable headers={headers1} innerRows={innerRows1} />
      </div>
      {/*<div style={{ width: "1279px", marginBottom: "50px" }}>*/}
      {/*  <CustomTable headers={headers2} innerRows={innerRows2} />*/}
      {/*</div>*/}
      {/*<div style={{ width: "1279px", marginBottom: "50px" }}>*/}
      {/*  <CustomTable headers={headers3} innerRows={innerRows3} />*/}
      {/*</div>*/}
      {/*<div style={{ marginBottom: "50px" }}>*/}
      {/*  <CustomTable headers={headers4} />*/}
      {/*</div>*/}
    </div>
  )
}

export default Tables
