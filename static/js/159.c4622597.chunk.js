(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[159],{1776:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();var a=n(1);var o=l(a);var i=n(47);var u=l(i);var c=n(680);function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function f(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function m(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}function d(e){if(e<10){e="0"+e}return e}var p=function(e){m(t,e);function t(){var e;var n,r,a;s(this,t);for(var o=arguments.length,i=Array(o),u=0;u<o;u++){i[u]=arguments[u]}return a=(n=(r=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r),r.state={currentTime:{hours:"",minutes:"",seconds:""}},n),f(r,a)}r(t,[{key:"componentWillMount",value:function e(){var t=this;this.timer=setInterval(function(){t.startTime()},500)}},{key:"componentWillUnmount",value:function e(){clearInterval(this.timer)}},{key:"startTime",value:function e(){var t=new Date;var n=t.getHours();var r=t.getMinutes();var a=t.getSeconds();r=d(r);a=d(a);var o={hours:n,minutes:r,seconds:a};this.setState({currentTime:o})}},{key:"render",value:function e(){var t=this.state.currentTime,n=t.hours,r=t.minutes,a=t.seconds;return o.default.createElement("div",{className:"current-widget bg-info"},o.default.createElement(c.RctCardContent,null,o.default.createElement("div",{className:"d-flex justify-content-between"},o.default.createElement("div",{className:"align-items-start"},o.default.createElement("h3",{className:"mb-10"},o.default.createElement(u.default,{id:"widgets.currentTime"})),o.default.createElement("h2",{className:"mb-0"},n+" : "+r+" : "+a)),o.default.createElement("div",{className:"align-items-end"},o.default.createElement("i",{className:"zmdi zmdi-time"})))))}}]);return t}(a.Component);t.default=p}}]);