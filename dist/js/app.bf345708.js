(function(){"use strict";var e={2709:function(e,t,n){var o=n(5130),a=n(6768);const r={id:"app"};function i(e,t,n,o,i,u){const c=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("div",r,[(0,a.bF)(c)])}var u={name:"App"},c=n(1241);const s=(0,c.A)(u,[["render",i]]);var l=s,f=(n(5524),n(5790)),m=(0,f.$N)();async function d(){const e=await n.e(53).then(n.t.bind(n,8874,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}n(3855);var p=n(973),h=n(5129);const g=(0,p.aE)({history:(0,p.LA)(),routes:[{meta:{title:"Home",requiresAuth:!0},path:"/",component:()=>Promise.all([n.e(30),n.e(702),n.e(37)]).then(n.bind(n,37)),children:[{name:"layout",path:"/layout",component:()=>Promise.all([n.e(189),n.e(30),n.e(702),n.e(750),n.e(329),n.e(959)]).then(n.bind(n,4959))},{name:"area",path:"/area",component:()=>Promise.all([n.e(189),n.e(30),n.e(702),n.e(750),n.e(329),n.e(964)]).then(n.bind(n,1964))},{name:"antennas",path:"/antennas",component:()=>Promise.all([n.e(189),n.e(30),n.e(702),n.e(750),n.e(329),n.e(710)]).then(n.bind(n,8710))},{name:"tags",path:"/tags",component:()=>Promise.all([n.e(189),n.e(30),n.e(702),n.e(750),n.e(329),n.e(728)]).then(n.bind(n,8728))},{name:"operators",path:"/operators",component:()=>Promise.all([n.e(189),n.e(30),n.e(702),n.e(750),n.e(329),n.e(247)]).then(n.bind(n,7247))},{name:"gptags",path:"/gptags",component:()=>Promise.all([n.e(189),n.e(30),n.e(702),n.e(750),n.e(329),n.e(303)]).then(n.bind(n,4303))},{name:"gpareas",path:"/gpareas",component:()=>Promise.all([n.e(189),n.e(30),n.e(702),n.e(750),n.e(329),n.e(441)]).then(n.bind(n,1441))},{name:"catTags",path:"/catTags",component:()=>Promise.all([n.e(189),n.e(30),n.e(702),n.e(750),n.e(329),n.e(126)]).then(n.bind(n,6126))},{name:"catAntennas",path:"/catAntennas",component:()=>Promise.all([n.e(189),n.e(30),n.e(702),n.e(750),n.e(329),n.e(685)]).then(n.bind(n,7685))},{name:"monitoring",path:"/monitoring",component:()=>Promise.all([n.e(189),n.e(265)]).then(n.bind(n,4265))},{name:"rules",path:"/rules",component:()=>Promise.all([n.e(189),n.e(30),n.e(702),n.e(750),n.e(329),n.e(297)]).then(n.bind(n,297))}]},{meta:{title:"Login"},path:"/login",name:"login",component:()=>Promise.all([n.e(189),n.e(30),n.e(750),n.e(973)]).then(n.bind(n,5754))},{path:"/:pathMatch(.*)*",redirect:"/login"}]});g.beforeEach(((e,t,n)=>{const o=e.matched.some((e=>e.meta.requiresAuth));o&&!h.A.state.isAuthenticated?n({name:"login"}):"login"===e.name&&h.A.state.isAuthenticated?"CUSTOMER_MASTER"===h.A.state.role?n({name:"layout"}):("COMPANY_MASTER"===h.A.state.role||h.A.state.role,n()):"/"===e.path&&h.A.state.isAuthenticated?"CUSTOMER_MASTER"===h.A.state.role||"COMPANY_MASTER"===h.A.state.role?n({name:"layout"}):(h.A.state.role,n()):n()}));var b=g;d(),h.A.dispatch("initializeStateFromLocalStorage"),(0,o.Ef)(l).use(m).use(b).use(h.A).mount("#app")},5129:function(e,t,n){var o=n(782);const a="DJsdfg-2352LLDSF-dfglñdskfgiu38r_[22334ews34>YUVASZghsvdV";t.A=(0,o.y$)({state:{isAuthenticated:!1,role:"",username:"",token:"",menuData:{}},getters:{getItemName:e=>t=>e.menuData[t]?.itemName||"",getItemStatus:e=>t=>e.menuData[t]?.status||!1},mutations:{setIsAuthenticated(e,t){e.isAuthenticated=t,localStorage.setItem(a,JSON.stringify(e))},setUsername(e,t){e.username=t,localStorage.setItem(a,JSON.stringify(e))},setToken(e,t){e.token=t,localStorage.setItem(a,JSON.stringify(e))},setRole(e,t){e.role=t,localStorage.setItem(a,JSON.stringify(e))},initializeStateFromLocalStorage(e){const t=localStorage.getItem(a);t&&Object.assign(e,JSON.parse(t))},setMenuData(e,t){Array.isArray(t)?(e.menuData=t.reduce(((e,t)=>(e[t.itemKey]={itemName:t.itemName,status:t.status},e)),{}),localStorage.setItem("menuData",JSON.stringify(e.menuData))):console.error("setMenuData recibió un valor no válido:",t)},initializeMenuDataFromLocalStorage(e){const t=localStorage.getItem("menuData");t&&(e.menuData=JSON.parse(t))}},actions:{initializeStateFromLocalStorage({commit:e}){e("initializeStateFromLocalStorage")},initializeMenuDataFromLocalStorage({commit:e}){e("initializeMenuDataFromLocalStorage")}}})}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],a=e[l][1],r=e[l][2];for(var u=!0,c=0;c<o.length;c++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(u=!1,r<i&&(i=r));if(u){e.splice(l--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,a){if(1&a&&(o=this(o)),8&a)return o;if("object"===typeof o&&o){if(4&a&&o.__esModule)return o;if(16&a&&"function"===typeof o.then)return o}var r=Object.create(null);n.r(r);var i={};e=e||[null,t({}),t([]),t(t)];for(var u=2&a&&o;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){i[e]=function(){return o[e]}}));return i["default"]=function(){return o},n.d(r,i),r}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(53===e?"webfontloader":e)+"."+{30:"08d58970",37:"c985b0d1",53:"39c946f5",126:"ea5b3a53",189:"85ab539f",247:"730a7eba",265:"d46cad0e",297:"2f5876ab",303:"718b1021",329:"cc75b566",441:"9d900dec",685:"64c2812e",702:"0d3ce256",710:"aaa31b58",728:"68878632",750:"71da5d9c",959:"6a712455",964:"2695f221",973:"1222b238"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{30:"1f83430c",37:"f78ca241",126:"ffc374a8",247:"6882f066",265:"099e7f34",297:"7f45b2e3",303:"313ab648",329:"23f74910",441:"05e34356",685:"ffc374a8",702:"775ee83a",710:"01977e74",728:"4293c080",750:"132ee031",959:"dbbf598d",964:"7f45b2e3",973:"9d1adf4b"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="frontend-ebox-platform:";n.l=function(o,a,r,i){if(e[o])e[o].push(a);else{var u,c;if(void 0!==r)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+r){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+r),u.src=o),e[o]=[a];var m=function(t,n){u.onerror=u.onload=null,clearTimeout(d);var a=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(m.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=m.bind(null,u.onerror),u.onload=m.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,a,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var u=function(n){if(i.onerror=i.onload=null,"load"===n.type)a();else{var o=n&&n.type,u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=u,i.parentNode&&i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=u,i.href=t,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],r=a.getAttribute("data-href");if(r===e||r===t)return a}},o=function(o){return new Promise((function(a,r){var i=n.miniCssF(o),u=n.p+i;if(t(i,u))return a();e(o,u,null,a,r)}))},a={524:0};n.f.miniCss=function(e,t){var n={30:1,37:1,126:1,247:1,265:1,297:1,303:1,329:1,441:1,685:1,702:1,710:1,728:1,750:1,959:1,964:1,973:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var i=n.p+n.u(t),u=new Error,c=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,a[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],u=o[1],c=o[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(c)var l=c(n)}for(t&&t(o);s<i.length;s++)r=i[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(l)},o=self["webpackChunkfrontend_ebox_platform"]=self["webpackChunkfrontend_ebox_platform"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(2709)}));o=n.O(o)})();
//# sourceMappingURL=app.bf345708.js.map