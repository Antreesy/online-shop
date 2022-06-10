import { ProductDetail } from "Сomponents/ProductDetail"

const ProductInfo = () => {
  return (
    <ProductDetail
      title="Prada"
      subtitle="Black long sleeve men’s jacket"
      description="Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu sit amet, consectet lorem ipsum dolor"
      price={{
        oldPrice: 2030,
        price: 2030,
        type: "sale",
      }}
    />
  )
}

export default ProductInfo
