(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{1642:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,a,r){if(a)e(t.prototype,a);if(r)e(t,r);return t}}();var n=a(1);var l=g(n);var s=a(1983);var u=g(s);var i=a(2257);var o=g(i);var c=a(2259);var f=g(c);var d=a(1790);var m=g(d);var p=a(47);var v=g(p);var y=a(2272);var b=g(y);var h=a(2273);var E=g(h);function g(e){return e&&e.__esModule?e:{default:e}}function w(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function N(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function A(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var P=function(e){A(t,e);function t(){var e;var a,r,n;w(this,t);for(var l=arguments.length,s=Array(l),u=0;u<l;u++){s[u]=arguments[u]}return n=(a=(r=N(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r),r.state={monthlyPlan:true,businessPlan:30,enterprisePlan:59},a),N(r,n)}r(t,[{key:"onPlanChange",value:function e(t){this.setState({monthlyPlan:!t});if(!t){this.setState({businessPlan:30,enterprisePlan:59})}else{this.setState({businessPlan:35,enterprisePlan:70})}}},{key:"render",value:function e(){var t=this;return l.default.createElement("div",{className:"pricing-wrapper"},l.default.createElement(m.default,{title:l.default.createElement(v.default,{id:"widgets.pricing"}),match:this.props.match}),l.default.createElement("div",{className:"pricing-top mb-50"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-sm-12 col-md-9 col-lg-7 mx-auto text-center"},l.default.createElement("h2",{className:"mb-20"},"Choose the plan that works for you."),l.default.createElement("div",null,l.default.createElement("span",null,"Monthly"),l.default.createElement(u.default,{onClick:function e(){return t.onPlanChange(t.state.monthlyPlan)},on:this.state.monthlyPlan}),l.default.createElement("span",null,"Yearly ( get 2 month extra)"))))),l.default.createElement("div",{className:"price-list"},l.default.createElement("div",{className:"row row-eq-height"},l.default.createElement(o.default,{planType:"free",type:"widgets.basic",color:"primary",description:"Secure file sharing and collaboration. Ideal for small teams.",buttonText:"widgets.startToBasic",price:"widgets.free",users:1,features:["100 GB secure storage","2 GB file upload","Minimum 3 users, max 10 users"]}),l.default.createElement(o.default,{planType:"premium",type:"widgets.pro",color:"warning",description:"More power & personalization",buttonText:"widgets.upgradeToPro",price:this.state.businessPlan,users:1,features:["Unlimited storage","5 GB file upload","Minimum 3 users, max 10 users"]}),l.default.createElement(o.default,{planType:"premium",type:"widgets.advanced",color:"info",description:"More power & personalization",buttonText:"widgets.upgradeToAdvance",price:this.state.enterprisePlan,users:1,features:["Unlimited storage","20 GB file upload","Minimum 13 users, max 20 users"]})),l.default.createElement("div",{className:"text-center py-40"},l.default.createElement("h2",{className:"mb-0"},l.default.createElement(v.default,{id:"widgets.comparePlans"}))),l.default.createElement("div",{className:"fixed-pricing"},l.default.createElement("div",{className:"row no-gutters row-eq-height"},l.default.createElement("div",{className:"col-sm-12 col-md-4"},l.default.createElement(f.default,{type:"widgets.basic",responses:"100 responses / mo",color:"primary",features:["Granular access and controls","Desktop sync","Mobile access","Version history","SSL and at-rest encryption","Two-factor authentication","Standard business support","User management","25,000 API calls per month"]})),l.default.createElement("div",{className:"col-sm-12 col-md-4"},l.default.createElement(f.default,{type:"widgets.pro",responses:"Unlimited responses",color:"warning",features:["Includes all Starter features plus","Advanced user and security reporting","Custom branding","Version history","SSL and at-rest encryption","Two-factor authentication","Standard business support","User management","25,000 API calls per month"]})),l.default.createElement("div",{className:"col-sm-12 col-md-4"},l.default.createElement(f.default,{type:"widgets.pro",responses:"Unlimited responses",color:"info",features:["Granular access and controls","Desktop sync","Mobile access","Version history","SSL and at-rest encryption","Two-factor authentication","Standard business support","User management","25,000 API calls per month"]}))))),l.default.createElement("div",{className:"testimonial-wrapper mb-50"},l.default.createElement("div",{className:"row"},l.default.createElement(b.default,null))),l.default.createElement(E.default,null))}}]);return t}(n.Component);t.default=P},1790:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(1);var n=o(r);var l=a(52);var s=a(15);var u=a(47);var i=o(u);function o(e){return e&&e.__esModule?e:{default:e}}var c=function e(t){var a=t.split("-");if(a.length>1){return n.default.createElement(i.default,{id:"sidebar."+(a[0].charAt(0)+a[0].slice(1)+a[1].charAt(0).toUpperCase()+a[1].slice(1))})}else{return n.default.createElement(i.default,{id:"sidebar."+(t.charAt(0)+t.slice(1))})}};var f=function e(t,a,r){if(r===0){return"/"}else{return t.split(a)[0]+a}};var d=function e(t){var a=t.title,r=t.match,u=t.enableBreadCrumb;var i=r.path.substr(1);var o=i.split("/");return n.default.createElement("div",{className:"page-title d-flex justify-content-between align-items-center"},a&&n.default.createElement("div",{className:"page-title-wrap"},n.default.createElement("i",{className:"ti-angle-left"}),n.default.createElement("h2",{className:""},a)),u&&n.default.createElement(l.Breadcrumb,{className:"mb-0 tour-step-7",tag:"nav"},o.map(function(e,t){return n.default.createElement(l.BreadcrumbItem,{active:o.length===t+1,tag:o.length===t+1?"span":s.Link,key:t,to:f(i,e,t)},c(e))})))};d.defaultProps={enableBreadCrumb:true};t.default=d},2257:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(1);var n=c(r);var l=a(52);var s=a(364);var u=c(s);var i=a(47);var o=c(i);function c(e){return e&&e.__esModule?e:{default:e}}var f=function e(t){var r=t.planType,s=t.type,i=t.description,c=t.price,f=t.users,d=t.features,m=t.color,p=t.buttonText;return n.default.createElement(u.default,{customClasses:"text-center",colClasses:"col-md-4"},n.default.createElement("div",{className:"pricing-icon mb-40"},n.default.createElement("img",{src:a(2258),alt:"pricing icon",className:"img-fluid",width:"",height:""})),n.default.createElement("h2",{className:"text-"+m+" pricing-title"},n.default.createElement(o.default,{id:s})),n.default.createElement("p",null,i),r!=="free"&&n.default.createElement("span",{className:"text-muted mb-5 d-block small"},"Starting at just"),n.default.createElement("div",{className:"mb-25"},r==="free"?n.default.createElement("h2",{className:"amount-title"},n.default.createElement(o.default,{id:c})):n.default.createElement("h2",{className:"amount-title"},"$",c,n.default.createElement("sub",null,"/mo")),n.default.createElement("span",{className:"text-muted small"},"For ",f," user")),n.default.createElement("ul",{className:"price-detail list-unstyled"},d.map(function(e,t){return n.default.createElement("li",{key:t},e)})),n.default.createElement(l.Button,{color:m,className:"btn-block btn-lg"},n.default.createElement(o.default,{id:p})))};t.default=f},2258:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAABPCAMAAAAZQE3fAAABKVBMVEUAAACRn6yfn6+Rn6yRn6yWpbShorPL1eCSn6yVoa6Yr7iSn6ySn6ySnqybr7yRnquSn6ySn6uSn6yTn6ySn6yToKySnqyTnqyRn6ySn6ySnqyTn6ySn6ySoK6an7WRn6ySnqyRoKyTn6v5/P+Rnqvo8vnX3eSYpLHR2N/X6fdQuDyWpLDBydGtucWVoq6zvsnm9erH0dn2+/3V4OnDztd7ym7k7vbj7PS43syns76gq7ij1q+z4K6r3aV+yHtyxWtfvlBbvUpXu0Ty+Pjs8fXt+PHQ5+zV3OLN1dzY79m+5buir7qN0IOCzXZ7yXNvxWDT6PPn6/Di5+3I4+G7xM7F58Sy3MPA5r6+5Lu747iq2bin26GZ06Ch2JqLzo6Ey4NswmNqw15UuUJw9LHlAAAAI3RSTlMA7xCsnBEeA44oC/7q4wf72763hnlaxkjQpZZROjcYoGxrQBPJNkoAAAIMSURBVGje7dVXU9tAFIbhIxEsW+64AQFSdBSiQyLLBic2uFMChJLe+///EZFHZGZt5KwuvF5m2Od+Z96Lb/bAdWsLaRQmu1wwIYoiCpZLAN/DpFs7sISpv2lh2QCuPNYsoeq7WAEuLblvibWDReDRcdMS7DHeAZ5FlaEyVIbKUBkqQ1rGSbvz6VB2htcg359OXWrGyZAG3R89oguZGfVL6h45jtPsU0diRpt+v3JGmjTcl5dxTntO4Be9l5dxSU0n8JPa8jIa9MUJ9OhUXsZ36gYVb4fkycvwBsE4jnp0JvPf+Ex0sffhW5/6hzIzrNMBjTQ8yTfF+3reOPtoST9tN+TCqgyVoTJGVAZLZbBUBktlsFQGS2WwVAZLZbBUBus2Z5joWoId4ypwpfHAEusdPgCue1i1hHrtJhPAtaFh6/hRBC+eTKpFeuViHCJYz6FQydUMRGGW4gsRpLD1dMwmlvmvVorrMEsJ3Hpmj9nBJZi7OFbtcc/dZAzmLJPCbXtCFQswZyV8aU/axpQB85XHmn3NLt4FLhEDlTxSdqDsSJEzUsEDFT9S/kDZkaY5IxUxUMkjTaDLDFTGSNmBznKkK5ovbwDcT2lX0msAsZw2HaK7NQViVgtVBIAlLVy6AmX05TIABfwnWwFIaDhbcQBjGcNlSwC6zwCfqV8xwZfRp9qI/deiHgZ8hh7OhL8Rabg8jkEWlwAAAABJRU5ErkJggg=="},2259:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(1);var n=c(r);var l=a(47);var s=c(l);var u=a(2260);var i=c(u);var o=a(52);function c(e){return e&&e.__esModule?e:{default:e}}var f=function e(t){var a=t.type,r=t.responses,l=t.color,u=t.features;return n.default.createElement("div",{className:"pricing-box"},n.default.createElement("div",{className:"pricing-head"},n.default.createElement("h2",{className:"text-"+l+" pricing-title mb-0"},n.default.createElement(s.default,{id:a}))),n.default.createElement("div",{className:"plan-info"},n.default.createElement("span",null,r)),n.default.createElement("div",{className:"pricing-body"},n.default.createElement("ul",{className:"list-unstyled plan-info-listing"},u.map(function(e,t){return n.default.createElement("li",{className:"d-flex justify-align-start",key:t},n.default.createElement("i",{className:"ti-check-box"}),n.default.createElement("a",{"data-tip":true},e),n.default.createElement(i.default,{place:"right",effect:"solid",className:"rct-tooltip"},n.default.createElement("span",null,e)))})),n.default.createElement(o.Button,{color:l,className:"btn-block btn-lg"},n.default.createElement(s.default,{id:"widgets.startToBasic"}))))};t.default=f},2272:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,a,r){if(a)e(t.prototype,a);if(r)e(t,r);return t}}();var n=a(1);var l=f(n);var s=a(1824);var u=f(s);var i=a(43);var o=a(200);var c=f(o);function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function m(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function p(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var v=function(e){p(t,e);function t(){var e;var a,r,n;d(this,t);for(var l=arguments.length,s=Array(l),u=0;u<l;u++){s[u]=arguments[u]}return n=(a=(r=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r),r.state={testimonials:null},a),m(r,n)}r(t,[{key:"componentDidMount",value:function e(){this.getTestimonials()}},{key:"getTestimonials",value:function e(){var t=this;c.default.get("testimonials.js").then(function(e){t.setState({testimonials:e.data})}).catch(function(e){})}},{key:"render",value:function e(){var t=this.props.rtlLayout;var a={dots:true,infinite:true,speed:500,slidesToShow:1,slidesToScroll:1,arrows:false,rtl:t};var r=this.state.testimonials;return l.default.createElement("div",{className:"col-sm-12 col-md-10 mx-auto testimonial-slider"},l.default.createElement(u.default,a,r&&r.map(function(e,t){return l.default.createElement("div",{className:"media",key:t},l.default.createElement("img",{src:e.avatar,alt:"user profile",className:"rounded-circle mr-50 pull-left",width:"137",height:"137"}),l.default.createElement("div",{className:"media-body"},l.default.createElement("p",null,"“",e.body,"“"),l.default.createElement("div",{className:"user-meta"},l.default.createElement("span",{className:"fw-bold d-block"},e.name),l.default.createElement("span",{className:"small"},e.designation))))})))}}]);return t}(n.Component);var y=function e(t){var a=t.settings;return a};t.default=(0,i.connect)(y)(v)},2273:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,a,r){if(a)e(t.prototype,a);if(r)e(t,r);return t}}();var n=a(1);var l=f(n);var s=a(52);var u=a(200);var i=f(u);var o=a(47);var c=f(o);function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function m(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function p(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var v=function(e){p(t,e);function t(){var e;var a,r,n;d(this,t);for(var l=arguments.length,s=Array(l),u=0;u<l;u++){s[u]=arguments[u]}return n=(a=(r=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r),r.state={faqs:null},a),m(r,n)}r(t,[{key:"componentDidMount",value:function e(){this.getFaqs()}},{key:"getFaqs",value:function e(){var t=this;i.default.get("faqs.js").then(function(e){t.setState({faqs:e.data})}).catch(function(e){})}},{key:"render",value:function e(){var t=this.state.faqs;return l.default.createElement("div",null,l.default.createElement("div",{className:"text-center py-40"},l.default.createElement("h2",{className:"mb-0"},l.default.createElement(c.default,{id:"widgets.frequentlyAskedQuestions"}))),l.default.createElement("div",{className:"faq-wrapper"},l.default.createElement(s.CardColumns,null,t&&t.map(function(e,t){return l.default.createElement(s.Card,{key:t},l.default.createElement(s.CardBody,null,l.default.createElement(s.CardTitle,null,e.title),l.default.createElement(s.CardText,null,e.content)))}))))}}]);return t}(n.Component);t.default=v}}]);