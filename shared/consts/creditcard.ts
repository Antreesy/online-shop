export const creditcardConsts = {
  ASPECT_RATIO: 1.85,
  MIN_HEIGHT: 200,
  BASE_CARD_NUMBER_INDEX: 16,
  BASE_EXPIRENUMBER_INDEX: 22,
  BASE_DELETE_BTN_INDEX: 10,
  WIDTH_DIVISOR: 6,
  HEIGHT_DIVISOR: 5,
  CARD_MARGIN_RATIO: 1.5,
  HIDDEN_MASK: "**** **** **** ****",
} as const

export type creditcardConstsType = typeof creditcardConsts
export type creditcardConstsValue =
  creditcardConstsType[keyof creditcardConstsType]
