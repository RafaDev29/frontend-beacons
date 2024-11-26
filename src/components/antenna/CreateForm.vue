<template>
    <div v-if="item" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div class=" bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <h2 class="text-xl font-semibold text-gray-700 mb-4 text-center">Crear Nueva Antena</h2>
            <form @submit.prevent="submitForm">
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Nombre</label>
                    <input type="text" v-model="form.mac"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required />
                </div>

                <div class="mb-4">
                    <label for="countries" class="block text-sm font-medium text-gray-500 mb-1">
                        Seleccionar Tipo de Antena
                    </label>
                    <select id="countries" v-model="form.areaId"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" disabled selected>areas</option>
                        <option v-for="area in areas" :key="area._id" :value="area._id">
                            {{ area.name }}
                        </option>
                    </select>
                </div>

                <div class="mb-4">
                    <label for="countries" class="block text-sm font-medium text-gray-500 mb-1">
                        Seleccionar Area
                    </label>
                    <select id="countries" v-model="form.areaId"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" disabled selected>layouts</option>
                        <option v-for="layout in layouts" :key="layout._id" :value="layout._id">
                            {{ layout.name }}
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
import { listAreasApi } from '@/api/AreaService'
import {listCAntennaApi } from '@/api/CAntenaService'
import store from '@/store';

export default {
    emits: ['close', 'ItemCreate'],
    setup(props, { emit }) {
        const item = ref(true);
        const areas = ref([])
        const cantenna = ref([])
        const form = ref({
            name: '',
            areaId: ''
        });

        const listAreas = async () => {
            try {
                const token = store.state.token
                const response = await listAreasApi(token)
                if (response) {
                    areas.value = response.data.data
                    console.log("listado de areas correctamente")

                }
            } catch (error) {
                console.assert("erro al listar areas")
            }
        }

        const listCAntenna = async () => {
            try{
                const token = store.state.token 
                const response = await listCAntennaApi(token);
                response(response){

                }
            }catch(error){

            }
        }
        const closeDialog = () => {
            emit('close');
        };


        const submitForm = async () => {
            emit('ItemCreate', form.value)
        };

        onMounted(
            listAreas
        )

        return {
            item,
            form,
            closeDialog,
            submitForm,
            listAreas,
            areas,
            listCAntenna
        };
    }
};
</script>

<style scoped></style>