const leftNavRouter = [{
        path: "/rightTable/:species",
        name: "rightTabledog",
        component: () => import("@/components/RightTable.vue"),
        props: true
    },
    // {
    //     path: "/rightTablecat",
    //     name: "rightTablecat",
    //     component: () => import("@/components/RightTable.vue"),
    //     props: true
    // },
    {
        path: "/petInbound",
        name: "petInbound",
        component: () => import("@/components/PetInbound.vue"),
        props: true
    },
    {
        path: "/animalExit",
        name: "animalExit",
        component: () => import("@/components/AnimalExit.vue"),
        props: true
    },
    {
        path: "/petAdopt",
        name: "petAdopt",
        component: () => import("@/components/PetAdopt.vue"),
        props: true
    },
    {
        path: "/returnPet",
        name: "returnPet",
        component: () => import("@/components/ReturnPet.vue"),
        props: true
    },
    {
        path: "/addAdmin",
        name: "addAdmin",
        component: () => import("@/components/admin/AddAdmin.vue"),
        props: true
    },
    {
        path: "/deleteAdmin",
        name: "deleteAdmin",
        component: () => import("@/components/admin/DeleteAdmin.vue"),
        props: true
    },
    {
        path: "/updataAdmin",
        name: "updataAdmin",
        component: () => import("@/components/admin/UpdataAdmin.vue"),
        props: true
    },
    {
        path: "/selectAdmin",
        name: "selectAdmin",
        component: () => import("@/components/admin/SelectAdmin.vue"),
        props: true
    },
    {
        path: "/allAdmin",
        name: "allAdmin",
        component: () => import("@/components/admin/allAdmin.vue"),
        props: true
    },
    {
        path: "/myInfo",
        name: "myInfo",
        component: () => import("@/components/admin/MyInfo.vue"),
        props: true
    },
]




export default leftNavRouter