<template>
    <div v-if="item" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div class="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <h2 class="text-lg font-semibold text-gray-700 mb-4 text-center ">Editar Area</h2>
            <form @submit.prevent="submitUpdate">
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Nombre</label>
                    <input type="text" v-model="editedItem.name"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required />
                </div>

                <div class="mb-4">
                    <label for="countries" class="block text-sm font-medium text-gray-500 mb-1">
                        Seleccionar Layout
                    </label>
                    <select id="countries" v-model="editedItem.layout._id"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" disabled>Seleccionar Layout</option>
                        <option v-for="layout in layouts" :key="layout._id" :value="layout._id">
                            {{ layout.name }}
                        </option>
                    </select>

                </div>

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
import { ref, watch , onMounted} from 'vue';
import { listLayoutApi } from '@/api/LayoutService'
import store from '@/store';
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    emits: ['close', 'updateItem'],
    setup(props, { emit }) {
        const editedItem = ref({ ...props.item });
        const layouts = ref([]);
        watch(
            () => props.item,
            (newItem) => {
                editedItem.value = { ...newItem };
            }
        );

        const listLayout = async () => {
            try {
                const token = store.state.token
                const response = await listLayoutApi(token)
                layouts.value = response.data.data
            } catch (error) {
                console.log("error al obtener layouts")
            }

        }

        watch(
            () => editedItem.value.layout._id,
            (newLayoutId) => {
                const selectedLayout = layouts.value.find(layout => layout._id === newLayoutId);
                if (selectedLayout) {
                    editedItem.value.layout = { ...selectedLayout };
                }
            }
        );
        const submitUpdate = () => {
            emit('updateItem', editedItem.value);

        };
        onMounted(
            listLayout
        )

        return {
            editedItem,
            submitUpdate,
            listLayout,
            layouts
        };
    },
};
</script>
