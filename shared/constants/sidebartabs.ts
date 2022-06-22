import { LabelType } from "Сomponents/ProfileSidebar/ProfileSidebar"

export const sidebarTabs: LabelType[][] = [
  // FOR ANONYM USER
  [],
  [
    { link: "/account/add-product", text: "addProduct", icon: "price_tag" },
    { link: "/account/profile", text: "profile", icon: "account" },
    { link: "/account/address", text: "address", icon: "location" },
    {
      link: "/account/notifications",
      text: "notifications",
      icon: "bell_filled",
    },
    { link: "/account/help", text: "help", icon: "question" },
    { link: "/account/signout", text: "signOut", icon: "out_sign" },
  ],
  [
    { link: "/account/profile", text: "profile", icon: "account" },
    { link: "/account/address", text: "address", icon: "location" },
    { link: "/account/orders", text: "orders", icon: "basket" },
    { link: "/account/payment", text: "payment", icon: "credit_card" },
    {
      link: "/account/notifications",
      text: "notifications",
      icon: "bell_filled",
    },
    { link: "/account/favorites", text: "favorites", icon: "heart" },
    { link: "/account/help", text: "help", icon: "question" },
    { link: "/account/signout", text: "signOut", icon: "out_sign" },
  ],
  [
    { link: "/account/profile", text: "profile", icon: "account" },
    { link: "/account/address", text: "address", icon: "location" },
    { link: "/account/orders", text: "orders", icon: "basket" },
    {
      link: "/account/notifications",
      text: "notifications",
      icon: "bell_filled",
    },
    { link: "/account/dashboard", text: "dashboard", icon: "dashboard" },
    { link: "/account/help", text: "help", icon: "question" },
    { link: "/account/signout", text: "signOut", icon: "out_sign" },
  ],
]
