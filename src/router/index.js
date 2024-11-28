import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            meta: {
                title: "Home",
                requiresAuth: true
            },
            path: "/",
            component: () => import("@/layouts/MasterLayout.vue"),
            children: [
                {
                    name: "layout",
                    path: "/layout",
                    component: () => import("@/views/LayoutView.vue"),
                },
                {
                    name: "area",
                    path: "/area",
                    component: () => import("@/views/AreaView.vue"),
                },
                {
                    name: "antennas",
                    path: "/antennas",
                    component: () => import("@/views/AntennasView.vue"),
                },

                {
                    name: "tags",
                    path: "/tags",
                    component: () => import("@/views/TagView.vue"),
                },

                {
                    name: "operators",
                    path: "/operators",
                    component: () => import("@/views/OperatorView.vue"),
                },

                {
                    name: "gptags",
                    path: "/gptags",
                    component: () => import("@/views/GTagsView.vue"),
                },

                
                {
                    name: "gpareas",
                    path: "/gpareas",
                    component: () => import("@/views/GAreasView.vue"),
                },

                {
                    name: "catTags",
                    path: "/catTags",
                    component: () => import("@/views/CTagsView.vue"),
                },
                
                {
                    name: "catAntennas",
                    path: "/catAntennas",
                    component: () => import("@/views/CAntennaView.vue"),
                },

                

                
                
                
            
       
            ]
        },
        {
            meta: {
                title: "Login"
            },
            path: "/login",
            name: "login",
            component: () => import("@/views/LoginView.vue")
        },
      
        {
            path: '/:pathMatch(.*)*', // Cualquier ruta no especificada
            redirect: '/login' // Redirigir a login
        }
    ]
})

// Navigation Guard  
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !store.state.isAuthenticated) {
      
        next({ name: 'login' });
    } else if (to.name === 'login' && store.state.isAuthenticated) {
       
        if (store.state.role === "CUSTOMER_MASTER") {
            next({ name: 'layout' });
           
        } else if (store.state.role === "COMPANY_MASTER") {

            next();
        }else if(store.state.role === "SUPER_MASTER"){
            next();
        } else {
            next();
        }
    } else if (to.path === '/' && store.state.isAuthenticated) {
        // Si el usuario está autenticado y accede a la raíz, redirigir según su rol
        if (store.state.role === "CUSTOMER_MASTER") {
            next({ name: 'layout' });
        } else if (store.state.role === "COMPANY_MASTER") {
            next({ name: 'layout' });
        } else if (store.state.role === "SUPER_MASTER") {
            next();
        } else {
            next();
        }
    } else {
       
        next();
    }
});

export default router;
