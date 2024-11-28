<template>
    <div 
        class="border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 transition duration-300" 
        :style="{ background: getBackgroundColor(areaIndex) }"
    >
        <!-- Cabecera del Área -->
        <div class="p-4 rounded-t-lg">
            <h3 class="text-md font-medium text-gray-800">{{ area.name }}</h3>
        </div>

        <!-- Lista de Beacons -->
        <div v-if="area.items.length > 0" class="p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            <MonitoringBeacon 
                v-for="beacon in area.items" 
                :key="beacon._id" 
                :beacon="beacon" 
                :highlighted="highlightedBeacon === beacon._id" 
                @click="selectBeacon(beacon)"
            />
        </div>

        <!-- Mensaje de Área Vacía -->
        <div v-else class="p-4 text-center text-gray-500 text-sm">
            No hay beacons en esta área.
        </div>
    </div>
</template>

<script>
import MonitoringBeacon from '@/components/monitoring/MonitoringBeacon.vue';

export default {
    name: 'MonitoringArea',
    props: {
        area: {
            type: Object,
            required: true,
        },
        areaIndex: {
            type: Number,
            required: true, // Para recibir el índice del área desde el componente padre
        },
        highlightedBeacon: {
            type: String,
            default: null, // ID del beacon a resaltar
        },
    },
    components: {
        MonitoringBeacon,
    },
    setup(props, { emit }) {
        // Colores predefinidos para las áreas
        const backgroundColors = [
            'linear-gradient(to right, #DED93A, #EEA735)', 
            'linear-gradient(to right, #09bdf7, #3ADEC6)', 
            'linear-gradient(to right, #40EFEF, #34B6E5)', 
            'linear-gradient(to right, #D0A6F4, #B06BED)', 
            'linear-gradient(to right, #EDAE6B, #EF9B40)', 
        ];

        // Obtener el color de fondo según el índice
        const getBackgroundColor = (index) => {
            return backgroundColors[index % backgroundColors.length];
        };

        const selectBeacon = (beacon) => {
            emit('beaconSelected', beacon);
        };

        return {
            getBackgroundColor,
            selectBeacon,
        };
    },
};
</script>

<style scoped>
/* Estilos adicionales para ajustar el diseño */
</style>
