import React from "react"
import { PieChart } from "react-minimal-pie-chart"
import { data, data2 } from "shared/constants/charts"

import s from "./chart.module.scss"

const Chart = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.pie_item}>
          <h2>Gender</h2>
          <PieChart
            data={data}
            center={[100, 70]}
            segmentsShift={(index) => (index = 6)}
            viewBoxSize={[200, 200]}
          />

          <div className={s.content}>
            {data
              ? data.map((item) => (
                  <div key={item.value}>
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

      <div className={s.wrapper}>
        <div className={s.pie_item}>
          <h2>Age Range</h2>
          <div className={s.rotate}>
            <PieChart
              data={data2}
              center={[75, 85]}
              segmentsShift={(index) => (index = 6)}
              viewBoxSize={[200, 200]}
            />
          </div>

          <div className={s.content}>
            {data2
              ? data2.map((item) => (
                  <div key={item.value}>
                    <div className={s.info}>
                      <div
                        className={s.box}
                        style={{ backgroundColor: item.color }}
                      />
                      <span className={s.title}>{item.title}</span>
                      <span className={s.num}>{item.num}</span>
                    </div>
                  </div>
                ))
              : []}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chart
