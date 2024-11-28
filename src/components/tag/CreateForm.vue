<template>
    <div v-if="item" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div class="bg-white rounded-lg shadow-lg max-w-md w-full p-6 max-h-[80vh] overflow-y-auto">
            <h2 class="text-xl font-semibold text-gray-700 mb-4 text-center">Crear Nueva Antena</h2>

            <form @submit.prevent="submitForm">
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Nombre</label>
                    <input type="text" v-model="form.name"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required />
                </div>

                <div class="mb-4 relative">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Seleccionar un icono</label>
                    <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                        <!-- Mostrar icono seleccionado -->
                        <i :class="form.icon" class="text-xl mr-3"></i>
                        <!-- Botón para abrir/cerrar el menú -->
                        <button type="button" @click="toggleDropdown" class="ml-auto text-xl">
                            <i :class="isDropdownOpen ? 'fa-solid fa-minus' : 'fa-solid fa-plus'"></i>
                        </button>
                    </div>

                    <!-- Menú desplegable -->
                    <div v-if="isDropdownOpen"
                        class="absolute z-10 bg-white border border-gray-300 rounded-lg shadow-lg mt-2 w-full p-2 grid grid-cols-6 gap-4">
                        <!-- Lista de íconos -->
                        <div v-for="icon in icons" :key="icon"
                            class="p-2 cursor-pointer hover:bg-gray-100 flex justify-center items-center rounded-lg"
                            :class="{ 'bg-blue-100 text-blue-500': form.icon === icon }" @click="selectIcon(icon)">
                            <!-- Mostrar ícono -->
                            <i :class="icon" class="text-2xl"></i>
                        </div>
                    </div>
                </div>



                <!-- Selector de colores -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Color</label>
                    <input type="color" v-model="form.color"
                        class="w-full h-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Mac</label>
                    <input type="text" v-model="form.mac"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required />
                </div>

                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Nombre del apoderado</label>
                    <input type="text" v-model="form.proxyName"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Correos de Apoderado</label>
                    <input type="text" v-model="form.proxyEmail"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Teléfono de Apoderado</label>
                    <input type="text" v-model="form.proxyPhone"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required />
                </div>

                <div class="mb-4">
                    <label for="countries" class="block text-sm font-medium text-gray-500 mb-1">
                        Seleccionar categoría de antenas
                    </label>
                    <select id="countries" v-model="form.typeId"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="" disabled selected>Antenas</option>
                        <option v-for="cantenna in cantennas" :key="cantenna._id" :value="cantenna._id">
                            {{ cantenna.name }}
                        </option>
                    </select>
                </div>

                <div class="flex justify-end space-x-2">
                    <button type="button" @click="closeDialog"
                        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                        Cancelar
                    </button>
                    <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Guardar
                    </button>
                </div>
            </form>

        </div>
    </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { listCTagApi } from "@/api/CTagService";
import store from "@/store";

export default {
    emits: ["close", "ItemCreate"],
    setup(props, { emit }) {
        const item = ref(true);
        const isDropdownOpen = ref(false);

       
        const cantennas = ref([]);

        const form = ref({
            name: "",
            typeId: "",
            icon: "fa-solid fa-user", // Ícono predeterminado
            color: "#000000",
            mac: "",
            proxyName: "",
            proxyEmail: "",
            proxyPhone: "",
        });


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

        // Función para listar categorías
        const listCAntenna = async () => {
            try {
                const token = store.state.token;
                const response = await listCTagApi(token);
                if (response) {
                    cantennas.value = response.data.data;
                }
            } catch (error) {
                console.error("Error al listar categoría de antenas.");
            }
        };



        const toggleDropdown = () => {
            isDropdownOpen.value = !isDropdownOpen.value; // Abrir/cerrar menú
        };

        const selectIcon = (icon) => {
            console.log('Icon selected:', icon); // Añadimos este log para depuración
            form.value.icon = icon;
            isDropdownOpen.value = false;
        };


        const closeDialog = () => {
            emit("close");
        };

        const submitForm = () => {
            emit("ItemCreate", form.value);
        };

        onMounted(() => {
            listCAntenna();
        });

        return {
            item,
            form,

            isDropdownOpen,
            toggleDropdown,
            selectIcon,
            closeDialog,
            submitForm,
            listCAntenna,
            cantennas,
            icons,
        };
    },
};
</script>
