import { Toolbar } from "Сomponents/Toolbar"

export const ToolbarExample = () => {
  const values = [
    { title: "first", value: 1 },
    { title: "second", value: 2 },
    { title: "third", value: 3 },
  ]

  return (
    <Toolbar
      values={values}
      onChangeSearch={() => {
        console.log("change search")
      }}
      onChangeSelect={() => {
        console.log("change select")
      }}
    />
  )
}
