(function(e){function t(t){for(var o,r,i=t[0],l=t[1],u=t[2],d=0,b=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);s&&s(t);while(b.length)b.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==c[l]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},c={app:0},a=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1b1d":function(e,t,n){"use strict";n("de10")},"1f02":function(e,t,n){"use strict";n("d322")},2881:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c=n("87e8"),a=n.n(c),r=(n("e1ae"),n("098b"),n("4121"),n("bddf"),{id:"app"}),i={class:"p-grid vertical-container"},l={class:"p-col p-as-center"},u=Object(o["createVNode"])("img",{alt:"logo",src:"venom-logo.jpg",height:"40",class:"p-mr-2"},null,-1),s=Object(o["createTextVNode"])(" © by Venom Linux ");function d(e,t,n,c,a,d){var b=Object(o["resolveComponent"])("Menubar"),p=Object(o["resolveComponent"])("router-view"),m=Object(o["resolveComponent"])("Button");return Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[Object(o["createVNode"])("div",i,[Object(o["createVNode"])("div",l,[Object(o["createVNode"])(b,{model:a.items},{start:Object(o["withCtx"])((function(){return[u]})),_:1},8,["model"]),Object(o["createVNode"])(p),Object(o["createVNode"])(b,{class:"footer"},{start:Object(o["withCtx"])((function(){return[s]})),end:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(m,{type:"button",icon:"pi pi-github",class:"p-button-secondary",onClick:t[1]||(t[1]=function(e){return d.open("https://github.com/venomlinux")}),style:{"margin-right":".5em","background-color":"#363636"}}),Object(o["createVNode"])(m,{type:"button",icon:"pi pi-facebook",class:"p-button-secondary",style:{"margin-right":".5em","background-color":"#363636"},onClick:t[2]||(t[2]=function(e){return d.open("https://www.facebook.com/groups/venomlinux")})}),Object(o["createVNode"])(m,{type:"button",icon:"pi pi-twitter",class:"p-button-secondary",style:{"margin-right":".5em","background-color":"#363636"},onClick:t[3]||(t[3]=function(e){return d.open("https://twitter.com/venomlinux")})})]})),_:1})])])])}var b={data:function(){return{items:[{label:"Start",icon:"pi pi-home",to:"/"},{label:"About",icon:"pi pi-info-circle",to:"/about"},{label:"Download",icon:"pi pi-download",to:"/download"},{label:"Packages",icon:"pi pi-inbox",to:"/packages"},{label:"Stats",icon:"pi pi-star",to:"/stats"},{label:"Donate",icon:"pi pi-wallet",to:"/donate"},{label:"Wiki",icon:"pi pi-book",url:"https://github.com/venomlinux/ports/wiki"},{label:"Community",icon:"pi pi-comment",to:"/community"},{label:"Team",icon:"pi pi-users",to:"/team"}]}},methods:{open:function(e){window.open(e,"_blank")}}};n("cc6b");b.render=d;var p=b,m=n("6c02"),f=n("a323"),j=n.n(f),O=Object(o["createTextVNode"])(" Venom Linux "),h=Object(o["createVNode"])("div",{style:{"text-align":"center"}},[Object(o["createVNode"])("img",{src:j.a,alt:"screen",style:{width:"100%","max-width":"680px","border-radius":"5px"}})],-1),g=Object(o["createVNode"])("p",null," Venom Linux is a lightweight source-based Linux® distribution for the x86-64 architecture and targeted experienced users. This distro is built from scratch independently then grown to make it suitable for daily use. This distro is inspired by CRUX because of its simplicity and KISS philosophy. ",-1),V=Object(o["createVNode"])("p",null,[Object(o["createVNode"])("strong",null,"Venom Linux"),Object(o["createTextVNode"])(" uses BSD-style init as main init and a BSD-like ports system for packages. Packages are managed by its own package manager, called scratchpkg, that has dependency checking and is fully written in POSIX sh. ")],-1);function x(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("Card");return Object(o["openBlock"])(),Object(o["createBlock"])(i,{style:{"margin-bottom":"1em","margin-top":"1em"}},{title:Object(o["withCtx"])((function(){return[O]})),content:Object(o["withCtx"])((function(){return[h,g,V]})),_:1})}var v={};v.render=x;var N=v,w=Object(o["createTextVNode"])(" About"),y=Object(o["createTextVNode"])(" Venom Linux is a source-based Linux® distribution originating from Malaysia that targets experienced users. This distro is inspired by CRUX because of its simplicity and its KISS philosophy. Venom Linux uses simple tar compressed packages, a ports system, custom BSD-style init and a collection of small packages which are trimmed down by removed unnecessary things like locale, doc, gtk-doc, info pages (man pages are kept), etc. Venom Linux uses a custom package manager, which is fully written in POSIX shell script, for installing, upgrading and removing packages. Venom Linux features: "),k=Object(o["createVNode"])("ul",null,[Object(o["createVNode"])("li",null,"Package build script in the style of BSD's ports."),Object(o["createVNode"])("li",null,"BSD-style init."),Object(o["createVNode"])("li",null,"Easy to write ports."),Object(o["createVNode"])("li",null,"Multilib support."),Object(o["createVNode"])("li",null,"Slim packages, trimmed by removing anything unnecessary.")],-1),C=Object(o["createTextVNode"])(" Thanks most of all to the small Venom Linux community that has helped us get here :D ");function T(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("Card");return Object(o["openBlock"])(),Object(o["createBlock"])(i,{style:{"margin-bottom":"1em","margin-top":"1em"}},{title:Object(o["withCtx"])((function(){return[w]})),content:Object(o["withCtx"])((function(){return[y,k,C]})),_:1})}var _={};_.render=T;var B=_,S=Object(o["createTextVNode"])(" Download"),D=Object(o["createVNode"])("strong",null,"Venom Linux",-1),A=Object(o["createTextVNode"])(" can be obtained from various sources. Choose the source and variant that suits you. "),P=Object(o["createVNode"])("br",null,null,-1),I=Object(o["createVNode"])("strong",null,"Venom Linux",-1),L=Object(o["createTextVNode"])(" users can use the "),M=Object(o["createVNode"])("code",null,"scratch",-1),z=Object(o["createTextVNode"])(" command to keep their "),U=Object(o["createVNode"])("strong",null,"Venom Linux",-1),F=Object(o["createTextVNode"])(" up to date, since "),K=Object(o["createVNode"])("strong",null,"Venom Linux",-1),J=Object(o["createTextVNode"])(" is a rolling release."),E=Object(o["createVNode"])("br",null,null,-1),R=Object(o["createVNode"])("br",null,null,-1),W=Object(o["createVNode"])("br",null,null,-1),X=Object(o["createVNode"])("br",null,null,-1),G=Object(o["createTextVNode"])(" username: venom "),q=Object(o["createVNode"])("br",null,null,-1),H=Object(o["createTextVNode"])(" password: venom "),Q=Object(o["createVNode"])("br",null,null,-1),Y=Object(o["createVNode"])("br",null,null,-1),Z=Object(o["createTextVNode"])(" username: root "),$=Object(o["createVNode"])("br",null,null,-1),ee=Object(o["createTextVNode"])(" password: root "),te=Object(o["createVNode"])("br",null,null,-1),ne=Object(o["createTextVNode"])("To install "),oe=Object(o["createVNode"])("strong",null,"Venom Linux",-1),ce=Object(o["createTextVNode"])(" run '"),ae=Object(o["createVNode"])("strong",null,"sudo venom-installer",-1),re=Object(o["createTextVNode"])("' on terminal/tty"),ie=Object(o["createTextVNode"])("If you like "),le=Object(o["createVNode"])("strong",null,"Venom Linux",-1),ue=Object(o["createTextVNode"])(", please "),se=Object(o["createVNode"])("a",{href:"http://distrowatch.org/dwres.php?waitingdistro=516&resource=links#new"},"recommend us on DistroWatch",-1),de=Object(o["createTextVNode"])("."),be=Object(o["createVNode"])("p",null,[Object(o["createTextVNode"])("Thanks for using "),Object(o["createVNode"])("strong",null,"Venom Linux"),Object(o["createTextVNode"])("!")],-1);function pe(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("Column"),l=Object(o["resolveComponent"])("Button"),u=Object(o["resolveComponent"])("DataTable"),s=Object(o["resolveComponent"])("Panel"),d=Object(o["resolveComponent"])("Fieldset"),b=Object(o["resolveComponent"])("Message"),p=Object(o["resolveComponent"])("Card");return Object(o["openBlock"])(),Object(o["createBlock"])(p,{style:{"margin-bottom":"1em","margin-top":"1em"}},{title:Object(o["withCtx"])((function(){return[S]})),content:Object(o["withCtx"])((function(){return[D,A,P,I,L,M,z,U,F,K,J,E,R,Object(o["createVNode"])(d,{legend:"Download"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(s,{header:"OSDN"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(u,{value:a.download_osdn},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(i,{field:"version",header:"Version"},{body:Object(o["withCtx"])((function(e){return[Object(o["createVNode"])("strong",null,Object(o["toDisplayString"])(e.data.version),1)]})),_:1}),Object(o["createVNode"])(i,{field:"download",header:"Download"},{body:Object(o["withCtx"])((function(e){return[Object(o["createVNode"])(l,{type:"button",label:"Download",icon:"pi pi-download",class:"p-button-info down",onClick:function(t){return r.open(e.data.download)}},null,8,["onClick"])]})),_:1}),Object(o["createVNode"])(i,{field:"md5",header:"Verify"},{body:Object(o["withCtx"])((function(e){return[Object(o["createVNode"])(l,{type:"button",label:"md5sum",icon:"pi pi-key",class:"p-button-secondary down",onClick:function(t){return r.open(e.data.md5)}},null,8,["onClick"])]})),_:1})]})),_:1},8,["value"])]})),_:1}),W,Object(o["createVNode"])(s,{header:"Sourceforge"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(u,{value:a.download_sourceforge},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(i,{field:"version",header:"Version"},{body:Object(o["withCtx"])((function(e){return[Object(o["createVNode"])("strong",null,Object(o["toDisplayString"])(e.data.version),1)]})),_:1}),Object(o["createVNode"])(i,{field:"download",header:"Download"},{body:Object(o["withCtx"])((function(e){return[Object(o["createVNode"])(l,{type:"button",label:"Download",icon:"pi pi-download",class:"p-button-info down",onClick:function(t){return r.open(e.data.download)}},null,8,["onClick"])]})),_:1}),Object(o["createVNode"])(i,{field:"md5",header:"MD5"},{body:Object(o["withCtx"])((function(e){return[Object(o["createVNode"])(l,{type:"button",label:"md5sum",icon:"pi pi-key",class:"p-button-secondary down",onClick:function(t){return r.open(e.data.md5)}},null,8,["onClick"])]})),_:1})]})),_:1},8,["value"])]})),_:1})]})),_:1}),X,Object(o["createVNode"])(d,{legend:"Login"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(s,{header:"normal user"},{default:Object(o["withCtx"])((function(){return[G,q,H,Q]})),_:1}),Y,Object(o["createVNode"])(s,{header:"privileged user"},{default:Object(o["withCtx"])((function(){return[Z,$,ee,te]})),_:1})]})),_:1}),Object(o["createVNode"])(b,{severity:"info",closable:!1},{default:Object(o["withCtx"])((function(){return[ne,oe,ce,ae,re]})),_:1}),Object(o["createVNode"])(b,{severity:"info",closable:!1},{default:Object(o["withCtx"])((function(){return[ie,le,ue,se,de]})),_:1}),be]})),_:1})}var me={data:function(){return{download_osdn:[{version:"A complete xfce4 desktop (ISO)",download:"https://osdn.net/dl/venomlinux/venomlinux-20201116.iso",md5:"https://osdn.net/dl/venomlinux/venomlinux-20201116.iso.md5"},{version:"A minimal base system (ISO)",download:"https://osdn.net/dl/venomlinux/venomlinux-base-20201124.iso",md5:"https://osdn.net/dl/venomlinux/venomlinux-base-20201124.iso.md5"},{version:"A tarball of the rootfs (tar.xz)",download:"https://osdn.net/dl/venomlinux/venomlinux-rootfs.tar.xz",md5:"https://osdn.net/dl/venomlinux/venomlinux-rootfs.tar.xz.md5"}],download_sourceforge:[{version:"A complete xfce4 desktop (ISO)",download:"https://sourceforge.net/projects/venomlinux/files/202011/venomlinux-base-20201124.iso/download",md5:"https://sourceforge.net/projects/venomlinux/files/202011/venomlinux-base-20201124.iso/download"},{version:"A minimal base system (ISO)",download:"https://sourceforge.net/projects/venomlinux/files/202011/venomlinux-base-20201124.iso/download",md5:"https://sourceforge.net/projects/venomlinux/files/202011/venomlinux-base-20201124.iso/download"},{version:"A tarball of the rootfs (tar.xz)",download:"https://sourceforge.net/projects/venomlinux/files/202011/venomlinux-rootfs.tar.xz/download",md5:"https://sourceforge.net/projects/venomlinux/files/202011/venomlinux-rootfs.tar.xz.md5/download"}]}},methods:{open:function(e){window.open(e,"_blank")}}};n("caad");me.render=pe;var fe=me,je=Object(o["createTextVNode"])(" Donate"),Oe=Object(o["createVNode"])("p",null,[Object(o["createTextVNode"])(" A lot of work and free time goes into VenomLinux."),Object(o["createVNode"])("br"),Object(o["createTextVNode"])(" We would therefore be pleased if you would like to finance us by making a small donation. ")],-1),he=Object(o["createVNode"])("p",null," To support the work from Malte as package maintainer, click on the Liberapay button. ",-1),ge=Object(o["createVNode"])("p",null,"Thanks!",-1),Ve=Object(o["createVNode"])("br",null,null,-1);function xe(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("Button"),l=Object(o["resolveComponent"])("Fieldset"),u=Object(o["resolveComponent"])("Card"),s=Object(o["resolveComponent"])("Toast");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(u,{style:{"margin-bottom":"1em","margin-top":"1em"}},{title:Object(o["withCtx"])((function(){return[je]})),content:Object(o["withCtx"])((function(){return[Oe,he,ge]})),footer:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(l,{legend:"Support emmett1"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(i,{icon:"pi pi-paypal",label:"PayPal",onClick:t[1]||(t[1]=function(e){return r.open("https://paypal.me/syazwanemmett")}),class:"donateBtn"}),Object(o["createVNode"])(i,{icon:"pi pi-credit-card",label:"Liberapay",class:"p-button-warning donateBtn",style:{"margin-left":"0.5em"},onClick:t[2]||(t[2]=function(e){return r.open("https://liberapay.com/emmett1")})}),Object(o["createVNode"])(i,{icon:"pi pi-dollar",label:"BuyMeACoffee",class:"p-button-secondary donateBtn",style:{"margin-left":"0.5em"},onClick:t[3]||(t[3]=function(e){return r.open("https://buymeacoffee.com/venomlinux")})})]})),_:1}),Ve,Object(o["createVNode"])(l,{legend:"Support Malte"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(i,{icon:"pi pi-paypal",label:"PayPal",onClick:t[4]||(t[4]=function(e){return r.open("https://paypal.me/maltekiefer")}),class:"donateBtn"}),Object(o["createVNode"])(i,{icon:"pi pi-credit-card",label:"Liberapay",class:"p-button-warning donateBtn",style:{"margin-left":"0.5em"},onClick:t[5]||(t[5]=function(e){return r.open("https://liberapay.com/beli3ver")})})]})),_:1})]})),_:1}),Object(o["createVNode"])(s)],64)}var ve={methods:{open:function(e){window.open(e,"_blank")}}};n("1f02");ve.render=xe;var Ne=ve,we=Object(o["createTextVNode"])(" Team"),ye={class:"p-d-flex team-view"},ke={class:"p-mr-2"},Ce=Object(o["createVNode"])("img",{alt:"user header",src:"https://icotar.com/initials/Syazwan%20Emmett.png?s=400"},null,-1),Te=Object(o["createTextVNode"])(" Syazwan Emmett | Emmett1 (Malaysia) "),_e=Object(o["createTextVNode"])(" Lead Developer "),Be=Object(o["createVNode"])("p",null,"Emmett1 is the lead developer from the VenomLinux project.",-1),Se={class:"p-mr-2"},De=Object(o["createVNode"])("img",{alt:"user header",src:"https://www.gravatar.com/avatar/230048b8b5247c510b71a0e8b6ca9344?s=400&d=retro&r=g"},null,-1),Ae=Object(o["createTextVNode"])(" Malte Kiefer | beli3ver (Germany) "),Pe=Object(o["createTextVNode"])(" Package Maintainer "),Ie=Object(o["createVNode"])("p",null," beli3ver is the main package maintainer and the server administrator. ",-1),Le={class:"p-mr-2"},Me=Object(o["createVNode"])("img",{alt:"user header",src:"https://avatars.githubusercontent.com/u/47093017?s=400&u=a82d615befc113c35d90feb74abea40a00ffbe23&v=4"},null,-1),ze=Object(o["createTextVNode"])(" Mohammad Tanio | Tan (Indonesia) "),Ue=Object(o["createTextVNode"])(" Web Designer "),Fe=Object(o["createVNode"])("p",null," Tan is the web designer and is a part of the team since the beginning. ",-1),Ke={class:"p-mr-2"},Je=Object(o["createVNode"])("img",{alt:"user header",src:"https://icotar.com/initials/Jens%20Thys.png?s=400"},null,-1),Ee=Object(o["createTextVNode"])(" Jens Thys | Jens (France) "),Re=Object(o["createTextVNode"])(" Tester / Contributor "),We=Object(o["createVNode"])("p",null,"Jens is a contributor and a tester.",-1);function Xe(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("Button"),l=Object(o["resolveComponent"])("Card");return Object(o["openBlock"])(),Object(o["createBlock"])(l,{style:{"margin-bottom":"1em","margin-top":"1em"}},{title:Object(o["withCtx"])((function(){return[we]})),content:Object(o["withCtx"])((function(){return[Object(o["createVNode"])("div",ye,[Object(o["createVNode"])("div",ke,[Object(o["createVNode"])(l,{class:"team team-card"},{header:Object(o["withCtx"])((function(){return[Ce]})),title:Object(o["withCtx"])((function(){return[Te]})),subtitle:Object(o["withCtx"])((function(){return[_e]})),content:Object(o["withCtx"])((function(){return[Be]})),footer:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(i,{icon:"pi pi-envelope",label:"",onClick:t[1]||(t[1]=function(e){return r.mail("emmett1.2miligrams@gmail.com")})}),Object(o["createVNode"])(i,{icon:"pi pi-github",label:"",onClick:t[2]||(t[2]=function(e){return r.github("emmett1")}),class:"p-button-secondary",style:{"margin-left":".5em"}})]})),_:1})]),Object(o["createVNode"])("div",Se,[Object(o["createVNode"])(l,{class:"team team-card"},{header:Object(o["withCtx"])((function(){return[De]})),title:Object(o["withCtx"])((function(){return[Ae]})),subtitle:Object(o["withCtx"])((function(){return[Pe]})),content:Object(o["withCtx"])((function(){return[Ie]})),footer:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(i,{icon:"pi pi-envelope",label:"",onClick:t[3]||(t[3]=function(e){return r.mail("malte.kiefer@tuta.io")})}),Object(o["createVNode"])(i,{icon:"pi pi-github",label:"",onClick:t[4]||(t[4]=function(e){return r.github("maltekiefer")}),class:"p-button-secondary",style:{"margin-left":".5em"}}),Object(o["createVNode"])(i,{icon:"pi pi-globe",label:"",onClick:t[5]||(t[5]=function(e){return r.open("https://malte-kiefer.de")}),class:"p-button-success",style:{"margin-left":".5em"}})]})),_:1})]),Object(o["createVNode"])("div",Le,[Object(o["createVNode"])(l,{class:"team team-card"},{header:Object(o["withCtx"])((function(){return[Me]})),title:Object(o["withCtx"])((function(){return[ze]})),subtitle:Object(o["withCtx"])((function(){return[Ue]})),content:Object(o["withCtx"])((function(){return[Fe]})),footer:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(i,{icon:"pi pi-envelope",label:"",onClick:t[6]||(t[6]=function(e){return r.mail("tanmyid1337@gmail.com")})}),Object(o["createVNode"])(i,{icon:"pi pi-github",label:"",onClick:t[7]||(t[7]=function(e){return r.github("tanmyid")}),class:"p-button-secondary",style:{"margin-left":".5em"}}),Object(o["createVNode"])(i,{icon:"pi pi-globe",label:"",onClick:t[8]||(t[8]=function(e){return r.open("http://tanmyid.github.io")}),class:"p-button-success",style:{"margin-left":".5em"}})]})),_:1})]),Object(o["createVNode"])("div",Ke,[Object(o["createVNode"])(l,{class:"team team-card"},{header:Object(o["withCtx"])((function(){return[Je]})),title:Object(o["withCtx"])((function(){return[Ee]})),subtitle:Object(o["withCtx"])((function(){return[Re]})),content:Object(o["withCtx"])((function(){return[We]})),footer:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(i,{icon:"pi pi-envelope",label:"",onClick:t[9]||(t[9]=function(e){return r.mail("jens.thys@gmail.com")})}),Object(o["createVNode"])(i,{icon:"pi pi-github",label:"",onClick:t[10]||(t[10]=function(e){return r.github("daemonbsd56")}),class:"p-button-secondary",style:{"margin-left":".5em"}})]})),_:1})])])]})),_:1})}var Ge={methods:{github:function(e){window.open("https://github.com/"+e,"_blank")},mail:function(e){window.open("mailto:"+e)},open:function(e){window.open(e,"_blank")}}};n("57da");Ge.render=Xe;var qe=Ge,He=Object(o["createTextVNode"])(" Community"),Qe=Object(o["createVNode"])("p",null," We can be reached on many different channels. If you have questions, want to exchange ideas or just want to get to know other Venom Linux users, visit our community on one of the following platforms ",-1);function Ye(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("Button"),l=Object(o["resolveComponent"])("Card");return Object(o["openBlock"])(),Object(o["createBlock"])(l,{style:{"margin-bottom":"1em","margin-top":"1em"}},{title:Object(o["withCtx"])((function(){return[He]})),content:Object(o["withCtx"])((function(){return[Qe,Object(o["createVNode"])(i,{type:"button",label:"Facebook",icon:"pi pi-facebook",class:"p-button-info donateBtn",style:{"margin-right":".5em"},onClick:t[1]||(t[1]=function(e){return r.open("https://www.facebook.com/groups/venomlinux")})}),Object(o["createVNode"])(i,{type:"button",label:"Twitter",icon:"pi pi-twitter",class:"p-button-info donateBtn",style:{"margin-right":".5em"},onClick:t[2]||(t[2]=function(e){return r.open("https://twitter.com/venomlinux")})}),Object(o["createVNode"])(i,{type:"button",label:"Telegram",icon:"pi pi-comment",class:"p-button-info donateBtn",style:{"margin-right":".5em"},onClick:t[3]||(t[3]=function(e){return r.open("https://t.me/venomlinux")})}),Object(o["createVNode"])(i,{type:"button",label:"Mail",icon:"pi pi-envelope",class:"p-button-info donateBtn",style:{"margin-right":".5em"},onClick:t[4]||(t[4]=function(e){return r.open("mailto:root@venomlinux.org")})}),Object(o["createVNode"])(i,{type:"button",label:"Github",icon:"pi pi-github",class:"p-button-info donateBtn",style:{"margin-right":".5em"},onClick:t[5]||(t[5]=function(e){return r.open("https://github.com/venomlinux")})}),Object(o["createVNode"])(i,{type:"button",label:"IRC",icon:"pi pi-comment",class:"p-button-info donateBtn",style:{"margin-right":".5em"},onClick:t[6]||(t[6]=function(e){return r.open("irc://irc.freenode.net/#venomlinux")})}),Object(o["createVNode"])(i,{type:"button",label:"Discord",icon:"pi pi-discord",class:"p-button-info donateBtn",style:{"margin-right":".5em"},onClick:t[7]||(t[7]=function(e){return r.open("https://discord.gg/6xrt3R6")})})]})),_:1})}var Ze={methods:{open:function(e){window.open(e,"_blank")}}};n("1b1d");Ze.render=Ye;var $e=Ze,et=Object(o["createTextVNode"])(" Stats"),tt=Object(o["createVNode"])("div",{style:{"text-align":"center"}},[Object(o["createVNode"])("h3",null,"Infos")],-1),nt={class:"p-grid p-formgrid p-text-center"},ot={class:"p-field p-col-12 p-md-4"},ct=Object(o["createVNode"])("h5",null,"Stars",-1),at={class:"p-field p-col-12 p-md-4"},rt=Object(o["createVNode"])("h5",null,"Forks",-1),it={class:"p-field p-col-12 p-md-4"},lt=Object(o["createVNode"])("h5",null,"Issues",-1),ut=Object(o["createVNode"])("div",{style:{"text-align":"center"}},[Object(o["createVNode"])("h3",null,"Packages")],-1),st={class:"p-grid p-formgrid p-text-center"},dt={class:"p-field p-col-12 p-md-3"},bt=Object(o["createVNode"])("h5",null,"Core",-1),pt={class:"p-field p-col-12 p-md-3"},mt=Object(o["createVNode"])("h5",null,"Nonfree",-1),ft={class:"p-field p-col-12 p-md-3"},jt=Object(o["createVNode"])("h5",null,"Multilib",-1),Ot={class:"p-field p-col-12 p-md-3"},ht=Object(o["createVNode"])("h5",null,"Testing",-1);function gt(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("Knob"),l=Object(o["resolveComponent"])("Divider"),u=Object(o["resolveComponent"])("Card");return Object(o["openBlock"])(),Object(o["createBlock"])(u,{style:{"margin-bottom":"1em","margin-top":"1em"}},{title:Object(o["withCtx"])((function(){return[et]})),content:Object(o["withCtx"])((function(){return[tt,Object(o["createVNode"])("div",nt,[Object(o["createVNode"])("div",ot,[ct,Object(o["createVNode"])(i,{modelValue:a.stars,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.stars=e}),max:100,valueColor:"#363636"},null,8,["modelValue"])]),Object(o["createVNode"])("div",at,[rt,Object(o["createVNode"])(i,{modelValue:a.forks,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.forks=e}),max:100,valueColor:"#363636"},null,8,["modelValue"])]),Object(o["createVNode"])("div",it,[lt,Object(o["createVNode"])(i,{modelValue:a.issues,"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.issues=e}),max:100,valueColor:"#363636"},null,8,["modelValue"])])]),Object(o["createVNode"])(l),ut,Object(o["createVNode"])("div",st,[Object(o["createVNode"])("div",dt,[bt,Object(o["createVNode"])(i,{modelValue:a.core,"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.core=e}),max:5e3,valueColor:"#363636"},null,8,["modelValue"])]),Object(o["createVNode"])("div",pt,[mt,Object(o["createVNode"])(i,{modelValue:a.nonfree,"onUpdate:modelValue":t[5]||(t[5]=function(e){return a.nonfree=e}),max:5e3,valueColor:"#363636"},null,8,["modelValue"])]),Object(o["createVNode"])("div",ft,[jt,Object(o["createVNode"])(i,{modelValue:a.multilib,"onUpdate:modelValue":t[6]||(t[6]=function(e){return a.multilib=e}),max:5e3,valueColor:"#363636"},null,8,["modelValue"])]),Object(o["createVNode"])("div",Ot,[ht,Object(o["createVNode"])(i,{modelValue:a.testing,"onUpdate:modelValue":t[7]||(t[7]=function(e){return a.testing=e}),max:5e3,valueColor:"#363636"},null,8,["modelValue"])])])]})),_:1})}n("c0b6"),n("e25e");var Vt=n("bc3a"),xt=n.n(Vt),vt={data:function(){return{stars:0,forks:0,issues:0,core:0,nonfree:0,testing:0,multilib:0}},methods:{loadStats:function(){xt.a.get("https://api.github.com/repos/venomlinux/ports").then(function(e){this.stars=parseInt(e.data.stargazers_count),this.forks=parseInt(e.data.forks),this.issues=parseInt(e.data.open_issues)}.bind(this)),xt.a.get("https://api.github.com/repos/venomlinux/ports/contents/nonfree").then(function(e){this.nonfree=parseInt(e.data.length)-parseInt(3)}.bind(this)),xt.a.get("https://api.github.com/repos/venomlinux/ports/contents/core").then(function(e){this.core=parseInt(e.data.length)-parseInt(3)}.bind(this)),xt.a.get("https://api.github.com/repos/venomlinux/ports/contents/multilib").then(function(e){this.multilib=parseInt(e.data.length)-parseInt(3)}.bind(this)),xt.a.get("https://api.github.com/repos/venomlinux/ports/contents/testing").then(function(e){this.testing=parseInt(e.data.length)-parseInt(3)}.bind(this))}},created:function(){this.loadStats()}};vt.render=gt;var Nt=vt,wt=(n("b0c0"),Object(o["createTextVNode"])(" Packages")),yt=Object(o["createVNode"])("p",null,"Click on the filename to open the package contents at Github",-1);function kt(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("Column"),l=Object(o["resolveComponent"])("InputText"),u=Object(o["resolveComponent"])("DataTable"),s=Object(o["resolveComponent"])("Card"),d=Object(o["resolveDirective"])("tooltip");return Object(o["openBlock"])(),Object(o["createBlock"])(s,{style:{"margin-bottom":"1em","margin-top":"1em"}},{title:Object(o["withCtx"])((function(){return[wt]})),content:Object(o["withCtx"])((function(){return[yt,Object(o["createVNode"])(u,{value:a.packages,paginator:!0,class:"p-datatable-sm",rows:50,dataKey:"name",filters:a.filters,loading:a.loading},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(i,{field:"repo",header:"Repo"},{body:Object(o["withCtx"])((function(e){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.data.repo),1)]})),_:1}),Object(o["createVNode"])(i,{field:"name",header:"Name"},{filter:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(l,{type:"text",modelValue:a.filters["name"],"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.filters["name"]=e}),class:"p-column-filter",placeholder:"Search"},null,8,["modelValue"])]})),body:Object(o["withCtx"])((function(e){return[Object(o["createVNode"])("span",{class:"package_link",onClick:function(t){return r.goToPackage(e.data.repo,e.data.name)}},Object(o["toDisplayString"])(e.data.name),9,["onClick"])]})),_:1}),Object(o["createVNode"])(i,{field:"version",header:"Version"},{body:Object(o["withCtx"])((function(e){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.data.version),1)]})),_:1}),Object(o["createVNode"])(i,{header:"Action"},{body:Object(o["withCtx"])((function(e){return[Object(o["withDirectives"])(Object(o["createVNode"])("i",{class:"pi pi-clock p-mr-2 pi-spin",onClick:function(t){return r.markOutdated(e.data.name)}},null,8,["onClick"]),[[d,"Mark package as outdated",void 0,{bottom:!0}]]),Object(o["withDirectives"])(Object(o["createVNode"])("i",{class:"pi pi-exclamation-circle",onClick:function(t){return r.markBroken(e.data.name)}},null,8,["onClick"]),[[d,"Mark package as broken",void 0,{bottom:!0}]])]})),_:1})]})),_:1},8,["value","filters","loading"])]})),_:1})}n("4e82");var Ct={data:function(){return{filters:{},loading:!0,packages:{}}},methods:{loadPackages:function(){xt.a.get("https://raw.githubusercontent.com/venomlinux/ports/master/scripts/packages.json").then(function(e){console.log(e.data),this.packages=e.data.sort((function(e,t){return e.name<t.name?-1:1})),this.loading=!1}.bind(this))},goToPackage:function(e,t){window.open("https://github.com/venomlinux/ports/tree/master/"+e+"/"+t,"_blank")},markOutdated:function(e){window.open("https://github.com/venomlinux/ports/issues/new?title=Package:%20"+e+"%20|%20Flag:%20outdated&body=The%20Package%20%2A%2A"+e+"%2A%2A%20is%20outdated!%20%0A%0A@MalteKiefer%20@emmett1","_blank")},markBroken:function(e){window.open("https://github.com/venomlinux/ports/issues/new?title=Package:%20"+e+"%20|%20Flag:%20broken&body=The%20package%20%2A%2A"+e+"%2A%2A%20is%20broken%21%0A%0A---------------------------------------%0A%2A%2APlease%20provide%20your%20building%20logs%21%2A%2A%0A%0A---------------------------------------%0A%0A%40MalteKiefer%20%40emmett1","_blank")}},created:function(){this.loadPackages()}};n("5a07");Ct.render=kt;var Tt=Ct,_t=[{path:"/",name:"Home",component:N},{path:"/about",name:"About",component:B},{path:"/download",name:"Download",component:fe},{path:"/packages",name:"Packages",component:Tt},{path:"/stats",name:"Stats",component:Nt},{path:"/donate",name:"Donate",component:Ne},{path:"/team",name:"Team",component:qe},{path:"/community",name:"Community",component:$e}],Bt=Object(m["a"])({history:Object(m["b"])("/"),routes:_t}),St=Bt,Dt=n("5502"),At=Object(Dt["a"])({state:{},mutations:{},actions:{},modules:{}}),Pt=n("4af6"),It=n.n(Pt),Lt=n("ef85"),Mt=n.n(Lt),zt=n("f97a"),Ut=n.n(zt),Ft=n("7d2a"),Kt=n.n(Ft),Jt=n("25e7"),Et=n.n(Jt),Rt=n("ae6c"),Wt=n.n(Rt),Xt=n("3b46"),Gt=n.n(Xt),qt=n("cf06"),Ht=n.n(qt),Qt=n("9abb"),Yt=n.n(Qt),Zt=n("2ccb"),$t=n.n(Zt),en=n("bfaa"),tn=n.n(en),nn=n("2bc7"),on=n.n(nn),cn=n("1506"),an=n.n(cn),rn=n("b7ec"),ln=n.n(rn),un=n("3a60"),sn=n.n(un),dn=Object(o["createApp"])(p);dn.component("Dialog",Mt.a),dn.component("Button",Ut.a),dn.component("Panel",Kt.a),dn.component("Menubar",Et.a),dn.component("Card",Wt.a),dn.component("Toast",Gt.a),dn.component("Knob",Ht.a),dn.component("Divider",Yt.a),dn.component("Message",$t.a),dn.component("Fieldset",tn.a),dn.component("DataTable",on.a),dn.component("Column",an.a),dn.component("InputText",ln.a),dn.directive("tooltip",sn.a),dn.use(At),dn.use(St),dn.use(a.a),dn.use(It.a),dn.mount("#app")},"57da":function(e,t,n){"use strict";n("5e28")},"5a07":function(e,t,n){"use strict";n("2881")},"5e28":function(e,t,n){},"805d":function(e,t,n){},a323:function(e,t,n){e.exports=n.p+"img/screen1.572bb2c0.png"},a5a1:function(e,t,n){},caad:function(e,t,n){"use strict";n("a5a1")},cc6b:function(e,t,n){"use strict";n("805d")},d322:function(e,t,n){},de10:function(e,t,n){}});
//# sourceMappingURL=app.50154348.js.map