(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[135],{1752:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(1);var n=f(a);var o=r(2816);var l=f(o);var u=r(47);var i=f(u);var s=r(680);function f(e){return e&&e.__esModule?e:{default:e}}var c=function e(){return n.default.createElement(s.RctCard,{customClasses:"gradient-primary overflow-hidden"},n.default.createElement("div",{className:"p-20"},n.default.createElement("h2",null,n.default.createElement(i.default,{id:"widgets.bandwidthUse"})),n.default.createElement("h2",null,"50 GB")),n.default.createElement(s.RctCardContent,{noPadding:true},n.default.createElement(l.default,null)))};t.default=c},2816:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r){if(Object.prototype.hasOwnProperty.call(r,a)){e[a]=r[a]}}}return e};var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,a.key,a)}}return function(t,r,a){if(r)e(t.prototype,r);if(a)e(t,a);return t}}();var o=r(1);var l=i(o);var u=r(681);function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function f(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function c(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var d={legend:{display:false},scales:{xAxes:[{display:false}],yAxes:[{display:false}]}};var p={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,0.4)",borderColor:"rgba(255,255,255,1)",borderWidth:2,hoverBackgroundColor:"rgba(144,97,255,0.4)",hoverBorderColor:"rgba(144,97,255,0.4)",data:[65,59,80,81,56,55,40]}]};var v=function(e){c(t,e);function t(){s(this,t);return f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}n(t,[{key:"componentDidMount",value:function e(){this.setState(p);var t=this;this.timerFunction=setInterval(function(){var e=t.state.datasets[0];var r=[];for(var n=0;n<t.state.labels.length;n++){r.push(Math.floor(Math.random()*100))}var o=a({},e);o.data=r;var l=a({},p,{datasets:[o]});t.setState(l)},1500)}},{key:"componentWillUnmount",value:function e(){clearInterval(this.timerFunction)}},{key:"render",value:function e(){return l.default.createElement(o.Fragment,null,this.state&&l.default.createElement(u.Line,{data:this.state,options:d,height:90}))}}]);return t}(o.Component);t.default=v}}]);