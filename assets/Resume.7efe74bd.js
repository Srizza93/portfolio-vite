import{_ as n,a as r,b as c,c as i,d as p,e as d,f,g as m,h as u,i as v,j as b,k as h,l as k,m as j,n as y,o as z,p as w,q as $,r as I,s as R,t as x,u as _,v as t,w as a,x as o,F as B,y as U,I as q}from"./index.245822ec.js";const C={name:"Resume",data(){return{cvs:[{id:1,name:"cv-fr",alt:"french-flag",img:"fr-flag.jpg",path:"https://srizza93.github.io/portfolio-vite/src/assets/cv-fr.pdf",col:"#002654"},{id:2,name:"cv-eng",alt:"uk-flag",img:"uk-flag.jpg",path:"https://srizza93.github.io/portfolio-vite/src/assets/cv-eng.pdf",col:"#C8102E"},{id:3,name:"cv-ita",alt:"ita-flag",img:"ita-flag.jpg",path:"https://srizza93.github.io/portfolio-vite/src/assets/cv-ita.pdf",col:"#008C45"}]}},methods:{getImageUrl(e){return new URL({"../assets/advent.png":r,"../assets/cv-eng.pdf":c,"../assets/cv-fr.pdf":i,"../assets/cv-ita.pdf":p,"../assets/e-commerce-2.png":d,"../assets/e-commerce.png":f,"../assets/email-layout.png":m,"../assets/fr-flag.jpg":u,"../assets/fr-flag.png":v,"../assets/ita-flag.jpg":b,"../assets/ita-flag.png":h,"../assets/linkedin.png":k,"../assets/pencil.jpg":j,"../assets/s-icon.png":y,"../assets/social.png":z,"../assets/square-task.png":w,"../assets/streaming.png":$,"../assets/tooltip.png":I,"../assets/uk-flag.jpg":R,"../assets/uk-flag.png":x}[`../assets/${e}`],self.location).href}}},E={class:"resume"},F={class:"header"},L={class:"cvs"},S=["href","download"],D=["src","alt"],N={class:"cvs_cv_download"};function V(e,A,G,H,l,g){return _(),t("div",E,[a("span",F,o(e.$t("resume.header")),1),a("div",L,[(_(!0),t(B,null,U(l.cvs,s=>(_(),t("a",{class:"cvs_cv",href:s.path,download:s.name,key:s.id,style:q("background-color: "+s.col)},[a("img",{class:"cvs_cv_flag",src:g.getImageUrl(s.img),alt:s.alt},null,8,D),a("div",N,[a("span",null,o(e.$t("resume.download")),1)])],12,S))),128))])])}var K=n(C,[["render",V],["__scopeId","data-v-108ff7c6"]]);export{K as default};
