(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-test2"],{"4b97":function(t,e,n){"use strict";n("b64b"),n("96cf");var a=n("1da1");function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function c(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}var i=n("bc3a"),u=n.n(i),l=!1,p="",s="",d=(localStorage.getItem("auth._token.local"),0),f=l?"".concat(localStorage.getItem("ipserver"))+"/auto/api2.php":"".concat(localStorage.getItem("ipserver"))+"/auto/api.php",g=function(){function t(){r(this,t)}return c(t,[{key:"collection",value:function(t){return p=t,this}},{key:"doc",value:function(t){return t&&(s=t),this}},{key:"set",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n,a,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=function(t){return Object.keys(t)},n=new FormData,l&&n.append("header",localStorage.getItem("auth._token.local")),n.append("table",p),n.append("data",JSON.stringify(e)),n.append("type","set"),n.append("key",a(e)),t.next=9,u.a.post(f,n).then((function(t){return console.log(t),t.data})).catch((function(t){console.log("table not found"),d++,d<2&&r.set(e)}));case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"get",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new FormData,n.append("table",p),l&&n.append("header",localStorage.getItem("auth._token.local")),n.append("select",e),""!=s.length&&n.append("id","".concat(s)),n.append("type","get"),t.next=8,u.a.post(f,n).then((function(t){return console.log(t),t.data})).catch((function(t){console.log("table not found")}));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"delete",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new FormData,l&&n.append("header",localStorage.getItem("auth._token.local")),n.append("table",p),n.append("select",e),""!=s.length&&n.append("id","".concat(s)),n.append("type","delete"),t.next=8,u.a.post(f,n).then((function(t){return console.log(t),t.data})).catch((function(t){console.log("Data tidak ditemukan")}));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"select",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new FormData,l&&n.append("header",localStorage.getItem("auth._token.local")),n.append("table",p),n.append("select",e),""!=s.length&&n.append("id","".concat(s)),n.append("type","select"),t.next=8,u.a.post(f,n).then((function(t){return console.log(t),t.data})).catch((function(t){console.log("table not found")}));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}();e["a"]=g},"8f36":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:function(e){return t.test()}}},[t._v(" Klik! ")])])},r=[],o=(n("4160"),n("d81d"),n("159b"),n("5530")),c=n("bc3a"),i=n.n(c),u=n("8aa5"),l=n.n(u),p=n("4b97"),s=l.a.firestore(),d=(new p["a"],{data:function(){return{}},methods:{test:function(){var t=this;s.collection("agendanotif").get().then((function(e){var n=e.docs.map((function(t){return Object(o["a"])({},t.data())}));console.log(n),n.forEach((function(e){var n={to:e.fcm,notification:{title:"AGENDA MASUK",body:"Info ada agenda baru telah masuk!",param1:"test",param2:"ok",priority:10,sound:"default"}};n=JSON.stringify(n),i.a.post("https://fcm.googleapis.com/fcm/send",n,{headers:{Authorization:"key=AAAAUBoNxhU:APA91bGmp6193yTOWq0XcUu4adMjbF4XVk2uqDy8V-1y7pT26S_Q1kVkYTSyLBsgU-B4lUyYDMykMKtuiQWlVeYIEr713d5Ty0GphyUxcGlMb1D1uKsOPZ4LujfYzke2qdnZOBYEMzdm","Content-Type":"application/json"}}).then((function(e){console.log(e),t.$forceUpdate()}))}))}))}},mounted:function(){},metaInfo:function(){return{title:"Tentang TA_Maliki / Taufik Akbar Maliki",meta:[{hid:"description",name:"description",content:"Tentang Taufik akbar maliki / TA_Maliki"},{property:"og:title",content:"Tentang Taufik akbar maliki / TA_Maliki"},{property:"og:site_name",content:"TA_Maliki"},{property:"og:type",content:"website"},{property:"og:url",content:"".concat(this.$store.state.url)},{property:"og:image",content:"".concat(this.$store.state.url,"/Kino.jpg")},{property:"og:description",content:"documentasi ya"},{name:"keywords",content:"blog,portofolio,freelance"},{name:"robots",content:"index,follow"}]}}}),f=d,g=n("2877"),h=Object(g["a"])(f,a,r,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=page-test2.dcadf61f.js.map