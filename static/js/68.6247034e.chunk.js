(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[68],{1685:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||false;l.configurable=true;if("value"in l)l.writable=true;Object.defineProperty(e,l.key,l)}}return function(t,a,l){if(a)e(t.prototype,a);if(l)e(t,l);return t}}();var r=a(1);var n=N(r);var i=a(1790);var u=N(i);var s=a(2645);var c=N(s);var o=a(2646);var d=N(o);var f=a(2647);var m=N(f);var v=a(2648);var h=N(v);var p=a(2649);var E=N(p);var g=a(2650);var b=N(g);var y=a(2651);var w=N(y);var k=a(47);var _=N(k);function N(e){return e&&e.__esModule?e:{default:e}}function O(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function A(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function x(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var T=function(e){x(t,e);function t(){O(this,t);return A(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}l(t,[{key:"render",value:function e(){return n.default.createElement("div",{className:"alert-wrapper"},n.default.createElement(u.default,{title:n.default.createElement(_.default,{id:"sidebar.alerts"}),match:this.props.match}),n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col-sm-12 col-md-6"},n.default.createElement(c.default,null),n.default.createElement(d.default,null),n.default.createElement(m.default,null)),n.default.createElement("div",{className:"col-sm-12 col-md-6"},n.default.createElement(h.default,null),n.default.createElement(E.default,null),n.default.createElement(b.default,null),n.default.createElement(w.default,null))))}}]);return t}(r.Component);t.default=T},1790:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=a(1);var r=c(l);var n=a(52);var i=a(15);var u=a(47);var s=c(u);function c(e){return e&&e.__esModule?e:{default:e}}var o=function e(t){var a=t.split("-");if(a.length>1){return r.default.createElement(s.default,{id:"sidebar."+(a[0].charAt(0)+a[0].slice(1)+a[1].charAt(0).toUpperCase()+a[1].slice(1))})}else{return r.default.createElement(s.default,{id:"sidebar."+(t.charAt(0)+t.slice(1))})}};var d=function e(t,a,l){if(l===0){return"/"}else{return t.split(a)[0]+a}};var f=function e(t){var a=t.title,l=t.match,u=t.enableBreadCrumb;var s=l.path.substr(1);var c=s.split("/");return r.default.createElement("div",{className:"page-title d-flex justify-content-between align-items-center"},a&&r.default.createElement("div",{className:"page-title-wrap"},r.default.createElement("i",{className:"ti-angle-left"}),r.default.createElement("h2",{className:""},a)),u&&r.default.createElement(n.Breadcrumb,{className:"mb-0 tour-step-7",tag:"nav"},c.map(function(e,t){return r.default.createElement(n.BreadcrumbItem,{active:c.length===t+1,tag:c.length===t+1?"span":i.Link,key:t,to:d(s,e,t)},o(e))})))};f.defaultProps={enableBreadCrumb:true};t.default=f},2645:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=a(1);var r=o(l);var n=a(52);var i=a(47);var u=o(i);var s=a(364);var c=o(s);function o(e){return e&&e.__esModule?e:{default:e}}var d=function e(){return r.default.createElement(c.default,{heading:r.default.createElement(u.default,{id:"sidebar.alerts"})},r.default.createElement(n.Alert,{color:"primary"},"This is a primary alert — check it out!"),r.default.createElement(n.Alert,{color:"secondary"},"This is a secondary alert — check it out!"),r.default.createElement(n.Alert,{color:"success"},"This is a success alert — check it out!"),r.default.createElement(n.Alert,{color:"danger"},"This is a danger alert — check it out!"),r.default.createElement(n.Alert,{color:"warning"},"This is a warning alert — check it out!"),r.default.createElement(n.Alert,{color:"info"},"This is a info alert — check it out!"),r.default.createElement(n.Alert,{color:"light"},"This is a light alert — check it out!"),r.default.createElement(n.Alert,{color:"dark"},"This is a dark alert — check it out!"))};t.default=d},2646:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=a(1);var r=o(l);var n=a(52);var i=a(47);var u=o(i);var s=a(364);var c=o(s);function o(e){return e&&e.__esModule?e:{default:e}}var d=function e(){return r.default.createElement(c.default,{heading:r.default.createElement(u.default,{id:"widgets.additionalContent"})},r.default.createElement(n.Alert,{color:"success"},r.default.createElement("h4",{className:"alert-heading"},"Well done!"),r.default.createElement("p",null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),r.default.createElement("hr",null),r.default.createElement("p",{className:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy.")),r.default.createElement(n.Alert,{color:"danger"},r.default.createElement("h4",{className:"alert-heading"},"Well done!"),r.default.createElement("p",null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),r.default.createElement("hr",null),r.default.createElement("p",{className:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy.")))};t.default=d},2647:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=a(1);var r=c(l);var n=a(47);var i=c(n);var u=a(364);var s=c(u);function c(e){return e&&e.__esModule?e:{default:e}}var o=function e(){return r.default.createElement(s.default,{heading:r.default.createElement(i.default,{id:"widgets.contexualAlerts"})},r.default.createElement("div",{className:"alert bg-primary text-white",role:"alert"},r.default.createElement("strong",null,"Well done!")," You successfully read this important alert message."),r.default.createElement("div",{className:"alert bg-success text-white",role:"alert"},r.default.createElement("strong",null,"Well done!")," You successfully read this important alert message."),r.default.createElement("div",{className:"alert bg-info text-white",role:"alert"},r.default.createElement("strong",null,"Heads up!")," This alert needs your attention, but its not super important."),r.default.createElement("div",{className:"alert bg-warning text-white",role:"alert"},r.default.createElement("strong",null,"Warning!")," Better check yourself, you are not looking too good."),r.default.createElement("div",{className:"alert bg-danger text-white",role:"alert"},r.default.createElement("strong",null,"Oh snap!")," Change a few things up and try submitting again."))};t.default=o},2648:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=a(1);var r=o(l);var n=a(52);var i=a(47);var u=o(i);var s=a(364);var c=o(s);function o(e){return e&&e.__esModule?e:{default:e}}var d=function e(){return r.default.createElement(c.default,{heading:r.default.createElement(u.default,{id:"widgets.alertsWithLink"})},r.default.createElement(n.Alert,{color:"primary"},"This is a primary alert with ",r.default.createElement("a",{href:"/#",className:"alert-link"},"an example link"),". Give it a click if you like."),r.default.createElement(n.Alert,{color:"secondary"},"This is a secondary alert with ",r.default.createElement("a",{href:"/#",className:"alert-link"},"an example link"),". Give it a click if you like."),r.default.createElement(n.Alert,{color:"success"},"This is a success alert with ",r.default.createElement("a",{href:"/#",className:"alert-link"},"an example link"),". Give it a click if you like."),r.default.createElement(n.Alert,{color:"danger"},"This is a danger alert with ",r.default.createElement("a",{href:"/#",className:"alert-link"},"an example link"),". Give it a click if you like."),r.default.createElement(n.Alert,{color:"warning"},"This is a warning alert with ",r.default.createElement("a",{href:"/#",className:"alert-link"},"an example link"),". Give it a click if you like."),r.default.createElement(n.Alert,{color:"info"},"This is a info alert with ",r.default.createElement("a",{href:"/#",className:"alert-link"},"an example link"),". Give it a click if you like."),r.default.createElement(n.Alert,{color:"light"},"This is a light alert with ",r.default.createElement("a",{href:"/#",className:"alert-link"},"an example link"),". Give it a click if you like."),r.default.createElement(n.Alert,{color:"dark"},"This is a dark alert with ",r.default.createElement("a",{href:"/#",className:"alert-link"},"an example link"),". Give it a click if you like."))};t.default=d},2649:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||false;l.configurable=true;if("value"in l)l.writable=true;Object.defineProperty(e,l.key,l)}}return function(t,a,l){if(a)e(t.prototype,a);if(l)e(t,l);return t}}();var r=a(1);var n=d(r);var i=a(52);var u=a(47);var s=d(u);var c=a(364);var o=d(c);function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t,a){if(t in e){Object.defineProperty(e,t,{value:a,enumerable:true,configurable:true,writable:true})}else{e[t]=a}return e}function m(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function v(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function h(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var p=function(e){h(t,e);function t(){var e;var a,l,r;m(this,t);for(var n=arguments.length,i=Array(n),u=0;u<n;u++){i[u]=arguments[u]}return r=(a=(l=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),l),l.state={visible:true,visible2:true,visible3:true},a),v(l,r)}l(t,[{key:"onDismiss",value:function e(t){this.setState(f({},t,false))}},{key:"render",value:function e(){var t=this;return n.default.createElement(o.default,{heading:n.default.createElement(s.default,{id:"widgets.alertDismiss"})},n.default.createElement(i.Alert,{color:"primary",isOpen:this.state.visible1,toggle:function e(){return t.onDismiss("visible1")}},"I am an alert and I can be dismissed!"),n.default.createElement(i.Alert,{color:"info",isOpen:this.state.visible2,toggle:function e(){return t.onDismiss("visible2")}},"I am an alert and I can be dismissed!"),n.default.createElement(i.Alert,{color:"danger",isOpen:this.state.visible3,toggle:function e(){return t.onDismiss("visible3")}},"I am an alert and I can be dismissed!"))}}]);return t}(r.Component);t.default=p},2650:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=a(1);var r=o(l);var n=a(52);var i=a(47);var u=o(i);var s=a(364);var c=o(s);function o(e){return e&&e.__esModule?e:{default:e}}var d=function e(){return r.default.createElement(c.default,{heading:r.default.createElement(u.default,{id:"widgets.uncontrolledDisableAlerts"})},r.default.createElement(n.UncontrolledAlert,{color:"primary"},"I am an alert and I can be dismissed!"))};t.default=d},2651:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=a(1);var r=c(l);var n=a(47);var i=c(n);var u=a(364);var s=c(u);function c(e){return e&&e.__esModule?e:{default:e}}var o=function e(){return r.default.createElement(s.default,{heading:r.default.createElement(i.default,{id:"widgets.alertsWithIcons"}),contentCustomClasses:"icon-alert"},r.default.createElement("div",{className:"alert bg-primary text-white",role:"alert"},r.default.createElement("span",{className:"alert-addon"},r.default.createElement("i",{className:"zmdi zmdi-group"})),r.default.createElement("p",null,r.default.createElement("strong",null,"Well done!")," You successfully read this important alert message.")),r.default.createElement("div",{className:"alert bg-success text-white",role:"alert"},r.default.createElement("span",{className:"alert-addon"},r.default.createElement("i",{className:"zmdi zmdi-notifications-active"})),r.default.createElement("p",null,r.default.createElement("strong",null,"Well done!")," You successfully read this important alert message.")),r.default.createElement("div",{className:"alert bg-info text-white",role:"alert"},r.default.createElement("span",{className:"alert-addon"},r.default.createElement("i",{className:"zmdi zmdi-info"})),r.default.createElement("p",null,r.default.createElement("strong",null,"Heads up!")," This alert needs your attention, but its not super important.")),r.default.createElement("div",{className:"alert bg-warning text-white",role:"alert"},r.default.createElement("span",{className:"alert-addon"},r.default.createElement("i",{className:"zmdi zmdi-alert-triangle"})),r.default.createElement("p",null,r.default.createElement("strong",null,"Warning!")," Better check yourself, you are not looking too good.")),r.default.createElement("div",{className:"alert bg-danger text-white",role:"alert"},r.default.createElement("span",{className:"alert-addon"},r.default.createElement("i",{className:"zmdi zmdi-alert-circle"})),r.default.createElement("p",null,r.default.createElement("strong",null,"Oh snap!")," Change a few things up and try submitting again.")))};t.default=o}}]);