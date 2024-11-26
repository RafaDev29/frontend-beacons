import { createStore } from "vuex";
import { listarCuentasApi } from "@/api/MenuService";

const localStorageKey = 'DJsdfg-2352LLDSF-dfglñdskfgiu38r_[22334ews34>YUVASZghsvdV';

export default createStore({
    state: {
        isAuthenticated: false,
        role: '',
        username: '',
        token: '',
        menuData: {} // Aquí se almacenarán los datos como { itemKey: { itemName, status } }
    },
    getters: {
        getItemName: (state) => (itemKey) => {
            return state.menuData[itemKey]?.itemName || ''; 
        },
        getItemStatus: (state) => (itemKey) => {
            return state.menuData[itemKey]?.status || false; 
        }
    },
    mutations: {
        setIsAuthenticated(state, value) {
            state.isAuthenticated = value;
            localStorage.setItem(localStorageKey, JSON.stringify(state));
        },
        setUsername(state, value) {
            state.username = value;
            localStorage.setItem(localStorageKey, JSON.stringify(state));
        },
        setToken(state, value) {
            state.token = value;
            localStorage.setItem(localStorageKey, JSON.stringify(state));
        },
        setRole(state, value) {
            state.role = value;
            localStorage.setItem(localStorageKey, JSON.stringify(state));
        },
        initializeStateFromLocalStorage(state) {
            const storedState = localStorage.getItem(localStorageKey);
            if (storedState) {
                Object.assign(state, JSON.parse(storedState));
            }
        },
        setMenuData(state, data) {
            // Convierte el array en un objeto con `itemKey` como clave
            state.menuData = data.reduce((acc, item) => {
                acc[item.itemKey] = { itemName: item.itemName, status: item.status };
                return acc;
            }, {});
            localStorage.setItem('menuData', JSON.stringify(state.menuData)); // Guarda en localStorage
        },
        initializeMenuDataFromLocalStorage(state) {
            const storedMenu = localStorage.getItem('menuData');
            if (storedMenu) {
                state.menuData = JSON.parse(storedMenu);
            }
        }
    },
    actions: {
        initializeStateFromLocalStorage({ commit }) {
            commit('initializeStateFromLocalStorage');
        },
        initializeMenuDataFromLocalStorage({ commit }) {
            commit('initializeMenuDataFromLocalStorage');
        },
        async fetchMenuData({ commit, state }) {
            try {
                const response = await listarCuentasApi(state.token); // Usa el token del store
                if (response.status && response.data) {
                    commit('setMenuData', response.data);
                }
            } catch (error) {
                console.error('Error al cargar los datos del menú:', error);
            }
        }
    }
});
