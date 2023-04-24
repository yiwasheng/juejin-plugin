(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",i="minute",s="hour",a="day",u="week",o="month",c="quarter",l="year",d="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},_=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:_,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+_(r,2,"0")+":"+_(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,o),s=n-i<0,a=e.clone().add(r+(s?-1:1),o);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:l,w:u,d:a,D:d,h:s,m:i,s:r,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",w={};w[y]=p;var $=function(t){return t instanceof D},v=function t(e,n,r){var i;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();w[s]&&(i=s),n&&(w[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=e.name;w[u]=e,i=u}return!r&&i&&(y=i),i||!r&&y},M=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},Y=g;Y.l=v,Y.i=$,Y.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function p(t){this.$L=v(t.locale,null,!0),this.parse(t)}var _=p.prototype;return _.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(Y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(f);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},_.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},_.$utils=function(){return Y},_.isValid=function(){return!(this.$d.toString()===h)},_.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},_.isAfter=function(t,e){return M(t)<this.startOf(e)},_.isBefore=function(t,e){return this.endOf(e)<M(t)},_.$g=function(t,e,n){return Y.u(t)?this[e]:this.set(n,t)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(t,e){var n=this,c=!!Y.u(e)||e,h=Y.p(t),f=function(t,e){var r=Y.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?r:r.endOf(a)},m=function(t,e){return Y.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,_=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case l:return c?f(1,0):f(31,11);case o:return c?f(1,_):f(0,_+1);case u:var w=this.$locale().weekStart||0,$=(p<w?p+7:p)-w;return f(c?g-$:g+(6-$),_);case a:case d:return m(y+"Hours",0);case s:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case r:return m(y+"Milliseconds",3);default:return this.clone()}},_.endOf=function(t){return this.startOf(t,!1)},_.$set=function(t,e){var u,c=Y.p(t),h="set"+(this.$u?"UTC":""),f=(u={},u[a]=h+"Date",u[d]=h+"Date",u[o]=h+"Month",u[l]=h+"FullYear",u[s]=h+"Hours",u[i]=h+"Minutes",u[r]=h+"Seconds",u[n]=h+"Milliseconds",u)[c],m=c===a?this.$D+(e-this.$W):e;if(c===o||c===l){var p=this.clone().set(d,1);p.$d[f](m),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},_.set=function(t,e){return this.clone().$set(t,e)},_.get=function(t){return this[Y.p(t)]()},_.add=function(n,c){var d,h=this;n=Number(n);var f=Y.p(c),m=function(t){var e=M(h);return Y.w(e.date(e.date()+Math.round(t*n)),h)};if(f===o)return this.set(o,this.$M+n);if(f===l)return this.set(l,this.$y+n);if(f===a)return m(1);if(f===u)return m(7);var p=(d={},d[i]=t,d[s]=e,d[r]=1e3,d)[f]||1,_=this.$d.getTime()+n*p;return Y.w(_,this)},_.subtract=function(t,e){return this.add(-1*t,e)},_.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=Y.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,l=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return Y.s(s%12||12,t,"0")},f=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:Y.s(u+1,2,"0"),MMM:l(n.monthsShort,u,c,3),MMMM:l(c,u),D:this.$D,DD:Y.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,o,2),ddd:l(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:Y.s(s,2,"0"),h:d(1),hh:d(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:Y.s(a,2,"0"),s:String(this.$s),ss:Y.s(this.$s,2,"0"),SSS:Y.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(t,e){return e||p[t]||i.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(n,d,h){var f,m=Y.p(d),p=M(n),_=(p.utcOffset()-this.utcOffset())*t,g=this-p,y=Y.m(this,p);return y=(f={},f[l]=y/12,f[o]=y,f[c]=y/3,f[u]=(g-_)/6048e5,f[a]=(g-_)/864e5,f[s]=g/e,f[i]=g/t,f[r]=g/1e3,f)[m]||g,h?y:Y.a(y)},_.daysInMonth=function(){return this.endOf(o).$D},_.$locale=function(){return w[this.$L]},_.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=v(t,e,!0);return r&&(n.$L=r),n},_.clone=function(){return Y.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},p}(),S=D.prototype;return M.prototype=S,[["$ms",n],["$s",r],["$m",i],["$H",s],["$W",a],["$M",o],["$y",l],["$D",d]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,D,M),t.$i=!0),M},M.locale=v,M.isDayjs=$,M.unix=function(t){return M(1e3*t)},M.en=w[y],M.Ls=w,M.p={},M}()},852:function(t,e,n){t.exports=function(t){"use strict";var e=function(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}(t),n={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){return"W"===e?t+"周":t+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,e){var n=100*t+e;return n<600?"凌晨":n<900?"早上":n<1100?"上午":n<1300?"中午":n<1800?"下午":"晚上"}};return e.default.locale(n,null,!0),n}(n(484))},110:function(t){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(t,e,n,i){return r.fromToBase(t,e,n,i)}n.en.relativeTime=i,r.fromToBase=function(e,r,s,a,u){for(var o,c,l,d=s.$locale().relativeTime||i,h=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=h.length,m=0;m<f;m+=1){var p=h[m];p.d&&(o=a?n(e).diff(s,p.d,!0):s.diff(e,p.d,!0));var _=(t.rounding||Math.round)(Math.abs(o));if(l=o>0,_<=p.r||!p.r){_<=1&&m>0&&(p=h[m-1]);var g=d[p.l];u&&(_=u(""+_)),c="string"==typeof g?g.replace("%d",_):g(_,r,p.l,l);break}}if(r)return c;var y=l?d.future:d.past;return"function"==typeof y?y(c):y.replace("%s",c)},r.to=function(t,e){return s(t,e,this,!0)},r.from=function(t,e){return s(t,e,this)};var a=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(a(this),t)},r.fromNow=function(t){return this.from(a(this),t)}}}()},833:function(t){t.exports=function(){"use strict";return function(t,e){e.prototype.weekday=function(t){var e=this.$locale().weekStart||0,n=this.$W,r=(n<e?n+7:n)-e;return this.$utils().u(t)?r:this.subtract(r,"day").add(t,"day")}}}()}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=async({url:t,method:n="GET",data:r,isInclude:i=!1,headers:s={"Content-Type":"application/json"}})=>{let a=i?"include":"omit",u=await fetch(t,{method:n,credentials:a,headers:s,body:JSON.stringify(r)}).then((t=>t.json()));return e(u)},e=t=>Object.assign({},t,{success:0===t.err_no}),r=(e,n)=>t({url:`https://api.juejin.cn/user_api/v1/user/dynamic?user_id=${e}&cursor=${n}`});var i=n(484),s=n.n(i);var a=n(833),u=n.n(a),o=n(110),c=n.n(o);n(852),s().extend(u()),s().extend(c()),s().locale("zh-cn");const l=s(),d=async(t,e,n)=>{let r=s()().format("YYYY-MM-DD HH:mm:ss"),i={[t]:{value:e,setTime:r,overdueTime:void 0!==n?s()(r).add(n,"minute").format("YYYY-MM-DD HH:mm:ss"):null}};await chrome.storage.local.set(i)},h=async t=>{let e=(await chrome.storage.local.get())[t];return e?e.overdueTime&&!s()().isBefore(e.overdueTime)?null:e.value:null},f=(t,e)=>{chrome.notifications.getPermissionLevel((n=>{"granted"===n&&chrome.notifications.create((()=>{for(var t=[],e="0123456789abcdef",n=0;n<36;n++)t[n]=e.substr(Math.floor(16*Math.random()),1);return t[14]="4",t[19]=e.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-",t.join("")})(),{type:"basic",title:t,message:e,iconUrl:"static/img/icon.png"})}))},m=t=>chrome.tabs.create(t),p=(t,e)=>chrome.tabs.update(t,e),_=t=>chrome.contextMenus.create(t);let g=!1;const y=async()=>{if(g)return;g=!0,await chrome.contextMenus.removeAll();let t=await w();t?(await _({id:"MENU_PARENT",title:`${t.user_basic.user_name}的掘金`,contexts:["all"]}),await _({id:"SELF_HOME",title:"我的主页",parentId:"MENU_PARENT",contexts:["all"]}),await _({id:"SELF_NOTIFICATION",title:"我的消息",parentId:"MENU_PARENT",contexts:["all"]}),await _({id:"separator1",type:"separator",parentId:"MENU_PARENT",contexts:["all"]}),await _({id:"SIGN_IN",title:"快速签到",parentId:"MENU_PARENT",contexts:["all"]}),await _({id:"BUG_FIX",title:"收集BUG",parentId:"MENU_PARENT",contexts:["all"]}),await _({id:"FREE_LUCKY_DRAW",title:"免费抽奖",parentId:"MENU_PARENT",contexts:["all"]}),await _({id:"separator2",type:"separator",parentId:"MENU_PARENT",contexts:["all"]}),await _({id:"LOGOUT",title:"登出",parentId:"MENU_PARENT",contexts:["all"]})):await _({id:"OPEN_JUEJIN",type:"normal",title:"掘金首页",contexts:["all"]}),g=!1},w=async()=>await h("self-info"),$=async t=>{await d("self-info",t)},v=async()=>{let{success:e,data:n}=await t({url:"https://api.juejin.cn/user_api/v1/user/get_info_pack",method:"POST",data:{pack_req:{user_counter:!0,user_growth_info:!0,user:!0}},isInclude:!0});return e?(await $(n),n):$(null)},M=({userId:e,cursor:n=0,sortType:r=4,limit:i=999})=>t({url:"https://api.juejin.cn/content_api/v1/short_msg/query_list",method:"POST",data:{user_id:e,cursor:n.toString(),sort_type:r,limit:i}}),Y=async({clubId:e,isRefresh:n})=>{let r=`pin-club-week-user-rank-${e}`,i=await h(r);if(i&&!n)return i;i={time:l().format("YYYY-MM-DD HH:mm:ss"),rank:[]};let{success:s,data:a}=await(({topic_id:e,cursor:n=0,id_type:r=4,limit:i=10,sort_type:s=500})=>t({url:"https://api.juejin.cn/recommend_api/v1/short_msg/topic",method:"POST",data:{topic_id:e,cursor:n.toString(),id_type:r,limit:i,sort_type:s}}))({topic_id:e,limit:1e3});if(!s)return i;let u={},o=l().startOf("week").valueOf();for(let t of a){if(1e3*t.msg_Info.ctime<o)break;let{user_id:e}=t.msg_Info;u[e]?u[e].push(t):u[e]=[t]}let c=[];for(let t in u)c.push({userId:t,msgs:u[t]});c.sort(((t,e)=>e.msgs.length-t.msgs.length));let f=[],m=[];for(let t of c)if(f.length){let{msgCount:e,users:n}=f[f.length-1];if(t.msgs.length===e)m.push(t.userId),n.push(t);else{if(!(f.length<3))break;m.push(t.userId),f.push({msgCount:t.msgs.length,users:[t]})}}else m.push(t.userId),f.push({msgCount:t.msgs.length,users:[t]});let p=await Promise.all(m.map((e=>(async e=>{let n=`user-info-${e}`,r=await h(n);if(r)return r;let{success:i,data:s}=await(e=>t({url:`https://api.juejin.cn/user_api/v1/user/get?user_id=${e}`}))(e);return i?(await d(n,s,10080),s):null})(e))));u={};for(let t of p)u[t.user_id]=t;return f.forEach((t=>{t.users.forEach((t=>{t.userInfo=u[t.userId]}))})),i.rank=f,await d(r,i),i},D={"get-self-info":()=>w(),"get-user-pins":t=>(async t=>{let e=await M({userId:t,limit:1});return e.success?(e=await M({userId:t,limit:e.count}),e.success?e.data:[]):[]})(t),"remove-pin":e=>(async e=>{let{success:n}=await(r=e.msg_id,t({url:"https://api.juejin.cn/content_api/v1/short_msg/delete",method:"POST",data:{msg_id:r},isInclude:!0}));var r;return n})(e),"get-pin-club-info":e=>(async e=>{let n=`pin-club-info-${e}`,r=await h(n);if(r)return r;let{success:i,data:s}=await(a=e,t({url:"https://api.juejin.cn/tag_api/v1/query_topic_detail",method:"POST",data:{topic_id:a}}));var a;return i?(await d(n,s,10080),s):null})(e),"get-pin-club-week-user-rank":t=>Y(t),"get-user-zan-pins":e=>(async e=>{let{success:n,data:r,count:i}=await(({cursor:e=0,item_type:n=4,sort_type:r=2,user_id:i})=>t({url:"https://api.juejin.cn/interact_api/v1/digg/query_page",method:"POST",data:{cursor:e.toString(),item_type:n,sort_type:r,user_id:i}}))({user_id:e,item_type:4});return n?{pins:r,count:i}:{pins:[],count:0}})(e),"cancel-zan-pin":e=>(async e=>{let{success:n}=await(r=e.msg_id,t({url:"https://api.juejin.cn/interact_api/v1/digg/cancel",method:"POST",data:{item_id:r,item_type:4},isInclude:!0}));var r;return n})(e),"get-year-dynamic":t=>(async({userId:t,isRefresh:e})=>{let n=`year-dynamic-${t}`,i=await h(n);if(i&&!e)return i;i={count:0,time:l().format("YYYY-MM-DD HH:mm:ss"),info:{}};let{success:s,data:a}=await r(t,0);if(!s)return i;let{count:u,list:o}=a;i.count=u;let c=[...o],f=new Array(Math.ceil(u/20)).fill(null).map(((t,e)=>20*e));f.shift(),(await Promise.all(f.map((e=>r(t,e))))).forEach((t=>{t.success&&c.push(...t.data.list)}));for(let t of c){let e=l(1e3*t.time).format("YYYY"),n=l(1e3*t.time).format("MM-DD");i.info[e]?i.info[e][n]?i.info[e][n].push(t.action):i.info[e][n]=[t.action]:i.info[e]={[n]:[t.action]}}return await d(n,i),i})(t),"get-random-text":()=>(async()=>{let t=await fetch(`https://www.mxnzp.com/api/holiday/single/${l().format("YYYYMMDD")}?ignoreHoliday=false&app_id=nhhhdemgpmhixsnv&app_secret=Y296dDlVdVVhRnhucmJmUnhvRVY2UT09`,{credentials:"include",method:"GET",crossorigin:!0}).then((t=>t.json()));if(1!==t.code)return{success:!1,data:"",err_msg:t.msg};let e=t.data,n=`${e.date}｜${{1:"周一",2:"周二",3:"周三",4:"周四",5:"周五",6:"周六",7:"周日"}[e.weekDay]}｜${e.typeDes}｜阴历: ${e.lunarCalendar}\n宜: ${e.suit}\n忌: ${e.avoid}`;return await new Promise((t=>{setTimeout((()=>{t()}),1e3)})),t=await fetch("https://www.mxnzp.com/api/daily_word/recommend?count=1&app_id=nhhhdemgpmhixsnv&app_secret=Y296dDlVdVVhRnhucmJmUnhvRVY2UT09",{credentials:"include",method:"GET",crossorigin:!0}).then((t=>t.json())),1!==t.code?{success:!1,data:"",err_msg:t.msg}:{success:!0,data:(t.data?.[0].content||"就不给你看~~")+"\n\n"+n,err_msg:""}})()};chrome.contextMenus.onClicked.addListener((async(e,n)=>{let r=await w(),{menuItemId:i}=e,{windowId:s}=n;"OPEN_JUEJIN"===i&&m({url:"https://juejin.cn/",selected:!0,windowId:s}),"SELF_HOME"===i&&await m({url:`https://juejin.cn/user/${r.user_basic.user_id}`,selected:!0,windowId:s}),"SELF_NOTIFICATION"===i&&await m({url:"https://juejin.cn/notification",selected:!0,windowId:s}),"LOGOUT"===i&&await(async()=>{t({url:"https://juejin.cn/passport/web/logout/",isInclude:!0});let e=await((t={})=>chrome.tabs.query(t))({url:"https://juejin.cn/*"});await $(null),await y();for(let t of e)p(t.id,{url:t.url})})(),"SIGN_IN"===i&&await(async()=>{let{success:e,data:n,err_msg:r}=await t({url:"https://api.juejin.cn/growth_api/v1/check_in",method:"POST",isInclude:!0});f("掘金签到："+(e?"成功":"失败"),e?`本次新增矿石：${n.incr_point}，当前矿石：${n.sum_point}`:r)})(),"BUG_FIX"===i&&await(async()=>{let{success:e,data:n,err_msg:r}=await t({url:"https://api.juejin.cn/user_api/v1/bugfix/not_collect",method:"POST",headers:{},isInclude:!0});f("掘金BugFix："+(e?"成功":"失败"),e?`今日掘金bugfix：${n.length}`:r),e&&n.forEach((e=>(e=>t({url:"https://api.juejin.cn/user_api/v1/bugfix/collect",method:"POST",data:e,isInclude:!0}))(e)))})(),"FREE_LUCKY_DRAW"===i&&await(async()=>{let e=await t({url:"https://api.juejin.cn/growth_api/v1/lottery_config/get",isInclude:!0});return e.success?e.data.free_count?(e=await t({url:"https://api.juejin.cn/growth_api/v1/lottery/draw",method:"POST",isInclude:!0}),e.success?void f("今日免费抽奖成功",`恭喜抽到：${e.data.lottery_name}`):f("今日免费抽奖失败",e.err_msg)):f("今日免费抽奖失败","今日免费抽奖次数已经用完"):f("今日免费抽奖失败",e.err_msg)})()})),chrome.tabs.onUpdated.addListener((async(t,e,n)=>{if("complete"!==e.status)return;let r=n.url.includes("juejin.cn");r&&await v(),await y(),r&&((t,e)=>{chrome.tabs.sendMessage(t,Object.assign({event:"page-change-complete"},{from:"background"}))})(t)})),chrome.runtime.onMessage.addListener(((t,e,n)=>{let{to:r,event:i,data:s}=t;if("background"===r)return(async(t,e,n)=>{n(await D[t](e))})(i,s,n),!0})),(async()=>{await v(),await y(),setInterval((async()=>{if(await w()){let{success:e,data:n}=await t({url:"https://api.juejin.cn/interact_api/v1/message/count",isInclude:!0});if(!e)return;let{count:r,total:i}=n,s=[];r[1]&&s.push(`点赞和收藏：${r[1]}条`),r[3]&&s.push(`评论：${r[3]}条`);let a=await h("message-not-read");i&&a!==JSON.stringify(s)&&f(`您有${i}条掘金未读消息，以下为详细内容`,`${s.join("\n")}`),await d("message-not-read",JSON.stringify(s))}}),1e4)})()})()})();
//# sourceMappingURL=background.main.js.map