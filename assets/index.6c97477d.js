import{d,r as m,o as _,c as p,a as o,b as i,w as f,F as h,e as a,f as k,t as v,p as S,g as $,h as x,i as E,j as A,k as V}from"./vendor.ce144388.js";const L=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}};L();const w={id:"nav"},j=a("Home"),C=a(" | "),I=a("About"),D=d({setup(n){return(r,c)=>{const t=m("router-link"),e=m("router-view");return _(),p(h,null,[o("div",w,[i(t,{to:"/"},{default:f(()=>[j]),_:1}),C,i(t,{to:"/about"},{default:f(()=>[I]),_:1})]),i(e)],64)}}}),H="modulepreload",g={},N="/",O=function(r,c){return!c||c.length===0?r():Promise.all(c.map(t=>{if(t=`${N}${t}`,t in g)return;g[t]=!0;const e=t.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${s}`))return;const l=document.createElement("link");if(l.rel=e?"stylesheet":H,e||(l.as="script",l.crossOrigin=""),l.href=t,document.head.appendChild(l),e)return new Promise((b,y)=>{l.addEventListener("load",b),l.addEventListener("error",y)})})).then(()=>r())};var P="/assets/logo.03d6d6da.png";var R=(n,r)=>{for(const[c,t]of r)n[c]=t;return n};const u=n=>(S("data-v-b5b79442"),n=n(),$(),n),W=u(()=>o("p",null,[a(" Recommended IDE setup: "),o("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),a(" + "),o("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),B=u(()=>o("p",null,[a("See "),o("code",null,"README.md"),a(" for more information.")],-1)),F=u(()=>o("p",null,[o("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Docs "),a(" | "),o("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Docs")],-1)),T=u(()=>o("p",null,[a(" Edit "),o("code",null,"components/HelloWorld.vue"),a(" to test hot module replacement. ")],-1)),q=d({props:{msg:null},setup(n){const r=k(0);return(c,t)=>(_(),p(h,null,[o("h1",null,v(n.msg),1),W,B,F,o("button",{class:"btn btn-blue w-40 self-center",type:"button",onClick:t[0]||(t[0]=e=>r.value++)},"count is: "+v(r.value),1),T],64))}});var K=R(q,[["__scopeId","data-v-b5b79442"]]);const M={class:"home flex flex-col"},U=o("img",{class:"self-center",alt:"Vue logo",src:P},null,-1),Y=d({setup(n){return(r,c)=>(_(),p("div",M,[U,i(K,{msg:"Welcome to Your Vue.js + TypeScript App"})]))}}),z=[{path:"/",name:"Home",component:Y},{path:"/about",name:"About",component:()=>O(()=>import("./AboutSite.4e861476.js"),["assets/AboutSite.4e861476.js","assets/vendor.ce144388.js"])}],G=x({history:E({}.BASE_URL),routes:z});var J=A({state:{},mutations:{},actions:{},modules:{}});V(D).use(J).use(G).mount("#app");export{R as _};
