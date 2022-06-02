import React, { useState } from "react"
import sidebar from "./profileSidebar.module.scss"
import Link from "next/link"

export type ProfileSidebarLabels =
  | "profile"
  | "Address"
  | "Order"
  | "Payment"
  | "Notification"
  | "Favorite"
  | "Help"
  | "Sign Out"

type ProfileSidebarProps = {
  labels: ProfileSidebarLabels[]
}
const ProfileSidebar: React.FC<ProfileSidebarProps> = (props) => {
  const { labels } = props
  const [state, setState] = useState(null)
  const handleClick = (label: any) => setState(label)
  return (
    <div>
      <div className={sidebar.headerSidebar}>
        <p>MY ACCOUNT</p>
      </div>

      <div className={sidebar.menuSidebar}>
        {labels.length ? (
          labels.map((label, index) => (
            <ul key={index}>
              <li>
                <Link href={""}>
                  <a
                    href="# "
                    className={state === label ? `${sidebar.active}` : undefined}
                    onClick={() => handleClick(label)}
                  >
                    {label}
                  </a>
                </Link>
              </li>
            </ul>
          ))
        ) : (
          <span>No item in sidebar</span>
        )}
      </div>
    </div>
  )
}
export default ProfileSidebar
