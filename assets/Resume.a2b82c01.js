import{_ as n,a as r,b as c,c as p,d,e as i,f,g as m,h as u,i as b,j as v,k as h,l as k,m as j,n as y,o as w,p as R,q as U,r as $,s as x,t as B,u as q,v as z,w as e,x as t,y as a,z as o,F as C,A as E,K as F}from"./index.37e91a56.js";const L={name:"Resume",data(){return{cvs:[{id:1,name:"cv-fr",alt:"french-flag",img:"fr-flag.jpg",path:"cv-fr.pdf",col:"#002654"},{id:2,name:"cv-eng",alt:"uk-flag",img:"uk-flag.jpg",path:"cv-eng.pdf",col:"#C8102E"},{id:3,name:"cv-ita",alt:"ita-flag",img:"ita-flag.jpg",path:"cv-ita.pdf",col:"#008C45"}]}},methods:{getUrl(_){return new URL({"../assets/advent.png":r,"../assets/cv-eng.pdf":c,"../assets/cv-fr.pdf":p,"../assets/cv-ita.pdf":d,"../assets/e-commerce-2.png":i,"../assets/e-commerce.png":f,"../assets/email-layout.png":m,"../assets/fr-flag.jpg":u,"../assets/fr-flag.png":b,"../assets/ita-flag.jpg":v,"../assets/ita-flag.png":h,"../assets/linkedin.png":k,"../assets/pencil.jpg":j,"../assets/portfolio.png":y,"../assets/portfolio2.png":w,"../assets/s-icon.png":R,"../assets/social.png":U,"../assets/square-task.png":$,"../assets/streaming.png":x,"../assets/tooltip.png":B,"../assets/uk-flag.jpg":q,"../assets/uk-flag.png":z}[`../assets/${_}`],self.location).href}}},S={class:"resume"},A={class:"header"},D={class:"cvs"},I=["href","download"],K=["src","alt"],N={class:"cvs_cv_download"};function V(_,G,H,J,g,l){return e(),t("div",S,[a("span",A,o(_.$t("resume.header")),1),a("div",D,[(e(!0),t(C,null,E(g.cvs,s=>(e(),t("a",{class:"cvs_cv",href:l.getUrl(s.path),download:s.name,key:s.id,style:F("background-color: "+s.col)},[a("img",{class:"cvs_cv_flag",src:l.getUrl(s.img),alt:s.alt},null,8,K),a("div",N,[a("span",null,o(_.$t("resume.download")),1)])],12,I))),128))])])}var O=n(L,[["render",V],["__scopeId","data-v-494d2681"]]);export{O as default};