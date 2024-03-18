const leftNavList = [{
        lable: "站内动物管理",
        index: "1",
        child: [{
                index: "1-1",
                lable: "猫",
                path: "/rightTable"
            },
            {
                index: "1-2",
                lable: "狗",
                path: "/rightTable",
            },
        ],
    },
    {
        lable: "站内员工管理",
        index: "2",
        child: [{
            index: "2-1",
            path: "/",
            lable: "添加员工",
        }, {
            index: "2-2",
            path: "/",
            lable: "删除员工",
        }, {
            index: "2-3",
            path: "/",
            lable: "修改员工信息",
        }, {
            index: "2-4",
            path: "/",
            lable: "查询员工信息",
        }, ]
    }, {
        index: "3",
        path: "/petInbound",
        lable: "动物入站",
    }, {
        index: "4",
        path: "/",
        lable: "动物出站",
    }, {
        index: "5",
        path: "/",
        lable: "动物领养",
    }, {
        index: "6",
        path: "/",
        lable: "动物归还",
    }
]
export default leftNavList