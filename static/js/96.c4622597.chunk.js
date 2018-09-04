(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[96],{1713:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,a.key,a)}}return function(t,r,a){if(r)e(t.prototype,r);if(a)e(t,a);return t}}();var o=r(1);var n=f(o);var l=r(52);var i=r(2799);var s=f(i);var u=r(47);var c=f(u);function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function d(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function b(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var m={yesterday:{labels:["12:00 AM","4:00 AM","8:00 AM","12:00 PM","16:00 PM"],websiteViews:[600,900,660,750,800],emailSubscription:[400,550,400,400,450]},last5Days:{labels:["Mon","Tue","Wed","Thur","Fri"],websiteViews:[600,900,725,1e3,460],emailSubscription:[400,700,500,625,400]},last1Month:{labels:["1-5","6-10","11-15","16-20","21-25"],websiteViews:[800,700,725,600,900],emailSubscription:[700,600,400,400,500]},last5Months:{labels:["Jan","Feb","Mar","Apr","May"],websiteViews:[1e3,700,725,625,600],emailSubscription:[800,450,550,500,450]}};var y=function(e){b(t,e);function t(e){p(this,t);var r=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.state={selectedComapign:m["last5Days"],compaigns:m,selected:"last5Days"};return r}a(t,[{key:"pickRandomProperty",value:function e(t){var r;var a=0;for(var o in t){if(Math.random()<1/++a)r=o}return r}},{key:"componentDidMount",value:function e(){var t=this;this.timer=setInterval(function(){var e=t.pickRandomProperty(t.state.compaigns);t.setState({selectedComapign:m[e],selected:e})},2e3)}},{key:"componentWillUnmount",value:function e(){clearInterval(this.timer)}},{key:"render",value:function e(){var t=this;var r=this.state.selectedComapign,a=r.labels,o=r.websiteViews,i=r.emailSubscription;return n.default.createElement("div",null,n.default.createElement(s.default,{labels:a,websiteViews:o,emailSubscription:i}),n.default.createElement("div",{className:"d-flex justify-content-between align-items-center mt-15"},n.default.createElement("div",{className:"app-selectbox-sm w-30"},n.default.createElement(l.FormGroup,{className:"mb-0"},n.default.createElement(l.Input,{type:"select",className:"fs-12",name:"select",id:"exampleSelect",onChange:function e(r){return t.setState({selectedComapign:t.state.compaigns[r.target.value]})},value:this.state.selected},n.default.createElement("option",{disabled:true},"Select Campaign"),n.default.createElement("option",{value:"last5Days"},"Last 5 Days"),n.default.createElement("option",{value:"yesterday"},"Yesterday"),n.default.createElement("option",{value:"last1Month"},"Last 1 Month"),n.default.createElement("option",{value:"last5Months"},"Last 5 Months")))),n.default.createElement("span",{className:"fs-12 text-base"},n.default.createElement("i",{className:"mr-5 zmdi zmdi-refresh"}),n.default.createElement(c.default,{id:"widgets.updated10Minago"}))))}}]);return t}(o.Component);t.default=y},2799:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,a.key,a)}}return function(t,r,a){if(r)e(t.prototype,r);if(a)e(t,a);return t}}();var o=r(1);var n=u(o);var l=r(681);var i=r(270);var s=u(i);function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function f(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function p(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var d={legend:{display:false},tooltips:{titleSpacing:6,cornerRadius:5},scales:{xAxes:[{gridLines:{display:false,color:s.default.chartGridColor},ticks:{fontColor:s.default.axesColor},barPercentage:1.3,categoryPercentage:.5}],yAxes:[{gridLines:{color:s.default.chartGridColor,drawBorder:false},ticks:{fontColor:s.default.axesColor,min:100,max:1e3}}]}};var b=function(e){p(t,e);function t(){c(this,t);return f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}a(t,[{key:"render",value:function e(){var t={labels:this.props.labels,datasets:[{label:"Website view",backgroundColor:s.default.color.info,borderColor:s.default.color.info,borderWidth:1,hoverBackgroundColor:s.default.color.info,hoverBorderColor:s.default.color.info,data:this.props.websiteViews},{label:"Email Subscription",backgroundColor:s.default.color.primary,borderColor:s.default.color.primary,borderWidth:1,hoverBackgroundColor:s.default.color.primary,hoverBorderColor:s.default.color.primary,data:this.props.emailSubscription}]};return n.default.createElement(l.Bar,{data:t,options:d,height:170})}}]);return t}(o.Component);t.default=b}}]);