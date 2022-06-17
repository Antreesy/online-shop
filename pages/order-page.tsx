import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useState } from "react"

import { Card } from "@mui/material"
import { AddressCard, AddressForm, CardForm, OrderSummary } from "Сomponents"
import { AddButton, CreditCard, CheckboxGroup, Button } from "UI"

import { creditcardsData } from "shared/constants/creditcardsData"
import { addresses, billingAddress } from "shared/constants/orderPage"

import s from "styles/pages/orderPage.module.scss"
import { useTranslation } from "next-i18next"

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "app",
        "profile",
        "header",
        "footer",
        "sidebar",
      ])),
    },
  }
}

const OrderPage: NextPage = () => {
  const [value, setValue] = useState<boolean>(false)
  const [adrValue, setAddAddress] = useState<boolean>(false)
  const [cardValue, setAddCard] = useState<boolean>(false)
  const { t } = useTranslation("address")

  const handleBillingChecked = (id: number) => {
    setValue(!value)
    // push id to the store billing for user
  }

  const addNewAddress = () => {
    setAddAddress(!adrValue)
  }

  const addNewCard = () => {
    setAddCard(!cardValue)
  }

  const closeAddCardOption = () => {
    setAddCard(!cardValue)
  }

  const cancelForm = () => {
    setAddAddress(false)
  }

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Account</title>
      </Head>
      <div className={s.content}>
        <div className={s.main}>
          <div className={s.order}>
            <section className={s.order_delivery}>
              <h3>Delivery Information</h3>
              <AddButton
                title="Add New Address"
                large={false}
                onClick={addNewAddress}
              />

              {adrValue ? (
                <div className={s.form_wrapper}>
                  <h3>Delivery address</h3>
                  <AddressForm onClose={() => setAddAddress(false)} />

                  <Button
                    onClick={cancelForm}
                    className={s.save_btn}
                    variant="outlined"
                  >
                    {t("Cancel")}
                  </Button>

                  <div className={s.address_card_checkbox}>
                    <CheckboxGroup
                      rounded
                      labels={["My billing address is the same"]}
                    />
                  </div>
                </div>
              ) : null}

              <div className={s.address_cards_wrapper}>
                <div>
                  <h3>Delivery address</h3>

                  {!adrValue &&
                    addresses.map((el, i) => (
                      <div className={s.address_card} key={i}>
                        <AddressCard
                          title={el.title}
                          text={
                            <span className={s.address_card_text}>
                              {el.text.street} <br /> {el.text.number} <br />{" "}
                              {el.text.contacts}{" "}
                            </span>
                          }
                        />

                        <div className={s.address_card_checkbox}>
                          <CheckboxGroup
                            rounded
                            labels={["My billing address is the same"]}
                            value={value}
                            setValue={() => handleBillingChecked(el.id)}
                          />
                        </div>
                      </div>
                    ))}
                </div>

                <div>
                  <h3>Billing address</h3>
                  {value ? (
                    <>
                      {billingAddress.map((el, i) => (
                        <div className={s.address_card} key={i + 100}>
                          <AddressCard
                            title={el.title}
                            text={
                              <span className={s.address_card_text}>
                                {el.text.street} <br /> {el.text.number} <br />{" "}
                                {el.text.contacts}{" "}
                              </span>
                            }
                          />
                        </div>
                      ))}
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </section>
          </div>

          <section className={s.order_payment}>
            <h3>Payment methods</h3>
            {!cardValue ? (
              <AddButton
                title="Add New Address"
                large={false}
                onClick={addNewCard}
              />
            ) : null}

            {cardValue ? (
              <div>
                <CardForm />
              </div>
            ) : null}

            <div className={s.payment_cards_wrapper}>
              <Card className={s.cards}>
                {creditcardsData.map((card) => (
                  <CreditCard
                    size={card.size}
                    key={card.id}
                    isHidden={card.isHidden}
                    isColored={card.isColored}
                    id={card.id}
                    cardNumber={card.cardNumber}
                    cardHolder={card.cardHolder}
                    expireDate={card.expireDate}
                    onDelete={card.onDelete}
                  />
                ))}
              </Card>
            </div>

            <div className={s.payment_card_checkbox}>
              <CheckboxGroup
                rounded
                labels={["Pay with my saved cards"]}
                value={!cardValue}
                setValue={closeAddCardOption}
              />
              <CheckboxGroup rounded labels={["Pay with New Card"]} />
            </div>
          </section>
        </div>

        <div className={s.order_summary}>
          <OrderSummary subtotal={123} discount={12} shipping={10} kdv={10} />
        </div>
      </div>
    </>
  )
}

export default OrderPage
