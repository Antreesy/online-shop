import { CreditCardProps } from "UI/CreditCard/CreditCard"

export const creditcardsData: CreditCardProps[] = [
  {
    size: 164,
    isHidden: true,
    isColored: false,
    id: 7346,
    cardNumber: "1234 8547 7294 3959",
    cardHolder: "Test Test",
    expireDate: "01/2024",
    onDelete: () => {
      console.log("test")
    },
  },
  {
    size: 164,
    isHidden: true,
    isColored: true,
    id: 3274,
    cardNumber: "1234 8547 7294 3959",
    cardHolder: "Test Test",
    expireDate: "01/2023",
    onDelete: () => {
      console.log("test")
    },
  },
  {
    size: 164,
    isHidden: true,
    isColored: false,
    id: 6837,
    cardNumber: "1234 8547 7294 3959",
    cardHolder: "Test Test",
    expireDate: "01/2023",
    onDelete: () => {
      console.log("test")
    },
  },
]
