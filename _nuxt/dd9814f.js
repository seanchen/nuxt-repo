(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{469:function(t,e,r){var content=r(620);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("20f13a74",content,!0,{sourceMap:!1})},617:function(t,e){},619:function(t,e,r){"use strict";var n=r(469);r.n(n).a},620:function(t,e,r){(e=r(11)(!1)).push([t.i,"",""]),t.exports=e},738:function(t,e,r){"use strict";r.r(e);r(419);var n=r(617),o=r.n(n),c=r(618),d={auth:!1,layout:"vuetify",data:function(){return{pageHead:"COVID-19 Global Cases",dataTableHead:"Cases breakdown by countries",total:{confirmed:0,death:0,recovered:0,new_confirmed:0,new_death:0,new_recovered:0},perPage:15,sortBy:["confirmed"],cases:[],lastUpdated:null,headers:o.a.getHeaders(),currentTime:new Date,numFormater:new Intl.NumberFormat("en-US"),timeFormatter:new Intl.DateTimeFormat("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1,timeZone:"GMT",timeZoneName:"short"}),timerAmount:120,timer:120,tableSearch:"",filters:[]}},created:function(){var t=this;o.a.getCases(this,0,(function(){t.confirmedCount.update(t.total.confirmed),t.deathCount.update(t.total.death),t.recoveredCount.update(t.total.recovered),setInterval((function(){return t.clockTick()}),1e3)}))},mounted:function(){this.confirmedCount=new c.a("confirmedId",this.total.confirmed),this.deathCount=new c.a("deathId",this.total.death),this.recoveredCount=new c.a("recoveredId",this.total.recovered)},methods:{reload:function(){var t=this;t.cleanData(),o.a.getCases(this,0,(function(){t.confirmedCount.update(t.total.confirmed),t.deathCount.update(t.total.death),t.recoveredCount.update(t.total.recovered),t.timer=t.timerAmount})),t.headers=o.a.getHeaders()},cleanData:function(){this.total={confirmed:0,death:0,recovered:0,new_confirmed:0,new_death:0,new_recovered:0},this.cases=[],this.lastUpdated=null,this.confirmedCount.reset(),this.deathCount.reset(),this.recoveredCount.reset(),this.timer=this.timerAmount},selectCountry:function(t){this.filters[0]={name:"country",value:t},this.reload(),this.tableSearch="",this.pageHead="COVID-19 Cases - "+t,this.dataTableHead=t+" cases by states"},clockTick:function(){this.currentTime=new Date,this.timer>0?this.timer--:this.reload()},timerFormat:function(t){return(Math.floor(t/60)+"").padStart(2,"0")+":"+(t%60+"").padStart(2,"0")},getBreadcrumbs:function(){var t=[{text:"Global Cases",disable:!1,href:"/"}];return this.filters.length>0&&t.push({text:this.filters[0].value,disable:!1}),t}}},l=(r(619),r(28)),m=r(66),v=r.n(m),h=r(763),f=r(160),_=r(356),C=r(355),w=r(421),y=r(385),x=r(382),F=r(727),k=r(141),V=r(143),I=r(383),T=r(373),S=r(410),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-xs":""}},[t.filters.length>0?r("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.getBreadcrumbs()}}):t._e(),r("h1",{staticClass:"text-center"},[t._v(t._s(t.pageHead))]),r("v-row",[r("v-col",[r("v-chip",{attrs:{label:""}},[t._v(t._s(t.timeFormatter.format(t.currentTime)))])],1),r("v-spacer"),r("v-col",[r("v-chip",{attrs:{label:""}},[t._v("Last updated:"),r("i",{staticClass:"text--primary"},[t._v(t._s(t.timeFormatter.format(t.lastUpdated)))])])],1),r("v-spacer"),r("v-col",{staticClass:"text-right"},[r("v-btn",{staticClass:"ml-2 lighten-4",attrs:{small:"",color:"teal"},on:{click:t.reload}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-reload")]),t._v("Refresh in "+t._s(t.timerFormat(t.timer)))],1)],1)],1),r("v-progress-linear",{attrs:{value:(t.timerAmount-t.timer)/t.timerAmount*100}}),r("v-row",[r("v-col",{attrs:{col:"4"}},[r("v-card",{staticClass:"mx-auto",attrs:{color:"warning",shaped:""}},[r("v-card-text",[r("div",[t._v("Confirmed")]),r("p",{staticClass:"display-2 text--primary"},[r("span",{attrs:{id:"confirmedId"}},[t._v(t._s(t.numFormater.format(t.total.confirmed)))])]),r("div",[t._v("New confimed")]),r("div",{staticClass:"display-1 white--text"},[r("span",{attrs:{id:"newConfirmedId"}},[t._v(t._s(t.numFormater.format(t.total.new_confirmed)))])])])],1)],1),r("v-col",{attrs:{col:"4"}},[r("v-card",{staticClass:"mx-auto",attrs:{color:"error",shaped:""}},[r("v-card-text",[r("div",[t._v("Deaths")]),r("p",{staticClass:"display-2 text--primary"},[r("span",{attrs:{id:"deathId"}},[t._v(t._s(t.numFormater.format(t.total.death)))])]),r("div",[t._v("New deaths")]),r("div",{staticClass:"display-1 white--text"},[r("span",{attrs:{id:"newDeathId"}},[t._v(t._s(t.numFormater.format(t.total.new_death)))])])])],1)],1),r("v-col",{attrs:{col:"4"}},[r("v-card",{staticClass:"mx-auto",attrs:{color:"success",shaped:""}},[r("v-card-text",[r("div",[t._v("Recovered")]),r("p",{staticClass:"display-2 text--primary"},[r("span",{attrs:{id:"recoveredId"}},[t._v(t._s(t.numFormater.format(t.total.recovered)))])]),r("div",[t._v("New recovered")]),r("div",{staticClass:"display-1 white--text"},[r("span",{attrs:{id:"newRecoveredId"}},[t._v(t._s(t.numFormater.format(t.total.new_recovered)))])])])],1)],1)],1),r("v-card",[r("v-card-title",[r("h3",[t._v(t._s(t.dataTableHead))]),r("v-spacer"),r("v-text-field",{attrs:{"prepend-inner-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":"",clearable:""},model:{value:t.tableSearch,callback:function(e){t.tableSearch=e},expression:"tableSearch"}})],1),r("v-card-text",[r("v-data-table",{attrs:{headers:t.headers,items:t.cases,"items-per-page":t.perPage,sortBy:t.sortBy,search:t.tableSearch,sortDesc:""},scopedSlots:t._u([{key:"item.country_region",fn:function(e){var n=e.item;return[n.facet_count>1?r("a",{on:{click:function(e){return t.selectCountry(n.country_region)}}},[t._v(t._s(n.country_region))]):r("span",[t._v(t._s(n.country_region))])]}},{key:"item.confirmed",fn:function(e){var r=e.item;return[t._v(t._s(t.numFormater.format(r.confirmed)))]}},{key:"item.new_confirmed",fn:function(e){var r=e.item;return[t._v(t._s(t.numFormater.format(r.new_confirmed)))]}},{key:"item.death",fn:function(e){var r=e.item;return[t._v(t._s(t.numFormater.format(r.death)))]}},{key:"item.new_death",fn:function(e){var r=e.item;return[t._v(t._s(t.numFormater.format(r.new_death)))]}},{key:"item.recovered",fn:function(e){var r=e.item;return[t._v(t._s(t.numFormater.format(r.recovered)))]}}])})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBreadcrumbs:h.a,VBtn:f.a,VCard:_.a,VCardText:C.c,VCardTitle:C.d,VChip:w.a,VCol:y.a,VContainer:x.a,VDataTable:F.a,VIcon:k.a,VProgressLinear:V.a,VRow:I.a,VSpacer:T.a,VTextField:S.a})}}]);