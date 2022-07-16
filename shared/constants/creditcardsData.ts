import { CreditCardProps } from "UI/CreditCard/CreditCard"

export const creditcardsData: CreditCardProps[] = [
  {
    isHidden: true,
    id: 7346,
    cardNumber: "1234 5678 9012 3456",
    cardHolder: "Alsyn Topkaya",
    expireDate: "01/2024",
    onDelete: () => {
      console.log("delete")
    },
  },
  {
    isHidden: true,
    id: 3274,
    cardNumber: "1234 1234 1234 1234",
    cardHolder: "Ilonsi Customer",
    expireDate: "08/2031",
    onDelete: () => {
      console.log("delete")
    },
  },
  {
    isHidden: true,
    id: 6837,
    cardNumber: "1234 5678 0000 8765",
    cardHolder: "Test Tester",
    expireDate: "11/2029",
    onDelete: () => {
      console.log("delete")
    },
  },
]
