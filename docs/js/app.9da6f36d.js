(function(e){function t(t){for(var c,i,a=t[0],s=t[1],u=t[2],l=0,b=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&b.push(o[i][0]),o[i]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(c=!1)}c&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},o={app:0},r=[];function i(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"87761e77"}[e]+".js"}function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,c){n=o[e]=[t,c]}));t.push(n[2]=c);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=i(e);var u=new Error;r=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",u.name="ChunkLoadError",u.type=c,u.request=r,n[1](u)}o[e]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(t)},a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/cinematik/",a.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4678:function(e,t,n){var c={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}o.keys=function(){return Object.keys(c)},o.resolve=r,e.exports=o,o.id="4678"},"482e":function(e,t,n){},5298:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function o(e,t,n,o,r,i){var a=Object(c["w"])("app-header"),s=Object(c["w"])("router-view");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["h"])(a),Object(c["h"])(s)],64)}var r={class:"header"},i={type:"checkbox",name:"navMenuBtn",id:"navMenuBtn",ref:"menu"},a=Object(c["h"])("label",{for:"navMenuBtn",class:"menu-btn"},[Object(c["h"])("svg",{class:"menu-btn-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(c["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})])],-1);function s(e,t,n,o,s,u){var l=Object(c["w"])("navbar");return Object(c["q"])(),Object(c["d"])("div",r,[Object(c["h"])("h3",{class:"logo",onClick:t[1]||(t[1]=function(){return u.toHomepage&&u.toHomepage.apply(u,arguments)})},"Cinematik"),Object(c["h"])("input",i,null,512),a,Object(c["h"])(l,{onCloseMenu:u.closeMenu},null,8,["onCloseMenu"])])}var u={class:"nav"},l={class:"links-container"},d=Object(c["g"])("Home"),b=Object(c["g"])("About");function j(e,t,n,o,r,i){var a=Object(c["w"])("router-link");return Object(c["q"])(),Object(c["d"])("div",u,[Object(c["h"])("div",l,[Object(c["h"])(a,{class:"nav-link",to:"/",onClick:i.closeMenu},{default:Object(c["B"])((function(){return[d]})),_:1},8,["onClick"]),Object(c["h"])(a,{class:"nav-link",to:"/about",onClick:i.closeMenu},{default:Object(c["B"])((function(){return[b]})),_:1},8,["onClick"])])])}var v={emits:["close-menu"],methods:{closeMenu:function(){this.$emit("close-menu")}}};v.render=j;var m=v,h={components:{Navbar:m},methods:{closeMenu:function(){this.$refs.menu.checked=!1},toHomepage:function(){this.$router.push("/")}}};h.render=s;var f=h,p={components:{AppHeader:f},created:function(){this.$store.dispatch("getPopularMovies",this.page),this.$store.dispatch("getMovieStatistics")}};n("e407");p.render=o;var O=p,g=(n("d3b7"),n("6c02")),y={class:"home"},w=Object(c["h"])("h2",null,"Popular Right Now",-1);function M(e,t,n,o,r,i){var a=Object(c["w"])("movie-list"),s=Object(c["w"])("chart");return Object(c["q"])(),Object(c["d"])("div",y,[w,Object(c["h"])(a,{movies:e.movies},null,8,["movies"]),Object(c["h"])("button",{class:"btn",onClick:t[1]||(t[1]=function(){return i.loadMovies&&i.loadMovies.apply(i,arguments)})},"Show More"),e.movieStats?(Object(c["q"])(),Object(c["d"])(s,{key:0,moviesData:e.movieStats},null,8,["moviesData"])):Object(c["e"])("",!0)])}var k=n("5530"),S={class:"movie-list"};function q(e,t,n,o,r,i){var a=Object(c["w"])("movie-preview");return Object(c["q"])(),Object(c["d"])("div",S,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(n.movies,(function(e){return Object(c["q"])(),Object(c["d"])(a,{key:e.id,movie:e},null,8,["movie"])})),128))])}var x={class:"movie-image-container"},A={key:0,class:"rating-container"},C={class:"movie-rating"},P=Object(c["h"])("svg",{class:"star-icon",fill:"currentColor",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(c["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})],-1),R={class:"movie-details"},_={class:"movie-title"},E={class:"movie-date"};function z(e,t,n,o,r,i){return Object(c["q"])(),Object(c["d"])("div",{class:"movie-preview",onClick:t[1]||(t[1]=function(){return i.toMoviePage&&i.toMoviePage.apply(i,arguments)})},[Object(c["h"])("div",x,[Object(c["h"])("img",{src:i.movieImage,alt:"Movie Image Not Available",class:"movie-image"},null,8,["src"]),n.movie.vote_average?(Object(c["q"])(),Object(c["d"])("div",A,[Object(c["h"])("h5",C,Object(c["y"])(n.movie.vote_average),1),P])):Object(c["e"])("",!0)]),Object(c["h"])("div",R,[Object(c["h"])("h2",_,Object(c["y"])(n.movie.title),1),Object(c["h"])("h2",E,Object(c["y"])(i.movieYear),1)])])}var D={name:"MoviePreview",props:{movie:{type:Object,required:!0}},computed:{movieImage:function(){return"https://image.tmdb.org/t/p/w300".concat(this.movie.backdrop_path)},movieYear:function(){var e=new Date(this.movie.release_date);return e.getFullYear()}},methods:{toMoviePage:function(){this.$router.push("/movie/".concat(this.movie.id))}}};D.render=z;var L=D,T={name:"MovieList",components:{MoviePreview:L},props:{movies:{type:Array,required:!0}}};T.render=q;var B=T,I={class:"chart"},Y={class:"canvas",id:"my-chart",width:"400",height:"300",ref:"ctx"};function F(e,t,n,o,r,i){return Object(c["q"])(),Object(c["d"])("div",I,[Object(c["h"])("h5",null,"Daily Average: "+Object(c["y"])(i.average),1),Object(c["h"])("canvas",Y,null,512)])}n("99af"),n("d81d"),n("13d5"),n("b680");var N=n("30ef"),H=n.n(N),J={props:{moviesData:{type:Array,required:!0}},computed:{labels:function(){return this.moviesData.map((function(e){var t=new Date(e.date),n=["January","February","March","April","May","June","July","August","September","October","November","December"],c=t.getMonth(),o=t.getDate();return"".concat(n[c]," ").concat(o)}))},counts:function(){return this.moviesData.map((function(e){return e.count}))},average:function(){var e=this.moviesData.reduce((function(e,t){return e+=t.count,e}),0),t=e/this.moviesData.length;return parseFloat(t.toFixed(1))}},methods:{createChart:function(){var e=new H.a(this.$refs.ctx,{type:"line",data:{labels:this.labels,datasets:[{label:"Movies per day",data:this.counts,borderColor:"#FF0E39",pointRadius:5,fill:!1,spanGaps:!1}]},options:{scales:{yAxes:[{scaleLabel:{display:!0,labelString:"# of Movies",fontSize:16},ticks:{fontSize:16,beginAtZero:!0,autoSkip:!0,padding:6}}],xAxes:[{scaleLabel:{display:!0,labelString:"Dates",fontSize:16},ticks:{}}]},layout:{},title:{display:!0,text:"Movies released in the last 90 days",position:"bottom",fontColor:"white",fontSize:20}}});console.log(e)}},mounted:function(){this.createChart()}};J.render=F;var $=J,U=n("5502"),G={name:"Home",components:{MovieList:B,Chart:$},computed:Object(k["a"])({},Object(U["b"])({movies:function(e){return e.moviesToShow},movieStats:function(e){return e.movieStatistics}})),methods:{loadMovies:function(){this.$store.dispatch("getPopularMovies")}}};G.render=M;var W=G,X={class:"movie-page"},Q={key:2,class:"movie"},V={class:"main-section"},Z={key:0},K=Object(c["h"])("h3",{class:"similar-movies-title"},"You might also like:",-1),ee={class:"movie-similar-movies"};function te(e,t,n,o,r,i){var a=Object(c["w"])("error-loading"),s=Object(c["w"])("loading-data"),u=Object(c["w"])("movie-overview"),l=Object(c["w"])("movie-details"),d=Object(c["w"])("movie-cast"),b=Object(c["w"])("secondary-menu"),j=Object(c["w"])("similar-movies");return Object(c["q"])(),Object(c["d"])("div",X,[e.apiStatus.error?(Object(c["q"])(),Object(c["d"])(a,{key:0})):Object(c["e"])("",!0),e.apiStatus.inProgress?(Object(c["q"])(),Object(c["d"])(s,{key:1})):Object(c["e"])("",!0),e.apiStatus.success?(Object(c["q"])(),Object(c["d"])("div",Q,[Object(c["h"])("div",{class:"movie-image-mobile",style:{backgroundImage:i.movieBackdrop}},null,4),Object(c["h"])("div",V,["Overview"===r.activeSection?(Object(c["q"])(),Object(c["d"])(u,{key:0,movie:e.movie},null,8,["movie"])):Object(c["e"])("",!0),"Details"===r.activeSection?(Object(c["q"])(),Object(c["d"])(l,{key:1,movie:e.movie},null,8,["movie"])):Object(c["e"])("",!0),"Cast"===r.activeSection?(Object(c["q"])(),Object(c["d"])(d,{key:2,movie:e.movie},null,8,["movie"])):Object(c["e"])("",!0),Object(c["h"])(b,{onSelectedSection:i.sectionToShow},null,8,["onSelectedSection"])]),e.movie.similarMovies?(Object(c["q"])(),Object(c["d"])("div",Z,[K,Object(c["h"])("div",ee,[Object(c["h"])(j,{movies:e.movie.similarMovies},null,8,["movies"])])])):Object(c["e"])("",!0)])):Object(c["e"])("",!0)])}var ne={class:"loading-screen"},ce=Object(c["f"])('<div class="loader"><div class="duo duo1"><div class="dot dot-a"></div><div class="dot dot-b"></div></div><div class="duo duo2"><div class="dot dot-a"></div><div class="dot dot-b"></div></div></div><h3 class="message">Loading movie data...</h3>',2);function oe(e,t){return Object(c["q"])(),Object(c["d"])("div",ne,[ce])}const re={};re.render=oe;var ie=re,ae={class:"error-screen"},se=Object(c["h"])("h3",{class:"message"},"Unable to load movie page. We are trying to fix the problem.",-1),ue=Object(c["h"])("h5",{class:"action"},"Meanwhile, browse our other movies.",-1);function le(e,t){return Object(c["q"])(),Object(c["d"])("div",ae,[se,ue])}const de={};de.render=le;var be=de,je={class:"secondary-menu"},ve={class:"secondary-menu-list"};function me(e,t,n,o,r,i){return Object(c["q"])(),Object(c["d"])("div",je,[Object(c["h"])("ul",ve,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(r.options,(function(e,t){return Object(c["q"])(),Object(c["d"])("li",{key:t,class:["option",{active:i.isSelected(e)}],onClick:function(t){return i.selectOption(e)}},Object(c["y"])(e),11,["onClick"])})),128))])])}var he={emits:["selected-section"],data:function(){return{options:["Overview","Details","Cast"],selectedOption:"Overview"}},computed:{},methods:{selectOption:function(e){this.selectedOption=e,this.$emit("selected-section",this.selectedOption)},isSelected:function(e){return e===this.selectedOption}}};he.render=me;var fe=he,pe=(n("b0c0"),{class:"overview"}),Oe={class:"genre-list"},ge={class:"box",ref:"nu"},ye={class:"title"},we={class:"rating"},Me={class:"date"},ke={class:"title"},Se={class:""};function qe(e,t,n,o,r,i){var a=Object(c["w"])("modal");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["h"])("div",pe,[Object(c["h"])("ul",Oe,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(n.movie.genres,(function(e){return Object(c["q"])(),Object(c["d"])("li",{key:e.id,class:"genre"},Object(c["y"])(e.name),1)})),128))]),Object(c["h"])("div",ge,[Object(c["h"])("h2",ye,Object(c["y"])(n.movie.title),1),Object(c["h"])("h5",we,Object(c["y"])(n.movie.vote_average)+" / 10",1)],512),Object(c["h"])("h5",Me,"Released: "+Object(c["y"])(i.date),1),Object(c["h"])("p",{class:"plot",ref:"plot"},Object(c["y"])(n.movie.overview),513),i.isLonger?(Object(c["q"])(),Object(c["d"])("button",{key:0,class:"btn",onClick:t[1]||(t[1]=function(){return i.toggleModal&&i.toggleModal.apply(i,arguments)})},"See Full Storyline")):Object(c["e"])("",!0)]),r.isModal?(Object(c["q"])(),Object(c["d"])(a,{key:0,onCloseModal:i.toggleModal},{title:Object(c["B"])((function(){return[Object(c["h"])("h3",ke,Object(c["y"])(n.movie.title),1)]})),content:Object(c["B"])((function(){return[Object(c["h"])("p",Se,Object(c["y"])(n.movie.overview),1)]})),_:1},8,["onCloseModal"])):Object(c["e"])("",!0)],64)}var xe={class:"modal"},Ae={class:"modal-header"},Ce=Object(c["h"])("svg",{class:"close-btn",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[Object(c["h"])("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Pe={class:"content-wrapper"};function Re(e,t,n,o,r,i){return Object(c["q"])(),Object(c["d"])("div",xe,[Object(c["h"])("div",Ae,[Object(c["v"])(e.$slots,"title"),Object(c["h"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("close-modal")})},[Ce])]),Object(c["h"])("div",Pe,[Object(c["v"])(e.$slots,"content")])])}var _e={emits:["close-modal"]};_e.render=Re;var Ee=_e,ze={props:{movie:{type:Object,required:!0}},components:{Modal:Ee},emits:["open-modal"],data:function(){return{isMounted:!1,isModal:!1}},computed:{date:function(){var e=new Date(this.movie.release_date),t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=e.getFullYear(),c=e.getMonth(),o=e.getDate()+1;return"".concat(o," ").concat(t[c]," ").concat(n)},isLonger:function(){if(this.isMounted){var e=this.$refs.plot;return e.scrollHeight>e.clientHeight}}},methods:{toggleModal:function(){this.isModal=!this.isModal}},mounted:function(){this.isMounted=!0}};ze.render=qe;var De=ze,Le={class:"details"},Te={class:"category"},Be=Object(c["h"])("h6",{class:"label"},"Director(s):",-1),Ie={class:"list-container"},Ye={key:0,class:"category"},Fe=Object(c["h"])("h6",{class:"label"},"Executive Producer(s):",-1),Ne={class:"list-container",ref:"producers"},He={class:"category"},Je=Object(c["h"])("h6",{class:"label"},"Countries:",-1),$e={class:"list-container"},Ue={class:"category"},Ge=Object(c["h"])("h6",{class:"label"},"Studio(s):",-1),We={class:"list-container",ref:"studios"},Xe={class:"category"},Qe=Object(c["h"])("span",{class:"label"},"Budget:",-1),Ve={class:"list-item"},Ze={class:"title"},Ke={class:"category"},et={class:"label"},tt={class:"list-container"};function nt(e,t,n,o,r,i){var a=Object(c["w"])("modal");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["h"])("div",Le,[Object(c["h"])("div",Te,[Be,Object(c["h"])("ul",Ie,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(i.directors,(function(e,t){return Object(c["q"])(),Object(c["d"])("li",{class:"list-item",key:t},Object(c["y"])(e.name),1)})),128))])]),i.producers.length?(Object(c["q"])(),Object(c["d"])("div",Ye,[Fe,Object(c["h"])("ul",Ne,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(i.producers,(function(e,t){return Object(c["q"])(),Object(c["d"])("li",{class:"list-item",key:t,ref:"producers"+t},Object(c["y"])(e.name),513)})),128))],512),i.isProducersLong?(Object(c["q"])(),Object(c["d"])("button",{key:0,class:"open-modal-btn",onClick:t[1]||(t[1]=function(e){return i.toggleModal(i.producers,"Executive Producers")}),style:i.producersPosition},"more",4)):Object(c["e"])("",!0)])):Object(c["e"])("",!0),Object(c["h"])("div",He,[Je,Object(c["h"])("ul",$e,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(n.movie.production_countries,(function(e,t){return Object(c["q"])(),Object(c["d"])("li",{class:"list-item",key:t},Object(c["y"])(e.name),1)})),128))])]),Object(c["h"])("div",Ue,[Ge,Object(c["h"])("ul",We,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(n.movie.production_companies,(function(e,t){return Object(c["q"])(),Object(c["d"])("li",{class:"list-item",key:t,ref:"studio"+t},Object(c["y"])(e.name),513)})),128))],512),i.isStudiosLong?(Object(c["q"])(),Object(c["d"])("button",{key:0,class:"open-modal-btn",onClick:t[2]||(t[2]=function(e){return i.toggleModal(n.movie.production_companies,"Studios")}),style:i.studioPosition},"more",4)):Object(c["e"])("",!0)]),Object(c["h"])("div",Xe,[Qe,Object(c["h"])("span",Ve,Object(c["y"])(i.budget),1)])]),r.isModal?(Object(c["q"])(),Object(c["d"])(a,{key:0,onCloseModal:i.toggleModal},{title:Object(c["B"])((function(){return[Object(c["h"])("h3",Ze,Object(c["y"])(n.movie.title),1)]})),content:Object(c["B"])((function(){return[Object(c["h"])("div",Ke,[Object(c["h"])("h6",et,Object(c["y"])(r.modalTitle),1),Object(c["h"])("ul",tt,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(e.infoToShow,(function(e,t){return Object(c["q"])(),Object(c["d"])("li",{class:"list-item",key:t},Object(c["y"])(e.name),1)})),128))])])]})),_:1},8,["onCloseModal"])):Object(c["e"])("",!0)],64)}n("4de4");var ct={props:{movie:{type:Object,required:!0}},components:{Modal:Ee},data:function(){return{isMounted:!1,isModal:!1,modalInfo:null,modalTitle:null}},computed:{directors:function(){return this.movie.crew.filter((function(e){return"Director"===e.job}))},producers:function(){var e=this.movie.crew.filter((function(e){return"Executive Producer"===e.job}));return e},budget:function(){var e=this.movie.budget;return e?"$".concat(e.toLocaleString("en-US")):"undisclosed"},isProducersLong:function(){if(this.isMounted){var e=this.$refs.producers;return e.scrollHeight>e.clientHeight}},isStudiosLong:function(){if(this.isMounted){var e=this.$refs.studios;return e.scrollHeight>e.clientHeight}},studioPosition:function(){var e=this.$refs.studio2.clientWidth+128;return"left: ".concat(e,"px")},producersPosition:function(){var e=this.$refs.producers2.clientWidth+128;return"left: ".concat(e,"px")}},methods:{toggleModal:function(e,t){this.isModal=!this.isModal,this.infoToShow=e,this.modalTitle=t}},mounted:function(){this.isMounted=!0}};ct.render=nt;var ot=ct,rt={class:"cast-minified"},it={class:"cast-minified-list"},at={class:"actor-name"},st={class:"cast"},ut={class:"actor-name"},lt={class:"title"},dt={class:"actor-list"},bt={class:"actor-name"};function jt(e,t,n,o,r,i){var a=Object(c["w"])("modal");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["h"])("div",rt,[Object(c["h"])("div",it,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(i.shortCastList,(function(e,t){return Object(c["q"])(),Object(c["d"])("div",{class:"actor",key:t},[Object(c["h"])("img",{class:"actor-img",src:i.actorImage(e),alt:"actor image"},null,8,["src"]),Object(c["h"])("h5",at,Object(c["y"])(e.name),1)])})),128))]),Object(c["h"])("button",{class:"btn",onClick:t[1]||(t[1]=function(){return i.toggleModal&&i.toggleModal.apply(i,arguments)})},"Show entire cast")]),Object(c["h"])("div",st,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(n.movie.cast,(function(e,t){return Object(c["q"])(),Object(c["d"])("div",{class:"actor",key:t},[Object(c["h"])("img",{class:"actor-img",src:i.actorImage(e),alt:"actor image"},null,8,["src"]),Object(c["h"])("h5",ut,Object(c["y"])(e.name),1)])})),128))]),r.isModal?(Object(c["q"])(),Object(c["d"])(a,{key:0,onCloseModal:i.toggleModal},{title:Object(c["B"])((function(){return[Object(c["h"])("h3",lt,Object(c["y"])(n.movie.title),1)]})),content:Object(c["B"])((function(){return[Object(c["h"])("div",dt,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(n.movie.cast,(function(e,t){return Object(c["q"])(),Object(c["d"])("div",{class:"actor",key:t},[Object(c["h"])("img",{class:"actor-img",src:i.actorImage(e),alt:"actor image"},null,8,["src"]),Object(c["h"])("h5",bt,Object(c["y"])(e.name),1)])})),128))])]})),_:1},8,["onCloseModal"])):Object(c["e"])("",!0)],64)}n("fb6a");var vt={props:{movie:{type:Object,required:!0}},components:{Modal:Ee},data:function(){return{isModal:!1,defaultActorImg:n("d9b6")}},computed:{shortCastList:function(){return this.movie.cast.slice(0,8)},isTooLong:function(){return this.movie.cast.length>8}},methods:{actorImage:function(e){var t=e.profile_path;return t?"https://image.tmdb.org/t/p/w45/".concat(e.profile_path):this.defaultActorImg},toggleModal:function(){this.isModal=!this.isModal}}};vt.render=jt;var mt=vt,ht={class:"similar-movies-list"};function ft(e,t,n,o,r,i){var a=Object(c["w"])("mini-preview");return Object(c["q"])(),Object(c["d"])("div",ht,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(n.movies,(function(e,t){return Object(c["q"])(),Object(c["d"])(a,{key:t,movie:e,activeMovie:r.activeMovie,onSetMovie:i.setActiveMovie},null,8,["movie","activeMovie","onSetMovie"])})),128))])}var pt={class:"movie-small-prev"},Ot={key:0,class:"preview"},gt={class:"preview-date"},yt={class:"preview-summary"};function wt(e,t,n,o,r,i){return Object(c["q"])(),Object(c["d"])("div",pt,[Object(c["h"])("img",{class:"poster",src:"https://image.tmdb.org/t/p/w92/".concat(n.movie.poster_path),alt:"movie poster",onClick:t[1]||(t[1]=function(){return i.toggleCard&&i.toggleCard.apply(i,arguments)})},null,8,["src"]),r.isCardOpen&&i.isMovieActive?(Object(c["q"])(),Object(c["d"])("div",Ot,[Object(c["h"])("h3",{class:"preview-title",title:"go to movie",onClick:t[2]||(t[2]=function(){return i.routeToMovie&&i.routeToMovie.apply(i,arguments)})},Object(c["y"])(n.movie.title),1),Object(c["h"])("h6",gt,Object(c["y"])(i.movieYear),1),Object(c["h"])("p",yt,Object(c["y"])(n.movie.overview),1)])):Object(c["e"])("",!0)])}n("a9e3");var Mt={props:{movie:{type:Object,required:!0},activeMovie:{type:Number}},data:function(){return{isCardOpen:!1}},computed:{isMovieActive:function(){return this.activeMovie===this.movie.id},movieYear:function(){var e=new Date(this.movie.release_date);return e.getFullYear()}},methods:{toggleCard:function(){this.$emit("set-movie",this.movie.id),this.isCardOpen=!this.isCardOpen},routeToMovie:function(){this.$router.push("/movie/".concat(this.movie.id))}}};Mt.render=wt;var kt=Mt,St={props:{movies:{type:Array,required:!1}},components:{MiniPreview:kt},data:function(){return{activeMovie:null}},methods:{setActiveMovie:function(e){this.activeMovie=e}},beforeUnmount:function(){this.activeMovie=null}};St.render=ft;var qt=St,xt={data:function(){return{activeSection:"Overview",modal:!1,slotToShow:null}},components:{LoadingData:ie,ErrorLoading:be,SecondaryMenu:fe,MovieOverview:De,MovieDetails:ot,MovieCast:mt,SimilarMovies:qt},computed:Object(k["a"])(Object(k["a"])({},Object(U["b"])({apiStatus:function(e){return e.apiStatus},movie:function(e){return e.selectedMovie}})),{},{movieBackdrop:function(){return"linear-gradient(90deg, black, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3), transparent), url(https://image.tmdb.org/t/p/w780".concat(this.movie.backdrop_path,")")},routeId:function(){return this.$route.params.id}}),methods:{fetchMovie:function(){this.$store.dispatch("getSelectedMovie",this.routeId)},sectionToShow:function(e){this.activeSection=e},resetPage:function(){this.activeSection="Overview",this.modal=!1,this.slotToShow=null}},created:function(){this.fetchMovie()},watch:{routeId:function(e,t){e!==t&&(this.fetchMovie(),this.resetPage())}}};xt.render=te;var At=xt,Ct=[{path:"/",name:"Home",component:W},{path:"/movie/:id",name:"Movie-Page",component:At},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Pt=Object(g["a"])({history:Object(g["b"])("/cinematik/"),routes:Ct}),Rt=Pt,_t=(n("96cf"),n("1da1")),Et=(n("c975"),n("3ca3"),n("ddb0"),n("2909")),zt="09aea31936b202e2cabbd8bf40f0bb15",Dt="https://api.themoviedb.org/3/movie";function Lt(e){return Tt.apply(this,arguments)}function Tt(){return Tt=Object(_t["a"])(regeneratorRuntime.mark((function e(t){var n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(zt,"&language=en-US&page=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c.results);case 7:case"end":return e.stop()}}),e)}))),Tt.apply(this,arguments)}function Bt(){return It.apply(this,arguments)}function It(){return It=Object(_t["a"])(regeneratorRuntime.mark((function e(){var t,n,c,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=[],n=0;case 2:if(!(n<90)){e.next=12;break}return c=Date.now()-864e5*n,o=Nt(c),e.next=7,Yt(o);case 7:r=e.sent,t.unshift(r);case 9:n++,e.next=2;break;case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}}),e)}))),It.apply(this,arguments)}function Yt(e){return Ft.apply(this,arguments)}function Ft(){return Ft=Object(_t["a"])(regeneratorRuntime.mark((function e(t){var n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat(zt,"&primary_release_date.gte=").concat(t,"&primary_release_date.lte=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",{date:t,count:c.total_results});case 7:case"end":return e.stop()}}),e)}))),Ft.apply(this,arguments)}function Nt(e){var t=new Date(e).toISOString(),n=t.indexOf("T"),c=t.slice(0,n);return c}function Ht(e){return Jt.apply(this,arguments)}function Jt(){return Jt=Object(_t["a"])(regeneratorRuntime.mark((function e(t){var n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([Gt(t),$t(t),Xt(t)]);case 3:return n=e.sent,c=Object(k["a"])(Object(k["a"])({},n[0]),{},{cast:Object(Et["a"])(n[1].cast),crew:Object(Et["a"])(n[1].crew),similarMovies:Object(Et["a"])(n[2].results)}),e.abrupt("return",c);case 8:e.prev=8,e.t0=e["catch"](0),console.log("unable to reach server",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),Jt.apply(this,arguments)}function $t(e){return Ut.apply(this,arguments)}function Ut(){return Ut=Object(_t["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Dt,"/").concat(t,"/credits?api_key=").concat(zt,"&language=en-US"));case 2:if(n=e.sent,n.ok){e.next=5;break}throw new Error("network request failed");case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)}))),Ut.apply(this,arguments)}function Gt(e){return Wt.apply(this,arguments)}function Wt(){return Wt=Object(_t["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Dt,"/").concat(t,"?api_key=").concat(zt,"&language=en-US"));case 2:if(n=e.sent,n.ok){e.next=5;break}throw new Error("network request failed");case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)}))),Wt.apply(this,arguments)}function Xt(e){return Qt.apply(this,arguments)}function Qt(){return Qt=Object(_t["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Dt,"/").concat(t,"}/similar?api_key=").concat(zt,"&language=en-US&page=1"));case 2:if(n=e.sent,n.ok){e.next=5;break}throw new Error("network request failed");case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)}))),Qt.apply(this,arguments)}var Vt={getPopularMovies:Lt,getSelectedMovie:Ht,getLatestMovies:Bt},Zt=Object(U["a"])({state:{moviesToShow:[],selectedMovie:null,movieStatistics:null,apiStatus:{inProgress:!1,success:!1,error:!1},page:0},mutations:{setMovies:function(e,t){var n=e.moviesToShow.concat(t);e.moviesToShow=n},setSelectedMovie:function(e,t){e.selectedMovie=t},HANDLE_API_ERROR:function(e){e.apiStatus.inProgress=!1,e.apiStatus.success=!1,e.apiStatus.error=!0},HANDLE_API_SUCCESS:function(e){e.apiStatus.inProgress=!1,e.apiStatus.success=!0,e.apiStatus.error=!1},HANDLE_API_IN_PROGRESS:function(e){e.apiStatus.inProgress=!0,e.apiStatus.success=!1,e.apiStatus.error=!1},setMovieStats:function(e,t){e.movieStatistics=t},increasePageCount:function(e){e.page++}},actions:{getMovieStatistics:function(e){return Object(_t["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Vt.getLatestMovies();case 3:c=t.sent,n("setMovieStats",c);case 5:case"end":return t.stop()}}),t)})))()},getPopularMovies:function(e){return Object(_t["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit("HANDLE_API_IN_PROGRESS"),e.commit("increasePageCount"),n=e.state.page,t.next=5,Vt.getPopularMovies(n);case 5:c=t.sent,e.commit("setMovies",c);case 7:case"end":return t.stop()}}),t)})))()},getSelectedMovie:function(e,t){return Object(_t["a"])(regeneratorRuntime.mark((function n(){var c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=e.commit,c("HANDLE_API_IN_PROGRESS"),n.next=4,Vt.getSelectedMovie(t);case 4:o=n.sent,o?(c("setSelectedMovie",o),c("HANDLE_API_SUCCESS")):c("HANDLE_API_ERROR");case 6:case"end":return n.stop()}}),n)})))()}},getters:{getMovies:function(e){return e.moviesToShow}}});n("5298");Object(c["c"])(O).use(Zt).use(Rt).mount("#app")},d9b6:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACVklEQVR4nO3avWoVQRiH8d9RkSiIVolaiE1QsZGgF2BjK5YiiqAgViKGXIGWam4iih+9jeglxEJQYpmcoEFBExvzYSz2bCIxiSd7ZmazOg/8mwP7nnlml5ndd5dMJpPJZDKZTCaTyWQymcz/Raum/xzCcfR3fpvBO4xjuYYxJeEgRtFWSK6XNh5ioKYxRqGFEXy3sfjazGFYPVdoUPrwWPfia/OoU6ORtDCmunyZZxp6JYzoXb7MncRj75l+zAo3AXOKRbQxjAonX+ZBUoMe2IFp4SegrSFrwWnh5csMhR7sjtAFcSxCzWi1Y0zAoQg1Sw6HLhhjApYj1IxWO8YETEeoWdIOXTDGBExEqJmidjBamBR+B5gSYRuMtQY8j1D3ibjrS1Bi3Ao3rkcwLNwE3E489iCEehx+qiG3wOvRp2hqVJUf0+CGSElL8Tw/p3vxWcVl39gzvx4DikfaKRuLT+K+1W5xdOpqi59StMXLJsdHvMcbDdrqMpl/gNRrQB9OYhAHsL/z+zd8xQe8xY/E44pGC2dwT7HALfj7FrigeEd4V9Fea+RWuBtXFGez1zvBCdzCnqQGFWnhks1fgFbNFC6mU9k6R/FaePG1eYUjiZy65iw+iS9f5jPOJTHrghtYlE6+zCKuJ/DblGtYkl6+zE/cjG65ARc6A6hLvswSzkd2/YNBxY1L3fJlZnEiqvFv7LT6MdN2yjh2RfRe4XINct3makTvFV7UJNdNXkb0XmGmJrlu8mWrMlVejOyrcEwq9m71gCoTMIr5CsfFZl6DPqPJZLYJvwDw7redBvDtywAAAABJRU5ErkJggg=="},e407:function(e,t,n){"use strict";n("482e")}});
//# sourceMappingURL=app.9da6f36d.js.map