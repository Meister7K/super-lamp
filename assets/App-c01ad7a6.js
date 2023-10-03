import{r as o,u as f,j as e,N as m,g as j,_ as u,L as w,R as k,a as d}from"./index-43b3bf3b.js";const N=()=>{const[t,n]=o.useState(null),[a,r]=o.useState(!1);f();const i=o.useRef(),s=o.useRef(),l=o.useRef(),c=()=>{a===!1?(r(!0),l.current.style.transform="rotateZ(-45deg) translateY(-10%) translateX(-50%)",s.current.style.transform="scale(0)",s.current.style.opacity="0",i.current.style.transform="rotateZ(45deg) translateY(-20%) translateX(20%)"):(r(!1),i.current.style.transform="none",s.current.style.transform="scale(1)",l.current.style.transform="none",s.current.style.opacity="1")};return e.jsxs("nav",{children:[e.jsx("div",{className:"hamburger",onClick:()=>c(),children:e.jsxs("svg",{viewBox:"0 0 130 130",version:"1.1",className:"ham-icon",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fill:"currentColor",stroke:"currentColor",strokeWidth:"5.29167",d:"M 11.531441,25.20664 H 120.76023 Z",className:"ham-t",ref:i}),e.jsx("path",{fill:"currentColor",stroke:"currentColor",strokeWidth:"5.29167",d:"M 11.531441,107.08503 H 120.76023 Z",className:"ham-m",ref:l}),e.jsx("path",{fill:"currentColor",stroke:"currentColor",strokeWidth:"5.29167",d:"M 11.531442,66.145835 H 120.76023 Z",className:"ham-b",ref:s})]})}),e.jsxs("ul",{className:`nav-ul ${a===!0?"visible":"hidden"}`,children:[e.jsx("li",{children:e.jsxs(m,{to:"/",className:`nav-link ${t==="/"?"active":""}`,children:[e.jsx("span",{className:"nav-name",children:"Home"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"nav-icon",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"})})]})}),e.jsx("li",{children:e.jsxs(m,{to:"/projects",className:`nav-link ${t==="/projects"?"active":""}`,children:[e.jsx("span",{className:"nav-name",children:"Projects"}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"nav-icon",viewBox:"0 0 16 16",children:[e.jsx("path",{d:"M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"}),e.jsx("path",{d:"M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"})]})]})}),e.jsx("li",{children:e.jsxs(m,{to:"/about",className:`nav-link ${t==="/about"?"active":""}`,children:[e.jsx("span",{className:"nav-name",children:"About"}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"nav-icon",viewBox:"0 0 16 16",children:[e.jsx("path",{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}),e.jsx("path",{d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"})]})]})}),e.jsx("li",{children:e.jsxs(m,{to:"/blog",className:`nav-link ${t==="/blog"?"active":""}`,children:[e.jsx("span",{className:"nav-name",children:"Blog"}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"nav-icon",viewBox:"0 0 16 16",children:[e.jsx("path",{d:"M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"}),e.jsx("path",{d:"M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"})]})]})})]})]})};const h=t=>{localStorage.setItem("theme",t),document.documentElement.className=t},_=()=>{console.log(localStorage.getItem("theme")),localStorage.getItem("theme")||h("theme-light"),localStorage.getItem("theme")?localStorage.getItem("theme")==="theme-dark"?h("theme-dark"):localStorage.getItem("theme")==="theme-light"&&h("theme-light"):h("theme-dark")},C=()=>{//! toggle theme
const[t,n]=o.useState(localStorage.getItem("theme")),a=()=>{t==="theme-dark"?(h("theme-light"),n("theme-light")):(h("theme-dark"),n("theme-dark"))};return e.jsx("div",{className:"header",title:"click to change theme",children:e.jsxs("svg",{className:"logo",viewBox:"0 0 400 600",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",version:"1.1",onClick:()=>a(),xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("defs",{id:"defs4"}),e.jsx("path",{d:"M 10,10 V 120 L 30,90 h 92 l 48,-80 z",fill:"currentColor",strokeWidth:"0.5",id:"path1"}),e.jsx("path",{d:"M 181,10 10,290 H 110 L 280,10.443352 Z",fill:"currentColor",strokeWidth:"0.5",id:"path2"}),e.jsx("path",{d:"m 390.21829,10 -150,240 -49,-80 99,-159.556648 z",fill:"currentColor",strokeWidth:"0.5",id:"path3"}),e.jsx("path",{d:"m 244.21828,256 16.09171,33.90829 129.90829,0.0917 -80,-140 z",fill:"currentColor",strokeWidth:"0.5",id:"path4"})]})})};var v={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var n={}.hasOwnProperty;function a(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var l=typeof s;if(l==="string"||l==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var c=a.apply(null,s);c&&r.push(c)}}else if(l==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var p in s)n.call(s,p)&&s[p]&&r.push(p)}}}return r.join(" ")}t.exports?(a.default=a,t.exports=a):window.classNames=a})()})(v);var b=v.exports;const A=j(b),L=["xxl","xl","lg","md","sm","xs"],y="xs",x=o.createContext({prefixes:{},breakpoints:L,minBreakpoint:y});function E(t,n){const{prefixes:a}=o.useContext(x);return t||a[n]||n}function T(){const{breakpoints:t}=o.useContext(x);return t}function V(){const{minBreakpoint:t}=o.useContext(x);return t}function P(){const{dir:t}=o.useContext(x);return t==="rtl"}const g=o.forwardRef(({bsPrefix:t,fluid:n=!1,as:a="div",className:r,...i},s)=>{const l=E(t,"container"),c=typeof n=="string"?`-${n}`:"-fluid";return e.jsx(a,{ref:s,...i,className:A(r,n?`${l}${c}`:l)})});g.displayName="Container";const M=g,S=o.lazy(()=>u(()=>import("./Home-3eb273db.js"),["assets/Home-3eb273db.js","assets/index-43b3bf3b.js","assets/index-6b39ab6f.css","assets/Home-d299fc78.css"])),z=o.lazy(()=>u(()=>import("./Projects-c75f346e.js"),["assets/Projects-c75f346e.js","assets/index-43b3bf3b.js","assets/index-6b39ab6f.css"])),B=o.lazy(()=>u(()=>import("./About-e8ece0c8.js"),["assets/About-e8ece0c8.js","assets/index-43b3bf3b.js","assets/index-6b39ab6f.css"])),R=o.lazy(()=>u(()=>import("./Blog-57758c2a.js"),["assets/Blog-57758c2a.js","assets/index-43b3bf3b.js","assets/index-6b39ab6f.css","assets/Blog-bbceb466.css"]));function I(){_();//!mobile testing
const t=navigator.userAgent,a=/android|iphone|kindle|ipad/i.test(t);return console.log(a),a?document.documentElement.id="mobile":document.documentElement.id="desktop",e.jsx(e.Fragment,{children:e.jsxs(M,{fluid:!0,children:[e.jsx(C,{}),e.jsx(N,{}),e.jsx(o.Suspense,{fallback:e.jsx(w,{}),children:e.jsxs(k,{children:[e.jsx(d,{path:"/",element:e.jsx(S,{})}),e.jsx(d,{path:"/projects",element:e.jsx(z,{})}),e.jsx(d,{path:"/about",element:e.jsx(B,{})}),e.jsx(d,{path:"/blog",element:e.jsx(R,{})})]})})]})})}const $=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));export{$ as A,M as C,P as a,T as b,A as c,V as d,E as u};
