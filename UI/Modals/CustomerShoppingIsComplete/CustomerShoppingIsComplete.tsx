    import React from "react"
    import s from "./CustomerShoppingIsComplete.module.scss"
    import { Button } from "../../Button"

    interface CustomerShoppingIsComplete {
      labels: {
        tittle: string
        content: string
      }
    }

    export const CustomerShoppingIsComplete: React.FC<
      CustomerShoppingIsComplete
    > = ({ labels }) => {
      return (
        <>
          <div className={s.tittle}>
            <p>{labels.tittle}</p>
          </div>
          <div className={s.content}>
            <p>{labels.content}</p>
          </div>
          <div className={s.button}>
            <Button className={s.continue}>Continue Shopping</Button>
            <Button className={s.close}>Close</Button>
          </div>
        </>
      )
    }
