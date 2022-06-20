import { Controller, useForm } from "react-hook-form"
import { useTranslation } from "next-i18next"
import cn from "classnames"

import { SectionHeader } from "Сomponents"
import { Button, Icon, Input, Select } from "UI"
import { SelectItem } from "UI/Select/Select"

import { countriesForSelect } from "shared/constants/countries"
import { Roles } from "shared/enums/roles"

import s from "./addressForm.module.scss"

interface AddressFormProps {
  onClose?: () => void
  role?: Roles
}

interface AddressType {
  address: string
  name: string
  surname: string
  country: SelectItem
  city: SelectItem
  phone: string
  something: string
  street: string
  description: string
  companyName?: string
  taxNumber?: string
  taxAdministration?: string
}

const AddressForm: React.FC<AddressFormProps> = (props) => {
  const { t } = useTranslation("orderAddress")
  const { onClose, role } = props

  const { handleSubmit, control } = useForm<AddressType>({
    criteriaMode: "all",
    defaultValues: {
      address: "",
      name: "",
      surname: "",
      country: { title: "", value: "" },
      city: { title: "", value: "" },
      phone: "",
      something: "",
      street: "",
      description: "",
      companyName: "",
      taxNumber: "",
      taxAdministration: "",
    },
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    onClose?.()
  })

  return (
    <>
      <form className={s.form} onSubmit={onSubmit}>
        <SectionHeader
          className={s.header}
          title={t("Add Address")}
          actionItem={<Icon type="close_cross" color="#fff" />}
          noDecor
          onActionClick={onClose}
        />

        <div className={s.row}>
          <div className={cn(s.cell, s.cell_100)}>
            <Controller
              name={"address"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={t("AddressTitle")}
                  setValue={onChange}
                  value={value}
                  placeholder={t("AddressTitle")}
                />
              )}
            />
          </div>
        </div>

        <div className={s.row}>
          <div className={cn(s.cell, s.cell_50)}>
            <Controller
              name={"name"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={t("name")}
                  setValue={onChange}
                  value={value}
                  placeholder={t("name")}
                />
              )}
            />
          </div>
          <div className={cn(s.cell, s.cell_50)}>
            <Controller
              name={"surname"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={t("surname")}
                  setValue={onChange}
                  value={value}
                  placeholder={t("surname")}
                />
              )}
            />
          </div>
        </div>

        <div className={s.row}>
          <div className={cn(s.cell, s.cell_50)}>
            <Controller
              name={"country"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  className={s.input_20}
                  label={t("countryCode")}
                  placeholder={t("countryCode")}
                  initValue={value.value}
                  values={countriesForSelect()}
                  onChange={onChange}
                />
              )}
            />

            <Controller
              name={"phone"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  className={s.input_30}
                  label={t("phoneNumber")}
                  setValue={onChange}
                  value={value}
                  placeholder={t("phoneNumber")}
                />
              )}
            />
          </div>

          <div className={cn(s.cell, s.cell_50)}>
            <Controller
              name={"city"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  label={t("city")}
                  placeholder={t("city")}
                  initValue={value.value}
                  values={[]}
                  onChange={onChange}
                />
              )}
            />
          </div>
        </div>

        <div className={s.row}>
          <div className={cn(s.cell, s.cell_50)}>
            <Controller
              name={"something"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={t("something")}
                  setValue={onChange}
                  value={value}
                  placeholder={t("something")}
                />
              )}
            />
          </div>
          <div className={cn(s.cell, s.cell_50)}>
            <Controller
              name={"street"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={t("street")}
                  setValue={onChange}
                  value={value}
                  placeholder={t("street")}
                />
              )}
            />
          </div>
        </div>

        <SectionHeader className={s.header} title={t("Home")} />

        <div className={s.row}>
          <div className={cn(s.cell, s.cell_100)}>
            <Controller
              name={"description"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  setValue={onChange}
                  value={value}
                  placeholder={t("Address")}
                />
              )}
            />
          </div>
        </div>

        {role === Roles.BRAND && (
          <>
            <SectionHeader className={s.header} title={t("Invoice Address")} />

            <div className={s.row}>
              <div className={cn(s.cell, s.cell_100)}>
                <Controller
                  name={"companyName"}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      label={t("Company Name")}
                      setValue={onChange}
                      value={value || ""}
                      placeholder={t("Company Name")}
                    />
                  )}
                />
              </div>
            </div>

            <div className={s.row}>
              <div className={cn(s.cell, s.cell_100)}>
                <Controller
                  name={"taxNumber"}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      label={t("Tax Number")}
                      setValue={onChange}
                      value={value || ""}
                      placeholder={t("Tax Number")}
                    />
                  )}
                />
              </div>
            </div>

            <div className={s.row}>
              <div className={cn(s.cell, s.cell_100)}>
                <Controller
                  name={"taxAdministration"}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      label={t("Tax Administration")}
                      setValue={onChange}
                      value={value || ""}
                      placeholder={t("Tax Administration")}
                    />
                  )}
                />
              </div>
            </div>
          </>
        )}

        <Button onClick={onSubmit} className={s.save_btn}>
          {t("Save")}
        </Button>
      </form>
    </>
  )
}

export default AddressForm
