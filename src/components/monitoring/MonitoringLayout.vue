<template>
    <div class="border border-gray-300 rounded-lg shadow-lg mb-6 bg-gray-50 transition duration-300 hover:shadow-xl">
        <!-- Cabecera del Layout -->
        <div class="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h2 class="text-lg font-bold">{{ layout.name }}</h2>
            <div class="text-sm">
                <span class="font-medium">Áreas:</span> {{ layout.areas.length }}
            </div>
        </div>

        <!-- Áreas -->
        <div class="p-4 flex flex-wrap gap-4">
            <div v-for="(area, index) in layout.areas" :key="area._id" class="mb-4">
                <MonitoringArea 
                    :area="area" 
                    :areaIndex="index" 
                    :highlightedBeacon="highlightedBeacon" 
                    @beaconSelected="$emit('beaconSelected', $event)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import MonitoringArea from "@/components/monitoring/MonitoringArea.vue";

export default {
    name: "MonitoringLayout",
    props: {
        layout: {
            type: Object,
            required: true,
        },
        highlightedBeacon: {
            type: String,
            default: null, // ID del beacon a resaltar
        },
    },
    components: {
        MonitoringArea,
    },
};
</script>

<style scoped>
/* Estilo adicional para ajustar la apariencia */
</style>
