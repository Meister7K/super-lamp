import{r as a,u as n,j as s,N as o,L as l,O as i}from"./index-716bb20b.js";import{g as j}from"./App-0f3e6c85.js";function d(){const t=j();console.log(t);const[c,x]=a.useState(null);return n(),s.jsx(s.Fragment,{children:s.jsxs("div",{className:"project-container page",children:[s.jsxs("nav",{className:"project-nav",children:[s.jsx("h1",{children:"Projects"}),s.jsx("ul",{children:t.map(({name:r,id:e})=>s.jsx(s.Fragment,{children:s.jsx(o,{to:e,className:` ${c===e?"active":""}`,children:s.jsx("li",{children:r},e)})}))})]}),s.jsx("div",{className:"pro-output",children:s.jsx(a.Suspense,{fallback:s.jsx(l,{}),children:s.jsx(i,{})})})]})})}export{d as default};