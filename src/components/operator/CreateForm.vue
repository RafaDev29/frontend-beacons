<template>
    <div v-if="item" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div class="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <h2 class="text-xl font-semibold text-gray-700 mb-4 text-center">Crear Nuevo Operador</h2>
            <form @submit.prevent="submitForm">
                <!-- Campo Nombre -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Nombre</label>
                    <input 
                        type="text" 
                        v-model="form.name"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                <!-- Campo Teléfono -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Teléfono</label>
                    <input 
                        type="tel" 
                        v-model="form.phone"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Ej: 929831019"
                        required
                    />
                </div>

                <!-- Campo Nombre de Usuario -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Nombre de Usuario</label>
                    <input 
                        type="text" 
                        v-model="form.username"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                <!-- Campo Contraseña -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-500 mb-1">Contraseña</label>
                    <input 
                        type="password" 
                        v-model="form.password"
                        class="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                <!-- Botones de Acción -->
                <div class="flex justify-end space-x-2">
                    <button 
                        type="button" 
                        @click="closeDialog"
                        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                    >
                        Cancelar
                    </button>
                    <button 
                        type="submit"
                        class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    emits: ['close', 'ItemCreate'],
    setup(props, { emit }) {
        const item = ref(true);
        const form = ref({
            name: '',
            phone: '',
            username: '',
            password: '',
        });

        const closeDialog = () => {
            emit('close');
        };

        const submitForm = async () => {
            emit('ItemCreate', form.value);
        };

        return {
            item,
            form,
            closeDialog,
            submitForm
        };
    }
};
</script>

<style scoped></style>
