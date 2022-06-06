import React, { FC } from "react"
import styles from "./BrandButton.module.scss"
import cn from "classnames"
import { BrandButtonProps } from "./BrandButton.props"

import { Icon } from "../../UI"
import { useRouter } from "next/router"

const BrandButton: FC<BrandButtonProps> = (props): JSX.Element => {
  const router = useRouter()
  const {
    icon,
    h3_title = "Some text",
    h3_value = 0,
    last_day = 0,
    delays = 0,
    appearance = "white",
    size = "small",
    smallBtnText = "Total something",
    smallBtnNumber = 0,
  } = props
  return (
    <div
      onClick={() => router.push("/")}
      className={cn(
        styles.main,
        {
          [styles.purple]: appearance == "purple",
          [styles.white]: appearance == "white",
        },
        {
          [styles.bigBtn]: size == "big",
          [styles.smallBtn]: size == "small",
        },
      )}
    >
      {size == "big" ? (
        <div className={styles.insideBig}>
          <div className={styles.squareBig}>
            <Icon type={icon} className={styles.squareIconBig} />
          </div>
          <div className={styles.rectangleBig}>
            <h3>
              {h3_title}: {h3_value}
            </h3>
            <div className={styles.smallText}>
              <p>
                Last Day: <b>{last_day}</b>
              </p>
              <p>
                Delays: <b>{delays}</b>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.insideSmall}>
          <div className={styles.squareSmall}>
            <Icon type={icon} className={styles.squareIcon} />
          </div>
          <div className={styles.totalNumber}>{smallBtnNumber}</div>
          <div className={styles.totalText}>{smallBtnText}</div>
          <div className={styles.rightImage}>
            <Icon type={icon} className={styles.rightIcon} />
          </div>
        </div>
      )}
    </div>
  )
}

export default BrandButton
