import { Controller, useForm } from "react-hook-form"
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
          title="Add Address"
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
                  label={"Address Title"}
                  setValue={onChange}
                  value={value}
                  placeholder={"Address Title"}
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
                  label={"Name*"}
                  setValue={onChange}
                  value={value}
                  placeholder={"Name*"}
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
                  label={"Surname*"}
                  setValue={onChange}
                  value={value}
                  placeholder={"Surname*"}
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
                  label="Country Code"
                  placeholder="Country Code*"
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
                  label={"Phone Number"}
                  setValue={onChange}
                  value={value}
                  placeholder={"Phone Number"}
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
                  label="City"
                  placeholder="City*"
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
                  label={"Something"}
                  setValue={onChange}
                  value={value}
                  placeholder={"Something"}
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
                  label={"Street*"}
                  setValue={onChange}
                  value={value}
                  placeholder={"Street*"}
                />
              )}
            />
          </div>
        </div>

        <SectionHeader className={s.header} title="Home" />

        <div className={s.row}>
          <div className={cn(s.cell, s.cell_100)}>
            <Controller
              name={"description"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  setValue={onChange}
                  value={value}
                  placeholder={"Address"}
                />
              )}
            />
          </div>
        </div>

        {role === Roles.BRAND && (
          <>
            <SectionHeader className={s.header} title="Invoice Address" />

            <div className={s.row}>
              <div className={cn(s.cell, s.cell_100)}>
                <Controller
                  name={"companyName"}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      label={"Company Name"}
                      setValue={onChange}
                      value={value || ""}
                      placeholder={"Company Name"}
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
                      label={"Tax Number"}
                      setValue={onChange}
                      value={value || ""}
                      placeholder={"Tax Number"}
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
                      label={"Tax Administration"}
                      setValue={onChange}
                      value={value || ""}
                      placeholder={"Tax Administration"}
                    />
                  )}
                />
              </div>
            </div>
          </>
        )}

        <Button onClick={onSubmit} className={s.save_btn}>
          Save
        </Button>
      </form>
    </>
  )
}

export default AddressForm
