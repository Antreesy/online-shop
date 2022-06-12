import { Controller, useForm } from "react-hook-form"
import { useTranslation } from "next-i18next"
import cn from "classnames"

import { SectionHeader } from "Сomponents"
import { Button, Icon, Input, Select } from "UI"
import { SelectItem } from "UI/Select/Select"

import { countriesForSelect } from "shared/constants/countries"

import s from "./addressForm.module.scss"
import { Roles } from "shared/enums/roles"


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
  const { t } = useTranslation("address")
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
                  label={t("Address Title")}
                  setValue={onChange}
                  value={value}
                  placeholder={t("Address Title")}
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
                  label={t("Name*")}
                  setValue={onChange}
                  value={value}
                  placeholder={t("Name*")}
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
                  label={t("Surname*")}
                  setValue={onChange}
                  value={value}
                  placeholder={t("Surname*")}
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
                  label={t("Country Code")}
                  placeholder={t("Country Code")}
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
                  label={t("Phone Number")}
                  setValue={onChange}
                  value={value}
                  placeholder={t("Phone Number")}
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
                  label={t("City*")}
                  placeholder={t("City*")}
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
                  label={t("Something")}
                  setValue={onChange}
                  value={value}
                  placeholder={t("Something")}
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
                  label={t("Street*")}
                  setValue={onChange}
                  value={value}
                  placeholder={t("Street*")}
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
