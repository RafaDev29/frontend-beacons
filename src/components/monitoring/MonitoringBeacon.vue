<template>
    <div class="relative">
        <!-- Ícono del Beacon -->
        <div 
            :class="['w-12 h-12 flex items-center justify-center rounded-full shadow-inner cursor-pointer transition duration-300', 
                     { 'bg-blue-100 hover:bg-blue-200': !highlighted, 'animate-flash': highlighted }]"
            @click="$emit('click')"
            @mouseover="showTooltip = true"
            @mouseleave="showTooltip = false"
        >
            <i :class="[beacon.icon, 'text-2xl text-blue-600']"></i>
        </div>

        <!-- Tooltip -->
        <div 
            v-if="showTooltip" 
            class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-3 py-1 bg-black text-white text-sm font-medium rounded-md"
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
        highlighted: {
            type: Boolean,
            default: false, // Indica si este beacon debe parpadear
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
/* Animación de parpadeo */
@keyframes flash {
    0%, 100% {
        background-color: rgba(19, 204, 84, 0); /* Sin color */
    }
    50% {
        background-color: rgba(255, 60, 0, 0.791); /* Amarillo tenue */
    }
}
.animate-flash {
    animation: flash 1s ease-in-out infinite;
}
</style>
