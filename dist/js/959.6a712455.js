"use strict";(self["webpackChunkfrontend_ebox_platform"]=self["webpackChunkfrontend_ebox_platform"]||[]).push([[959],{9509:function(e,t,a){a.d(t,{a$:function(){return n},bN:function(){return o},hO:function(){return i},uq:function(){return l}});var r=a(1189);const s="http://198.211.99.223:3000/api/v1";function o(e){return r.A.get(`${s}/layouts`,{headers:{Authorization:`Bearer ${e}`}})}function l(e,t){return r.A.delete(`${s}/layouts/${t}`,{headers:{Authorization:`Bearer ${e}`}})}function i(e,t){return r.A.post(`${s}/layouts`,t,{headers:{Authorization:`Bearer ${e}`}})}function n(e,t,a){return r.A.patch(`${s}/layouts/${a}`,t,{headers:{Authorization:`Bearer ${e}`}})}},4959:function(e,t,a){a.r(t),a.d(t,{default:function(){return ie}});var r=a(6768);const s={class:"flex justify-between items-center"},o=(0,r.Lk)("h1",{class:"font-bold lg:text-2xl text-xl text-gray-500 mb-5"}," Layout",-1),l={key:0,class:"fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50"},i=(0,r.Lk)("div",{class:"flex flex-col items-center space-y-4"},[(0,r.Lk)("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"}),(0,r.Lk)("p",{class:"text-white text-lg font-semibold"},"Cargando, por favor espera...")],-1),n=[i];function d(e,t,a,i,d,u){const c=(0,r.g2)("formTable"),m=(0,r.g2)("AreasModal"),b=(0,r.g2)("createForm"),f=(0,r.g2)("EditForm");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",null,[(0,r.Lk)("div",s,[o,(0,r.Lk)("button",{class:"flex items-center justify-center bg-[#318bf1] text-white font-semibold px-5 py-2 rounded-lg hover:bg-orange-500 shadow-md",onClick:t[0]||(t[0]=(...e)=>i.openCreateForm&&i.openCreateForm(...e))}," Crear + ")]),(0,r.bF)(c,{items:i.items,onViewAreas:i.listAreas,onDeleteItem:i.deleteItems,onEditItem:i.openEditForm},null,8,["items","onViewAreas","onDeleteItem","onEditItem"]),i.isAreasModalVisible?((0,r.uX)(),(0,r.Wv)(m,{key:0,areas:i.selectedAreas,onClose:i.closeAreasModal,isVisible:i.isAreasModalVisible},null,8,["areas","onClose","isVisible"])):(0,r.Q3)("",!0),i.isCreateFormVisible?((0,r.uX)(),(0,r.Wv)(b,{key:1,onClose:i.closeCreateForm,onItemCreate:i.submitItems},null,8,["onClose","onItemCreate"])):(0,r.Q3)("",!0),i.isEditFormVisible?((0,r.uX)(),(0,r.Wv)(f,{key:2,item:i.selectedItem,onClose:i.closeEditForm,onUpdateItem:i.updateItems},null,8,["item","onClose","onUpdateItem"])):(0,r.Q3)("",!0)]),i.isLoading?((0,r.uX)(),(0,r.CE)("div",l,n)):(0,r.Q3)("",!0)],64)}var u=a(144),c=a(9509),m=a(197),b=a(6329),f=a(9669),p=a(4750);function y(e,t,a,s,o,l){return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(p.W,{modelValue:s.search,"onUpdate:modelValue":t[0]||(t[0]=e=>s.search=e),label:"Buscar","prepend-inner-icon":"mdi-magnify",variant:"outlined","hide-details":"","single-line":"",class:"mb-5 PT-3"},null,8,["modelValue"]),(0,r.bF)(m.J,{flat:""},{default:(0,r.k6)((()=>[(0,r.bF)(b.Py,{headers:s.headers,items:s.filteredItems,search:s.search},{["item.areas"]:(0,r.k6)((({item:e})=>[(0,r.bF)(f.w,{small:"",color:"blue",onClick:t=>s.viewAreas(e.areas)},{default:(0,r.k6)((()=>[(0,r.eW)(" mdi-eye ")])),_:2},1032,["onClick"])])),["item.actions"]:(0,r.k6)((({item:e})=>[(0,r.bF)(f.w,{small:"",color:"green",class:"mr-4",onClick:t=>s.editItem(e)},{default:(0,r.k6)((()=>[(0,r.eW)(" mdi-pencil ")])),_:2},1032,["onClick"]),(0,r.bF)(f.w,{small:"",color:"red",onClick:t=>s.deleteItem(e)},{default:(0,r.k6)((()=>[(0,r.eW)(" mdi-delete ")])),_:2},1032,["onClick"])])),_:2},1032,["headers","items","search"])])),_:1})],64)}var g={name:"DataTable",props:{items:{type:Array,required:!0}},emits:["deleteItem","editItem","viewAreas"],setup(e,{emit:t}){const a=(0,u.KR)(""),s=(0,u.KR)([{key:"id",title:"ID"},{key:"name",title:"Nombre"},{key:"areas",title:"Areas"},{key:"actions",title:"Acciones",sortable:!1}]),o=(0,r.EW)((()=>{if(!a.value)return l.value;const e=a.value.toLowerCase();return l.value.filter((t=>Object.values(t).some((t=>String(t).toLowerCase().includes(e)))))})),l=(0,r.EW)((()=>e.items.map(((e,t)=>({id:t+1,...e}))))),i=e=>{t("deleteItem",e)},n=e=>{t("editItem",e)},d=e=>{t("viewAreas",e)};return{search:a,headers:s,filteredItems:o,deleteItem:i,editItem:n,viewAreas:d}}},v=a(1241);const k=(0,v.A)(g,[["render",y],["__scopeId","data-v-77bd07fd"]]);var x=k,h=a(4232);const w=e=>((0,r.Qi)("data-v-878ec5f2"),e=e(),(0,r.jt)(),e),C={class:"overflow-y-auto bg-white rounded-lg shadow-lg max-w-md w-full p-0",style:{"max-height":"80vh","margin-bottom":"1rem"}},L=w((()=>(0,r.Lk)("div",{class:"flex justify-between items-center p-2 border-b bg-blue-500 text-white rounded-t-lg"},[(0,r.Lk)("h1",{class:"text-xl flex items-center"},[(0,r.Lk)("i",{class:"mdi mdi-map-marker text-white text-3xl ml-2"}),(0,r.eW)(" Areas ")])],-1))),A={class:"p-4"},I={class:"divide-y divide-gray-300"},F={class:"flex-1"},E={class:"font-semibold text-gray-800"},V=w((()=>(0,r.Lk)("i",{class:"mdi mdi-information-outline text-gray-400 hover:text-gray-600 text-xl cursor-pointer transition"},null,-1))),$={class:"flex justify-end p-4 border-t bg-gray-100 rounded-b-lg"};function _(e,t,a,s,o,l){return a.isVisible?((0,r.uX)(),(0,r.CE)("div",{key:0,class:"fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50",onClick:t[1]||(t[1]=(...e)=>l.closeModal&&l.closeModal(...e))},[(0,r.Lk)("div",C,[L,(0,r.Lk)("div",A,[(0,r.Lk)("ul",I,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.areas,((e,t)=>((0,r.uX)(),(0,r.CE)("li",{key:t,class:"py-4 flex items-center space-x-4"},[(0,r.Lk)("div",F,[(0,r.Lk)("p",E,(0,h.v_)(e.name),1)]),V])))),128))])]),(0,r.Lk)("div",$,[(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>l.closeModal&&l.closeModal(...e)),class:"px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"}," Cerrar ")])])])):(0,r.Q3)("",!0)}var K={name:"ViewAreas",props:{areas:{type:Array,required:!0},isVisible:{type:Boolean,required:!0}},emits:["close"],methods:{closeModal(){this.$emit("close")}}};const j=(0,v.A)(K,[["render",_],["__scopeId","data-v-878ec5f2"]]);var M=j,R=a(5130);const X={key:0,class:"fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"},W={class:"bg-white rounded-lg shadow-lg max-w-md w-full p-6"},D=(0,r.Lk)("h2",{class:"text-xl font-semibold text-gray-700 mb-4 text-center"},"Crear Nuevo Layout",-1),q={class:"mb-4"},Q=(0,r.Lk)("label",{class:"block text-sm font-medium text-gray-500 mb-1"},"Nombre",-1),U={class:"flex justify-end space-x-2"},B=(0,r.Lk)("button",{type:"submit",class:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"}," Guardar ",-1);function N(e,t,a,s,o,l){return s.item?((0,r.uX)(),(0,r.CE)("div",X,[(0,r.Lk)("div",W,[D,(0,r.Lk)("form",{onSubmit:t[2]||(t[2]=(0,R.D$)(((...e)=>s.submitForm&&s.submitForm(...e)),["prevent"]))},[(0,r.Lk)("div",q,[Q,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>s.form.name=e),class:"w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:""},null,512),[[R.Jo,s.form.name]])]),(0,r.Lk)("div",U,[(0,r.Lk)("button",{type:"button",onClick:t[1]||(t[1]=(...e)=>s.closeDialog&&s.closeDialog(...e)),class:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"}," Cancelar "),B])],32)])])):(0,r.Q3)("",!0)}var z={emits:["close","ItemCreate"],setup(e,{emit:t}){const a=(0,u.KR)(!0),r=(0,u.KR)({name:""}),s=()=>{t("close")},o=async()=>{t("ItemCreate",r.value)};return{item:a,form:r,closeDialog:s,submitForm:o}}};const O=(0,v.A)(z,[["render",N]]);var T=O;const J={key:0,class:"fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"},S={class:"bg-white rounded-lg shadow-lg max-w-md w-full p-6"},G=(0,r.Lk)("h2",{class:"text-lg font-semibold text-gray-700 mb-4 text-center"},"Editar Layout",-1),P={class:"mb-4"},H=(0,r.Lk)("label",{class:"block text-sm font-medium text-gray-500 mb-1"},"Nombre",-1),Y={class:"flex justify-end space-x-2"},Z=(0,r.Lk)("button",{type:"submit",class:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"}," Guardar Cambios ",-1);function ee(e,t,a,s,o,l){return a.item?((0,r.uX)(),(0,r.CE)("div",J,[(0,r.Lk)("div",S,[G,(0,r.Lk)("form",{onSubmit:t[2]||(t[2]=(0,R.D$)(((...e)=>s.submitUpdate&&s.submitUpdate(...e)),["prevent"]))},[(0,r.Lk)("div",P,[H,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>s.editedItem.name=e),class:"w-full border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:""},null,512),[[R.Jo,s.editedItem.name]])]),(0,r.Lk)("div",Y,[(0,r.Lk)("button",{type:"button",onClick:t[1]||(t[1]=t=>e.$emit("close")),class:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"}," Cancelar "),Z])],32)])])):(0,r.Q3)("",!0)}var te={props:{item:{type:Object,required:!0}},emits:["close","updateItem"],setup(e,{emit:t}){const a=(0,u.KR)({...e.item});(0,r.wB)((()=>e.item),(e=>{a.value={...e}}));const s=()=>{t("updateItem",a.value)};return{editedItem:a,submitUpdate:s}}};const ae=(0,v.A)(te,[["render",ee]]);var re=ae,se=a(5129),oe={components:{formTable:x,AreasModal:M,createForm:T,EditForm:re},setup(){const e=(0,u.KR)([]),t=(0,u.KR)(null),a=(0,u.KR)(null),s=(0,u.KR)(!1),o=(0,u.KR)(!1),l=(0,u.KR)(!1),i=(0,u.KR)(!1),n=()=>{l.value=!0},d=()=>{l.value=!1},m=()=>{s.value=!0},b=()=>{s.value=!1},f=e=>{t.value=e,o.value=!0},p=()=>{o.value=!1,t.value=null},y=e=>{a.value={...e},i.value=!0},g=()=>{i.value=!1},v=async e=>{m();try{const t=se.A.state.token,a=e._id,r={name:e.name},s=await(0,c.a$)(t,r,a);s&&(g(),b()),await h()}catch(t){b()}},k=async e=>{try{const t=se.A.state.token,a={name:e.name};await(0,c.hO)(t,a),await h(),d()}catch(t){console.error("error al crear Layout:",t)}},x=async e=>{m();try{const t=se.A.state.token,a=e._id,r=await(0,c.uq)(t,a);r&&b(),await h()}catch(t){b(),console.error("Error al obtener los layout:",t)}},h=async()=>{m();try{const t=se.A.state.token,a=await(0,c.bN)(t);e.value=a.data.data,a&&b()}catch(t){b(),console.error("Error al obtener las rutas:",t)}};return(0,r.sV)(h),{items:e,fetchItems:h,openLoading:m,closeLoading:b,isLoading:s,listAreas:f,closeAreasModal:p,selectedAreas:t,isAreasModalVisible:o,deleteItems:x,isCreateFormVisible:l,openCreateForm:n,closeCreateForm:d,submitItems:k,updateItems:v,openEditForm:y,closeEditForm:g,isEditFormVisible:i,selectedItem:a}}};const le=(0,v.A)(oe,[["render",d]]);var ie=le}}]);
//# sourceMappingURL=959.6a712455.js.map