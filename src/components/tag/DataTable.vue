<template>
    <div class="d-flex align-center mb-5">
        <v-text-field v-model="search" label="Buscar" prepend-inner-icon="mdi-magnify" variant="outlined" hide-details
            single-line class="flex-grow-1"></v-text-field>

            

        <v-select v-model="selectedEvent" :items="events" label="Seleccionar Acción" variant="outlined" hide-details
            class="flex ml-5"></v-select>

        <v-btn color="primary" class="ml-3 w-[100px] h-[100px]" @click="emitEvent"
            :disabled="!selectedEvent || selectedItems.length === 0">
            Aplicar

        </v-btn>

        

    </div>

    <v-card flat>
        <v-data-table :headers="headers" :items="indexedItems" :search="search" show-select v-model="selectedItems"
            item-value="_id">
            <!-- Íconos en la columna de acciones -->
            <template v-slot:[`item.actions`]="{ item }">
                <v-icon small color="green" class="mr-4" @click="editItem(item)">
                    mdi-pencil
                </v-icon>
                <v-icon small color="red" @click="deleteItem(item)">
                    mdi-delete
                </v-icon>
            </template>

            <template v-slot:[`item.icon`]="{ item }">
                <v-icon :class="item.icon" class="mdi-account"></v-icon>
            </template>

            <!-- Mostrar color como un cuadro en la columna color -->
            <template v-slot:[`item.color`]="{ item }">
                <div :style="{ backgroundColor: item.color, width: '24px', height: '24px', borderRadius: '50%' }"></div>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
import { ref, computed } from "vue";

export default {
    name: "DataTable",
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    emits: ["deleteItem", "editItem", "deleteMassive", "updateMassive"],
    setup(props, { emit }) {
        const search = ref("");
        const selectedItems = ref([]);
        const selectedEvent = ref(null); // Evento seleccionado
        const events = ref(["Eliminación Masiva", "Actualización Masiva"]); // Opciones de eventos

        const headers = ref([
            { key: "id", title: "ID" },
            { key: "name", title: "Nombre" },
            { key: "mac", title: "MAC" },
            { key: "icon", title: "Icono" },
            { key: "color", title: "Color" },
            { key: "actions", title: "Acciones", sortable: false },
        ]);

        const indexedItems = computed(() => {
            return props.items.map((item, index) => ({
                id: index + 1,
                ...item,
            }));
        });

        const emitEvent = () => {
            if (selectedEvent.value === "Eliminación Masiva") {
                console.log("Emitir Eliminación Masiva con IDs:", selectedItems.value);
                emit("deleteMassive", selectedItems.value);
            } else if (selectedEvent.value === "Actualización Masiva") {
                console.log("Emitir Actualización Masiva con IDs:", selectedItems.value);
                emit("updateMassive", selectedItems.value);
            }
        };

        const deleteItem = (item) => {
            emit("deleteItem", item);
        };

        const editItem = (item) => {
            emit("editItem", item);
        };

        return {
            search,
            selectedItems,
            selectedEvent,
            events,
            headers,
            indexedItems,
            emitEvent,
            deleteItem,
            editItem,
        };
    },
};
</script>

<style scoped>
/* Estilos específicos para el componente */
</style>
