import{r as c,u as n,j as s,N as o,L as l,O as i}from"./index-bb7a3c20.js";import{g as j}from"./App-39eb17b7.js";function p(){const t=j();console.log(t);const[a,x]=c.useState(null);return n(),s.jsx(s.Fragment,{children:s.jsxs("div",{className:"project-container",children:[s.jsxs("nav",{className:"project-nav",children:[s.jsx("h1",{children:"Projects"}),s.jsx("ul",{children:t.map(({name:r,id:e})=>s.jsx("li",{children:s.jsx(o,{to:e,className:` ${a===e?"active":""}`,children:r})},e))})]}),s.jsx(c.Suspense,{fallback:s.jsx(l,{}),children:s.jsx(i,{})})]})})}export{p as default};