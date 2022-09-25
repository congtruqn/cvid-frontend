import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: () => import('@/components/index/Index'),
            meta: {
                guest: true,
                layout: 'Auth'
            }
        },
        {
            path: '/employee/login',
            name: 'employeelogin',
            component: () => import('@/components/employee/Login'),
            meta: {
                guest: true,
                layout: 'Auth'
            }
        },
        {
            path: '/business/login',
            name: 'businesslogin',
            component: () => import('@/components/business/Login'),
            meta: {
                guest: true,
                layout: 'Auth'
            }
        },
        {
            path: '/employee/register',
            name: 'employeeregister',
            component: () => import('@/components/employee/Register'),
            meta: {
                guest: true,
                layout: 'Auth'
            }
        },
        {
            path: '/business/register',
            name: 'businessregister',
            component: () => import('@/components/business/Register'),
            meta: {
                guest: true,
                layout: 'Auth'
            }
        },
        {
            path: '/create-cv',
            name: 'createcv',
            component: () => import('@/components/employee/CreateCV'),
            meta: {
                guest: true,
                layout: 'Auth'
            }
        },
        {
            path: '/employee/jobs-invited',
            name: 'createcv',
            component: () => import('@/components/employee/JobsInvited'),
            meta: {
                guest: true,
                layout: 'Default'
            }
        },
        {
            path: '/employee/jobs-sent',
            name: 'createcv',
            component: () => import('@/components/employee/JobsSent'),
            meta: {
                guest: true,
                layout: 'Default'
            }
        },
        {
            path: '/employee',
            name: 'employee',
            component: () => import('@/components/employee/Index'),
            meta: {
                guest: true,
                layout: 'Default'
            }
        },
        {
            path: '/business/job-list',
            name: 'business',
            component: () => import('@/components/business/JobList'),
            meta: {
                guest: true,
                layout: 'Business'
            }
        },
        {
            path: '/business/job-detail/:id',
            name: 'business-job-detail',
            component: () => import('@/components/business/JobDetail'),
            meta: {
                guest: true,
                layout: 'Default'
            }
        },
        {
            path: '/employee/job-detail/:id',
            name: 'employee-job-detail',
            component: () => import('@/components/employee/JobDetail'),
            meta: {
                guest: true,
                layout: 'Default'
            }
        },
        {
            path: '/business/cvid/:id',
            name: 'business-view-cv',
            component: () => import('@/components/business/ViewCV'),
            meta: {
                guest: true,
                layout: 'Business'
            }
        },
        {
            path: '/employee/cvid/:id',
            name: 'employee-view-cv',
            component: () => import('@/components/employee/ViewCV'),
            meta: {
                guest: true,
                layout: 'Default'
            }
        },
        {
            path: '/employee/quan-ly-tai-khoan',
            name: 'quan-ly-tai-khoan',
            component: () => import('@/components/employee/AccountManagement'),
            meta: {
                guest: true,
                layout: 'Default'
            }
        },
        {
            path: '/business/recruit',
            name: 'recruit',
            component: () => import('@/components/business/Recruit'),
            meta: {
                guest: true,
                layout: 'Business'
            }
        },
        {
            path: '/business/candidate',
            name: 'ung-vien',
            component: () => import('@/components/business/CandidateList'),
            meta: {
                guest: true,
                layout: 'Business'
            }
        },
        {
            path: '/business/department',
            name: 'department',
            component: () => import('@/components/business/Department'),
            meta: {
                guest: true,
                layout: 'Business'
            }
        },
        {
            path: '/admin/login',
            name: 'admin-login',
            component: () => import('@/components/admin/Login'),
            meta: {
                guest: true,
                layout: 'Admin'
            }
        },
        {
            path: '/add-major',
            name: 'quan-ly-phong-ban',
            component: () => import('@/components/admin/Major'),
            meta: {
                guest: true,
                layout: 'Auth'
            }
        },
        {
            path: '/admin/employee/list',
            name: 'admin',
            component: () => import('@/components/admin/EmployeeList'),
            meta: {
                guest: true,
                layout: 'Admin'
            }
        },
        {
            path: '/admin/business/list',
            name: 'admin',
            component: () => import('@/components/admin/BusinessList'),
            meta: {
                guest: true,
                layout: 'Admin'
            }
        },

    ]
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('token') == null) {
            next({
                path: '/',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('user'))
            if (to.matched.some(record => record.meta.is_admin)) {
                if (user.type == 1) {
                    next()
                }
                else {
                    next({ name: 'ViewInvoic' })
                }
            } else {
                next()
            }
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (localStorage.getItem('token') == null) {
            next()
        }
        else {
            next()
        }
    } else {
        next()
    }
})
export default router
