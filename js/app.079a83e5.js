(function(e){function t(t){for(var o,a,r=t[0],l=t[1],u=t[2],b=0,d=[];b<r.length;b++)a=r[b],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);s&&s(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={app:0},c=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var s=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0858":function(e,t,n){},"1b1d":function(e,t,n){"use strict";n("de10")},2089:function(e,t,n){},"4bfc":function(e,t,n){"use strict";n("6c32")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),i=n("9319"),c=(n("e1ae"),n("098b"),n("4121"),n("bddf"),{id:"app"}),a={class:"p-grid vertical-container"},r={class:"p-col p-as-center"},l=Object(o["k"])("img",{alt:"logo",src:"venom-logo.jpg",height:"40",class:"p-mr-2"},null,-1),u=Object(o["j"])(" © by Venom Linux ");function s(e,t,n,i,s,b){var d=Object(o["A"])("Menubar"),p=Object(o["A"])("router-view"),m=Object(o["A"])("Button");return Object(o["u"])(),Object(o["g"])("div",c,[Object(o["k"])("div",a,[Object(o["k"])("div",r,[Object(o["k"])(d,{model:s.items},{start:Object(o["J"])((function(){return[l]})),_:1},8,["model"]),Object(o["k"])(p),Object(o["k"])(d,{class:"footer"},{start:Object(o["J"])((function(){return[u]})),end:Object(o["J"])((function(){return[Object(o["k"])(m,{type:"button",icon:"pi pi-github",class:"p-button-secondary",onClick:t[1]||(t[1]=function(e){return b.open("https://github.com/venomlinux")}),style:{"margin-right":".5em","background-color":"#363636"}}),Object(o["k"])(m,{type:"button",icon:"pi pi-facebook",class:"p-button-secondary",style:{"margin-right":".5em","background-color":"#363636"},onClick:t[2]||(t[2]=function(e){return b.open("https://www.facebook.com/groups/venomlinux")})}),Object(o["k"])(m,{type:"button",icon:"pi pi-twitter",class:"p-button-secondary",style:{"margin-right":".5em","background-color":"#363636"},onClick:t[3]||(t[3]=function(e){return b.open("https://twitter.com/venomlinux")})})]})),_:1})])])])}var b={data:function(){return{items:[{label:"Home",icon:"pi pi-home",to:"/"},{label:"About",icon:"pi pi-info-circle",to:"/about"},{label:"Download",icon:"pi pi-download",to:"/download"},{label:"Packages",icon:"pi pi-inbox",to:"/packages"},{label:"Stats",icon:"pi pi-star",to:"/stats"},{label:"Donate",icon:"pi pi-wallet",to:"/donate"},{label:"Wiki",icon:"pi pi-book",url:"https://github.com/venomlinux/ports/wiki"},{label:"Community",icon:"pi pi-comment",to:"/community"},{label:"Team",icon:"pi pi-users",to:"/team"}]}},methods:{open:function(e){window.open(e,"_blank")}}};n("5987");b.render=s;var d=b,p=n("6c02"),m=n("7df7"),j=n.n(m),f=Object(o["j"])(" Venom Linux "),O=Object(o["k"])("div",{style:{"text-align":"center"}},[Object(o["k"])("img",{src:j.a,alt:"screen",style:{width:"100%","max-width":"680px","border-radius":"5px"}})],-1),k=Object(o["k"])("p",null," Venom Linux is a lightweight source-based Linux® distribution for the x86-64 architecture and targeted experienced users. This distro is built from scratch independently then grown to make it suitable for daily use. This distro is inspired by CRUX because of its simplicity and KISS philosophy. ",-1),g=Object(o["k"])("p",null,[Object(o["k"])("strong",null,"Venom Linux"),Object(o["j"])(" uses BSD-style init as main init and a BSD-like ports system for packages. Packages are managed by its own package manager, called scratchpkg, that has dependency checking and is fully written in POSIX sh. ")],-1);function h(e,t,n,i,c,a){var r=Object(o["A"])("Card");return Object(o["u"])(),Object(o["g"])(r,{style:{"margin-bottom":"1em","margin-top":"1em"}},{title:Object(o["J"])((function(){return[f]})),content:Object(o["J"])((function(){return[O,k,g]})),_:1})}var v={};v.render=h;var y=v,w=Object(o["j"])(" About"),x=Object(o["j"])(" Venom Linux is a source-based Linux® distribution originating from Malaysia that targets experienced users. This distro is inspired by CRUX because of its simplicity and its KISS philosophy. Venom Linux uses simple tar compressed packages, a ports system, custom BSD-style init and a collection of small packages which are trimmed down by removed unnecessary things like locale, doc, gtk-doc, info pages (man pages are kept), etc. Venom Linux uses a custom package manager, which is fully written in POSIX shell script, for installing, upgrading and removing packages. Venom Linux features: "),_=Object(o["k"])("ul",null,[Object(o["k"])("li",null,"Package build script in the style of BSD's ports."),Object(o["k"])("li",null,"BSD-style init."),Object(o["k"])("li",null,"Easy to write ports."),Object(o["k"])("li",null,"Multilib support."),Object(o["k"])("li",null,"Slim packages, trimmed by removing anything unnecessary.")],-1),C=Object(o["j"])(" Thanks most of all to the small Venom Linux community that has helped us get here :D ");function J(e,t,n,i,c,a){var r=Object(o["A"])("Card");return Object(o["u"])(),Object(o["g"])(r,{style:{"margin-bottom":"1em","margin-top":"1em"}},{title:Object(o["J"])((function(){return[w]})),content:Object(o["J"])((function(){return[x,_,C]})),_:1})}var A={};A.render=J;var V=A,T=Object(o["j"])(" Download"),P=Object(o["k"])("strong",null,"Venom Linux",-1),S=Object(o["j"])(" can be obtained from various sources. Choose the source and variant that suits you. "),D=Object(o["k"])("br",null,null,-1),B=Object(o["j"])(" Current version is "),I=Object(o["k"])("strong",null,"2.1",-1),L=Object(o["j"])(),M=Object(o["k"])("br",null,null,-1),E=Object(o["k"])("br",null,null,-1),K=Object(o["k"])("br",null,null,-1),z=Object(o["k"])("br",null,null,-1),U=Object(o["k"])("br",null,null,-1),F=Object(o["j"])(" username: venom "),R=Object(o["k"])("br",null,null,-1),W=Object(o["j"])(" password: venom "),H=Object(o["k"])("br",null,null,-1),X=Object(o["k"])("br",null,null,-1),G=Object(o["j"])(" username: root "),N=Object(o["k"])("br",null,null,-1),q=Object(o["j"])(" password: root "),Q=Object(o["k"])("br",null,null,-1),Y=Object(o["j"])("To install "),Z=Object(o["k"])("strong",null,"Venom Linux",-1),$=Object(o["j"])(" run '"),ee=Object(o["k"])("strong",null,"sudo venom-installer",-1),te=Object(o["j"])("' on terminal/tty"),ne=Object(o["j"])("If you like "),oe=Object(o["k"])("strong",null,"Venom Linux",-1),ie=Object(o["j"])(", please "),ce=Object(o["k"])("a",{href:"http://distrowatch.org/dwres.php?waitingdistro=516&resource=links#new"},"recommend us on DistroWatch",-1),ae=Object(o["j"])("."),re=Object(o["k"])("p",null,[Object(o["j"])("Thanks for using "),Object(o["k"])("strong",null,"Venom Linux"),Object(o["j"])("!")],-1);function le(e,t,n,i,c,a){var r=Object(o["A"])("Column"),l=Object(o["A"])("Button"),u=Object(o["A"])("DataTable"),s=Object(o["A"])("Panel"),b=Object(o["A"])("Fieldset"),d=Object(o["A"])("Message"),p=Object(o["A"])("Card");return Object(o["u"])(),Object(o["g"])(p,{style:{"margin-bottom":"1em","margin-top":"1em"}},{title:Object(o["J"])((function(){return[T]})),content:Object(o["J"])((function(){return[P,S,D,B,I,L,M,E,Object(o["k"])(b,{legend:"Download"},{default:Object(o["J"])((function(){return[Object(o["k"])(s,{header:"Venomlinux Server (Location: Germany)"},{default:Object(o["J"])((function(){return[Object(o["k"])(u,{value:c.download_server_germany},{default:Object(o["J"])((function(){return[Object(o["k"])(r,{field:"version",header:"Version"},{body:Object(o["J"])((function(e){return[Object(o["k"])("strong",null,Object(o["E"])(e.data.version),1)]})),_:1}),Object(o["k"])(r,{field:"download",header:"Download"},{body:Object(o["J"])((function(e){return[Object(o["k"])(l,{type:"button",label:"Download",icon:"pi pi-download",class:"p-button-info down",onClick:function(t){return a.open(e.data.download)}},null,8,["onClick"])]})),_:1}),Object(o["k"])(r,{field:"md5",header:"Verify"},{body:Object(o["J"])((function(e){return[Object(o["k"])(l,{type:"button",label:"md5sum",icon:"pi pi-key",class:"p-button-secondary down",onClick:function(t){return a.open(e.data.md5)}},null,8,["onClick"])]})),_:1})]})),_:1},8,["value"])]})),_:1}),K,Object(o["k"])(s,{header:"OSDN"},{default:Object(o["J"])((function(){return[Object(o["k"])(u,{value:c.download_osdn},{default:Object(o["J"])((function(){return[Object(o["k"])(r,{field:"version",header:"Version"},{body:Object(o["J"])((function(e){return[Object(o["k"])("strong",null,Object(o["E"])(e.data.version),1)]})),_:1}),Object(o["k"])(r,{field:"download",header:"Download"},{body:Object(o["J"])((function(e){return[Object(o["k"])(l,{type:"button",label:"Download",icon:"pi pi-download",class:"p-button-info down",onClick:function(t){return a.open(e.data.download)}},null,8,["onClick"])]})),_:1}),Object(o["k"])(r,{field:"md5",header:"Verify"},{body:Object(o["J"])((function(e){return[Object(o["k"])(l,{type:"button",label:"md5sum",icon:"pi pi-key",class:"p-button-secondary down",onClick:function(t){return a.open(e.data.md5)}},null,8,["onClick"])]})),_:1})]})),_:1},8,["value"])]})),_:1}),z,Object(o["k"])(s,{header:"Sourceforge"},{default:Object(o["J"])((function(){return[Object(o["k"])(u,{value:c.download_sourceforge},{default:Object(o["J"])((function(){return[Object(o["k"])(r,{field:"version",header:"Version"},{body:Object(o["J"])((function(e){return[Object(o["k"])("strong",null,Object(o["E"])(e.data.version),1)]})),_:1}),Object(o["k"])(r,{field:"download",header:"Download"},{body:Object(o["J"])((function(e){return[Object(o["k"])(l,{type:"button",label:"Download",icon:"pi pi-download",class:"p-button-info down",onClick:function(t){return a.open(e.data.download)}},null,8,["onClick"])]})),_:1}),Object(o["k"])(r,{field:"md5",header:"Verify"},{body:Object(o["J"])((function(e){return[Object(o["k"])(l,{type:"button",label:"md5sum",icon:"pi pi-key",class:"p-button-secondary down",onClick:function(t){return a.open(e.data.md5)}},null,8,["onClick"])]})),_:1})]})),_:1},8,["value"])]})),_:1})]})),_:1}),U,Object(o["k"])(b,{legend:"Login"},{default:Object(o["J"])((function(){return[Object(o["k"])(s,{header:"normal user"},{default:Object(o["J"])((function(){return[F,R,W,H]})),_:1}),X,Object(o["k"])(s,{header:"privileged user"},{default:Object(o["J"])((function(){return[G,N,q,Q]})),_:1})]})),_:1}),Object(o["k"])(d,{severity:"info",closable:!1},{default:Object(o["J"])((function(){return[Y,Z,$,ee,te]})),_:1}),Object(o["k"])(d,{severity:"info",closable:!1},{default:Object(o["J"])((function(){return[ne,oe,ie,ce,ae]})),_:1}),re]})),_:1})}var ue={data:function(){return{download_server_germany:[{version:"Openbox ISO",download:"https://dl.venomlinux.org/venomlinux-2.1-x86_64.iso",md5:"https://dl.venomlinux.org/venomlinux-2.1-x86_64.iso.md5"},{version:"Base rootfs tarball",download:"https://dl.venomlinux.org/venomlinux-rootfs-2.1-x86_64.tar.xz",md5:"https://dl.venomlinux.org/venomlinux-rootfs-2.1-x86_64.tar.xz.md5"}],download_osdn:[{version:"Openbox ISO",download:"https://osdn.net/dl/venomlinux/venomlinux-2.1-x86_64.iso",md5:"https://osdn.net/dl/venomlinux/venomlinux-2.1-x86_64.iso.md5"},{version:"Base rootfs tarball",download:"https://osdn.net/dl/venomlinux/venomlinux-rootfs-2.1-x86_64.tar.xz",md5:"https://osdn.net/dl/venomlinux/venomlinux-rootfs-2.1-x86_64.tar.xz.md5"}],download_sourceforge:[{version:"Openbox ISO",download:"https://sourceforge.net/projects/venomlinux/files/2.0/venomlinux-2.1-x86_64.iso/download",md5:"https://sourceforge.net/projects/venomlinux/files/2.0/venomlinux-2.1-x86_64.iso/download"},{version:"Base rootfs tarball",download:"https://sourceforge.net/projects/venomlinux/files/2.0/venomlinux-rootfs-2.1-x86_64.tar.xz/download",md5:"https://sourceforge.net/projects/venomlinux/files/2.0/venomlinux-rootfs-2.1-x86_64.tar.xz.md5/download"}]}},methods:{open:function(e){window.open(e,"_blank")}}};n("e56f");ue.render=le;var se=ue,be=Object(o["j"])(" Donate"),de=Object(o["k"])("p",null,[Object(o["j"])(" A lot of work and free time goes into Venom Linux."),Object(o["k"])("br"),Object(o["j"])(" We would therefore be pleased if you would like to finance us by making a small donation. ")],-1),pe=Object(o["k"])("p",null,"Thanks!",-1),me=Object(o["k"])("br",null,null,-1);function je(e,t,n,i,c,a){var r=Object(o["A"])("Button"),l=Object(o["A"])("Fieldset"),u=Object(o["A"])("Card"),s=Object(o["A"])("Toast");return Object(o["u"])(),Object(o["g"])(o["a"],null,[Object(o["k"])(u,{style:{"margin-bottom":"1em","margin-top":"1em"}},{title:Object(o["J"])((function(){return[be]})),content:Object(o["J"])((function(){return[de,pe]})),footer:Object(o["J"])((function(){return[Object(o["k"])(l,{legend:"Emmett1 (Lead Developer)"},{default:Object(o["J"])((function(){return[Object(o["k"])(r,{icon:"pi pi-paypal",label:"PayPal",onClick:t[1]||(t[1]=function(e){return a.open("https://paypal.me/syazwanemmett")}),class:"donateBtn"}),Object(o["k"])(r,{icon:"pi pi-credit-card",label:"Liberapay",class:"p-button-warning donateBtn",style:{"margin-left":"0.5em"},onClick:t[2]||(t[2]=function(e){return a.open("https://liberapay.com/emmett1")})}),Object(o["k"])(r,{icon:"pi pi-dollar",label:"BuyMeACoffee",class:"p-button-secondary donateBtn",style:{"margin-left":"0.5em"},onClick:t[3]||(t[3]=function(e){return a.open("https://buymeacoffee.com/venomlinux")})})]})),_:1}),me,Object(o["k"])(l,{legend:"Malte (Port Maintainer)"},{default:Object(o["J"])((function(){return[Object(o["k"])(r,{icon:"pi pi-paypal",label:"PayPal",onClick:t[4]||(t[4]=function(e){return a.open("https://paypal.me/maltekiefer")}),class:"donateBtn"}),Object(o["k"])(r,{icon:"pi pi-credit-card",label:"Liberapay",class:"p-button-warning donateBtn",style:{"margin-left":"0.5em"},onClick:t[5]||(t[5]=function(e){return a.open("https://liberapay.com/beli3ver")})})]})),_:1})]})),_:1}),Object(o["k"])(s)],64)}var fe={methods:{open:function(e){window.open(e,"_blank")}}};n("4bfc");fe.render=je;var Oe=fe,ke=Object(o["j"])(" Team"),ge={class:"p-d-flex team-view"},he={class:"p-mr-2"},ve=Object(o["k"])("img",{alt:"user header",src:"https://icotar.com/initials/Syazwan%20Emmett.png?s=400"},null,-1),ye=Object(o["j"])(" Syazwan Emmett | Emmett1 (Malaysia) "),we=Object(o["j"])(" Lead Developer "),xe=Object(o["k"])("p",null,"Emmett1 is the lead developer from the VenomLinux project.",-1),_e={class:"p-mr-2"},Ce=Object(o["k"])("img",{alt:"user header",src:"https://www.gravatar.com/avatar/230048b8b5247c510b71a0e8b6ca9344?s=400&d=retro&r=g"},null,-1),Je=Object(o["j"])(" Malte Kiefer | beli3ver (Germany) "),Ae=Object(o["j"])(" Package Maintainer "),Ve=Object(o["k"])("p",null," beli3ver is the main package maintainer and the server administrator. ",-1),Te={class:"p-mr-2"},Pe=Object(o["k"])("img",{alt:"user header",src:"https://avatars.githubusercontent.com/u/47093017?s=400&u=a82d615befc113c35d90feb74abea40a00ffbe23&v=4"},null,-1),Se=Object(o["j"])(" Mohammad Tanio | Tan (Indonesia) "),De=Object(o["j"])(" Web Designer "),Be=Object(o["k"])("p",null," Tan is the web designer and is a part of the team since the beginning. ",-1),Ie={class:"p-mr-2"},Le=Object(o["k"])("img",{alt:"user header",src:"https://icotar.com/initials/Jens%20Thys.png?s=400"},null,-1),Me=Object(o["j"])(" Jens Thys | Jens (France) "),Ee=Object(o["j"])(" Tester / Contributor "),Ke=Object(o["k"])("p",null,"Jens is a contributor and a tester.",-1);function ze(e,t,n,i,c,a){var r=Object(o["A"])("Button"),l=Object(o["A"])("Card");return Object(o["u"])(),Object(o["g"])(l,{style:{"margin-bottom":"1em","margin-top":"1em"}},{title:Object(o["J"])((function(){return[ke]})),content:Object(o["J"])((function(){return[Object(o["k"])("div",ge,[Object(o["k"])("div",he,[Object(o["k"])(l,{class:"team team-card"},{header:Object(o["J"])((function(){return[ve]})),title:Object(o["J"])((function(){return[ye]})),subtitle:Object(o["J"])((function(){return[we]})),content:Object(o["J"])((function(){return[xe]})),footer:Object(o["J"])((function(){return[Object(o["k"])(r,{icon:"pi pi-envelope",label:"",onClick:t[1]||(t[1]=function(e){return a.mail("emmett1.2miligrams@gmail.com")})}),Object(o["k"])(r,{icon:"pi pi-github",label:"",onClick:t[2]||(t[2]=function(e){return a.github("emmett1")}),class:"p-button-secondary",style:{"margin-left":".5em"}})]})),_:1})]),Object(o["k"])("div",_e,[Object(o["k"])(l,{class:"team team-card"},{header:Object(o["J"])((function(){return[Ce]})),title:Object(o["J"])((function(){return[Je]})),subtitle:Object(o["J"])((function(){return[Ae]})),content:Object(o["J"])((function(){return[Ve]})),footer:Object(o["J"])((function(){return[Object(o["k"])(r,{icon:"pi pi-envelope",label:"",onClick:t[3]||(t[3]=function(e){return a.mail("malte.kiefer@tuta.io")})}),Object(o["k"])(r,{icon:"pi pi-github",label:"",onClick:t[4]||(t[4]=function(e){return a.github("maltekiefer")}),class:"p-button-secondary",style:{"margin-left":".5em"}}),Object(o["k"])(r,{icon:"pi pi-globe",label:"",onClick:t[5]||(t[5]=function(e){return a.open("https://malte-kiefer.de")}),class:"p-button-success",style:{"margin-left":".5em"}})]})),_:1})]),Object(o["k"])("div",Te,[Object(o["k"])(l,{class:"team team-card"},{header:Object(o["J"])((function(){return[Pe]})),title:Object(o["J"])((function(){return[Se]})),subtitle:Object(o["J"])((function(){return[De]})),content:Object(o["J"])((function(){return[Be]})),footer:Object(o["J"])((function(){return[Object(o["k"])(r,{icon:"pi pi-envelope",label:"",onClick:t[6]||(t[6]=function(e){return a.mail("tanmyid1337@gmail.com")})}),Object(o["k"])(r,{icon:"pi pi-github",label:"",onClick:t[7]||(t[7]=function(e){return a.github("tanmyid")}),class:"p-button-secondary",style:{"margin-left":".5em"}}),Object(o["k"])(r,{icon:"pi pi-globe",label:"",onClick:t[8]||(t[8]=function(e){return a.open("http://tanmyid.github.io")}),class:"p-button-success",style:{"margin-left":".5em"}})]})),_:1})]),Object(o["k"])("div",Ie,[Object(o["k"])(l,{class:"team team-card"},{header:Object(o["J"])((function(){return[Le]})),title:Object(o["J"])((function(){return[Me]})),subtitle:Object(o["J"])((function(){return[Ee]})),content:Object(o["J"])((function(){return[Ke]})),footer:Object(o["J"])((function(){return[Object(o["k"])(r,{icon:"pi pi-envelope",label:"",onClick:t[9]||(t[9]=function(e){return a.mail("jens.thys@gmail.com")})}),Object(o["k"])(r,{icon:"pi pi-github",label:"",onClick:t[10]||(t[10]=function(e){return a.github("daemonbsd56")}),class:"p-button-secondary",style:{"margin-left":".5em"}})]})),_:1})])])]})),_:1})}var Ue={methods:{github:function(e){window.open("https://github.com/"+e,"_blank")},mail:function(e){window.open("mailto:"+e)},open:function(e){window.open(e,"_blank")}}};n("57da");Ue.render=ze;var Fe=Ue,Re=Object(o["j"])(" Community"),We=Object(o["k"])("p",null," We can be reached on many different channels. If you have questions, want to exchange ideas or just want to get to know other Venom Linux users, visit our community on one of the following platforms ",-1);function He(e,t,n,i,c,a){var r=Object(o["A"])("Button"),l=Object(o["A"])("Card");return Object(o["u"])(),Object(o["g"])(l,{style:{"margin-bottom":"1em","margin-top":"1em"}},{title:Object(o["J"])((function(){return[Re]})),content:Object(o["J"])((function(){return[We,Object(o["k"])(r,{type:"button",label:"Facebook",icon:"pi pi-facebook",class:"p-button-info donateBtn",style:{"margin-right":".5em"},onClick:t[1]||(t[1]=function(e){return a.open("https://www.facebook.com/groups/venomlinux")})}),Object(o["k"])(r,{type:"button",label:"Twitter",icon:"pi pi-twitter",class:"p-button-info donateBtn",style:{"margin-right":".5em"},onClick:t[2]||(t[2]=function(e){return a.open("https://twitter.com/venomlinux")})}),Object(o["k"])(r,{type:"button",label:"Telegram",icon:"pi pi-comment",class:"p-button-info donateBtn",style:{"margin-right":".5em"},onClick:t[3]||(t[3]=function(e){return a.open("https://t.me/venomlinux")})}),Object(o["k"])(r,{type:"button",label:"Mail",icon:"pi pi-envelope",class:"p-button-info donateBtn",style:{"margin-right":".5em"},onClick:t[4]||(t[4]=function(e){return a.open("mailto:root@venomlinux.org")})}),Object(o["k"])(r,{type:"button",label:"Github",icon:"pi pi-github",class:"p-button-info donateBtn",style:{"margin-right":".5em"},onClick:t[5]||(t[5]=function(e){return a.open("https://github.com/venomlinux")})}),Object(o["k"])(r,{type:"button",label:"IRC",icon:"pi pi-comment",class:"p-button-info donateBtn",style:{"margin-right":".5em"},onClick:t[6]||(t[6]=function(e){return a.open("irc://irc.freenode.net/#venomlinux")})}),Object(o["k"])(r,{type:"button",label:"Discord",icon:"pi pi-discord",class:"p-button-info donateBtn",style:{"margin-right":".5em"},onClick:t[7]||(t[7]=function(e){return a.open("https://discord.gg/6xrt3R6")})})]})),_:1})}var Xe={methods:{open:function(e){window.open(e,"_blank")}}};n("1b1d");Xe.render=He;var Ge=Xe,Ne=Object(o["j"])(" Stats"),qe=Object(o["k"])("div",{style:{"text-align":"center"}},[Object(o["k"])("h3",null,"Infos")],-1),Qe={class:"p-grid p-formgrid p-text-center"},Ye={class:"p-field p-col-12 p-md-4"},Ze=Object(o["k"])("h5",null,"Stars",-1),$e={class:"p-field p-col-12 p-md-4"},et=Object(o["k"])("h5",null,"Forks",-1),tt={class:"p-field p-col-12 p-md-4"},nt=Object(o["k"])("h5",null,"Issues",-1),ot=Object(o["k"])("div",{style:{"text-align":"center"}},[Object(o["k"])("h3",null,"Packages")],-1),it={class:"p-grid p-formgrid p-text-center"},ct={class:"p-field p-col-12 p-md-3"},at=Object(o["k"])("h5",null,"Core",-1),rt={class:"p-field p-col-12 p-md-3"},lt=Object(o["k"])("h5",null,"Nonfree",-1),ut={class:"p-field p-col-12 p-md-3"},st=Object(o["k"])("h5",null,"Multilib",-1),bt={class:"p-field p-col-12 p-md-3"},dt=Object(o["k"])("h5",null,"Testing",-1);function pt(e,t,n,i,c,a){var r=Object(o["A"])("Knob"),l=Object(o["A"])("Divider"),u=Object(o["A"])("Card");return Object(o["u"])(),Object(o["g"])(u,{style:{"margin-bottom":"1em","margin-top":"1em"}},{title:Object(o["J"])((function(){return[Ne]})),content:Object(o["J"])((function(){return[qe,Object(o["k"])("div",Qe,[Object(o["k"])("div",Ye,[Ze,Object(o["k"])(r,{modelValue:c.stars,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.stars=e}),max:100,valueColor:"#363636"},null,8,["modelValue"])]),Object(o["k"])("div",$e,[et,Object(o["k"])(r,{modelValue:c.forks,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.forks=e}),max:100,valueColor:"#363636"},null,8,["modelValue"])]),Object(o["k"])("div",tt,[nt,Object(o["k"])(r,{modelValue:c.issues,"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.issues=e}),max:100,valueColor:"#363636"},null,8,["modelValue"])])]),Object(o["k"])(l),ot,Object(o["k"])("div",it,[Object(o["k"])("div",ct,[at,Object(o["k"])(r,{modelValue:c.core,"onUpdate:modelValue":t[4]||(t[4]=function(e){return c.core=e}),max:5e3,valueColor:"#363636"},null,8,["modelValue"])]),Object(o["k"])("div",rt,[lt,Object(o["k"])(r,{modelValue:c.nonfree,"onUpdate:modelValue":t[5]||(t[5]=function(e){return c.nonfree=e}),max:5e3,valueColor:"#363636"},null,8,["modelValue"])]),Object(o["k"])("div",ut,[st,Object(o["k"])(r,{modelValue:c.multilib,"onUpdate:modelValue":t[6]||(t[6]=function(e){return c.multilib=e}),max:5e3,valueColor:"#363636"},null,8,["modelValue"])]),Object(o["k"])("div",bt,[dt,Object(o["k"])(r,{modelValue:c.testing,"onUpdate:modelValue":t[7]||(t[7]=function(e){return c.testing=e}),max:5e3,valueColor:"#363636"},null,8,["modelValue"])])])]})),_:1})}n("c0b6"),n("e25e");var mt=n("bc3a"),jt=n.n(mt),ft={data:function(){return{stars:0,forks:0,issues:0,core:0,nonfree:0,testing:0,multilib:0}},methods:{loadStats:function(){jt.a.get("https://api.github.com/repos/venomlinux/ports").then(function(e){this.stars=parseInt(e.data.stargazers_count),this.forks=parseInt(e.data.forks),this.issues=parseInt(e.data.open_issues)}.bind(this)),jt.a.get("https://api.github.com/repos/venomlinux/ports/contents/nonfree").then(function(e){this.nonfree=parseInt(e.data.length)-parseInt(3)}.bind(this)),jt.a.get("https://api.github.com/repos/venomlinux/ports/contents/core").then(function(e){this.core=parseInt(e.data.length)-parseInt(3)}.bind(this)),jt.a.get("https://api.github.com/repos/venomlinux/ports/contents/multilib").then(function(e){this.multilib=parseInt(e.data.length)-parseInt(3)}.bind(this)),jt.a.get("https://api.github.com/repos/venomlinux/ports/contents/testing").then(function(e){this.testing=parseInt(e.data.length)-parseInt(3)}.bind(this))}},created:function(){this.loadStats()}};ft.render=pt;var Ot=ft,kt=(n("b0c0"),Object(o["j"])(" Packages")),gt=Object(o["k"])("p",null," Ports for Venom Linux 2.1 ",-1),ht=Object(o["k"])("p",null,[Object(o["j"])(" If port you find not exist on Venom's repo, you can open an issue requesting port "),Object(o["k"])("a",{href:"https://github.com/venomlinux/ports/issues"},"here"),Object(o["j"])(", make sure you give enough details. ")],-1);function vt(e,t,n,i,c,a){var r=Object(o["A"])("Column"),l=Object(o["A"])("InputText"),u=Object(o["A"])("DataTable"),s=Object(o["A"])("Card"),b=Object(o["B"])("tooltip");return Object(o["u"])(),Object(o["g"])(s,{style:{"margin-bottom":"1em","margin-top":"1em"}},{title:Object(o["J"])((function(){return[kt]})),content:Object(o["J"])((function(){return[gt,ht,Object(o["k"])(u,{value:c.packages,paginator:!0,class:"p-datatable-sm",rows:50,dataKey:"name",filters:c.filters,loading:c.loading},{default:Object(o["J"])((function(){return[Object(o["k"])(r,{field:"repo",header:"Repo"},{body:Object(o["J"])((function(e){return[Object(o["j"])(Object(o["E"])(e.data.repo),1)]})),_:1}),Object(o["k"])(r,{field:"name",header:"Name"},{filter:Object(o["J"])((function(){return[Object(o["k"])(l,{type:"text",modelValue:c.filters["name"],"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.filters["name"]=e}),class:"p-column-filter",placeholder:"Search"},null,8,["modelValue"])]})),body:Object(o["J"])((function(e){return[Object(o["K"])(Object(o["k"])("span",{class:"package_link",onClick:function(t){return a.goToHomepage(e.data.homepage)}},[Object(o["j"])(Object(o["E"])(e.data.name),1)],8,["onClick"]),[[b,e.data.homepage,void 0,{bottom:!0}]])]})),_:1}),Object(o["k"])(r,{field:"version",header:"Version"},{body:Object(o["J"])((function(e){return[Object(o["K"])(Object(o["k"])("span",{class:"package_link",onClick:function(t){return a.goToPackage(e.data.repo,e.data.name)}},[Object(o["j"])(Object(o["E"])(e.data.version),1)],8,["onClick"]),[[b,"Open package port",void 0,{bottom:!0}]])]})),_:1}),Object(o["k"])(r,{header:"Action"},{body:Object(o["J"])((function(e){return[Object(o["K"])(Object(o["k"])("i",{class:"pi pi-clock p-mr-2 pi-spin",onClick:function(t){return a.markOutdated(e.data.name)}},null,8,["onClick"]),[[b,"Mark package as outdated",void 0,{bottom:!0}]]),Object(o["K"])(Object(o["k"])("i",{class:"pi pi-exclamation-circle",onClick:function(t){return a.markBroken(e.data.name)}},null,8,["onClick"]),[[b,"Mark package as broken",void 0,{bottom:!0}]])]})),_:1})]})),_:1},8,["value","filters","loading"])]})),_:1})}n("4e82");var yt={data:function(){return{filters:{},loading:!0,packages:{}}},methods:{loadPackages:function(){jt.a.get("https://raw.githubusercontent.com/venomlinux/ports/2.1/scripts/packages.json").then(function(e){console.log(e.data),this.packages=e.data.sort((function(e,t){return e.name<t.name?-1:1})),this.loading=!1}.bind(this))},goToPackage:function(e,t){window.open("https://github.com/venomlinux/ports/tree/2.1/"+e+"/"+t,"_blank")},goToHomepage:function(e){window.open(e,"_blank")},markOutdated:function(e){window.open("https://github.com/venomlinux/ports/issues/new?title=Package:%20"+e+"%20|%20Flag:%20outdated&body=The%20Package%20%2A%2A"+e+"%2A%2A%20is%20outdated!%20%0A%0A@MalteKiefer%20@emmett1","_blank")},markBroken:function(e){window.open("https://github.com/venomlinux/ports/issues/new?title=Package:%20"+e+"%20|%20Flag:%20broken&body=The%20package%20%2A%2A"+e+"%2A%2A%20is%20broken%21%0A%0A---------------------------------------%0A%2A%2APlease%20provide%20your%20building%20logs%21%2A%2A%0A%0A---------------------------------------%0A%0A%40MalteKiefer%20%40emmett1","_blank")}},created:function(){this.loadPackages()}};n("babb");yt.render=vt;var wt=yt,xt=[{path:"/",name:"Home",component:y},{path:"/about",name:"About",component:V},{path:"/download",name:"Download",component:se},{path:"/packages",name:"Packages",component:wt},{path:"/stats",name:"Stats",component:Ot},{path:"/donate",name:"Donate",component:Oe},{path:"/team",name:"Team",component:Fe},{path:"/community",name:"Community",component:Ge}],_t=Object(p["a"])({history:Object(p["b"])("/"),routes:xt}),Ct=_t,Jt=n("5502"),At=Object(Jt["a"])({state:{},mutations:{},actions:{},modules:{}}),Vt=n("485c"),Tt=n("5bd2"),Pt=n("bb57"),St=n("1e2d"),Dt=n("c0c3"),Bt=n("9899"),It=n("b3b6"),Lt=n("60aa"),Mt=n("32e0"),Et=n("8b6b"),Kt=n("743f"),zt=n("5b2c"),Ut=n("6f85"),Ft=n("8398"),Rt=n("6b8c"),Wt=Object(o["f"])(d);Wt.component("Dialog",Tt["a"]),Wt.component("Button",Pt["a"]),Wt.component("Panel",St["a"]),Wt.component("Menubar",Dt["a"]),Wt.component("Card",Bt["a"]),Wt.component("Toast",It["a"]),Wt.component("Knob",Lt["a"]),Wt.component("Divider",Mt["a"]),Wt.component("Message",Et["a"]),Wt.component("Fieldset",Kt["a"]),Wt.component("DataTable",zt["a"]),Wt.component("Column",Ut["a"]),Wt.component("InputText",Ft["a"]),Wt.directive("tooltip",Rt["a"]),Wt.use(At),Wt.use(Ct),Wt.use(i["a"]),Wt.use(Vt["a"]),Wt.mount("#app")},"57da":function(e,t,n){"use strict";n("5e28")},5987:function(e,t,n){"use strict";n("0858")},"5e28":function(e,t,n){},"6c32":function(e,t,n){},"7df7":function(e,t,n){e.exports=n.p+"img/screenshot-20210312.46d112a5.png"},babb:function(e,t,n){"use strict";n("2089")},c307:function(e,t,n){},de10:function(e,t,n){},e56f:function(e,t,n){"use strict";n("c307")}});
//# sourceMappingURL=app.079a83e5.js.map