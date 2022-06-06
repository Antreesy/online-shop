import React from "react"

import { CommonLayout } from "./CommonLayout"
import { ProfileLayout } from "./ProfileLayouut"
import { LightLayout } from "./LightLayout"

import { useRouter } from "next/router"

export interface LayoutProps {
  children: React.ReactElement
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter()
  console.log(router)
  if (router.pathname.startsWith("/account")) {
    return <ProfileLayout>{children}</ProfileLayout>
  } else if (router.pathname.startsWith("/faq")) {
    return <ProfileLayout>{children}</ProfileLayout>
  } else if (router.pathname.startsWith("/register")) {
    return <LightLayout>{children}</LightLayout>
  } else if (router.pathname.startsWith("/login")) {
    return <LightLayout>{children}</LightLayout>
  } else {
    return <CommonLayout>{children}</CommonLayout>
  }
}

export default Layout
