import{_ as g,a as i,b as c,c as r,d as p,e as d,f as m,g as b,h as f,i as h,j as u,k,l as v,m as j,n as w,o as x,p as y,q as z,r as $,s as C,t as B,u as I,v as N,w as L,x as U,y as V,z as q,A as D,B as E,C as F,D as A,E as G,F as H,G as J,H as K,I as e,J as t,K as s,L as o,M,N as O,O as P,P as R}from"./index.cdea055a.js";const S={name:"Contacts",data(){return{contacts:[{id:1,link:"tel:+33772233271",text:"+33772233271"},{id:2,link:"mailto:simonerizzanl@gmail.com",text:"simonerizzanl@gmail.com"},{id:3,link:"https://www.linkedin.com/in/simonerizza1993",text:"",image:{link:"linkedin.png",name:"linkedin"}}]}},methods:{getImageUrl(a){return new URL({"../assets/advent.png":i,"../assets/arrow-mouse.png":c,"../assets/css.png":r,"../assets/cv-eng.pdf":p,"../assets/cv-fr.pdf":d,"../assets/cv-ita.pdf":m,"../assets/e-commerce-2.png":b,"../assets/e-commerce.png":f,"../assets/email-layout.png":h,"../assets/fr-flag.jpg":u,"../assets/fr-flag.png":k,"../assets/git.png":v,"../assets/html.png":j,"../assets/i18n.png":w,"../assets/ita-flag.jpg":x,"../assets/ita-flag.png":y,"../assets/jest.png":z,"../assets/js.png":$,"../assets/linkedin.png":C,"../assets/pencil.jpg":B,"../assets/portfolio.png":I,"../assets/portfolio2.png":N,"../assets/s-icon.png":L,"../assets/social.png":U,"../assets/square-task.png":V,"../assets/streaming.png":q,"../assets/todo.png":D,"../assets/tooltip.png":E,"../assets/uk-flag.jpg":F,"../assets/uk-flag.png":A,"../assets/vite.png":G,"../assets/vuejs.png":H,"../assets/weather.png":J,"../assets/webpack.png":K}[`../assets/${a}`],self.location).href}}},T={class:"contacts"},Q={class:"headers"},W={class:"headers_header"},X={class:"headers_header"},Y={class:"contact-details"},Z={class:"contact-details_title"},ss={class:"contact-details_list"},_s=["href"],as=["src","alt"];function es(a,ts,os,ns,n,l){return e(),t("div",T,[s("div",Q,[s("span",W,o(a.$t("contacts.header1")),1),s("span",X,o(a.$t("contacts.header2")),1)]),s("div",Y,[s("span",Z,o(a.$t("navigation.contacts")),1),s("ul",ss,[(e(!0),t(M,null,O(n.contacts,_=>(e(),t("li",{class:"contact-details_list_item",key:"contact-"+_.id},[s("a",{class:"contact-details_list_item_link",href:_.link},[P(o(_.text)+" ",1),_.image?(e(),t("img",{key:0,class:"contact-details_list_item_link_icon",src:l.getImageUrl(_.image.link),alt:_.image.name},null,8,as)):R("",!0)],8,_s)]))),128))])])])}var gs=g(S,[["render",es],["__scopeId","data-v-3ce2c023"]]);export{gs as default};
