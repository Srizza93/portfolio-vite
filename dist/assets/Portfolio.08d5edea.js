import{_ as m,a as S,b as v,c as j,d as k,e as y,f as z,g as C,h as V,i as P,j as L,k as T,l as w,m as M,n as D,o as J,p as H,q as x,r as q,s as N,t as A,u as I,v as U,w as W,x as B,y as E,z as F,A as $,B as R,C as G,D as K,E as O,F as Q,G as X,H as Y,S as h,N as o,I as a,J as s,K as i,Q as f,R as Z,W as ee,P as u,L as g,M as p}from"./index.952563ef.js";import{F as te}from"./FolioButton.667db661.js";const se={name:"Project",components:{FolioButton:te},props:{project:{type:Object,required:!0}},methods:{getImageUrl(t){return new URL({"../assets/advent.png":S,"../assets/arrow-mouse.png":v,"../assets/css.png":j,"../assets/cv-eng.pdf":k,"../assets/cv-fr.pdf":y,"../assets/cv-ita.pdf":z,"../assets/e-commerce-2.png":C,"../assets/e-commerce.png":V,"../assets/email-layout.png":P,"../assets/fr-flag.jpg":L,"../assets/fr-flag.png":T,"../assets/git.png":w,"../assets/html.png":M,"../assets/i18n.png":D,"../assets/ita-flag.jpg":J,"../assets/ita-flag.png":H,"../assets/jest.png":x,"../assets/js.png":q,"../assets/linkedin.png":N,"../assets/pencil.jpg":A,"../assets/portfolio.png":I,"../assets/portfolio2.png":U,"../assets/s-icon.png":W,"../assets/social.png":B,"../assets/square-task.png":E,"../assets/streaming.png":F,"../assets/todo.png":$,"../assets/tooltip.png":R,"../assets/uk-flag.jpg":G,"../assets/uk-flag.png":K,"../assets/vite.png":O,"../assets/vuejs.png":Q,"../assets/weather.png":X,"../assets/webpack.png":Y}[`../assets/${t}`],self.location).href},openDetails(t){t.toggle=!t.toggle}}},oe={class:"time-circle"},ae={class:"time-circle_sub"},ie={class:"time-circle_sub_date"},ne={class:"project_subcontainer"},le=["href"],re=["src","alt"],ce={key:0},_e={key:1},ge={class:"project_subcontainer_details_title"},pe={key:0,class:"project_subcontainer_details_title"},de={key:1,class:"project_subcontainer_details_list"},ue={class:"project_subcontainer_details_title"},me={class:"project_subcontainer_details_list"};function he(t,l,e,b,d,r){const c=h("folio-button");return o(),a("div",null,[s("div",oe,[s("div",ae,[s("span",ie,i(t.$t(`portfolio.months[${e.project.date[0]}]`))+" "+i(e.project.date[1]),1)])]),s("div",ne,[s("a",{class:"project_subcontainer_link",href:e.project.link},[s("img",{class:"project_subcontainer_link_image",src:r.getImageUrl(e.project.image),alt:e.project.name},null,8,re)],8,le),f(c,{class:"project_subcontainer_button",onClick:l[0]||(l[0]=n=>r.openDetails(e.project))},{default:Z(()=>[e.project.toggle?(o(),a("span",_e,i(t.$t("portfolio.closeDetails")),1)):(o(),a("span",ce,i(t.$t("portfolio.showDetails")),1))]),_:1}),s("div",{class:ee(["project_subcontainer_details",{"open-details":e.project.toggle}])},[s("span",ge,i(e.project.name),1),s("p",null,i(t.$t(`portfolio.${e.project.description}`)),1),e.project.functionalities?(o(),a("span",pe,i(t.$t("portfolio.functionalities")),1)):u("",!0),e.project.functionalities?(o(),a("ul",de,[(o(!0),a(g,null,p(e.project.functionalities,(n,_)=>(o(),a("li",{key:n+_},i(n),1))),128))])):u("",!0),s("span",ue,i(t.$t("portfolio.technologies")),1),s("ul",me,[(o(!0),a(g,null,p(e.project.techs,(n,_)=>(o(),a("li",{key:n+_},i(n),1))),128))])],2)])])}var fe=m(se,[["render",he],["__scopeId","data-v-00256971"]]);const be={name:"Portfolio",components:{Project:fe},data(){return{projects:[{id:1,name:"Todo App",date:["10","2022"],image:"todo.png",link:"https://srizza93.github.io/todo-app/",description:"tododescr",techs:["HTML","CSS","SASS","JS","Vue","Nuxt","Jest"],toggle:!1},{id:2,name:"Weather App",date:["10","2022"],image:"weather.png",link:"https://srizza93.github.io/weather-app/#/",description:"weatherdescr",techs:["HTML","CSS","SASS","JS","Vue","Vue-router","Vite"],toggle:!1},{id:3,name:"New Portfolio",date:["6","2022"],image:"portfolio2.png",link:"https://srizza93.github.io/portfolio-vite/",description:"portfolio2Descr",techs:["HTML","CSS","JS","Vue","Vue-router","Vite","i18n"],toggle:!1},{id:4,name:"E-commerce 2",date:["4","2022"],image:"e-commerce-2.png",link:"https://srizza93.github.io/sales/",description:"ecommerce2Descr",functionalities:["Products filtering and sort system","Product details page","Cart access and functionality","Purchase process","Personal info validation","Credit card validation","Loading page","Purchase confirmation"],techs:["HTML","CSS","JS","Vue","Vuex","Vue-router","Webpack"],toggle:!1},{id:5,name:"Advent Challenges",date:["1","2022"],image:"advent.png",link:"https://srizza93.github.io/advent-challenges/deploy/index.html#/",description:"adventDescr",techs:["HTML","CSS","JS","Vue","Vue-router"],toggle:!1},{id:6,name:"Social Network",date:["10","2021"],image:"social.png",link:"https://srizza93.github.io/social/deploy/index.html",description:"socialDescr",functionalities:["API data rendering","Navigation bar filtering","Profile page access","Notification system","Posts and comments publication","Chat system","Chat storing"],techs:["Webpack","HTML","CSS","JS","Vue","Vuex","Vue Test Utils","Jest"],toggle:!1},{id:7,name:"Portfolio",date:["10","2021"],image:"portfolio.png",link:"https://srizza93.github.io/portfolio/deploy/index.html",description:"portfolioDescr",techs:["Webpack","HTML","CSS","JS","Vue"],toggle:!1},{id:8,name:"Movie Streaming",date:["8","2021"],image:"streaming.png",link:"https://srizza93.github.io/streaming/deploy/index.html",description:"moviesDescr",functionalities:["API data rendering","Search bar filtering","Notification system","Sign up page","Trailer watching","Movie details access","Movie player access"],techs:["Webpack","HTML","CSS","JS","Vue","Vuex","Vue Test Utils","Jest"],toggle:!1},{id:9,name:"E-commerce",date:["6","2021"],image:"e-commerce.png",link:"https://srizza93.github.io/e-commerce/deploy/index.html",description:"ecommerceDescr",functionalities:["Navigation bar filtering","Gallery playing","Cart access and functionality","Products filtering and sort system","Product details page","Purchase process","Personal info validation","Credit card validation","Loading page","Purchase confirmation"],techs:["Webpack","HTML","CSS","JS","Vue","Vuex","Vue Test Utils","Jest"],toggle:!1},{id:10,name:"HTML Email layout",date:["6","2021"],image:"email-layout.png",link:"https://srizza93.github.io/cv-email-html/",description:"htmlLayoutDescr",techs:["HTML"],toggle:!1},{id:11,name:"Tooltip plugin",date:["5","2021"],image:"tooltip.png",link:"https://srizza93.github.io/tooltip/",description:"tooltipDescr",functionalities:["Custom content re-usability","Unlimited size","Respect viewport boundaries","Activation on dynamically loaded content","Possible to select the inner text","Centering"],techs:["HTML","CSS","JS"],toggle:!1},{id:12,name:"Square task",date:"Feb 2021",date:["1","2021"],image:"square-task.png",link:"https://srizza93.github.io/square_task/",description:"squareDescr",functionalities:["Square catching mouse","Square increase its size when it comes closer","Square respects window edges","Speed increase on mouse in the outer square","Speed decrease on mouse out the outer square"],techs:["HTML","CSS","JS"],toggle:!1}]}}},Se={class:"portfolio"},ve={class:"portfolio-subcontainer"};function je(t,l,e,b,d,r){const c=h("project");return o(),a("div",Se,[s("div",ve,[(o(!0),a(g,null,p(d.projects,n=>(o(),a("div",{class:"project",key:n.id+"-project"},[f(c,{project:n},null,8,["project"])]))),128))])])}var ze=m(be,[["render",je],["__scopeId","data-v-fbae1862"]]);export{ze as default};