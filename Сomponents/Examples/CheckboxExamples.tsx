import { CheckboxGroup, RadioGroup } from "UI"

import s from "styles/pages/components-example.module.scss"

const CheckboxExamples: React.FC = () => {
  return (
    <div className={s.grid}>
      <div>
        <p>Rounded Checkboxes</p>
        <CheckboxGroup rounded labels={["Men", "Women", "Unisex"]} />
      </div>
      <div>
        <p>Square Checkboxes</p>
        <CheckboxGroup color="#000" labels={["Men", "Women", "Unisex"]} />
      </div>
      <div>
        <p>Colored Checkboxes</p>
        <CheckboxGroup
          color="#ff4e4e"
          colorChecked="#25754a"
          labels={["Men", "Women", "Unisex"]}
        />
      </div>
      <div>
        <p>Gender</p>
        <RadioGroup
          elements={[
            { value: "female", label: "Female" },
            { value: "male", label: "Male" },
          ]}
        />
        <p>Type</p>
        <RadioGroup
          elements={[
            { value: "string", label: "String" },
            { value: "number", label: "Number" },
            { value: "boolean", label: "Boolean" },
            { value: "any", label: "Any" },
          ]}
        />
      </div>
    </div>
  )
}

export default CheckboxExamples
