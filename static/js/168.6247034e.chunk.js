(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[168],{1785:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();var o=r(1);var a=c(o);var u=r(369);var l=c(u);var i=r(2827);var f=c(i);function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function p(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function d(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var b=function(e){d(t,e);function t(){s(this,t);return p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}n(t,[{key:"render",value:function e(){return a.default.createElement("div",{className:"overlay-wrap"},a.default.createElement(f.default,null),a.default.createElement("div",{className:"overlay-content d-flex justify-content-center align-items-center"},a.default.createElement(l.default,{separator:",",className:"count-value text-muted fw-bold",start:0,end:15800,duration:5,useEasing:true})))}}]);return t}(o.Component);t.default=b},2827:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();var o=r(1);var a=f(o);var u=r(681);var l=r(270);var i=f(l);function f(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function s(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function p(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var d={labels:["Series 1","Series 2","Series 3"],datasets:[{data:[250,25,50],backgroundColor:[i.default.color.primary,i.default.color.warning,i.default.color.success],hoverBackgroundColor:[i.default.color.primary,i.default.color.warning,i.default.color.success]}]};var b={legend:{display:false,labels:{fontColor:i.default.legendFontColor}},cutoutPercentage:70};var y=function(e){p(t,e);function t(){c(this,t);return s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}n(t,[{key:"render",value:function e(){return a.default.createElement(u.Doughnut,{data:d,options:b,height:150})}}]);return t}(o.Component);t.default=y}}]);