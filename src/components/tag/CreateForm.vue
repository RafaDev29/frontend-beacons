<template>
    <div v-if="item" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div class=" bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <h2 class="text-xl font-semibold text-gray-700 mb-4 text-center">Crear Nueva Antena</h2>
            <form @submit.prevent="submitForm">
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Nombre</label>
                    <input type="text" v-model="form.name"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Icono</label>
                    <input type="text" v-model="form.icon"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Color</label>
                    <input type="text" v-model="form.color"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Mac</label>
                    <input type="text" v-model="form.mac"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Nombre del apoderado</label>
                    <input type="text" v-model="form.mac"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Correos de Apoderado</label>
                    <input type="text" v-model="form.mac"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required />
                </div>

                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Teléfono de apoderado de Apoderado</label>
                    <input type="text" v-model="form.mac"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required />
                </div>

                <div class="mb-4">
                    <label for="countries" class="block text-sm font-medium text-gray-500 mb-1">
                        Seleccionar categoria de antenas
                    </label>
                    <select id="countries" v-model="form.typeId"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
import { onMounted, ref } from 'vue';

import { listCTagApi } from '@/api/CTagService'
import store from '@/store';

export default {
    emits: ['close', 'ItemCreate'],
    setup(props, { emit }) {
        const item = ref(true);

        const cantennas = ref([])
        const form = ref({
            name: '',
            areaId: '',
            typeId: ''

        });


        const listCAntenna = async () => {
            try {
                const token = store.state.token
                const response = await listCTagApi(token);
                if (response) {
                    cantennas.value = response.data.data
                }
            } catch (error) {
                console.log("error al listar categoria de antenas xd.")
            }
        }
        const closeDialog = () => {
            emit('close');
        };


        const submitForm = async () => {
            emit('ItemCreate', form.value)
        };

        onMounted(
       
            listCAntenna()
        )

        return {
            item,
            form,
            closeDialog,
            submitForm,
            listCAntenna,
            cantennas
        };
    }
};
</script>

<style scoped></style>