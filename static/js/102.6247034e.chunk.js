(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[102],{1719:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,a,r){if(a)e(t.prototype,a);if(r)e(t,r);return t}}();var n=a(1);var l=u(n);var i=a(6);var c=u(i);var s=a(705);var o=u(s);function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function f(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function w(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}function m(e){switch(e){case e>=200&&e<300:return"wi wi-night-showers";case e>=300&&e<500:return"wi day-sleet";case e>=500&&e<600:return"wi wi-night-showers";case e>=600&&e<700:return"wi wi-day-snow";case e>=700&&e<800:return"wi wi-day-fog";case e===800:return"wi wi-day-sunny";case e>=801&&e<803:return"wi wi-night-partly-cloudy";case e>=802&&e<900:return"wi wi-day-cloudy";case e===905||e>=951&&e<=956:return"wi wi-day-windy";case e>=900&&e<1e3:return"wi wi-night-showers";default:break}}var p=function(e){w(t,e);function t(){var e;var a,r,n;d(this,t);for(var l=arguments.length,i=Array(l),c=0;c<l;c++){i[c]=arguments[c]}return n=(a=(r=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r),r.state={weatherData:null,city:r.props.city?r.props.city:"New York"},a),f(r,n)}r(t,[{key:"componentDidMount",value:function e(){var t=this;var a="b1b15e88fa797225412429c1c50c122a1";var r="69b72ed255ce5efad910bd946685883a";o.default.get("http://api.openweathermap.org/data/2.5/forecast/daily?q="+this.state.city+"&cnt=5&units=metric&mode=json&appid="+a+"&apikey="+r).then(function(e){t.setState({weatherData:e.data})}).catch(function(e){console.log("Error fetching and parsing data",e)})}},{key:"renderFiveDayForecast",value:function e(){var t=this.state.weatherData;var a=[];if(t){for(var r=1;r<t.list.length;r++){var n=t.list[r];var i=l.default.createElement("li",{className:"d-flex justify-content-between align-items-center",key:n.dt},l.default.createElement("span",{className:"w-50"},this.state.city,", ",(0,c.default)(n.dt*1e3).format("ddd DD MMMM")),l.default.createElement("div",{className:"w-icon"},l.default.createElement("i",{className:m(n.weather[0].id)})),l.default.createElement("span",{className:"d-block"},n.temp.max,l.default.createElement("sup",null,"°C")),l.default.createElement("span",{className:"d-block"},n.weather[0].main));a.push(i)}}return a}},{key:"render",value:function e(){var t=this.state.weatherData;return l.default.createElement(n.Fragment,null,l.default.createElement("div",{className:"weather-top rct-weather-widget overflow-hidden rounded-top"},t!==null&&l.default.createElement("div",{className:"black-overlay weather-over py-20"},l.default.createElement("div",{className:"weather-head mb-20 d-flex justify-content-between"},l.default.createElement("div",{className:"align-items-start"},l.default.createElement("h4",null,t.city.name),l.default.createElement("span",null,(0,c.default)().format("ddd, HH:mm A"))),l.default.createElement("i",{className:m(t.list[0].weather[0].id)})),l.default.createElement("div",{className:"weather-temp"},l.default.createElement("h2",null,t.list[0].temp.day,l.default.createElement("sup",null,"°C"))))),l.default.createElement("div",{className:"weather-bottom"},l.default.createElement("ul",{className:"list-inline mb-0"},this.renderFiveDayForecast())))}}]);return t}(n.Component);t.default=p}}]);