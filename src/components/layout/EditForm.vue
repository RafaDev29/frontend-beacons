<template>
    <div v-if="item" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div class="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <h2 class="text-lg font-semibold text-gray-700 mb-4 text-center ">Editar Layout</h2>
            <form @submit.prevent="submitUpdate">
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Nombre</label>
                    <input type="text" v-model="editedItem.name"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required  />
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
import { ref, watch } from 'vue';

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

        watch(
            () => props.item,
            (newItem) => {
                editedItem.value = { ...newItem };
            }
        );

        const submitUpdate = () => {
            emit('updateItem', editedItem.value);

        };

        return {
            editedItem,
            submitUpdate,
        };
    },
};
</script>
