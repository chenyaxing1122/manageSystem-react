//路由表
export const asyncRouterMap=[
    {
        path:'/home',
        name:'Home',
        meta:{title:"首页",role:['admin','teacher','manager'],icon:'team'},
    },
    {
        path:'/personal',
        name:'Personal',
        meta:{title:"个人中心",role:['admin','teacher','manager'],icon:'team'},
    },
    {
        path:'/teacher',
        name:'Teacher',
        meta:{title:"教室管理",role:['admin'],icon:'team'},
    },
    {
        path:'/admissions',
        name:'Admissions',
        meta:{title:"招生管理",role:['admin','manager'],icon:'customer-service'},
        children:[
            
        ]
    },
]