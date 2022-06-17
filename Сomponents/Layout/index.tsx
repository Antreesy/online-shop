import React from "react"
import { useRouter } from "next/router"

import { CommonLayout } from "./CommonLayout"
import { CommonWithBcLayout } from "./CommonWithBcLayout"
import { ProfileLayout } from "./ProfileLayout"
import { LightLayout } from "./LightLayout"

import { profilePaths, lightPaths, commonPaths, commonWithBcPaths } from "shared/constants/paths"

import { useAppSelector } from "store/hooks"
import { authRole } from "store/slices/authSlice"

export interface LayoutProps {
  children: React.ReactElement
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter()
  const role = useAppSelector(authRole)

  const findPath = (element: string) =>
    router.pathname.startsWith(`/${element}`)

  if (profilePaths.find(findPath)) {
    return <ProfileLayout role={role}>{children}</ProfileLayout>
  } else if (lightPaths.find(findPath)) {
    return <LightLayout>{children}</LightLayout>
  } else if (commonPaths.find(findPath)) {
    return <CommonLayout>{children}</CommonLayout>
  } else if (commonWithBcPaths.find(findPath)) {
    return <CommonWithBcLayout>{children}</CommonWithBcLayout>
  } else {
    return children
  }
}
