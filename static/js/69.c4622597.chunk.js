(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[69],{1686:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=a(1);var r=h(l);var u=a(2652);var n=h(u);var i=a(2653);var c=h(i);var d=a(2654);var f=h(d);var s=a(1790);var m=h(s);var o=a(364);var v=h(o);var E=a(47);var p=h(E);function h(e){return e&&e.__esModule?e:{default:e}}function g(e){return r.default.createElement("div",{className:"appbar-wrapper"},r.default.createElement(m.default,{title:r.default.createElement(p.default,{id:"sidebar.appBar"}),match:e.match}),r.default.createElement("div",{className:"row"},r.default.createElement(v.default,{colClasses:"col-sm-12 col-md-12 col-xl-6",heading:r.default.createElement(p.default,{id:"widgets.Simple App Bars"})},r.default.createElement(n.default,null)),r.default.createElement(v.default,{colClasses:"col-sm-12 col-md-12 col-xl-6",heading:r.default.createElement(p.default,{id:"widgets.appBarsWithButtons"})},r.default.createElement(c.default,null))),r.default.createElement(v.default,{heading:r.default.createElement(p.default,{id:"widgets.appBarsWithButtons"})},r.default.createElement(f.default,null)))}t.default=g},1790:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=a(1);var r=d(l);var u=a(52);var n=a(15);var i=a(47);var c=d(i);function d(e){return e&&e.__esModule?e:{default:e}}var f=function e(t){var a=t.split("-");if(a.length>1){return r.default.createElement(c.default,{id:"sidebar."+(a[0].charAt(0)+a[0].slice(1)+a[1].charAt(0).toUpperCase()+a[1].slice(1))})}else{return r.default.createElement(c.default,{id:"sidebar."+(t.charAt(0)+t.slice(1))})}};var s=function e(t,a,l){if(l===0){return"/"}else{return t.split(a)[0]+a}};var m=function e(t){var a=t.title,l=t.match,i=t.enableBreadCrumb;var c=l.path.substr(1);var d=c.split("/");return r.default.createElement("div",{className:"page-title d-flex justify-content-between align-items-center"},a&&r.default.createElement("div",{className:"page-title-wrap"},r.default.createElement("i",{className:"ti-angle-left"}),r.default.createElement("h2",{className:""},a)),i&&r.default.createElement(u.Breadcrumb,{className:"mb-0 tour-step-7",tag:"nav"},d.map(function(e,t){return r.default.createElement(u.BreadcrumbItem,{active:d.length===t+1,tag:d.length===t+1?"span":n.Link,key:t,to:s(c,e,t)},f(e))})))};m.defaultProps={enableBreadCrumb:true};t.default=m},2652:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=a(1);var r=o(l);var u=a(201);var n=o(u);var i=a(202);var c=o(i);var d=a(146);var f=o(d);var s=a(374);var m=o(s);function o(e){return e&&e.__esModule?e:{default:e}}var v=function e(){return r.default.createElement(n.default,{position:"static",color:"default"},r.default.createElement(c.default,null,r.default.createElement(f.default,{color:"inherit","aria-label":"Menu"},r.default.createElement(m.default,null)),r.default.createElement("h5",{className:"mb-0"},"Project Name")))};t.default=v},2653:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=a(1);var r=g(l);var u=a(85);var n=a(201);var i=g(n);var c=a(202);var d=g(c);var f=a(271);var s=g(f);var m=a(105);var o=g(m);var v=a(146);var E=g(v);var p=a(374);var h=g(p);function g(e){return e&&e.__esModule?e:{default:e}}var b={root:{width:"100%"},flex:{flex:1},menuButton:{marginLeft:-12,marginRight:20}};function w(e){var t=e.classes;return r.default.createElement(i.default,{position:"static",className:"bg-info"},r.default.createElement(d.default,null,r.default.createElement(E.default,{color:"inherit","aria-label":"Menu"},r.default.createElement(h.default,null)),r.default.createElement(s.default,{type:"title",color:"inherit",className:t.flex},"Title"),r.default.createElement(o.default,{color:"inherit"},"Login")))}t.default=(0,u.withStyles)(b)(w)},2654:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=a(1);var r=h(l);var u=a(85);var n=a(201);var i=h(n);var c=a(202);var d=h(c);var f=a(271);var s=h(f);var m=a(52);var o=a(146);var v=h(o);var E=a(374);var p=h(E);function h(e){return e&&e.__esModule?e:{default:e}}var g={root:{width:"100%"},flex:{flex:1},menuButton:{marginLeft:-12,marginRight:20}};function b(e){var t=e.classes;return r.default.createElement(i.default,{position:"static",className:"bg-primary"},r.default.createElement(d.default,null,r.default.createElement(v.default,{color:"inherit","aria-label":"Menu"},r.default.createElement(p.default,null)),r.default.createElement(s.default,{type:"title",color:"inherit",className:t.flex},"Company Name"),r.default.createElement("div",null,r.default.createElement("ul",{className:"ml-auto list-inline navbar-right mb-0"},r.default.createElement("li",{className:"list-inline-item"},r.default.createElement(v.default,{className:"text-white"},r.default.createElement("i",{className:"ti-search"}))),r.default.createElement("li",{className:"list-inline-item position-relative"},r.default.createElement(v.default,{className:"text-white"},r.default.createElement("i",{className:"ti-bell"}))),r.default.createElement("li",{className:"list-inline-item"},r.default.createElement(v.default,{className:"text-white"},r.default.createElement("i",{className:"ti-settings"}))),r.default.createElement(m.UncontrolledDropdown,{nav:true,className:"list-inline-item vr-super"},r.default.createElement(m.DropdownToggle,{nav:true,caret:true,className:"text-white"},r.default.createElement("span",{className:"mr-10"},r.default.createElement("img",{src:a(744),alt:"user profile",className:"img-fluid rounded-circle",width:"40",height:"40"})),"Lucile Beck"),r.default.createElement(m.DropdownMenu,null,r.default.createElement(m.DropdownItem,null,"My Profile"),r.default.createElement(m.DropdownItem,null,"My Contacts"),r.default.createElement(m.DropdownItem,null,"Emails")))))))}t.default=(0,u.withStyles)(g)(b)}}]);