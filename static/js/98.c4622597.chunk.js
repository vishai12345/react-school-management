(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[98],{1715:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,a,r){if(a)e(t.prototype,a);if(r)e(t,r);return t}}();var n=a(1);var o=k(n);var u=a(124);var s=k(u);var i=a(52);var c=a(105);var d=k(c);var m=a(1799);var f=k(m);var v=a(683);var p=k(v);var C=a(94);var h=a(200);var E=k(h);var g=a(47);var b=k(g);var y=a(686);var w=k(y);var _=a(1847);var N=k(_);function k(e){return e&&e.__esModule?e:{default:e}}function S(e,t,a){if(t in e){Object.defineProperty(e,t,{value:a,enumerable:true,configurable:true,writable:true})}else{e[t]=a}return e}function M(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function O(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function D(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var j=function(e){D(t,e);function t(){var e;var a,r,l;M(this,t);for(var n=arguments.length,o=Array(n),u=0;u<n;u++){o[u]=arguments[u]}return l=(a=(r=O(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r),r.state={sectionReload:false,newCustomers:null,selectedDeletedCustomer:null,editCustomerModal:false,editCustomer:null,snackbar:false,successMessage:"",addNewCustomerForm:false,addNewCustomerDetails:{customer_email:"",customer_name:"",id:"",photo_url:""}},r.toggleEditCustomerModal=function(){r.setState({editCustomerModal:!r.state.editCustomerModal})},a),O(r,l)}l(t,[{key:"componentDidMount",value:function e(){this.getNewCustomers()}},{key:"getNewCustomers",value:function e(){var t=this;this.setState({sectionReload:true});E.default.get("newCustomers.js").then(function(e){t.setState({newCustomers:e.data,sectionReload:false})}).catch(function(e){t.setState({newCustomers:null,sectionReload:false})})}},{key:"onDeleteCustomer",value:function e(t){this.refs.deleteConfirmationDialog.open();this.setState({selectedDeletedCustomer:t})}},{key:"deleteCustomer",value:function e(){var t=this;this.refs.deleteConfirmationDialog.close();this.setState({sectionReload:true});var a=this.state.newCustomers;var r=a.indexOf(this.state.selectedDeletedCustomer);setTimeout(function(){a.splice(r,1);t.setState({newCustomers:a,snackbar:true,successMessage:"Customer Deleted Successfully",sectionReload:false})},1500)}},{key:"onEditCustomer",value:function e(t){this.setState({editCustomerModal:true,editCustomer:t,addNewCustomerForm:false})}},{key:"onSubmitCustomerEditDetailForm",value:function e(){var t=this.state,a=t.editCustomer,r=t.newCustomers;if(a.customer_name!==""&&a.customer_email!==""){this.setState({editCustomerModal:false,sectionReload:true});var l=void 0;for(var n=0;n<r.length;n++){var o=r[n];if(o.customer_id===a.customer_id){l=n}}var u=this;setTimeout(function(){u.setState({sectionReload:false,snackbar:true,successMessage:"Customer Updated Success"});u.setState({newCustomers:(0,s.default)(r,S({},l,{$set:a}))})},1500)}}},{key:"onChangeCustomerDetails",value:function e(t,a){this.setState({editCustomer:r({},this.state.editCustomer,S({},t,a))})}},{key:"addNewCustomer",value:function e(){this.setState({editCustomerModal:true,addNewCustomerForm:true,editCustomer:null,addNewCustomerDetails:{customer_email:"",customer_name:"",id:"",photo_url:""}})}},{key:"onChangeCustomerAddNewForm",value:function e(t,a){this.setState({addNewCustomerDetails:r({},this.state.addNewCustomerDetails,S({},t,a))})}},{key:"onSubmitAddNewCustomerForm",value:function e(){var t=this.state.addNewCustomerDetails;if(t.customer_name!==""&&t.customer_email!==""){this.setState({editCustomerModal:false,sectionReload:true});var a=t;a.id=(new Date).getTime(),a.photo_url="";var r=this.state.newCustomers;var l=this;setTimeout(function(){r.push(a);l.setState({newCustomers:r,sectionReload:false,snackbar:true,successMessage:"Customer Added Successfully"})},1500)}}},{key:"render",value:function e(){var t=this;var a=this.state,r=a.newCustomers,l=a.sectionReload,u=a.editCustomerModal,s=a.addNewCustomerForm,c=a.editCustomer,m=a.snackbar,v=a.successMessage,h=a.addNewCustomerDetails;return o.default.createElement(n.Fragment,null,l&&o.default.createElement(w.default,null),o.default.createElement(C.Scrollbars,{className:"rct-scroll",autoHeight:true,autoHeightMin:100,autoHeightMax:290,autoHide:true},o.default.createElement("ul",{className:"list-group new-customer-list"},r&&r.map(function(e,a){return o.default.createElement("li",{className:"list-group-item d-flex justify-content-between",key:a},o.default.createElement("div",{className:"d-flex align-items-start"},o.default.createElement("div",{className:"media"},o.default.createElement("div",{className:"media-left mr-15"},e.photo_url===""?o.default.createElement(p.default,null,e.customer_name.charAt(0)):o.default.createElement("img",{src:e.photo_url,alt:"project logo",className:"media-object rounded-circle",width:"40",height:"40"})),o.default.createElement("div",{className:"media-body"},o.default.createElement("span",{className:"d-block fs-14"},e.customer_name),o.default.createElement("span",{className:"d-block fs-12 text-muted"},e.customer_email)))),o.default.createElement("div",{className:"d-flex align-items-end"},o.default.createElement("a",{href:"javascript:void(0)",color:"primary",onClick:function a(){return t.onEditCustomer(e)}},o.default.createElement("i",{className:"zmdi zmdi-edit"})),o.default.createElement("a",{href:"javascript:void(0)",className:"text-danger",onClick:function a(){return t.onDeleteCustomer(e)}},o.default.createElement("i",{className:"zmdi zmdi-close"}))))}))),o.default.createElement("div",{className:"d-flex p-3"},o.default.createElement(d.default,{variant:"raised",color:"primary",className:"text-white",onClick:function e(){return t.addNewCustomer()}},o.default.createElement(b.default,{id:"widgets.addNew"}))),o.default.createElement(N.default,{ref:"deleteConfirmationDialog",title:"Are You Sure Want To Delete?",message:"Are You Sure Want To Delete Permanently This Customer.",onConfirm:function e(){return t.deleteCustomer()}}),u&&o.default.createElement(i.Modal,{isOpen:u,toggle:this.toggleEditCustomerModal},o.default.createElement(i.ModalHeader,{toggle:this.toggleEditCustomerModal},s?"Add New Customer":"Edit Customer"),o.default.createElement(i.ModalBody,null,s?o.default.createElement(i.Form,null,o.default.createElement(i.FormGroup,null,o.default.createElement(i.Label,{for:"customerName"},"Name"),o.default.createElement(i.Input,{type:"text",name:"name",id:"customerName",value:h.customer_name,onChange:function e(a){return t.onChangeCustomerAddNewForm("customer_name",a.target.value)}})),o.default.createElement(i.FormGroup,null,o.default.createElement(i.Label,{for:"customerEmail"},"Email"),o.default.createElement(i.Input,{type:"email",name:"email",id:"customerEmail",value:h.customer_email,onChange:function e(a){return t.onChangeCustomerAddNewForm("customer_email",a.target.value)}}))):o.default.createElement(i.Form,null,o.default.createElement(i.FormGroup,null,o.default.createElement(i.Label,{for:"customerId"},"Id"),o.default.createElement(i.Input,{type:"text",name:"name",id:"customerId",defaultValue:c.customer_id,readOnly:true})),o.default.createElement(i.FormGroup,null,o.default.createElement(i.Label,{for:"customerName"},"Name"),o.default.createElement(i.Input,{type:"text",name:"name",id:"customerName",value:c.customer_name,onChange:function e(a){return t.onChangeCustomerDetails("customer_name",a.target.value)}})),o.default.createElement(i.FormGroup,null,o.default.createElement(i.Label,{for:"customerEmail"},"Email"),o.default.createElement(i.Input,{type:"email",name:"email",id:"customerEmail",value:c.customer_email,onChange:function e(a){return t.onChangeCustomerDetails("customer_email",a.target.value)}})))),o.default.createElement(i.ModalFooter,null,s?o.default.createElement("div",null,o.default.createElement(d.default,{variant:"raised",color:"primary",className:"text-white",onClick:function e(){return t.onSubmitAddNewCustomerForm()}},o.default.createElement(b.default,{id:"button.add"}))," ",o.default.createElement(d.default,{variant:"raised",className:"btn-danger text-white",onClick:this.toggleEditCustomerModal},o.default.createElement(b.default,{id:"button.cancel"}))):o.default.createElement("div",null,o.default.createElement(d.default,{variant:"raised",color:"primary",className:"text-white",onClick:function e(){return t.onSubmitCustomerEditDetailForm()}},o.default.createElement(b.default,{id:"button.update"}))," ",o.default.createElement(d.default,{variant:"raised",className:"btn-danger text-white",onClick:this.toggleEditCustomerModal},o.default.createElement(b.default,{id:"button.cancel"}))))),o.default.createElement(f.default,{anchorOrigin:{vertical:"top",horizontal:"center"},open:m,onClose:function e(){return t.setState({snackbar:false})},autoHideDuration:2e3,message:o.default.createElement("span",{id:"message-id"},v)}))}}]);return t}(n.Component);t.default=j},1847:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,a,r){if(a)e(t.prototype,a);if(r)e(t,r);return t}}();var l=a(1);var n=E(l);var o=a(1794);var u=E(o);var s=a(1796);var i=E(s);var c=a(1795);var d=E(c);var m=a(1802);var f=E(m);var v=a(1797);var p=E(v);var C=a(105);var h=E(C);function E(e){return e&&e.__esModule?e:{default:e}}function g(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function b(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function y(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var w=function(e){y(t,e);function t(){var e;var a,r,l;g(this,t);for(var n=arguments.length,o=Array(n),u=0;u<n;u++){o[u]=arguments[u]}return l=(a=(r=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r),r.state={open:false},a),b(r,l)}r(t,[{key:"open",value:function e(){this.setState({open:true})}},{key:"close",value:function e(){this.setState({open:false})}},{key:"render",value:function e(){var t=this;var a=this.props,r=a.title,l=a.message,o=a.onConfirm;return n.default.createElement(u.default,{open:this.state.open,onClose:function e(){return t.close()},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},n.default.createElement(p.default,{id:"alert-dialog-title"},r),n.default.createElement(d.default,null,n.default.createElement(f.default,{id:"alert-dialog-description"},l)),n.default.createElement(i.default,null,n.default.createElement(h.default,{onClick:function e(){return t.close()},className:"btn-danger text-white"},"Cancel"),n.default.createElement(h.default,{onClick:o,className:"btn-primary text-white",autoFocus:true},"Yes")))}}]);return t}(l.Component);t.default=w}}]);