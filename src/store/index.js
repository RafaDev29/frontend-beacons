import { createStore } from "vuex";

const localStorageKey = 'DJsdfg-2352LLDSF-dfglñdskfgiu38r_[22334ews34>YUVASZghsvdV';

export default createStore({
    state: {
        isAuthenticated: false,
        role: '',
        username: '',
        token: '',
        menuData: {} // Aquí se almacenarán los datos del menú
    },
    getters: {
        // Obtiene el nombre dinámico basado en `itemKey`
        getItemName: (state) => (itemKey) => {
            return state.menuData[itemKey]?.itemName || ''; 
        },
        // Verifica si un item está habilitado (`status`)
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
        // Inicializa el estado global desde localStorage
        initializeStateFromLocalStorage(state) {
            const storedState = localStorage.getItem(localStorageKey);
            if (storedState) {
                Object.assign(state, JSON.parse(storedState));
            }
        },
        // Guarda los datos del menú en el estado y `localStorage`
        setMenuData(state, data) {
            if (!Array.isArray(data)) {
                console.error('setMenuData recibió un valor no válido:', data);
                return;
            }

            state.menuData = data.reduce((acc, item) => {
                acc[item.itemKey] = { itemName: item.itemName, status: item.status };
                return acc;
            }, {});

            localStorage.setItem('menuData', JSON.stringify(state.menuData));
        },
        // Inicializa los datos del menú desde `localStorage`
        initializeMenuDataFromLocalStorage(state) {
            const storedMenu = localStorage.getItem('menuData');
            if (storedMenu) {
                state.menuData = JSON.parse(storedMenu);
            }
        }
    },
    actions: {
        // Inicializar el estado global desde `localStorage`
        initializeStateFromLocalStorage({ commit }) {
            commit('initializeStateFromLocalStorage');
        },
        // Inicializar los datos del menú desde `localStorage`
        initializeMenuDataFromLocalStorage({ commit }) {
            commit('initializeMenuDataFromLocalStorage');
        }
    }
});
