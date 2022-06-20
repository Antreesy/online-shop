import { useState } from "react"
import { NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

import Head from "next/head"
import { Card } from "@mui/material"
import { AddressCard, AddressForm, CardForm, OrderSummary } from "Сomponents"
import { AddButton, CreditCard, CheckboxGroup, Button } from "UI"

import { creditcardsData } from "shared/constants/creditcardsData"
import { addresses, billingAddress } from "shared/constants/orderPage"

import s from "styles/pages/orderPage.module.scss"

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "app",
        "profile",
        "header",
        "footer",
        "sidebar",
        "modal",
        "product",
        "orderCart",
        "orderAddress"
      ])),
    },
  }
}

const OrderPage: NextPage = () => {
  const [showBilling, setShowBilling] = useState<boolean>(false)
  const [showAddressForm, setShowAddressForm] = useState<boolean>(false)
  const [showCardForm, setShowCardForm] = useState<boolean>(false)
  const [showSavedCards, setShowSavedCards] = useState<boolean>(true)
  const { t } = useTranslation("orderAddress")

  const toggleBilling = () => {
    setShowBilling((prev) => !prev)
  }

  const toggleAddressForm = () => {
    setShowAddressForm((prev) => !prev)
  }

  const toggleCardForm = () => {
    setShowCardForm((prev) => !prev)
  }

  const toggleSavedCards = () => {
    setShowSavedCards((prev) => !prev)
  }

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Account</title>
      </Head>

      <div className={s.content}>
        <div className={s.main}>
          <section className={s.section_delivery}>
            <h3 className={s.heading}>{t("deliveryInformation")}</h3>
            <AddButton
              color="secondary"
              className={s.add_button}
              large={false}
              onClick={toggleAddressForm}
            />

            {showAddressForm ? (
              <div className={s.form_wrapper}>
                <div className={s.address_header}>
                  <h3 className={s.heading}>{t("deliveryAddress")}</h3>

                  <CheckboxGroup
                    rounded
                    labels={t("myBillingAddress")}
                    value={showBilling}
                    setValue={toggleBilling}
                  />
                </div>

                <AddressForm onClose={() => setShowAddressForm(false)} />

                <Button
                  onClick={toggleAddressForm}
                  className={s.save_btn}
                  variant="outlined"
                >
                  {t("Cancel")}
                </Button>
              </div>
            ) : (
              <div className={s.address_cards_wrapper}>
                <div>
                  <h3 className={s.heading}>Delivery address</h3>

                  {!showAddressForm &&
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
                            value={showBilling}
                            setValue={toggleBilling}
                          />
                        </div>
                      </div>
                    ))}
                </div>

                {showBilling ? (
                  <div>
                    <h3 className={s.heading}>Billing address</h3>
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
                  </div>
                ) : null}
              </div>
            )}
          </section>

          <section className={s.section_payment}>
            <div className={s.payment_header}>
              <h3 className={s.heading}>Payment methods</h3>
              <CheckboxGroup
                rounded
                labels={["Pay with my saved cards"]}
                value={showSavedCards}
                setValue={toggleSavedCards}
              />
              <CheckboxGroup
                rounded
                labels={["Pay with New Card"]}
                value={showCardForm}
                setValue={toggleCardForm}
              />
            </div>

            {showSavedCards ? (
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
            ) : (
              <>
                <AddButton
                  color="secondary"
                  className={s.add_button}
                  title="Add Card"
                  large={false}
                  onClick={toggleCardForm}
                />
                {showCardForm && <CardForm />}
              </>
            )}
          </section>
        </div>

        <div className={s.aside}>
          <OrderSummary subtotal={123} discount={12} shipping={10} kdv={10} />
        </div>
      </div>
    </>
  )
}

export default OrderPage
