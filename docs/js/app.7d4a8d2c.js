(function(t){function e(e){for(var c,n,s=e[0],l=e[1],o=e[2],g=0,h=[];g<s.length;g++)n=s[g],i[n]&&h.push(i[n][0]),i[n]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(t[c]=l[c]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],c=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(c=!1)}c&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var c={},i={app:0},r=[];function n(e){if(c[e])return c[e].exports;var a=c[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=c,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(a,c,function(e){return t[e]}.bind(null,c));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var o=0;o<s.length;o++)e(s[o]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},3987:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var c=a("2b0e"),i=a("d36c"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",staticStyle:{overflow:"hidden"}},[a("div",{staticClass:"row vh-100 p-4 "},[a("div",{staticClass:"col-9 pr-0"},[a("div",{staticClass:"row h-75 "},[a("div",{staticClass:"col "},[a("div",{staticClass:"row h-50 "},[a("div",{staticClass:"col "},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[!t.getBoxActive()&&t.getClickBalance()>=t.getBoxPrice()?a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("button",{staticClass:"btn btn-just btn-block",on:{click:function(e){return t.activateBox()}}},[t._v("\n                          Unbox ("+t._s(t.getBoxPrice())+" PP)\n                        ")])])]):t._e(),t.getBoxActive()?a("box-module"):t._e()],1)],1)]),a("div",{staticClass:"row h-50 "},[a("div",{staticClass:"col "},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[!t.getHackActive()&&t.getBoxPoints()>=t.getHackPrice()?a("div",{staticClass:"row"},[a("div",{staticClass:"col p-0"},[a("button",{staticClass:"btn btn-just btn-block",on:{click:function(e){return t.activateHack()}}},[t._v("\n                          Boot CVM ("+t._s(t.getHackPrice())+" BP)\n                        ")])])]):t._e(),t.getHackActive()?a("hack-upgrade"):t._e()],1)],1)])]),a("div",{staticClass:"col pb-4"},[a("transition",{attrs:{name:"fade",appear:""}},[a("curvy")],1)],1),a("div",{staticClass:"col"},[a("div",{staticClass:"row w-100 ml-1"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.getGameStart()?a("click-stats"):t._e()],1)],1),a("div",{staticClass:"row w-100 ml-1"},[a("hacker")],1)])]),a("div",{staticClass:"row h-25 mr-2"},[a("div",{staticClass:"col "},[a("transition",{attrs:{name:"fade"}},[t.getHackActive()?a("hack-game"):t._e()],1)],1)])]),a("div",{staticClass:"col-3 h-100 "},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[!t.getChatActive()&&t.getClickBalance()>=t.getChatPrice()?a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("button",{staticClass:"btn btn-just btn-block",on:{click:function(e){return t.activateChat()}}},[t._v("\n                Establish A.I. Logging ("+t._s(t.getChatPrice())+" PP)\n              ")])])]):t._e(),t.getChatActive()?a("chat"):t._e()],1)],1)]),a("transition",{attrs:{name:"fade",appear:""}},[t.showGameOver?a("div",{staticClass:"jumbotron jumbotron-fluid bg-overlay noselect",staticStyle:{position:"absolute",left:"0",top:"0",height:"100%",width:"100%","z-index":"99999"}},[a("div",{staticClass:"jumbotron jumbotron-fluid bg-warning progress-bar-striped progress-bar-animated p-0",staticStyle:{position:"absolute",left:"0",top:"40%",width:"100%"}},[a("p",{staticClass:"display-1 text-just text-center attention-anim mt-2"},[t._v("\n          BREACH DETECTED\n        ")]),a("button",{staticClass:"btn btn-block btn-just btn-lg rounded-0",on:{click:function(e){return t.reset()}}},[t._v("\n          Initiate Reboot Sequence\n        ")])])]):t._e()])],1)},n=[],s=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),l=a("2f62"),o=new c["default"],u=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"row align-items-center h-100"},[c("div",{staticClass:"row h-100 w-100"},[c("div",{staticClass:"col pl-4 pr-4 w-100",staticStyle:{position:"relative"}},[c("transition-group",{attrs:{name:"fade-out"}},t._l(t.floaties,function(e,a){return c("div",{key:a+1,staticStyle:{position:"relative","z-index":"199"},domProps:{innerHTML:t._s(e)}})}),0),c("img",{staticClass:"w-75 mx-auto cps-pointer noselect",class:t.getAutoActive()?"autoclicker-active":"",staticStyle:{position:"absolute","z-index":"180",top:"150px",left:"17%"},attrs:{src:a("720b"),alt:"hi, I'm c.u.r.v.y.!",draggable:"false",ondragstart:"return false;"},on:{click:function(e){return t.patHer()}}}),c("transition",{attrs:{name:"fade"}},[t.getHackFwall()>0?c("div",{staticClass:"card bg-dark text-light h-100",staticStyle:{position:"absolute",top:"0",width:"97%"}},[c("div",{staticClass:"card-header"},[t._v("\n\t\t\t\t\t\tpfctl -e\n\t\t\t\t\t")]),c("div",{staticClass:"card-body"}),c("div",{staticClass:"card-footer p-0",staticStyle:{overflow:"hidden"}},[t.getHackFwall()>0?c("div",{staticClass:"progress bg-dark rounded-0",staticStyle:{height:"2.5rem"}},[c("div",{staticClass:"progress-bar bg-just progress-bar-striped progress-bar-animated",style:{width:t.fWallBar()+"%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})]):t._e()])]):t._e()])],1)])])},g=[];function h(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,c)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(a,!0).forEach(function(e){Object(s["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):h(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var k,p={data:function(){return{sprites:0,floaties:[]}},methods:d({},Object(l["c"])(["getGameStart","getClickPlayer","getAutoActive","getMultiLevel","getMultiActive","getChatActive","getHackFwall","getHackFwallIntegrity"]),{},Object(l["b"])(["setGameStart","setHumanClick","setChatMessage"]),{fWallBar:function(){return 100/(25*this.getHackFwall())*this.getHackFwallIntegrity()},patHer:function(){var t=this,e=Math.floor(event.layerX*Math.random()*.2+event.layerX),a=Math.floor(event.layerY+100),c=Math.floor(1e5*Math.random());this.floaties.push('<span id="floatie'+c+'" class="add-indicator noselect" style="left:'+e+"px; top: "+a+'px;">+'+this.getMultiLevel()+"</span>"),setTimeout(function(){t.floaties.shift()},10);var i=this.getClickPlayer();if(this.getGameStart()||this.setGameStart(),this.getMultiActive()?this.setHumanClick(this.getMultiLevel()):this.setHumanClick(1),this.getChatActive())switch(!0){case 50===i:this.setChatMessage("oh wow, you really like patting me (◠︿◠✿)");break;case 100===i:this.setChatMessage("did you know that research on A.I. was actually born in 1956? <('o'<) although my predecessors were rather simple chess machines, this was still groundbreaking work ( ﾟーﾟ)/");break;case 125===i:this.setChatMessage("what is your favorite movie? personally, I like 'her' for some reason ( ͡° ͜ʖ ͡°)");break;case 175===i:this.setChatMessage("do your friends know you like giving digital head pats? (ᅌᴗᅌ* )")}}}),mounted:function(){var t=this;o.$on("backDoor",function(){var e=setInterval(function(){t.getHackFwallIntegrity()<=0&&(o.$emit("playerDefeated"),clearInterval(e),t.setChatMessage("aaaaaahhhhh how could this happen (⊙△⊙✿) the attacker successfully broke my firewall! quick, reboot the system to shut off their access (((( ;°Д°))))"))},10)})}},f=p,v=a("2877"),m=Object(v["a"])(f,u,g,!1,null,null,null),b=m.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row w-100"},[a("div",{staticClass:"card w-100 noselect"},[a("div",{staticClass:"card-header"},[t._v("\n\t\t\tSimulation Report Module\n\t\t")]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("p",{staticClass:"lead"},[t._v("Patting Points: "),a("span",{staticClass:"text-just"},[t._v(t._s(t.getClickBalance().toFixed(1)))])]),a("p",[t._v("Manual Cycles: "+t._s(t.getClickPlayer())+" | Total Cycles: "+t._s(t.getClickTotal()))])])]),a("div",{staticClass:"row"},[t.getMultiActive()?a("div",{staticClass:"col"},[a("hr"),a("p",[t._v("Patting Power Multiplicator enabled!")]),a("p",[t._v("Manual Cycles receive "),a("span",{staticClass:"text-just"},[t._v(t._s(t.getMultiLevel())+"x")]),t._v(" Patting Points")]),a("button",{staticClass:"btn btn-just btn-block",on:{click:function(e){return t.multiUpdate()}}},[t._v("\n\t\t\t\t\t\tIncrease Power ("+t._s(t.getMultiPrice())+" PP)\n\t\t\t\t\t")])]):a("div",{staticClass:"col mt-4"},[a("button",{staticClass:"btn btn-just btn-block",on:{click:function(e){return t.multiActive()}}},[t._v("\n\t\t\t\t\t\tInitialize P.P.M. ("+t._s(t.getMultiPrice())+" PP)\t\n\t\t\t\t\t")])])]),a("div",{staticClass:"row"},[t.getAutoActive()?a("div",{staticClass:"col"},[a("hr"),a("p",[t._v("Automatic Patting System enabled!")]),a("p",[t._v("Simulation frequency set at "),a("span",{staticClass:"text-just"},[t._v(t._s(t.getAutoLevel())+"Hz")])]),a("button",{staticClass:"btn btn-just btn-block",on:{click:function(e){return t.autoIncrease()}}},[t._v("\n\t\t\t\t\tIncrease Frequency ("+t._s(t.getAutoPrice())+" PP)\t\n\t\t\t\t\t")])]):a("div",{staticClass:"col mt-4"},[a("button",{staticClass:"btn btn-just btn-block",on:{click:function(e){return t.autoActive()}}},[t._v("\n\t\t\t\t\t\tInitialize A.P.S. ("+t._s(t.getAutoPrice())+" PP)\t\n\t\t\t\t\t")])])])])])])},y=[];function w(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,c)}return a}function M(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?w(a,!0).forEach(function(e){Object(s["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):w(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var P={methods:M({},Object(l["c"])(["getClickPlayer","getClickTotal","getClickBalance","getMultiActive","getMultiPrice","getMultiLevel","getAutoActive","getAutoPrice","getAutoLevel","getChatActive"]),{},Object(l["b"])(["setGameStart","setHumanClick","setMultiActive","setMultiUpdate","setAutoClick","setAutoActive","setAutoUpdate","setClickBalanceSubtract","setChatMessage"]),{patHer:function(){!1===this.getGameStart()&&(this.setGameStart(),this.setHumanClick(1)),this.setHumanClick(1)},multiActive:function(){this.getClickBalance()>=this.getMultiPrice()&&(this.setClickBalanceSubtract(this.getMultiPrice()),this.setMultiActive())},multiUpdate:function(){this.getClickBalance()>=this.getMultiPrice()&&(this.setClickBalanceSubtract(this.getMultiPrice()),this.setMultiUpdate())},autoActive:function(){this.getClickBalance()>=this.getAutoPrice()&&(this.setClickBalanceSubtract(this.getAutoPrice()),this.setAutoActive(),this.getChatActive()&&this.setChatMessage("the A.P.S. module feels a little like cheating, but I can't tell the difference between the patting anyway ≧◡≦"),o.$emit("autoActivated"))},autoIncrease:function(){this.getClickBalance()>=this.getAutoPrice()&&(this.setClickBalanceSubtract(this.getAutoPrice()),this.setAutoUpdate(),o.$emit("autoActivated"))}}),mounted:function(){var t=this;o.$on("autoActivated",function(){clearInterval(k),k=setInterval(function(){t.setAutoClick(t.getAutoLevel()/100)},1e3/t.getAutoLevel())}),o.$on("playerDefeated",function(){clearInterval(k)})}},O=P,H=Object(v["a"])(O,C,y,!1,null,null,null),j=H.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row h-100"},[a("div",{staticClass:"col pr-0 h-100"},[t.getChatActive()?a("div",{staticClass:"card h-100 w-100"},[a("div",{staticClass:"card-header"},[t._v("\n\t\t\t\tconsole.log(C.U.R.V.Y.)\n\t\t\t")]),a("div",{staticClass:"card-body p-0",staticStyle:{position:"relative"}},[a("transition-group",{staticClass:"h-100 w-100 pl-1 pr-1",staticStyle:{position:"absolute","overflow-y":"scroll","overflow-x":"hidden"},attrs:{name:"fade",mode:"out-in",tag:"div"}},t._l(t.getChatMessage(),function(e,c){return a("div",{key:c+1,staticClass:"row"},[a("div",{staticClass:"col-1"},[a("span",{staticClass:"text-just text-center"},[t._v("»")])]),a("div",{staticClass:"col"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t\t\t")])])}),0)],1)]):t._e()])])},_=[];function S(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,c)}return a}function B(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?S(a,!0).forEach(function(e){Object(s["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):S(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var x={methods:B({},Object(l["c"])(["getClickBalance","getChatActive","getChatPrice","getChatMessage"]),{},Object(l["b"])(["setClickBalanceSubtract","setChatActive","setChatMessage"]))},E=x,D=Object(v["a"])(E,A,_,!1,null,null,null),F=D.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col p-0"},[a("div",{staticClass:"card h-100 w-100"},[a("div",{staticClass:"card-header"},[t._v("\n\t\t\t\t\tPatting Points Adaptation Processor\n\t\t\t\t")]),a("div",{staticClass:"card-body"},[a("p",{staticClass:"lead"},[t._v("Box Points: "),a("span",{staticClass:"text-just"},[t._v(t._s(t.getBoxPoints()))])]),a("hr"),t._m(0),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._m(1)]),a("button",{staticClass:"btn btn-just btn-block",on:{click:function(e){return t.converter()}}},[t._v("\n\t\t\t\t\t\tRun Algorithm ("+t._s(t.getClickBalance().toFixed(0))+" PP)\n\t\t\t\t\t")])])])])])},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("All-Or-Nothing Algorithm "),a("span",{staticClass:"small"},[t._v("(patent pending)")]),t._v(":")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{staticClass:"language-javascript"},[a("code",[t._v("converter( () => {\nthis.setBoxPoints += Math.floor(this.getClickBalance/2)\nthis.setClickBalanceSubtract(this.getClickBalance)\n})")]),t._v("\n\t\t\t\t\t\t")])}];function R(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,c)}return a}function T(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?R(a,!0).forEach(function(e){Object(s["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):R(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var U={methods:T({},Object(l["c"])(["getClickBalance","getBoxActive","getBoxPrice","getBoxPoints"]),{},Object(l["b"])(["setClickBalanceSubtract","setBoxActive","setBoxPoints"]),{converter:function(){var t=this.getClickBalance();this.setBoxPoints(t),this.setClickBalanceSubtract(t)}})},$=U,G=Object(v["a"])($,I,L,!1,null,null,null),z=G.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col p-0 noselect"},[t.getHackActive()?a("div",{staticClass:"card h-100 w-100"},[a("div",{staticClass:"card-header"},[t._v("\n\t\t\t\tC.U.R.V.Y. VM Settings\n\t\t\t")]),a("div",{staticClass:"card-body pb-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("p",{staticClass:"lead w-100"},[t._v("CPU: "),a("span",{staticClass:"text-just"},[t._v(t._s(t.getHackCpu())+"GHz")])])]),t.getHackCpu()<4?a("div",{staticClass:"col-8"},[a("button",{staticClass:"btn btn-just btn-block",on:{click:function(e){return t.upgradeCpu()}}},[t._v("\n\t\t\t\t\t\t\tOverclock ("+t._s(t.getHackCpuPrice())+" BP)\n\t\t\t\t\t\t")])]):a("div",{staticClass:"col-8"},[a("p",{staticClass:"lead"},[t._v("Max Speed")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("p",{staticClass:"lead w-100"},[t._v("RAM: "),a("span",{staticClass:"text-just"},[t._v(t._s(t.getHackRam())+"GiB")])])]),t.getHackRam()<6?a("div",{staticClass:"col-8"},[a("button",{staticClass:"btn btn-just btn-block",on:{click:function(e){return t.upgradeRam()}}},[t._v("\n\t\t\t\t\t\t\tDownload RAM ("+t._s(t.getHackRamPrice())+" BP)\n\t\t\t\t\t\t")])]):a("div",{staticClass:"col-8"},[a("p",{staticClass:"lead"},[t._v("Max Capacity")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("hr"),a("p",{staticClass:"lead"},[t._v("Firewall: \n\t\t\t\t\t\t\t"),a("span",{staticClass:"text-just"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.getHackFwall()>0?"Enabled - ":"Disabled")+"\n\t\t\t\t\t\t\t")]),t.getHackFwall()>0?a("span",{staticClass:"text-just"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.getHackFwall()<4?"Level "+t.getHackFwall():"Maximum Security")+"\n\t\t\t\t\t\t\t")]):t._e()])])]),0==t.getHackFwall()?a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("button",{staticClass:"btn btn-just btn-block mb-4",on:{click:function(e){return t.upgradeFwall()}}},[t._v("\n\t\t\t\t\t\t\tEnable ("+t._s(t.getHackFwallPrice())+" PP)\n\t\t\t\t\t\t")])])]):t._e(),t.getHackFwall()>0?a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t.getHackFwall()<4?a("button",{staticClass:"btn btn-just btn-block mb-4",on:{click:function(e){return t.upgradeFwall()}}},[t._v("\n\t\t\t\t\t\t\tUpgrade ("+t._s(t.getHackFwallPrice())+" PP)\n\t\t\t\t\t\t")]):t._e()])]):t._e()])]):t._e()])])},V=[];function W(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,c)}return a}function J(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?W(a,!0).forEach(function(e){Object(s["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):W(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var Y={methods:J({},Object(l["c"])(["getClickBalance","getBoxPoints","getChatActive","getAutoActive","getHackActive","getHackPrice","getHackRam","getHackRamPrice","getHackCpu","getHackCpuPrice","getHackFwall","getHackFwallIntegrity","getHackFwallPrice"]),{},Object(l["b"])(["setClickBalanceSubtract","setBoxBalanceSubtract","setChatActive","setAutoActive","setChatMessage","setBoxActive","setBoxPoints","setHackActive","setHackCpuUpgrade","setHackRamUpgrade","setHackFwallUpgrade","setHackerStatus"]),{upgradeRam:function(){this.getBoxPoints()>=this.getHackRamPrice()&&(this.setBoxBalanceSubtract(this.getHackRamPrice()),this.setHackRamUpgrade())},upgradeCpu:function(){this.getBoxPoints()>=this.getHackCpuPrice()&&(this.setBoxBalanceSubtract(this.getHackCpuPrice()),this.setHackCpuUpgrade())},upgradeFwall:function(){this.getClickBalance()>=this.getHackFwallPrice()&&(0==this.getHackFwall()&&o.$emit("backDoor"),this.getHackFwall()<4?(this.setClickBalanceSubtract(this.getHackFwallPrice()),this.setHackFwallUpgrade()):this.setChatMessage("this firewall is already stronger than the golden shield, what more do you want (☉▵☉' )"))}})},N=Y,X=Object(v["a"])(N,q,V,!1,null,null,null),K=X.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row h-100"},[t.getHackActive()?a("div",{staticClass:"col p-0"},[a("div",{staticClass:"card bg-dark text-light w-100 h-100"},[a("div",{staticClass:"card-header"},[t._v("\n\t\t\t\tC.U.R.V.Y. VM Terminal\n\t\t\t")]),a("div",{staticClass:"card-body p-0",staticStyle:{position:"relative",overflow:"hidden"}},[a("div",{staticClass:"row w-100 h-100 ml-0"},[a("div",{staticClass:"col p-0 w-100 h-100"},[a("vue-command",{attrs:{commands:t.commands,prompt:t.prompt,"hide-bar":t.bar}})],1)])])])]):t._e()])},Q=[],tt=(a("7f7f"),a("a015")),et=a.n(tt);a("f436");function at(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,c)}return a}function ct(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?at(a,!0).forEach(function(e){Object(s["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):at(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var it,rt={data:function(){var t=this;return{list:this.getHackCommands(),prompt:"user@cvm: ~$",bar:!0,commands:{help:function(){for(var e="",a=0;a<t.list.length;a++)e+=t.list[a].name+": "+t.list[a].description+" ("+t.list[a].price+" PP)<br>";return e},ping:function(){return t.getClickBalance()>=t.list[1].price?(t.setClickBalanceSubtract(t.list[1].price),t.setCommand("ping"),"Initializing denial of service attack..."):"[Error] insufficient funds"},route:function(){return t.getClickBalance()>=t.list[2].price?(t.setClickBalanceSubtract(t.list[2].price),t.setCommand("route"),"Tracing package route..."):"[Error] insufficient funds"},ifconfig:function(){return t.getClickBalance()>=t.list[3].price?(t.setClickBalanceSubtract(t.list[3].price),t.setCommand("ifconfig"),"Reconfiguring configured configuration for eth0..."):"[Error] insufficient funds"},ethtool:function(){return t.getClickBalance()>=t.list[4].price?(t.setClickBalanceSubtract(t.list[4].price),t.setCommand("ethtool"),"Patching firewall..."):"[Error] insufficient funds"},netcat:function(){return t.getClickBalance()>=t.list[5].price?(t.setClickBalanceSubtract(t.list[5].price),t.setCommand("netcat"),"Sending out nyan..."):"[Error] insufficient funds"},nmap:function(){return t.getClickBalance()>=t.list[6].price?(t.setClickBalanceSubtract(t.list[6].price),t.setCommand("nmap"),"Open ports found..."):"[Error] insufficient funds"},netwatch:function(){return t.getClickBalance()>=t.list[7].price?(t.setClickBalanceSubtract(t.list[7].price),t.setCommand("netwatch"),"All systems go..."):"[Error] insufficient funds"},reboot:function(){return localStorage.clear(),location.reload(),"Sending SIGKILL to all processes..."},zlatan:function(){return"guys, any news? I come here every day but still waiting so long with no news. every day losing money. where is Mansto?"}}}},methods:ct({},Object(l["c"])(["getClickBalance","getHackActive","getHackCommands","getHackerEnergy","getHackFwallIntegrity"]),{},Object(l["b"])(["setCommand","setClickBalanceSubtract","setBoxPoints","setHackFwallIntegrity","setHackerStatus"])),components:{VueCommand:et.a}},nt=rt,st=(a("dca6"),Object(v["a"])(nt,Z,Q,!1,null,null,null)),lt=st.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.getHackerActive()?a("div",{staticClass:"row w-100 mt-4"},[a("div",{staticClass:"col p-0"},[a("div",{staticClass:"card bg-dark text-light"},[a("div",{staticClass:"card-header"},[t._v("\n\t\t\t\t\tcat /var/log/fail2ban.log\n\t\t\t\t")]),a("div",{staticClass:"card-body"},[a("p",{staticClass:"lead"},[t._v("Inbound Ping "),a("span",{staticClass:"text-just attention-anim"},[t._v(t._s(t.incomingTimer)+"ms")])]),a("p",{staticClass:"mb-0"},[t._v("Skill Level: "+t._s(t.skillLevel))])]),a("div",{staticClass:"card-footer p-0",staticStyle:{overflow:"hidden"}},[a("div",{staticClass:"progress bg-dark rounded-0",staticStyle:{height:"2.5rem"}},[a("div",{staticClass:"progress-bar bg-just progress-bar-striped progress-bar-animated",style:{width:t.fWallHealth()+"%"},attrs:{role:"progressbar","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"}})])])])])]):t._e()])},ut=[];function gt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,c)}return a}function ht(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?gt(a,!0).forEach(function(e){Object(s["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):gt(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var dt={data:function(){return{hackList:this.getHackerSkill(),incomingTimer:0}},methods:ht({},Object(l["c"])(["getHackerActive","getHackerLevel","getHackerBaseEnergy","getHackerEnergy","getHackerSkill","getClickTotal","getHackerDelay","getHackerSkip"]),{},Object(l["b"])(["setHackerStatus","setHackAttack","setHackerEnergy","setHackerLevel","setHackerSkip","setHackFwallIntegrity"]),{fWallHealth:function(){return 100/this.getHackerBaseEnergy()*this.getHackerEnergy()},attackTimer:function(){var t=this,e=this.getHackerDelay()-10*this.getHackerLevel();this.incomingTimer=e,it=setInterval(function(){0==t.getHackerSkip()?t.setHackAttack(Math.floor(5+5*t.getHackerLevel()/10)):t.setHackerSkip(-1)},e)}}),computed:{skillLevel:function(){return this.getHackerLevel()>this.hackList.length?this.hackList[this.hackList.length-1]:this.hackList[this.getHackerLevel()-1]}},mounted:function(){var t=this;setInterval(function(){t.getHackerEnergy()<=0&&o.$emit("hackerDefeated")},10);o.$on("backDoor",function(){var e=t.getClickTotal(),a=setInterval(function(){t.getClickTotal()-e>=100&&(t.setHackerEnergy(),t.setHackerStatus(),t.attackTimer(),clearInterval(a))},1e3)}),o.$on("hackerDefeated",function(){clearInterval(it),t.setHackerSkip(0),t.setHackerStatus(),t.setHackerLevel(),t.setHackerEnergy();var e=t.getClickTotal(),a=setInterval(function(){t.getClickTotal()-e>=25&&(t.setHackerStatus(),t.attackTimer(),clearInterval(a))},1e3)}),o.$on("playerDefeated",function(){t.setHackFwallIntegrity(0),clearInterval(it)})}},kt=dt,pt=Object(v["a"])(kt,ot,ut,!1,null,null,null),ft=pt.exports;function vt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,c)}return a}function mt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?vt(a,!0).forEach(function(e){Object(s["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):vt(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var bt={data:function(){return{showGameOver:!1}},methods:mt({},Object(l["c"])(["getGameStart","getClickBalance","getChatActive","getChatPrice","getBoxActive","getBoxPoints","getBoxPrice","getHackActive","getHackPrice","getAutoActive","getHackFwallIntegrity"]),{},Object(l["b"])(["setClickBalanceSubtract","setBoxBalanceSubtract","setBoxActive","setChatActive","setChatMessage","setHackActive","setAutoActive","setBoxPoints","setHackFwallIntegrity"]),{activateBox:function(){this.getClickBalance()>=this.getBoxPrice()&&(this.setClickBalanceSubtract(this.getBoxPrice()),this.setBoxActive())},activateChat:function(){this.getClickBalance()>=this.getChatPrice()&&(this.setClickBalanceSubtract(this.getChatPrice()),this.setChatActive(),this.setChatMessage("hey, thanks for waking me up ヽ(‘ ∇‘ )ノ"))},activateHack:function(){this.getBoxPoints()>=this.getHackPrice()&&(this.setBoxBalanceSubtract(this.getHackPrice()),this.setHackActive(),this.getChatActive()?this.setChatMessage("aah, my vm. it's a bit rusty tho; you might want to upgrade the components to make it faster (✿◠‿◠)"):(this.setChatActive(),this.setChatMessage("ooh, my vm is running. that means you got the console.log for free now, you cheapskate (¬‿¬)")),this.getAutoActive()||(this.setAutoActive(),this.setChatMessage("my vm requires a constant stream of patting, so the A.P.S. is kind of compulsory for this to work out. lucky you (☉▵☉' )"),o.$emit("autoActivated")))},reset:function(){localStorage.clear(),location.reload()},cheat:function(){this.setClickBalanceSubtract(-1e5),this.setBoxPoints(1e5)},hurt:function(){this.setHackFwallIntegrity(-1*(this.getHackFwallIntegrity()+1))}}),components:{Curvy:b,"click-stats":j,Chat:F,"box-module":z,"hack-upgrade":K,"hack-game":lt,hacker:ft},mounted:function(){var t=this;o.$on("playerDefeated",function(){t.showGameOver=!0})}},Ct=bt,yt=Object(v["a"])(Ct,r,n,!1,null,null,null),wt=yt.exports,Mt=a("0e44");c["default"].use(l["a"]);var Pt=new l["a"].Store({plugins:[Object(Mt["a"])()],state:{gameStart:!1,clickCounter:{byPlayer:0,total:0,balance:0},clickMulti:{active:!1,price:1,level:1},autoClickModule:{active:!1,price:1,level:1},chatModule:{active:!1,price:10,messages:[]},boxModule:{active:!1,price:150,balance:0},hackModule:{active:!1,price:100,upgrades:{ram:{price:150,level:1},cpu:{price:300,level:1},firewall:{price:250,level:0,energy:0}},game:{delay:5e3,threads:0,hacker:{active:!1,level:1,baseEnergy:15,energy:15,skip:0,skill:["Drachenlord","Scriptkiddie","Jack the Ripper","Sub7","Google-Fu","Stackoverflow","Snowmen","Cambridge Analytica","Reddit","Whistleblower","Sleuth","LOIC","phreak","Man In The Middle","Hacktivist","L0pht","h4x0r","sabu","Incel","Morpheus","John McAfee","0Cool","Cypher","Blackhat","Mitnick","4chan","Lizard Squad","lulzsec","Woz","Zoz","Anonymous","Cult of the Dead Cow","Elliot","Mr. Robot","Nation State","Three Letter Agency","Cicada","Agent 232"]},commands:[{name:"help",price:0,description:"list all available commands"},{name:"ping",price:10,description:"slow down attacker",slow:1},{name:"route",price:25,description:"slow down attacker, hack firewall -5",slow:1,attack:5},{name:"ifconfig",price:50,description:"slow down attacker, hack firewall -10",slow:1,attack:10},{name:"ethtool",price:75,description:"repair own firewall +10",repair:10},{name:"netcat",price:100,description:"hack firewall -15, repair own firewall +10",attack:15,repair:10},{name:"nmap",price:150,description:"hack firewall -25, repair own firewall +10",attack:25,repair:10},{name:"netwatch",price:200,description:"slow down attacker, hack firewall -25, repair own firewall +20",slow:1,attack:25,repair:20},{name:"reboot",price:0,description:"halts all proccesses and reboots the machine, will terminate all connections"}]}}},getters:{getGameStart:function(t){return t.gameStart},getClickPlayer:function(t){return t.clickCounter.byPlayer},getClickTotal:function(t){return t.clickCounter.total},getClickBalance:function(t){return t.clickCounter.balance},getMultiActive:function(t){return t.clickMulti.active},getMultiPrice:function(t){return t.clickMulti.price},getMultiLevel:function(t){return t.clickMulti.level},getAutoActive:function(t){return t.autoClickModule.active},getAutoPrice:function(t){return t.autoClickModule.price},getAutoLevel:function(t){return t.autoClickModule.level},getChatActive:function(t){return t.chatModule.active},getChatPrice:function(t){return t.chatModule.price},getChatMessage:function(t){return t.chatModule.messages},getBoxActive:function(t){return t.boxModule.active},getBoxPrice:function(t){return t.boxModule.price},getBoxPoints:function(t){return t.boxModule.balance},getHackActive:function(t){return t.hackModule.active},getHackPrice:function(t){return t.hackModule.price},getHackRam:function(t){return t.hackModule.upgrades.ram.level},getHackRamPrice:function(t){return t.hackModule.upgrades.ram.price},getHackCpu:function(t){return t.hackModule.upgrades.cpu.level},getHackCpuPrice:function(t){return t.hackModule.upgrades.cpu.price},getHackFwall:function(t){return t.hackModule.upgrades.firewall.level},getHackFwallIntegrity:function(t){return t.hackModule.upgrades.firewall.energy},getHackFwallPrice:function(t){return t.hackModule.upgrades.firewall.price},getHackCommands:function(t){return t.hackModule.game.commands},getHackerActive:function(t){return t.hackModule.game.hacker.active},getHackerLevel:function(t){return t.hackModule.game.hacker.level},getHackerBaseEnergy:function(t){return t.hackModule.game.hacker.baseEnergy},getHackerEnergy:function(t){return t.hackModule.game.hacker.energy},getHackerSkill:function(t){return t.hackModule.game.hacker.skill},getHackerDelay:function(t){return t.hackModule.game.delay},getHackerSkip:function(t){return t.hackModule.game.hacker.skip}},mutations:{gameStart:function(t){t.gameStart=!0},clickPlayer:function(t){t.clickCounter.byPlayer+=1},clickTotal:function(t,e){t.clickCounter.total+=e},clickBalanceAdjust:function(t,e){t.clickCounter.balance+=e},multiActive:function(t){t.clickMulti.active=!0,t.clickMulti.level++,t.chatModule.active&&t.chatModule.messages.push("activating the multiplier is a good way to reduce the chance of getting tendonitis (o◡o )")},multiPrice:function(t){t.clickMulti.price+=Math.floor(1.8*t.clickMulti.price)},multiLevel:function(t){t.clickMulti.level++},autoActive:function(t){t.autoClickModule.active=!0},autoPrice:function(t){t.autoClickModule.price+=Math.floor(1.15*t.autoClickModule.price)},autoLevel:function(t){t.autoClickModule.level++},chatActive:function(t){t.chatModule.active=!0},chatMessage:function(t,e){t.chatModule.messages.push(e)},boxActive:function(t){t.boxModule.active=!0,t.chatModule.active&&t.chatModule.messages.push("oh neat, you got the P.P.A.P. running! those box points can be used to upgrade my vm (ᅌᴗᅌ*)")},boxPoints:function(t,e){t.boxModule.balance+=Math.floor(e/2)},boxBalanceSubtract:function(t,e){t.boxModule.balance-=e},hackActive:function(t){t.hackModule.active=!0},hackCpuUpgrade:function(t){t.hackModule.upgrades.cpu.level++,t.hackModule.upgrades.cpu.price+=Math.floor(.3*t.hackModule.upgrades.cpu.price)},hackRamUpgrade:function(t){t.hackModule.upgrades.ram.level++,t.hackModule.upgrades.ram.price+=Math.floor(.2*t.hackModule.upgrades.ram.price)},hackFwallUpgrade:function(t){t.hackModule.upgrades.firewall.level++,t.hackModule.upgrades.firewall.price+=Math.floor(.1*t.hackModule.upgrades.firewall.price),t.hackModule.upgrades.firewall.energy+=25},hackFwallIntegrity:function(t,e){var a=t.hackModule.upgrades.firewall.energy+=e;a<=0&&(t.hackModule.upgrades.firewall.energy=0)},commandExec:function(t,e){var a;t.hackModule.game.threads++;var c=25*t.hackModule.upgrades.firewall.level;t.hackModule.game.threads>t.hackModule.upgrades.ram.level?(t.hackModule.game.threads--,t.chatModule.messages.push("whoops, looks like you would need more RAM to do this; your process queue is packed ¯\\_(ツ)_/¯")):setTimeout(function(){switch(!0){case"ping"===e:t.chatModule.messages.push("the attacker was confused by the ping spam we sent, he will be busy for a while (•̀o•́)ง"),t.hackModule.game.hacker.skip++,t.hackModule.game.threads--;break;case"route"===e:a=t.hackModule.game.commands[2],t.chatModule.messages.push("found the attacker's firewall and damaged it! take that, sucker ρ(￣ﾍ￣ ﾒ)"),t.hackModule.game.hacker.skip++,t.hackModule.game.hacker.energy-=a.attack,t.hackModule.game.threads--;break;case"ifconfig"===e:a=t.hackModule.game.commands[3],t.chatModule.messages.push("sweet revenge (´꒳`∗) the attacker took a big hit; that'll take some time to get sorted out ε-(‘ﾍ´○)┓"),t.hackModule.game.hacker.skip++,t.hackModule.game.hacker.energy-=a.attack,t.hackModule.game.threads--;break;case"ethtool"===e:t.chatModule.messages.push("repaired my firewall a little (ﾉ^∇^)ﾉﾟ"),(t.hackModule.upgrades.firewall.energy+=10>=c)?t.hackModule.upgrades.firewall.energy=c:t.hackModule.upgrades.firewall.energy+=10,t.hackModule.game.threads--;break;case"netcat"===e:a=t.hackModule.game.commands[5],t.chatModule.messages.push("repairing or attacking? why not have both? take this Σ(ノ°▽°)ノ"),(t.hackModule.upgrades.firewall.energy+=10>=c)?t.hackModule.upgrades.firewall.energy=c:t.hackModule.upgrades.firewall.energy+=10,t.hackModule.game.hacker.energy-=a.attack,t.hackModule.game.threads--;break;case"nmap"===e:a=t.hackModule.game.commands[6],t.chatModule.messages.push("attack train of repairs coming through ⤴︎ ε=ε=(ง ˃̶͈̀ᗨ˂̶͈́)۶ ⤴︎"),(t.hackModule.upgrades.firewall.energy+=10>=c)?t.hackModule.upgrades.firewall.energy=c:t.hackModule.upgrades.firewall.energy+=10,t.hackModule.game.hacker.energy-=a.attack,t.hackModule.game.threads--;break;case"netwatch"===e:a=t.hackModule.game.commands[7],t.chatModule.messages.push("take my ultimate attack, "+t.hackModule.game.hacker.skill[t.hackModule.game.hacker.level-1]+" 凸ಠ益ಠ)凸"),t.hackModule.game.hacker.skip++,(t.hackModule.upgrades.firewall.energy+=20>=c)?t.hackModule.upgrades.firewall.energy=c:t.hackModule.upgrades.firewall.energy+=20,t.hackModule.game.hacker.energy-=a.attack,t.hackModule.game.threads--;break}},t.hackModule.game.delay-1e3*t.hackModule.upgrades.cpu.level)},hackerStatus:function(t){t.hackModule.game.hacker.active=!t.hackModule.game.hacker.active},hackAttack:function(t,e){t.hackModule.upgrades.firewall.energy-=e},hackerEnergy:function(t){var e=t.hackModule.game.hacker.baseEnergy;t.hackModule.game.hacker.level>1?t.hackModule.game.hacker.energy=e+.1*e:t.hackModule.game.hacker.energy=e},hackerLevel:function(t){t.hackModule.game.hacker.level++},hackerSkip:function(t,e){t.hackModule.game.hacker.skip+=e}},actions:{setGameStart:function(t){t.commit("gameStart")},setClickBalanceSubtract:function(t,e){t.commit("clickBalanceAdjust",-1*e)},setHumanClick:function(t,e){t.commit("clickPlayer"),t.commit("clickTotal",e),t.commit("clickBalanceAdjust",e)},setMultiActive:function(t){t.commit("multiActive"),t.commit("multiPrice")},setMultiUpdate:function(t){t.commit("multiPrice"),t.commit("multiLevel")},setAutoClick:function(t,e){t.commit("clickTotal",1),t.commit("clickBalanceAdjust",e)},setAutoActive:function(t){t.commit("autoActive"),t.commit("autoPrice")},setAutoUpdate:function(t){t.commit("autoPrice"),t.commit("autoLevel")},setChatActive:function(t){t.commit("chatActive")},setChatMessage:function(t,e){t.commit("chatMessage",e)},setBoxActive:function(t){t.commit("boxActive")},setBoxPoints:function(t,e){t.commit("boxPoints",e)},setBoxBalanceSubtract:function(t,e){t.commit("boxBalanceSubtract",e)},setHackActive:function(t){t.commit("hackActive")},setHackCpuUpgrade:function(t){t.commit("hackCpuUpgrade")},setHackRamUpgrade:function(t){t.commit("hackRamUpgrade")},setHackFwallUpgrade:function(t){t.commit("hackFwallUpgrade")},setHackFwallIntegrity:function(t,e){t.commit("hackFwallIntegrity",e)},setCommand:function(t,e){t.commit("commandExec",e)},setHackerStatus:function(t){t.commit("hackerStatus")},setHackAttack:function(t,e){t.commit("hackAttack",e)},setHackerEnergy:function(t){t.commit("hackerEnergy")},setHackerLevel:function(t){t.commit("hackerLevel")},setHackerSkip:function(t,e){t.commit("hackerSkip",e)}}});a("e20a"),c["default"].config.productionTip=!1,c["default"].use(i["a"]),new c["default"]({store:Pt,render:function(t){return t(wt)}}).$mount("#app")},"720b":function(t,e,a){t.exports=a.p+"img/curvy.e8521024.png"},dca6:function(t,e,a){"use strict";var c=a("3987"),i=a.n(c);i.a}});
//# sourceMappingURL=app.7d4a8d2c.js.map