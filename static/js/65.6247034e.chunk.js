(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[65],{1682:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,a.key,a)}}return function(t,l,a){if(l)e(t.prototype,l);if(a)e(t,a);return t}}();var r=l(1);var n=p(r);var u=l(52);var m=l(1790);var o=p(m);var c=l(47);var d=p(c);var i=l(364);var f=p(i);function p(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function E(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function h(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var b=function(e){h(t,e);function t(){var e;var l,a,r;s(this,t);for(var n=arguments.length,u=Array(n),m=0;m<n;m++){u[m]=arguments[m]}return r=(l=(a=E(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a),a.state={dataSource:[]},a.handleUpdateInput=function(e){a.setState({dataSource:[e,e+e,e+e+e]})},l),E(a,r)}a(t,[{key:"render",value:function e(){return n.default.createElement("div",{className:"formelements-wrapper"},n.default.createElement(o.default,{title:n.default.createElement(d.default,{id:"sidebar.formElements"}),match:this.props.match}),n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col-sm-12 col-md-12 col-xl-6"},n.default.createElement(f.default,{heading:"Default React Form"},n.default.createElement(u.Form,null,n.default.createElement(u.FormGroup,null,n.default.createElement(u.Label,{for:"Email"},"Email"),n.default.createElement(u.Input,{type:"email",name:"email",id:"Email",placeholder:"Email address"})),n.default.createElement(u.FormGroup,null,n.default.createElement(u.Label,{for:"Password"},"Password"),n.default.createElement(u.Input,{type:"password",name:"password",id:"Password",placeholder:"password"})),n.default.createElement(u.FormGroup,null,n.default.createElement(u.Label,{for:"Select"},"Select"),n.default.createElement(u.Input,{type:"select",name:"select",id:"Select"},n.default.createElement("option",null,"1"),n.default.createElement("option",null,"2"),n.default.createElement("option",null,"3"),n.default.createElement("option",null,"4"),n.default.createElement("option",null,"5"))),n.default.createElement(u.FormGroup,null,n.default.createElement(u.Label,{for:"SelectMulti"},"Select Multiple"),n.default.createElement(u.Input,{type:"select",name:"selectMulti",id:"SelectMulti",multiple:true},n.default.createElement("option",null,"1"),n.default.createElement("option",null,"2"),n.default.createElement("option",null,"3"),n.default.createElement("option",null,"4"),n.default.createElement("option",null,"5"))),n.default.createElement(u.FormGroup,null,n.default.createElement(u.Label,{for:"Text"},"Text Area"),n.default.createElement(u.Input,{type:"textarea",name:"text",id:"Text"})),n.default.createElement(u.FormGroup,null,n.default.createElement(u.Label,{for:"File"},"File"),n.default.createElement(u.Input,{type:"file",name:"file",id:"File"}),n.default.createElement(u.FormText,{color:"muted"},"This is some placeholder block-level help text for the above input. Its a bit lighter and easily wraps to a new line.")),n.default.createElement(u.FormGroup,{tag:"fieldset"},n.default.createElement("legend",null,"Radio Buttons"),n.default.createElement(u.FormGroup,{check:true},n.default.createElement(u.Label,{check:true},n.default.createElement(u.Input,{type:"radio",name:"radio1"})," ","Option one is this and that—be sure to include why its great")),n.default.createElement(u.FormGroup,{check:true},n.default.createElement(u.Label,{check:true},n.default.createElement(u.Input,{type:"radio",name:"radio1"})," ","Option two can be something else and selecting it will deselect option one")),n.default.createElement(u.FormGroup,{check:true,disabled:true},n.default.createElement(u.Label,{check:true},n.default.createElement(u.Input,{type:"radio",name:"radio1",disabled:true})," ","Option three is disabled"))),n.default.createElement(u.FormGroup,{check:true,className:"mb-20"},n.default.createElement(u.Label,{check:true},n.default.createElement(u.Input,{type:"checkbox"})," ","Check me out")),n.default.createElement(u.Button,{color:"primary"},"Submit"))),n.default.createElement(f.default,{heading:"Form Grid"},n.default.createElement(u.Form,null,n.default.createElement(u.FormGroup,{row:true},n.default.createElement(u.Label,{for:"Email-1",sm:2},"Email"),n.default.createElement(u.Col,{sm:10},n.default.createElement(u.Input,{type:"email",name:"email",id:"Email-1",placeholder:"Email address"}))),n.default.createElement(u.FormGroup,{row:true},n.default.createElement(u.Label,{for:"Password-1",sm:2},"Password"),n.default.createElement(u.Col,{sm:10},n.default.createElement(u.Input,{type:"password",name:"password",id:"Password-1",placeholder:"password"}))),n.default.createElement(u.FormGroup,{row:true},n.default.createElement(u.Label,{for:"Select-1",sm:2},"Select"),n.default.createElement(u.Col,{sm:10},n.default.createElement(u.Input,{type:"select",name:"select",id:"Select-1"}))),n.default.createElement(u.FormGroup,{row:true},n.default.createElement(u.Label,{for:"SelectMulti-2",sm:2},"Select Multiple"),n.default.createElement(u.Col,{sm:10},n.default.createElement(u.Input,{type:"select",name:"selectMulti",id:"SelectMulti-2",multiple:true}))),n.default.createElement(u.FormGroup,{row:true},n.default.createElement(u.Label,{for:"Text-1",sm:2},"Text Area"),n.default.createElement(u.Col,{sm:10},n.default.createElement(u.Input,{type:"textarea",name:"text",id:"Text-1"}))),n.default.createElement(u.FormGroup,{row:true},n.default.createElement(u.Label,{for:"File-1",sm:2},"File"),n.default.createElement(u.Col,{sm:10},n.default.createElement(u.Input,{type:"file",name:"file",id:"File-1"}),n.default.createElement(u.FormText,{color:"muted"},"This is some placeholder block-level help text for the above input. Its a bit lighter and easily wraps to a new line."))),n.default.createElement(u.FormGroup,{tag:"fieldset"},n.default.createElement("legend",{className:"col-form-label"},"Radio Buttons"),n.default.createElement(u.FormGroup,{check:true},n.default.createElement(u.Label,{check:true},n.default.createElement(u.Input,{type:"radio",name:"radio2"})," ","Option one is this and that—be sure to include why its great")),n.default.createElement(u.FormGroup,{check:true},n.default.createElement(u.Label,{check:true},n.default.createElement(u.Input,{type:"radio",name:"radio2"})," ","Option two can be something else and selecting it will deselect option one")),n.default.createElement(u.FormGroup,{check:true,disabled:true},n.default.createElement(u.Label,{check:true},n.default.createElement(u.Input,{type:"radio",name:"radio2",disabled:true})," ","Option three is disabled"))),n.default.createElement(u.FormGroup,{row:true},n.default.createElement(u.Label,{for:"checkbox2",sm:2},"Checkbox"),n.default.createElement(u.Col,{sm:{size:10}},n.default.createElement(u.FormGroup,{check:true},n.default.createElement(u.Label,{check:true},n.default.createElement(u.Input,{type:"checkbox",id:"checkbox2"})," ","Check me out")))),n.default.createElement(u.FormGroup,{check:true,className:"p-0"},n.default.createElement(u.Button,{color:"primary"},"Submit")))),n.default.createElement(f.default,{heading:"Inline Form"},n.default.createElement(u.Form,{inline:true},n.default.createElement(u.FormGroup,{className:"mb-10 mr-sm-10 mb-sm-0"},n.default.createElement(u.Label,{for:"Email-2",className:"mr-sm-10"},"Email"),n.default.createElement(u.Input,{type:"email",name:"email",id:"Email-2",placeholder:"something@idk.cool"})),n.default.createElement(u.FormGroup,{className:"mb-10 mr-sm-10 mb-sm-0"},n.default.createElement(u.Label,{for:"Password-2",className:"mr-sm-10"},"Password"),n.default.createElement(u.Input,{type:"password",name:"password",id:"Password-2",placeholder:"don't tell!"})),n.default.createElement(u.Button,{color:"primary"},"Submit"))),n.default.createElement(f.default,{heading:"Input Sizing"},n.default.createElement(u.Form,null,n.default.createElement(u.Input,{className:"mb-20",placeholder:"lg",bsSize:"lg"}),n.default.createElement(u.Input,{className:"mb-20",placeholder:"sm",bsSize:"sm"}),n.default.createElement(u.Input,{className:"mb-20",type:"select",bsSize:"lg"},n.default.createElement("option",null,"Large Select")),n.default.createElement(u.Input,{className:"mb-20",type:"select",bsSize:"sm"},n.default.createElement("option",null,"Small Select"))))),n.default.createElement("div",{className:"col-sm-12 col-md-12 col-xl-6"},n.default.createElement(f.default,{heading:"Input Types"},n.default.createElement(u.Form,null,n.default.createElement(u.FormGroup,null,n.default.createElement(u.Label,{for:"Email-3"},"Email"),n.default.createElement(u.Input,{type:"email",name:"email",id:"Email-3",placeholder:"with a placeholder"})),n.default.createElement(u.FormGroup,null,n.default.createElement(u.Label,{for:"Password-3"},"Password"),n.default.createElement(u.Input,{type:"password",name:"password",id:"Password-3",placeholder:"password placeholder"})),n.default.createElement(u.FormGroup,null,n.default.createElement(u.Label,{for:"exampleUrl"},"Url"),n.default.createElement(u.Input,{type:"url",name:"url",id:"exampleUrl",placeholder:"url placeholder"})),n.default.createElement(u.FormGroup,null,n.default.createElement(u.Label,{for:"exampleNumber"},"Number"),n.default.createElement(u.Input,{type:"number",name:"number",id:"exampleNumber",placeholder:"number placeholder"})),n.default.createElement(u.FormGroup,null,n.default.createElement(u.Label,{for:"exampleDatetime"},"Datetime"),n.default.createElement(u.Input,{type:"datetime",name:"datetime",id:"exampleDatetime",placeholder:"datetime placeholder"})),n.default.createElement(u.FormGroup,null,n.default.createElement(u.Label,{for:"exampleDate"},"Date"),n.default.createElement(u.Input,{type:"date",name:"date",id:"exampleDate",placeholder:"date placeholder"})),n.default.createElement(u.FormGroup,null,n.default.createElement(u.Label,{for:"exampleTime"},"Time"),n.default.createElement(u.Input,{type:"time",name:"time",id:"exampleTime",placeholder:"time placeholder"})),n.default.createElement(u.FormGroup,null,n.default.createElement(u.Label,{for:"exampleColor"},"Color"),n.default.createElement(u.Input,{type:"color",name:"color",id:"exampleColor",placeholder:"color placeholder"})),n.default.createElement(u.FormGroup,null,n.default.createElement(u.Label,{for:"exampleSearch"},"Search"),n.default.createElement(u.Input,{type:"search",name:"search",id:"exampleSearch",placeholder:"search placeholder"})),n.default.createElement(u.FormGroup,null,n.default.createElement(u.Label,{for:"Select-2"},"Select"),n.default.createElement(u.Input,{type:"select",name:"select",id:"Select-2"},n.default.createElement("option",null,"1"),n.default.createElement("option",null,"2"),n.default.createElement("option",null,"3"),n.default.createElement("option",null,"4"),n.default.createElement("option",null,"5"))),n.default.createElement(u.FormGroup,null,n.default.createElement(u.Label,{for:"exampleSelectMulti"},"Select Multiple"),n.default.createElement(u.Input,{type:"select",name:"selectMulti",id:"exampleSelectMulti",multiple:true},n.default.createElement("option",null,"1"),n.default.createElement("option",null,"2"),n.default.createElement("option",null,"3"),n.default.createElement("option",null,"4"),n.default.createElement("option",null,"5"))),n.default.createElement(u.FormGroup,null,n.default.createElement(u.Label,{for:"Text-2"},"Text Area"),n.default.createElement(u.Input,{type:"textarea",name:"text",id:"Text-2"})),n.default.createElement(u.FormGroup,null,n.default.createElement(u.Label,{for:"File-2"},"File"),n.default.createElement(u.Input,{type:"file",name:"file",id:"File-2"}),n.default.createElement(u.FormText,{color:"muted"},"This is some placeholder block-level help text for the above input. Its a bit lighter and easily wraps to a new line.")),n.default.createElement(u.FormGroup,{check:true},n.default.createElement(u.Label,{check:true},n.default.createElement(u.Input,{type:"radio"})," ","Option one is this and that—be sure to include why its great")),n.default.createElement(u.FormGroup,{check:true},n.default.createElement(u.Label,{check:true},n.default.createElement(u.Input,{type:"checkbox"})," ","Check me out")))),n.default.createElement(f.default,{heading:"Form Validation"},n.default.createElement(u.Form,null,n.default.createElement(u.FormGroup,null,n.default.createElement(u.Label,{for:"Email-4"},"Input with success"),n.default.createElement(u.Input,{valid:true}),n.default.createElement(u.FormText,null,"Example help text that remains unchanged.")),n.default.createElement(u.FormGroup,null,n.default.createElement(u.Label,{for:"Password-4"},"Input with danger"),n.default.createElement(u.Input,{valid:false}),n.default.createElement(u.FormFeedback,null,"Oh noes! that name is already taken"),n.default.createElement(u.FormText,null,"Example help text that remains unchanged.")))),n.default.createElement(f.default,{heading:"Input Grid Sizing"},n.default.createElement(u.Form,null,n.default.createElement(u.FormGroup,{row:true},n.default.createElement(u.Label,{for:"Email-5",sm:2,size:"lg"},"Email"),n.default.createElement(u.Col,{sm:10},n.default.createElement(u.Input,{type:"email",name:"email",id:"Email-5",placeholder:"lg",bsSize:"lg"}))),n.default.createElement(u.FormGroup,{row:true},n.default.createElement(u.Label,{for:"Email-6",sm:2},"Email"),n.default.createElement(u.Col,{sm:10},n.default.createElement(u.Input,{type:"email",name:"email",id:"Email-6",placeholder:"default"}))))),n.default.createElement(f.default,{heading:"Hidden Labels"},n.default.createElement(u.Form,{inline:true},n.default.createElement(u.FormGroup,{className:"mr-10 mb-10"},n.default.createElement(u.Label,{for:"Email-7",hidden:true},"Email"),n.default.createElement(u.Input,{type:"email",name:"email",id:"Email-7",placeholder:"Email"})),n.default.createElement(u.FormGroup,{className:"mr-10 mb-10"},n.default.createElement(u.Label,{for:"Password-7",hidden:true},"Password"),n.default.createElement(u.Input,{type:"password",name:"password",id:"Password-7",placeholder:"Password"})),n.default.createElement(u.Button,{className:"mb-10",color:"primary"},"Submit"))))))}}]);return t}(r.Component);t.default=b},1790:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=l(1);var r=c(a);var n=l(52);var u=l(15);var m=l(47);var o=c(m);function c(e){return e&&e.__esModule?e:{default:e}}var d=function e(t){var l=t.split("-");if(l.length>1){return r.default.createElement(o.default,{id:"sidebar."+(l[0].charAt(0)+l[0].slice(1)+l[1].charAt(0).toUpperCase()+l[1].slice(1))})}else{return r.default.createElement(o.default,{id:"sidebar."+(t.charAt(0)+t.slice(1))})}};var i=function e(t,l,a){if(a===0){return"/"}else{return t.split(l)[0]+l}};var f=function e(t){var l=t.title,a=t.match,m=t.enableBreadCrumb;var o=a.path.substr(1);var c=o.split("/");return r.default.createElement("div",{className:"page-title d-flex justify-content-between align-items-center"},l&&r.default.createElement("div",{className:"page-title-wrap"},r.default.createElement("i",{className:"ti-angle-left"}),r.default.createElement("h2",{className:""},l)),m&&r.default.createElement(n.Breadcrumb,{className:"mb-0 tour-step-7",tag:"nav"},c.map(function(e,t){return r.default.createElement(n.BreadcrumbItem,{active:c.length===t+1,tag:c.length===t+1?"span":u.Link,key:t,to:i(o,e,t)},d(e))})))};f.defaultProps={enableBreadCrumb:true};t.default=f}}]);