"use strict";(self["webpackChunkfrontend_ebox_platform"]=self["webpackChunkfrontend_ebox_platform"]||[]).push([[441],{9980:function(e,t,a){a.d(t,{$x:function(){return s},Qt:function(){return n},ZL:function(){return o},ZZ:function(){return i}});var r=a(1189);const l="http://198.211.99.223:3000/api/v1";function o(e){return r.A.get(`${l}/areas`,{headers:{Authorization:`Bearer ${e}`}})}function s(e,t){return r.A.delete(`${l}/areas/${t}`,{headers:{Authorization:`Bearer ${e}`}})}function n(e,t){return r.A.post(`${l}/areas`,t,{headers:{Authorization:`Bearer ${e}`}})}function i(e,t,a){return r.A.patch(`${l}/areas/${a}`,t,{headers:{Authorization:`Bearer ${e}`}})}},1441:function(e,t,a){a.r(t),a.d(t,{default:function(){return $e}});var r=a(6768);const l={class:"flex justify-between items-center"},o=(0,r.Lk)("h1",{class:"font-bold lg:text-2xl text-xl text-gray-500 mb-5"}," Grupo de Áreas",-1),s={key:0,class:"fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50"},n=(0,r.Lk)("div",{class:"flex flex-col items-center space-y-4"},[(0,r.Lk)("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"}),(0,r.Lk)("p",{class:"text-white text-lg font-semibold"},"Cargando, por favor espera...")],-1),i=[n];function d(e,t,a,n,d,u){const c=(0,r.g2)("DataTable"),m=(0,r.g2)("AntennasModal"),b=(0,r.g2)("createForm"),g=(0,r.g2)("EditForm");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",null,[(0,r.Lk)("div",l,[o,(0,r.Lk)("button",{class:"flex items-center justify-center bg-[#318bf1] text-white font-semibold px-5 py-2 rounded-lg hover:bg-orange-500 shadow-md",onClick:t[0]||(t[0]=(...e)=>n.openCreateForm&&n.openCreateForm(...e))}," Crear + ")]),(0,r.bF)(c,{items:n.items,onViewAntennas:n.listAntennas,onDeleteItem:n.deleteItems,onEditItem:n.openEditForm},null,8,["items","onViewAntennas","onDeleteItem","onEditItem"]),n.isAntennasModalVisible?((0,r.uX)(),(0,r.Wv)(m,{key:0,antennas:n.selectedAntennas,onClose:n.closeAntennaModal,isVisible:n.isAntennasModalVisible},null,8,["antennas","onClose","isVisible"])):(0,r.Q3)("",!0),n.isCreateFormVisible?((0,r.uX)(),(0,r.Wv)(b,{key:1,onClose:n.closeCreateForm,onItemCreate:n.submitItems},null,8,["onClose","onItemCreate"])):(0,r.Q3)("",!0),n.isEditFormVisible?((0,r.uX)(),(0,r.Wv)(g,{key:2,item:n.selectedItem,onClose:n.closeEditForm,onUpdateItem:n.updateItems},null,8,["item","onClose","onUpdateItem"])):(0,r.Q3)("",!0)]),n.isLoading?((0,r.uX)(),(0,r.CE)("div",s,i)):(0,r.Q3)("",!0)],64)}var u=a(144),c=a(1189);const m="http://198.211.99.223:3000/api/v1";function b(e){return c.A.get(`${m}/group-areas`,{headers:{Authorization:`Bearer ${e}`}})}function g(e,t){return c.A.delete(`${m}/group-areas/${t}`,{headers:{Authorization:`Bearer ${e}`}})}function v(e,t){return c.A.post(`${m}/group-areas`,t,{headers:{Authorization:`Bearer ${e}`}})}function p(e,t,a){return c.A.patch(`${m}/group-areas/${a}`,t,{headers:{Authorization:`Bearer ${e}`}})}var f=a(4232);const y=e=>((0,r.Qi)("data-v-be25945c"),e=e(),(0,r.jt)(),e),k={class:"overflow-y-auto bg-white rounded-lg shadow-lg max-w-md w-full p-0",style:{"max-height":"80vh","margin-bottom":"1rem"}},h=y((()=>(0,r.Lk)("div",{class:"flex justify-between items-center p-2 border-b bg-blue-500 text-white rounded-t-lg"},[(0,r.Lk)("h1",{class:"text-xl flex items-center"},[(0,r.Lk)("i",{class:"mdi mdi-map-marker-multiple text-white text-3xl ml-2"}),(0,r.eW)(" Areas ")])],-1))),x={class:"p-4"},w={class:"divide-y divide-gray-300"},C={class:"flex-1"},L={class:"font-semibold text-gray-800"},A=y((()=>(0,r.Lk)("i",{class:"mdi mdi-information-outline text-gray-400 hover:text-gray-600 text-xl cursor-pointer transition"},null,-1))),I={class:"flex justify-end p-4 border-t bg-gray-100 rounded-b-lg"};function E(e,t,a,l,o,s){return a.isVisible?((0,r.uX)(),(0,r.CE)("div",{key:0,class:"fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50",onClick:t[1]||(t[1]=(...e)=>s.closeModal&&s.closeModal(...e))},[(0,r.Lk)("div",k,[h,(0,r.Lk)("div",x,[(0,r.Lk)("ul",w,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.antennas,((e,t)=>((0,r.uX)(),(0,r.CE)("li",{key:t,class:"py-4 flex items-center space-x-4"},[(0,r.Lk)("div",C,[(0,r.Lk)("p",L,"Nombre: "+(0,f.v_)(e.name),1)]),A])))),128))])]),(0,r.Lk)("div",I,[(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>s.closeModal&&s.closeModal(...e)),class:"px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"}," Cerrar ")])])])):(0,r.Q3)("",!0)}var _={name:"ViewAreas",props:{antennas:{type:Array,required:!0},isVisible:{type:Boolean,required:!0}},emits:["close"],methods:{closeModal(){this.$emit("close")}}},F=a(1241);const D=(0,F.A)(_,[["render",E],["__scopeId","data-v-be25945c"]]);var $=D,K=a(5130);const V={key:0,class:"fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"},S={class:"bg-white rounded-lg shadow-2xl max-w-4xl w-full p-8"},X=(0,r.Lk)("h2",{class:"text-2xl font-bold text-gray-800 mb-6 text-center"},"Crear Grupo de Etiquetas",-1),j={class:"mb-6"},R=(0,r.Lk)("label",{class:"block text-sm font-semibold text-gray-700 mb-2"},"Nombre del Grupo",-1),T={class:"flex gap-8"},q={class:"w-1/2 bg-gray-50 border border-gray-300 rounded-lg shadow p-4"},M={class:"flex justify-between items-center mb-4"},B=(0,r.Lk)("h3",{class:"text-lg font-medium text-gray-800"},"Etiquetas Disponibles",-1),Q=["onDragstart","onClick"],z={class:"w-1/2 bg-gray-50 border border-gray-300 rounded-lg shadow p-4"},W={class:"flex justify-between items-center mb-4"},U=(0,r.Lk)("h3",{class:"text-lg font-medium text-gray-800"},"Etiquetas Seleccionadas",-1),G=["onDragstart","onClick"],Z={class:"flex justify-end mt-8 space-x-4"},N=(0,r.Lk)("button",{type:"submit",class:"px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"}," Guardar ",-1);function J(e,t,a,l,o,s){return l.item?((0,r.uX)(),(0,r.CE)("div",V,[(0,r.Lk)("div",S,[X,(0,r.Lk)("form",{onSubmit:t[8]||(t[8]=(0,K.D$)(((...e)=>l.submitForm&&l.submitForm(...e)),["prevent"]))},[(0,r.Lk)("div",j,[R,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>l.form.name=e),class:"w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400",placeholder:"Ingrese el nombre del grupo",required:""},null,512),[[K.Jo,l.form.name]])]),(0,r.Lk)("div",T,[(0,r.Lk)("div",q,[(0,r.Lk)("div",M,[B,(0,r.Lk)("button",{type:"button",onClick:t[1]||(t[1]=e=>l.selectAll("available")),class:"text-blue-600 hover:underline font-medium"}," Seleccionar Todos ")]),(0,r.Lk)("div",{class:"border border-gray-200 rounded-lg p-4 min-h-[300px] bg-white overflow-y-auto",onDragover:t[2]||(t[2]=(0,K.D$)((()=>{}),["prevent"])),onDrop:t[3]||(t[3]=e=>l.dropItem("available"))},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(l.availableTags,(e=>((0,r.uX)(),(0,r.CE)("div",{key:e._id,class:"bg-blue-50 border border-blue-200 rounded-lg p-2 mb-2 shadow-md cursor-pointer hover:bg-blue-100 transition",draggable:"true",onDragstart:t=>l.dragStart(e),onClick:t=>l.toggleSelection(e,"available")},(0,f.v_)(e.name),41,Q)))),128))],32)]),(0,r.Lk)("div",z,[(0,r.Lk)("div",W,[U,(0,r.Lk)("button",{type:"button",onClick:t[4]||(t[4]=e=>l.selectAll("selected")),class:"text-red-600 hover:underline font-medium"}," Quitar Todos ")]),(0,r.Lk)("div",{class:"border border-gray-200 rounded-lg p-4 min-h-[300px] bg-white overflow-y-auto",onDragover:t[5]||(t[5]=(0,K.D$)((()=>{}),["prevent"])),onDrop:t[6]||(t[6]=e=>l.dropItem("selected"))},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(l.selectedTags,(e=>((0,r.uX)(),(0,r.CE)("div",{key:e._id,class:"bg-red-50 border border-red-200 rounded-lg p-2 mb-2 shadow-md cursor-pointer hover:bg-red-100 transition",draggable:"true",onDragstart:t=>l.dragStart(e),onClick:t=>l.toggleSelection(e,"selected")},(0,f.v_)(e.name),41,G)))),128))],32)])]),(0,r.Lk)("div",Z,[(0,r.Lk)("button",{type:"button",onClick:t[7]||(t[7]=(...e)=>l.closeDialog&&l.closeDialog(...e)),class:"px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition"}," Cancelar "),N])],32)])])):(0,r.Q3)("",!0)}a(4114);var O=a(9980),P=a(5129),H={emits:["close","ItemCreate"],setup(e,{emit:t}){const a=(0,u.KR)(!0),l=(0,u.KR)({name:""}),o=(0,u.KR)([]),s=(0,u.KR)([]);let n=null;const i=async()=>{const e=P.A.state.token,t=await(0,O.ZL)(e);o.value=t.data.data},d=e=>{n={...e}},c=e=>{n&&(m(n,e),n=null)},m=(e,t)=>{"available"===t?(s.value=s.value.filter((t=>t._id!==e._id)),o.value=[...o.value,e]):"selected"===t&&(o.value=o.value.filter((t=>t._id!==e._id)),s.value=[...s.value,e])},b=(e,t)=>{const a="available"===t?"selected":"available";m(e,a)},g=e=>{"available"===e?(s.value.push(...o.value),o.value=[]):"selected"===e&&(o.value.push(...s.value),s.value=[])},v=()=>{t("close")},p=async()=>{const e={name:l.value.name,areas:s.value.map((e=>e._id))};t("ItemCreate",e)};return(0,r.sV)(i),{item:a,form:l,availableTags:o,selectedTags:s,dragStart:d,dropItem:c,toggleSelection:b,selectAll:g,closeDialog:v,submitForm:p}}};const Y=(0,F.A)(H,[["render",J]]);var ee=Y;const te={key:0,class:"fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"},ae={class:"bg-white rounded-lg shadow-2xl max-w-4xl w-full p-8"},re=(0,r.Lk)("h2",{class:"text-2xl font-bold text-gray-800 mb-6 text-center"},"Editar Área",-1),le={class:"mb-6"},oe=(0,r.Lk)("label",{class:"block text-sm font-semibold text-gray-700 mb-2"},"Nombre del Área",-1),se={class:"flex gap-8"},ne={class:"w-1/2 bg-gray-50 border border-gray-300 rounded-lg shadow p-4"},ie={class:"flex justify-between items-center mb-4"},de=(0,r.Lk)("h3",{class:"text-lg font-medium text-gray-800"},"Etiquetas Disponibles",-1),ue=["onDragstart","onClick"],ce={class:"w-1/2 bg-gray-50 border border-gray-300 rounded-lg shadow p-4"},me={class:"flex justify-between items-center mb-4"},be=(0,r.Lk)("h3",{class:"text-lg font-medium text-gray-800"},"Etiquetas Seleccionadas",-1),ge=["onDragstart","onClick"],ve={class:"flex justify-end mt-8 space-x-4"},pe=(0,r.Lk)("button",{type:"submit",class:"px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"}," Guardar Cambios ",-1);function fe(e,t,a,l,o,s){return l.editedItem?((0,r.uX)(),(0,r.CE)("div",te,[(0,r.Lk)("div",ae,[re,(0,r.Lk)("form",{onSubmit:t[8]||(t[8]=(0,K.D$)(((...e)=>l.submitUpdate&&l.submitUpdate(...e)),["prevent"]))},[(0,r.Lk)("div",le,[oe,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>l.editedItem.name=e),class:"w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400",placeholder:"Ingrese el nombre del área",required:""},null,512),[[K.Jo,l.editedItem.name]])]),(0,r.Lk)("div",se,[(0,r.Lk)("div",ne,[(0,r.Lk)("div",ie,[de,(0,r.Lk)("button",{type:"button",onClick:t[1]||(t[1]=e=>l.selectAll("available")),class:"text-blue-600 hover:underline font-medium"}," Seleccionar Todos ")]),(0,r.Lk)("div",{class:"border border-gray-200 rounded-lg p-4 min-h-[300px] bg-white overflow-y-auto",onDragover:t[2]||(t[2]=(0,K.D$)((()=>{}),["prevent"])),onDrop:t[3]||(t[3]=e=>l.dropItem("available"))},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(l.availableTags,(e=>((0,r.uX)(),(0,r.CE)("div",{key:e._id,class:"bg-blue-50 border border-blue-200 rounded-lg p-2 mb-2 shadow-md cursor-pointer hover:bg-blue-100 transition",draggable:"true",onDragstart:t=>l.dragStart(e),onClick:t=>l.toggleSelection(e,"available")},(0,f.v_)(e.name),41,ue)))),128))],32)]),(0,r.Lk)("div",ce,[(0,r.Lk)("div",me,[be,(0,r.Lk)("button",{type:"button",onClick:t[4]||(t[4]=e=>l.selectAll("selected")),class:"text-red-600 hover:underline font-medium"}," Quitar Todos ")]),(0,r.Lk)("div",{class:"border border-gray-200 rounded-lg p-4 min-h-[300px] bg-white overflow-y-auto",onDragover:t[5]||(t[5]=(0,K.D$)((()=>{}),["prevent"])),onDrop:t[6]||(t[6]=e=>l.dropItem("selected"))},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(l.selectedTags,(e=>((0,r.uX)(),(0,r.CE)("div",{key:e._id,class:"bg-red-50 border border-red-200 rounded-lg p-2 mb-2 shadow-md cursor-pointer hover:bg-red-100 transition",draggable:"true",onDragstart:t=>l.dragStart(e),onClick:t=>l.toggleSelection(e,"selected")},(0,f.v_)(e.name),41,ge)))),128))],32)])]),(0,r.Lk)("div",ve,[(0,r.Lk)("button",{type:"button",onClick:t[7]||(t[7]=t=>e.$emit("close")),class:"px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition"}," Cancelar "),pe])],32)])])):(0,r.Q3)("",!0)}var ye={props:{item:{type:Object,required:!0}},emits:["close","updateItem"],setup(e,{emit:t}){const a=(0,u.KR)({...e.item}),l=(0,u.KR)([]),o=(0,u.KR)([...e.item.areas]);let s=null;(0,r.wB)((()=>e.item),(e=>{a.value={...e},o.value=[...e.areas]}));const n=async()=>{try{const e=P.A.state.token,t=await(0,O.ZL)(e);l.value=t.data.data.filter((e=>!o.value.some((t=>t._id===e._id))))}catch(e){console.error("Error al obtener etiquetas:",e)}},i=e=>{s={...e}},d=e=>{s&&(c(s,e),s=null)},c=(e,t)=>{"available"===t?(o.value=o.value.filter((t=>t._id!==e._id)),l.value=[...l.value,e]):"selected"===t&&(l.value=l.value.filter((t=>t._id!==e._id)),o.value=[...o.value,e])},m=(e,t)=>{const a="available"===t?"selected":"available";c(e,a)},b=e=>{"available"===e?(o.value.push(...l.value),l.value=[]):"selected"===e&&(l.value.push(...o.value),o.value=[])},g=()=>{const e={...a.value,areas:o.value};t("updateItem",e)};return(0,r.sV)(n),{editedItem:a,availableTags:l,selectedTags:o,dragStart:i,dropItem:d,toggleSelection:m,selectAll:b,submitUpdate:g}}};const ke=(0,F.A)(ye,[["render",fe]]);var he=ke,xe=a(197),we=a(6329),Ce=a(9669),Le=a(4750);function Ae(e,t,a,l,o,s){return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(Le.W,{modelValue:l.search,"onUpdate:modelValue":t[0]||(t[0]=e=>l.search=e),label:"Buscar","prepend-inner-icon":"mdi-magnify",variant:"outlined","hide-details":"","single-line":"",class:"mb-5 PT-3"},null,8,["modelValue"]),(0,r.bF)(xe.J,{flat:""},{default:(0,r.k6)((()=>[(0,r.bF)(we.Py,{headers:l.headers,items:l.filteredItems,search:l.search},{["item.areas"]:(0,r.k6)((({item:e})=>[(0,r.bF)(Ce.w,{small:"",color:"blue",onClick:t=>l.viewAntennas(e.areas)},{default:(0,r.k6)((()=>[(0,r.eW)(" mdi-eye ")])),_:2},1032,["onClick"])])),["item.actions"]:(0,r.k6)((({item:e})=>[(0,r.bF)(Ce.w,{small:"",color:"green",class:"mr-4",onClick:t=>l.editItem(e)},{default:(0,r.k6)((()=>[(0,r.eW)(" mdi-pencil ")])),_:2},1032,["onClick"]),(0,r.bF)(Ce.w,{small:"",color:"red",onClick:t=>l.deleteItem(e)},{default:(0,r.k6)((()=>[(0,r.eW)(" mdi-delete ")])),_:2},1032,["onClick"])])),_:2},1032,["headers","items","search"])])),_:1})],64)}var Ie={name:"DataTable",props:{items:{type:Array,required:!0}},emits:["deleteItem","editItem","viewAntennas"],setup(e,{emit:t}){const a=(0,u.KR)(""),l=(0,u.KR)([{key:"id",title:"ID"},{key:"name",title:"Nombre"},{key:"areas",title:"Áreas"},{key:"actions",title:"Acciones",sortable:!1}]),o=(0,r.EW)((()=>{if(!a.value)return s.value;const e=a.value.toLowerCase();return s.value.filter((t=>Object.values(t).some((t=>String(t).toLowerCase().includes(e)))))})),s=(0,r.EW)((()=>e.items.map(((e,t)=>({id:t+1,...e}))))),n=e=>{t("deleteItem",e)},i=e=>{t("editItem",e)},d=e=>{t("viewAntennas",e)};return{search:a,headers:l,filteredItems:o,deleteItem:n,editItem:i,viewAntennas:d}}};const Ee=(0,F.A)(Ie,[["render",Ae],["__scopeId","data-v-14b5cbea"]]);var _e=Ee,Fe={components:{DataTable:_e,AntennasModal:$,createForm:ee,EditForm:he},setup(){const e=(0,u.KR)([]),t=(0,u.KR)(null),a=(0,u.KR)(null),l=(0,u.KR)(!1),o=(0,u.KR)(!1),s=(0,u.KR)(!1),n=(0,u.KR)(!1),i=()=>{s.value=!0},d=()=>{s.value=!1},c=()=>{l.value=!0},m=()=>{l.value=!1},f=e=>{t.value=e,o.value=!0},y=()=>{o.value=!1,t.value=null},k=e=>{a.value={...e},n.value=!0},h=()=>{n.value=!1},x=async e=>{c();try{const t=P.A.state.token,a=e._id,r={name:e.name,areas:e.areas.map((e=>e._id))},l=await p(t,r,a);l&&(h(),m()),await L()}catch(t){console.error("Error al actualizar:",t),m()}},w=async e=>{try{const t=P.A.state.token;await v(t,e),await L(),d()}catch(t){d(),console.error("error al crear area:",t)}},C=async e=>{c();try{const t=P.A.state.token,a=e._id,r=await g(t,a);r&&m(),await L()}catch(t){m(),console.error("Error al obtener los layout:",t)}},L=async()=>{c();try{const t=P.A.state.token,a=await b(t);e.value=a.data.data,a&&m()}catch(t){m(),console.error("Error al obtener las rutas:",t)}};return(0,r.sV)(L),{items:e,fetchItems:L,openLoading:c,closeLoading:m,isLoading:l,listAntennas:f,closeAntennaModal:y,deleteItems:C,isCreateFormVisible:s,openCreateForm:i,closeCreateForm:d,submitItems:w,updateItems:x,openEditForm:k,closeEditForm:h,isEditFormVisible:n,selectedItem:a,isAntennasModalVisible:o,selectedAntennas:t}}};const De=(0,F.A)(Fe,[["render",d]]);var $e=De}}]);
//# sourceMappingURL=441.9d900dec.js.map