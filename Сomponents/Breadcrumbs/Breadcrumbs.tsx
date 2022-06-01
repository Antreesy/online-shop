import * as React from "react"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import { useRouter } from "next/router"


const BreadCrumbs = () => {
  const router = useRouter()
  const path = router.pathname.split("/")
  path.shift()
  const activeRoute = path.pop()
  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="-" aria-label="breadcrumb">
        {path.map((route) => (
          <Link underline="hover" key="1" color="inherit" href={`/${route}`}>
            {route}
          </Link>
        ))}
        <Typography key="3" color="text.primary">
          {activeRoute}
        </Typography>
      </Breadcrumbs>
    </Stack>
  )
}

export default BreadCrumbs
