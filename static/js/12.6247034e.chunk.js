(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{1629:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,a.key,a)}}return function(t,l,a){if(l)e(t.prototype,l);if(a)e(t,a);return t}}();var o=l(1);var r=u(o);var n=l(364);var c=u(n);var s=l(368);var d=l(2186);function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function f(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function m(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var p=function(e){m(t,e);function t(){i(this,t);return f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}a(t,[{key:"render",value:function e(){return r.default.createElement("div",{className:"news-dashboard-wrapper"},r.default.createElement(s.TrendingNews,null),r.default.createElement("div",{className:"row"},r.default.createElement(c.default,{heading:"Top Headlines",colClasses:"col-sm-12 col-md-12 col-lg-8",collapsible:true,reloadable:true,closeable:true,fullBlock:true},r.default.createElement(s.TopHeadlines,null)),r.default.createElement("div",{className:"col-sm-12 col-md-12 col-lg-4"},r.default.createElement("div",{className:"row"},r.default.createElement(c.default,{heading:"Visitors",colClasses:"col-sm-6 col-md-6 col-lg-12",customClasses:"visitors-widget flex-chart",contentCustomClasses:"justify-space-between"},r.default.createElement(s.Visitors,{chartData:d.newsVisitorsData})),r.default.createElement(c.default,{heading:"Subscribers",colClasses:"col-sm-6 col-md-6 col-lg-12",customClasses:"subscribers-widget flex-chart",contentCustomClasses:"justify-content-end"},r.default.createElement(s.Subscribers,null))))),r.default.createElement("div",{className:"row"},r.default.createElement(c.default,{heading:"Newslater Campaign",colClasses:"col-sm-12 col-md-12 col-lg-6",customClasses:"flex-chart newslater-widget",contentCustomClasses:"justify-content-end"},r.default.createElement(s.NewslaterCampaign,{chartData:d.newslaterCampaignData})),r.default.createElement(c.default,{heading:"Recent Comments",colClasses:"col-sm-12 col-md-12 col-lg-6",contentCustomClasses:"comment-section",collapsible:true,reloadable:true,closeable:true,fullBlock:true},r.default.createElement(s.CommentsWidget,null))),r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-sm-6 col-md-6 col-lg-3"},r.default.createElement(s.SocialFeedsWidget,{type:"facebook",friendsCount:"89k",icon:"zmdi zmdi-facebook",feedsCount:"459"})),r.default.createElement("div",{className:"col-sm-6 col-md-6 col-lg-3"},r.default.createElement(s.SocialFeedsWidget,{type:"twitter",friendsCount:"89k",feedsCount:"459",icon:"zmdi zmdi-twitter"})),r.default.createElement("div",{className:"col-sm-6 col-md-6 col-lg-3"},r.default.createElement(s.SocialFeedsWidget,{type:"linkedin",friendsCount:"89k",feedsCount:"459",icon:"zmdi zmdi-linkedin"})),r.default.createElement("div",{className:"col-sm-6 col-md-6 col-lg-3"},r.default.createElement(s.SocialFeedsWidget,{type:"google",friendsCount:"89k",feedsCount:"459",icon:"zmdi zmdi-google"}))),r.default.createElement("div",{className:"row"},r.default.createElement(c.default,{heading:"Recent Activity",colClasses:"col-sm-12 col-md-12 col-lg-4"},r.default.createElement(s.RecentActivity,null)),r.default.createElement("div",{className:"col-sm-12 col-md-12 col-lg-8"},r.default.createElement(s.TopNews,null))),r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-sm-6 col-md-6 col-lg-4"},r.default.createElement(s.TopAuthors,null)),r.default.createElement(c.default,{heading:"Twitter Feeds",colClasses:"col-sm-6 col-md-6 col-lg-4",customClasses:"twitter-feeds-widget"},r.default.createElement(s.TwitterFeedsV2,null)),r.default.createElement(c.default,{colClasses:"col-sm-12 col-md-12 col-lg-4",fullBlock:true,customClasses:"overflow-hidden"},r.default.createElement(s.Notifications,null))))}}]);return t}(o.Component);t.default=p},2186:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.newslaterCampaignData=t.newsVisitorsData=undefined;var a=l(270);var o=n(a);var r=l(148);function n(e){return e&&e.__esModule?e:{default:e}}var c=t.newsVisitorsData={chartLabels:["0","2","3","4","5","6","7","8","9","10","11","12"],chartDatasets:[{label:"Series A",backgroundColor:o.default.color.primary,borderColor:o.default.color.primary,borderWidth:1,hoverBackgroundColor:o.default.color.primary,hoverBorderColor:o.default.color.primary,data:[5,20,40,15,8,50,30,20,35,30,30,50]},{label:"Series B",backgroundColor:o.default.color.default,borderColor:o.default.color.default,borderWidth:1,hoverBackgroundColor:o.default.color.default,hoverBorderColor:o.default.color.default,data:[20,70,60,50,10,55,65,60,65,40,67,60]}]};var s=t.newslaterCampaignData={chartLabels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chartDatasets:[{label:"Campaign 1",lineTension:0,backgroundColor:(0,r.hexToRgbA)(o.default.color.default,.4),borderColor:o.default.color.info,borderWidth:3,pointBorderWidth:0,pointRadius:0,data:[50,45,22,18,25,5,35,20,45,22,30,70,40]},{label:"Campaign 2",lineTension:0,backgroundColor:(0,r.hexToRgbA)(o.default.color.primary,.4),borderColor:o.default.color.primary,borderWidth:3,pointBorderWidth:0,pointRadius:0,data:[40,30,60,30,35,50,10,30,25,28,55,65,80]}]}}}]);