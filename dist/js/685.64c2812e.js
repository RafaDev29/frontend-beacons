"use strict";(self["webpackChunkfrontend_ebox_platform"]=self["webpackChunkfrontend_ebox_platform"]||[]).push([[685],{2683:function(e,t,r){r.d(t,{GP:function(){return n},LO:function(){return l},Pu:function(){return s},ek:function(){return i}});var a=r(1189);const o="http://198.211.99.223:3000/api/v1";function s(e){return a.A.get(`${o}/type-areapoints`,{headers:{Authorization:`Bearer ${e}`}})}function n(e,t){return a.A.delete(`${o}/type-areapoints/${t}`,{headers:{Authorization:`Bearer ${e}`}})}function l(e,t){return a.A.post(`${o}/type-areapoints`,t,{headers:{Authorization:`Bearer ${e}`}})}function i(e,t,r){return a.A.patch(`${o}/type-areapoints/${r}`,t,{headers:{Authorization:`Bearer ${e}`}})}},5173:function(e,t,r){r.d(t,{A:function(){return y}});var a=r(6768),o=r(5130);const s={key:0,class:"fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"},n={class:"bg-white rounded-lg shadow-lg max-w-md w-full p-6"},l=(0,a.Lk)("h2",{class:"text-xl font-semibold text-gray-700 mb-4 text-center"},"Crear Nueva Categoria",-1),i={class:"mb-4"},u=(0,a.Lk)("label",{class:"block text-sm font-medium text-gray-500 mb-1"},"Nombre",-1),d={class:"flex justify-end space-x-2"},c=(0,a.Lk)("button",{type:"submit",class:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"}," Guardar ",-1);function m(e,t,r,m,b,p){return m.item?((0,a.uX)(),(0,a.CE)("div",s,[(0,a.Lk)("div",n,[l,(0,a.Lk)("form",{onSubmit:t[2]||(t[2]=(0,o.D$)(((...e)=>m.submitForm&&m.submitForm(...e)),["prevent"]))},[(0,a.Lk)("div",i,[u,(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>m.form.name=e),class:"w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:""},null,512),[[o.Jo,m.form.name]])]),(0,a.Lk)("div",d,[(0,a.Lk)("button",{type:"button",onClick:t[1]||(t[1]=(...e)=>m.closeDialog&&m.closeDialog(...e)),class:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"}," Cancelar "),c])],32)])])):(0,a.Q3)("",!0)}var b=r(144),p={emits:["close","ItemCreate"],setup(e,{emit:t}){const r=(0,b.KR)(!0),a=(0,b.KR)({name:""}),o=()=>{t("close")},s=async()=>{t("ItemCreate",a.value)};return{item:r,form:a,closeDialog:o,submitForm:s}}},f=r(1241);const g=(0,f.A)(p,[["render",m]]);var y=g},8e3:function(e,t,r){r.d(t,{A:function(){return b}});var a=r(6768),o=r(197),s=r(6329),n=r(9669),l=r(4750);function i(e,t,r,i,u,d){return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(l.W,{modelValue:i.search,"onUpdate:modelValue":t[0]||(t[0]=e=>i.search=e),label:"Buscar","prepend-inner-icon":"mdi-magnify",variant:"outlined","hide-details":"","single-line":"",class:"mb-5 PT-3"},null,8,["modelValue"]),(0,a.bF)(o.J,{flat:""},{default:(0,a.k6)((()=>[(0,a.bF)(s.Py,{headers:i.headers,items:i.filteredItems,search:i.search},{["item.actions"]:(0,a.k6)((({item:e})=>[(0,a.bF)(n.w,{small:"",color:"green",class:"mr-4",onClick:t=>i.editItem(e)},{default:(0,a.k6)((()=>[(0,a.eW)(" mdi-pencil ")])),_:2},1032,["onClick"]),(0,a.bF)(n.w,{small:"",color:"red",onClick:t=>i.deleteItem(e)},{default:(0,a.k6)((()=>[(0,a.eW)(" mdi-delete ")])),_:2},1032,["onClick"])])),_:2},1032,["headers","items","search"])])),_:1})],64)}var u=r(144),d={name:"DataTable",props:{items:{type:Array,required:!0}},emits:["deleteItem","editItem","viewAreas"],setup(e,{emit:t}){const r=(0,u.KR)(""),o=(0,u.KR)([{key:"id",title:"ID"},{key:"name",title:"Nombre"},{key:"actions",title:"Acciones",sortable:!1}]),s=(0,a.EW)((()=>{if(!r.value)return n.value;const e=r.value.toLowerCase();return n.value.filter((t=>Object.values(t).some((t=>String(t).toLowerCase().includes(e)))))})),n=(0,a.EW)((()=>e.items.map(((e,t)=>({id:t+1,...e}))))),l=e=>{t("deleteItem",e)},i=e=>{t("editItem",e)},d=e=>{t("viewAreas",e)};return{search:r,headers:o,filteredItems:s,deleteItem:l,editItem:i,viewAreas:d}}},c=r(1241);const m=(0,c.A)(d,[["render",i],["__scopeId","data-v-64864c32"]]);var b=m},7186:function(e,t,r){r.d(t,{A:function(){return y}});var a=r(6768),o=r(5130);const s={key:0,class:"fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"},n={class:"bg-white rounded-lg shadow-lg max-w-md w-full p-6"},l=(0,a.Lk)("h2",{class:"text-lg font-semibold text-gray-700 mb-4 text-center"},"Editar Categoria",-1),i={class:"mb-4"},u=(0,a.Lk)("label",{class:"block text-sm font-medium text-gray-500 mb-1"},"Nombre",-1),d={class:"flex justify-end space-x-2"},c=(0,a.Lk)("button",{type:"submit",class:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"}," Guardar Cambios ",-1);function m(e,t,r,m,b,p){return r.item?((0,a.uX)(),(0,a.CE)("div",s,[(0,a.Lk)("div",n,[l,(0,a.Lk)("form",{onSubmit:t[2]||(t[2]=(0,o.D$)(((...e)=>m.submitUpdate&&m.submitUpdate(...e)),["prevent"]))},[(0,a.Lk)("div",i,[u,(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>m.editedItem.name=e),class:"w-full border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:""},null,512),[[o.Jo,m.editedItem.name]])]),(0,a.Lk)("div",d,[(0,a.Lk)("button",{type:"button",onClick:t[1]||(t[1]=t=>e.$emit("close")),class:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"}," Cancelar "),c])],32)])])):(0,a.Q3)("",!0)}var b=r(144),p={props:{item:{type:Object,required:!0}},emits:["close","updateItem"],setup(e,{emit:t}){const r=(0,b.KR)({...e.item});(0,a.wB)((()=>e.item),(e=>{r.value={...e}}));const o=()=>{t("updateItem",r.value)};return{editedItem:r,submitUpdate:o}}},f=r(1241);const g=(0,f.A)(p,[["render",m]]);var y=g},7685:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var a=r(6768);const o={class:"flex justify-between items-center"},s=(0,a.Lk)("h1",{class:"font-bold lg:text-2xl text-xl text-gray-500 mb-5"}," Categoria de Antenas",-1),n={key:0,class:"fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50"},l=(0,a.Lk)("div",{class:"flex flex-col items-center space-y-4"},[(0,a.Lk)("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"}),(0,a.Lk)("p",{class:"text-white text-lg font-semibold"},"Cargando, por favor espera...")],-1),i=[l];function u(e,t,r,l,u,d){const c=(0,a.g2)("formTable"),m=(0,a.g2)("AreasModal"),b=(0,a.g2)("createForm"),p=(0,a.g2)("EditForm");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",null,[(0,a.Lk)("div",o,[s,(0,a.Lk)("button",{class:"flex items-center justify-center bg-[#318bf1] text-white font-semibold px-5 py-2 rounded-lg hover:bg-orange-500 shadow-md",onClick:t[0]||(t[0]=(...e)=>l.openCreateForm&&l.openCreateForm(...e))}," Crear + ")]),(0,a.bF)(c,{items:l.items,onViewAreas:l.listAreas,onDeleteItem:l.deleteItems,onEditItem:l.openEditForm},null,8,["items","onViewAreas","onDeleteItem","onEditItem"]),l.isAreasModalVisible?((0,a.uX)(),(0,a.Wv)(m,{key:0,areas:l.selectedAreas,onClose:l.closeAreasModal,isVisible:l.isAreasModalVisible},null,8,["areas","onClose","isVisible"])):(0,a.Q3)("",!0),l.isCreateFormVisible?((0,a.uX)(),(0,a.Wv)(b,{key:1,onClose:l.closeCreateForm,onItemCreate:l.submitItems},null,8,["onClose","onItemCreate"])):(0,a.Q3)("",!0),l.isEditFormVisible?((0,a.uX)(),(0,a.Wv)(p,{key:2,item:l.selectedItem,onClose:l.closeEditForm,onUpdateItem:l.updateItems},null,8,["item","onClose","onUpdateItem"])):(0,a.Q3)("",!0)]),l.isLoading?((0,a.uX)(),(0,a.CE)("div",n,i)):(0,a.Q3)("",!0)],64)}var d=r(144),c=r(2683),m=r(8e3),b=r(5173),p=r(7186),f=r(5129),g={components:{formTable:m.A,createForm:b.A,EditForm:p.A},setup(){const e=(0,d.KR)([]),t=(0,d.KR)(null),r=(0,d.KR)(null),o=(0,d.KR)(!1),s=(0,d.KR)(!1),n=(0,d.KR)(!1),l=(0,d.KR)(!1),i=()=>{n.value=!0},u=()=>{n.value=!1},m=()=>{o.value=!0},b=()=>{o.value=!1},p=e=>{t.value=e,s.value=!0},g=()=>{s.value=!1,t.value=null},y=e=>{r.value={...e},l.value=!0},v=()=>{l.value=!1},k=async e=>{m();try{const t=f.A.state.token,r=e._id,a={name:e.name},o=await(0,c.ek)(t,a,r);o&&(v(),b()),await C()}catch(t){b()}},x=async e=>{try{const t=f.A.state.token,r={name:e.name};await(0,c.LO)(t,r),await C(),u()}catch(t){console.error("error al crear Layout:",t)}},h=async e=>{m();try{const t=f.A.state.token,r=e._id,a=await(0,c.GP)(t,r);a&&b(),await C()}catch(t){b(),console.error("Error al obtener los layout:",t)}},C=async()=>{m();try{const t=f.A.state.token,r=await(0,c.Pu)(t);e.value=r.data.data,r&&b()}catch(t){b(),console.error("Error al obtener las rutas:",t)}};return(0,a.sV)(C),{items:e,fetchItems:C,openLoading:m,closeLoading:b,isLoading:o,listAreas:p,closeAreasModal:g,selectedAreas:t,isAreasModalVisible:s,deleteItems:h,isCreateFormVisible:n,openCreateForm:i,closeCreateForm:u,submitItems:x,updateItems:k,openEditForm:y,closeEditForm:v,isEditFormVisible:l,selectedItem:r}}},y=r(1241);const v=(0,y.A)(g,[["render",u]]);var k=v}}]);
//# sourceMappingURL=685.64c2812e.js.map