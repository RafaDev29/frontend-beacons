<template>
    <div>
        <div class="flex justify-between items-center">
            <h1 class="font-bold lg:text-2xl text-xl text-gray-500 mb-5"> Etiquetas</h1>
            <button
                class="flex items-center justify-center bg-[#318bf1] text-white font-semibold px-5 py-2 rounded-lg hover:bg-orange-500 shadow-md"
                @click="openCreateForm">
                Crear +
            </button>
        </div>

        <DataTable :items="items" @viewAntennas="listAntennas" @deleteItem="deleteItems" @editItem="openEditForm"
            @deleteMassive="deleteMassive"  @updateMassive="handleUpdateMassive"/>
        <createForm v-if="isCreateFormVisible" @close="closeCreateForm" @ItemCreate="submitItems"  />
        <EditForm v-if="isEditFormVisible" :item="selectedItem" @close="closeEditForm" @updateItem="updateItems" />
        <EditCategory v-if="showUpdateModal" :ids="selectedIds" @close="showUpdateModal = false" @confirmUpdate="UpdateMassive" />
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


import { listTagApi, createTagApi, deleteTagApi, updateTagApi, deleteMassiveTagApi, updateMassiveTagApi } from '@/api/TagService'
import createForm from '@/components/tag/CreateForm.vue';
import EditForm from '@/components/tag/EditForm.vue';
import store from '@/store';
import DataTable from '@/components/tag/DataTable.vue';
import EditCategory from '@/components/tag/EditCategory.vue'



export default {
    components: { DataTable, createForm, EditForm, EditCategory },
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
        const showUpdateModal = ref(false); 
        const selectedIds = ref([]);
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

       

        const handleUpdateMassive = (ids) => {
            selectedIds.value = ids; 
            showUpdateModal.value = true; 
        };

        const UpdateMassive  = async (data)=>{
            openLoading();
            try{
                const token = store.state.token
                const response= await updateMassiveTagApi(token, data);
                if(response){
                    console.log("Actualización exitosa")
                    closeLoading();
                }
                await fetchItems();
            }catch{
                closeLoading();
                console.error("no se pudo actualizar la categoria de etiquetas")
            }

        }

    



        const updateItems = async (data) => {

            openLoading();
            try {
                const token = store.state.token
                const id = data._id


                const response = await updateTagApi(token, data, id);

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
            const array = [data]
            try {
                const token = store.state.token;
                await createTagApi(token, array);
                await fetchItems();
                closeCreateForm();
            } catch (error) {
                closeCreateForm();
                console.error('error al crear etiqueta:', error);
            }
        };


        const deleteItems = async (item) => {
            openLoading();
            try {
                const token = store.state.token
                const id = item._id
                const response = await deleteTagApi(token, id)
                if (response) {
                    closeLoading()
                }
                await fetchItems();
            } catch (error) {
                closeLoading();
                console.error('Error al elimianr las etiquetas:', error);
            }
        }

        const deleteMassive = async (items) => {
            try {
                const payload = { ids: items }

                const token = store.state.token
                const response = await deleteMassiveTagApi(token, payload);
                if (response) {
                    closeLoading()
                }
                await fetchItems();
            } catch (error) {
                closeLoading();
                console.error('Error al eliminar las etiquetas:', error);
            }
        }

        const fetchItems = async () => {
            openLoading();
            try {
                const token = store.state.token;
                const response = await listTagApi(token);
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
            selectedAntennas,
            deleteMassive,
            showUpdateModal,
            selectedIds,
            handleUpdateMassive,
            UpdateMassive
        };
    },
};
</script>
