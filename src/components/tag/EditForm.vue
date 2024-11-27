<template>
    <div v-if="item" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div class="bg-white rounded-lg shadow-lg max-w-md w-full p-6 max-h-[80vh] overflow-y-auto">
            <h2 class="text-lg font-semibold text-gray-700 mb-4 text-center">Editar Área</h2>
         
            <form @submit.prevent="submitUpdate">
             
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Nombre</label>
                    <input type="text" v-model="editedItem.name"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required />
                </div>

                
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">MAC</label>
                    <input type="text" v-model="editedItem.mac"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required />
                </div>

                <div class="mb-4 relative">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Seleccionar un icono</label>
                    <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                      
                        <i :class="editedItem.icon || 'fa-solid fa-circle-question'" class="text-xl mr-3"></i>
                    
                        <button type="button" @click="toggleDropdown" class="ml-auto text-xl">
                            <i :class="isDropdownOpen ? 'fa-solid fa-minus' : 'fa-solid fa-plus'"></i>
                        </button>
                    </div>

                    <div v-if="isDropdownOpen"
                        class="absolute z-10 bg-white border border-gray-300 rounded-lg shadow-lg mt-2 w-full p-2 grid grid-cols-6 gap-4">
                        <!-- Lista de Iconos -->
                        <div v-for="icon in icons" :key="icon"
                            class="p-2 cursor-pointer hover:bg-gray-100 flex justify-center items-center rounded-lg"
                            :class="{ 'bg-blue-100 text-blue-500': editedItem.icon === icon }"
                            @click="selectIcon(icon)">
                            <i :class="icon" class="text-2xl"></i>
                        </div>
                    </div>
                </div>

                <!-- Selector de Colores -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Color</label>
                    <input type="color" v-model="editedItem.color"
                        class="w-full h-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <!-- Campo Nombre del Apoderado -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Nombre del Apoderado</label>
                    <input type="text" v-model="editedItem.proxyName"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <!-- Campo Email del Apoderado -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Correo del Apoderado</label>
                    <input type="email" v-model="editedItem.proxyEmail"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <!-- Campo Teléfono del Apoderado -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Teléfono del Apoderado</label>
                    <input type="text" v-model="editedItem.proxyPhone"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                
                <!-- Selector de Tipo -->
                <div class="mb-4">
                    <label for="typeId" class="block text-sm font-medium text-gray-500 mb-1">Seleccionar
                        Categoría</label>
                    <select id="typeId" v-model="editedItem.typeId._id"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="" disabled>Seleccionar Categoría</option>
                        <option v-for="catag in catags" :key="catag._id" :value="catag._id">
                            {{ catag.name }}
                        </option>
                    </select>
                </div>

                <!-- Botones -->
                <div class="flex justify-end space-x-2">
                    <button type="button" @click="$emit('close')"
                        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                        Cancelar
                    </button>
                    <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Guardar Cambios
                    </button>
                </div>
            </form>
        
        </div>
    </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { listCTagApi } from "@/api/CTagService";
import store from "@/store";

export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    emits: ["close", "updateItem"],
    setup(props, { emit }) {
        const editedItem = ref({ ...props.item });
        const catags = ref([]);
        const isDropdownOpen = ref(false);

        // Lista de iconos disponibles
        const icons = ref([
            "fa-solid fa-user",
            "fa-solid fa-user-tie",
            "fa-solid fa-user-nurse",
            "fa-solid fa-user-graduate",
            "fa-solid fa-car",
            "fa-solid fa-bicycle",
            "fa-solid fa-truck",
            "fa-solid fa-ship",
            "fa-solid fa-plane",
            "fa-solid fa-train",
            "fa-solid fa-bus",
            "fa-solid fa-heart",
            "fa-solid fa-house",
            "fa-solid fa-flag",
            "fa-solid fa-tree",
        ]);

        watch(
            () => props.item,
            (newItem) => {
                editedItem.value = { ...newItem };
            }
        );

        const listLayout = async () => {
            try {
                const token = store.state.token;
                const response = await listCTagApi(token);
                catags.value = response.data.data;
            } catch (error) {
                console.error("Error al obtener layouts");
            }
        };

        const toggleDropdown = () => {
            isDropdownOpen.value = !isDropdownOpen.value;
        };

        const selectIcon = (icon) => {
            editedItem.value.icon = icon;
            isDropdownOpen.value = false;
        };

        const submitUpdate = () => {
            emit("updateItem", editedItem.value);
        };

        onMounted(() => {
            listLayout();
        });



        return {
            editedItem,
            catags,
            isDropdownOpen,
            toggleDropdown,
            selectIcon,
            submitUpdate,
            icons,
        };
    },
};
</script>
