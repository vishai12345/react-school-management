(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[143],{1760:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();var o=n(1);var a=l(o);var i=n(2821);var u=l(i);function l(e){return e&&e.__esModule?e:{default:e}}function f(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}function c(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function s(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function d(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var p=function(e){d(t,e);function t(){var e;var n,r,o;c(this,t);for(var a=arguments.length,i=Array(a),u=0;u<a;u++){i[u]=arguments[u]}return o=(n=(r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r),r.state={bandwidthUsage:200},n),s(r,o)}r(t,[{key:"componentDidMount",value:function e(){var t=this;this.timerHandle=setInterval(function(){t.setState({bandwidthUsage:Math.floor(Math.random()*1e3)+1})},1500)}},{key:"componentWillUnmount",value:function e(){if(this.timerHandle){clearTimeout(this.timerHandle);this.timerHandle=0}}},{key:"render",value:function e(){var t;return a.default.createElement("div",{className:"card"},a.default.createElement(u.default,(t={value:this.state.bandwidthUsage,startColor:"red",endColor:"green",needleColor:"steelblue",height:200,ringWidth:40},f(t,"needleColor","#895DFF"),f(t,"currentValueText","Bandwidth Usage: ${value} Kb"),t)))}}]);return t}(o.Component);t.default=p}}]);