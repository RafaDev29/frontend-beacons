<template>
    <div>
        <div class="flex justify-between items-center">
            <h1 class="font-bold lg:text-2xl text-xl text-gray-500 mb-5"> Antenas</h1>
            <button
                class="flex items-center justify-center bg-[#318bf1] text-white font-semibold px-5 py-2 rounded-lg hover:bg-orange-500 shadow-md"
                @click="openCreateForm">
                Crear +
            </button>
        </div>

        <DataTable :items="items" @viewAntennas="listAntennas" @deleteItem="deleteItems" @editItem="openEditForm" />
        <createForm v-if="isCreateFormVisible" @close="closeCreateForm" @ItemCreate="submitItems" />
        <EditForm v-if="isEditFormVisible" :item="selectedItem" @close="closeEditForm" @updateItem="updateItems" />
    </div>

    <!-- Loading Overlay -->
    <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
        <div class="flex flex-col items-center space-y-4">
            <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
            <p class="text-white text-lg font-semibold">Cargando, por favor espera...</p>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

import {   updateAreaApi } from '@/api/AreaService'
import { listAntennaApi , deleteAntennaApi , createAntennaApi} from '@/api/AntennaService'


import createForm from '@/components/antenna/CreateForm.vue';
import EditForm from '@/components/area/EditForm.vue';
import store from '@/store';
import DataTable from '@/components/antenna/DataTable.vue';



export default {
    components: { DataTable, createForm, EditForm },
    setup() {
        const items = ref([]);
        const selectedAntennas = ref(null)
        const selectedItem = ref(null)
        const isLoading = ref(false);
        const isAntennasModalVisible = ref(false);
        const isCreateFormVisible = ref(false);
        const isEditFormVisible = ref(false);
        const openCreateForm = () => {
            isCreateFormVisible.value = true;
        };

        const closeCreateForm = () => {
            isCreateFormVisible.value = false;
        };
        const openLoading = () => {
            isLoading.value = true;
        }
        const closeLoading = () => {
            isLoading.value = false;
        }
        const listAntennas = (data) => {

            selectedAntennas.value = data;
            isAntennasModalVisible.value = true;
        };
        const closeAntennaModal = () => {
            isAntennasModalVisible.value = false;
            selectedAntennas.value = null;
        };

        const openEditForm = (item) => {
            selectedItem.value = { ...item };
            isEditFormVisible.value = true;
        };

        const closeEditForm = () => {
            isEditFormVisible.value = false;
        };

        const updateItems = async (data) => {
            openLoading();
            try {
                const token = store.state.token
                const id = data._id

                const payload = {
                    name: data.name,
                    layoutId: data.layout._id,

                }
                const response = await updateAreaApi(token, payload, id);

                if (response) {
                    closeEditForm();
                    closeLoading();

                }
                await fetchItems();
            } catch (error) {
                closeLoading()

            }
        }

        const submitItems = async (data) => {
            try {
                const token = store.state.token;
                const payload = {
                    mac: data.mac,
                    areaId: data.areaId,
                    typeId: data.typeId
                };
                await createAntennaApi(token, payload);
                await fetchItems();
                closeCreateForm();
            } catch (error) {
                closeCreateForm();
                console.error('error al crear area:', error);
            }
        };


        const deleteItems = async (item) => {
            openLoading();
            try {
                const token = store.state.token
                const id = item._id
                const response = await deleteAntennaApi(token, id)
                if (response) {
                    closeLoading()
                }
                await fetchItems();
            } catch (error) {
                closeLoading();
                console.error('Error al obtener los layout:', error);
            }
        }

        const fetchItems = async () => {
            openLoading();
            try {
                const token = store.state.token;
                const response = await listAntennaApi(token);
                items.value = response.data.data;
                if (response) {
                    closeLoading()
                }
            } catch (error) {
                closeLoading();
                console.error('Error al obtener las antenas:', error);
            }
        };



        onMounted(fetchItems);

        return {
            items,
            fetchItems,
            openLoading,
            closeLoading,
            isLoading,
            listAntennas,

            closeAntennaModal,

            deleteItems,
            isCreateFormVisible,
            openCreateForm,
            closeCreateForm,
            submitItems,
            updateItems,
            openEditForm,
            closeEditForm,
            isEditFormVisible,
            selectedItem,
            isAntennasModalVisible,
            selectedAntennas
        };
    },
};
</script>
