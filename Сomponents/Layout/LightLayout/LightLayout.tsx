import { HeaderLight } from "Сomponents/Header"
import { LayoutProps } from ".."

const LightLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderLight />
      {children}
    </>
  )
}

export default LightLayout
