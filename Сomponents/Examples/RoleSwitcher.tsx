import { Roles } from "shared/enums/roles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { authRole, changeRole } from "store/slices/authSlice"
import { Button } from "UI"

export const RoleSwitcher = () => {
  const dispatch = useAppDispatch()
  const role = useAppSelector(authRole)

  const handleNone = () => dispatch(changeRole(Roles.NONE))
  const handleBrand = () => dispatch(changeRole(Roles.BRAND))
  const handleCustomer = () => dispatch(changeRole(Roles.CUSTOMER))
  const handleInfluencer = () => dispatch(changeRole(Roles.INFLUENCER))

  return (
    <div style={{ position: "fixed", top: 0, left: 0, zIndex: 100 }}>
      <Button
        disabled={role === Roles.NONE}
        iconLeft="question"
        onClick={handleNone}
      />
      <Button
        disabled={role === Roles.BRAND}
        iconLeft="basket"
        onClick={handleBrand}
      />
      <Button
        disabled={role === Roles.CUSTOMER}
        iconLeft="search"
        onClick={handleCustomer}
      />
      <Button
        disabled={role === Roles.INFLUENCER}
        iconLeft="price_tag"
        onClick={handleInfluencer}
      />
    </div>
  )
}
