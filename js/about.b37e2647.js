(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"546b":function(e,t,i){},"5b61":function(e,t,i){(function(e,i){i(t)})(0,(function(e){"use strict";(function(){if("undefined"!==typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),i=" .timeline { padding: 0; position: relative; list-style: none; font-family: PingFangSC-light, Avenir, Helvetica, Arial, Hiragino Sans GB, Microsoft YaHei, sans-serif; -webkit-font-smoothing: antialiased; margin: 10px 20px; } .timeline:after { position: absolute; content: ''; left: 0; top: 0; width: 1px; height: 100%; background-color: var(--timelineTheme); } .timeline-item { position: relative; margin: 1.5em 0 0 28px; padding-bottom: 1.5em; border-bottom: 1px dotted var(--timelineTheme); } .timeline-item:last-child { border-bottom: none; } .timeline-circle { position: absolute; top: .28em; left: -34px; width: 10px; height: 10px; border-radius: 50%; border: 1px solid var(--timelineTheme); background-color: var(--timelineTheme); z-index: 1; box-sizing: content-box; } .timeline-circle.hollow { background-color: var(--timelineBg); } .timeline-title { position: relative; display: inline-block; /** * BFC inline-block 元素与其兄弟元素、子元素和父元素的外边距都不会折叠（包括其父元素和子元素） */ cursor: crosshair; margin: -.15em 0 15px 28px } .timeline-title:not(:first-child) { margin-top: 28px; } .timeline-title-circle { left: -36px; top: .15em; width: 16px; height: 16px; } .timeline-others { width: 40px; height: auto; top: .2em; left: -48px; line-height: 1; padding: 2px 0; text-align: center; border: none; background-color: var(--timelineBg); } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=i:t.appendChild(document.createTextNode(i)),e.appendChild(t)}})();var t={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",{ref:"timeline",staticClass:"timeline"},[e._t("default")],2)},staticRenderFns:[],name:"Timeline",props:{timelineTheme:{type:String,default:"#dbdde0"},timelineBg:{type:String,default:"#fff"}},mounted:function(){var e=this.$refs.timeline;e.style.setProperty("--timelineTheme",this.timelineTheme),e.style.setProperty("--timelineBg",this.timelineBg)}};(function(){if("undefined"!==typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),i="";t.type="text/css",t.styleSheet?t.styleSheet.cssText=i:t.appendChild(document.createTextNode(i)),e.appendChild(t)}})();var i={name:"TimelineItemBase",props:{bgColor:{type:String,default:""},lineColor:{type:String,default:""},hollow:{type:Boolean,default:!1},fontColor:{type:String,default:"#37414a"}},data:function(){return{slotOthers:!1}},computed:{circleStyle:function(){if(this.bgColor||this.lineColor||this.hollow){var e={};return this.bgColor&&(e={"border-color":this.bgColor,"background-color":this.bgColor}),this.lineColor&&(e=Object.assign({},e,{"border-color":this.lineColor})),e}},itemStyle:function(){return{color:this.fontColor}},slotClass:function(){var e="";return this.slotOthers?e="timeline-others":this.hollow&&(e="hollow"),e}},mounted:function(){this.slotOthers=!!this.$refs.others.innerHTML}};(function(){if("undefined"!==typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),i="";t.type="text/css",t.styleSheet?t.styleSheet.cssText=i:t.appendChild(document.createTextNode(i)),e.appendChild(t)}})();var n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{staticClass:"timeline-item",style:e.itemStyle},[i("div",{ref:"others",staticClass:"timeline-circle",class:e.slotClass,style:e.circleStyle},[e._t("others")],2),e._v(" "),e._t("default")],2)},staticRenderFns:[],extends:i};(function(){if("undefined"!==typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),i="";t.type="text/css",t.styleSheet?t.styleSheet.cssText=i:t.appendChild(document.createTextNode(i)),e.appendChild(t)}})();var a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{staticClass:"timeline-title",style:e.itemStyle},[i("div",{ref:"others",staticClass:"timeline-circle timeline-title-circle",class:e.slotClass,style:e.circleStyle},[e._t("others")],2),e._v(" "),e._t("default")],2)},staticRenderFns:[],extends:i};"undefined"!==typeof window&&window.Vue&&(window.Vue.component(t.name,t),window.Vue.component(n.name,n),window.Vue.component(a.name,a)),e.Timeline=t,e.TimelineItem=n,e.TimelineTitle=a,Object.defineProperty(e,"__esModule",{value:!0})}))},"84c3":function(e,t,i){},"915e":function(e,t,i){e.exports=i.p+"img/avatar.cb9b7b6c.jpg"},c66d:function(e,t,i){"use strict";var n=i("84c3"),a=i.n(n);a.a},d21a:function(e,t,i){"use strict";var n=i("546b"),a=i.n(n);a.a},f820:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"about container"},[i("article",{staticClass:"media is-hoverable"},[e._m(0),i("div",{staticClass:"media-content"},[i("div",{staticClass:"content"},[i("div",[i("strong",{staticClass:"has-text-warning"},[e._v(" "+e._s(e.name)+" ")]),i("br"),i("p",[e._v(" "+e._s(e.desc)+" ")]),e._m(1),e._m(2)])]),e._m(3)])]),i("Time")],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("figure",{staticClass:"has-text-centered"},[n("p",{staticClass:"image"},[n("img",{attrs:{src:i("915e")}})])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",{staticClass:"has-text-warning"},[i("i",{staticClass:"fa fa-envelope "}),e._v(" Email: "),i("a",{staticClass:"has-text-warning",attrs:{href:"mailto:ayonifeoluwa@gmail.com",target:"blank"}},[e._v("ayonifeoluwa@gmail.com")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",{staticClass:"has-text-warning"},[i("i",{staticClass:"fa fa-phone "}),e._v(" Phone Number: "),i("a",{staticClass:"has-text-warning",attrs:{href:"",target:"blank"}},[e._v("+2348032385253")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("nav",{staticClass:"level is-mobile"},[i("div",{staticClass:"level-left"},[i("a",{staticClass:"level-item hvr-icon-spin",attrs:{href:"https://web.facebook.com/dannyyol?_rdc=1&_rdr",target:"blank",rel:"noopener"}},[i("span",{staticClass:"icon"},[i("i",{staticClass:"fa fa-facebook-f hvr-icon"})])]),i("a",{staticClass:"level-item hvr-icon-spin",attrs:{href:"https://github.com/dannyyol",target:"blank",rel:"noopener"}},[i("span",{staticClass:"icon"},[i("i",{staticClass:"fa fa-github hvr-icon"})])]),i("a",{staticClass:"level-item hvr-icon-spin",attrs:{href:"https://www.linkedin.com/in/falore-ayobami-a75502147/",target:"blank",rel:"noopener"}},[i("span",{staticClass:"icon"},[i("i",{staticClass:"fa fa-linkedin-in hvr-icon"})])])])])}],l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"timeline"},[i("timeline",{attrs:{"timeline-theme":"#ffdc00"}},[i("timeline-title",[e._v("NOV2018-FEB2019")]),i("timeline-item",{attrs:{"bg-color":"#9dd8e0"}},[i("p",[e._v("Technical Support Analyst 💻")])]),i("timeline-title",[e._v("DEC2019-TILL DATE")]),i("timeline-item",{attrs:{"bg-color":"#9dd8e0"}},[i("p",[e._v("Junior Developer Associate 💻")])]),i("timeline-title",{attrs:{"bg-color":"#f2d7e1"}},[e._v("Higher National Diploma in Mechanical Engineering (Upper Credit)")]),i("timeline-item",{attrs:{"bg-color":"#ffdc00"}},[i("p",[e._v("Rufus Giwa Polytechnic.🎓 ")])])],1)],1)},s=[],o=i("5b61"),r={name:"Time",components:{Timeline:o["Timeline"],TimelineItem:o["TimelineItem"],TimelineTitle:o["TimelineTitle"]}},c=r,m=(i("d21a"),i("2877")),d=Object(m["a"])(c,l,s,!1,null,"10babb47",null),h=d.exports,p={data:function(){return{name:"Ayobami I",desc:"I am a Web Developer specializing in both front end and back end development. Experienced with all stages of the development cycle\n        for dynamic web projects. My experience with web development is\n        primarily PHP, Javascript, but I am also comfortable using Python and\n        Dart. I am creative and detail-oriented in designing platforms that are\n        functional and user-friendly.",avatar:"https://drive.google.com/file/d/14qZuojiwJN914-RZR7eCIcs6ZzZ9ZRh3/view"}},components:{Time:h}},u=p,f=(i("c66d"),Object(m["a"])(u,n,a,!1,null,"4e51c820",null));t["default"]=f.exports}}]);
//# sourceMappingURL=about.b37e2647.js.map