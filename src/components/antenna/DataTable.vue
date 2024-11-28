<template>
    <v-text-field v-model="search" label="Buscar" prepend-inner-icon="mdi-magnify" variant="outlined" hide-details
        single-line class="mb-5 PT-3"></v-text-field>
    <v-card flat>
        <v-data-table :headers="headers" :items="filteredItems" :search="search">


            <!-- Íconos en la columna de acciones -->
            <template v-slot:[`item.actions`]="{ item }">
                <v-icon small color="green" class="mr-4" @click="editItem(item)">
                    mdi-pencil
                </v-icon>
                <v-icon small color="red" @click="deleteItem(item)">
                    mdi-delete
                </v-icon>
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
    emits: ["deleteItem", "editItem"],
    setup(props, { emit }) {
        const search = ref("");

        const headers = ref([
            { key: "id", title: "ID" },
            { key: "mac", title: "MAC" },
            { key: "area.name", title: "Area" },
            { key: "actions", title: "Acciones", sortable: false },
        ]);

        const filteredItems = computed(() => {
            if (!search.value) {
                return indexedItems.value;
            }
            const searchTerm = search.value.toLowerCase();
            return indexedItems.value.filter((item) =>
                Object.values(item).some((val) =>
                    String(val).toLowerCase().includes(searchTerm)
                )
            );
        });

        const indexedItems = computed(() => {
            return props.items.map((item, index) => ({
                id: index + 1,
                ...item
            }));
        });


        const deleteItem = (item) => {
            emit("deleteItem", item);
        };

        const editItem = (item) => {
            emit("editItem", item);
        };


        return {
            search,
            headers,
            filteredItems,
            deleteItem,
            editItem,

        };
    },
};
</script>

<style scoped>
/* Estilos específicos para el componente de la tabla */
</style>