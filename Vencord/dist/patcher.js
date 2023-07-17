// Vencord f785aa1
// Standalone: true
// Platform: Universal
"use strict";var rr=Object.create;var De=Object.defineProperty;var tr=Object.getOwnPropertyDescriptor;var ir=Object.getOwnPropertyNames;var ar=Object.getPrototypeOf,or=Object.prototype.hasOwnProperty;var v=(e,n)=>()=>(e&&(n=e(e=0)),n);var Xe=(e,n,r,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of ir(n))!or.call(e,i)&&i!==r&&De(e,i,{get:()=>n[i],enumerable:!(t=tr(n,i))||t.enumerable});return e};var Re=(e,n,r)=>(r=e!=null?rr(ar(e)):{},Xe(n||!e||!e.__esModule?De(r,"default",{value:e,enumerable:!0}):r,e)),Je=e=>Xe(De({},"__esModule",{value:!0}),e);var f=v(()=>{"use strict"});var oe,Ne=v(()=>{f();oe="f785aa1"});var q,ze=v(()=>{f();q="Vendicated/Vencord"});var Qe,$e=v(()=>{"use strict";f();Ne();ze();Qe=`Vencord/${oe}${q?` (https://github.com/${q})`:""}`});var ve=v(()=>{"use strict";f()});function Y(e,n={}){return new Promise((r,t)=>{en.default.get(e,n,i=>{let{statusCode:a,statusMessage:s,headers:c}=i;if(a>=400)return void t(`${a}: ${s} - ${e}`);if(a>=300)return void r(Y(c.location,n));let o=[];i.on("error",t),i.on("data",u=>o.push(u)),i.once("end",()=>r(Buffer.concat(o)))})})}var en,Oe=v(()=>{"use strict";f();en=Re(require("https"))});function se(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(n){return{ok:!1,error:n instanceof Error?{...n}:n}}}}var nn,rn=v(()=>{"use strict";f();nn=["patcher.js","preload.js","renderer.js","renderer.css"]});var fr={};async function sn(e){return Y(sr+e,{headers:{Accept:"application/vnd.github+json","User-Agent":Qe}})}async function cr(){if(!await cn())return[];let n=await sn(`/compare/${oe}...HEAD`);return JSON.parse(n.toString("utf-8")).commits.map(t=>({hash:t.sha.slice(0,7),author:t.author.login,message:t.commit.message}))}async function cn(){let e=await sn("/releases/latest"),n=JSON.parse(e.toString());return n.name.slice(n.name.lastIndexOf(" ")+1)===oe?!1:(n.assets.forEach(({name:t,browser_download_url:i})=>{nn.some(a=>t.startsWith(a))&&Pe.push([t,i])}),!0)}async function ur(){return await Promise.all(Pe.map(async([e,n])=>(0,an.writeFile)((0,on.join)(__dirname,e),await Y(n)))),Pe=[],!0}var ce,an,on,sr,Pe,un=v(()=>{"use strict";f();$e();ve();ce=require("electron"),an=require("fs/promises"),on=require("path");Ne();ze();Oe();rn();sr=`https://api.github.com/repos/${q}`,Pe=[];ce.ipcMain.handle("VencordGetRepo",se(()=>`https://github.com/${q}`));ce.ipcMain.handle("VencordGetUpdates",se(cr));ce.ipcMain.handle("VencordUpdate",se(cn));ce.ipcMain.handle("VencordBuild",se(ur))});var fn=v(()=>{"use strict";f();Promise.resolve().then(()=>un())});function gn(e){return new Promise((n,r)=>{let t=(0,hn.request)(new URL(e),{method:"HEAD"},i=>{n(i.headers.location?gn(i.headers.location):e)});t.on("error",r),t.end()})}var ln,hn,lr,pn=v(()=>{"use strict";f();ve();ln=require("electron"),hn=require("https"),lr=/^https:\/\/(spotify\.link|s\.team)\/.+$/;ln.ipcMain.handle("VencordOIAResolveRedirect",async(e,n)=>lr.test(n)?gn(n):n)});function vn(e,n=300){let r;return function(...t){clearTimeout(r),r=setTimeout(()=>{e(...t)},n)}}var mn=v(()=>{"use strict";f()});var ue,In=v(()=>{"use strict";f();ue=class{constructor(n=1/0){this.maxSize=n}queue=[];promise;next(){let n=this.queue.shift();n?this.promise=Promise.resolve().then(n).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(n){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(n),this.run()}unshift(n){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(n),this.run()}get size(){return this.queue.length}}});var Cn,An=v(()=>{f();Cn="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzcuMS9taW4vdnMvZWRpdG9yL2VkaXRvci5tYWluLm1pbi5jc3MiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLXdCM3hmTDk4aFdnMWJwa1ZZU3lMMGpzL0p4OXM3RnNEZzlhWU82bk9NU0pUZ1B1ay9QRnF4WFFKS0tTVWp0ZVpqZVlyZmdvOU5GQk9BMXI5SHdEdVp3PT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICAvPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgaHRtbCwKICAgICAgICAgICAgYm9keSwKICAgICAgICAgICAgI2NvbnRhaW5lciB7CiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgICAgICBsZWZ0OiAwOwogICAgICAgICAgICAgICAgdG9wOiAwOwogICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgICAgICAgfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2hlYWQ+CgogICAgPGJvZHk+CiAgICAgICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgICAgICA8c2NyaXB0CiAgICAgICAgICAgIHNyYz0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjM3LjEvbWluL3ZzL2xvYWRlci5taW4uanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLUErNlN2UEdrSU45UmYwbVVYbVc0eGg3ckR2QUxYZi9mMFZ0T1VpSGxEVVNQa251MmtjZnoxS3pMcE9KeUwycE8rblpTMTNoaElqTHFWZ2lRRXhMSnJ3PT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICA+PC9zY3JpcHQ+CgogICAgICAgIDxzY3JpcHQ+CiAgICAgICAgICAgIHJlcXVpcmUuY29uZmlnKHsKICAgICAgICAgICAgICAgIHBhdGhzOiB7CiAgICAgICAgICAgICAgICAgICAgdnM6ICJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzcuMS9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo="});var dn,X,ke,fe,J,Ue,yn,me,le=v(()=>{"use strict";f();dn=require("electron"),X=require("path"),ke=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,X.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,X.join)(dn.app.getPath("userData"),"..","Vencord")),fe=(0,X.join)(ke,"settings"),J=(0,X.join)(fe,"quickCss.css"),Ue=(0,X.join)(fe,"settings.json"),yn=["https:","http:","steam:","spotify:","com.epicgames.launcher:"],me=process.argv.includes("--vanilla")});function xn(){return(0,_.readFile)(J,"utf-8").catch(()=>"")}function Sn(){try{return(0,Q.readFileSync)(Ue,"utf-8")}catch{return"{}"}}function Ie(){try{return JSON.parse(Sn())}catch{return{}}}function Tn(e){(0,_.open)(J,"a+").then(n=>{n.close(),(0,Q.watch)(J,{persistent:!1},vn(async()=>{e.webContents.postMessage("VencordQuickCssUpdate",await xn())},50))})}var d,Q,_,wn,hr,gr,Ge=v(()=>{"use strict";f();fn();pn();mn();ve();In();d=require("electron"),Q=require("fs"),_=require("fs/promises"),wn=require("path");An();le();(0,Q.mkdirSync)(fe,{recursive:!0});d.ipcMain.handle("VencordOpenQuickCss",()=>d.shell.openPath(J));d.ipcMain.handle("VencordOpenExternal",(e,n)=>{try{var{protocol:r}=new URL(n)}catch{throw"Malformed URL"}if(!yn.includes(r))throw"Disallowed protocol.";d.shell.openExternal(n)});hr=new ue,gr=new ue;d.ipcMain.handle("VencordGetQuickCss",()=>xn());d.ipcMain.handle("VencordSetQuickCss",(e,n)=>hr.push(()=>(0,_.writeFile)(J,n)));d.ipcMain.handle("VencordGetSettingsDir",()=>fe);d.ipcMain.on("VencordGetSettings",e=>e.returnValue=Sn());d.ipcMain.handle("VencordSetSettings",(e,n)=>{gr.push(()=>(0,_.writeFile)(Ue,n))});d.ipcMain.handle("VencordOpenMonacoEditor",async()=>{await new d.BrowserWindow({title:"Vencord QuickCSS Editor",autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,wn.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}}).loadURL(`data:text/html;base64,${Cn}`)})});function Hn(e,n,r){let t=n;if(n in e)return void r(e[t]);Object.defineProperty(e,n,{set(i){delete e[t],e[t]=i,r(i)},configurable:!0,enumerable:!1})}var qn=v(()=>{"use strict";f()});var Gr={};function kr(e,n){let r=e.slice(4).split(".").map(Number),t=n.slice(4).split(".").map(Number);for(let i=0;i<t.length;i++){if(r[i]>t[i])return!0;if(r[i]<t[i])return!1}return!1}function Xn(){try{let e=(0,w.dirname)(process.execPath),n=(0,w.basename)(e),r=(0,w.join)(e,".."),t=(0,x.readdirSync)(r).reduce((c,o)=>o.startsWith("app-")&&kr(o,c)?o:c,n);if(t===n)return;let i=(0,w.join)(r,t,"resources"),a=(0,w.join)(i,"app.asar"),s=(0,w.join)(i,"_app.asar");if(!(0,x.existsSync)(a)||(0,x.statSync)(a).isDirectory())return;console.info("[Vencord] Detected Host Update. Repatching..."),(0,x.renameSync)(a,s),(0,x.mkdirSync)(a),(0,x.writeFileSync)((0,w.join)(a,"package.json"),JSON.stringify({name:"discord",main:"index.js"})),(0,x.writeFileSync)((0,w.join)(a,"index.js"),`require(${JSON.stringify((0,w.join)(__dirname,"patcher.js"))});`)}catch(e){console.error("[Vencord] Failed to repatch latest host update",e)}}function Ur(){try{let e=(0,w.join)(require.main.filename,"..","autoStart","win32.js"),{update:n}=require(e);require.cache[e].exports.update=function(){n.apply(this,arguments),Xn()}}catch{let{quitAndInstall:e}=j.autoUpdater;j.autoUpdater.quitAndInstall=function(){Xn(),e.call(this)}}}var j,x,w,Yn,Jn=v(()=>{"use strict";f();j=require("electron"),x=require("fs"),w=require("path"),{setAppUserModelId:Yn}=j.app;j.app.setAppUserModelId=function(e){j.app.setAppUserModelId=Yn,Yn.call(this,e),Ur()}});var Lr={};var R,W,Vr,Mr,Fe,Wr,Qn=v(()=>{"use strict";f();qn();R=Re(require("electron")),W=require("path");Ge();le();console.log("[Vencord] Starting up...");Vr=require.main.filename,Mr=require.main.path.endsWith("app.asar")?"_app.asar":"app.asar",Fe=(0,W.join)((0,W.dirname)(Vr),"..",Mr),Wr=require((0,W.join)(Fe,"package.json"));require.main.filename=(0,W.join)(Fe,Wr.main);R.app.setAppPath(Fe);if(me)console.log("[Vencord] Running in vanilla mode. Not loading Vencord");else{let e=Ie();if(process.platform==="win32"&&(Jn(),e.winCtrlQ)){let t=R.Menu.buildFromTemplate;R.Menu.buildFromTemplate=function(i){if(i[0]?.label==="&File"){let{submenu:a}=i[0];Array.isArray(a)&&a.push({label:"Quit (Hidden)",visible:!1,acceleratorWorksWhenHidden:!0,accelerator:"Control+Q",click:()=>R.app.quit()})}return t.call(this,i)}}class n extends R.default.BrowserWindow{constructor(i){if(i?.webPreferences?.preload&&i.title){let a=i.webPreferences.preload;i.webPreferences.preload=(0,W.join)(__dirname,"preload.js"),i.webPreferences.sandbox=!1,e.frameless?i.frame=!1:process.platform==="win32"&&e.winNativeTitleBar&&delete i.frame,e.transparentUNSAFE_USE_AT_OWN_RISK&&(i.transparent=!0,i.backgroundColor="#00000000"),e.macosTranslucency&&process.platform==="darwin"&&(i.backgroundColor="#00000000",i.vibrancy="sidebar"),process.env.DISCORD_PRELOAD=a,super(i),Tn(this)}else super(i)}}Object.assign(n,R.default.BrowserWindow),Object.defineProperty(n,"name",{value:"BrowserWindow",configurable:!0});let r=require.resolve("electron");delete require.cache[r].exports,require.cache[r].exports={...R.default,BrowserWindow:n},Hn(global,"appSettings",t=>{t.set("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING",!0),e.disableMinSize?(t.set("MIN_WIDTH",0),t.set("MIN_HEIGHT",0)):(t.set("MIN_WIDTH",940),t.set("MIN_HEIGHT",500))}),process.env.DATA_DIR=(0,W.join)(R.app.getPath("userData"),"..","Vencord")}console.log("[Vencord] Loading original Discord app.asar");require(require.main.filename)});f();var F=require("electron"),$n=require("path");Ge();le();f();var Kn=require("electron");f();var Rn=require("module"),pr=(0,Rn.createRequire)("/"),Ae,vr=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{Ae=pr("worker_threads").Worker}catch{}var mr=Ae?function(e,n,r,t,i){var a=!1,s=new Ae(e+vr,{eval:!0}).on("error",function(c){return i(c,null)}).on("message",function(c){return i(null,c)}).on("exit",function(c){c&&!a&&i(new Error("exited with code "+c),null)});return s.postMessage(r,t),s.terminate=function(){return a=!0,Ae.prototype.terminate.call(s)},s}:function(e,n,r,t,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var a=function(){};return{terminate:a,postMessage:a}},A=Uint8Array,M=Uint16Array,We=Uint32Array,Le=new A([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ze=new A([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Nn=new A([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),zn=function(e,n){for(var r=new M(31),t=0;t<31;++t)r[t]=n+=1<<e[t-1];for(var i=new We(r[30]),t=1;t<30;++t)for(var a=r[t];a<r[t+1];++a)i[a]=a-r[t]<<5|t;return[r,i]},On=zn(Le,2),_e=On[0],Ir=On[1];_e[28]=258,Ir[258]=28;var Pn=zn(Ze,0),kn=Pn[0],Nt=Pn[1],we=new M(32768);for(l=0;l<32768;++l)P=(l&43690)>>>1|(l&21845)<<1,P=(P&52428)>>>2|(P&13107)<<2,P=(P&61680)>>>4|(P&3855)<<4,we[l]=((P&65280)>>>8|(P&255)<<8)>>>1;var P,l,$=function(e,n,r){for(var t=e.length,i=0,a=new M(n);i<t;++i)e[i]&&++a[e[i]-1];var s=new M(n);for(i=0;i<n;++i)s[i]=s[i-1]+a[i-1]<<1;var c;if(r){c=new M(1<<n);var o=15-n;for(i=0;i<t;++i)if(e[i])for(var u=i<<4|e[i],h=n-e[i],m=s[e[i]-1]++<<h,E=m|(1<<h)-1;m<=E;++m)c[we[m]>>>o]=u}else for(c=new M(t),i=0;i<t;++i)e[i]&&(c[i]=we[s[e[i]-1]++]>>>15-e[i]);return c},he=new A(288);for(l=0;l<144;++l)he[l]=8;var l;for(l=144;l<256;++l)he[l]=9;var l;for(l=256;l<280;++l)he[l]=7;var l;for(l=280;l<288;++l)he[l]=8;var l,Un=new A(32);for(l=0;l<32;++l)Un[l]=5;var l;var Gn=$(he,9,1);var Vn=$(Un,5,1),de=function(e){for(var n=e[0],r=1;r<e.length;++r)e[r]>n&&(n=e[r]);return n},T=function(e,n,r){var t=n/8|0;return(e[t]|e[t+1]<<8)>>(n&7)&r},ye=function(e,n){var r=n/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(n&7)},Mn=function(e){return(e+7)/8|0},xe=function(e,n,r){(n==null||n<0)&&(n=0),(r==null||r>e.length)&&(r=e.length);var t=new(e.BYTES_PER_ELEMENT==2?M:e.BYTES_PER_ELEMENT==4?We:A)(r-n);return t.set(e.subarray(n,r)),t};var Wn=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],y=function(e,n,r){var t=new Error(n||Wn[e]);if(t.code=e,Error.captureStackTrace&&Error.captureStackTrace(t,y),!r)throw t;return t},Ln=function(e,n,r){var t=e.length;if(!t||r&&r.f&&!r.l)return n||new A(0);var i=!n||r,a=!r||r.i;r||(r={}),n||(n=new A(t*3));var s=function(He){var qe=n.length;if(He>qe){var Ye=new A(Math.max(qe*2,He));Ye.set(n),n=Ye}},c=r.f||0,o=r.p||0,u=r.b||0,h=r.l,m=r.d,E=r.m,k=r.n,ne=t*8;do{if(!h){c=T(e,o,1);var L=T(e,o+1,3);if(o+=3,L)if(L==1)h=Gn,m=Vn,E=9,k=5;else if(L==2){var G=T(e,o,31)+257,K=T(e,o+10,15)+4,re=G+T(e,o+5,31)+1;o+=14;for(var Z=new A(re),te=new A(19),C=0;C<K;++C)te[Nn[C]]=T(e,o+C*3,7);o+=K*3;for(var O=de(te),ge=(1<<O)-1,B=$(te,O,1),C=0;C<re;){var ie=B[T(e,o,ge)];o+=ie&15;var I=ie>>>4;if(I<16)Z[C++]=I;else{var b=0,pe=0;for(I==16?(pe=3+T(e,o,3),o+=2,b=Z[C-1]):I==17?(pe=3+T(e,o,7),o+=3):I==18&&(pe=11+T(e,o,127),o+=7);pe--;)Z[C++]=b}}var Ke=Z.subarray(0,G),V=Z.subarray(G);E=de(Ke),k=de(V),h=$(Ke,E,1),m=$(V,k,1)}else y(1);else{var I=Mn(o)+4,S=e[I-4]|e[I-3]<<8,U=I+S;if(U>t){a&&y(0);break}i&&s(u+S),n.set(e.subarray(I,U),u),r.b=u+=S,r.p=o=U*8,r.f=c;continue}if(o>ne){a&&y(0);break}}i&&s(u+131072);for(var er=(1<<E)-1,nr=(1<<k)-1,Se=o;;Se=o){var b=h[ye(e,o)&er],H=b>>>4;if(o+=b&15,o>ne){a&&y(0);break}if(b||y(2),H<256)n[u++]=H;else if(H==256){Se=o,h=null;break}else{var Be=H-254;if(H>264){var C=H-257,ae=Le[C];Be=T(e,o,(1<<ae)-1)+_e[C],o+=ae}var Te=m[ye(e,o)&nr],Ee=Te>>>4;Te||y(3),o+=Te&15;var V=kn[Ee];if(Ee>3){var ae=Ze[Ee];V+=ye(e,o)&(1<<ae)-1,o+=ae}if(o>ne){a&&y(0);break}i&&s(u+131072);for(var be=u+Be;u<be;u+=4)n[u]=n[u-V],n[u+1]=n[u+1-V],n[u+2]=n[u+2-V],n[u+3]=n[u+3-V];u=be}}r.l=h,r.p=Se,r.b=u,r.f=c,h&&(c=1,r.m=E,r.d=m,r.n=k)}while(!c);return u==n.length?n:xe(n,0,u)};var Cr=new A(0);var Ar=function(e,n){var r={};for(var t in e)r[t]=e[t];for(var t in n)r[t]=n[t];return r},En=function(e,n,r){for(var t=e(),i=e.toString(),a=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<t.length;++s){var c=t[s],o=a[s];if(typeof c=="function"){n+=";"+o+"=";var u=c.toString();if(c.prototype)if(u.indexOf("[native code]")!=-1){var h=u.indexOf(" ",8)+1;n+=u.slice(h,u.indexOf("(",h))}else{n+=u;for(var m in c.prototype)n+=";"+o+".prototype."+m+"="+c.prototype[m].toString()}else n+=u}else r[o]=c}return[n,r]},Ce=[],dr=function(e){var n=[];for(var r in e)e[r].buffer&&n.push((e[r]=new e[r].constructor(e[r])).buffer);return n},yr=function(e,n,r,t){var i;if(!Ce[r]){for(var a="",s={},c=e.length-1,o=0;o<c;++o)i=En(e[o],a,s),a=i[0],s=i[1];Ce[r]=En(e[c],a,s)}var u=Ar({},Ce[r][1]);return mr(Ce[r][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+n.toString()+"}",r,u,dr(u),t)},wr=function(){return[A,M,We,Le,Ze,Nn,_e,kn,Gn,Vn,we,Wn,$,de,T,ye,Mn,xe,y,Ln,je,Zn,_n]};var Zn=function(e){return postMessage(e,[e.buffer])},_n=function(e){return e&&e.size&&new A(e.size)},xr=function(e,n,r,t,i,a){var s=yr(r,t,i,function(c,o){s.terminate(),a(c,o)});return s.postMessage([e,n],n.consume?[e.buffer]:[]),function(){s.terminate()}};var N=function(e,n){return e[n]|e[n+1]<<8},D=function(e,n){return(e[n]|e[n+1]<<8|e[n+2]<<16|e[n+3]<<24)>>>0},Ve=function(e,n){return D(e,n)+D(e,n+4)*4294967296};function Sr(e,n,r){return r||(r=n,n={}),typeof r!="function"&&y(7),xr(e,n,[wr],function(t){return Zn(je(t.data[0],_n(t.data[1])))},1,r)}function je(e,n){return Ln(e,n)}var Me=typeof TextDecoder<"u"&&new TextDecoder,Tr=0;try{Me.decode(Cr,{stream:!0}),Tr=1}catch{}var Er=function(e){for(var n="",r=0;;){var t=e[r++],i=(t>127)+(t>223)+(t>239);if(r+i>e.length)return[n,xe(e,r-1)];i?i==3?(t=((t&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,n+=String.fromCharCode(55296|t>>10,56320|t&1023)):i&1?n+=String.fromCharCode((t&31)<<6|e[r++]&63):n+=String.fromCharCode((t&15)<<12|(e[r++]&63)<<6|e[r++]&63):n+=String.fromCharCode(t)}};function Dr(e,n){if(n){for(var r="",t=0;t<e.length;t+=16384)r+=String.fromCharCode.apply(null,e.subarray(t,t+16384));return r}else{if(Me)return Me.decode(e);var i=Er(e),a=i[0],s=i[1];return s.length&&y(8),a}}var Rr=function(e,n){return n+30+N(e,n+26)+N(e,n+28)},Nr=function(e,n,r){var t=N(e,n+28),i=Dr(e.subarray(n+46,n+46+t),!(N(e,n+8)&2048)),a=n+46+t,s=D(e,n+20),c=r&&s==4294967295?zr(e,a):[s,D(e,n+24),D(e,n+42)],o=c[0],u=c[1],h=c[2];return[N(e,n+10),o,u,i,a+N(e,n+30)+N(e,n+32),h]},zr=function(e,n){for(;N(e,n)!=1;n+=4+N(e,n+2));return[Ve(e,n+12),Ve(e,n+4),Ve(e,n+20)]};var Dn=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function jn(e,n,r){r||(r=n,n={}),typeof r!="function"&&y(7);var t=[],i=function(){for(var I=0;I<t.length;++I)t[I]()},a={},s=function(I,S){Dn(function(){r(I,S)})};Dn(function(){s=r});for(var c=e.length-22;D(e,c)!=101010256;--c)if(!c||e.length-c>65558)return s(y(13,0,1),null),i;var o=N(e,c+8);if(o){var u=o,h=D(e,c+16),m=h==4294967295||u==65535;if(m){var E=D(e,c-12);m=D(e,E)==101075792,m&&(u=o=D(e,E+32),h=D(e,E+48))}for(var k=n&&n.filter,ne=function(I){var S=Nr(e,h,m),U=S[0],G=S[1],K=S[2],re=S[3],Z=S[4],te=S[5],C=Rr(e,te);h=Z;var O=function(B,ie){B?(i(),s(B,null)):(ie&&(a[re]=ie),--o||s(null,a))};if(!k||k({name:re,size:G,originalSize:K,compression:U}))if(!U)O(null,xe(e,C,C+G));else if(U==8){var ge=e.subarray(C,C+G);if(G<32e4)try{O(null,je(ge,new A(K)))}catch(B){O(B,null)}else t.push(Sr(ge,{size:K},O))}else O(y(14,"unknown compression type "+U,1),null);else O(null,null)},L=0;L<u;++L)ne(L)}else s(null,{});return i}var Bn=require("fs"),z=require("fs/promises"),ee=require("path");le();f();function Fn(e){function n(s,c,o,u){let h=0;return h+=s<<0,h+=c<<8,h+=o<<16,h+=u<<24>>>0,h}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=e[4]===3,t=e[4]===2;if(!t&&!r||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(t){let s=n(e[8],e[9],e[10],e[11]),c=n(e[12],e[13],e[14],e[15]),o=16+s+c;return e.subarray(o,e.length)}let a=12+n(e[8],e[9],e[10],e[11]);return e.subarray(a,e.length)}Oe();var Or=(0,ee.join)(ke,"ExtensionCache");async function Pr(e,n){return await(0,z.mkdir)(n,{recursive:!0}),new Promise((r,t)=>{jn(e,(i,a)=>{if(i)return void t(i);Promise.all(Object.keys(a).map(async s=>{if(s.startsWith("_metadata/"))return;if(s.endsWith("/"))return void(0,z.mkdir)((0,ee.join)(n,s),{recursive:!0});let c=s.split("/"),o=c.pop(),u=c.join("/"),h=(0,ee.join)(n,u);u&&await(0,z.mkdir)(h,{recursive:!0}),await(0,z.writeFile)((0,ee.join)(h,o),a[s])})).then(()=>r()).catch(s=>{(0,z.rm)(n,{recursive:!0,force:!0}),t(s)})})})}async function bn(e){let n=(0,ee.join)(Or,`${e}`);try{await(0,z.access)(n,Bn.constants.F_OK)}catch{let t=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await Y(t,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await Pr(Fn(i),n).catch(console.error)}Kn.session.defaultSession.loadExtension(n)}me||F.app.whenReady().then(()=>{F.protocol.registerFileProtocol("vencord",({url:t},i)=>{let a=t.slice(10);switch(a.endsWith("/")&&(a=a.slice(0,-1)),a){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":i((0,$n.join)(__dirname,a));break;default:i({statusCode:403})}});try{Ie().enableReactDevtools&&bn("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(t=>console.error("[Vencord] Failed to install React Developer Tools",t))}catch{}let e=t=>{let i={};return t.split(";").forEach(a=>{let[s,...c]=a.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(i,s)&&(i[s]=c)}),i},n=t=>Object.entries(t).filter(([,i])=>i?.length).map(i=>i.flat().join(" ")).join("; ");function r(t,i){if(i in t){let a=e(t[i][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])a[s]=["*","blob:","data:","'unsafe-inline'"];a["script-src"]??=[],a["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),t[i]=[n(a)]}}F.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:t,resourceType:i},a)=>{t&&(i==="mainFrame"&&r(t,"content-security-policy"),i==="stylesheet"&&(t["content-type"]=["text/css"])),a({cancel:!1,responseHeaders:t})}),F.session.defaultSession.webRequest.onHeadersReceived=()=>{}});Qn();
//# sourceURL=VencordPatcher
//# sourceMappingURL=vencord://patcher.js.map
/*! For license information please see patcher.js.LEGAL.txt */
