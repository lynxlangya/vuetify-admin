import {
    asyncRoutes,
    constantRoutes
} from '@/router';

/**
 * Through meta.role determines whether the current user rights match
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
    if (route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.includes(role));
    }
    return true;
}

/**
 * Recursively filter asynchronous routing tables to return routing tables
 * that meet user role permissions
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
    const res = [];

    routes.forEach(route => {
        const tmp = {
            ...route
        };
        if (hasPermission(roles, tmp)) {
            if (tmp.children) {
                tmp.children = filterAsyncRoutes(tmp.children, roles);
            }
            res.push(tmp);
        }
    });

    return res;
}

const permission = {
    state: {
        routes: [],
        addRoutes: []
    },

    getters: {
        permissionRoutes: state => state.routes,
        addRoutes: state => state.addRoutes
    },

    mutations: {
        SET_ROUTES: (state, routes) => {
            state.addRoutes = routes;
            state.routes = constantRoutes.concat(routes);

            console.log('SET_ROUTES state.addRoutes', state.addRoutes);
            console.log('SET_ROUTES state.routes', state.routes);
        }
    },
    actions: {
        GenerateRoutes: ({
            commit
        }, data) => {
            console.log('GenerateRoutes');
            return new Promise(resolve => {
                const {
                    roles
                } = data;
                let accessedRoutes;
                console.groupCollapsed('GenerateRoutes');
                console.log('asyncRoutes ', asyncRoutes);
                console.log('constantRoutes ', constantRoutes);

                if (roles.includes('admin')) {
                    accessedRoutes = asyncRoutes;
                    console.log('roles.includes(admin) ', accessedRoutes);
                } else {
                    accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
                    console.log('!roles.includes(admin) ', accessedRoutes);
                }
                commit('SET_ROUTES', accessedRoutes);
                console.groupEnd();
                resolve(accessedRoutes);
            });
        }
    }
};

export default permission;
