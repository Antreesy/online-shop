import React from "react"
import { useRouter } from "next/router"

import { CommonLayout } from "./CommonLayout"
import { ProfileLayout } from "./ProfileLayouut"
import { LightLayout } from "./LightLayout"

import { profilePaths, lightPaths, basePaths } from "shared/constants/paths"
import { Roles } from "shared/enums/roles"

export interface LayoutProps {
  children: React.ReactElement
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter()

  const findPath = (element: string) =>
    router.pathname.startsWith(`/${element}`)

  if (profilePaths.find(findPath)) {
    return <ProfileLayout role={Roles.CUSTOMER}>{children}</ProfileLayout>
  } else if (lightPaths.find(findPath)) {
    return <LightLayout>{children}</LightLayout>
  } else if (basePaths.find(findPath)) {
    return <CommonLayout>{children}</CommonLayout>
  } else {
    return children
  }
}

export default Layout
