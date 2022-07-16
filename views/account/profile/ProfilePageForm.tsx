import { Controller, useForm } from "react-hook-form"
import { useTranslation } from "next-i18next"

import { Button, FileUpload, Input, RadioGroup } from "UI"

import s from "styles/pages/account/profile.module.scss"

interface FormType {
  name: string
  surname: string
  email: string
  phoneNumber: string
  dateOfBirth: string
  gender: "male" | "female"
  img: File | null
}

export const ProfilePageForm = () => {
  const { t } = useTranslation("")

  const { handleSubmit, control } = useForm<FormType>({
    criteriaMode: "all",
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      dateOfBirth: "",
      gender: "female",
      img: null,
    },
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form className={s.form}>
      <div className={s.inputs}>
        <div className={s.inputs__container}>
          <div className={s.inputs__row}>
            <Controller
              name={"name"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  setValue={onChange}
                  label="Name"
                  placeholder="Yalçın Topkaya"
                />
              )}
            />
            <Controller
              name={"surname"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input value={value} setValue={onChange} label="Surname" />
              )}
            />
          </div>
          <div className={s.inputs__row}>
            <Controller
              name={"email"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input value={value} setValue={onChange} label="E-Mail" />
              )}
            />
            <Controller
              name={"phoneNumber"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input value={value} setValue={onChange} label="Phone Number" />
              )}
            />
          </div>
          <div className={s.inputs__row}>
            <Controller
              name={"dateOfBirth"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  setValue={onChange}
                  label="Date of Birth"
                />
              )}
            />
            <div className={s.radio}>
              <span>Gender</span>
              <div>
                <Controller
                  name={"gender"}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <RadioGroup
                      setValue={onChange}
                      initialValue={value}
                      elements={[
                        { label: "Female", value: "female" },
                        { label: "Male", value: "male" },
                      ]}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={s.file_upload}>
          <div>
            <Controller
              name={"img"}
              control={control}
              render={({ field: { onChange } }) => (
                <FileUpload
                  setValue={onChange}
                  minWidth={359}
                  minHeight={379}
                />
              )}
            />
          </div>
        </div>
      </div>
      <div className={s.buttons_wrapper}>
        <Button variant="text">Change Password</Button>
        <Button onClick={onSubmit}>Update</Button>
      </div>
    </form>
  )
}
