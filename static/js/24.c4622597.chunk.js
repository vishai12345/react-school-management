(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{1641:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,a,n){if(a)e(t.prototype,a);if(n)e(t,n);return t}}();var r=a(1);var o=m(r);var l=a(1848);var u=m(l);var d=a(1849);var i=m(d);var s=a(1850);var f=m(s);var c=a(200);var p=m(c);var v=a(2256);var h=m(v);function m(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function y(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function g(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var x=function(e){g(t,e);function t(){var e;var a,n,r;b(this,t);for(var o=arguments.length,l=Array(o),u=0;u<o;u++){l[u]=arguments[u]}return r=(a=(n=y(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n),n.state={faqs:null},a),y(n,r)}n(t,[{key:"componentDidMount",value:function e(){this.getFaqs()}},{key:"getFaqs",value:function e(){var t=this;p.default.get("faqs.js").then(function(e){t.setState({faqs:e.data})}).catch(function(e){})}},{key:"render",value:function e(){var t=this.state.faqs;return o.default.createElement("div",{className:"faq-page-wrapper"},o.default.createElement(h.default,null),t&&t.map(function(e,t){return o.default.createElement(u.default,{key:t,className:"mb-30 panel",defaultExpanded:true},o.default.createElement(f.default,{expandIcon:o.default.createElement("i",{className:"zmdi zmdi-chevron-down"}),className:"m-0 panel-heading"},o.default.createElement("h4",null,e.title)),o.default.createElement(i.default,null,o.default.createElement("p",null,e.content)))}))}}]);return t}(r.Component);t.default=x},1848:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"default",{enumerable:true,get:function e(){return r.default}});var r=n(a(1894))},1849:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"default",{enumerable:true,get:function e(){return r.default}});var r=n(a(1895))},1850:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"default",{enumerable:true,get:function e(){return r.default}});var r=n(a(1896))},1894:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:true});t.default=t.styles=void 0;var r=n(a(13));var o=n(a(18));var l=n(a(10));var u=n(a(26));var d=n(a(27));var i=n(a(28));var s=n(a(29));var f=n(a(30));var c=n(a(1));var p=n(a(0));var v=n(a(3));var h=n(a(16));var m=n(a(381));var b=n(a(273));var y=n(a(17));var g=a(366);var x=typeof window!=="undefined"&&/jsdom/.test(window.navigator.userAgent)?{}:{"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}};var _=function e(t){var a={duration:t.transitions.duration.shortest};return{root:{position:"relative",transition:t.transitions.create(["margin"],a),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:t.palette.divider,transition:t.transitions.create(["opacity","background-color"],a)},"&:first-child":{borderTopLeftRadius:2,borderTopRightRadius:2,"&:before":{display:"none"}},"&:last-child":(0,f.default)({borderBottomLeftRadius:2,borderBottomRightRadius:2},x),"&$expanded + &":{"&:before":{display:"none"}}},expanded:{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},disabled:{backgroundColor:t.palette.action.disabledBackground}}};t.styles=_;var E=function(e){(0,s.default)(t,e);function t(e){var a;(0,u.default)(this,t);a=(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.isControlled=null;a.state={};a.handleChange=function(e){var t=a.isControlled?a.props.expanded:a.state.expanded;if(!a.isControlled){a.setState({expanded:!t})}if(a.props.onChange){a.props.onChange(e,!t)}};a.isControlled=e.expanded!=null;if(!a.isControlled){a.state.expanded=e.defaultExpanded!==undefined?e.defaultExpanded:false}return a}(0,d.default)(t,[{key:"render",value:function e(){var t,a=this;var n=this.props,u=n.children,d=n.classes,i=n.className,s=n.CollapseProps,f=n.defaultExpanded,p=n.disabled,h=n.expanded,y=n.onChange,x=(0,l.default)(n,["children","classes","className","CollapseProps","defaultExpanded","disabled","expanded","onChange"]);var _=this.isControlled?h:this.state.expanded;var E=(0,v.default)(d.root,(t={},(0,o.default)(t,d.expanded,_),(0,o.default)(t,d.disabled,p),t),i);var C=null;var w=c.default.Children.map(u,function(e){if(!c.default.isValidElement(e)){return null}false?undefined:void 0;if((0,g.isMuiElement)(e,["ExpansionPanelSummary"])){C=c.default.cloneElement(e,{disabled:p,expanded:_,onChange:a.handleChange});return null}return e});var P=!_?{"aria-hidden":"true"}:null;return c.default.createElement(b.default,(0,r.default)({className:E,elevation:1,square:true},x),C,c.default.createElement(m.default,(0,r.default)({in:_,timeout:"auto"},P,s),w))}}]);return t}(c.default.Component);E.propTypes=false?undefined:{};E.defaultProps={defaultExpanded:false,disabled:false};var C=(0,y.default)(_,{name:"MuiExpansionPanel"})(E);t.default=C},1895:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:true});t.default=t.styles=void 0;var r=n(a(13));var o=n(a(10));var l=n(a(1));var u=n(a(0));var d=n(a(3));var i=n(a(17));var s={root:{display:"flex",padding:"8px 24px 24px"}};t.styles=s;function f(e){var t=e.classes,a=e.children,n=e.className,u=(0,o.default)(e,["classes","children","className"]);return l.default.createElement("div",(0,r.default)({className:(0,d.default)(t.root,n)},u),a)}f.propTypes=false?undefined:{};var c=(0,i.default)(s,{name:"MuiExpansionPanelDetails"})(f);t.default=c},1896:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:true});t.default=t.styles=void 0;var r=n(a(13));var o=n(a(18));var l=n(a(10));var u=n(a(26));var d=n(a(27));var i=n(a(28));var s=n(a(29));var f=n(a(1));var c=n(a(0));var p=n(a(3));var v=n(a(277));var h=n(a(146));var m=n(a(17));var b=function e(t){var a={duration:t.transitions.duration.shortest};return{root:{display:"flex",minHeight:8*6,transition:t.transitions.create(["min-height","background-color"],a),padding:"0 24px 0 24px","&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:t.palette.grey[300]},"&$disabled":{opacity:.38}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:t.transitions.create(["margin"],a),margin:"12px 0","& > :last-child":{paddingRight:32},"&$expanded":{margin:"20px 0"}},expandIcon:{position:"absolute",top:"50%",right:8,transform:"translateY(-50%) rotate(0deg)",transition:t.transitions.create("transform",a),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"translateY(-50%) rotate(180deg)"}}}};t.styles=b;var y=function(e){(0,s.default)(t,e);function t(){var e;var a,n;(0,u.default)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++){o[l]=arguments[l]}return(0,i.default)(n,(a=n=(0,i.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.state={focused:false},n.handleFocus=function(){n.setState({focused:true})},n.handleBlur=function(){n.setState({focused:false})},n.handleChange=function(e){var t=n.props,a=t.onChange,r=t.onClick;if(a){a(e)}if(r){r(e)}},a))}(0,d.default)(t,[{key:"render",value:function e(){var t;var a=this.props,n=a.children,u=a.classes,d=a.className,i=a.disabled,s=a.expanded,c=a.expandIcon,m=a.IconButtonProps,b=a.onChange,y=(0,l.default)(a,["children","classes","className","disabled","expanded","expandIcon","IconButtonProps","onChange"]);var g=this.state.focused;return f.default.createElement(v.default,(0,r.default)({focusRipple:false,disableRipple:true,disabled:i,component:"div","aria-expanded":s,className:(0,p.default)(u.root,(t={},(0,o.default)(t,u.disabled,i),(0,o.default)(t,u.expanded,s),(0,o.default)(t,u.focused,g),t),d)},y,{onFocusVisible:this.handleFocus,onBlur:this.handleBlur,onClick:this.handleChange}),f.default.createElement("div",{className:(0,p.default)(u.content,(0,o.default)({},u.expanded,s))},n),c&&f.default.createElement(h.default,(0,r.default)({disabled:i,className:(0,p.default)(u.expandIcon,(0,o.default)({},u.expanded,s)),component:"div",tabIndex:-1,"aria-hidden":"true"},m),c))}}]);return t}(f.default.Component);y.propTypes=false?undefined:{};y.defaultProps={disabled:false};y.muiName="ExpansionPanelSummary";var g=(0,m.default)(b,{name:"MuiExpansionPanelSummary"})(y);t.default=g},2256:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,a,n){if(a)e(t.prototype,a);if(n)e(t,n);return t}}();var r=a(1);var o=p(r);var l=a(52);var u=a(105);var d=p(u);var i=a(43);var s=a(57);var f=a(364);var c=p(f);function p(e){return e&&e.__esModule?e:{default:e}}function v(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function h(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function m(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var b=function(e){m(t,e);function t(){v(this,t);return h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}n(t,[{key:"onUpdateSearchIdeas",value:function e(t){this.props.updateSearchIdeas(t.target.value)}},{key:"onSearchIdeas",value:function e(){this.props.showFeedbackLoadingIndicator();var t=this.props.searchIdeaText;var a=this;setTimeout(function(){a.props.onSearchIdeas(t)},1500)}},{key:"render",value:function e(){var t=this;var a=this.props.searchIdeaText;return o.default.createElement(c.default,{customClasses:"search-filter"},o.default.createElement("form",null,o.default.createElement("h2",{className:"heading mb-30"},"Type Your Question"),o.default.createElement(l.FormGroup,{className:"mb-0 w-40"},o.default.createElement(l.Input,{type:"text",name:"search",onChange:function e(a){return t.onUpdateSearchIdeas(a)},value:a})),o.default.createElement(d.default,{variant:"raised",color:"primary",className:"text-white",onClick:function e(){return t.onSearchIdeas()}},"Search")))}}]);return t}(r.Component);var y=function e(t){var a=t.feedback;return a};t.default=(0,i.connect)(y,{updateSearchIdeas:s.updateSearchIdeas,onSearchIdeas:s.onSearchIdeas,showFeedbackLoadingIndicator:s.showFeedbackLoadingIndicator})(b)}}]);