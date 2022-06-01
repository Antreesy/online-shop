import * as React from "react"
import { Breadcrumbs, Typography, Link, Stack } from "@mui/material"
import { useRouter } from "next/router"
import classNames from "classnames"
import s from "./breadcrumbs.module.scss"

const BreadCrumbs = () => {
  const router = useRouter()
  const path = router.pathname.split("/")
  path.shift()
  const activeRoute = path.pop()
  return (
    <Stack className={s.main} spacing={2}>
      <Breadcrumbs separator="-" aria-label="breadcrumb">
        <Link className={classNames(s.route, s.breadcrumb)} key="1" href="/">
          Home
        </Link>
        {path.map((route) => (
          <Link
            className={classNames(s.route, s.breadcrumb)}
            underline="hover"
            key="1"
            href={`/${route}`}
          >
            {route}
          </Link>
        ))}
        <Typography className={classNames(s.active, s.breadcrumb)} key="3">
          {activeRoute}
        </Typography>
      </Breadcrumbs>
    </Stack>
  )
}

export default BreadCrumbs
