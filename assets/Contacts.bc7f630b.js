import{_ as i,a as g,b as c,c as r,d as p,e as d,f as m,g as b,h as f,i as h,j as u,k,l as v,m as j,n as w,o as x,p as y,q as z,r as $,s as C,t as B,u as I,v as N,w as L,x as U,y as V,z as q,A as D,B as E,C as F,D as A,E as G,F as H,G as e,H as t,I as s,J as n,K as J,L as K,M,N as R}from"./index.033bcffa.js";const S={name:"Contacts",data(){return{contacts:[{id:1,link:"tel:+33772233271",text:"+33772233271"},{id:2,link:"mailto:simonerizzanl@gmail.com",text:"simonerizzanl@gmail.com"},{id:3,link:"https://www.linkedin.com/in/simonerizza1993",text:"",image:{link:"linkedin.png",name:"linkedin"}}]}},methods:{getImageUrl(a){return new URL({"../assets/advent.png":g,"../assets/arrow-mouse.png":c,"../assets/css.png":r,"../assets/cv-eng.pdf":p,"../assets/cv-fr.pdf":d,"../assets/cv-ita.pdf":m,"../assets/e-commerce-2.png":b,"../assets/e-commerce.png":f,"../assets/email-layout.png":h,"../assets/fr-flag.jpg":u,"../assets/fr-flag.png":k,"../assets/git.png":v,"../assets/html.png":j,"../assets/i18n.png":w,"../assets/ita-flag.jpg":x,"../assets/ita-flag.png":y,"../assets/jest.png":z,"../assets/js.png":$,"../assets/linkedin.png":C,"../assets/pencil.jpg":B,"../assets/portfolio.png":I,"../assets/portfolio2.png":N,"../assets/s-icon.png":L,"../assets/social.png":U,"../assets/square-task.png":V,"../assets/streaming.png":q,"../assets/tooltip.png":D,"../assets/uk-flag.jpg":E,"../assets/uk-flag.png":F,"../assets/vite.png":A,"../assets/vuejs.png":G,"../assets/webpack.png":H}[`../assets/${a}`],self.location).href}}},T={class:"contacts"},O={class:"headers"},P={class:"headers_header"},Q={class:"headers_header"},W={class:"contact-details"},X={class:"contact-details_title"},Y={class:"contact-details_list"},Z=["href"],ss=["src","alt"];function _s(a,as,es,ts,o,l){return e(),t("div",T,[s("div",O,[s("span",P,n(a.$t("contacts.header1")),1),s("span",Q,n(a.$t("contacts.header2")),1)]),s("div",W,[s("span",X,n(a.$t("navigation.contacts")),1),s("ul",Y,[(e(!0),t(J,null,K(o.contacts,_=>(e(),t("li",{class:"contact-details_list_item",key:"contact-"+_.id},[s("a",{class:"contact-details_list_item_link",href:_.link},[M(n(_.text)+" ",1),_.image?(e(),t("img",{key:0,class:"contact-details_list_item_link_icon",src:l.getImageUrl(_.image.link),alt:_.image.name},null,8,ss)):R("",!0)],8,Z)]))),128))])])])}var os=i(S,[["render",_s],["__scopeId","data-v-3ce2c023"]]);export{os as default};
