import { Breadcrumbs, Typography, Link, Stack } from "@mui/material"
import { useRouter } from "next/router"
import cn from "classnames"

import s from "./breadcrumbs.module.scss"

const BreadCrumbs = () => {
  const router = useRouter()
  const path = router.pathname.split("/")
  const newPath = path.slice(1)
  const activeRoute = path.slice(-1)
  const routePath = path.slice()

  return (
    <Stack className={s.main} spacing={2}>
      <Breadcrumbs className={s.nav} separator="-" aria-label="breadcrumb">
        <Link
          className={
            newPath[0] === ""
              ? cn(s.active, s.breadcrumb)
              : cn(s.route, s.breadcrumb)
          }
          key="1"
          href="/"
        >
          Home
        </Link>
        {newPath.slice(0, newPath.length - 1).map((route) => (
          <Link
            className={cn(s.route, s.breadcrumb)}
            key="1"
            href={`/${newPath.slice(0, routePath.indexOf(route)).join("/")}`}
          >
            {route}
          </Link>
        ))}
        {activeRoute[0] !== "" && (
          <Typography className={cn(s.active, s.breadcrumb)} key="3">
            {activeRoute}
          </Typography>
        )}
      </Breadcrumbs>
    </Stack>
  )
}

export default BreadCrumbs
