(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{1637:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||false;l.configurable=true;if("value"in l)l.writable=true;Object.defineProperty(e,l.key,l)}}return function(t,a,l){if(a)e(t.prototype,a);if(l)e(t,l);return t}}();var n=a(1);var r=z(n);var o=a(52);var s=a(43);var i=a(1799);var c=z(i);var u=a(281);var d=z(u);var f=a(201);var m=z(f);var p=a(202);var h=z(p);var v=a(85);var b=a(146);var g=z(b);var k=a(1887);var E=z(k);var T=a(374);var y=z(T);var w=a(80);var N=z(w);var C=a(2235);var S=z(C);var A=a(2236);var x=z(A);var _=a(2239);var M=z(_);var O=a(2240);var j=z(O);var L=a(57);function z(e){return e&&e.__esModule?e:{default:e}}function I(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function P(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function D(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}function F(e,t,a){if(t in e){Object.defineProperty(e,t,{value:a,enumerable:true,configurable:true,writable:true})}else{e[t]=a}return e}var R=250;var U=function e(t){return{root:{flexGrow:1,height:"auto",zIndex:1,overflow:"hidden",position:"relative",display:"flex",width:"100%"},appBar:F({position:"absolute",marginLeft:t.direction!=="rtl"?R:0,marginRight:t.direction==="rtl"?R:0},t.breakpoints.up("md"),{width:"calc(100% - "+R+"px)"}),navIconHide:F({},t.breakpoints.up("md"),{display:"none"}),toolbar:t.mixins.toolbar,drawerPaper:F({width:R},t.breakpoints.up("md"),{position:"relative"}),content:{flexGrow:1,backgroundColor:t.palette.background.default,padding:t.spacing.unit*3}}};var B=function(e){D(t,e);function t(){var e;var a,l,n;I(this,t);for(var r=arguments.length,o=Array(r),s=0;s<r;s++){o[s]=arguments[s]}return n=(a=(l=P(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),l),l.state={mobileOpen:false},l.handleDrawerToggle=function(){l.setState({mobileOpen:!l.state.mobileOpen})},a),P(l,n)}l(t,[{key:"componentWillMount",value:function e(){this.props.getTodos()}},{key:"componentDidMount",value:function e(){(0,N.default)("body").css({overflow:"hidden"})}},{key:"componentWillUnmount",value:function e(){(0,N.default)("body").css({overflow:""});(0,N.default)("body").css({"overflow-x":"hidden"})}},{key:"updateSearch",value:function e(t){this.props.updateSearch(t.target.value);this.props.onSearchTodo(t.target.value)}},{key:"render",value:function e(){var t=this;var l=this.props,n=l.selectedTodo,s=l.showMessage,i=l.message,u=l.searchTodo,f=l.theme,p=l.classes;var v=r.default.createElement("div",{className:"todo-sidebar-wrap"},r.default.createElement("div",{className:"user-wrap d-flex justify-content-between"},r.default.createElement("div",{className:"media align-items-center"},r.default.createElement("img",{src:a(399),alt:"user-profile",className:"img-fluid rounded-circle mr-3",width:"60",height:"60"}),r.default.createElement("div",{className:"media-body"},r.default.createElement("h5",{className:"text-white mb-0"},"Jhon Doe"),r.default.createElement("p",{className:"text-white font-xs mb-0"},"jhon@example.com")))),r.default.createElement(S.default,null),r.default.createElement(M.default,null));return r.default.createElement("div",{className:"todo-wrapper"},r.default.createElement("div",{className:p.root},r.default.createElement(m.default,{className:p.appBar,position:"static"},r.default.createElement(h.default,{className:"d-flex justify-content-between"},r.default.createElement(g.default,{"aria-label":"open drawer",onClick:this.handleDrawerToggle,className:p.navIconHide},r.default.createElement(y.default,null)),r.default.createElement(o.FormGroup,{className:"mb-0 w-25"},r.default.createElement(o.Input,{type:"search",name:"search",id:"search-todo",className:"has-input-right",placeholder:"Search..",onChange:function e(a){return t.updateSearch(a)},value:u})),r.default.createElement("div",{className:"d-flex align-items-center"},r.default.createElement(g.default,{className:"mx-1 btn-sm"},r.default.createElement("i",{className:"zmdi zmdi-arrow-left"})),r.default.createElement(g.default,{className:"mx-1 btn-sm"},r.default.createElement("i",{className:"zmdi zmdi-arrow-right"}))))),r.default.createElement(E.default,{mdUp:true,className:"todo-list-wrap"},r.default.createElement(d.default,{variant:"temporary",anchor:f.direction==="rtl"?"right":"left",open:this.state.mobileOpen,onClose:this.handleDrawerToggle,classes:{paper:p.drawerPaper},ModalProps:{keepMounted:true}},v)),r.default.createElement(E.default,{smDown:true,implementation:"css",className:"todo-list-wrap"},r.default.createElement(d.default,{variant:"permanent",open:true,classes:{paper:p.drawerPaper}},v)),r.default.createElement("div",{className:"bg-transparent "+p.content},r.default.createElement("div",{className:p.toolbar}),n===null?r.default.createElement(x.default,null):r.default.createElement(j.default,null))),r.default.createElement(c.default,{anchorOrigin:{vertical:"top",horizontal:"center"},open:s,message:r.default.createElement("span",{id:"message-id"},i),autoHideDuration:1e3,onClose:function e(){return t.props.closeSnakbarAction()}}))}}]);return t}(n.Component);var H=function e(t){var a=t.todoApp,l=t.settings;var n=a.selectedTodo,r=a.message,o=a.showMessage,s=a.searchTodo;return{selectedTodo:n,message:r,showMessage:o,searchTodo:s,settings:l}};t.default=(0,s.connect)(H,{closeSnakbarAction:L.closeSnakbarAction,updateSearch:L.updateSearch,onSearchTodo:L.onSearchTodo,getTodos:L.getTodos})((0,v.withStyles)(U,{withTheme:true})(B))},1831:function(e,t,a){e.exports=a.p+"static/media/user-2.2ac74301.jpg"},1832:function(e,t,a){e.exports=a.p+"static/media/user-3.9697f000.jpg"},2235:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||false;l.configurable=true;if("value"in l)l.writable=true;Object.defineProperty(e,l.key,l)}}return function(t,a,l){if(a)e(t.prototype,a);if(l)e(t,l);return t}}();var n=a(1);var r=m(n);var o=a(105);var s=m(o);var i=a(43);var c=a(52);var u=a(57);var d=a(47);var f=m(d);function m(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function h(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function v(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var b=function(e){v(t,e);function t(){var e;var a,l,n;p(this,t);for(var r=arguments.length,o=Array(r),s=0;s<r;s++){o[s]=arguments[s]}return n=(a=(l=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),l),l.state={addNewTaskModal:false,labels:null,taskName:"",assignTo:null},l.toggleAddNewTaskModal=function(){l.setState({addNewTaskModal:!l.state.addNewTaskModal})},l.addNewTask=function(){var e=l.state,t=e.taskName,a=e.assignTo,n=e.labels;var r=void 0;var o=void 0;if(t!==""&&a!==null&&n!==null){var s=true;var i=false;var c=undefined;try{for(var u=l.props.users[Symbol.iterator](),d;!(s=(d=u.next()).done);s=true){var f=d.value;if(a==f.id){o=f}}}catch(e){i=true;c=e}finally{try{if(!s&&u.return){u.return()}}finally{if(i){throw c}}}var m=Math.floor(Math.random()*1e3+1);r={id:m,task_name:t,assignTo:o,labels:n};l.setState({addNewTaskModal:false});l.props.addNewTaskAction(r)}},l.onChangeAssignTo=function(e){l.setState({assignTo:e.target.value})},l.onChangeLabels=function(e){var t=e.target.options;var a=[];for(var n=0,r=t.length;n<r;n++){if(t[n].selected){a.push(Number(t[n].value))}}l.setState({labels:a})},a),h(l,n)}l(t,[{key:"render",value:function e(){var t=this;var a=this.state.addNewTaskModal;return r.default.createElement("div",{className:"add-task p-20"},r.default.createElement(s.default,{onClick:this.toggleAddNewTaskModal,variant:"contained",className:"btn-danger text-white btn-block font-weight-bold"},r.default.createElement("i",{className:"zmdi zmdi-edit mr-10 font-lg"}),r.default.createElement(f.default,{id:"components.addNewTasks"})),r.default.createElement(c.Modal,{isOpen:a,toggle:this.toggleAddNewTaskModal},r.default.createElement(c.ModalHeader,{toggle:this.toggleAddNewTaskModal},r.default.createElement(f.default,{id:"components.addNewTasks"})),r.default.createElement(c.ModalBody,null,r.default.createElement(c.Form,null,r.default.createElement(c.FormGroup,null,r.default.createElement(c.Label,{for:"task-name"},"Task Name"),r.default.createElement(c.Input,{type:"text",name:"taskName",id:"task-name",placeholder:"Enter Task Name",onChange:function e(a){return t.setState({taskName:a.target.value})}})),r.default.createElement(c.FormGroup,null,r.default.createElement(c.Label,{for:"labels"},"Task Labels"),r.default.createElement(c.Input,{type:"select",name:"labels",id:"task-labels",multiple:true,onChange:this.onChangeLabels},this.props.labels.map(function(e,t){return r.default.createElement("option",{key:t,value:e.value},r.default.createElement(f.default,{id:e.name}))}))),r.default.createElement(c.FormGroup,null,r.default.createElement(c.Label,{for:"labels"},"Assign To"),r.default.createElement(c.Input,{type:"select",name:"labels",id:"task-labels",onChange:this.onChangeAssignTo},this.props.users.map(function(e,t){return r.default.createElement("option",{key:t,value:e.id},e.name)}))))),r.default.createElement(c.ModalFooter,null,r.default.createElement(s.default,{variant:"raised",className:"btn-primary text-white",onClick:this.addNewTask},r.default.createElement(f.default,{id:"button.add"}))," ",r.default.createElement(s.default,{variant:"raised",className:"btn-danger text-white",onClick:this.toggleAddNewTaskModal},r.default.createElement(f.default,{id:"button.cancel"})))))}}]);return t}(n.Component);var g=function e(t){var a=t.todoApp,l=t.settings;var n=a.users,r=a.labels;return{users:n,labels:r,settings:l}};t.default=(0,i.connect)(g,{addNewTaskAction:u.addNewTaskAction})(b)},2236:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||false;l.configurable=true;if("value"in l)l.writable=true;Object.defineProperty(e,l.key,l)}}return function(t,a,l){if(a)e(t.prototype,a);if(l)e(t,l);return t}}();var n=a(1);var r=A(n);var o=a(146);var s=A(o);var i=a(276);var c=A(i);var u=a(3);var d=A(u);var f=a(43);var m=a(1820);var p=A(m);var h=a(365);var v=A(h);var b=a(94);var g=a(15);var k=a(2237);var E=A(k);var T=a(148);var y=a(47);var w=A(y);var N=a(57);var C=a(2238);var S=A(C);function A(e){return e&&e.__esModule?e:{default:e}}function x(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function M(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var O=function e(t){var a=t.toDos,l=t.onSelectTodo,n=t.onCheckBoxClickTodoItem,o=t.getTaskLabelNames;return r.default.createElement("ul",{className:"list-unstyled todo-all-list mb-0"},a&&a!==null&&a.map(function(e,t){return r.default.createElement(E.default,{key:t,todo:e,sortIndex:t,index:t,onSelectTodo:l,onCheckBoxClickTodoItem:n,getTaskLabelNames:o})}))};var j=function(e){M(t,e);function t(){var e;var a,l,n;x(this,t);for(var o=arguments.length,s=Array(o),i=0;i<o;i++){s[i]=arguments[i]}return n=(a=(l=_(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),l),l.state={anchorEl:null,labelMenu:false,optionsMenu:false},l.getTaskLabelNames=function(e){var t=[];var a=l.props.labels;var n=true;var o=false;var s=undefined;try{for(var i=e[Symbol.iterator](),c;!(n=(c=i.next()).done);n=true){var u=c.value;var f=true;var m=false;var p=undefined;try{for(var h=a[Symbol.iterator](),v;!(f=(v=h.next()).done);f=true){var b=v.value;if(b.value===u){var g=r.default.createElement("span",{key:b.value,className:(0,d.default)("badge badge-pill",{"badge-success":b.value===1,"badge-primary":b.value===2,"badge-info":b.value===3,"badge-danger":b.value===4})},r.default.createElement(w.default,{id:b.name}));t.push(g)}}}catch(e){m=true;p=e}finally{try{if(!f&&h.return){h.return()}}finally{if(m){throw p}}}}}catch(e){o=true;s=e}finally{try{if(!n&&i.return){i.return()}}finally{if(o){throw s}}}return t},l.onCheckBoxClickTodoItem=function(e){l.props.onCheckBoxToggleTodoItem(e)},l.onSelectTodo=function(e){l.props.onSelectTodoAction(e);setTimeout(function(){l.props.hideLoadingIndicatorAction()},1200)},l.handleClose=function(){l.setState({anchorEl:null,labelMenu:false,optionsMenu:false})},l.handleClick=function(e){l.setState({anchorEl:e.currentTarget,optionsMenu:true})},l.onLabelSelect=function(e){l.props.onLabelSelect();l.setState({anchorEl:e.currentTarget,labelMenu:true})},a),_(l,n)}l(t,[{key:"componentWillMount",value:function e(){this.props.fetchTodos()}},{key:"onAllTodoSelect",value:function e(){var t=this.props.selectedToDos<this.props.toDos.length;if(t){this.props.selectAllTodo()}else{this.props.getUnselectedAllTodo()}}},{key:"onOptionMenuItemSelect",value:function e(t){switch(t.title){case"All":this.handleClose();this.props.selectAllTodo();break;case"None":this.handleClose();this.props.getUnselectedAllTodo();break;case"Starred":this.handleClose();this.props.selectStarredTodo();break;case"Unstarred":this.handleClose();this.props.selectUnStarredTodo();break;default:break}}},{key:"onLabelMenuItemSelect",value:function e(t){this.handleClose();this.props.onLabelMenuItemSelect(t)}},{key:"getScrollHeight",value:function e(){var t=this.props.location;var a=(0,T.getAppLayout)(t);switch(a){case"app":return"calc(100vh - 197px)";case"agency":return"calc(100vh - 382px)";case"boxed":return"calc(100vh - 382px)";case"horizontal":return"calc(100vh - 248px)";default:break}}},{key:"render",value:function e(){var t=this;var a=this.props,l=a.toDos,n=a.selectedToDos,o=a.labels;var i=this.state.anchorEl;return r.default.createElement("div",{className:"list-wrap"},r.default.createElement("div",{className:"top-head"},r.default.createElement(c.default,{color:"primary",indeterminate:n>0&&n<l.length,checked:n>0,onChange:function e(){return t.onAllTodoSelect()},value:"SelectMail"}),r.default.createElement(s.default,{onClick:this.handleClick,"aria-owns":i?"simple-menu":null,"aria-haspopup":"true"},r.default.createElement("i",{className:"zmdi zmdi-caret-down"})),n>0&&r.default.createElement(s.default,{onClick:this.onLabelSelect.bind(this)},r.default.createElement("i",{className:"zmdi zmdi-label-alt"})),r.default.createElement(p.default,{id:"long-menu",anchorEl:i,open:this.state.optionsMenu,onClose:this.handleClose,PaperProps:{style:{width:200}}},S.default.map(function(e,a){return r.default.createElement(v.default,{key:a,onClick:function a(){return t.onOptionMenuItemSelect(e)}},e.title)})),r.default.createElement(p.default,{id:"label-menu",anchorEl:this.state.anchorEl,open:this.state.labelMenu,onClose:this.handleClose,MenuListProps:{style:{width:150}}},o.map(function(e){return r.default.createElement(v.default,{key:e.value,onClick:function a(){return t.onLabelMenuItemSelect(e)}},r.default.createElement(w.default,{id:e.name}))}))),r.default.createElement(b.Scrollbars,{className:"rct-scroll",autoHide:true,style:{height:this.getScrollHeight()}},r.default.createElement(O,{toDos:l,onSelectTodo:this.onSelectTodo,onCheckBoxClickTodoItem:this.onCheckBoxClickTodoItem,getTaskLabelNames:this.getTaskLabelNames})))}}]);return t}(n.Component);var L=function e(t){var a=t.todoApp,l=t.settings;var n=a.toDos,r=a.labels,o=a.users,s=a.selectedToDos;return{toDos:n,labels:r,users:o,selectedToDos:s,settings:l}};t.default=(0,g.withRouter)((0,f.connect)(L,{onSelectTodoAction:N.onSelectTodoAction,hideLoadingIndicatorAction:N.hideLoadingIndicatorAction,fetchTodos:N.fetchTodos,onCheckBoxToggleTodoItem:N.onCheckBoxToggleTodoItem,getUnselectedAllTodo:N.getUnselectedAllTodo,selectAllTodo:N.selectAllTodo,selectStarredTodo:N.selectStarredTodo,selectUnStarredTodo:N.selectUnStarredTodo,onLabelSelect:N.onLabelSelect,onLabelMenuItemSelect:N.onLabelMenuItemSelect})(j))},2237:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=a(1);var n=d(l);var r=a(206);var o=d(r);var s=a(276);var i=d(s);var c=a(3);var u=d(c);function d(e){return e&&e.__esModule?e:{default:e}}var f=function e(t){var a=t.todo,l=t.onSelectTodo,r=t.onCheckBoxClickTodoItem,s=t.getTaskLabelNames,c=t.getTaskAssigners,d=t.sortIndex;return n.default.createElement("li",{className:(0,u.default)("d-flex justify-content-between align-items-center list-item",{strike:a.completed}),key:a.id,onClick:function e(){return l(a)}},n.default.createElement("div",{className:"media"},n.default.createElement(o.default,{control:n.default.createElement(i.default,{checked:a.task_status,onClick:function e(t){t.stopPropagation();r(a)}})}),n.default.createElement("div",{className:"media-body"},n.default.createElement("h5",{className:"mb-2"},a.task_name),s(a.labels))),n.default.createElement("div",{className:"todo-user"},n.default.createElement("img",{className:"img-fluid rounded-circle",alt:"user-img",src:a.assignTo.photo_url,width:"35",height:"35"})))};t.default=f},2238:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=[{title:"All"},{title:"None"},{title:"Starred"},{title:"Unstarred"}]},2239:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||false;l.configurable=true;if("value"in l)l.writable=true;Object.defineProperty(e,l.key,l)}}return function(t,a,l){if(a)e(t.prototype,a);if(l)e(t,l);return t}}();var n=a(1);var r=b(n);var o=a(147);var s=b(o);var i=a(199);var c=b(i);var u=a(43);var d=a(94);var f=a(15);var m=a(148);var p=a(47);var h=b(p);var v=a(57);function b(e){return e&&e.__esModule?e:{default:e}}function g(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function k(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function E(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var T=function(e){E(t,e);function t(){g(this,t);return k(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}l(t,[{key:"onFilterTodo",value:function e(t){this.props.activateFilterAction(t)}},{key:"getLabelClasses",value:function e(t){var a="";switch(t){case 1:a="ladgend bg-success";return a;case 2:a="ladgend bg-primary";return a;case 3:a="ladgend bg-info";return a;case 4:a="ladgend bg-danger";return a;default:return a}}},{key:"getScrollHeight",value:function e(){var t=this.props.location;var a=(0,m.getAppLayout)(t);switch(a){case"app":return"calc(100vh - 288px)";case"agency":return"calc(100vh - 416px)";case"boxed":return"calc(100vh - 416px)";case"horizontal":return"calc(100vh - 335px)";default:break}}},{key:"render",value:function e(){var t=this;var a=this.props.labels;return r.default.createElement(d.Scrollbars,{className:"rct-scroll",autoHide:true,style:{height:this.getScrollHeight()}},r.default.createElement("div",{className:"sidebar-filters-wrap"},r.default.createElement(s.default,{className:"filters"},r.default.createElement(c.default,{button:true,onClick:function e(){return t.props.getAllTodoAction()}},r.default.createElement("span",{className:"filter-title"},r.default.createElement(h.default,{id:"components.all"})))),r.default.createElement("h6",{className:"sidebar-title px-20 pt-20"},"Filters"),r.default.createElement(s.default,{className:"filters list-unstyled"},r.default.createElement(c.default,{button:true,onClick:function e(){return t.props.getCompletedTodosAction()}},r.default.createElement("i",{className:"zmdi zmdi-check-square mr-3"}),r.default.createElement("span",{className:"filter-title"},r.default.createElement(h.default,{id:"widgets.done"}))),r.default.createElement(c.default,{button:true,onClick:function e(){return t.props.getDeletedTodosAction()}},r.default.createElement("i",{className:"zmdi zmdi-delete mr-3"}),r.default.createElement("span",{className:"filter-title"},r.default.createElement(h.default,{id:"widgets.deleted"}))),r.default.createElement(c.default,{button:true,onClick:function e(){return t.props.getStarredTodosAction()}},r.default.createElement("i",{className:"zmdi zmdi-star mr-3"}),r.default.createElement("span",{className:"filter-title"},r.default.createElement(h.default,{id:"widgets.starred"})))),r.default.createElement("h6",{className:"sidebar-title px-20 pt-20"},"Labels"),r.default.createElement(s.default,{className:"list-unstyled filters"},a.map(function(e,a){return r.default.createElement(c.default,{button:true,onClick:function a(){return t.onFilterTodo(e.value)},key:a},r.default.createElement("span",{className:t.getLabelClasses(e.value)}),r.default.createElement("span",{className:"filter-title"},r.default.createElement(h.default,{id:e.name})))}))))}}]);return t}(n.Component);var y=function e(t){var a=t.todoApp,l=t.settings;var n=a.labels;return{labels:n,settings:l}};t.default=(0,f.withRouter)((0,u.connect)(y,{getAllTodoAction:v.getAllTodoAction,getCompletedTodosAction:v.getCompletedTodosAction,getDeletedTodosAction:v.getDeletedTodosAction,getStarredTodosAction:v.getStarredTodosAction,activateFilterAction:v.activateFilterAction})(T))},2240:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||false;l.configurable=true;if("value"in l)l.writable=true;Object.defineProperty(e,l.key,l)}}return function(t,a,l){if(a)e(t.prototype,a);if(l)e(t,l);return t}}();var n=a(1);var r=x(n);var o=a(43);var s=a(146);var i=x(s);var c=a(3);var u=x(c);var d=a(94);var f=a(204);var m=x(f);var p=a(1820);var h=x(p);var v=a(365);var b=x(v);var g=a(683);var k=x(g);var E=a(52);var T=a(105);var y=x(T);var w=a(686);var N=x(w);var C=a(47);var S=x(C);var A=a(57);function x(e){return e&&e.__esModule?e:{default:e}}function _(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function M(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function O(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var j=function(e){O(t,e);function t(){var e;var a,l,n;_(this,t);for(var o=arguments.length,s=Array(o),i=0;i<o;i++){s[i]=arguments[i]}return n=(a=(l=M(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),l),l.state={anchorEl:null,taskTitleEdit:false,newTaskTitle:l.props.selectedTodo.task_name,taskContentEdit:false,newTaskDescription:l.props.selectedTodo.task_description,userMenu:false,assignTo:"",labelMenu:false},l.getTaskLabelNames=function(e){var t=[];var a=l.props.labels;var n=true;var o=false;var s=undefined;try{for(var i=e[Symbol.iterator](),c;!(n=(c=i.next()).done);n=true){var d=c.value;var f=true;var m=false;var p=undefined;try{for(var h=a[Symbol.iterator](),v;!(f=(v=h.next()).done);f=true){var b=v.value;if(b.value===d){var g=r.default.createElement("span",{key:b.value,className:(0,u.default)("badge mr-10 mb-5",{"badge-success":b.value===1,"badge-primary":b.value===2,"badge-info":b.value===3,"badge-danger":b.value===4})},r.default.createElement(S.default,{id:b.name}));t.push(g)}}}catch(e){m=true;p=e}finally{try{if(!f&&h.return){h.return()}}finally{if(m){throw p}}}}}catch(e){o=true;s=e}finally{try{if(!n&&i.return){i.return()}}finally{if(o){throw s}}}return t},l.handleClick=function(e){l.setState({labelMenu:true,anchorEl:e.currentTarget})},l.handleClose=function(){l.setState({anchorEl:null,labelMenu:false})},l.handleUserClick=function(e){l.setState({userMenu:true,anchorEl:e.currentTarget})},l.handleRequestClose=function(){l.setState({userMenu:false})},a),M(l,n)}l(t,[{key:"backToTodos",value:function e(){var t=this;this.props.showLoadingIndicatorAction();setTimeout(function(){t.props.backToTodosAction()},1500)}},{key:"markAsStarTodo",value:function e(){var t=this.props.selectedTodo;this.props.markAsStarTodoAction(t)}},{key:"deleteTodo",value:function e(){this.props.deleteTodoAction();this.props.fetchTodos()}},{key:"editTaskTitle",value:function e(){this.setState({taskTitleEdit:true})}},{key:"addLabelsIntoTheTask",value:function e(t){this.setState({anchorEl:null});this.props.addLabelsIntoTheTaskAction(t)}},{key:"completeTask",value:function e(){this.props.completeTask()}},{key:"submitNewTaskTitle",value:function e(){this.setState({taskTitleEdit:false});this.props.updateTaskTitle(this.state.newTaskTitle)}},{key:"editTaskDescription",value:function e(){this.setState({taskContentEdit:true})}},{key:"submitNewTaskDescription",value:function e(){this.setState({taskContentEdit:false});this.props.updateTaskDescription(this.state.newTaskDescription)}},{key:"changeTaskAssigner",value:function e(t){this.setState({userMenu:false});this.props.changeTaskAssigner(t)}},{key:"render",value:function e(){var t=this;var l=this.props,n=l.loading,o=l.selectedTodo,s=l.labels,c=l.users;var f=this.state.anchorEl;return r.default.createElement("div",{className:"list-wrap"},n?r.default.createElement(N.default,null):r.default.createElement("div",{className:"task-detail-wrapper"},r.default.createElement("div",{className:"top-head"},r.default.createElement(i.default,{"aria-label":"back arrow",onClick:function e(){return t.backToTodos()}},r.default.createElement("i",{className:"zmdi zmdi-arrow-back"}))),r.default.createElement(d.Scrollbars,{className:"rct-scroll",autoHide:true,style:{height:"calc(100vh - 197px)"}},r.default.createElement("div",{className:"task-detail"},r.default.createElement("div",{className:"d-flex justify-content-between task-detail-top py-3 px-4 border-bottom"},r.default.createElement("div",{className:"media align-items-center",onClick:this.handleUserClick},r.default.createElement("img",{src:o.assignTo.photo_url,alt:"select user",className:"img-fluid rounded-circle mr-15",width:"50",height:"50"}),r.default.createElement("div",{className:"media-body"},r.default.createElement("h5",{className:"mb-0"},o.assignTo.name))),r.default.createElement(h.default,{id:"label-menu",anchorEl:this.state.anchorEl,open:this.state.userMenu,onClose:this.handleRequestClose,MenuListProps:{style:{width:180}}},c.map(function(e,a){return r.default.createElement(b.default,{key:a,value:e.id,onClick:function a(){t.changeTaskAssigner(e)}},r.default.createElement("div",{className:"d-flex user-name manage-margin align-items-center"},r.default.createElement(k.default,{src:e.photo_url,alt:e.name}),r.default.createElement("h4",null,e.name)))})),r.default.createElement("div",{className:"task-action d-flex align-items-center"},r.default.createElement("ul",{className:"list-unstyled mb-0 d-flex"},r.default.createElement("li",null,r.default.createElement(i.default,{"aria-owns":f?"simple-menu":null,"aria-haspopup":"true",onClick:this.handleClick},r.default.createElement("i",{className:"zmdi zmdi-label-alt"})),r.default.createElement(h.default,{id:"simple-menu",anchorEl:f,open:this.state.labelMenu,onClose:this.handleClose,MenuListProps:{style:{width:150}}},s.map(function(e){return r.default.createElement(b.default,{onClick:function a(){return t.addLabelsIntoTheTask(e)},key:e.value},r.default.createElement(S.default,{id:e.name}))}))),r.default.createElement("li",null,r.default.createElement(i.default,{onClick:function e(){return t.markAsStarTodo()}},r.default.createElement("i",{className:(0,u.default)("zmdi",{" zmdi-star-outline":!o.starred,"zmdi-star":o.starred})}))),r.default.createElement("li",null,r.default.createElement(i.default,{onClick:function e(){return t.deleteTodo()}},r.default.createElement("i",{className:"zmdi zmdi-delete"})))))),r.default.createElement("div",{className:"task-detail-content px-50 py-3 border-bottom"},r.default.createElement("div",{className:"task-labels mb-3"},this.getTaskLabelNames(o.labels)),r.default.createElement("div",{className:"task-content"},r.default.createElement("div",{className:"mb-25 task-box bg-aqua"},r.default.createElement(i.default,{"aria-label":"check",onClick:function e(){return t.completeTask()}},r.default.createElement("i",{className:(0,u.default)("zmdi zmdi-check-all",{"text-info":o.completed})})),this.state.taskTitleEdit?r.default.createElement("span",null,r.default.createElement(m.default,{id:"title",fullWidth:true,type:"text",value:this.state.newTaskTitle,onChange:function e(a){return t.setState({newTaskTitle:a.target.value})}}),r.default.createElement(i.default,{"aria-label":"check",className:"task-btn",onClick:function e(){return t.submitNewTaskTitle()}},r.default.createElement("i",{className:"zmdi zmdi-check"}))):r.default.createElement("span",null,r.default.createElement("span",null,o.task_name),r.default.createElement(i.default,{"aria-label":"check",className:"task-btn",onClick:function e(){return t.editTaskTitle()}},r.default.createElement("i",{className:"zmdi zmdi-edit"})))),r.default.createElement("div",{className:"task-box bg-aqua mb-3"},this.state.taskContentEdit?r.default.createElement("div",null,r.default.createElement(m.default,{id:"task-description",fullWidth:true,type:"text",value:this.state.newTaskDescription,onChange:function e(a){return t.setState({newTaskDescription:a.target.value})}}),r.default.createElement(i.default,{"aria-label":"check",className:"task-btn",onClick:function e(){return t.submitNewTaskDescription()}},r.default.createElement("i",{className:"zmdi zmdi-check"}))):r.default.createElement("div",null,r.default.createElement("span",{className:"small-text"},o.task_description),r.default.createElement(i.default,{"aria-label":"check",className:"task-btn",onClick:function e(){return t.editTaskDescription()}},r.default.createElement("i",{className:"zmdi zmdi-edit"})))))),r.default.createElement("div",{className:"task-comment px-30 py-3"},r.default.createElement("h3",{className:"mb-20"},"Comments"),r.default.createElement("ul",{className:"list-unstyled"},r.default.createElement("li",{className:"media"},r.default.createElement("img",{src:a(1831),className:"img-fluid rounded-circle mr-15",alt:"user profile",width:"50",height:"50"}),r.default.createElement("div",{className:"media-body pt-5"},r.default.createElement("h6",{className:"mb-0"},"Jhon Smith ",r.default.createElement("span",{className:"fs-14"},"Jan 9, 2017, 3:03:28 PM")),r.default.createElement("span",{className:"text-muted font-xs"},"Asperger S Syndrome Is There Real Cure For It"))),r.default.createElement("li",{className:"media"},r.default.createElement("img",{src:a(1832),className:"img-fluid rounded-circle mr-15",alt:"user profile",width:"50",height:"50"}),r.default.createElement("div",{className:"media-body pt-5"},r.default.createElement("h6",{className:"mb-0"},"Rukshana Smith ",r.default.createElement("span",{className:"fs-14"},"Jan 9, 2017, 3:03:28 PM")),r.default.createElement("span",{className:"text-muted font-xs"},"Asperger S Syndrome Is There Real Cure For It")))))),r.default.createElement("div",{className:"task-foot d-flex align-items-center p-20"},r.default.createElement(E.Input,{type:"textarea",name:"text",placeholder:"Send Message",id:"exampleText",className:"mr-3"}),r.default.createElement(y.default,{variant:"contained",color:"primary",className:"bg-primary"},"Send",r.default.createElement("i",{className:"zmdi zmdi-mail-send ml-2"}))))))}}]);return t}(n.Component);var L=function e(t){var a=t.todoApp,l=t.settings;var n=a.loading,r=a.selectedTodo,o=a.labels,s=a.users;return{loading:n,selectedTodo:r,labels:o,users:s,settings:l}};t.default=(0,o.connect)(L,{backToTodosAction:A.backToTodosAction,showLoadingIndicatorAction:A.showLoadingIndicatorAction,markAsStarTodoAction:A.markAsStarTodoAction,deleteTodoAction:A.deleteTodoAction,addLabelsIntoTheTaskAction:A.addLabelsIntoTheTaskAction,completeTask:A.completeTask,updateTaskTitle:A.updateTaskTitle,updateTaskDescription:A.updateTaskDescription,changeTaskAssigner:A.changeTaskAssigner,fetchTodos:A.fetchTodos})(j)}}]);