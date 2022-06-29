import{_ as u,a as f,b as h,c as b,d as v,e as j,f as S,g as k,h as y,i as z,j as C,k as P,l as V,m as D,n as L,o as T,p as M,q as J,r as q,s as x,t as H,u as w,v as N,w as o,x as a,y as t,z as i,J as U,C as p,F as _,A as g,D as I,E as A}from"./index.37e91a56.js";const E={name:"Project",props:{project:{type:Object,required:!0}},methods:{getImageUrl(s){return new URL({"../assets/advent.png":f,"../assets/cv-eng.pdf":h,"../assets/cv-fr.pdf":b,"../assets/cv-ita.pdf":v,"../assets/e-commerce-2.png":j,"../assets/e-commerce.png":S,"../assets/email-layout.png":k,"../assets/fr-flag.jpg":y,"../assets/fr-flag.png":z,"../assets/ita-flag.jpg":C,"../assets/ita-flag.png":P,"../assets/linkedin.png":V,"../assets/pencil.jpg":D,"../assets/portfolio.png":L,"../assets/portfolio2.png":T,"../assets/s-icon.png":M,"../assets/social.png":J,"../assets/square-task.png":q,"../assets/streaming.png":x,"../assets/tooltip.png":H,"../assets/uk-flag.jpg":w,"../assets/uk-flag.png":N}[`../assets/${s}`],self.location).href},openDetails(s){s.toggle=!s.toggle}}},W={class:"time-circle"},$={class:"time-circle_sub"},B={class:"time-circle_sub_date"},F={class:"project_subcontainer"},R=["href"],G=["src","alt"],O={key:0},K={key:1},Q={class:"project_subcontainer_details_title"},X={key:0,class:"project_subcontainer_details_title"},Y={key:1,class:"project_subcontainer_details_list"},Z={class:"project_subcontainer_details_title"},ee={class:"project_subcontainer_details_list"};function te(s,r,e,m,d,c){return o(),a("div",null,[t("div",W,[t("div",$,[t("span",B,i(s.$t(`portfolio.months[${e.project.date[0]}]`))+" "+i(e.project.date[1]),1)])]),t("div",F,[t("a",{class:"project_subcontainer_link",href:e.project.link},[t("img",{class:"project_subcontainer_link_image",src:c.getImageUrl(e.project.image),alt:e.project.name},null,8,G)],8,R),t("button",{class:"project_subcontainer_button open-button",onClick:r[0]||(r[0]=n=>c.openDetails(e.project))},[e.project.toggle?(o(),a("span",K,i(s.$t("portfolio.closeDetails")),1)):(o(),a("span",O,i(s.$t("portfolio.showDetails")),1))]),t("div",{class:U(["project_subcontainer_details",{"open-details":e.project.toggle}])},[t("span",Q,i(e.project.name),1),t("p",null,i(s.$t(`portfolio.${e.project.description}`)),1),e.project.functionalities?(o(),a("span",X,i(s.$t("portfolio.functionalities")),1)):p("",!0),e.project.functionalities?(o(),a("ul",Y,[(o(!0),a(_,null,g(e.project.functionalities,(n,l)=>(o(),a("li",{key:n+l},i(n),1))),128))])):p("",!0),t("span",Z,i(s.$t("portfolio.technologies")),1),t("ul",ee,[(o(!0),a(_,null,g(e.project.techs,(n,l)=>(o(),a("li",{key:n+l},i(n),1))),128))])],2)])])}var se=u(E,[["render",te],["__scopeId","data-v-505475a7"]]);const oe={name:"Portfolio",components:{Project:se},data(){return{projects:[{id:1,name:"New Portfolio",date:["6","2022"],image:"portfolio2.png",link:"https://srizza93.github.io/portfolio-vite/",description:"portfolio2Descr",techs:["HTML","CSS","JS","Vue","Vue-router","Vite","i18n"],toggle:!1},{id:2,name:"E-commerce 2",date:["4","2022"],image:"e-commerce-2.png",link:"https://srizza93.github.io/sales/",description:"ecommerce2Descr",functionalities:["Products filtering and sort system","Product details page","Cart access and functionality","Purchase process","Personal info validation","Credit card validation","Loading page","Purchase confirmation"],techs:["HTML","CSS","JS","Vue","Vuex","Vue-router","Webpack"],toggle:!1},{id:3,name:"Advent Challenges",date:["1","2022"],image:"advent.png",link:"https://srizza93.github.io/advent-challenges/deploy/index.html#/",description:"adventDescr",techs:["HTML","CSS","JS","Vue","Vue-router"],toggle:!1},{id:4,name:"Social Network",date:["10","2021"],image:"social.png",link:"https://srizza93.github.io/social/deploy/index.html",description:"socialDescr",functionalities:["API data rendering","Navigation bar filtering","Profile page access","Notification system","Posts and comments publication","Chat system","Chat storing"],techs:["Webpack","HTML","CSS","JS","Vue","Vuex","Vue Test Utils","Jest"],toggle:!1},{id:5,name:"Portfolio",date:["10","2021"],image:"portfolio.png",link:"https://srizza93.github.io/portfolio/deploy/index.html",description:"portfolioDescr",techs:["Webpack","HTML","CSS","JS","Vue"],toggle:!1},{id:6,name:"Movie Streaming",date:["8","2021"],image:"streaming.png",link:"https://srizza93.github.io/streaming/deploy/index.html",description:"moviesDescr",functionalities:["API data rendering","Search bar filtering","Notification system","Sign up page","Trailer watching","Movie details access","Movie player access"],techs:["Webpack","HTML","CSS","JS","Vue","Vuex","Vue Test Utils","Jest"],toggle:!1},{id:7,name:"E-commerce",date:["6","2021"],image:"e-commerce.png",link:"https://srizza93.github.io/e-commerce/deploy/index.html",description:"ecommerceDescr",functionalities:["Navigation bar filtering","Gallery playing","Cart access and functionality","Products filtering and sort system","Product details page","Purchase process","Personal info validation","Credit card validation","Loading page","Purchase confirmation"],techs:["Webpack","HTML","CSS","JS","Vue","Vuex","Vue Test Utils","Jest"],toggle:!1},{id:8,name:"HTML Email layout",date:["6","2021"],image:"email-layout.png",link:"https://srizza93.github.io/cv-email-html/",description:"htmlLayoutDescr",techs:["HTML"],toggle:!1},{id:9,name:"Tooltip plugin",date:["5","2021"],image:"tooltip.png",link:"https://srizza93.github.io/tooltip/",description:"tooltipDescr",functionalities:["Custom content re-usability","Unlimited size","Respect viewport boundaries","Activation on dynamically loaded content","Possible to select the inner text","Centering"],techs:["HTML","CSS","JS"],toggle:!1},{id:10,name:"Square task",date:"Feb 2021",date:["1","2021"],image:"square-task.png",link:"https://srizza93.github.io/square_task/",description:"squareDescr",functionalities:["Square catching mouse","Square increase its size when it comes closer","Square respects window edges","Speed increase on mouse in the outer square","Speed decrease on mouse out the outer square"],techs:["HTML","CSS","JS"],toggle:!1}]}}},ae={class:"portfolio"},ie={class:"portfolio-subcontainer"};function ne(s,r,e,m,d,c){const n=I("project");return o(),a("div",ae,[t("div",ie,[(o(!0),a(_,null,g(d.projects,l=>(o(),a("div",{class:"project",key:l.id+"-project"},[A(n,{project:l},null,8,["project"])]))),128))])])}var re=u(oe,[["render",ne],["__scopeId","data-v-ffbfd710"]]);export{re as default};