import { Breadcrumbs, Typography, Link, Stack } from "@mui/material"
import { useRouter } from "next/router"
import cn from "classnames"

import s from "./breadcrumbs.module.scss"

const CustomBreadcrumbs = () => {
  const router = useRouter()
  const path = router.asPath.split("/")
  const newPath = path.slice(1)
  const activeRoute = path.slice(-1)
  const routePath = path.slice()

  return (
    <Stack className={s.wrapper} spacing={2}>
      <Breadcrumbs className={s.nav} separator={"-"} aria-label="breadcrumb">
        <Link
          className={cn(s.breadcrumb, newPath[0] === "" ? s.active : s.route)}
          key="1"
          href="/"
        >
          Home
        </Link>
        {newPath.slice(0, newPath.length - 1).map((route, index) => (
          <Link
            className={cn(s.route, s.breadcrumb)}
            key={index + 2}
            href={`/${newPath.slice(0, routePath.indexOf(route)).join("/")}`}
          >
            {route}
          </Link>
        ))}
        {activeRoute[0] !== "" &&
          activeRoute.map((route) => (
            <Typography className={cn(s.active, s.breadcrumb)} key={"active"}>
              {route.replace("-", " ")}
            </Typography>
          ))}
      </Breadcrumbs>
    </Stack>
  )
}

export default CustomBreadcrumbs
