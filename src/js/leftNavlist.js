const leftNavList = [{
        lable: "站内动物管理",
        index: "1",
        child: [{
                index: "1-1",
                lable: "猫",
                path: "/rightTable",
                type:"cat"
            },
            {
                index: "1-2",
                lable: "狗",
                path: "/rightTable",
                type:"dog"
            },
        ],
    },
    {
        lable: "站内员工管理",
        index: "2",
        child: [{
            index: "2-1",
            path: "/addAdmin",
            lable: "添加员工",
        }, {
            index: "2-2",
            path: "/deleteAdmin",
            lable: "删除员工",
        }, {
            index: "2-3",
            path: "/updataAdmin",
            lable: "修改员工信息",
        }, {
            index: "2-4",
            path: "/selectAdmin",
            lable: "查询员工信息",
        }, ]
    }, {
        index: "3",
        path: "/petInbound",
        lable: "动物入站",
    }, {
        index: "4",
        path: "/animalExit",
        lable: "动物出站",
    }, {
        index: "5",
        path: "/petAdopt",
        lable: "动物领养",
    }, {
        index: "6",
        path: "/returnPet",
        lable: "动物归还",
    }
]
export default leftNavList