import{r as i,u as Bt,j as o,N as ve,g as nt,R as X,$ as I,L as st,a as It,_ as be,b as Ft,c as ae}from"./index-529fc4be.js";const Pt=()=>{const[e,t]=i.useState(null),[n,r]=i.useState(!1);Bt();const s=i.useRef(),a=i.useRef(),l=i.useRef(),c=()=>{n===!1?(r(!0),l.current.style.transform="rotateZ(-45deg) translateY(-10%) translateX(-50%)",a.current.style.transform="scale(0)",a.current.style.opacity="0",s.current.style.transform="rotateZ(45deg) translateY(-20%) translateX(20%)"):(r(!1),s.current.style.transform="none",a.current.style.transform="scale(1)",l.current.style.transform="none",a.current.style.opacity="1")};return o.jsxs("nav",{className:"menu-nav",children:[o.jsx("div",{className:"hamburger",onClick:()=>c(),children:o.jsxs("svg",{viewBox:"0 0 130 130",version:"1.1",className:"ham-icon",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{fill:"currentColor",stroke:"currentColor",strokeWidth:"5.29167",d:"M 11.531441,25.20664 H 120.76023 Z",className:"ham-t",ref:s}),o.jsx("path",{fill:"currentColor",stroke:"currentColor",strokeWidth:"5.29167",d:"M 11.531441,107.08503 H 120.76023 Z",className:"ham-m",ref:l}),o.jsx("path",{fill:"currentColor",stroke:"currentColor",strokeWidth:"5.29167",d:"M 11.531442,66.145835 H 120.76023 Z",className:"ham-b",ref:a})]})}),o.jsxs("ul",{className:`nav-ul ${n===!0?"visible":"hidden"}`,children:[o.jsx("li",{children:o.jsxs(ve,{to:"/",className:`nav-link ${e==="/"?"active":""}`,children:[o.jsx("span",{className:"nav-name",children:"Home"}),o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"nav-icon",viewBox:"0 0 16 16",children:o.jsx("path",{d:"M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"})})]})}),o.jsx("li",{children:o.jsxs(ve,{to:"/projects",className:`nav-link ${e==="/projects"?"active":""}`,children:[o.jsx("span",{className:"nav-name",children:"Projects"}),o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"nav-icon",viewBox:"0 0 16 16",children:[o.jsx("path",{d:"M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"}),o.jsx("path",{d:"M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"})]})]})}),o.jsx("li",{children:o.jsxs(ve,{to:"/about",className:`nav-link ${e==="/about"?"active":""}`,children:[o.jsx("span",{className:"nav-name",children:"About"}),o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"nav-icon",viewBox:"0 0 16 16",children:[o.jsx("path",{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}),o.jsx("path",{d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"})]})]})}),o.jsx("li",{children:o.jsxs(ve,{to:"/blog",className:`nav-link ${e==="/blog"?"active":""}`,children:[o.jsx("span",{className:"nav-name",children:"Blog"}),o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"nav-icon",viewBox:"0 0 16 16",children:[o.jsx("path",{d:"M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"}),o.jsx("path",{d:"M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"})]})]})})]})]})};const Z=e=>{localStorage.setItem("theme",e),document.documentElement.className=e},Wt=()=>{console.log(localStorage.getItem("theme")),localStorage.getItem("theme")||Z("theme-light"),localStorage.getItem("theme")?localStorage.getItem("theme")==="theme-dark"?Z("theme-dark"):localStorage.getItem("theme")==="theme-light"&&Z("theme-light"):Z("theme-dark")},Ht=()=>{//! toggle theme
const[e,t]=i.useState(localStorage.getItem("theme")),n=()=>{e==="theme-dark"?(Z("theme-light"),t("theme-light")):(Z("theme-dark"),t("theme-dark"))};return o.jsx("div",{className:"header",title:"click to change theme",children:o.jsxs("svg",{className:"logo",viewBox:"0 0 400 600",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",version:"1.1",onClick:()=>n(),xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("defs",{id:"defs4"}),o.jsx("path",{d:"M 10,10 V 120 L 30,90 h 92 l 48,-80 z",fill:"currentColor",strokeWidth:"0.5",id:"path1"}),o.jsx("path",{d:"M 181,10 10,290 H 110 L 280,10.443352 Z",fill:"currentColor",strokeWidth:"0.5",id:"path2"}),o.jsx("path",{d:"m 390.21829,10 -150,240 -49,-80 99,-159.556648 z",fill:"currentColor",strokeWidth:"0.5",id:"path3"}),o.jsx("path",{d:"m 244.21828,256 16.09171,33.90829 129.90829,0.0917 -80,-140 z",fill:"currentColor",strokeWidth:"0.5",id:"path4"})]})})};var rt={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],s=0;s<arguments.length;s++){var a=arguments[s];if(a){var l=typeof a;if(l==="string"||l==="number")r.push(a);else if(Array.isArray(a)){if(a.length){var c=n.apply(null,a);c&&r.push(c)}}else if(l==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){r.push(a.toString());continue}for(var u in a)t.call(a,u)&&a[u]&&r.push(u)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(rt);var zt=rt.exports;const b=nt(zt),Vt=["xxl","xl","lg","md","sm","xs"],Ut="xs",ke=i.createContext({prefixes:{},breakpoints:Vt,minBreakpoint:Ut});function R(e,t){const{prefixes:n}=i.useContext(ke);return e||n[t]||t}function ot(){const{breakpoints:e}=i.useContext(ke);return e}function at(){const{minBreakpoint:e}=i.useContext(ke);return e}function Kt(){const{dir:e}=i.useContext(ke);return e==="rtl"}const it=i.forwardRef(({bsPrefix:e,fluid:t=!1,as:n="div",className:r,...s},a)=>{const l=R(e,"container"),c=typeof t=="string"?`-${t}`:"-fluid";return o.jsx(n,{ref:a,...s,className:b(r,t?`${l}${c}`:l)})});it.displayName="Container";const lt=it;const Gt="/super-lamp/assets/TMF-7977081d.png",Xt="/super-lamp/assets/Mansion-df1ce5a9.jpg",Zt="/super-lamp/assets/solar-e21b82e6.jpg",ct=[{name:"TaskMaster",id:"taskmasterflex",desc:"A web app for task management",img:Gt,link:"https://taskmaster-flex-be1c20d82d58.herokuapp.com/",repo:"https://github.com/Meister7K/TaskMaster-Flex",component:"",goal:"",tech:""},{name:"Pokedex",id:"pokedex",desc:"A web app bult for looking up pokemon and stats",img:"",link:"",repo:"",component:"PokeLook"},{name:"R3F Solar System",id:"r3f",desc:"an application built to showcase our solar system along with practicing 3D programming",img:Zt,link:"https://meister7k.github.io/ThreeJSTSPractice/",repo:"https://github.com/Meister7K/ThreeJSTSPractice",component:""},{name:"Elden Ring Quiz",id:"erq",desc:"A fun yet challenging timed quiz made for my first bootcamp project",img:Xt,link:"https://meister7k.github.io/04-Web-APIs-Challenge-Code-Quiz/",repo:"https://github.com/Meister7K/04-Web-APIs-Challenge-Code-Quiz",component:""}];function Jt(e){return ct.find(({id:t})=>t===e)}function js(){return ct}const J=!!(typeof window<"u"&&window.document&&window.document.createElement);var Be=!1,Ie=!1;try{var Me={get passive(){return Be=!0},get once(){return Ie=Be=!0}};J&&(window.addEventListener("test",Me,Me),window.removeEventListener("test",Me,!0))}catch{}function ut(e,t,n,r){if(r&&typeof r!="boolean"&&!Ie){var s=r.once,a=r.capture,l=n;!Ie&&s&&(l=n.__once||function c(u){this.removeEventListener(t,c,a),n.call(this,u)},n.__once=l),e.addEventListener(t,l,Be?r:a)}e.addEventListener(t,n,r)}function we(e){return e&&e.ownerDocument||document}function Fe(e,t,n,r){var s=r&&typeof r!="boolean"?r.capture:r;e.removeEventListener(t,n,s),n.__once&&e.removeEventListener(t,n.__once,s)}var Ee;function Ge(e){if((!Ee&&Ee!==0||e)&&J){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),Ee=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return Ee}function Yt(){return i.useState(null)}function qt(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e},[e]),t}function T(e){const t=qt(e);return i.useCallback(function(...n){return t.current&&t.current(...n)},[t])}const Xe=e=>!e||typeof e=="function"?e:t=>{e.current=t};function Qt(e,t){const n=Xe(e),r=Xe(t);return s=>{n&&n(s),r&&r(s)}}function Te(e,t){return i.useMemo(()=>Qt(e,t),[e,t])}function en(e){const t=i.useRef(e);return t.current=e,t}function dt(e){const t=en(e);i.useEffect(()=>()=>t.current(),[])}function tn(e){var t=we(e);return t&&t.defaultView||window}function nn(e,t){return tn(e).getComputedStyle(e,t)}var sn=/([A-Z])/g;function rn(e){return e.replace(sn,"-$1").toLowerCase()}var on=/^ms-/;function ye(e){return rn(e).replace(on,"-ms-")}var an=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function ln(e){return!!(e&&an.test(e))}function F(e,t){var n="",r="";if(typeof t=="string")return e.style.getPropertyValue(ye(t))||nn(e).getPropertyValue(ye(t));Object.keys(t).forEach(function(s){var a=t[s];!a&&a!==0?e.style.removeProperty(ye(s)):ln(s)?r+=s+"("+a+") ":n+=ye(s)+": "+a+";"}),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}function je(e,t,n,r){return ut(e,t,n,r),function(){Fe(e,t,n,r)}}function cn(e,t,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),e){var s=document.createEvent("HTMLEvents");s.initEvent(t,n,r),e.dispatchEvent(s)}}function un(e){var t=F(e,"transitionDuration")||"",n=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*n}function dn(e,t,n){n===void 0&&(n=5);var r=!1,s=setTimeout(function(){r||cn(e,"transitionend",!0)},t+n),a=je(e,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(s),a()}}function ft(e,t,n,r){n==null&&(n=un(e)||0);var s=dn(e,n,r),a=je(e,"transitionend",t);return function(){s(),a()}}function Oe(e){e===void 0&&(e=we());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function Ze(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}function fn(){const e=i.useRef(!0),t=i.useRef(()=>e.current);return i.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function hn(e){const t=i.useRef(null);return i.useEffect(()=>{t.current=e}),t.current}const pn="data-rr-ui-";function mn(e){return`${pn}${e}`}function gn(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const Je=mn("modal-open");class xn{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return gn(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",s=this.getElement();t.style={overflow:s.style.overflow,[r]:s.style[r]},t.scrollBarWidth&&(n[r]=`${parseInt(F(s,r)||"0",10)+t.scrollBarWidth}px`),s.setAttribute(Je,""),F(s,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(Je),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const He=xn,ht=i.createContext(J?window:void 0);ht.Provider;function ze(){return i.useContext(ht)}const _e=(e,t)=>J?e==null?(t||we()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function vn(e,t){const n=ze(),[r,s]=i.useState(()=>_e(e,n==null?void 0:n.document));if(!r){const a=_e(e);a&&s(a)}return i.useEffect(()=>{t&&r&&t(r)},[t,r]),i.useEffect(()=>{const a=_e(e);a!==r&&s(a)},[e,r]),r}const En=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",yn=typeof document<"u",Ye=yn||En?i.useLayoutEffect:i.useEffect;function jn({children:e,in:t,onExited:n,mountOnEnter:r,unmountOnExit:s}){const a=i.useRef(null),l=i.useRef(t),c=T(n);i.useEffect(()=>{t?l.current=!0:c(a.current)},[t,c]);const u=Te(a,e.ref),d=i.cloneElement(e,{ref:u});return t?d:s||!l.current&&r?null:d}function bn({in:e,onTransition:t}){const n=i.useRef(null),r=i.useRef(!0),s=T(t);return Ye(()=>{if(!n.current)return;let a=!1;return s({in:e,element:n.current,initial:r.current,isStale:()=>a}),()=>{a=!0}},[e,s]),Ye(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function kn({children:e,in:t,onExited:n,onEntered:r,transition:s}){const[a,l]=i.useState(!t);t&&a&&l(!1);const c=bn({in:!!t,onTransition:d=>{const f=()=>{d.isStale()||(d.in?r==null||r(d.element,d.initial):(l(!0),n==null||n(d.element)))};Promise.resolve(s(d)).then(f,h=>{throw d.in||l(!0),h})}}),u=Te(c,e.ref);return a&&!t?null:i.cloneElement(e,{ref:u})}function qe(e,t,n){return e?o.jsx(e,Object.assign({},n)):t?o.jsx(kn,Object.assign({},n,{transition:t})):o.jsx(jn,Object.assign({},n))}function wn(e){return e.code==="Escape"||e.keyCode===27}const Tn=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Nn(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,a;for(a=0;a<r.length;a++)s=r[a],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}let Le;function Rn(e){return Le||(Le=new He({ownerDocument:e==null?void 0:e.document})),Le}function Cn(e){const t=ze(),n=e||Rn(t),r=i.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:i.useCallback(s=>{r.current.dialog=s},[]),setBackdropRef:i.useCallback(s=>{r.current.backdrop=s},[])})}const pt=i.forwardRef((e,t)=>{let{show:n=!1,role:r="dialog",className:s,style:a,children:l,backdrop:c=!0,keyboard:u=!0,onBackdropClick:d,onEscapeKeyDown:f,transition:h,runTransition:v,backdropTransition:j,runBackdropTransition:y,autoFocus:g=!0,enforceFocus:m=!0,restoreFocus:_=!0,restoreFocusOptions:Y,renderDialog:P,renderBackdrop:q=x=>o.jsx("div",Object.assign({},x)),manager:Q,container:k,onShow:N,onHide:le=()=>{},onExit:ce,onExited:ee,onExiting:ue,onEnter:de,onEntering:fe,onEntered:Ne}=e,Re=Nn(e,Tn);const S=ze(),W=vn(k),E=Cn(Q),he=fn(),te=hn(n),[L,M]=i.useState(!n),w=i.useRef(null);i.useImperativeHandle(t,()=>E,[E]),J&&!te&&n&&(w.current=Oe(S==null?void 0:S.document)),n&&L&&M(!1);const pe=T(()=>{if(E.add(),z.current=je(document,"keydown",Se),H.current=je(document,"focus",()=>setTimeout(me),!0),N&&N(),g){var x,xe;const oe=Oe((x=(xe=E.dialog)==null?void 0:xe.ownerDocument)!=null?x:S==null?void 0:S.document);E.dialog&&oe&&!Ze(E.dialog,oe)&&(w.current=oe,E.dialog.focus())}}),ne=T(()=>{if(E.remove(),z.current==null||z.current(),H.current==null||H.current(),_){var x;(x=w.current)==null||x.focus==null||x.focus(Y),w.current=null}});i.useEffect(()=>{!n||!W||pe()},[n,W,pe]),i.useEffect(()=>{L&&ne()},[L,ne]),dt(()=>{ne()});const me=T(()=>{if(!m||!he()||!E.isTopModal())return;const x=Oe(S==null?void 0:S.document);E.dialog&&x&&!Ze(E.dialog,x)&&E.dialog.focus()}),Ce=T(x=>{x.target===x.currentTarget&&(d==null||d(x),c===!0&&le())}),Se=T(x=>{u&&wn(x)&&E.isTopModal()&&(f==null||f(x),x.defaultPrevented||le())}),H=i.useRef(),z=i.useRef(),se=(...x)=>{M(!0),ee==null||ee(...x)};if(!W)return null;const ge=Object.assign({role:r,ref:E.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},Re,{style:a,className:s,tabIndex:-1});let re=P?P(ge):o.jsx("div",Object.assign({},ge,{children:i.cloneElement(l,{role:"document"})}));re=qe(h,v,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:ce,onExiting:ue,onExited:se,onEnter:de,onEntering:fe,onEntered:Ne,children:re});let A=null;return c&&(A=q({ref:E.setBackdropRef,onClick:Ce}),A=qe(j,y,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:A})),o.jsx(o.Fragment,{children:X.createPortal(o.jsxs(o.Fragment,{children:[A,re]}),W)})});pt.displayName="Modal";const Sn=Object.assign(pt,{Manager:He});function Mn(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function On(e,t){e.classList?e.classList.add(t):Mn(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}var _n=Function.prototype.bind.call(Function.prototype.call,[].slice);function U(e,t){return _n(e.querySelectorAll(t))}function Qe(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Ln(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=Qe(e.className,t):e.setAttribute("class",Qe(e.className&&e.className.baseVal||"",t))}const K={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class An extends He{adjustAndStore(t,n,r){const s=n.style[t];n.dataset[t]=s,F(n,{[t]:`${parseFloat(F(n,t))+r}px`})}restore(t,n){const r=n.dataset[t];r!==void 0&&(delete n.dataset[t],F(n,{[t]:r}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(On(n,"modal-open"),!t.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";U(n,K.FIXED_CONTENT).forEach(a=>this.adjustAndStore(r,a,t.scrollBarWidth)),U(n,K.STICKY_CONTENT).forEach(a=>this.adjustAndStore(s,a,-t.scrollBarWidth)),U(n,K.NAVBAR_TOGGLER).forEach(a=>this.adjustAndStore(s,a,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();Ln(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";U(n,K.FIXED_CONTENT).forEach(a=>this.restore(r,a)),U(n,K.STICKY_CONTENT).forEach(a=>this.restore(s,a)),U(n,K.NAVBAR_TOGGLER).forEach(a=>this.restore(s,a))}}let Ae;function $n(e){return Ae||(Ae=new An(e)),Ae}function Dn(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,a;for(a=0;a<r.length;a++)s=r[a],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function Pe(e,t){return Pe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,s){return r.__proto__=s,r},Pe(e,t)}function Bn(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Pe(e,t)}var mt={exports:{}},In="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Fn=In,Pn=Fn;function gt(){}function xt(){}xt.resetWarningCache=gt;var Wn=function(){function e(r,s,a,l,c,u){if(u!==Pn){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:xt,resetWarningCache:gt};return n.PropTypes=n,n};mt.exports=Wn();var Hn=mt.exports;const $e=nt(Hn),et={disabled:!1},vt=I.createContext(null);var zn=function(t){return t.scrollTop},ie="unmounted",D="exited",O="entering",B="entered",We="exiting",C=function(e){Bn(t,e);function t(r,s){var a;a=e.call(this,r,s)||this;var l=s,c=l&&!l.isMounting?r.enter:r.appear,u;return a.appearStatus=null,r.in?c?(u=D,a.appearStatus=O):u=B:r.unmountOnExit||r.mountOnEnter?u=ie:u=D,a.state={status:u},a.nextCallback=null,a}t.getDerivedStateFromProps=function(s,a){var l=s.in;return l&&a.status===ie?{status:D}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(s){var a=null;if(s!==this.props){var l=this.state.status;this.props.in?l!==O&&l!==B&&(a=O):(l===O||l===B)&&(a=We)}this.updateStatus(!1,a)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var s=this.props.timeout,a,l,c;return a=l=c=s,s!=null&&typeof s!="number"&&(a=s.exit,l=s.enter,c=s.appear!==void 0?s.appear:l),{exit:a,enter:l,appear:c}},n.updateStatus=function(s,a){if(s===void 0&&(s=!1),a!==null)if(this.cancelNextCallback(),a===O){if(this.props.unmountOnExit||this.props.mountOnEnter){var l=this.props.nodeRef?this.props.nodeRef.current:X.findDOMNode(this);l&&zn(l)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===D&&this.setState({status:ie})},n.performEnter=function(s){var a=this,l=this.props.enter,c=this.context?this.context.isMounting:s,u=this.props.nodeRef?[c]:[X.findDOMNode(this),c],d=u[0],f=u[1],h=this.getTimeouts(),v=c?h.appear:h.enter;if(!s&&!l||et.disabled){this.safeSetState({status:B},function(){a.props.onEntered(d)});return}this.props.onEnter(d,f),this.safeSetState({status:O},function(){a.props.onEntering(d,f),a.onTransitionEnd(v,function(){a.safeSetState({status:B},function(){a.props.onEntered(d,f)})})})},n.performExit=function(){var s=this,a=this.props.exit,l=this.getTimeouts(),c=this.props.nodeRef?void 0:X.findDOMNode(this);if(!a||et.disabled){this.safeSetState({status:D},function(){s.props.onExited(c)});return}this.props.onExit(c),this.safeSetState({status:We},function(){s.props.onExiting(c),s.onTransitionEnd(l.exit,function(){s.safeSetState({status:D},function(){s.props.onExited(c)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(s,a){a=this.setNextCallback(a),this.setState(s,a)},n.setNextCallback=function(s){var a=this,l=!0;return this.nextCallback=function(c){l&&(l=!1,a.nextCallback=null,s(c))},this.nextCallback.cancel=function(){l=!1},this.nextCallback},n.onTransitionEnd=function(s,a){this.setNextCallback(a);var l=this.props.nodeRef?this.props.nodeRef.current:X.findDOMNode(this),c=s==null&&!this.props.addEndListener;if(!l||c){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[l,this.nextCallback],d=u[0],f=u[1];this.props.addEndListener(d,f)}s!=null&&setTimeout(this.nextCallback,s)},n.render=function(){var s=this.state.status;if(s===ie)return null;var a=this.props,l=a.children;a.in,a.mountOnEnter,a.unmountOnExit,a.appear,a.enter,a.exit,a.timeout,a.addEndListener,a.onEnter,a.onEntering,a.onEntered,a.onExit,a.onExiting,a.onExited,a.nodeRef;var c=Dn(a,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return I.createElement(vt.Provider,{value:null},typeof l=="function"?l(s,c):I.cloneElement(I.Children.only(l),c))},t}(I.Component);C.contextType=vt;C.propTypes={};function G(){}C.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:G,onEntering:G,onEntered:G,onExit:G,onExiting:G,onExited:G};C.UNMOUNTED=ie;C.EXITED=D;C.ENTERING=O;C.ENTERED=B;C.EXITING=We;const Vn=C;function tt(e,t){const n=F(e,t)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function Un(e,t){const n=tt(e,"transitionDuration"),r=tt(e,"transitionDelay"),s=ft(e,a=>{a.target===e&&(s(),t(a))},n+r)}function Kn(e){e.offsetHeight}function Gn(e){return e&&"setState"in e?X.findDOMNode(e):e??null}const Xn=I.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:s,onExited:a,addEndListener:l,children:c,childRef:u,...d},f)=>{const h=i.useRef(null),v=Te(h,u),j=k=>{v(Gn(k))},y=k=>N=>{k&&h.current&&k(h.current,N)},g=i.useCallback(y(e),[e]),m=i.useCallback(y(t),[t]),_=i.useCallback(y(n),[n]),Y=i.useCallback(y(r),[r]),P=i.useCallback(y(s),[s]),q=i.useCallback(y(a),[a]),Q=i.useCallback(y(l),[l]);return o.jsx(Vn,{ref:f,...d,onEnter:g,onEntered:_,onEntering:m,onExit:Y,onExited:q,onExiting:P,addEndListener:Q,nodeRef:h,children:typeof c=="function"?(k,N)=>c(k,{...N,ref:j}):I.cloneElement(c,{ref:j})})}),Zn=Xn,Jn={[O]:"show",[B]:"show"},Et=i.forwardRef(({className:e,children:t,transitionClasses:n={},onEnter:r,...s},a)=>{const l={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...s},c=i.useCallback((u,d)=>{Kn(u),r==null||r(u,d)},[r]);return o.jsx(Zn,{ref:a,addEndListener:Un,...l,onEnter:c,childRef:t.ref,children:(u,d)=>i.cloneElement(t,{...d,className:b("fade",e,t.props.className,Jn[u],n[u])})})});Et.displayName="Fade";const yt=Et,jt=i.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},s)=>(t=R(t,"modal-body"),o.jsx(n,{ref:s,className:b(e,t),...r})));jt.displayName="ModalBody";const Yn=jt,qn=i.createContext({onHide(){}}),bt=qn,kt=i.forwardRef(({bsPrefix:e,className:t,contentClassName:n,centered:r,size:s,fullscreen:a,children:l,scrollable:c,...u},d)=>{e=R(e,"modal");const f=`${e}-dialog`,h=typeof a=="string"?`${e}-fullscreen-${a}`:`${e}-fullscreen`;return o.jsx("div",{...u,ref:d,className:b(f,t,s&&`${e}-${s}`,r&&`${f}-centered`,c&&`${f}-scrollable`,a&&h),children:o.jsx("div",{className:b(`${e}-content`,n),children:l})})});kt.displayName="ModalDialog";const wt=kt,Tt=i.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},s)=>(t=R(t,"modal-footer"),o.jsx(n,{ref:s,className:b(e,t),...r})));Tt.displayName="ModalFooter";const Qn=Tt,es={"aria-label":$e.string,onClick:$e.func,variant:$e.oneOf(["white"])},Ve=i.forwardRef(({className:e,variant:t,"aria-label":n="Close",...r},s)=>o.jsx("button",{ref:s,type:"button",className:b("btn-close",t&&`btn-close-${t}`,e),"aria-label":n,...r}));Ve.displayName="CloseButton";Ve.propTypes=es;const ts=Ve,ns=i.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:r,children:s,...a},l)=>{const c=i.useContext(bt),u=T(()=>{c==null||c.onHide(),r==null||r()});return o.jsxs("div",{ref:l,...a,children:[s,n&&o.jsx(ts,{"aria-label":e,variant:t,onClick:u})]})}),ss=ns,Nt=i.forwardRef(({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:r=!1,...s},a)=>(e=R(e,"modal-header"),o.jsx(ss,{ref:a,...s,className:b(t,e),closeLabel:n,closeButton:r})));Nt.displayName="ModalHeader";const rs=Nt,os=e=>i.forwardRef((t,n)=>o.jsx("div",{...t,ref:n,className:b(t.className,e)})),as=os("h4"),Rt=i.forwardRef(({className:e,bsPrefix:t,as:n=as,...r},s)=>(t=R(t,"modal-title"),o.jsx(n,{ref:s,className:b(e,t),...r})));Rt.displayName="ModalTitle";const is=Rt;function ls(e){return o.jsx(yt,{...e,timeout:null})}function cs(e){return o.jsx(yt,{...e,timeout:null})}const Ct=i.forwardRef(({bsPrefix:e,className:t,style:n,dialogClassName:r,contentClassName:s,children:a,dialogAs:l=wt,"aria-labelledby":c,"aria-describedby":u,"aria-label":d,show:f=!1,animation:h=!0,backdrop:v=!0,keyboard:j=!0,onEscapeKeyDown:y,onShow:g,onHide:m,container:_,autoFocus:Y=!0,enforceFocus:P=!0,restoreFocus:q=!0,restoreFocusOptions:Q,onEntered:k,onExit:N,onExiting:le,onEnter:ce,onEntering:ee,onExited:ue,backdropClassName:de,manager:fe,...Ne},Re)=>{const[S,W]=i.useState({}),[E,he]=i.useState(!1),te=i.useRef(!1),L=i.useRef(!1),M=i.useRef(null),[w,pe]=Yt(),ne=Te(Re,pe),me=T(m),Ce=Kt();e=R(e,"modal");const Se=i.useMemo(()=>({onHide:me}),[me]);function H(){return fe||$n({isRTL:Ce})}function z(p){if(!J)return;const V=H().getScrollbarWidth()>0,Ke=p.scrollHeight>we(p).documentElement.clientHeight;W({paddingRight:V&&!Ke?Ge():void 0,paddingLeft:!V&&Ke?Ge():void 0})}const se=T(()=>{w&&z(w.dialog)});dt(()=>{Fe(window,"resize",se),M.current==null||M.current()});const ge=()=>{te.current=!0},re=p=>{te.current&&w&&p.target===w.dialog&&(L.current=!0),te.current=!1},A=()=>{he(!0),M.current=ft(w.dialog,()=>{he(!1)})},x=p=>{p.target===p.currentTarget&&A()},xe=p=>{if(v==="static"){x(p);return}if(L.current||p.target!==p.currentTarget){L.current=!1;return}m==null||m()},oe=p=>{j?y==null||y(p):(p.preventDefault(),v==="static"&&A())},Ot=(p,V)=>{p&&z(p),ce==null||ce(p,V)},_t=p=>{M.current==null||M.current(),N==null||N(p)},Lt=(p,V)=>{ee==null||ee(p,V),ut(window,"resize",se)},At=p=>{p&&(p.style.display=""),ue==null||ue(p),Fe(window,"resize",se)},$t=i.useCallback(p=>o.jsx("div",{...p,className:b(`${e}-backdrop`,de,!h&&"show")}),[h,de,e]),Ue={...n,...S};Ue.display="block";const Dt=p=>o.jsx("div",{role:"dialog",...p,style:Ue,className:b(t,e,E&&`${e}-static`,!h&&"show"),onClick:v?xe:void 0,onMouseUp:re,"aria-label":d,"aria-labelledby":c,"aria-describedby":u,children:o.jsx(l,{...Ne,onMouseDown:ge,className:r,contentClassName:s,children:a})});return o.jsx(bt.Provider,{value:Se,children:o.jsx(Sn,{show:f,ref:ne,backdrop:v,container:_,keyboard:!0,autoFocus:Y,enforceFocus:P,restoreFocus:q,restoreFocusOptions:Q,onEscapeKeyDown:oe,onShow:g,onHide:m,onEnter:Ot,onEntering:Lt,onEntered:k,onExit:_t,onExiting:le,onExited:At,manager:H(),transition:h?ls:void 0,backdropTransition:h?cs:void 0,renderBackdrop:$t,renderDialog:Dt})})});Ct.displayName="Modal";const us=Object.assign(Ct,{Body:Yn,Header:rs,Title:is,Footer:Qn,Dialog:wt,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});const ds=e=>{const{show:t,onHide:n,textP:r,textS:s}=e;return o.jsxs(us,{id:"modal",fullscreen:!0,centered:!0,keyboard:!0,animation:!0,size:"sm",show:t,onHide:n,children:[o.jsx("h3",{children:r}),o.jsx("p",{children:s}),o.jsx("button",{onClick:n,children:"OK"})]})};function fs({as:e,bsPrefix:t,className:n,...r}){t=R(t,"col");const s=ot(),a=at(),l=[],c=[];return s.forEach(u=>{const d=r[u];delete r[u];let f,h,v;typeof d=="object"&&d!=null?{span:f,offset:h,order:v}=d:f=d;const j=u!==a?`-${u}`:"";f&&l.push(f===!0?`${t}${j}`:`${t}${j}-${f}`),v!=null&&c.push(`order${j}-${v}`),h!=null&&c.push(`offset${j}-${h}`)}),[{...r,className:b(n,...l,...c)},{as:e,bsPrefix:t,spans:l}]}const St=i.forwardRef((e,t)=>{const[{className:n,...r},{as:s="div",bsPrefix:a,spans:l}]=fs(e);return o.jsx(s,{...r,ref:t,className:b(n,!l.length&&a)})});St.displayName="Col";const $=St,Mt=i.forwardRef(({bsPrefix:e,className:t,as:n="div",...r},s)=>{const a=R(e,"row"),l=ot(),c=at(),u=`${a}-cols`,d=[];return l.forEach(f=>{const h=r[f];delete r[f];let v;h!=null&&typeof h=="object"?{cols:v}=h:v=h;const j=f!==c?`-${f}`:"";v!=null&&d.push(`${u}${j}-${v}`)}),o.jsx(n,{ref:s,...r,className:b(t,a,...d)})});Mt.displayName="Row";const De=Mt,hs=()=>{const[e,t]=i.useState(!1),[n,r]=i.useState(),[s,a]=i.useState(null),[l,c]=i.useState(!1),[u,d]=i.useState([]),f=g=>{r(g.target.value.toLowerCase())},h=g=>{g.preventDefault(),c(!0);const m=new XMLHttpRequest;m.open("GET",`https://pokeapi.co/api/v2/pokemon/${n}/`),m.onload=()=>{m.status===200?(a(JSON.parse(m.responseText)),c(!1)):(t(!0),c(!1))},m.send()},v=()=>{t(!1)},j=()=>{fetch("https://pokeapi.co/api/v2/pokemon?limit=1017").then(g=>g.json()).then(g=>{const m=g.results.map(_=>_.name);d(m)}).catch(g=>{console.error("Error fetching Pokémon list:",g)})};i.useEffect(()=>{j()},[]),console.log(s);let y=[];if(s){for(let m=0;m<s.moves.length;m++)y.push(s.moves[m]);s.name.replace(/[^a-zA-Z0-9 ]/g,"")}return o.jsx(o.Fragment,{children:o.jsxs(lt,{fluid:!0,children:[o.jsxs(De,{children:[o.jsx(ds,{textP:"Data not found for this input",textS:"Try using the name or #",show:e,onHide:v}),o.jsxs("form",{className:"search-form",children:[o.jsx("input",{type:"text",id:"inputText",placeholder:"name or #",value:n,onChange:f}),u.length>=0?o.jsxs("div",{children:[" ",o.jsx("label",{children:"pokedex"}),o.jsx("select",{id:"poke",onChange:f,size:"10",children:u.map((g,m)=>o.jsx("option",{value:g,children:g},m))})]}):"",o.jsx("button",{id:"lookupBtn",type:"submit",onClick:h,children:"lookup"})]})]}),o.jsx(De,{children:o.jsxs("div",{className:"output-container",children:[l?o.jsx(st,{}):"",s?o.jsxs("div",{children:[o.jsxs("h3",{children:["#",s.id]}),o.jsx("h3",{className:"pokeName",children:o.jsx("a",{href:`https://www.serebii.net/pokemon/${s.name.replace(/[^a-zA-Z0-9 ]/g,"")}/`,target:"_blank",rel:"noreferrer",children:s.name})}),o.jsx("img",{className:"sprite",src:s.sprites.other["official-artwork"].front_default}),o.jsx("img",{className:"sprite",src:s.sprites.other["official-artwork"].front_shiny}),o.jsxs("h3",{children:["Type:",o.jsx("img",{src:`https://www.serebii.net/pokedex-bw/type/${s.types[0].type.name}.gif`}),s.types[1]?o.jsx("img",{src:`https://www.serebii.net/pokedex-bw/type/${s.types[1].type.name}.gif`}):""]}),s.abilities.length>1?o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"Abilities"}),o.jsxs("p",{children:[s.abilities[0].ability.name,"/",s.abilities[1].ability.name]})]}):"",s.abilities.length<2?o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"Abilities"}),o.jsx("p",{children:s.abilities[0].ability.name})]}):"",o.jsx("h3",{children:"Base Stats"}),o.jsxs(De,{className:"stats",children:[o.jsx($,{children:o.jsxs("p",{children:["HP : ",JSON.stringify(s.stats[0].base_stat)]})}),o.jsx($,{children:o.jsxs("p",{children:["Attack : ",JSON.stringify(s.stats[1].base_stat)]})}),o.jsx($,{children:o.jsxs("p",{children:["Defense : ",JSON.stringify(s.stats[2].base_stat)]})}),o.jsx($,{children:o.jsxs("p",{children:["Special Attack : ",JSON.stringify(s.stats[3].base_stat)]})}),o.jsx($,{children:o.jsxs("p",{children:["Special defense : ",JSON.stringify(s.stats[4].base_stat)]})}),o.jsxs($,{children:[" ",o.jsxs("p",{children:["Speed : ",JSON.stringify(s.stats[5].base_stat)]})]}),o.jsx($,{children:o.jsxs("p",{children:[" Total :",s.stats[0].base_stat+s.stats[1].base_stat+s.stats[2].base_stat+s.stats[3].base_stat+s.stats[4].base_stat+s.stats[5].base_stat]})})]})]}):"",y.length>0?o.jsxs("details",{children:[o.jsx("summary",{children:"Moves"}),o.jsx("ul",{className:"move-ul",children:y.sort((g,m)=>g.move.name.localeCompare(m.move.name)).map((g,m)=>o.jsxs("li",{children:[g.move.name,":  ",g.version_group_details[0].move_learn_method.name!=="machine"?`Level ${g.version_group_details[0].level_learned_at}`:"TM"]},m))})]}):""]})})]})})},ps=()=>{const{id:e}=It(),t=Jt(e);return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"pro-data",children:[o.jsx("h2",{children:t.name}),o.jsx("p",{children:t.desc}),t.goal?o.jsxs("p",{children:[" ",o.jsx("span",{children:"Goal:"})," ",t.goal]}):"",t.link?o.jsx("a",{target:"_blank",href:t.link,rel:"noreferrer",children:o.jsx("button",{children:"Link "})}):"",t.repo?o.jsx("a",{target:"_blank",href:t.repo,rel:"noreferrer",children:o.jsx("button",{children:"Repository "})}):"",t.component==="PokeLook"?o.jsx(hs,{}):""]}),t.img?o.jsx("img",{className:"pro-img",src:t.img}):"",t.tech?o.jsx("div",{className:"tech-icons"}):""]})},ms=i.lazy(()=>be(()=>import("./Home-a3481296.js"),["assets/Home-a3481296.js","assets/index-529fc4be.js","assets/index-823e382c.css","assets/Home-1f100296.css"])),gs=i.lazy(()=>be(()=>import("./Projects-396bd6db.js"),["assets/Projects-396bd6db.js","assets/index-529fc4be.js","assets/index-823e382c.css","assets/Projects-662bd967.css"])),xs=i.lazy(()=>be(()=>import("./About-fcee6c9e.js"),["assets/About-fcee6c9e.js","assets/index-529fc4be.js","assets/index-823e382c.css","assets/About-69b3df7d.css"])),vs=i.lazy(()=>be(()=>import("./Blog-d09a7a55.js"),["assets/Blog-d09a7a55.js","assets/index-529fc4be.js","assets/index-823e382c.css","assets/Blog-262ec2d1.css"]));function Es(){Wt();//!mobile testing
const e=navigator.userAgent,n=/android|iphone|kindle|ipad/i.test(e);return console.log(n),n?document.documentElement.id="mobile":document.documentElement.id="desktop",o.jsx(o.Fragment,{children:o.jsxs(lt,{fluid:!0,className:"main-container",children:[o.jsx(Ht,{}),o.jsx(Pt,{}),o.jsx(i.Suspense,{fallback:o.jsx(st,{}),children:o.jsxs(Ft,{children:[o.jsx(ae,{path:"/",element:o.jsx(ms,{})}),o.jsx(ae,{path:"/projects/*",element:o.jsx(gs,{}),children:o.jsx(ae,{path:":id",element:o.jsx(ps,{})})}),o.jsx(ae,{path:"/about",element:o.jsx(xs,{})}),o.jsx(ae,{path:"/blog",element:o.jsx(vs,{})})]})})]})})}const bs=Object.freeze(Object.defineProperty({__proto__:null,default:Es},Symbol.toStringTag,{value:"Module"}));export{bs as A,js as g};