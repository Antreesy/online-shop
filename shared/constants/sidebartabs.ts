import { LabelType } from "Сomponents/ProfileSidebar/ProfileSidebar"

export const sidebarTabs: LabelType[][] = [
  // FOR ANONYM USER
  [],
  [
    { link: "/account/add-product", text: "Add Product", icon: "price_tag" },
    { link: "/account/profile", text: "Profile", icon: "account" },
    { link: "/account/address", text: "Address", icon: "location" },
    {
      link: "/account/notifications",
      text: "Notifications",
      icon: "bell_filled",
    },
    { link: "/account/help", text: "Help", icon: "question" },
    { link: "/account/signout", text: "Sign Out", icon: "out_sign" },
  ],
  [
    { link: "/account/profile", text: "Profile", icon: "account" },
    { link: "/account/address", text: "Address", icon: "location" },
    { link: "/account/orders", text: "Orders", icon: "basket" },
    { link: "/account/payment", text: "Payment", icon: "credit_card" },
    {
      link: "/account/notifications",
      text: "Notifications",
      icon: "bell_filled",
    },
    { link: "/account/favorites", text: "Favorites", icon: "heart" },
    { link: "/account/help", text: "Help", icon: "question" },
    { link: "/account/signout", text: "Sign Out", icon: "out_sign" },
  ],
  [
    { link: "/account/profile", text: "Profile", icon: "account" },
    { link: "/account/address", text: "Address", icon: "location" },
    { link: "/account/orders", text: "Orders", icon: "basket" },
    {
      link: "/account/notifications",
      text: "Notifications",
      icon: "bell_filled",
    },
    { link: "/account/dashboard", text: "Dashboard", icon: "dashboard" },
    { link: "/account/help", text: "Help", icon: "question" },
    { link: "/account/signout", text: "Sign Out", icon: "out_sign" },
  ],
]
