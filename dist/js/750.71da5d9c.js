"use strict";(self["webpackChunkfrontend_ebox_platform"]=self["webpackChunkfrontend_ebox_platform"]||[]).push([[750],{8903:function(e,l,a){a.d(l,{N:function(){return c}});var t=a(6768),n=a(9262),i=a(7664),s=a(4587),o=a(9094),r=a(1247),u=a(4600);const d=(0,s.j)({text:String,onClick:(0,o.uR)(),...(0,n.u)(),...(0,i.yx)()},"VLabel"),c=(0,r.RW)()({name:"VLabel",props:d(),setup(e,l){let{slots:a}=l;return(0,u.C)((()=>(0,t.bF)("label",{class:["v-label",{"v-label--clickable":!!e.onClick},e.class],style:e.style,onClick:e.onClick},[e.text,a.default?.()]))),{}}})},4750:function(e,l,a){a.d(l,{W:function(){return J},i:function(){return Q}});var t=a(6768),n=a(5130),i=a(9562),s=a(9262),o=a(4464),r=a(4587),u=a(1247),d=a(4600);const c=(0,r.j)({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...(0,s.u)(),...(0,o.m)({transition:{component:i.QG}})},"VCounter"),v=(0,u.RW)()({name:"VCounter",functional:!0,props:c(),setup(e,l){let{slots:a}=l;const i=(0,t.EW)((()=>e.max?`${e.value} / ${e.max}`:String(e.value)));return(0,d.C)((()=>(0,t.bF)(o.M,{transition:e.transition},{default:()=>[(0,t.bo)((0,t.bF)("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[a.default?a.default({counter:i.value,max:e.max,value:e.value}):i.value]),[[n.aG,e.active]])]}))),{}}});var p=a(8903);const f=(0,r.j)({floating:Boolean,...(0,s.u)()},"VFieldLabel"),b=(0,u.RW)()({name:"VFieldLabel",props:f(),setup(e,l){let{slots:a}=l;return(0,d.C)((()=>(0,t.bF)(p.N,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},a))),{}}});var g=a(7852),y=a(9669),m=a(5296);function h(e){const{t:l}=(0,m.Ym)();function a(a){let{name:n}=a;const i={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[n],s=e[`onClick:${n}`],o=s&&i?l(`$vuetify.input.${i}`,e.label??""):void 0;return(0,t.bF)(y.w,{icon:e[`${n}Icon`],"aria-label":o,onClick:s},null)}return{InputIcon:a}}var F=a(2886),x=a(2067),C=a(9094),V=a(7861);const _=(0,r.j)({focused:Boolean,"onUpdate:focused":(0,C.uR)()},"focus");function k(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,V.MR)();const a=(0,x.q)(e,"focused"),n=(0,t.EW)((()=>({[`${l}--focused`]:a.value})));function i(){a.value=!0}function s(){a.value=!1}return{focusClasses:n,isFocused:a,focus:i,blur:s}}var I=a(4581),B=a(9296),S=a(3240),E=a(7664),W=a(144),R=a(2419),w=a(1884);const M=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],$=(0,r.j)({appendInnerIcon:I.TX,bgColor:String,clearable:Boolean,clearIcon:{type:I.TX,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:I.TX,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>M.includes(e)},"onClick:clear":(0,C.uR)(),"onClick:appendInner":(0,C.uR)(),"onClick:prependInner":(0,C.uR)(),...(0,s.u)(),...(0,B.gi)(),...(0,S.S)(),...(0,E.yx)()},"VField"),D=(0,u.RW)()({name:"VField",inheritAttrs:!1,props:{id:String,..._(),...$()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{attrs:a,emit:s,slots:o}=l;const{themeClasses:r}=(0,E.NX)(e),{loaderClasses:u}=(0,B.pn)(e),{focusClasses:c,isFocused:v,focus:p,blur:f}=k(e),{InputIcon:y}=h(e),{roundedClasses:x}=(0,S.v)(e),{rtlClasses:_}=(0,m.IA)(),I=(0,t.EW)((()=>e.dirty||e.active)),M=(0,t.EW)((()=>!e.singleLine&&!(!e.label&&!o.label))),$=(0,V.v6)(),D=(0,t.EW)((()=>e.id||`input-${$}`)),A=(0,t.EW)((()=>`${D.value}-messages`)),K=(0,W.KR)(),N=(0,W.KR)(),P=(0,W.KR)(),j=(0,t.EW)((()=>["plain","underlined"].includes(e.variant))),{backgroundColorClasses:z,backgroundColorStyles:O}=(0,F.z6)((0,W.lW)(e,"bgColor")),{textColorClasses:X,textColorStyles:G}=(0,F.aH)((0,t.EW)((()=>e.error||e.disabled?void 0:I.value&&v.value?e.color:e.baseColor)));(0,t.wB)(I,(e=>{if(M.value){const l=K.value.$el,a=N.value.$el;requestAnimationFrame((()=>{const t=(0,R.P)(l),n=a.getBoundingClientRect(),i=n.x-t.x,s=n.y-t.y-(t.height/2-n.height/2),o=n.width/.75,r=Math.abs(o-t.width)>1?{maxWidth:(0,C.Dg)(o)}:void 0,u=getComputedStyle(l),d=getComputedStyle(a),c=1e3*parseFloat(u.transitionDuration)||150,v=parseFloat(d.getPropertyValue("--v-field-label-scale")),p=d.getPropertyValue("color");l.style.visibility="visible",a.style.visibility="hidden",(0,R.i)(l,{transform:`translate(${i}px, ${s}px) scale(${v})`,color:p,...r},{duration:c,easing:w.B2,direction:e?"normal":"reverse"}).finished.then((()=>{l.style.removeProperty("visibility"),a.style.removeProperty("visibility")}))}))}}),{flush:"post"});const L=(0,t.EW)((()=>({isActive:I,isFocused:v,controlRef:P,blur:f,focus:p})));function T(e){e.target!==document.activeElement&&e.preventDefault()}function Y(l){"Enter"!==l.key&&" "!==l.key||(l.preventDefault(),l.stopPropagation(),e["onClick:clear"]?.(new MouseEvent("click")))}return(0,d.C)((()=>{const l="outlined"===e.variant,s=!(!o["prepend-inner"]&&!e.prependInnerIcon),d=!(!e.clearable&&!o.clear),v=!!(o["append-inner"]||e.appendInnerIcon||d),m=()=>o.label?o.label({...L.value,label:e.label,props:{for:D.value}}):e.label;return(0,t.bF)("div",(0,t.v6)({class:["v-field",{"v-field--active":I.value,"v-field--appended":v,"v-field--center-affix":e.centerAffix??!j.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":s,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!m(),[`v-field--variant-${e.variant}`]:!0},r.value,z.value,c.value,u.value,x.value,_.value,e.class],style:[O.value,e.style],onClick:T},a),[(0,t.bF)("div",{class:"v-field__overlay"},null),(0,t.bF)(B.E2,{name:"v-field",active:!!e.loading,color:e.error?"error":"string"===typeof e.loading?e.loading:e.color},{default:o.loader}),s&&(0,t.bF)("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&(0,t.bF)(y,{key:"prepend-icon",name:"prependInner"},null),o["prepend-inner"]?.(L.value)]),(0,t.bF)("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&M.value&&(0,t.bF)(b,{key:"floating-label",ref:N,class:[X.value],floating:!0,for:D.value,style:G.value},{default:()=>[m()]}),(0,t.bF)(b,{ref:K,for:D.value},{default:()=>[m()]}),o.default?.({...L.value,props:{id:D.value,class:"v-field__input","aria-describedby":A.value},focus:p,blur:f})]),d&&(0,t.bF)(i.SM,{key:"clear"},{default:()=>[(0,t.bo)((0,t.bF)("div",{class:"v-field__clearable",onMousedown:e=>{e.preventDefault(),e.stopPropagation()}},[(0,t.bF)(g.K,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[o.clear?o.clear({...L.value,props:{onKeydown:Y,onFocus:p,onBlur:f,onClick:e["onClick:clear"]}}):(0,t.bF)(y,{name:"clear",onKeydown:Y,onFocus:p,onBlur:f},null)]})]),[[n.aG,e.dirty]])]}),v&&(0,t.bF)("div",{key:"append",class:"v-field__append-inner"},[o["append-inner"]?.(L.value),e.appendInnerIcon&&(0,t.bF)(y,{key:"append-icon",name:"appendInner"},null)]),(0,t.bF)("div",{class:["v-field__outline",X.value],style:G.value},[l&&(0,t.bF)(t.FK,null,[(0,t.bF)("div",{class:"v-field__outline__start"},null),M.value&&(0,t.bF)("div",{class:"v-field__outline__notch"},[(0,t.bF)(b,{ref:N,floating:!0,for:D.value},{default:()=>[m()]})]),(0,t.bF)("div",{class:"v-field__outline__end"},null)]),j.value&&M.value&&(0,t.bF)(b,{ref:N,floating:!0,for:D.value},{default:()=>[m()]})])])})),{controlRef:P}}});function A(e){const l=Object.keys(D.props).filter((e=>!(0,C.Mp)(e)&&"class"!==e&&"style"!==e));return(0,C.Up)(e,l)}const K=(0,r.j)({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...(0,s.u)(),...(0,o.m)({transition:{component:i.QG,leaveAbsolute:!0,group:!0}})},"VMessages"),N=(0,u.RW)()({name:"VMessages",props:K(),setup(e,l){let{slots:a}=l;const n=(0,t.EW)((()=>(0,C.BN)(e.messages))),{textColorClasses:i,textColorStyles:s}=(0,F.aH)((0,t.EW)((()=>e.color)));return(0,d.C)((()=>(0,t.bF)(o.M,{transition:e.transition,tag:"div",class:["v-messages",i.value,e.class],style:[s.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&n.value.map(((e,l)=>(0,t.bF)("div",{class:"v-messages__message",key:`${l}-${n.value}`},[a.message?a.message({message:e}):e])))]}))),{}}});var P=a(2191),j=a(2542),z=(a(4114),a(3375),a(9225),a(3972),a(9209),a(5714),a(7561),a(6197),a(3651)),O=a(1743);const X=(0,r.j)({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,..._()},"validation");function G(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,V.MR)(),a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,V.v6)();const n=(0,x.q)(e,"modelValue"),i=(0,t.EW)((()=>void 0===e.validationValue?n.value:e.validationValue)),s=(0,z.mN)(),o=(0,W.KR)([]),r=(0,W.IJ)(!0),u=(0,t.EW)((()=>!(!(0,C.BN)(""===n.value?null:n.value).length&&!(0,C.BN)(""===i.value?null:i.value).length))),d=(0,t.EW)((()=>!!(e.disabled??s?.isDisabled.value))),c=(0,t.EW)((()=>!!(e.readonly??s?.isReadonly.value))),v=(0,t.EW)((()=>e.errorMessages?.length?(0,C.BN)(e.errorMessages).concat(o.value).slice(0,Math.max(0,+e.maxErrors)):o.value)),p=(0,t.EW)((()=>{let l=(e.validateOn??s?.validateOn.value)||"input";"lazy"===l&&(l="input lazy");const a=new Set(l?.split(" ")??[]);return{blur:a.has("blur")||a.has("input"),input:a.has("input"),submit:a.has("submit"),lazy:a.has("lazy")}})),f=(0,t.EW)((()=>!e.error&&!e.errorMessages?.length&&(!e.rules.length||(r.value?!o.value.length&&!p.value.lazy||null:!o.value.length)))),b=(0,W.IJ)(!1),g=(0,t.EW)((()=>({[`${l}--error`]:!1===f.value,[`${l}--dirty`]:u.value,[`${l}--disabled`]:d.value,[`${l}--readonly`]:c.value}))),y=(0,V.nI)("validation"),m=(0,t.EW)((()=>e.name??(0,W.R1)(a)));async function h(){n.value=null,await(0,t.dY)(),await F()}async function F(){r.value=!0,p.value.lazy?o.value=[]:await _(!0)}async function _(){let l=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const a=[];b.value=!0;for(const t of e.rules){if(a.length>=+(e.maxErrors??1))break;const l="function"===typeof t?t:()=>t,n=await l(i.value);!0!==n&&(!1===n||"string"===typeof n?a.push(n||""):console.warn(`${n} is not a valid value. Rule functions must return boolean true or a string.`))}return o.value=a,b.value=!1,r.value=l,o.value}return(0,t.KC)((()=>{s?.register({id:m.value,vm:y,validate:_,reset:h,resetValidation:F})})),(0,t.xo)((()=>{s?.unregister(m.value)})),(0,t.sV)((async()=>{p.value.lazy||await _(!0),s?.update(m.value,f.value,v.value)})),(0,O.Y)((()=>p.value.input),(()=>{(0,t.wB)(i,(()=>{if(null!=i.value)_();else if(e.focused){const l=(0,t.wB)((()=>e.focused),(e=>{e||_(),l()}))}}))})),(0,O.Y)((()=>p.value.blur),(()=>{(0,t.wB)((()=>e.focused),(e=>{e||_()}))})),(0,t.wB)([f,v],(()=>{s?.update(m.value,f.value,v.value)})),{errorMessages:v,isDirty:u,isDisabled:d,isReadonly:c,isPristine:r,isValid:f,isValidating:b,reset:h,resetValidation:F,validate:_,validationClasses:g}}const L=(0,r.j)({id:String,appendIcon:I.TX,centerAffix:{type:Boolean,default:!0},prependIcon:I.TX,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":(0,C.uR)(),"onClick:append":(0,C.uR)(),...(0,s.u)(),...(0,P.r)(),...(0,C.j6)((0,j.X)(),["maxWidth","minWidth","width"]),...(0,E.yx)(),...X()},"VInput"),T=(0,u.RW)()({name:"VInput",props:{...L()},emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:a,slots:n,emit:i}=l;const{densityClasses:s}=(0,P.Q)(e),{dimensionStyles:o}=(0,j.S)(e),{themeClasses:r}=(0,E.NX)(e),{rtlClasses:u}=(0,m.IA)(),{InputIcon:c}=h(e),v=(0,V.v6)(),p=(0,t.EW)((()=>e.id||`input-${v}`)),f=(0,t.EW)((()=>`${p.value}-messages`)),{errorMessages:b,isDirty:g,isDisabled:y,isReadonly:F,isPristine:x,isValid:C,isValidating:_,reset:k,resetValidation:I,validate:B,validationClasses:S}=G(e,"v-input",p),W=(0,t.EW)((()=>({id:p,messagesId:f,isDirty:g,isDisabled:y,isReadonly:F,isPristine:x,isValid:C,isValidating:_,reset:k,resetValidation:I,validate:B}))),R=(0,t.EW)((()=>e.errorMessages?.length||!x.value&&b.value.length?b.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages));return(0,d.C)((()=>{const l=!(!n.prepend&&!e.prependIcon),a=!(!n.append&&!e.appendIcon),i=R.value.length>0,d=!e.hideDetails||"auto"===e.hideDetails&&(i||!!n.details);return(0,t.bF)("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},s.value,r.value,u.value,S.value,e.class],style:[o.value,e.style]},[l&&(0,t.bF)("div",{key:"prepend",class:"v-input__prepend"},[n.prepend?.(W.value),e.prependIcon&&(0,t.bF)(c,{key:"prepend-icon",name:"prepend"},null)]),n.default&&(0,t.bF)("div",{class:"v-input__control"},[n.default?.(W.value)]),a&&(0,t.bF)("div",{key:"append",class:"v-input__append"},[e.appendIcon&&(0,t.bF)(c,{key:"append-icon",name:"append"},null),n.append?.(W.value)]),d&&(0,t.bF)("div",{class:"v-input__details"},[(0,t.bF)(N,{id:f.value,active:i,messages:R.value},{message:n.message}),n.details?.(W.value)])])})),{reset:k,resetValidation:I,validate:B,isValid:C,errorMessages:b}}});var Y=a(1950),q=a(9629);const H=["color","file","time","date","datetime-local","week","month"],Q=(0,r.j)({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...L(),...$()},"VTextField"),J=(0,u.RW)()({name:"VTextField",directives:{Intersect:q.A},inheritAttrs:!1,props:Q(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{attrs:a,emit:n,slots:i}=l;const s=(0,x.q)(e,"modelValue"),{isFocused:o,focus:r,blur:u}=k(e),c=(0,t.EW)((()=>"function"===typeof e.counterValue?e.counterValue(s.value):"number"===typeof e.counterValue?e.counterValue:(s.value??"").toString().length)),p=(0,t.EW)((()=>a.maxlength?a.maxlength:!e.counter||"number"!==typeof e.counter&&"string"!==typeof e.counter?void 0:e.counter)),f=(0,t.EW)((()=>["plain","underlined"].includes(e.variant)));function b(l,a){e.autofocus&&l&&a[0].target?.focus?.()}const g=(0,W.KR)(),y=(0,W.KR)(),m=(0,W.KR)(),h=(0,t.EW)((()=>H.includes(e.type)||e.persistentPlaceholder||o.value||e.active));function F(){m.value!==document.activeElement&&m.value?.focus(),o.value||r()}function V(e){n("mousedown:control",e),e.target!==m.value&&(F(),e.preventDefault())}function _(e){F(),n("click:control",e)}function I(l){l.stopPropagation(),F(),(0,t.dY)((()=>{s.value=null,(0,C.P)(e["onClick:clear"],l)}))}function B(l){const a=l.target;if(s.value=a.value,e.modelModifiers?.trim&&["text","search","password","tel","url"].includes(e.type)){const e=[a.selectionStart,a.selectionEnd];(0,t.dY)((()=>{a.selectionStart=e[0],a.selectionEnd=e[1]}))}}return(0,d.C)((()=>{const l=!!(i.counter||!1!==e.counter&&null!=e.counter),n=!(!l&&!i.details),[r,d]=(0,C.ph)(a),{modelValue:x,...k}=T.filterProps(e),S=A(e);return(0,t.bF)(T,(0,t.v6)({ref:g,modelValue:s.value,"onUpdate:modelValue":e=>s.value=e,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":f.value},e.class],style:e.style},r,k,{centerAffix:!f.value,focused:o.value}),{...i,default:l=>{let{id:a,isDisabled:n,isDirty:r,isReadonly:c,isValid:v}=l;return(0,t.bF)(D,(0,t.v6)({ref:y,onMousedown:V,onClick:_,"onClick:clear":I,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},S,{id:a.value,active:h.value||r.value,dirty:r.value||e.dirty,disabled:n.value,focused:o.value,error:!1===v.value}),{...i,default:l=>{let{props:{class:a,...o}}=l;const r=(0,t.bo)((0,t.bF)("input",(0,t.v6)({ref:m,value:s.value,onInput:B,autofocus:e.autofocus,readonly:c.value,disabled:n.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:F,onBlur:u},o,d),null),[[(0,t.gN)("intersect"),{handler:b},null,{once:!0}]]);return(0,t.bF)(t.FK,null,[e.prefix&&(0,t.bF)("span",{class:"v-text-field__prefix"},[(0,t.bF)("span",{class:"v-text-field__prefix__text"},[e.prefix])]),i.default?(0,t.bF)("div",{class:a,"data-no-activator":""},[i.default(),r]):(0,t.E3)(r,{class:a}),e.suffix&&(0,t.bF)("span",{class:"v-text-field__suffix"},[(0,t.bF)("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:n?a=>(0,t.bF)(t.FK,null,[i.details?.(a),l&&(0,t.bF)(t.FK,null,[(0,t.bF)("span",null,null),(0,t.bF)(v,{active:e.persistentCounter||o.value,value:c.value,max:p.value,disabled:e.disabled},i.counter)])]):void 0})})),(0,Y.O)({},g,y,m)}})},3651:function(e,l,a){a.d(l,{DG:function(){return d},mN:function(){return c},pE:function(){return u}});a(4114);var t=a(2067),n=a(6768),i=a(144),s=a(4587),o=a(7354);const r=Symbol.for("vuetify:form"),u=(0,s.j)({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function d(e){const l=(0,t.q)(e,"modelValue"),a=(0,n.EW)((()=>e.disabled)),s=(0,n.EW)((()=>e.readonly)),u=(0,i.IJ)(!1),d=(0,i.KR)([]),c=(0,i.KR)([]);async function v(){const l=[];let a=!0;c.value=[],u.value=!0;for(const t of d.value){const n=await t.validate();if(n.length>0&&(a=!1,l.push({id:t.id,errorMessages:n})),!a&&e.fastFail)break}return c.value=l,u.value=!1,{valid:a,errors:c.value}}function p(){d.value.forEach((e=>e.reset()))}function f(){d.value.forEach((e=>e.resetValidation()))}return(0,n.wB)(d,(()=>{let e=0,a=0;const t=[];for(const l of d.value)!1===l.isValid?(a++,t.push({id:l.id,errorMessages:l.errorMessages})):!0===l.isValid&&e++;c.value=t,l.value=!(a>0)&&(e===d.value.length||null)}),{deep:!0,flush:"post"}),(0,n.Gt)(r,{register:e=>{let{id:l,vm:a,validate:t,reset:n,resetValidation:s}=e;d.value.some((e=>e.id===l))&&(0,o.OP)(`Duplicate input name "${l}"`),d.value.push({id:l,validate:t,reset:n,resetValidation:s,vm:(0,i.IG)(a),isValid:null,errorMessages:[]})},unregister:e=>{d.value=d.value.filter((l=>l.id!==e))},update:(e,l,a)=>{const t=d.value.find((l=>l.id===e));t&&(t.isValid=l,t.errorMessages=a)},isDisabled:a,isReadonly:s,isValidating:u,isValid:l,items:d,validateOn:(0,i.lW)(e,"validateOn")}),{errors:c,isDisabled:a,isReadonly:s,isValidating:u,isValid:l,items:d,validate:v,reset:p,resetValidation:f}}function c(){return(0,n.WQ)(r,null)}}}]);
//# sourceMappingURL=750.71da5d9c.js.map