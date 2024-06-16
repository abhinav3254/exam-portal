export const PROFILE_NAV = [
    {
        "img": "user",
        "name": "Profile",
        // "url": "user/profile"
        "url": "user"
    },
    {
        "img": "update",
        "name": "Update",
        "url": "user/profile/update"
    },
    {
        "img": "summary",
        "name": "Summary",
        "url": "user/profile/update"
    },
    {
        "img": "graph",
        "name": "Reports",
        "url": "user/profile/update"
    },
    {
        "img": "phone",
        "name": "Contacts",
        "url": "user/profile/update"
    },
    {
        "img": "certificates",
        "name": "Certificates",
        "url": "user/profile/update"
    },
    {
        "img": "money",
        "name": "Fee",
        "url": "user/profile/update"
    },
    {
        "img": "pdf",
        "name": "Study Materials",
        "url": "user/profile/update"
    },
    {
        "img": "result",
        "name": "Result",
        "url": "user/profile/update"
    }
]

export interface ProfileItems {
    img: string,
    name: string,
    url: string
}