(()=>{var e,r,t,n,a={579:(e,r,t)=>{Promise.all([t.e(416),t.e(457)]).then(t.bind(t,457))},794:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof dashboard)return e();t.l("http://localhost:3001/remoteEntry.js",(t=>{if("undefined"!=typeof dashboard)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"dashboard")})).then((()=>dashboard))},781:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof details)return e();t.l("http://localhost:3002/remoteEntry.js",(t=>{if("undefined"!=typeof details)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"details")})).then((()=>details))},203:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof header)return e();t.l("http://localhost:3000/remoteEntry.js",(t=>{if("undefined"!=typeof header)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"header")})).then((()=>header))},945:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof host)return e();t.l("http://localhost:8080/remoteEntry.js",(t=>{if("undefined"!=typeof host)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"host")})).then((()=>host))}},o={};function i(e){var r=o[e];if(void 0!==r)return r.exports;var t=o[e]={id:e,exports:{}};return a[e](t,t.exports,i),t.exports}i.m=a,i.c=o,i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+".js",i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="host:",i.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var s,u;if(void 0!==a)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var f=d[l];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+a){s=f;break}}s||(u=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",r+a),s.src=t),e[t]=[n];var p=(r,n)=>{s.onerror=s.onload=null,clearTimeout(h);var a=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(n))),r)return r(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={457:[483,101,720,699]},n={101:["default","./Dashboard",794],483:["default","./Header",203],699:["default","./store",945],720:["default","./Details",781]},i.f.remotes=(e,r)=>{i.o(t,e)&&t[e].forEach((e=>{var t=i.R;t||(t=[]);var a=n[e];if(!(t.indexOf(a)>=0)){if(t.push(a),a.p)return r.push(a.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+a[1]+'" from '+a[2]),i.m[e]=()=>{throw r},a.p=0},s=(e,t,n,i,s,u)=>{try{var d=e(t,n);if(!d||!d.then)return s(d,i,u);var l=d.then((e=>s(e,i)),o);if(!u)return l;r.push(a.p=l)}catch(e){o(e)}},u=(e,r,n)=>s(r.get,a[1],t,0,d,n),d=r=>{a.p=1,i.m[e]=e=>{e.exports=r()}};s(i,a[2],0,0,((e,r,t)=>e?s(i.I,a[0],0,e,u,t):o()),1)}}))},(()=>{i.S={};var e={},r={};i.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];i.o(i.S,t)||(i.S[t]={});var o=i.S[t],s="host",u=(e,r,t,n)=>{var a=o[e]=o[e]||{},i=a[r];(!i||!i.loaded&&(!n!=!i.eager?n:s>i.from))&&(a[r]={get:t,from:s,eager:!!n})},d=e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(r));var r};try{var a=i(e);if(!a)return;var o=e=>e&&e.init&&e.init(i.S[t],n);if(a.then)return l.push(a.then(o,r));var s=o(a);if(s&&s.then)return l.push(s.catch(r))}catch(e){r(e)}},l=[];return"default"===t&&(u("react-dom","18.2.0",(()=>Promise.all([i.e(935),i.e(416)]).then((()=>()=>i(935))))),u("react","18.2.0",(()=>i.e(294).then((()=>()=>i(294))))),d(794),d(781),d(203),d(945)),l.length?e[t]=Promise.all(l).then((()=>e[t]=1)):e[t]=1}}})(),i.p="http://localhost:8080",(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=e=>{var t=e[0],n="";if(1===e.length)return"*";if(t+.5){n+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,n+="u"==(typeof(s=e[o]))[0]?"-":(a>0?".":"")+(a=2,s);return n}var i=[];for(o=1;o<e.length;o++){var s=e[o];i.push(0===s?"not("+u()+")":1===s?"("+u()+" || "+u()+")":2===s?i.pop()+" "+i.pop():r(s))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},t=(r,n)=>{if(0 in r){n=e(n);var a=r[0],o=a<0;o&&(a=-a-1);for(var i=0,s=1,u=!0;;s++,i++){var d,l,f=s<r.length?(typeof r[s])[0]:"";if(i>=n.length||"o"==(l=(typeof(d=n[i]))[0]))return!u||("u"==f?s>a&&!o:""==f!=o);if("u"==l){if(!u||"u"!=f)return!1}else if(u)if(f==l)if(s<=a){if(d!=r[s])return!1}else{if(o?d>r[s]:d<r[s])return!1;d!=r[s]&&(u=!1)}else if("s"!=f&&"n"!=f){if(o||s<=a)return!1;u=!1,s--}else{if(s<=a||l<f!=o)return!1;u=!1}else"s"!=f&&"n"!=f&&(u=!1,s--)}}var p=[],h=p.pop.bind(p);for(i=1;i<r.length;i++){var c=r[i];p.push(1==c?h()|h():2==c?h()&h():c?t(c,n):!h())}return!!h()},n=(r,t)=>{var n=r[t];return Object.keys(n).reduce(((r,t)=>!r||!n[r].loaded&&((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var a=r[n],o=(typeof a)[0];if(n>=t.length)return"u"==o;var i=t[n],s=(typeof i)[0];if(o!=s)return"o"==o&&"n"==s||"s"==s||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}})(r,t)?t:r),0)},a=(e,a,i,u)=>{var d=n(e,i);return t(u,d)||o(((e,t,n,a)=>"Unsatisfied version "+n+" from "+(n&&e[t][n].from)+" of shared singleton module "+t+" (required "+r(a)+")")(e,i,d,u)),s(e[i][d])},o=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},s=e=>(e.loaded=1,e.get()),u=(e=>function(r,t,n,a){var o=i.I(r);return o&&o.then?o.then(e.bind(e,r,i.S[r],t,n,a)):e(r,i.S[r],t,n,a)})(((e,r,t,n,o)=>r&&i.o(r,t)?a(r,0,t,n):o())),d={},l={416:()=>u("default","react",[1,18,2,0],(()=>i.e(294).then((()=>()=>i(294))))),51:()=>u("default","react-dom",[1,18,2,0],(()=>i.e(935).then((()=>()=>i(935)))))},f={416:[416],457:[51]};i.f.consumes=(e,r)=>{i.o(f,e)&&f[e].forEach((e=>{if(i.o(d,e))return r.push(d[e]);var t=r=>{d[e]=0,i.m[e]=t=>{delete i.c[e],t.exports=r()}},n=r=>{delete d[e],i.m[e]=t=>{throw delete i.c[e],r}};try{var a=l[e]();a.then?r.push(d[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))}})(),(()=>{var e={179:0};i.f.j=(r,t)=>{var n=i.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(416!=r){var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=i.p+i.u(r),s=new Error;i.l(o,(t=>{if(i.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,a,[o,s,u]=t,d=0;if(o.some((r=>0!==e[r]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);u&&u(i)}for(r&&r(t);d<o.length;d++)a=o[d],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkhost=self.webpackChunkhost||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),i.nc=void 0,i(579)})();