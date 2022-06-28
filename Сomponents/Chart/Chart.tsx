import React from "react"
import { PieChart } from "react-minimal-pie-chart"

import s from "./chart.module.scss"

export interface ChartDataProps {
  caption: string
  data: {
    id: number | string
    title: string
    value: number
    num: string
    color: string
  }[]
}

const Chart: React.FC<ChartDataProps> = ({ caption, data }) => (
  <div className={s.wrapper}>
    <div className={s.pie_item}>
      <h2>{caption}</h2>
      <PieChart
        data={data}
        center={[100, 70]}
        segmentsShift={(index) => (index = 6)}
        viewBoxSize={[200, 200]}
      />

      <div className={s.content}>
        {data
          ? data.map((item, index) => (
              <div key={index}>
                <div className={s.info}>
                  <div
                    className={s.box}
                    style={{ backgroundColor: item.color }}
                  />
                  <div className={s.info_inner}>
                    <div className={s.title}>{item.title}</div>
                    <div className={s.num}>{item.num}</div>
                  </div>
                </div>
              </div>
            ))
          : []}
      </div>
    </div>
  </div>
)

export default Chart
