import { useRouter } from "next/router"
import cn from "classnames"

import { Icon } from "UI"

import { BrandButtonProps } from "./BrandButton.props"

import s from "./BrandButton.module.scss"

const BrandButton: React.FC<BrandButtonProps> = (props): JSX.Element => {
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
        s.main,
        {
          [s.purple]: appearance == "purple",
          [s.white]: appearance == "white",
        },
        {
          [s.bigBtn]: size == "big",
          [s.smallBtn]: size == "small",
        },
      )}
    >
      {size == "big" ? (
        <div className={s.insideBig}>
          <div className={s.squareBig}>
            <Icon type={icon} className={s.squareIconBig} />
          </div>
          <div className={s.rectangleBig}>
            <h3>
              {h3_title}: {h3_value}
            </h3>
            <div className={s.smallText}>
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
        <div className={s.insideSmall}>
          <div className={s.squareSmall}>
            <Icon type={icon} className={s.squareIcon} />
          </div>
          <div className={s.totalNumber}>{smallBtnNumber}</div>
          <div className={s.totalText}>{smallBtnText}</div>
          <div className={s.rightImage}>
            <Icon type={icon} className={s.rightIcon} />
          </div>
        </div>
      )}
    </div>
  )
}

export default BrandButton
