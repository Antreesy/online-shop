import { NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import React, { useState } from "react"

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
  InfluencerProfileChangeSuccess,
  InfluencerProductDelete,
  BrandVisualOperations,
  BrandCancelOrder,
} from "UI/Modals"

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "app",
        "common",
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

  const [influencerProfileChangeSuccess, setInfluencerProfileChangeSuccess] =
    useState(false)
  const [influencerProductDelete, setInfluencerProductDelete] = useState(false)
  const [brandVisual, setBrandVisual] = useState(false)
  const [brandCancel, setBrandCancel] = useState(false)

  return (
    <>
      <div className={s.container}>
        <div className={s.grid_column}>
          <Button onClick={() => setAccountCreated(!accountCreated)}>
            Account Created
          </Button>
          <ModalWindow
            isOpen={accountCreated}
            onClose={() => setAccountCreated(!accountCreated)}
            iconType="okay"
          >
            <AccountCreated />
          </ModalWindow>

          <Button onClick={() => setCustomerCardDeleted(!customerCardDeleted)}>
            Customer - Card Deleted
          </Button>
          <ModalWindow
            isOpen={customerCardDeleted}
            onClose={() => setCustomerCardDeleted(!customerCardDeleted)}
            iconType="okay"
          >
            <CustomerCardDeleted />
          </ModalWindow>

          <Button
            onClick={() =>
              setCustomerShoppingCompleted(!customerShoppingCompleted)
            }
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
            <CustomerShoppingCompleted />
          </ModalWindow>

          <Button
            onClick={() => setCustomerProductAdded(!customerProductAdded)}
          >
            Customer - Product added
          </Button>
          <ModalWindow
            isOpen={customerProductAdded}
            onClose={() => setCustomerProductAdded(!customerProductAdded)}
            iconType="okay"
          >
            <CustomerProductAdded />
          </ModalWindow>

          <Button
            onClick={() => setCustomerProfileUpdated(!customerProfileUpdated)}
          >
            Customer - Profile updated
          </Button>
          <ModalWindow
            isOpen={customerProfileUpdated}
            onClose={() => setCustomerProfileUpdated(!customerProfileUpdated)}
            iconType="okay"
          >
            <CustomerProfileUpdated />
          </ModalWindow>

          <Button
            onClick={() => setCustomerPictureUpdated(!customerPictureUpdated)}
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
          >
            Customer - Password change
          </Button>
          <ModalWindow
            isOpen={nextPasswordModal ? false : customerPasswordChange}
            onClose={() => setCustomerPasswordChange(!customerPasswordChange)}
            iconType="exclamation"
          >
            <CustomerPasswordChange
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

        <div className={s.grid_column}>
          <Button
            onClick={() =>
              setInfluencerProfileChangeSuccess(!influencerProfileChangeSuccess)
            }
          >
            Influencer Profile Change Success
          </Button>
          <ModalWindow
            isOpen={influencerProfileChangeSuccess}
            onClose={() =>
              setInfluencerProfileChangeSuccess(!InfluencerProfileChangeSuccess)
            }
            iconType="okay"
          >
            <InfluencerProfileChangeSuccess
              title="Changes Successfully Updated"
              text="Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu sit amet, consectet lorem"
              onClick={() =>
                setInfluencerProfileChangeSuccess(
                  !InfluencerProfileChangeSuccess,
                )
              }
              btnName="All Right"
            />
          </ModalWindow>

          <Button
            onClick={() => setInfluencerProductDelete(!influencerProductDelete)}
          >
            Influencer Product Delete
          </Button>
          <ModalWindow
            isOpen={influencerProductDelete}
            onClose={() => setInfluencerProductDelete(!influencerProductDelete)}
            iconType="exclamation"
          >
            <InfluencerProductDelete
              onClick={() =>
                setInfluencerProductDelete(!influencerProductDelete)
              }
            />
          </ModalWindow>

          <Button onClick={() => setBrandVisual(!brandVisual)}>
            Brand Visual Operations
          </Button>
          <ModalWindow
            isOpen={brandVisual}
            onClose={() => setBrandVisual(!brandVisual)}
          >
            <BrandVisualOperations />
          </ModalWindow>

          <Button onClick={() => setBrandCancel(!brandCancel)}>
            Brand Cancel Order
          </Button>
          <ModalWindow
            isOpen={brandCancel}
            onClose={() => setBrandCancel(!brandCancel)}
          >
            <BrandCancelOrder onClick={() => setBrandCancel(!brandCancel)} />
          </ModalWindow>
        </div>
      </div>
    </>
  )
}
export default ModalsExample
