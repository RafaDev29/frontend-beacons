<template>
    <div class="relative p-6">
        <!-- Encabezado -->
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-3xl font-bold text-gray-800">Monitoreo en Tiempo Real</h1>
            <button @click="fetchMonitoringData"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                Recargar Datos
            </button>
        </div>

        <!-- Buscador -->
        <div class="relative mb-6">
            <input v-model="searchQuery" @input="updateSearchResults" type="text"
                placeholder="Buscar beacons por nombre..."
                class="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            <!-- Lista de coincidencias -->
            <ul v-if="searchResults.length > 0 && searchQuery.length > 0"
                class="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow mt-1">
                <li v-for="result in searchResults" :key="result.id" @click="selectBeaconFromSearch(result.id)"
                    class="px-4 py-2 hover:bg-blue-100 cursor-pointer flex justify-between">
                    <span>{{ result.name }}</span>
                    <span class="text-gray-500 text-sm">{{ result.proxyPhone }}</span>
                </li>
            </ul>


        </div>

        <!-- Indicadores de Estado -->
        <div v-if="loading" class="text-center text-gray-500">
            <p>Cargando datos de monitoreo...</p>
        </div>
        <div v-else-if="error" class="text-center text-red-500">
            <p>Error al cargar datos: {{ error }}</p>
        </div>

        <!-- Datos Filtrados -->
        <div v-else>
            <div v-if="filteredLayouts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <MonitoringLayout v-for="layout in filteredLayouts" :key="layout._id" :layout="layout"
                    @beaconSelected="selectBeacon" :highlightedBeacon="highlightedBeacon" />
            </div>
            <div v-else class="text-center text-gray-500 text-sm mt-6">
                No se encontraron beacons que coincidan con la búsqueda.
            </div>
        </div>

        <!-- Panel Lateral -->
        <transition name="slide" mode="out-in">
            <div v-if="selectedBeacon"
                class="fixed top-0 right-0 h-full w-96 bg-white shadow-xl z-50 border-l border-gray-300 flex flex-col">
                <div class="p-6 border-b border-gray-200 flex justify-between items-center">
                    <h2 class="text-lg font-semibold text-gray-800">{{ selectedBeacon.name }}</h2>
                    <button @click="closePanel" class="text-gray-400 hover:text-red-500 transition">
                        ✕
                    </button>
                </div>
                <div class="p-6 space-y-4 flex-1 overflow-y-auto">
                    <p class="text-sm text-gray-500"><strong>MAC:</strong> {{ selectedBeacon.mac }}</p>
                    <p class="text-sm text-gray-500"><strong>RSSI:</strong> {{ selectedBeacon.RSSI }}</p>
                    <p class="text-sm text-gray-500"><strong>Proxy:</strong> {{ selectedBeacon.proxyName }}</p>
                    <p class="text-sm text-gray-500"><strong>Email:</strong> {{ selectedBeacon.proxyEmail }}</p>
                    <p class="text-sm text-gray-500"><strong>Teléfono:</strong> {{ selectedBeacon.proxyPhone }}</p>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { listmonitoringApi } from "@/api/MonitoringService";
import store from "@/store";
import MonitoringLayout from "@/components/monitoring/MonitoringLayout.vue";

export default {
    name: "MonitoringView",
    components: {
        MonitoringLayout,
    },
    setup() {
        const highlightedBeacon = ref(null);
        const loading = ref(false);
        const error = ref(null);
        const layouts = ref([]);
        const selectedBeacon = ref(null);
        const searchQuery = ref("");
        const searchResults = ref([]);
        const selectedSearchResult = ref("");

        const fetchMonitoringData = async () => {
            loading.value = true;
            error.value = null;
            try {
                const token = store.state.token;
                const response = await listmonitoringApi(token);
                layouts.value = response.data.data;
            } catch (err) {
                console.error("Error al obtener datos de monitoreo:", err);
                error.value = err.message || "Error desconocido";
            } finally {
                loading.value = false;
            }
        };

        const updateSearchResults = () => {
            if (!searchQuery.value.trim()) {
                searchResults.value = [];
                selectedSearchResult.value = "";
                return;
            }
            const query = searchQuery.value.toLowerCase();
            const allBeacons = layouts.value.flatMap(layout =>
                layout.areas.flatMap(area => area.items)
            );

            // Filtra y extrae `_id`, `name`, y `proxyPhone`
            searchResults.value = allBeacons
                .filter(beacon => beacon.name.toLowerCase().includes(query))
                .map(beacon => ({
                    id: beacon._id,
                    name: beacon.name,
                    proxyPhone: beacon.proxyPhone,
                }));
        };



        const filteredLayouts = computed(() => {
            if (!selectedSearchResult.value.trim()) {
                return layouts.value;
            }
            const query = selectedSearchResult.value.toLowerCase();
            return layouts.value
                .map((layout) => ({
                    ...layout,
                    areas: layout.areas.map((area) => ({
                        ...area,
                        items: area.items.filter((beacon) =>
                            beacon.name.toLowerCase() === query
                        ),
                    })).filter((area) => area.items.length > 0),
                }))
                .filter((layout) => layout.areas.length > 0);
        });

        const selectBeaconFromSearch = (id) => {
            const beacon = layouts.value
                .flatMap(layout => layout.areas.flatMap(area => area.items))
                .find(beacon => beacon._id === id);

            if (beacon) {
                highlightedBeacon.value = beacon._id; // Usar _id único
                setTimeout(() => (highlightedBeacon.value = null), 3000); // Resalta por 3 segundos
            }

            // Limpia el select y el input después de seleccionar
            searchQuery.value = "";
            searchResults.value = [];
        };




        const selectBeacon = (beacon) => {
            selectedBeacon.value = beacon;
        };

        const closePanel = () => {
            selectedBeacon.value = null;
        };

        onMounted(() => {
            fetchMonitoringData();
        });

        return {
            loading,
            error,
            layouts,
            selectedBeacon,
            searchQuery,
            searchResults,
            selectedSearchResult,
            filteredLayouts,
            updateSearchResults,
            selectBeaconFromSearch,
            selectBeacon,
            closePanel,
            fetchMonitoringData,
            highlightedBeacon,

        };
    },
};
</script>
