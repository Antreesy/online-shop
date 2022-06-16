import { Button } from "UI"

import s from "styles/pages/Products.module.scss"

const ProductReturn: React.FC = () => {
  return (
    <div className={s.productsReturn}>
      <Button
        icon
        iconLeft="arrow_left"
        variant="text"
        className={s.productsReturnBtn}
      />
      <span>Return to Your Shop</span>
    </div>
  )
}

export default ProductReturn
