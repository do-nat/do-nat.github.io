import{r as p,v as R,d as f,a as v,o as m,c as h,b as l,e as d,w as g,F as y,f as a,t as b,p as S,g as E,h as w,i as $,j as x,k as W}from"./vendor.9ce3bc1c.js";const A=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}};A();function L(s={}){const{immediate:n=!1,onNeedRefresh:i,onOfflineReady:t,onRegistered:e,onRegisterError:o}=s;let r;const u=async(c=!0)=>{};return"serviceWorker"in navigator&&(r=new R("/sw.js",{scope:"/"}),r.addEventListener("activated",c=>{c.isUpdate?window.location.reload():t==null||t()}),r.register({immediate:n}).then(c=>{e==null||e(c)}).catch(c=>{o==null||o(c)})),u}function V(s={}){const{immediate:n=!0,onNeedRefresh:i,onOfflineReady:t,onRegistered:e,onRegisterError:o}=s,r=p(!1),u=p(!1);return{updateServiceWorker:L({immediate:n,onNeedRefresh(){r.value=!0,i==null||i()},onOfflineReady(){u.value=!0,t==null||t()},onRegistered:e,onRegisterError:o}),offlineReady:u,needRefresh:r}}const N={id:"nav"},O=a("Home"),j=a(" | "),C=a("About"),I=f({setup(s){return(n,i)=>{const t=v("router-link"),e=v("router-view");return m(),h(y,null,[l("div",N,[d(t,{to:"/"},{default:g(()=>[O]),_:1}),j,d(t,{to:"/about"},{default:g(()=>[C]),_:1})]),d(e)],64)}}}),P="modulepreload",k={},D="/",H=function(n,i){return!i||i.length===0?n():Promise.all(i.map(t=>{if(t=`${D}${t}`,t in k)return;k[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":P,e||(r.as="script",r.crossOrigin=""),r.href=t,document.head.appendChild(r),e)return new Promise((u,c)=>{r.addEventListener("load",u),r.addEventListener("error",c)})})).then(()=>n())};var B="/assets/logo.03d6d6da.png";var F=(s,n)=>{for(const[i,t]of n)s[i]=t;return s};const _=s=>(S("data-v-b5b79442"),s=s(),E(),s),T=_(()=>l("p",null,[a(" Recommended IDE setup: "),l("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),a(" + "),l("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),q=_(()=>l("p",null,[a("See "),l("code",null,"README.md"),a(" for more information.")],-1)),U=_(()=>l("p",null,[l("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Docs "),a(" | "),l("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Docs")],-1)),K=_(()=>l("p",null,[a(" Edit "),l("code",null,"components/HelloWorld.vue"),a(" to test hot module replacement. ")],-1)),M=f({props:{msg:null},setup(s){const n=p(0);return(i,t)=>(m(),h(y,null,[l("h1",null,b(s.msg),1),T,q,U,l("button",{class:"btn btn-blue w-40 self-center",type:"button",onClick:t[0]||(t[0]=e=>n.value++)},"count is: "+b(n.value),1),K],64))}});var Y=F(M,[["__scopeId","data-v-b5b79442"]]);const z={class:"home flex flex-col"},G=l("img",{class:"self-center",alt:"Vue logo",src:B},null,-1),J=f({setup(s){return(n,i)=>(m(),h("div",z,[G,d(Y,{msg:"Welcome to Your Vue.js + TypeScript App"})]))}}),Q=[{path:"/",name:"Home",component:J},{path:"/about",name:"About",component:()=>H(()=>import("./AboutSite.115543a3.js"),["assets/AboutSite.115543a3.js","assets/vendor.9ce3bc1c.js"])}],X=w({history:$({}.BASE_URL),routes:Q});var Z=x({state:{},mutations:{},actions:{},modules:{}});W(I).use(Z).use(X).mount("#app");V();export{F as _};
