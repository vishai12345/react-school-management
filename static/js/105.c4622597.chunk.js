(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[105],{1722:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||false;l.configurable=true;if("value"in l)l.writable=true;Object.defineProperty(e,l.key,l)}}return function(t,a,l){if(a)e(t.prototype,a);if(l)e(t,l);return t}}();var r=a(1);var n=j(r);var u=a(52);var c=a(683);var o=j(c);var s=a(146);var i=j(s);var f=a(94);var d=a(151);var m=j(d);var p=a(200);var v=j(p);var E=a(680);var h=a(686);var b=j(h);var y=a(148);var g=a(47);var w=j(g);function j(e){return e&&e.__esModule?e:{default:e}}function _(e,t,a){if(t in e){Object.defineProperty(e,t,{value:a,enumerable:true,configurable:true,writable:true})}else{e[t]=a}return e}function N(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function O(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function P(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var k=function(e){P(t,e);function t(e){N(this,t);var a=O(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.state={collapse:false};return a}l(t,[{key:"OnCollapseProject",value:function e(){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function e(){var t=this;var a=this.props.data;var l=this.state.collapse;return n.default.createElement(r.Fragment,null,n.default.createElement("tr",null,n.default.createElement("td",null,a.name),n.default.createElement("td",null,(0,y.getTheDate)(a.date,"DD MMM YYYY")),n.default.createElement("td",null,n.default.createElement(u.Progress,{color:a.progress.color,className:"mt-10 w-90",value:a.progress.value}),n.default.createElement("p",{className:"mb-0 fs-12 text-muted"},a.status)),n.default.createElement("td",{className:"d-flex justify-content-between"},n.default.createElement("div",{className:"team-avatar w-100"},n.default.createElement("ul",{className:"mb-0 list-inline"},a.team.map(function(e,t){var a;return n.default.createElement("li",{className:"list-inline-item",key:t},n.default.createElement(m.default,{id:"tooltip-top",title:e.name,placement:"top"},n.default.createElement(o.default,(a={alt:"user 4",src:e.avatar},_(a,"alt","avatar"),_(a,"className","rounded-circle"),a))))}))),n.default.createElement(i.default,{onClick:function e(){return t.OnCollapseProject()}},l?n.default.createElement("i",{className:"material-icons"},"remove_circle"):n.default.createElement("i",{className:"material-icons"},"add_circle")))),l&&n.default.createElement("tr",null,n.default.createElement("td",{colSpan:"4"},n.default.createElement(u.Collapse,{isOpen:l},n.default.createElement("div",{className:"p-10"},n.default.createElement("h6",null,n.default.createElement(w.default,{id:"widgets.description"})),n.default.createElement("p",null,a.description))))))}}]);return t}(r.Component);var D=function(e){P(t,e);function t(e){N(this,t);var a=O(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.state={projectListData:null,sectionReload:false};return a}l(t,[{key:"componentDidMount",value:function e(){this.getProjectData()}},{key:"getProjectData",value:function e(){var t=this;this.setState({sectionReload:true});v.default.get("ProjectData.js").then(function(e){t.setState({projectListData:e.data,sectionReload:false})}).catch(function(e){t.setState({projectListData:null,sectionReload:false})})}},{key:"render",value:function e(){var t=this.state.projectListData;return n.default.createElement("div",{className:"project-managemnet-wrapper"},this.state.sectionReload&&n.default.createElement(b.default,null),n.default.createElement(f.Scrollbars,{className:"rct-scroll",autoHeight:true,autoHeightMin:100,autoHeightMax:620,autoHide:true},n.default.createElement(u.Table,{hover:true,className:"mb-0",responsive:true},n.default.createElement("thead",null,n.default.createElement("tr",null,n.default.createElement("th",null,n.default.createElement(w.default,{id:"components.projectName"})),n.default.createElement("th",null,n.default.createElement(w.default,{id:"widgets.deadline"})),n.default.createElement("th",null,n.default.createElement(w.default,{id:"widgets.status"})),n.default.createElement("th",null,n.default.createElement(w.default,{id:"widgets.team"})))),n.default.createElement("tbody",null,t&&t.map(function(e,t){return n.default.createElement(k,{key:t,data:e})})))),n.default.createElement(E.RctCardFooter,null,n.default.createElement("span",{className:"fs-12 text-base"},n.default.createElement("i",{className:"mr-15 zmdi zmdi-refresh"}),n.default.createElement(w.default,{id:"widgets.updated10Minago"}))))}}]);return t}(r.Component);t.default=D}}]);