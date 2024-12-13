<template>
  <div class="containerlogin relative flex items-start h-screen">
    <!-- Capa de color sobre la imagen de fondo -->
    <div class="overlay absolute inset-0 bg-[#196aee] opacity-50"></div>

    <!-- Formulario alineado a la izquierda y ocupando toda la altura -->
    <div class="form-wrapper relative w-full sm:w-3/4 md:w-2/4 lg:w-1/4 h-full p-4 bg-[#ffffff] text-white shadow-lg">
      <div class="formLogin h-full flex flex-col justify-center">
        <FormAuthVue @validate-login="onValidateLogin" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import FormAuthVue from '@/components/login/FormAuth.vue';
import { authLoginApi } from '@/api/LoginService';
import { listarCuentasApi } from '@/api/MenuService';
import store from '@/store';

export default {
  components: {
    FormAuthVue,
  },
  setup() {
    const messageError = ref('');
    const statusError = ref(false);
    const router = useRouter();
    const route = useRoute();

    const onValidateLogin = async (data) => {
      try {
        const response = await authLoginApi(data);
        const user = response.data.data;
        const token = user.token;

        // Guarda los datos del usuario en el store
        store.commit('setUsername', user.username);
        store.commit('setToken', token);
        store.commit('setRole', user.role);
        store.commit('setIsAuthenticated', true);

        // Consume el servicio para obtener los datos del menú
        const menuResponse = await listarCuentasApi(token);

        if (menuResponse.status && Array.isArray(menuResponse.data.data)) {
          // Guarda los datos del menú en el store
          store.commit('setMenuData', menuResponse.data.data);
        } else {
          console.error('La respuesta del menú no es válida:', menuResponse);
        }

        // Redirige a la página principal
        router.push('/');
      } catch (error) {
        statusError.value = true;

        if (error.response) {
          if (error.response.status === 401) {
            messageError.value = 'Las credenciales de usuario no son válidas';
          } else if (error.response.status === 500) {
            messageError.value = 'Error 500: Error interno del servidor';
          } else {
            messageError.value = error.response.data.message;
          }
        } else if (error.request) {
          messageError.value = 'No se recibió respuesta del servidor';
        } else {
          messageError.value = 'Error al configurar la solicitud: ' + error.message;
        }

        console.error('Error en el proceso de inicio de sesión:', error);
      }
    };

    onMounted(() => {
      const username = route.query.username;
      const password = route.query.password;

      if (username && password) {
        onValidateLogin({ username, password });
      }
    });

    return {
      onValidateLogin,
      messageError,
      statusError,
    };
  },
};
</script>

<style scoped>
.containerlogin {
  background-image: url('@/assets/login/background.jpg');
  background-size: cover;
  background-position: center;

  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
