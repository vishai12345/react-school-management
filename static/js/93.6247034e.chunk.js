(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[93],{1710:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||false;l.configurable=true;if("value"in l)l.writable=true;Object.defineProperty(e,l.key,l)}}return function(t,a,l){if(a)e(t.prototype,a);if(l)e(t,l);return t}}();var n=a(1);var r=m(n);var i=a(2773);var o=m(i);var u=a(2780);var s=m(u);var c=a(2782);var f=m(c);var d=a(1790);var p=m(d);var b=a(364);var v=m(b);var h=a(47);var g=m(h);function m(e){return e&&e.__esModule?e:{default:e}}function y(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function S(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function w(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var B=function(e){w(t,e);function t(){y(this,t);return S(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}l(t,[{key:"render",value:function e(){return r.default.createElement("div",{className:"autoComplete-wrapper"},r.default.createElement(p.default,{title:r.default.createElement(g.default,{id:"sidebar.autoComplete"}),match:this.props.match}),r.default.createElement(v.default,{heading:"React Select"},r.default.createElement(o.default,null)),r.default.createElement("div",{className:"row"},r.default.createElement(v.default,{colClasses:"col-sm-12 col-md-6",heading:"Downshift AutoComplete"},r.default.createElement(s.default,null)),r.default.createElement(v.default,{colClasses:"col-sm-12 col-md-6",heading:"React Autosuggest"},r.default.createElement(f.default,null))))}}]);return t}(n.Component);t.default=B},1790:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=a(1);var n=s(l);var r=a(52);var i=a(15);var o=a(47);var u=s(o);function s(e){return e&&e.__esModule?e:{default:e}}var c=function e(t){var a=t.split("-");if(a.length>1){return n.default.createElement(u.default,{id:"sidebar."+(a[0].charAt(0)+a[0].slice(1)+a[1].charAt(0).toUpperCase()+a[1].slice(1))})}else{return n.default.createElement(u.default,{id:"sidebar."+(t.charAt(0)+t.slice(1))})}};var f=function e(t,a,l){if(l===0){return"/"}else{return t.split(a)[0]+a}};var d=function e(t){var a=t.title,l=t.match,o=t.enableBreadCrumb;var u=l.path.substr(1);var s=u.split("/");return n.default.createElement("div",{className:"page-title d-flex justify-content-between align-items-center"},a&&n.default.createElement("div",{className:"page-title-wrap"},n.default.createElement("i",{className:"ti-angle-left"}),n.default.createElement("h2",{className:""},a)),o&&n.default.createElement(r.Breadcrumb,{className:"mb-0 tour-step-7",tag:"nav"},s.map(function(e,t){return n.default.createElement(r.BreadcrumbItem,{active:s.length===t+1,tag:s.length===t+1?"span":i.Link,key:t,to:f(u,e,t)},c(e))})))};d.defaultProps={enableBreadCrumb:true};t.default=d},2773:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a){if(Object.prototype.hasOwnProperty.call(a,l)){e[l]=a[l]}}}return e};var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||false;l.configurable=true;if("value"in l)l.writable=true;Object.defineProperty(e,l.key,l)}}return function(t,a,l){if(a)e(t.prototype,a);if(l)e(t,l);return t}}();var r=a(1);var i=P(r);var o=a(0);var u=P(o);var s=a(85);var c=a(271);var f=P(c);var d=a(210);var p=P(d);var b=a(365);var v=P(b);var h=a(2774);var g=P(h);var m=a(2775);var y=P(m);var S=a(2776);var w=P(S);var B=a(2777);var E=P(B);var O=a(1856);var A=P(O);var _=a(2778);var C=P(_);function P(e){return e&&e.__esModule?e:{default:e}}function j(e,t){var a={};for(var l in e){if(t.indexOf(l)>=0)continue;if(!Object.prototype.hasOwnProperty.call(e,l))continue;a[l]=e[l]}return a}function x(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function I(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function k(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var R=[{label:"Afghanistan"},{label:"Aland Islands"},{label:"Albania"},{label:"Algeria"},{label:"American Samoa"},{label:"Andorra"},{label:"Angola"},{label:"Anguilla"},{label:"Antarctica"},{label:"Antigua and Barbuda"},{label:"Argentina"},{label:"Armenia"},{label:"Aruba"},{label:"Australia"},{label:"Austria"},{label:"Azerbaijan"},{label:"Bahamas"},{label:"Bahrain"},{label:"Bangladesh"},{label:"Barbados"},{label:"Belarus"},{label:"Belgium"},{label:"Belize"},{label:"Benin"},{label:"Bermuda"},{label:"Bhutan"},{label:"Bolivia, Plurinational State of"},{label:"Bonaire, Sint Eustatius and Saba"},{label:"Bosnia and Herzegovina"},{label:"Botswana"},{label:"Bouvet Island"},{label:"Brazil"},{label:"British Indian Ocean Territory"},{label:"Brunei Darussalam"}].map(function(e){return{value:e.label,label:e.label}});var z=function(e){k(t,e);function t(){var e;var a,l,n;x(this,t);for(var r=arguments.length,i=Array(r),o=0;o<r;o++){i[o]=arguments[o]}return n=(a=(l=I(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),l),l.handleClick=function(e){l.props.onSelect(l.props.option,e)},a),I(l,n)}n(t,[{key:"render",value:function e(){var t=this.props,a=t.children,l=t.isFocused,n=t.isSelected,r=t.onFocus;return i.default.createElement(v.default,{onFocus:r,selected:l,onClick:this.handleClick,component:"div",style:{fontWeight:n?500:400}},a)}}]);return t}(i.default.Component);function T(e){var t=e.classes,a=j(e,["classes"]);return i.default.createElement(C.default,l({optionComponent:z,noResultsText:i.default.createElement(f.default,null,"No results found"),arrowRenderer:function e(t){return t.isOpen?i.default.createElement(w.default,null):i.default.createElement(g.default,null)},clearRenderer:function e(){return i.default.createElement(E.default,null)},valueComponent:function e(a){var l=a.value,n=a.children,r=a.onRemove;var o=function e(t){t.preventDefault();t.stopPropagation();r(l)};if(r){return i.default.createElement(A.default,{tabIndex:-1,label:n,className:t.chip,deleteIcon:i.default.createElement(y.default,{onTouchEnd:o}),onDelete:o})}return i.default.createElement("div",{className:"Select-value"},n)}},a))}var N=48;var M=function e(t){return{chip:{margin:t.spacing.unit/4},"@global":{".Select-control":{display:"flex",alignItems:"center",border:0,height:"auto",background:"transparent","&:hover":{boxShadow:"none"}},".Select-multi-value-wrapper":{flexGrow:1,display:"flex",flexWrap:"wrap"},".Select--multi .Select-input":{margin:0},".Select.has-value.is-clearable.Select--single > .Select-control .Select-value":{padding:0},".Select-noresults":{padding:t.spacing.unit*2},".Select-input":{display:"inline-flex !important",padding:0,height:"auto"},".Select-input input":{background:"transparent",border:0,padding:0,cursor:"default",display:"inline-block",fontFamily:"inherit",fontSize:"inherit",margin:0,outline:0},".Select-placeholder, .Select--single .Select-value":{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(16),padding:0},".Select-placeholder":{opacity:.42,color:t.palette.common.black},".Select-menu-outer":{backgroundColor:t.palette.background.paper,boxShadow:t.shadows[2],position:"absolute",left:0,top:"calc(100% + "+t.spacing.unit+"px)",width:"100%",zIndex:2,maxHeight:N*4.5},".Select.is-focused:not(.is-open) > .Select-control":{boxShadow:"none"},".Select-menu":{maxHeight:N*4.5,overflowY:"auto"},".Select-menu div":{boxSizing:"content-box"},".Select-arrow-zone, .Select-clear-zone":{color:t.palette.action.active,cursor:"pointer",height:21,width:21,zIndex:1},".Select-aria-only":{position:"absolute",overflow:"hidden",clip:"rect(0 0 0 0)",height:1,width:1,margin:-1}}}};var q=function(e){k(t,e);function t(){var e;var a,l,n;x(this,t);for(var r=arguments.length,i=Array(r),o=0;o<r;o++){i[o]=arguments[o]}return n=(a=(l=I(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),l),l.state={single:null,multi:null},l.handleChangeSingle=function(e){l.setState({single:e})},l.handleChangeMulti=function(e){l.setState({multi:e})},a),I(l,n)}n(t,[{key:"render",value:function e(){var t=this.props.classes;var a=this.state,l=a.single,n=a.multi;return i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col-md-6"},i.default.createElement(p.default,{fullWidth:true,inputComponent:T,inputProps:{classes:t,value:l,onChange:this.handleChangeSingle,placeholder:"Select single-value…",instanceId:"react-select-single",id:"react-select-single",name:"react-select-single",simpleValue:true,options:R}})),i.default.createElement("div",{className:"col-md-6"},i.default.createElement(p.default,{fullWidth:true,inputComponent:T,inputProps:{classes:t,value:n,multi:true,onChange:this.handleChangeMulti,placeholder:"Select multi-value…",instanceId:"react-select-chip",id:"react-select-chip",name:"react-select-chip",simpleValue:true,options:R}})))}}]);return t}(i.default.Component);q.propTypes={classes:u.default.object.isRequired};t.default=(0,s.withStyles)(M)(q)},2780:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a){if(Object.prototype.hasOwnProperty.call(a,l)){e[l]=a[l]}}}return e};t.default=S;var n=a(1);var r=b(n);var i=a(204);var o=b(i);var u=a(365);var s=b(u);var c=a(2781);var f=b(c);var d=a(364);var p=b(d);function b(e){return e&&e.__esModule?e:{default:e}}function v(e,t){var a={};for(var l in e){if(t.indexOf(l)>=0)continue;if(!Object.prototype.hasOwnProperty.call(e,l))continue;a[l]=e[l]}return a}var h=[{label:"Afghanistan"},{label:"Aland Islands"},{label:"Albania"},{label:"Algeria"},{label:"American Samoa"},{label:"Andorra"},{label:"Angola"},{label:"Anguilla"},{label:"Antarctica"},{label:"Antigua and Barbuda"},{label:"Argentina"},{label:"Armenia"},{label:"Aruba"},{label:"Australia"},{label:"Austria"},{label:"Azerbaijan"},{label:"Bahamas"},{label:"Bahrain"},{label:"Bangladesh"},{label:"Barbados"},{label:"Belarus"},{label:"Belgium"},{label:"Belize"},{label:"Benin"},{label:"Bermuda"},{label:"Bhutan"},{label:"Bolivia, Plurinational State of"},{label:"Bonaire, Sint Eustatius and Saba"},{label:"Bosnia and Herzegovina"},{label:"Botswana"},{label:"Bouvet Island"},{label:"Brazil"},{label:"British Indian Ocean Territory"},{label:"Brunei Darussalam"}];function g(e){var t=e.InputProps,a=e.classes,n=e.ref,i=v(e,["InputProps","classes","ref"]);return r.default.createElement(o.default,l({},i,{inputRef:n,InputProps:l({},t)}))}function m(e){var t=e.suggestion,a=e.index,n=e.itemProps,i=e.highlightedIndex,o=e.selectedItem;var u=i===a;var c=o===t.label;return r.default.createElement(s.default,l({},n,{key:t.label,selected:u,component:"div",style:{fontWeight:c?500:400}}),t.label)}function y(e){var t=0;return h.filter(function(a){var l=(!e||a.label.toLowerCase().includes(e.toLowerCase()))&&t<5;if(l){t+=1}return l})}function S(e){var t=e.classes;return r.default.createElement(f.default,null,function(e){var a=e.getInputProps,l=e.getItemProps,n=e.isOpen,i=e.inputValue,o=e.selectedItem,u=e.highlightedIndex;return r.default.createElement("div",null,g({fullWidth:true,classes:t,InputProps:a({placeholder:"Search a country (start with a)",id:"integration-downshift"})}),n?r.default.createElement(p.default,{square:true},y(i).map(function(e,t){return m({suggestion:e,index:t,itemProps:l({item:e.label}),highlightedIndex:u,selectedItem:o})})):null)})}},2782:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||false;l.configurable=true;if("value"in l)l.writable=true;Object.defineProperty(e,l.key,l)}}return function(t,a,l){if(a)e(t.prototype,a);if(l)e(t,l);return t}}();var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a){if(Object.prototype.hasOwnProperty.call(a,l)){e[l]=a[l]}}}return e};var r=a(1);var i=B(r);var o=a(0);var u=B(o);var s=a(2783);var c=B(s);var f=a(2795);var d=B(f);var p=a(2797);var b=B(p);var v=a(204);var h=B(v);var g=a(273);var m=B(g);var y=a(365);var S=B(y);var w=a(85);function B(e){return e&&e.__esModule?e:{default:e}}function E(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function O(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function A(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}function _(e,t){var a={};for(var l in e){if(t.indexOf(l)>=0)continue;if(!Object.prototype.hasOwnProperty.call(e,l))continue;a[l]=e[l]}return a}var C=[{label:"Afghanistan"},{label:"Aland Islands"},{label:"Albania"},{label:"Algeria"},{label:"American Samoa"},{label:"Andorra"},{label:"Angola"},{label:"Anguilla"},{label:"Antarctica"},{label:"Antigua and Barbuda"},{label:"Argentina"},{label:"Armenia"},{label:"Aruba"},{label:"Australia"},{label:"Austria"},{label:"Azerbaijan"},{label:"Bahamas"},{label:"Bahrain"},{label:"Bangladesh"},{label:"Barbados"},{label:"Belarus"},{label:"Belgium"},{label:"Belize"},{label:"Benin"},{label:"Bermuda"},{label:"Bhutan"},{label:"Bolivia, Plurinational State of"},{label:"Bonaire, Sint Eustatius and Saba"},{label:"Bosnia and Herzegovina"},{label:"Botswana"},{label:"Bouvet Island"},{label:"Brazil"},{label:"British Indian Ocean Territory"},{label:"Brunei Darussalam"}];function P(e){var t=e.classes,a=e.ref,l=_(e,["classes","ref"]);return i.default.createElement(h.default,{fullWidth:true,inputRef:a,InputProps:n({classes:{input:t.input}},l)})}function j(e,t){var a=t.query,l=t.isHighlighted;var n=(0,d.default)(e.label,a);var r=(0,b.default)(e.label,n);return i.default.createElement(S.default,{selected:l,component:"div"},i.default.createElement("div",null,r.map(function(e,t){return e.highlight?i.default.createElement("span",{key:String(t),style:{fontWeight:300}},e.text):i.default.createElement("strong",{key:String(t),style:{fontWeight:500}},e.text)})))}function x(e){var t=e.containerProps,a=e.children;return i.default.createElement(m.default,n({},t,{square:true}),a)}function I(e){return e.label}function k(e){var t=e.trim().toLowerCase();var a=t.length;var l=0;return a===0?[]:C.filter(function(e){var n=l<5&&e.label.toLowerCase().slice(0,a)===t;if(n){l+=1}return n})}var R=function e(t){return{suggestionsContainerOpen:{marginTop:t.spacing.unit},suggestion:{display:"block"},suggestionsList:{margin:0,padding:0,listStyleType:"none"}}};var z=function(e){A(t,e);function t(){var e;var a,l,n;E(this,t);for(var r=arguments.length,i=Array(r),o=0;o<r;o++){i[o]=arguments[o]}return n=(a=(l=O(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),l),l.state={value:"",suggestions:[]},l.handleSuggestionsFetchRequested=function(e){var t=e.value;l.setState({suggestions:k(t)})},l.handleSuggestionsClearRequested=function(){l.setState({suggestions:[]})},l.handleChange=function(e,t){var a=t.newValue;l.setState({value:a})},a),O(l,n)}l(t,[{key:"render",value:function e(){var t=this.props.classes;return i.default.createElement(c.default,{theme:{suggestionsContainerOpen:t.suggestionsContainerOpen,suggestionsList:t.suggestionsList,suggestion:t.suggestion},renderInputComponent:P,suggestions:this.state.suggestions,onSuggestionsFetchRequested:this.handleSuggestionsFetchRequested,onSuggestionsClearRequested:this.handleSuggestionsClearRequested,renderSuggestionsContainer:x,getSuggestionValue:I,renderSuggestion:j,inputProps:{classes:t,placeholder:"Search a country (start with a)",value:this.state.value,onChange:this.handleChange}})}}]);return t}(i.default.Component);z.propTypes={classes:u.default.object.isRequired};t.default=(0,w.withStyles)(R)(z)}}]);