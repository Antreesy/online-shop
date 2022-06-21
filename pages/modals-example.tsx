import { useState } from "react"
import { NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { Button, ModalWindow } from "UI"

import s from "styles/pages/components-example.module.scss"

import {
  AccountCreated,
  CustomerPictureSuccess,
  CustomerCardDeleted,
  CustomerProductAdded,
  CustomerShoppingCompleted,
  CustomerProfileUpdated,
  CustomerPictureUpdated,
  CustomerPasswordChange,
  CustomerPasswordSuccess,
} from "UI/Modals"

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
      ])),
    },
  }
}

const ModalsExample: NextPage = () => {
  const [accountCreated, setAccountCreated] = useState(false)
  const [customerCardDeleted, setCustomerCardDeleted] = useState(false)
  const [customerShoppingCompleted, setCustomerShoppingCompleted] =
    useState(false)
  const [customerProductAdded, setCustomerProductAdded] = useState(false)
  const [customerProfileUpdated, setCustomerProfileUpdated] = useState(false)

  const [customerPictureUpdated, setCustomerPictureUpdated] = useState(false)
  const [nextPictureModal, setNextPictureModal] = useState(false)

  const [customerPasswordChange, setCustomerPasswordChange] = useState(false)
  const [nextPasswordModal, setNextPasswordModal] = useState(false)

  return (
    <div className={s.container}>
      <div className={s.grid_column}>
        <Button
          onClick={() => setAccountCreated(!accountCreated)}
          className={s.button_purple}
        >
          Account Created
        </Button>
        <ModalWindow
          isOpen={accountCreated}
          onClose={() => setAccountCreated(!accountCreated)}
          iconType="okay"
        >
          <AccountCreated
            title="You are now ready"
            content="We received the request to create a membership. We will get back to you via  e-mail within 24 hours."
          />
        </ModalWindow>

        <Button
          onClick={() => setCustomerCardDeleted(!customerCardDeleted)}
          className={s.button_purple}
        >
          Customer - Card Deleted
        </Button>
        <ModalWindow
          isOpen={customerCardDeleted}
          onClose={() => setCustomerCardDeleted(!customerCardDeleted)}
          iconType="okay"
        >
          <CustomerCardDeleted title="The card has been successfully deleted" />
        </ModalWindow>

        <Button
          onClick={() =>
            setCustomerShoppingCompleted(!customerShoppingCompleted)
          }
          className={s.button_purple}
        >
          Customer - Shopping completed
        </Button>
        <ModalWindow
          isOpen={customerShoppingCompleted}
          onClose={() =>
            setCustomerShoppingCompleted(!customerShoppingCompleted)
          }
          iconType="okay"
        >
          <CustomerShoppingCompleted
            title="Your shopping is complete"
            content="Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu sit amet, consectet lorem"
          />
        </ModalWindow>

        <Button
          onClick={() => setCustomerProductAdded(!customerProductAdded)}
          className={s.button_purple}
        >
          Customer - Product added
        </Button>
        <ModalWindow
          isOpen={customerProductAdded}
          onClose={() => setCustomerProductAdded(!customerProductAdded)}
          iconType="okay"
        >
          <CustomerProductAdded
            title="The product has been added to your store"
            content="Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu sit amet, consectet lorem"
          />
        </ModalWindow>

        <Button
          onClick={() => setCustomerProfileUpdated(!customerProfileUpdated)}
          className={s.button_purple}
        >
          Customer - Profile updated
        </Button>
        <ModalWindow
          isOpen={customerProfileUpdated}
          onClose={() => setCustomerProfileUpdated(!customerProfileUpdated)}
          iconType="okay"
        >
          <CustomerProfileUpdated
            title="Changes Successfully Updated"
            content="Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu sit amet, consectet lorem"
          />
        </ModalWindow>

        <Button
          onClick={() => setCustomerPictureUpdated(!customerPictureUpdated)}
          className={s.button_purple}
        >
          Customer - Picture updated
        </Button>
        <ModalWindow
          isOpen={nextPictureModal ? false : customerPictureUpdated}
          onClose={() => setCustomerPictureUpdated(!customerPictureUpdated)}
        >
          <CustomerPictureUpdated
            title="Set A Profile Picture"
            content="Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu sit amet, consectet lorem"
            nextModal={nextPictureModal}
            setNextModal={setNextPictureModal}
          />
        </ModalWindow>
        <ModalWindow
          isOpen={nextPictureModal}
          onClose={() => setNextPictureModal(!nextPictureModal)}
          iconType="okay"
        >
          <CustomerPictureSuccess
            title="Changes Successfully Updated"
            content="Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu sit amet, consectet lorem"
          />
        </ModalWindow>

        <Button
          onClick={() => setCustomerPasswordChange(!customerPasswordChange)}
          className={s.button_purple}
        >
          Customer - Password change
        </Button>
        <ModalWindow
          isOpen={nextPasswordModal ? false : customerPasswordChange}
          onClose={() => setCustomerPasswordChange(!customerPasswordChange)}
          iconType="exclamation"
        >
          <CustomerPasswordChange
            content="Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu sit amet, consectet lorem"
            nextModal={nextPasswordModal}
            setNextModal={setNextPasswordModal}
          />
        </ModalWindow>
        <ModalWindow
          isOpen={nextPasswordModal}
          onClose={() => setNextPasswordModal(!nextPasswordModal)}
          iconType="okay"
        >
          <CustomerPasswordSuccess
            title="Changes Successfully Updated"
            content="Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu sit amet, consectet lorem"
          />
        </ModalWindow>
      </div>
    </div>
  )
}
export default ModalsExample
