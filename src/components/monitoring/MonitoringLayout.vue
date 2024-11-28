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
        @beaconSelected="$emit('beaconSelected', $event)"
    />
</div>

        </div>
    </div>
</template>

<script>
import {  } from 'vue';
import MonitoringArea from '@/components/monitoring/MonitoringArea.vue';

export default {
    name: 'MonitoringLayout',
    props: {
        layout: {
            type: Object,
            required: true,
        },
    },
    components: {
        MonitoringArea,
    },
    setup() {
        /**
         * Determina la clase de ancho según el número de beacons.
         * @param {number} beaconCount - Cantidad de beacons en el área.
         * @returns {string} - Clase de ancho dinámico.
         */
        const getAreaWidth = (beaconCount) => {
            if (beaconCount === 0) return 'w-1/4'; // Ancho pequeño si no tiene beacons
            if (beaconCount <= 3) return 'w-1/3'; // Ancho medio para 1-3 beacons
            if (beaconCount <= 6) return 'w-1/2'; // Ancho mayor para 4-6 beacons
            return 'w-full'; // Ocupa todo el ancho si tiene más de 6 beacons
        };

        return {
            getAreaWidth,
        };
    },
};
</script>

<style scoped>
/* Estilo adicional para ajustar la apariencia */
</style>
