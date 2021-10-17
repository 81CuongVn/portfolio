"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[179],{778:(m,h,e)=>{e.d(h,{Z:()=>u});var t=e(294);const u=i=>t.createElement("main",{id:"content"},i.children)},72:(m,h,e)=>{e.d(h,{Z:()=>i});var t=e(294),E=e(977),u=e(405);function i(n){var c,d,o,s;const{pathname:v}=(0,E.TH)(),l={};l.themeColor=n.themeColor||"#00ffff",l.title=n.title?`${n.title} | Undefine`:"Undefine Development",l.description=(c=n.description)!=null?c:"ICT Student, Full Stack Web Developer, and Systems Administrator with a flair for creating elegant solutions in the least amount of time and creative cloud computing. See my work, who I have worked for in the past, along with my expierence in fields.",l.image=(d=n.image)!=null?d:"favicon.ico",l.revisitAfter=(o=n.revisitAfter)!=null?o:"7 days";const p=`${n.noindex?"noindex":"index"}, ${n.nofollow?"nofollow":"follow"}`,g=(s=n.type)!=null?s:"website";return document.title=l.title,t.createElement(u.q,null,t.createElement("meta",{property:"theme-color",content:l.themeColor}),t.createElement("meta",{name:"title",content:l.title}),t.createElement("meta",{name:"description",content:l.description}),t.createElement("meta",{property:"og:title",content:l.title}),t.createElement("meta",{property:"og:description",content:l.description}),t.createElement("meta",{property:"og:image",content:l.image}),t.createElement("meta",{property:"og:url",content:v}),t.createElement("meta",{property:"og:type",content:g}),t.createElement("meta",{property:"twitter:title",content:l.title}),t.createElement("meta",{property:"twitter:description",content:l.description}),t.createElement("meta",{property:"twitter:image",content:l.image}),t.createElement("meta",{property:"twitter:url",content:v}),t.createElement("meta",{name:"robots",content:p}),t.createElement("meta",{name:"revisit-after",content:l.revisitAfter}))}},753:(m,h,e)=>{e.d(h,{Z:()=>i});var t=e(294);function E(n,c){const d=document.getElementById("particles"),o=d.getContext("2d"),s=(r,a)=>typeof a=="undefined"?Math.random()*(r[1]-r[0])+r[0]:Math.random()*(a-r)+r;class v{constructor(a){this.config=a,this.spawn()}spawn(){this.value=this.config.values[Math.floor(s(0,2))],this.size=s(this.config.size),this.speed=s(this.config.speed),this.x=s(this.config.x),this.y=s(this.config.y),this.offset=this.config.size[1]+20,Math.abs(this.speed)<1&&(this.speed+=this.speed<0?-1:1),this.setSpawnPosition()}respawn(){this.spawn()}setSpawnPosition(){if(this.speed<0){const a=["x","y"][Math.floor(s(0,2))],y=a==="x"?innerWidth:innerHeight;this[a]=y+this.size}else{const a=["x","y"][Math.floor(s(0,2))];this[a]=0-this.size}}viewport(){return!(this.x<0-this.offset||this.y<0-this.offset||this.x>innerWidth+this.offset||this.y>innerHeight+this.offset)}move(){this.x+=this.speed,this.y+=this.speed}}class l{constructor(a=100,y=20){this.particles=[];const x=()=>{a!==this.particles.length&&!c.aborted&&(this.particles.push(new v({values:n,x:[0,innerWidth],y:[0,innerHeight],size:[15,50],speed:[-8,8]})),setTimeout(x,y))};x()}get(){return this.particles}move(){for(const a of this.particles)a.move(),a.viewport()||a.respawn()}}const p=new l,g=()=>{o.beginPath(),o.fillStyle="rgba(0, 0, 0, 0.1)";for(const r of p.get())o.font=`${r.size/1.5}px arial black`,o.textBaseline="bottom",o.textAlign="left",o.fillText(r.value,r.x,r.y);o.fillStyle="rgba(0, 0, 0, 0.07)",o.fill(),o.lineWidth=1,o.strokeStyle="rgba(0, 0, 0, 0.08)",o.stroke()},P=()=>{c.aborted||(d.width=innerWidth,d.height=innerHeight,p.move(),g(),requestAnimationFrame(P))};P()}const i=n=>((0,t.useEffect)(()=>{const c=new AbortController;return E(n.particles,c.signal),()=>c.abort()},[]),t.createElement("canvas",{id:"particles"}))},455:(m,h,e)=>{var t=e(294),E=e(935),u=e(405),i=e(727),n=e(977);const d=({window:f})=>{const{pathname:A}=(0,n.TH)(),W=f?f():void 0;return(0,t.useEffect)(()=>{W&&W.scrollTo({top:0,behavior:"smooth"})},[A]),t.createElement(t.Fragment,null)},o={nav:"X3YiUN_n",Nav:"DBmzUxFZ",list:"XIWvWdvt",item:"jymVkDIi",Item:"AlOFzPPw",active:"oZYbPj0S"},s=f=>{const{pathname:A}=(0,n.TH)();return A===f.to?t.createElement(i.rU,{to:"#",className:`${o.item} ${o.active}`},f.children):t.createElement(i.rU,{to:f.to,className:o.item},f.children)},l=()=>t.createElement("nav",{className:o.nav},t.createElement("div",{className:o.list},t.createElement(s,{to:"/"},"About"),t.createElement(s,{to:"/skills"},"Skills"),t.createElement(s,{to:"/works"},"Works"),t.createElement(s,{to:"/contact"},"Contact")));var p=e(753),g=e(778),P=e(72);function r(){return t.createElement(g.Z,null,t.createElement(P.Z,{title:"404 Not Found",noindex:!0,nofollow:!0}),t.createElement(p.Z,{particles:["4","0"]}))}const a=(0,t.lazy)(()=>Promise.all([e.e(216),e.e(477)]).then(e.bind(e,477))),y=(0,t.lazy)(()=>Promise.all([e.e(216),e.e(36)]).then(e.bind(e,36))),x=(0,t.lazy)(()=>e.e(549).then(e.bind(e,549))),T=(0,t.lazy)(()=>e.e(834).then(e.bind(e,834))),C=(0,t.lazy)(()=>e.e(463).then(e.bind(e,463)));function M(){return t.createElement(t.Fragment,null,t.createElement(l,null),t.createElement(t.Suspense,{fallback:null},t.createElement(n.rs,null,t.createElement(n.AW,{exact:!0,path:"/",component:a}),t.createElement(n.AW,{path:"/skills",component:y}),t.createElement(n.AW,{path:"/works",component:x}),t.createElement(n.AW,{path:"/contact",component:T}),t.createElement(n.AW,{path:"/discord",component:C}),t.createElement(n.AW,{path:"*",component:r}))))}E.render(t.createElement(t.StrictMode,null,t.createElement(u.B,null,t.createElement(i.VK,null,t.createElement(d,null),t.createElement(M,null)))),document.getElementById("root"))}},m=>{var h=t=>m(m.s=t);m.O(0,[216],()=>h(455));var e=m.O()}]);
