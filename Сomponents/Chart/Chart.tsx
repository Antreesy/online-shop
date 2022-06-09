import React from "react"
import { PieChart } from "react-minimal-pie-chart"

import s from "./chart.module.scss"

const data = [
  { id: 1, title: "Woman", value: 75, num: "%75", color: "#c080e8" },
  { id: 2, title: "Man", value: 25, num: "%25", color: " #e88c80" },
]
const data2 = [
  { id: 1, title: "20-30", value: 65, num: "%65", color: "#e88c80" },
  { id: 2, title: "30-40", value: 25, num: "%25", color: "#e880ac" },
  { id: 3, title: "40-50", value: 10, num: "%10", color: "#c080e8" },
]

const Chart = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.pieItem}>
          <h2>Gender</h2>
          <PieChart
            data={data}
            center={[100, 70]}
            segmentsShift={(index) => (index = 6)}
            viewBoxSize={[200, 200]}
          />

          <div className={s.content}>
            {data.map((item) => (
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
            ))}
          </div>
        </div>
      </div>

      <div className={s.wrapper}>
        <div className={s.pieItem}>
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
            {data2.map((item) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chart
