<template>
    <div class="relative">
        <!-- Ícono del Beacon -->
        <div 
            class="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full shadow-inner cursor-pointer hover:bg-blue-200 transition duration-300"
            @click="$emit('click')"
            @mouseover="showTooltip = true"
            @mouseleave="showTooltip = false"
        >
            <i :class="[beacon.icon, 'text-2xl text-blue-600']"></i>
        </div>

        <!-- Tooltip -->
        <div 
            v-if="showTooltip" 
            class="relative bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-3 py-1 bg-black text-white text-sm font-medium rounded-md "
        >
            {{ beacon.name }}
        </div>
    </div>
</template>

<script>
export default {
    name: "MonitoringBeacon",
    props: {
        beacon: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            showTooltip: false, // Controla la visibilidad del tooltip
        };
    },
};
</script>

<style scoped>
/* Asegura que el tooltip se posicione correctamente y sea visible */
</style>
