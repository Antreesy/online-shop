import { Tabs } from "UI"

import s from "styles/pages/components-example.module.scss"

const TabsExamples: React.FC = () => {
  return (
    <div className={s.grid}>
      <div>
        <p className={s.description}>default</p>
        <Tabs labels={["Sign In", "Sign Up"]} values={["Sign In", "Sign Up"]} />
      </div>
      <div>
        <p className={s.description}>spaces</p>
        <Tabs
          labels={["Sign In", "Sign Up"]}
          values={["Sign In", "Sign Up"]}
          variant="spaces"
        />
      </div>
      <div>
        <p className={s.description}>no_border</p>
        <Tabs
          labels={["Sign In", "Sign Up"]}
          values={["Sign In", "Sign Up"]}
          variant="no_border"
        />
      </div>
    </div>
  )
}

export default TabsExamples
