(()=>{var t={7484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,r="millisecond",n="second",a="minute",i="hour",s="day",o="week",u="month",c="quarter",l="year",d="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},_=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},y={s:_,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),a=r%60;return(e<=0?"+":"-")+_(n,2,"0")+":"+_(a,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),a=e.clone().add(n,u),i=r-a<0,s=e.clone().add(n+(i?-1:1),u);return+(-(n+(r-a)/(i?a-s:s-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:l,w:o,d:s,D:d,h:i,m:a,s:n,ms:r,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",w={};w[g]=m;var $=function(t){return t instanceof j},v=function t(e,r,n){var a;if(!e)return g;if("string"==typeof e){var i=e.toLowerCase();w[i]&&(a=i),r&&(w[i]=r,a=i);var s=e.split("-");if(!a&&s.length>1)return t(s[0])}else{var o=e.name;w[o]=e,a=o}return!n&&a&&(g=a),a||!n&&g},M=function(t,e){if($(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new j(r)},S=y;S.l=v,S.i=$,S.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var j=function(){function m(t){this.$L=v(t.locale,null,!0),this.parse(t)}var _=m.prototype;return _.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(f);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},_.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},_.$utils=function(){return S},_.isValid=function(){return!(this.$d.toString()===h)},_.isSame=function(t,e){var r=M(t);return this.startOf(e)<=r&&r<=this.endOf(e)},_.isAfter=function(t,e){return M(t)<this.startOf(e)},_.isBefore=function(t,e){return this.endOf(e)<M(t)},_.$g=function(t,e,r){return S.u(t)?this[e]:this.set(r,t)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(t,e){var r=this,c=!!S.u(e)||e,h=S.p(t),f=function(t,e){var n=S.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return c?n:n.endOf(s)},p=function(t,e){return S.w(r.toDate()[t].apply(r.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},m=this.$W,_=this.$M,y=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case l:return c?f(1,0):f(31,11);case u:return c?f(1,_):f(0,_+1);case o:var w=this.$locale().weekStart||0,$=(m<w?m+7:m)-w;return f(c?y-$:y+(6-$),_);case s:case d:return p(g+"Hours",0);case i:return p(g+"Minutes",1);case a:return p(g+"Seconds",2);case n:return p(g+"Milliseconds",3);default:return this.clone()}},_.endOf=function(t){return this.startOf(t,!1)},_.$set=function(t,e){var o,c=S.p(t),h="set"+(this.$u?"UTC":""),f=(o={},o[s]=h+"Date",o[d]=h+"Date",o[u]=h+"Month",o[l]=h+"FullYear",o[i]=h+"Hours",o[a]=h+"Minutes",o[n]=h+"Seconds",o[r]=h+"Milliseconds",o)[c],p=c===s?this.$D+(e-this.$W):e;if(c===u||c===l){var m=this.clone().set(d,1);m.$d[f](p),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},_.set=function(t,e){return this.clone().$set(t,e)},_.get=function(t){return this[S.p(t)]()},_.add=function(r,c){var d,h=this;r=Number(r);var f=S.p(c),p=function(t){var e=M(h);return S.w(e.date(e.date()+Math.round(t*r)),h)};if(f===u)return this.set(u,this.$M+r);if(f===l)return this.set(l,this.$y+r);if(f===s)return p(1);if(f===o)return p(7);var m=(d={},d[a]=t,d[i]=e,d[n]=1e3,d)[f]||1,_=this.$d.getTime()+r*m;return S.w(_,this)},_.subtract=function(t,e){return this.add(-1*t,e)},_.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=t||"YYYY-MM-DDTHH:mm:ssZ",a=S.z(this),i=this.$H,s=this.$m,o=this.$M,u=r.weekdays,c=r.months,l=function(t,r,a,i){return t&&(t[r]||t(e,n))||a[r].slice(0,i)},d=function(t){return S.s(i%12||12,t,"0")},f=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:S.s(o+1,2,"0"),MMM:l(r.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,u,2),ddd:l(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(i),HH:S.s(i,2,"0"),h:d(1),hh:d(2),a:f(i,s,!0),A:f(i,s,!1),m:String(s),mm:S.s(s,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:a};return n.replace(p,(function(t,e){return e||m[t]||a.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(r,d,h){var f,p=S.p(d),m=M(r),_=(m.utcOffset()-this.utcOffset())*t,y=this-m,g=S.m(this,m);return g=(f={},f[l]=g/12,f[u]=g,f[c]=g/3,f[o]=(y-_)/6048e5,f[s]=(y-_)/864e5,f[i]=y/e,f[a]=y/t,f[n]=y/1e3,f)[p]||y,h?g:S.a(g)},_.daysInMonth=function(){return this.endOf(u).$D},_.$locale=function(){return w[this.$L]},_.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=v(t,e,!0);return n&&(r.$L=n),r},_.clone=function(){return S.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},m}(),I=j.prototype;return M.prototype=I,[["$ms",r],["$s",n],["$m",a],["$H",i],["$W",s],["$M",u],["$y",l],["$D",d]].forEach((function(t){I[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,j,M),t.$i=!0),M},M.locale=v,M.isDayjs=$,M.unix=function(t){return M(1e3*t)},M.en=w[g],M.Ls=w,M.p={},M}()},3852:function(t,e,r){t.exports=function(t){"use strict";var e=function(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}(t),r={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){return"W"===e?t+"周":t+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,e){var r=100*t+e;return r<600?"凌晨":r<900?"早上":r<1100?"上午":r<1300?"中午":r<1800?"下午":"晚上"}};return e.default.locale(r,null,!0),r}(r(7484))},4110:function(t){t.exports=function(){"use strict";return function(t,e,r){t=t||{};var n=e.prototype,a={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(t,e,r,a){return n.fromToBase(t,e,r,a)}r.en.relativeTime=a,n.fromToBase=function(e,n,i,s,o){for(var u,c,l,d=i.$locale().relativeTime||a,h=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=h.length,p=0;p<f;p+=1){var m=h[p];m.d&&(u=s?r(e).diff(i,m.d,!0):i.diff(e,m.d,!0));var _=(t.rounding||Math.round)(Math.abs(u));if(l=u>0,_<=m.r||!m.r){_<=1&&p>0&&(m=h[p-1]);var y=d[m.l];o&&(_=o(""+_)),c="string"==typeof y?y.replace("%d",_):y(_,n,m.l,l);break}}if(n)return c;var g=l?d.future:d.past;return"function"==typeof g?g(c):g.replace("%s",c)},n.to=function(t,e){return i(t,e,this,!0)},n.from=function(t,e){return i(t,e,this)};var s=function(t){return t.$u?r.utc():r()};n.toNow=function(t){return this.to(s(this),t)},n.fromNow=function(t){return this.from(s(this),t)}}}()},6833:function(t){t.exports=function(){"use strict";return function(t,e){e.prototype.weekday=function(t){var e=this.$locale().weekStart||0,r=this.$W,n=(r<e?r+7:r)-e;return this.$utils().u(t)?n:this.subtract(n,"day").add(t,"day")}}}()}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=async({url:t,method:r="GET",data:n,isInclude:a=!1,headers:i={"Content-Type":"application/json"}})=>{let s=a?"include":"omit",o=await fetch(t,{method:r,credentials:s,headers:i,body:JSON.stringify(n)}).then((t=>t.json())).catch((t=>({err_no:1,err_msg:"接口出错"})));return e(o)},e=t=>Object.assign({},t,{success:0===t.err_no}),n=(e,r)=>t({url:`https://api.juejin.cn/user_api/v1/user/dynamic?user_id=${e}&cursor=${r}`});var a=r(7484),i=r.n(a),s=r(6833),o=r.n(s),u=r(4110),c=r.n(u);r(3852),i().extend(o()),i().extend(c()),i().locale("zh-cn");const l=i(),d=t=>new Promise((e=>{setTimeout((()=>{e()}),1e3*t)})),h=(t,e,r)=>{switch(r=r||3,t=Math.ceil(t),e=Math.floor(e),r){case 1:return Math.floor(Math.random()*(e-t))+t;case 2:return Math.floor(Math.random()*(e-t+1))+t;case 3:return Math.floor(Math.random()*(e-t-1))+t+1}},f=async(t,e,r)=>{let n=i()().format("YYYY-MM-DD HH:mm:ss"),a={[t]:{value:e,setTime:n,overdueTime:void 0!==r?i()(n).add(r,"minute").format("YYYY-MM-DD HH:mm:ss"):null}};await chrome.storage.local.set(a)},p=async t=>{let e=(await chrome.storage.local.get())[t];return e?e.overdueTime&&!i()().isBefore(e.overdueTime)?null:e.value:null},m=(t,e)=>{chrome.notifications.create((()=>{for(var t=[],e="0123456789abcdef",r=0;r<36;r++)t[r]=e.substr(Math.floor(16*Math.random()),1);return t[14]="4",t[19]=e.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-",t.join("")})(),{type:"basic",title:t,message:e,iconUrl:"static/img/icon.png"})},_=t=>chrome.tabs.create(t),y=(t,e)=>chrome.tabs.update(t,e),g=t=>chrome.contextMenus.create(t);let w=!1;const $=async()=>{if(w)return;w=!0,await chrome.contextMenus.removeAll();let t=await v();t?(await g({id:"MENU_PARENT",title:`${t.user_basic.user_name}的掘金`,contexts:["all"]}),await g({id:"SELF_HOME",title:"我的主页",parentId:"MENU_PARENT",contexts:["all"]}),await g({id:"SELF_NOTIFICATION",title:"我的消息",parentId:"MENU_PARENT",contexts:["all"]}),await g({id:"separator1",type:"separator",parentId:"MENU_PARENT",contexts:["all"]}),await g({id:"SIGN_IN",title:"快速签到",parentId:"MENU_PARENT",contexts:["all"]}),await g({id:"BUG_FIX",title:"收集BUG",parentId:"MENU_PARENT",contexts:["all"]}),await g({id:"FREE_LUCKY_DRAW",title:"免费抽奖",parentId:"MENU_PARENT",contexts:["all"]}),await g({id:"separator2",type:"separator",parentId:"MENU_PARENT",contexts:["all"]}),await g({id:"LOGOUT",title:"登出",parentId:"MENU_PARENT",contexts:["all"]})):await g({id:"OPEN_JUEJIN",type:"normal",title:"掘金首页",contexts:["all"]}),w=!1},v=async()=>await p("self-info"),M=async t=>{await f("self-info",t)},S=async()=>{let{success:e,data:r}=await t({url:"https://api.juejin.cn/user_api/v1/user/get_info_pack",method:"POST",data:{pack_req:{user_counter:!0,user_growth_info:!0,user:!0}},isInclude:!0});return e?(await M(r),r):M(null)};let j=null;const I=()=>{j||(j=setInterval((async()=>{if(await v()){let{success:e,data:r}=await t({url:"https://api.juejin.cn/interact_api/v1/message/count",isInclude:!0});if(!e)return;let{count:n,total:a}=r,i=[];n[1]&&i.push(`赞和收藏：${n[1]}条`),n[3]&&i.push(`评论：${n[3]}条`),n[7]&&i.push(`私信：${n[3]}条`);let s=await p("message-not-read");a&&s!==JSON.stringify(i)&&m(`您有${a}条掘金未读消息，以下为详细内容`,`${i.join("\n")}`),await f("message-not-read",JSON.stringify(i))}}),1e4))},Y=({userId:e,cursor:r=0,sortType:n=4,limit:a=999})=>t({url:"https://api.juejin.cn/content_api/v1/short_msg/query_list",method:"POST",data:{user_id:e,cursor:r.toString(),sort_type:n,limit:a}}),D="function"==typeof btoa,O="function"==typeof Buffer,T=("function"==typeof TextDecoder&&new TextDecoder,"function"==typeof TextEncoder?new TextEncoder:void 0),b=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),x=((t=>{let e={};t.forEach(((t,r)=>e[t]=r))})(b),String.fromCharCode.bind(String)),N=("function"==typeof Uint8Array.from&&Uint8Array.from.bind(Uint8Array),t=>t.replace(/=/g,"").replace(/[+\/]/g,(t=>"+"==t?"-":"_"))),E=D?t=>btoa(t):O?t=>Buffer.from(t,"binary").toString("base64"):t=>{let e,r,n,a,i="";const s=t.length%3;for(let s=0;s<t.length;){if((r=t.charCodeAt(s++))>255||(n=t.charCodeAt(s++))>255||(a=t.charCodeAt(s++))>255)throw new TypeError("invalid character found");e=r<<16|n<<8|a,i+=b[e>>18&63]+b[e>>12&63]+b[e>>6&63]+b[63&e]}return s?i.slice(0,s-3)+"===".substring(s):i},L=O?t=>Buffer.from(t).toString("base64"):t=>{let e=[];for(let r=0,n=t.length;r<n;r+=4096)e.push(x.apply(null,t.subarray(r,r+4096)));return E(e.join(""))},k=t=>{if(t.length<2)return(e=t.charCodeAt(0))<128?t:e<2048?x(192|e>>>6)+x(128|63&e):x(224|e>>>12&15)+x(128|e>>>6&63)+x(128|63&e);var e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return x(240|e>>>18&7)+x(128|e>>>12&63)+x(128|e>>>6&63)+x(128|63&e)},P=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,A=O?t=>Buffer.from(t,"utf8").toString("base64"):T?t=>L(T.encode(t)):t=>E(t.replace(P,k)),C=(t,e=!1)=>e?N(A(t)):A(t),H=({topic_id:e,cursor:r=0,id_type:n=4,limit:a=459,sort_type:i=500})=>t({url:"https://api.juejin.cn/recommend_api/v1/short_msg/topic",method:"POST",data:{topic_id:e,cursor:C(JSON.stringify({v:"",i:r})),id_type:n,limit:a,sort_type:i}}),U={"get-self-info":()=>v(),"get-user-pins":t=>(async t=>{let e=await Y({userId:t,limit:1});return e.success?(e=await Y({userId:t,limit:e.count}),e.success?e.data:[]):[]})(t),"remove-pin":e=>(async e=>{return await(r=e.msg_id,t({url:"https://api.juejin.cn/content_api/v1/short_msg/delete",method:"POST",data:{msg_id:r},isInclude:!0}));var r})(e),"get-pin-club-info":e=>(async e=>{let r=`pin-club-info-${e}`,n=await p(r);if(n)return n;let{success:a,data:i}=await(s=e,t({url:"https://api.juejin.cn/tag_api/v1/query_topic_detail",method:"POST",data:{topic_id:s}}));var s;return a?(await f(r,i,10080),i):null})(e),"get-pin-club-day-user-rank":t=>(async({clubId:t,isRefresh:e})=>{let r=`pin-club-day-user-rank-${t}`,n=await p(r);if(n&&!e)return n;n={time:l().format("YYYY-MM-DD HH:mm:ss"),rank:[]};let a=[];for(let e=0;e<10;e++){let{success:r,data:n}=await H({topic_id:t,limit:100,cursor:100*e});if(await d(.5),!r)break;let i=!0;for(let t of n){if(1e3*t.msg_Info.ctime<l().startOf("day").valueOf()){i=!1;break}a.push(t)}if(!i)break}let i={},s={};for(let t of a){let{user_id:e}=t.msg_Info;i[e]?i[e].push(t):i[e]=[t],s[e]=t.author_user_info}let o=[];for(let t in i)o.push({userId:t,userInfo:s[t],msgCount:i[t].length});o.sort(((t,e)=>e.msgCount-t.msgCount));let u=[];for(let t of o)if(u.length){let{msgCount:e,users:r}=u[u.length-1];if(t.msgCount===e)r.push(t);else{if(!(u.length<3))break;u.push({msgCount:t.msgCount,users:[t]})}}else u.push({msgCount:t.msgCount,users:[t]});n.rank=u;let c=(l().endOf("day").valueOf()-l().valueOf())/1e3/60;return await f(r,n,c),n})(t),"get-user-zan-pins":e=>(async e=>{let{success:r,data:n,count:a}=await(({cursor:e=0,item_type:r=4,sort_type:n=2,user_id:a})=>t({url:"https://api.juejin.cn/interact_api/v1/digg/query_page",method:"POST",data:{cursor:e.toString(),item_type:r,sort_type:n,user_id:a}}))({user_id:e,item_type:4});return r?{pins:n,count:a}:{pins:[],count:0}})(e),"cancel-zan-pin":e=>(async e=>{let{success:r}=await(n=e.msg_id,t({url:"https://api.juejin.cn/interact_api/v1/digg/cancel",method:"POST",data:{item_id:n,item_type:4},isInclude:!0}));var n;return r})(e),"get-year-dynamic":t=>(async({userId:t,isRefresh:e})=>{let r=`year-dynamic-${t}`,a=await p(r);if(a&&!e)return a;a={count:0,time:l().format("YYYY-MM-DD HH:mm:ss"),info:{}};let{success:i,data:s}=await n(t,0);if(!i)return a;let{count:o,list:u}=s;a.count=o;let c=[...u],d=new Array(Math.ceil(o/20)).fill(null).map(((t,e)=>20*e));d.shift(),d=d.splice(0,20),(await Promise.all(d.map((e=>n(t,e))))).forEach((t=>{t.success&&c.push(...t.data.list)}));for(let t of c){let e=l(1e3*t.time).format("YYYY"),r=l(1e3*t.time).format("MM-DD");a.info[e]?a.info[e][r]?a.info[e][r].push(t.action):a.info[e][r]=[t.action]:a.info[e]={[r]:[t.action]}}return await f(r,a),a})(t),"get-random-text":t=>(async t=>{const e="nhhhdemgpmhixsnv",r="Y296dDlVdVVhRnhucmJmUnhvRVY2UT09";let n="";try{if(t.includes("搞笑")){let{data:t}=await fetch(`https://www.mxnzp.com/api/jokes/list?page=${h(1,8715)}&app_id=${e}&app_secret=${r}`).then((t=>t.json()));t&&t.list.length&&(n+=`${t.list[h(0,t.list.length-1)].content}`)}else if(t.includes("今日新鲜事")){await d(1);let{data:t}=await fetch(`https://www.mxnzp.com/api/news/types?app_id=${e}&app_secret=${r}`).then((t=>t.json()));if(t&&t.length){let a=t[h(0,t.length-1)];await d(1);let{data:i}=await fetch(`https://www.mxnzp.com/api/news/list?typeId=${a.typeId}&page=1&app_id=${e}&app_secret=${r}`).then((t=>t.json()));if(i&&i.length){let t=i[h(0,i.length-1)];n+=`${a.typeName}｜${t.title}`}}}else{await d(1);let{data:t}=await fetch(`https://www.mxnzp.com/api/daily_word/recommend?count=20&app_id=${e}&app_secret=${r}`).then((t=>t.json()));t&&t.length&&(n+=`${t[t.length-1].content}`)}await d(1);let{data:a}=await fetch(`https://www.mxnzp.com/api/ip/self?app_id=${e}&app_secret=${r}`).then((t=>t.json()));if(a){let{province:t,city:i}=a;await d(1);let{data:s}=await fetch(` https://www.mxnzp.com/api/weather/current/${i}?app_id=${e}&app_secret=${r}`).then((t=>t.json()));s&&(n+=`\n\n${s.address}｜${s.temp}｜${s.weather}｜风向${s.windDirection}｜风力${s.windPower}｜湿度${s.humidity}`)}}catch(t){}return{success:!0,data:n,err_msg:""}})(t),"copy-pin-push":e=>(async e=>{let{success:r,data:n}=await(a=e,t({url:"https://api.juejin.cn/content_api/v1/short_msg/detail",method:"POST",data:{msg_id:a}}));var a;if(!r)return null;let i={sync_to_org:!1,content:n.msg_Info.content,pic_list:n.msg_Info.pic_list,topic_id:n.msg_Info.topic_id,theme_id:n.msg_Info.theme_id,jcode_id:n.msg_Info.jcode_id,url:n.msg_Info.url,url_pic:n.msg_Info.url_pic,url_title:n.msg_Info.url_title},s=await(o=i,t({url:"https://api.juejin.cn/content_api/v1/short_msg/publish",method:"POST",data:o,isInclude:!0}));var o;return s.success?s.data:null})(e),"get-self-task-info":()=>(async()=>{let e=await v(),r=e?.user_basic?.user_id;if(!r)return null;let n=await((e,r=1)=>t({url:`https://api.juejin.cn/growth_api/v1/user_growth/task_list?uuid=${e}`,method:"POST",data:{growth_type:r},isInclude:!0}))(r);if(!n.success)return null;let a={todayLimitScore:0,todayScore:n.data.today_jscore,todayPercent:0,taskGroup:[]};for(let t in n.data.growth_tasks){let e=n.data.growth_tasks[t];if(e.length){let t={name:"",tasks:[]};e.forEach((e=>{t.name=e.task_type,t.tasks.push({title:e.title,successCount:e.done,successScore:e.done*e.score,limitCount:e.limit,oneScore:e.score,allScore:e.score*e.limit,origin:e}),e.limit&&(a.todayLimitScore+=e.score*e.limit)})),a.taskGroup.push(t)}}return a.todayPercent=a.todayScore/a.todayLimitScore*100+"%",n=await((e,r=1)=>t({url:`https://api.juejin.cn/growth_api/v1/user_growth/progress?uuid=${e}`,method:"POST",data:{growth_type:r},isInclude:!0}))(r),n.success?(a.currentLevel=n.data.current_level,a.currentScore=n.data.current_score,a.currentLevelSpec=n.data.level_spec.find((t=>t.min_score<=n.data.current_score&&t.max_score>=n.data.current_score)),a.currentPercent=a.currentScore/a.currentLevelSpec.max_score*100+"%",a.levelOrigin=n.data,a):a})()};chrome.contextMenus.onClicked.addListener((async(e,r)=>{let n=await v(),{menuItemId:a}=e,{windowId:i}=r;"OPEN_JUEJIN"===a&&_({url:"https://juejin.cn/",selected:!0,windowId:i}),"SELF_HOME"===a&&await _({url:`https://juejin.cn/user/${n.user_basic.user_id}`,selected:!0,windowId:i}),"SELF_NOTIFICATION"===a&&await _({url:"https://juejin.cn/notification",selected:!0,windowId:i}),"LOGOUT"===a&&await(async()=>{t({url:"https://juejin.cn/passport/web/logout/",isInclude:!0});let e=await((t={})=>chrome.tabs.query(t))({url:"https://juejin.cn/*"});await M(null),await $();for(let t of e)y(t.id,{url:t.url})})(),"SIGN_IN"===a&&await(async()=>{let{success:e,data:r,err_msg:n}=await t({url:"https://api.juejin.cn/growth_api/v1/check_in",method:"POST",isInclude:!0});m("掘金签到："+(e?"成功":"失败"),e?`本次新增矿石：${r.incr_point}，当前矿石：${r.sum_point}`:n)})(),"BUG_FIX"===a&&await(async()=>{let{success:e,data:r,err_msg:n}=await t({url:"https://api.juejin.cn/user_api/v1/bugfix/not_collect",method:"POST",headers:{},isInclude:!0});m("掘金BugFix："+(e?"成功":"失败"),e?`今日掘金bugfix：${r.length}`:n),e&&r.forEach((e=>(e=>t({url:"https://api.juejin.cn/user_api/v1/bugfix/collect",method:"POST",data:e,isInclude:!0}))(e)))})(),"FREE_LUCKY_DRAW"===a&&await(async()=>{let e=await t({url:"https://api.juejin.cn/growth_api/v1/lottery_config/get",isInclude:!0});return e.success?e.data.free_count?(e=await t({url:"https://api.juejin.cn/growth_api/v1/lottery/draw",method:"POST",isInclude:!0}),e.success?void m("今日免费抽奖成功",`恭喜抽到：${e.data.lottery_name}`):m("今日免费抽奖失败",e.err_msg)):m("今日免费抽奖失败","今日免费抽奖次数已经用完"):m("今日免费抽奖失败",e.err_msg)})()})),chrome.tabs.onUpdated.addListener((async(t,e,r)=>{if("complete"!==e.status)return;I();let n=r.url.includes("juejin.cn");n&&await S(),await $(),n&&((t,e)=>{chrome.tabs.sendMessage(t,Object.assign({event:"page-change-complete"},{from:"background"}))})(t)})),chrome.runtime.onMessage.addListener(((t,e,r)=>{let{to:n,event:a,data:i}=t;if("background"===n)return(async(t,e,r)=>{r(await U[t](e))})(a,i,r),!0})),chrome.runtime.onInstalled.addListener((async()=>{await S(),await $(),I()}))})()})();
//# sourceMappingURL=background.main.js.map