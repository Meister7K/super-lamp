import{j as e,r as t,u as m,L as u}from"./index-2879e10b.js";const p="/super-lamp/assets/HeadshotNB-47411e28.png";const x=s=>{const a=new Date(s.created_at);return e.jsx("div",{className:"event-slide",children:e.jsxs("a",{href:`https://github.com/${s.repo.name}/commit/${s.payload.commits[0].sha}`,target:"_blank",rel:"noreferrer",children:[e.jsx("p",{children:s.type}),e.jsx("p",{children:s.repo.name}),e.jsx("p",{children:`${a.toLocaleString()}`})]})})};function g(){const s=t.useRef(),[a,o]=t.useState(!1),[l]=t.useState("Meister7K"),[n,h]=t.useState(),c=m();t.useEffect(()=>{c.pathname==="/about"&&o(!0)},[c.pathname]),a&&s.current&&(s.current.style.transform="translateY(0)"),t.useEffect(()=>{(async()=>{const i=await(await fetch(`https://api.github.com/users/${l}/events/public?pages=1&per_page=10`)).json();console.log(i),h(i)})()},[]);const d="C72415";return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"about-container",children:[e.jsx("div",{className:"mask",children:e.jsx("h1",{className:"about-title port",children:"A Wild Developer Appeared"})}),e.jsxs("p",{className:"about-info",children:["I'm ",e.jsx("span",{children:"Karl Finkel"})]}),e.jsx("p",{className:"about-info",children:"A former Project Coordinator with a newfound passion for web and application development. Currently based in Denver, CO. Originally from the Great North(MN). "}),e.jsx("br",{}),e.jsx("div",{className:"mask",children:e.jsx("img",{src:p,className:"headshot",ref:s})}),e.jsxs("div",{className:"github-data",children:[e.jsx("h2",{children:"Github History"}),e.jsx("div",{className:"history",children:n?e.jsxs(e.Fragment,{children:[" ",n.map(r=>e.jsx(e.Fragment,{children:e.jsx(x,{...r},r.id)}))]}):e.jsx(u,{})}),e.jsx("h2",{children:"Annual Commit Calendar"}),e.jsx("img",{className:"calendar",src:`https://ghchart.rshah.org/${d}/Meister7K`})]}),e.jsx("div",{className:"resume"})]})})}export{g as default};
