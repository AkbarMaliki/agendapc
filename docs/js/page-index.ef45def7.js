(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-index"],{9261:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticStyle:{background:"#E7ECF3","min-height":"100vh"}},[i("button",{staticClass:"btn btn-sm btn-primary rounded-circle",staticStyle:{position:"fixed",right:"10px",bottom:"50px",width:"50px",height:"50px","font-size":"21px"},attrs:{type:"button"},on:{click:function(a){t.show=!t.show}}},[t._v(" + ")]),i("br"),i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"bg-white rounded-lg shadow-lg",staticStyle:{height:"100px"}},[i("img",{staticClass:"p-3 ",staticStyle:{position:"absolute",width:"240px",right:"40px"},attrs:{src:s("9ab8"),alt:""},on:{click:function(a){return t.$router.push("/setting")}}}),i("img",{staticClass:"p-3 ",staticStyle:{position:"absolute",width:"180px",left:"40px",top:"10px"},attrs:{src:s("727d"),alt:""}}),i("p",{staticClass:"text-center font-bold text-2xl p-3 font-times font-italic"},[t._v("JADWAL AGENDA")]),i("br"),i("hr",{staticClass:"style13"})])])])]),i("br"),t.show?i("div",{staticClass:"flex-center ",staticStyle:{width:"100%",background:"white","z-index":"100"}},[i("div",{staticClass:"rounded-lg shadow-lg bg-blue-600",staticStyle:{width:"40vw",position:"absolute","z-index":"1000",background:"white",top:"4vh"}},[i("div",{staticClass:"p-4 animate__animated animate__fadeIn shadow-lg rounded-lg",staticStyle:{background:"white"}},[i("button",{staticClass:"btn btn-sm btn-danger float-right ",attrs:{type:"button"},on:{click:function(a){t.show=!1}}},[t._v("x")]),i("p",{staticClass:"text-xl font-bold font-times"},[t._v("TAMBAH AGENDA")]),i("hr",{staticClass:"style13"}),i("div",{staticClass:"sm-form"},[i("label",{attrs:{for:"title"}},[t._v("Judul Agenda")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.title,expression:"vdata.title"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"title",name:"title",placeholder:"title"},domProps:{value:t.vdata.title},on:{input:function(a){a.target.composing||t.$set(t.vdata,"title",a.target.value)}}})]),i("div",{staticClass:"sm-form"},[i("p",[t._v("Isi Agenda :")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.vdata.isi,expression:"vdata.isi"}],staticClass:"form-control md-textarea",attrs:{type:"text",id:"isi",name:"isi",rows:"2",placeholder:"isi..."},domProps:{value:t.vdata.isi},on:{input:function(a){a.target.composing||t.$set(t.vdata,"isi",a.target.value)}}})]),i("div",{staticClass:"sm-form"},[i("label",{attrs:{for:"tanggal"}},[t._v("Tanggal : ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.tanggal,expression:"vdata.tanggal"}],staticClass:"form-control form-control-sm",attrs:{type:"date",id:"tanggal",name:"tanggal",placeholder:"tanggal"},domProps:{value:t.vdata.tanggal},on:{input:function(a){a.target.composing||t.$set(t.vdata,"tanggal",a.target.value)}}})]),i("div",{staticClass:"sm-form"},[i("label",{attrs:{for:"jam"}},[t._v("Jam : ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.jam,expression:"vdata.jam"}],staticClass:"form-control form-control-sm",attrs:{type:"time",id:"jam",name:"jam",placeholder:"jam"},domProps:{value:t.vdata.jam},on:{input:function(a){a.target.composing||t.$set(t.vdata,"jam",a.target.value)}}})]),i("hr",{staticClass:"style13"}),i("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:function(a){return t.add()}}},[t._v(" ADD + ")]),i("button",{staticClass:"btn btn-sm btn-danger float-right",attrs:{type:"button"},on:{click:function(a){t.show=!1}}},[t._v(" Close ")])])])]):t._e(),t.show2?i("div",{staticClass:"flex-center ",staticStyle:{width:"100%",background:"white","z-index":"100"}},[i("div",{staticClass:"rounded-lg shadow-lg bg-blue-600",staticStyle:{width:"60vw",position:"absolute","z-index":"1000",background:"white",top:"4vh"}},[i("div",{staticClass:"p-4 animate__animated animate__fadeIn shadow-lg rounded-lg",staticStyle:{background:"white"}},[i("button",{staticClass:"btn btn-sm btn-danger float-right ",attrs:{type:"button"},on:{click:function(a){t.show2=!1}}},[t._v("x")]),i("p",{staticClass:"text-xl font-bold font-times"},[t._v("ISI AGENDA")]),i("br"),i("hr",{staticClass:"style13"}),i("tr",{},[i("td",{staticStyle:{"font-family":"times new roman","font-size":"18px"}},[t._v("Judul")]),i("td",{staticClass:"pl-2 pr-2",staticStyle:{"font-family":"times new roman","font-size":"18px"}},[t._v(" : ")]),i("td",{staticClass:"font-bold",staticStyle:{"font-family":"times new roman","font-size":"18px"}},[t._v(t._s(t.datanya.title))])]),i("tr",{},[i("td",{staticStyle:{"font-family":"times new roman","font-size":"18px"}},[t._v("Isi Agenda")]),i("td",{staticClass:"pl-2 pr-2",staticStyle:{"font-family":"times new roman","font-size":"18px"}},[t._v(" : ")]),i("td",{staticClass:"shadow-lg rounded-lg p-2",staticStyle:{"font-family":"times new roman","font-size":"18px"}},[t._v(t._s(t.datanya.isi))])]),i("tr",{},[i("td",{staticStyle:{"font-family":"times new roman","font-size":"18px"}},[t._v("Tanggal")]),i("td",{staticClass:"pl-2 pr-2",staticStyle:{"font-family":"times new roman","font-size":"18px"}},[t._v(" : ")]),i("td",{staticStyle:{"font-family":"times new roman","font-size":"18px"}},[t._v(t._s(t.format(t.datanya.tanggal)))])]),i("tr",{},[i("td",{staticStyle:{"font-family":"times new roman","font-size":"18px"}},[t._v("Jam")]),i("td",{staticClass:"pl-2 pr-2",staticStyle:{"font-family":"times new roman","font-size":"18px"}},[t._v(" : ")]),i("td",{staticStyle:{"font-family":"times new roman","font-size":"18px"}},[t._v(t._s(t.datanya.jam))])])])])]):t._e(),i("div",{staticClass:"container",staticStyle:{"z-index":"1"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-4"},[i("div",{staticClass:"bg-white rounded-lg shadow-lg p-2 text-center"},[i("h3",[t._v("AGENDA MASUK")]),i("draggable",{staticClass:"list-group",staticStyle:{"z-index":"1"},attrs:{list:t.list1,group:"people"},on:{change:t.log}},t._l(t.lists1,(function(a,s){return i("div",{key:a.title,staticClass:"list-group-item cursor-pointer hoverbg anim text-left pt-1 pl-3",staticStyle:{"z-index":"1"},on:{click:function(s){return t.showAgenda(a)}}},[i("p",{staticClass:"font-bold font-times text-md"},[t._v(" "+t._s(a.title)+" ")]),i("p",{staticClass:"text-sm font-italic"},[t._v(" "+t._s(t.format(a.tanggal))+" "),i("span",{staticClass:"float-right"},[t._v(t._s(a.jam))])])])})),0)],1)]),i("div",{staticClass:"col-4"},[i("div",{staticClass:"bg-white rounded-lg shadow-lg p-2 text-center"},[i("h3",[t._v("AGENDA AKAN DATANG")]),i("draggable",{staticClass:"list-group",staticStyle:{"z-index":"1"},attrs:{list:t.list2,group:"people"},on:{change:t.log}},t._l(t.lists2,(function(a,s){return i("div",{key:a.title,staticClass:"list-group-item cursor-pointer hoverbg anim text-left pt-1 pl-3",staticStyle:{"z-index":"1"},on:{click:function(s){return t.showAgenda(a)}}},[i("p",{staticClass:"font-bold font-times text-md"},[t._v(" "+t._s(a.title)+" ")]),i("p",{staticClass:"text-sm font-italic"},[t._v(" "+t._s(t.format(a.tanggal))+" "),i("span",{staticClass:"float-right"},[t._v(t._s(a.jam))])])])})),0)],1)]),i("div",{staticClass:"col-4"},[i("div",{staticClass:"bg-white rounded-lg shadow-lg p-2 text-center"},[i("h3",[t._v("AGENDA KELUAR")]),i("draggable",{staticClass:"list-group",staticStyle:{"z-index":"1"},attrs:{list:t.list3,group:"people"},on:{change:t.log}},t._l(t.lists3,(function(a,s){return i("div",{key:a.title,staticClass:"bg-red-400 list-group-item cursor-pointer hoverbg anim text-left pt-1 pl-3",staticStyle:{"z-index":"1"}},[i("span",{staticClass:"float-right font-bold font-italic hoverred",on:{click:function(i){return t.hapus(a.id,s)}}},[t._v("Delete")]),i("p",{staticClass:"font-bold font-times text-md",on:{click:function(s){return s.preventDefault(),t.showAgenda(a)}}},[t._v(" "+t._s(a.title)+" ")]),i("p",{staticClass:"text-sm font-italic",on:{click:function(s){return s.preventDefault(),t.showAgenda(a)}}},[t._v(" "+t._s(t.format(a.tanggal))+" "),i("span",{staticClass:"float-right"},[t._v(t._s(a.jam))])])])})),0)],1)]),i("rawDisplayer",{staticClass:"col-3",staticStyle:{"z-index":"1"},attrs:{value:t.list1,title:"List 1"}}),i("rawDisplayer",{staticClass:"col-3",staticStyle:{"z-index":"1"},attrs:{value:t.list2,title:"List 2"}}),i("rawDisplayer",{staticClass:"col-3",staticStyle:{"z-index":"1"},attrs:{value:t.list3,title:"List 3"}})],1)])])},e=[],n=(s("4160"),s("d81d"),s("b0c0"),s("159b"),s("ade3")),o=s("5530"),l=s("310e"),c=s.n(l),r=s("8aa5"),d=s.n(r),u=s("bc3a"),f=s.n(u),g=(s("cc98"),s("03a0")),m=d.a.firestore(),p=Object(n["a"])({name:"two-lists",display:"Two Lists",order:1,components:{draggable:c.a},data:function(){return{show:!1,show2:!1,datanya:[],vdata:{},list1:[],list2:[],list3:[]}},computed:{lists1:function(){var t=this.list1;return t=t.sort(this.sortFunction),t},lists2:function(){var t=this.list2;return t=t.sort(this.sortFunction),t},lists3:function(){var t=this.list3;return t=t.sort(this.sortFunction),t}},methods:{sortFunction:function(t,a){var s=new Date(t.tanggal).getTime(),i=new Date(a.tanggal).getTime();return s>i?1:-1}},mounted:function(){var t=this;m.collection("listagenda").onSnapshot((function(a){var s=a.docs.map((function(t){return Object(o["a"])({id:t.id},t.data())}));console.log("agenda",s),t.datanya=s;var i=[],e=[],n=[];t.datanya.forEach((function(t){1==t.status?i.push(t):2==t.status?e.push(t):3==t.status&&n.push(t)})),t.list1=i,t.list2=e,t.list3=n})),document.addEventListener("keyup",(function(a){"Escape"==a.key&&(t.show=!1,t.show2=!1)}))}},"methods",{notif:function(t){var a=this;m.collection("agendanotif").get().then((function(s){var i=s.docs.map((function(t){return Object(o["a"])({},t.data())}));console.log(i),i.forEach((function(s){var i={to:s.fcm,notification:{title:"".concat("1"==t?"AGENDA MASUK":"2"==t?"AGENDA AKAN DATANG":"AGENDA KELUAR"),body:"INFO ADA ".concat("1"==t?"AGENDA MASUK":"2"==t?"AGENDA AKAN DATANG":"AGENDA KELUAR"),param1:"test",param2:"ok",priority:10,sound:"default",ledColor:[255,255,128,16],vibrationPattern:[250,1e3,250,500]}};i=JSON.stringify(i),f.a.post("https://fcm.googleapis.com/fcm/send",i,{headers:{Authorization:"key=AAAAUBoNxhU:APA91bGmp6193yTOWq0XcUu4adMjbF4XVk2uqDy8V-1y7pT26S_Q1kVkYTSyLBsgU-B4lUyYDMykMKtuiQWlVeYIEr713d5Ty0GphyUxcGlMb1D1uKsOPZ4LujfYzke2qdnZOBYEMzdm","Content-Type":"application/json"}}).then((function(t){console.log(t),a.$forceUpdate()}))}))}))},hapus:function(t,a){console.log(t),this.show=!1,this.show2=!1,m.collection("listagenda").doc(t).delete().then((function(t){}))},esc:function(t){console.log(t)},showAgenda:function(t){this.datanya=t,this.show2=!0,this.$forceUpdate()},format:function(t){return this.$datefns.format(new Date(t),"dddd MMMM YYYY",{locale:g})},add:function(){var t=this;m.collection("listagenda").doc().set(Object(o["a"])(Object(o["a"])({},this.vdata),{},{status:1}),{merge:!0}).then((function(a){console.log("berhasil"),t.show=!1,t.vdata={},t.$forceUpdate(),t.notif("1")})).catch((function(t){console.log(t.message)}))},replace:function(){this.list=[{name:"Edgard"}]},clone:function(t){return{name:t.name+" cloned"}},log:function(t){var a=this,s=[],i=[],e=[];this.list1.forEach((function(t){s.push(t.id)})),this.list2.forEach((function(t){i.push(t.id)})),this.list3.forEach((function(t){e.push(t.id)})),console.log("id1",s),console.log("id2",i),console.log("id3",e),s.length>0&&m.collection("listagenda").doc(s[0]).set({status:1},{merge:!0}).then((function(t){console.log("berhasil"),a.notif("1")})).catch((function(t){console.log(t.message)})),i.length>0&&m.collection("listagenda").doc(i[0]).set({status:2},{merge:!0}).then((function(t){console.log("berhasil"),a.notif("2")})).catch((function(t){console.log(t.message)})),e.length>0&&m.collection("listagenda").doc(e[0]).set({status:3},{merge:!0}).then((function(t){console.log("berhasil")})).catch((function(t){console.log(t.message)}))}}),h=p,v=(s("c9c1"),s("2877")),y=Object(v["a"])(h,i,e,!1,null,null,null);a["default"]=y.exports},"956c":function(t,a,s){},c9c1:function(t,a,s){"use strict";var i=s("956c"),e=s.n(i);e.a}}]);
//# sourceMappingURL=page-index.ef45def7.js.map