(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{737:function(t,e,r){"use strict";r.r(e);r(419);var n={layout:"vuetify",name:"clocks",auth:!1,data:function(){return{currentTime:null,timeFormatter:new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}),timer:160}},methods:{updateCurrentTime:function(){this.currentTime=new Date},clockTick:function(){this.updateCurrentTime(),this.timer>0?this.timer--:this.timer=60},timerFormat:function(t){return(Math.floor(t/60)+"").padStart(2,"0")+":"+(t%60+"").padStart(2,"0")}},created:function(){var t=this;this.currentTime=new Date,setInterval((function(){return t.clockTick()}),1e3)}},c=r(28),o=r(66),l=r.n(o),m=r(356),d=r(355),v=r(385),h=r(382),f=r(383),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-md":"","text-center":""}},[r("v-row",[r("v-col",{attrs:{col:"3"}},[r("v-card",[r("v-card-text",[r("div",[t._v("Simple number clock")]),r("p",{staticClass:"display-1 text--primary"},[t._v(t._s(t.timeFormatter.format(t.currentTime)))])])],1)],1),r("v-col",{attrs:{col:"3"}},[r("v-card",[r("v-card-text",[r("div",[t._v("Simple count down")]),r("p",{staticClass:"display-1 text--primary"},[t._v(t._s(t.timerFormat(t.timer)))])])],1)],1),r("v-col",{attrs:{col:"3"}}),r("v-col",{attrs:{col:"3"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:m.a,VCardText:d.c,VCol:v.a,VContainer:h.a,VRow:f.a})}}]);