<template>
    <div class="relative p-6">
        <!-- Encabezado -->
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-3xl font-bold text-gray-800">Monitoreo en Tiempo Real</h1>
            <button 
                @click="fetchMonitoringData" 
                class="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
                Recargar Datos
            </button>
        </div>

        <!-- Indicadores de Estado -->
        <div v-if="loading" class="text-center text-gray-500">
            <p>Cargando datos de monitoreo...</p>
        </div>
        <div v-else-if="error" class="text-center text-red-500">
            <p>Error al cargar datos: {{ error }}</p>
        </div>

        <!-- Datos -->
        <div v-else>
            <div v-for="layout in layouts" :key="layout._id" class="mb-6">
                <MonitoringLayout 
                    :layout="layout" 
                    @beaconSelected="selectBeacon"
                    class="w-full"
                />
            </div>
        </div>

        <!-- Panel Lateral -->
        <transition name="slide" mode="out-in">
            <div 
                v-if="selectedBeacon" 
                class="fixed top-0 right-0 h-full w-96 bg-white shadow-xl z-50 border-l border-gray-300 flex flex-col"
            >
                <div class="p-6 border-b border-gray-200 flex justify-between items-center">
                    <h2 class="text-lg font-semibold text-gray-800">{{ selectedBeacon.name }}</h2>
                    <button 
                        @click="closePanel" 
                        class="text-gray-400 hover:text-red-500 transition"
                    >
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
import { ref, onMounted } from "vue";
import { listmonitoringApi } from "@/api/MonitoringService";
import store from "@/store";
import MonitoringLayout from "@/components/monitoring/MonitoringLayout.vue";

export default {
    name: "MonitoringView",
    components: {
        MonitoringLayout,
    },
    setup() {
        const loading = ref(false);
        const error = ref(null);
        const layouts = ref([]);
        const selectedBeacon = ref(null);

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
            selectBeacon,
            closePanel,
            fetchMonitoringData,
        };
    },
};
</script>

<style scoped>
/* Transición para el panel lateral */
.slide-enter-active, .slide-leave-active {
    transition: transform 0.3s ease;
}
.slide-enter {
    transform: translateX(100%);
}
.slide-leave-to {
    transform: translateX(100%);
}
</style>
