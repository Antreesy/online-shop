interface RoleprofileType {
    brand: {
        link: string;
        text: string;
    }[];
    customer: {
        link: string;
        text: string;
    }[];
    influencer: {
        link: string;
        text: string;
    }[];
}

export const roleProfile:RoleprofileType = {
    brand: [
        { link: "/account/profile", text: "Profile" },
        { link: "/account/address", text: "Address" },
        { link: "/account/notifications", text: "Notifications" },
        { link: "/account/help", text: "Help" },
        { link: "/account/signout", text: "Sign Out" },
    ],

    customer: [
        { link: "/account/profile", text: "Profile" },
        { link: "/account/address", text: "Address" },
        { link: "/account/orders", text: "Orders" },
        { link: "/account/payment", text: "Payment" },
        { link: "/account/notifications", text: "Notifications" },
        { link: "/account/favorites", text: "Favorites" },
        { link: "/account/help", text: "Help" },
        { link: "/account/signout", text: "Sign Out" },
    ],

    influencer: [
        { link: "/account/profile", text: "Profile" },
        { link: "/account/address", text: "Address" },
        { link: "/account/orders", text: "Orders" },
        { link: "/account/notifications", text: "Notifications" },
        { link: "/account/dashboard", text: "Dashboard" },
        { link: "/account/help", text: "Help" },
        { link: "/account/signout", text: "Sign Out" },
    ]
}