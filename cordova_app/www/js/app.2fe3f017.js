(function(t){function e(e){for(var a,r,s=e[0],c=e[1],l=e[2],f=0,d=[];f<s.length;f++)r=s[f],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),i=n.n(a);i.a},"3db4":function(t,e,n){},"3f9c":function(t,e,n){},"49f8":function(t,e,n){var a={"./en.json":"edd4","./fr.json":"f693"};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=o,t.exports=i,i.id="49f8"},"56d7":function(t,e,n){"use strict";n.r(e);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("5df3"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var a=n("2b0e"),i=n("ce5b"),o=n.n(i),r=(n("5363"),n("bf40"),n("d5e8"),n("d1e7"),new o.a({icons:{iconfont:"mdi"}}));a["default"].use(o.a,r);var s=r,c=n("8758"),l=n.n(c);a["default"].use(l.a);var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"main-nav"},[n("div",{staticClass:"logo"},[t._v("\n      my.company\n    ")]),n("Burger")],1),n("Sidebar",[n("ul",{staticClass:"sidebar-panel-nav"},[n("li",[n("a",{attrs:{href:"#home"}},[t._v("Home")])]),n("li",[n("a",{attrs:{href:"#about"}},[t._v("About")])]),n("li",[n("a",{attrs:{href:"#contact"}},[t._v("Contact")])])])]),n("keep-alive",[t.$route.meta.keepAlive?n("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():n("router-view")],1)},f=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{active:t.isBurgerActive},attrs:{id:"burger"},on:{click:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("default",[t._m(0)])],2)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"burger-button",attrs:{type:"button",title:"Menu"}},[n("span",{staticClass:"hidden"},[t._v("Toggle menu")]),n("span",{staticClass:"burger-bar burger-bar--1"}),n("span",{staticClass:"burger-bar burger-bar--2"}),n("span",{staticClass:"burger-bar burger-bar--3"})])}],m=a["default"].observable({isNavOpen:!1}),v={setIsNavOpen:function(t){m.isNavOpen=t},toggleNav:function(){m.isNavOpen=!m.isNavOpen}},h={computed:{isBurgerActive:function(){return m.isNavOpen}},methods:{toggle:function(){v.toggleNav()}}},g=h,b=(n("a959"),n("2877")),_=Object(b["a"])(g,d,p,!1,null,null,null),y=_.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[t.isPanelOpen?n("div",{staticClass:"sidebar-backdrop",on:{click:t.closeSidebarPanel}}):t._e(),n("transition",{attrs:{name:"slide"}},[t.isPanelOpen?n("div",{staticClass:"sidebar-panel"},[t._t("default")],2):t._e()])],1)},O=[],x={methods:{closeSidebarPanel:v.toggleNav},computed:{isPanelOpen:function(){return m.isNavOpen}}},S=x,C=(n("fe22"),Object(b["a"])(S,w,O,!1,null,null,null)),T=C.exports,k={name:"App",components:{Burger:y,Sidebar:T},provide:function(){return{reload:this.reload}},data:function(){return{isRouterAlive:!0}},methods:{reload:function(){this.isRouterAlive=!1,this.$nextTick((function(){this.isRouterAlive=!0}))}}},P=k,$=(n("034f"),Object(b["a"])(P,u,f,!1,null,null,null)),E=$.exports,N=n("8c4f"),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.categories,(function(e){return n("div",{key:e,staticClass:"category",attrs:{label:e.name}},t._l(t.categories.subcategories,(function(e){return n("div",{key:e,staticClass:"subcategory"},[t._v("\n      "+t._s(e.name)+"\n    ")])})),0)})),0)},L=[],j={data:function(){return{categories:[{name:"Brewed Coffee",subcategories:[{name:"all"},{name:"food"},{name:"food"},{name:"food"}]},{name:"Espresso",subcategories:[{name:"all"},{name:"Espresso"},{name:"Macchiato"},{name:"Con panna"},{name:"Cafe latte"},{name:"Cappuccino"}]},{name:"Teas & Sweet Drinks",subcategories:[{name:"all"},{name:"Hot tea"},{name:"Iced tea"},{name:"Chai"},{name:"Hot Chocolate"},{name:"Lemonade"}]},{name:"Iced Specialty Drinks",subcategories:[{name:"all"},{name:"Caramel"},{name:"Coffee jelly"},{name:"Cookies & cream"},{name:"Hazelnut mocha"},{name:"Ca"}]},{name:"Hot Specialty Drinks",subcategories:[{name:"all"},{name:"food"},{name:"food"},{name:"food"},{name:"food"}]}]}},mounted:function(){console.log("home ran")},methods:{}},D=j,I=Object(b["a"])(D,A,L,!1,null,"243d975e",null),H=I.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"text-center":""}},[n("v-btn",{on:{click:t.doVibrate}},[t._v(t._s(t.$t("startVibration")))])],1)},B=[],J={name:"vibration",methods:{doVibrate:function(){navigator.vibrate?navigator.vibrate([100,30,100,30,100,200,200,30,200,30,200,200,100,30,100,30,100]):this.$vuetifyMessageDialog.open("Attention","[cordova-plugin-vibration] Is required to use this function","Ok","red")}}},M=J,U=Object(b["a"])(M,V,B,!1,null,null,null),F=U.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"text-center":""}},[n("v-btn",{on:{click:t.toggle}},[t._v(t._s(t.btnTitle))])],1)},z=[],q={name:"flash",mounted:function(){this.setBtnTitle()},beforeDestroy:function(){this.switchOff()},data:function(){return{btnTitle:""}},methods:{pluginInstalled:function(){return"undefined"!==typeof plugins&&"undefined"!==typeof window.plugins.flashlight},toggle:function(){this.pluginInstalled()&&window.plugins.flashlight.toggle(this.setBtnTitle)},switchOff:function(){this.pluginInstalled()&&window.plugins.flashlight.switchOff()},setBtnTitle:function(){this.pluginInstalled()?window.plugins.flashlight.isSwitchedOn()?this.btnTitle=this.$t("flashlight.stop"):this.btnTitle=this.$t("flashlight.start"):this.btnTitle=this.$t("flashlight.notAvailable")}}},G=q,K=Object(b["a"])(G,R,z,!1,null,"283dc1b2",null),Y=K.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"text-center":""}},[""!==t.imagePath?n("img",{attrs:{src:t.imagePath}}):t._e(),n("v-btn",{on:{click:t.takePicture}},[t._v(t._s(t.$t("takePhoto")))])],1)},W=[],X=function(t,e){navigator.notification?navigator.notification.alert(t,(function(){}),e,"Ok"):alert(t)},Z={name:"camera",data:function(){return{imagePath:""}},methods:{takePicture:function(){navigator.camera?navigator.camera.getPicture(this.setPicture,this.error,{}):this.error()},setPicture:function(t){this.imagePath=t},error:function(){X(this.$t("error"))}}},tt=Z,et=(n("d303"),Object(b["a"])(tt,Q,W,!1,null,"d05e9524",null)),nt=et.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"text-center":""}},[t.compatible?n("span",[t._v("\n      "+t._s(t.$t("nfcText.waitingTag"))+"\n      "),n("br"),n("v-dialog",{attrs:{scrollable:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({},a),[t._v(t._s(t.$t("nfcText.history")))])]}}],null,!1,3409031739),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[t._v(t._s(t.$t("nfcText.history")))]),n("v-divider"),n("v-card-text",{staticStyle:{height:"300px"}},[t._l(t.items,(function(e){return n("v-list-item",{key:e},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e)}})],1)],1)})),0===t.items.length?n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-center",domProps:{textContent:t._s(t.$t("nfcText.noHistory"))}})],1)],1):t._e()],2)],1)],1)],1):t.nfc_disabled?n("v-btn",{on:{click:t.showSettings}},[t._v(t._s(t.$t("nfcText.showSettings")))]):n("span",[t._v(t._s(t.$t("nfcText.notAvailable")))])],1)},it=[],ot={name:"nfc",data:function(){return{compatible:!0,nfc_disabled:!1,dialog:!1,items:JSON.parse(localStorage.getItem("scanHistory")||"[]")}},watch:{items:function(t){localStorage.setItem("scanHistory",JSON.stringify(t))}},mounted:function(){this.registerTagEvent()},beforeDestroy:function(){this.unregisterTagEvent()},methods:{registerTagEvent:function(){document.removeEventListener("resume",this.registerTagEvent,!1),"undefined"!==typeof nfc?nfc.addTagDiscoveredListener(this.displayTagId,this.success,this.error):this.error()},unregisterTagEvent:function(){"undefined"!==typeof nfc&&nfc.removeTagDiscoveredListener(this.displayTagId)},displayTagId:function(t){var e=t.tag,n=nfc.bytesToHexString(e.id);this.items.push(n),X(this.$t("nfcText.tagSerial")+" : "+n)},error:function(t){"NFC_DISABLED"===t?(this.compatible=!1,this.nfc_disabled=!0):(this.nfc_disabled=!1,this.compatible=!1)},success:function(){this.compatible=!0,this.nfc_disabled=!1},showSettings:function(){nfc.showSettings(),document.addEventListener("resume",this.registerTagEvent,!1)}}},rt=ot,st=Object(b["a"])(rt,at,it,!1,null,null,null),ct=st.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("div",{attrs:{id:"map"}}),t.isLoading?n("loader"):t._e()],1)},ut=[],ft=(n("6cc5"),n("e11e")),dt=n.n(ft),pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{value:"true",persistent:"","max-width":"200"}},[n("v-card",[n("v-card-text",{staticClass:"text-center pa-10"},[n("v-progress-circular",{staticClass:"primary--text",attrs:{size:70,indeterminate:""}})],1)],1)],1)},mt=[],vt={name:"loading"},ht=vt,gt=Object(b["a"])(ht,pt,mt,!1,null,null,null),bt=gt.exports;delete dt.a.Icon.Default.prototype._getIconUrl,dt.a.Icon.Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")});var _t={name:"localisation",components:{Loader:bt},data:function(){return{isLoading:!0}},mounted:function(){this.map=dt.a.map("map").setView([47.47121,-.55198],5),dt.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(this.map),this.getUserLocation()},beforeDestroy:function(){void 0!==this.map&&this.map.remove()},methods:{stopLoading:function(){this.isLoading=!1},getUserLocation:function(){var t=this;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){var n=[e.coords.latitude,e.coords.longitude];dt.a.marker(n).addTo(t.map),t.map.setView(n,18),t.stopLoading()}),(function(){t.stopLoading(),X(t.$t("positionNotAvailable",t.$t("localisation")))})):(X(this.$t("positionNotAvailable",this.$t("localisation"))),this.stopLoading())}}},yt=_t,wt=(n("9c2a"),Object(b["a"])(yt,lt,ut,!1,null,"7dcd942a",null)),Ot=wt.exports;a["default"].use(N["a"]);var xt=new N["a"]({routes:[{path:"/",name:"Home",component:H,meta:{KeepAlive:!0}},{path:"/vibration",name:"Vibration",component:F},{path:"/flash",name:"Flash",component:Y},{path:"/camera",name:"Camera",component:nt},{path:"/nfc",name:"Nfc",component:ct},{path:"/localisation",name:"Localisation",component:Ot}]}),St=n("a925");function Ct(){var t=n("49f8"),e={};return t.keys().forEach((function(n){var a=n.match(/([a-z0-9]+)\./i);if(a&&a.length>1){var i=a[1];e[i]=t(n)}})),e}a["default"].use(St["a"]);var Tt=new St["a"]({locale:"fr",fallbackLocale:"en",messages:Ct()}),kt=n("0086"),Pt=n.n(kt);n("927c"),a["default"].use(Pt.a,{disableClick:!0,tapTolerance:5}),a["default"].config.productionTip=!1;var $t=function(){new a["default"]({el:"#app",vuetify:s,router:xt,i18n:Tt,render:function(t){return t(E)}}).$mount("#app")};document.addEventListener("deviceready",(function(){console.log("Ready, Render the App"),$t()}));var Et="undefined"!==typeof window.cordova;Et||document.dispatchEvent(new CustomEvent("deviceready",{}))},"64a9":function(t,e,n){},7734:function(t,e,n){},"927c":function(t,e,n){},"9c2a":function(t,e,n){"use strict";var a=n("3f9c"),i=n.n(a);i.a},a5af:function(t,e,n){},a959:function(t,e,n){"use strict";var a=n("a5af"),i=n.n(a);i.a},d303:function(t,e,n){"use strict";var a=n("3db4"),i=n.n(a);i.a},edd4:function(t){t.exports=JSON.parse('{"title":"VueJS Cordova Sample","showSample":"Show code samples","drawer":{"home":"Home","vibration":"Vibration","camera":"Camera","flash":"Flash","localisation":"Localisation","nfc":"Nfc"},"see_on_github":"See On Github","getPosition":"Obtaining Position","positionNotAvailable":"Can’t get your position","startVibration":"Start vibration","flashlight":{"start":"Start flashlight","stop":"Stop flashlight","notAvailable":"Plugin not installed"},"nfcText":{"waitingTag":"Scan a tag…","tagSerial":"Serial number","notAvailable":"Your mobile is not compatible.","showSettings":"Enable NFC","history":"History","noHistory":"Empty"},"takePhoto":"Take a picture","error":"Not available"}')},f693:function(t){t.exports=JSON.parse('{"title":"Exemples VueJS + Cordova","showSample":"Afficher les examples","drawer":{"home":"Accueil","vibration":"Vibreur","camera":"Camera","flash":"Flash","localisation":"Localisation","nfc":"Nfc"},"see_on_github":"Voir sur Github","getPosition":"Localisation en cours","positionNotAvailable":"Localisation impossible","startVibration":"Démarrer la vibration","flashlight":{"start":"Allumer la lampe torche","stop":"Éteindre la lampe torche","notAvailable":"Plugin Cordova non installé"},"nfcText":{"waitingTag":"En attente d’un tag…","tagSerial":"Numéro de série","notAvailable":"Votre mobile est incompatible.","showSettings":"Activer le NFC","history":"Historique","noHistory":"Aucun historique"},"takePhoto":"Prendre une photo","error":"Non disponible"}')},fe22:function(t,e,n){"use strict";var a=n("7734"),i=n.n(a);i.a}});
//# sourceMappingURL=app.2fe3f017.js.map