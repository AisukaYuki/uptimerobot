(function(t){function e(e){for(var n,i,r=e[0],l=e[1],c=e[2],_=0,d=[];_<r.length;_++)i=r[_],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],n=!0,r=1;r<s.length;r++){var l=s[r];0!==o[l]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),o=s("5c96"),a=s.n(o),i=(s("0fae"),s("e05f"),s("bc3a")),r=s.n(i),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},c=[],u=(s("034f"),s("2877")),_={},d=Object(u["a"])(_,l,c,!1,null,null,null),m=d.exports,g=s("8c4f"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",{staticClass:"container-max"},[s("el-header",{staticClass:"style-header"},[s("h2",{staticClass:"title"},[s("span",{staticClass:"title-big"},[t._v(t._s(this.main_title))]),t._v("    "),s("span",{staticStyle:{"font-size":"1.7rem"},attrs:{id:"title-small"}},[t._v(t._s(this.main_title_eng))])]),s("h4",{staticClass:"title",staticStyle:{"margin-top":"10px"}},[t._v("报告生成时间："),s("span",[t._v(t._s(t.time_text))]),t._v("  "),t.json.config_auto_refresh_seconds>0?s("span",[s("i",{staticClass:"el-icon-refresh",class:{"loading-icon":t.icon_loading}}),t._v(t._s(t.counter)+"s")]):t._e()])]),s("el-main",{staticClass:"style-main"},[s("el-alert",{staticStyle:{"text-align":"left"},attrs:{title:t.alert_title,type:t.alert_type,description:t.alert_description,"show-icon":"",closable:!1,center:!1}}),s("br"),s("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.table_loading,expression:"table_loading"}],staticClass:"all-status-card",attrs:{shadow:"always"}},[s("h4",{staticClass:"card-title"},[t._v("实时总览"),s("span",{staticStyle:{"font-size":"1rem"}},[t._v(" Ontime")])]),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("div",{staticClass:"all-status-number"},[s("span",{staticClass:"bullet success-bg"}),t._v("  "),s("span",{staticClass:"status-span success-color"},[t._v("正常运转 "+t._s(t.success)+" 个")])])]),s("el-col",{attrs:{span:8}},[s("div",{staticClass:"all-status-number"},[s("span",{staticClass:"bullet danger-bg"}),t._v("  "),s("span",{staticClass:"status-span danger-color"},[t._v("发生故障 "+t._s(t.danger)+" 个")])])]),s("el-col",{attrs:{span:8}},[s("el-tooltip",{attrs:{effect:"dark",content:"由于计划性维护等正常原因而暂时暂停监控。",placement:"top-start"}},[s("div",{staticClass:"all-status-number"},[s("span",{staticClass:"bullet info-bg"}),t._v("  "),s("el-badge",{attrs:{"is-dot":"",hidden:0==t.info}},[s("span",{staticClass:"status-span info-color"},[t._v("暂停监控 "+t._s(t.info)+" 个")])])],1)])],1)],1)],1),s("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.table_loading,expression:"table_loading"}],staticClass:"all-status-card",attrs:{shadow:"always"}},[s("h4",{staticClass:"card-title"},[t._v("数据中心"),s("span",{staticStyle:{"font-size":"1rem"}},[t._v(" DataCenter")])]),s("el-table",{staticStyle:{width:"100%"},attrs:{data:this.datacenter_table}},[s("el-table-column",{attrs:{label:"状态",width:"50","min-width":"40"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{domProps:{innerHTML:t._s(e.row.status_html)}})]}}])}),s("el-table-column",{attrs:{label:"可用率",width:"90","min-width":"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("b",[s("span",{class:e.row.custom_uptime_ratio_class},[t._v(t._s(e.row.custom_uptime_ratio)+"%")])])]}}])}),s("el-table-column",{attrs:{label:"名称",width:"110","min-width":"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("b",[s("div",{domProps:{innerHTML:t._s(e.row.friendly_name)}})])]}}])}),s("el-table-column",{attrs:{label:"详细可用率（过去"+t.json.config_history_time+"天）","min-width":"670"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.custom_uptime_ranges_a,(function(e){return s("el-tooltip",{key:e.key,attrs:{effect:"dark",content:e.range,placement:"top"}},[s("span",{staticClass:"square",class:[1==e.info?"info-bg":e.range>t.json.config_success_min?"success-bg":e.range>t.json.config_warning_min?"warning-bg":"danger-bg"]})])}))}}])})],1)],1),s("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.table_loading,expression:"table_loading"}],staticClass:"all-status-card",attrs:{shadow:"always"}},[s("h4",{staticClass:"card-title"},[t._v("网站"),s("span",{staticStyle:{"font-size":"1rem"}},[t._v(" WebSite")])]),s("el-table",{staticStyle:{width:"100%"},attrs:{data:this.website_table}},[s("el-table-column",{attrs:{label:"状态",width:"50","min-width":"40"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{domProps:{innerHTML:t._s(e.row.status_html)}})]}}])}),s("el-table-column",{attrs:{label:"可用率",width:"90","min-width":"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("b",[s("span",{class:e.row.custom_uptime_ratio_class},[t._v(t._s(e.row.custom_uptime_ratio)+"%")])])]}}])}),s("el-table-column",{attrs:{label:"名称",width:"110","min-width":"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("b",[s("div",{domProps:{innerHTML:t._s(e.row.friendly_name)}})])]}}])}),s("el-table-column",{attrs:{label:"详细可用率（过去"+t.json.config_history_time+"天）","min-width":"670"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.custom_uptime_ranges_a,(function(e){return s("el-tooltip",{key:e.key,attrs:{effect:"dark",content:e.range,placement:"top",size:"large",color:"activity.color"}},[s("span",{staticClass:"square",class:[1==e.info?"info-bg":e.range>t.json.config_success_min?"success-bg":e.range>t.json.config_warning_min?"warning-bg":"danger-bg"]})])}))}}])})],1)],1),s("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.table_loading,expression:"table_loading"}]},[s("el-row",{attrs:{gutter:5}},[s("el-col",{attrs:{xs:14,sm:14,md:14,lg:14,xl:14}},[s("h4",{staticClass:"card-title"},[t._v("状态日志"),s("span",{staticStyle:{"font-size":"1rem"}},[t._v(" Logs")])])]),s("el-col",{attrs:{xs:10,sm:10,md:10,lg:10,xl:10}},[s("div",{staticStyle:{"text-align":"right","margin-top":"8px"}},[s("el-radio-group",{model:{value:t.reverse,callback:function(e){t.reverse=e},expression:"reverse"}},[s("el-radio",{attrs:{label:!0}},[t._v("倒序")]),s("el-radio",{attrs:{label:!1}},[t._v("正序")])],1)],1)])],1),s("br"),t.table_loading?s("el-empty",{attrs:{description:"加载中，请稍后..."}}):t._e(),s("el-timeline",{staticStyle:{"text-align":"left"},attrs:{reverse:t.reverse}},t._l(t.logs_list,(function(e,n){return s("el-timeline-item",{key:n,attrs:{timestamp:t.get_full_time(e.datetime),icon:t.type_to_icon(e.type),color:t.type_to_color(e.type)}},[t._v(" "+t._s(e.name)+" "+t._s(t.type_to_text(e.type))+" - 具体信息："+t._s(e.reason.code)+" - "+t._s(e.reason.detail)),1==e.type?s("span",[t._v(" - 持续 "+t._s(t.duration_to_text(e.duration)))]):t._e()])})),1)],1)],1),s("el-footer",[s("el-button",[t._v("默认按钮")])],1)],1)},p=[],h=(s("ac1f"),s("1276"),s("a9e3"),s("4e82"),s("99af"),{name:"Index",data:function(){return{main_title:"状态监控",main_title_eng:"StausLive",json:[],website_table:[],datacenter_table:[],success:0,danger:0,info:0,table_loading:!0,icon_loading:!0,time_now:0,alert_type:"info",alert_title:"请稍等",alert_description:"正在链接服务器加载数据...",time_text:"Loading...",counter:1,refresh_timer:[],logs_list:[],danger_times:0,reverse:!1}},mounted:function(){this.get_conf_json(),this.table_loading=!0},beforeUnmount:function(){clearInterval(this.refresh_timer)},methods:{get_conf_json:function(){var t=this;this.$axios.get("./conf.json").then((function(e){t.main_title=e.data.config_title,t.main_title_eng=e.data.config_title_english,t.json=e.data,t.get_status()}))},get_status:function(){var t=this;this.alert_type="info",this.alert_title="请稍等",this.alert_description="正在链接服务器加载数据...",this.icon_loading=!0;var e="";e=1==this.json.config_mode?"https://api.uptimerobot.com/v2/getMonitors":this.json.config_proxy_link;var s="";if(this.time_now=Date.parse(new Date)/1e3,s=this.time_now-86400+"_"+this.time_now,this.json.config_history_time>0)for(var n=1;n<this.json.config_history_time;n++)s=s+"-"+(this.time_now-86400*(n+1))+"_"+(this.time_now-86400*n);this.$axios.post(e,{api_key:this.json.config_readonly_apikey,format:"json",logs:1,custom_uptime_ratios:"7",custom_uptime_ranges:s,custom_down_durations:1,logs_start_date:this.time_now-86400*this.json.config_logs_history_days}).then((function(e){"ok"!=e.data.stat?(console.log("[StatusLive]UptimeRobot API有返回错误信息："),console.log(e.data),t.danger_times<3?(t.$notify.error({title:"出现异常",message:"请求参数异常，5秒后将会自动重试...",type:"danger"}),t.danger_times++,t.counter=5,t.refresh_timer=setInterval(t.countdown_function,1e3)):(t.$notify.error({title:"出现异常",message:"请求参数异常。连续三次连接服务器失败，请检查您的网络（或配置），并刷新页面重试。"}),t.icon_loading=!1)):t.refresh_status(e.data)})).catch((function(e){console.log("[StatusLive]链接UptimeRobot API时出现问题："),console.log(e),t.danger_times<3?(t.$notify.error({title:"出现异常",message:"链接服务器失败，5秒后将会自动重试...",type:"danger"}),t.danger_times++,t.counter=5,t.refresh_timer=setInterval(t.countdown_function,1e3),t.icon_loading=!1):(t.$notify.error({title:"出现异常",message:"链接服务器失败。连续三次连接服务器失败，请检查您的网络（或配置），并刷新页面重试。"}),t.icon_loading=!1)}))},refresh_status:function(t){var e=[];this.success=0,this.danger=0,this.info=0,this.website_table=[],this.datacenter_table=[];for(var s=0;s<t.monitors.length;s++){t.monitors[s].status<2?(t.monitors[s].status_html='<span class="bullet info-bg"></span>',this.info++):2==t.monitors[s].status?(t.monitors[s].status_html='<span class="bullet success-bg"></span>',this.success++):(t.monitors[s].status_html='<span class="bullet danger-bg"></span>',this.danger++),t.monitors[s].status<2?t.monitors[s].custom_uptime_ratio_class="info-color":t.monitors[s].custom_uptime_ratio<this.json.config_success_min&&2==t.monitors[s].status?t.monitors[s].custom_uptime_ratio_class="warning-color":t.monitors[s].custom_uptime_ratio<this.json.config_warning_min||t.monitors[s].status>=8?t.monitors[s].custom_uptime_ratio_class="danger-color":t.monitors[s].custom_uptime_ratio_class="success-color";var n=[];t.monitors[s].custom_uptime_ranges_a=[],n=t.monitors[s].custom_uptime_ranges.split("-");for(var o=0;o<n.length;o++)t.monitors[s].custom_uptime_ranges_a.push({key:o,range:n[o],info:this.time_now-86400*o<t.monitors[s].create_datetime?1:0});1==t.monitors[s].type?this.website_table.push(t.monitors[s]):3==t.monitors[s].type&&this.datacenter_table.push(t.monitors[s]);for(var a=[],i=0;i<t.monitors[s].logs.length;i++)a={name:t.monitors[s].friendly_name,datetime:String(t.monitors[s].logs[i].datetime),duration:t.monitors[s].logs[i].duration,reason:t.monitors[s].logs[i].reason,type:Number(t.monitors[s].logs[i].type)},e.push(a)}e.sort(this.compare("datetime")),console.log(e),this.logs_list=e,this.danger>0?(this.danger>=this.success?this.alert_type="danger":this.alert_type="warning",this.alert_title="服务异常",this.alert_description="很抱歉，当前部分服务遇到问题，我们会尽快修复。您可持续关注本页面以获取最新信息。"):(this.alert_type="success",this.alert_title="服务正常",this.alert_description="当前所有服务正常运转。您可持续关注本页面以获取最新信息。");var r=new Date(1e3*this.time_now),l=r.getFullYear()+"-",c=(r.getMonth()+1<10?"0"+(r.getMonth()+1):r.getMonth()+1)+"-",u=(r.getDate()<10?"0"+r.getDate():r.getDate())+" ",_=(r.getHours()<10?"0"+r.getHours():r.getHours())+":",d=(r.getMinutes()<10?"0"+r.getMinutes():r.getMinutes())+":",m=r.getSeconds()<10?"0"+r.getSeconds():r.getSeconds();this.time_text=l+c+u+_+d+m,this.danger_times=0,this.table_loading=!1,this.icon_loading=!1,this.counter=this.json.config_auto_refresh_seconds,this.counter>0&&(this.refresh_timer=setInterval(this.countdown_function,1e3))},countdown_function:function(){this.counter--,console.log(this.counter),0==this.counter&&(clearInterval(this.refresh_timer),this.counter=this.json.config_auto_refresh_seconds,this.get_status())},compare:function(t){return function(e,s){var n=e[t],o=s[t];return o-n}},get_full_time:function(t){var e=new Date(1e3*t),s=e.getFullYear()+"-",n=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",o=(e.getDate()<10?"0"+e.getDate():e.getDate())+" ",a=(e.getHours()<10?"0"+e.getHours():e.getHours())+":",i=(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":",r=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return s+n+o+a+i+r},type_to_icon:function(t){return t=Number(t),1==t?"el-icon-close":2==t?"el-icon-check":98==t?"el-icon-video-play":99==t?"el-icon-video-pause":"el-icon-full-screen"},type_to_color:function(t){return t=Number(t),1==t?"#F56C6C":2==t?"#67C23A":98==t||99==t?"#909399":"#303133"},type_to_text:function(t){return t=Number(t),1==t?"发生故障":2==t?"恢复正常":98==t?"开始":99==t?"开始维护（暂停监控）":"发生特情"},duration_to_text:function(t){t=Number(t);var e=t%60,s=(t-e)/60,n=(t-e-60*s)/60;return n>0?"".concat(n," 小时 ").concat(s," 分钟 ").concat(e," 秒"):" ".concat(s," 分钟 ").concat(e," 秒")}}}),b=h,v=(s("cccb"),Object(u["a"])(b,f,p,!1,null,null,null)),y=v.exports;n["default"].use(g["a"]);var w=[{path:"/",name:"Home",component:y,meta:{title:"StatusLive"}}],S=new g["a"]({routes:w}),x=S;n["default"].config.productionTip=!1,n["default"].prototype.$axios=r.a,n["default"].use(a.a),x.beforeEach((function(t,e,s){t.meta.title&&(document.title=t.meta.title),s()})),new n["default"]({router:x,render:function(t){return t(m)}}).$mount("#app")},"5ced":function(t,e,s){},"85ec":function(t,e,s){},cccb:function(t,e,s){"use strict";s("5ced")}});
//# sourceMappingURL=app.ff968104.js.map