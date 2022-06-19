import React, { useState } from "react"
import { NextPage } from "next"
import ModalWindow from "../UI/ModalWindow/ModalWindow"
import { Button } from "../UI"
import s from "../styles/pages/ComponentsExample.module.scss"
import {
  CustomerProfilePictureUpdateSuccess,
  CustomerProfileDeletedCard,
  CustomerProductDetailPopUp,
  CustomerShoppingIsComplete,
  CustomerProfileUpdate,
  CustomerProfilePictureUpdate,
  MemberAynPopupDesktop,
  CustomerProfileChangePassword,
  CustomerProfileChangePasswordSuccess,
} from "../UI/Modals"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

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
  const [MemberAynIPopupDesktop, setMemberAynIPopupDesktop] =
    useState<boolean>(false)
  const [CustomerProfileDeleted, setCustomerProfileDeleted] =
    useState<boolean>(false)
  const [CustomerProductDetail, setCustomerProductDetail] =
    useState<boolean>(false)
  const [CustomerShoppingIsCompleted, setCustomerShoppingIsCompleted] =
    useState<boolean>(false)
  const [CustomerProfileUpdated, setCustomerProfileUpdated] =
    useState<boolean>(false)
  const [CustomerProfilePictureUpdated, setCustomerProfilePictureUpdated] =
    useState<boolean>(false)
  const [CustomerProfileChangePasswords, setCustomerProfileChangePasswords] =
    useState<boolean>(false)

  //
  const [nextModalPage, setNextModalPage] = useState<boolean>(false)
  const [nextPasswordModal, setNextPasswordModal] = useState<boolean>(false)

  return (
    <>
      <div>
        <Button
          onClick={() => setMemberAynIPopupDesktop(!MemberAynIPopupDesktop)}
          className={s.button_purple}
        >
          MemberAynIPopupDesktop
        </Button>
        <ModalWindow
          isOpen={MemberAynIPopupDesktop}
          onClose={() => setMemberAynIPopupDesktop(!MemberAynIPopupDesktop)}
          iconType="okay"
        >
          <MemberAynPopupDesktop
            {...{
              title: "You are now ready",
              content:
                "We received the request to create a membership. We will get back to you via  e-mail within 24 hours.",
            }}
          />
        </ModalWindow>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Button
          onClick={() => setCustomerProfileDeleted(!CustomerProfileDeleted)}
          className={s.button_purple}
        >
          CustomerProfileDeletedCard
        </Button>
        <ModalWindow
          isOpen={CustomerProfileDeleted}
          onClose={() => setCustomerProfileDeleted(!CustomerProfileDeleted)}
          iconType="okay"
        >
          <CustomerProfileDeletedCard
            {...{ title: "The card has been successfully deleted" }}
          />
        </ModalWindow>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Button
          onClick={() => setCustomerProductDetail(!CustomerProductDetail)}
          className={s.button_purple}
        >
          CustomerProductDetail
        </Button>
        <ModalWindow
          isOpen={CustomerProductDetail}
          onClose={() => setCustomerProductDetail(!CustomerProductDetail)}
          iconType="okay"
        >
          <CustomerProductDetailPopUp
            {...{
              title: "The product has been added to your store",
              content:
                "Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu sit amet, consectet lorem",
            }}
          />
        </ModalWindow>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Button
          onClick={() =>
            setCustomerShoppingIsCompleted(!CustomerShoppingIsCompleted)
          }
          className={s.button_purple}
        >
          CustomerShoppingIsComplete
        </Button>
        <ModalWindow
          isOpen={CustomerShoppingIsCompleted}
          onClose={() =>
            setCustomerShoppingIsCompleted(!CustomerShoppingIsCompleted)
          }
          iconType="okay"
        >
          <CustomerShoppingIsComplete
            {...{
              title: "Your shopping is complete",
              content:
                "Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu sit amet, consectet lorem",
            }}
          />
        </ModalWindow>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Button
          onClick={() =>
            setCustomerProfilePictureUpdated(!CustomerProfilePictureUpdated)
          }
          className={s.button_purple}
        >
          CustomerProfileUpdate
        </Button>
        <ModalWindow
          isOpen={CustomerProfilePictureUpdated}
          onClose={() =>
            setCustomerProfilePictureUpdated(!CustomerProfilePictureUpdated)
          }
          iconType="okay"
        >
          <CustomerProfileUpdate
            {...{
              title: "Changes Successfully Updated",
              content:
                "Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu sit amet, consectet lorem",
            }}
          />
        </ModalWindow>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Button
          onClick={() => setCustomerProfileUpdated(!CustomerProfileUpdated)}
          className={s.button_purple}
        >
          CustomerProfilePictureUpdate
        </Button>
        <ModalWindow
          isOpen={nextModalPage ? false : CustomerProfileUpdated}
          onClose={() => setCustomerProfileUpdated(!CustomerProfileUpdated)}
        >
          <CustomerProfilePictureUpdate
            {...{
              title: "Set A Profile Picture",
              content:
                "Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu sit amet, consectet lorem",
              nextModalPage: nextModalPage,
              setNextModalPage: setNextModalPage,
            }}
          />
        </ModalWindow>

        <ModalWindow
          isOpen={nextModalPage}
          onClose={() => setNextModalPage(!nextModalPage)}
          iconType="okay"
        >
          <CustomerProfilePictureUpdateSuccess
            {...{
              title: "Changes Successfully Updated",
              content:
                "Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu sit amet, consectet lorem",
            }}
          />
        </ModalWindow>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Button
          onClick={() =>
            setCustomerProfileChangePasswords(!CustomerProfileChangePasswords)
          }
          className={s.button_purple}
        >
          CustomerProfileChangePassword
        </Button>
        <ModalWindow
          isOpen={nextPasswordModal ? false : CustomerProfileChangePasswords}
          onClose={() =>
            setCustomerProfileChangePasswords(!CustomerProfileChangePasswords)
          }
          iconType="exclamation"
        >
          <CustomerProfileChangePassword
            {...{
              content:
                "Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu sit amet, consectet lorem",
              nextPasswordModal: nextPasswordModal,
              setNextPasswordModal: setNextPasswordModal,
            }}
          />
        </ModalWindow>

        <ModalWindow
          isOpen={nextPasswordModal}
          onClose={() => setNextPasswordModal(!nextPasswordModal)}
          iconType="okay"
        >
          <CustomerProfileChangePasswordSuccess
            {...{
              title: "Changes Successfully Updated",
              content:
                "Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu sit amet, consectet lorem",
            }}
          />
        </ModalWindow>
      </div>
    </>
  )
}
export default ModalsExample
