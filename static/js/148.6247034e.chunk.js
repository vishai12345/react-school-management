(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[148],{1765:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||false;l.configurable=true;if("value"in l)l.writable=true;Object.defineProperty(e,l.key,l)}}return function(t,a,l){if(a)e(t.prototype,a);if(l)e(t,l);return t}}();var n=a(1);var r=d(n);var u=a(105);var o=d(u);var c=a(52);var i=a(94);var f=a(200);var s=d(f);function d(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function p(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function b(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var h=function(e){b(t,e);function t(){var e;var a,l,n;m(this,t);for(var r=arguments.length,u=Array(r),o=0;o<r;o++){u[o]=arguments[o]}return n=(a=(l=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),l),l.state={socialCompanies:null},a),p(l,n)}l(t,[{key:"componentDidMount",value:function e(){this.getSocialCompanies()}},{key:"getSocialCompanies",value:function e(){var t=this;s.default.get("socialCompanies.js").then(function(e){t.setState({socialCompanies:e.data})}).catch(function(e){})}},{key:"render",value:function e(){var t=this.state.socialCompanies;return r.default.createElement(i.Scrollbars,{className:"rct-scroll",autoHeight:true,autoHeightMin:100,autoHeightMax:400,autoHide:true},r.default.createElement("div",{className:"table-responsive"},r.default.createElement("table",{className:"table table-hover table-middle"},r.default.createElement("thead",null,r.default.createElement("tr",null,r.default.createElement("th",null,"Media"),r.default.createElement("th",null,"Name"),r.default.createElement("th",null,"Likes"),r.default.createElement("th",null,"Comemnts"),r.default.createElement("th",null,"Share"),r.default.createElement("th",null,"Members"))),r.default.createElement("tbody",null,t&&t.map(function(e,t){return r.default.createElement("tr",{key:t},r.default.createElement("td",null,r.default.createElement(o.default,{variant:"fab",className:"btn-"+e.icon+" mr-15 mb-10 text-white"},r.default.createElement("i",{className:"zmdi zmdi-"+e.icon}))),r.default.createElement("td",null,r.default.createElement("span",{className:"d-block"},e.title),r.default.createElement("a",{href:"javascript:void(0);",className:"text-blue"},e.url)),r.default.createElement("td",null,e.likes),r.default.createElement("td",null,e.comments),r.default.createElement("td",null,e.share),r.default.createElement("td",null,r.default.createElement(c.Badge,{color:"primary",className:"badge-pill badge-lg"},e.members)))})))))}}]);return t}(n.Component);t.default=h}}]);