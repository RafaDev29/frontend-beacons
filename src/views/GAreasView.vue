<template>
    <div>
        <div class="flex justify-between items-center">
            <h1 class="font-bold lg:text-2xl text-xl text-gray-500 mb-5"> Grupo de Áreas</h1>
            <button
                class="flex items-center justify-center bg-[#318bf1] text-white font-semibold px-5 py-2 rounded-lg hover:bg-orange-500 shadow-md"
                @click="openCreateForm">
                Crear +
            </button>
        </div>

        <DataTable :items="items" @viewAntennas="listAntennas" @deleteItem="deleteItems" @editItem="openEditForm" />
        <AntennasModal v-if="isAntennasModalVisible" :antennas="selectedAntennas" @close="closeAntennaModal"
            :isVisible="isAntennasModalVisible" />


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



import { listGTagsApi, deleteGTagsApi, updateGTagsApi, createGTagsApi } from '@/api/GTagService'

import AntennasModal from '@/components/gtags/ViewTags.vue';
import createForm from '@/components/gtags/CreateForm.vue';
import EditForm from '@/components/gtags/EditForm.vue';
import store from '@/store';
import DataTable from '@/components/gtags/DataTable.vue';



export default {
    components: { DataTable, AntennasModal, createForm, EditForm },
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
                const token = store.state.token;
                const id = data._id;

                // Construcción del payload
                const payload = {
                    name: data.name,
                    mobilesItems: data.mobilesItems.map((item) => item._id), // Extrae el campo `mac` de cada objeto
                };
                const response = await updateGTagsApi(token, payload, id);
                if (response) {
                    closeEditForm(); 
                    closeLoading();  
                }
                await fetchItems(); 
            } catch (error) {
                console.error("Error al actualizar:", error);
                closeLoading(); 
            }
        };

        const submitItems = async (data) => {
            try {
                const token = store.state.token;

                await createGTagsApi(token, data);
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
                const response = await deleteGTagsApi(token, id)
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
                const response = await listGTagsApi(token);
                items.value = response.data.data;
                if (response) {
                    closeLoading()
                }
            } catch (error) {
                closeLoading();
                console.error('Error al obtener las rutas:', error);
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
