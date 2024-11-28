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
import {  } from 'vue';

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
    },
    components: {
        MonitoringBeacon,
    },
    setup(props, { emit }) {
        // Colores predefinidos para las áreas
        const backgroundColors = [
            'linear-gradient(to right, #e3f2fd, #bbdefb)', // Azul claro
            'linear-gradient(to right, #f1f8e9, #c5e1a5)', // Verde claro
            'linear-gradient(to right, #fff3e0, #ffcc80)', // Naranja claro
            'linear-gradient(to right, #ede7f6, #d1c4e9)', // Púrpura claro
            'linear-gradient(to right, #fce4ec, #f8bbd0)', // Rosa claro
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
