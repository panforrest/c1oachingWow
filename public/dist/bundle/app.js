!function(e){function t(t){for(var r,o,l=t[0],i=t[1],c=t[2],f=0,d=[];f<l.length;f++)o=l[f],a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(s&&s(t);d.length;)d.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={1:0};var u=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=i;u.push([394,0]),n()}({149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Map=t.Item=void 0;var r=u(n(373)),a=u(n(177));function u(e){return e&&e.__esModule?e:{default:e}}t.Item=a.default,t.Map=r.default},155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),o=(r=u)&&r.__esModule?r:{default:r},l=n(39);var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),a(t,[{key:"render",value:function(){var e=this.props.user.currentUser;return o.default.createElement("nav",null,o.default.createElement("span",{class:"navbar-brand mb-0 h1"},"CoachingWow"),o.default.createElement("a",{class:"nav-tab",href:"#"}," ",null==e?null:o.default.createElement("p",null,"Welcome, ",e.username)," "))}}]),t}();t.default=(0,l.connect)(function(e){return{user:e.account}})(i)},156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=f(a),o=n(149),l=n(39),i=f(n(94)),c=f(n(154)),s=f(n(93));function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={item:{}},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentDidMount",value:function(){this.props.fetchItems()}},{key:"updateItem",value:function(e,t){t.preventDefault();var n=Object.assign({},this.state.item);n[e]=t.target.value,this.setState({item:n})}},{key:"addItem",value:function(){if(null!=this.props.account.currentUser){var e=this.props.account.currentUser,t=Object.assign({},this.state.item);t.seller={id:e.id,username:e.username,image:e.image||""},this.props.addItem(t).then(function(e){}).catch(function(e){})}else alert("Please log in or register to sell items")}},{key:"uploadImage",value:function(e){var t=this,n=e[0];(0,s.default)({site_id:"5ae5315e0d44f900146683d0"}).uploadFile(n).then(function(e){var n=Object.assign({},t.state.item);n.image=e.result.url,t.setState({item:n})}).catch(function(e){})}},{key:"render",value:function(){var e=this.props.item.all||[];return u.default.createElement("div",{className:"container-fluid"},u.default.createElement("div",{className:"row"},e.map(function(e,t){return u.default.createElement(o.Item,{key:e.id,item:e})})),u.default.createElement("hr",null),u.default.createElement("input",{onChange:this.updateItem.bind(this,"name"),className:"formControl",type:"text",placeholder:"Name"}),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("input",{onChange:this.updateItem.bind(this,"price"),className:"formControl",type:"text",placeholder:"Price"}),u.default.createElement("br",null),u.default.createElement("br",null),null==this.state.item.image?null:u.default.createElement("img",{src:this.state.item.image+"=s120-c"}),u.default.createElement("hr",null),u.default.createElement("div",null,u.default.createElement(c.default,{onDrop:this.uploadImage.bind(this),className:"btn btn-info btn-fill",style:{marginRight:16}},"Add Image"),u.default.createElement("button",{onClick:this.addItem.bind(this),className:"btn btn-success"},"Add Item")))}}]),t}();t.default=(0,l.connect)(function(e){return{item:e.item,map:e.map,account:e.account}},function(e){return{addItem:function(t){return e(i.default.addItem(t))},fetchItems:function(t){return e(i.default.fetchItems(t))}}})(d)},157:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(12)),a=u(n(10));function u(e){return e&&e.__esModule?e:{default:e}}t.default={post:function(e,t,n){return function(u){return function(e,t){return new a.default(function(n,a){r.default.post(e).send(t).set("Accept","application/json").end(function(e,t){if(e)a(e);else{var r=t.body||t.text;n(r)}})})}(e,t).then(function(e){return null!=n&&u({type:n,data:e}),e}).catch(function(e){throw e})}},get:function(e,t,n){return function(u){return function(e,t){return new a.default(function(n,a){r.default.get(e).query(t).set("Accept","application/json").end(function(e,t){if(e)a(e);else{var r=t.body||t.text;n(r)}})})}(e,t).then(function(e){return null!=n&&u({type:n,data:e}),e}).catch(function(e){throw e})}}}},158:function(e){e.exports={name:"c1oachingWow",version:"0.0.0",server:!1,private:!0,scripts:{dev:"webpack --mode development -w",build:"npm run clean && NODE_ENV=production webpack -p && gulp prod",clean:"rm -rf ./public/dist",postinstall:"npm run build"},dependencies:{accepts:"^1.3.5","array-flatten":"1.1.1",bluebird:"^3.5.1","body-parser":"1.18.2","content-disposition":"0.5.2","content-type":"^1.0.4",cookie:"0.3.1","cookie-signature":"1.0.6",debug:"2.6.9",depd:"^1.1.2",dotenv:"^5.0.1",encodeurl:"^1.0.2","escape-html":"^1.0.3",etag:"^1.8.1",finalhandler:"1.1.1",fresh:"0.5.2","merge-descriptors":"1.0.1",methods:"^1.1.2",moment:"^2.20.1",nodemon:"^1.17.1","on-finished":"^2.3.0",parseurl:"^1.3.2","path-to-regexp":"0.1.7","proxy-addr":"^2.0.3",qs:"6.5.1","range-parser":"^1.2.0",react:"^16.2.0","react-bootstrap":"^0.32.1","react-dom":"^16.2.0","react-dropzone":"^4.2.8","react-google-maps":"^9.4.5","react-redux":"^5.0.7","react-time":"^4.3.0",redux:"^3.7.2","redux-thunk":"^2.2.0","safe-buffer":"5.1.1",send:"0.16.2","serve-static":"1.13.2",setprototypeof:"1.1.0",statuses:"^1.4.0",superagent:"^3.8.2",turbo360:"latest","type-is":"^1.6.16","utils-merge":"1.0.1",vary:"^1.1.2",vertex360:"latest"},devDependencies:{"babel-core":"^6.26.0","babel-loader":"^7.1.3","babel-preset-env":"^1.6.1","babel-preset-react":"^6.24.1",chai:"^4.1.2","chai-http":"^3.0.0","cross-env":"^5.1.4",gulp:"^3.9.1","gulp-6to5":"^3.0.0","gulp-autoprefixer":"^5.0.0","gulp-clean-css":"^3.9.2","gulp-concat":"^2.6.1","gulp-less":"^4.0.0","gulp-rename":"^1.2.2","gulp-sass":"^3.1.0","gulp-uglify":"^3.0.0","json-loader":"^0.5.7",mocha:"^5.0.1","mocha-jscs":"^5.0.1","mocha-jshint":"^2.3.1",rimraf:"^2.6.2","uglifyjs-webpack-plugin":"^1.2.2",webpack:"^4.1.1","webpack-cli":"^2.0.10"},deploy:["."],format:"vertex",app:""}},175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(93));function a(e){return e&&e.__esModule?e:{default:e}}var u=a(n(158)).default.app||"";t.default={getRequest:function(e,t,n){return function(a){return(0,r.default)({site_id:u}).fetch(e,t).then(function(e){return null!=n&&a({type:n,params:t,data:e}),e}).catch(function(e){throw e})}},postRequest:function(e,t,n){return function(a){return(0,r.default)({site_id:u}).create(e,t).then(function(e){return null!=n&&a({type:n,data:e}),e}).catch(function(e){throw e})}},putRequest:function(e,t,n,a){return function(o){return(0,r.default)({site_id:u}).update(e,t,n).then(function(e){return null!=a&&o({type:a,data:e}),e}).catch(function(e){throw e})}},deleteRequest:function(e,t,n){return function(a){return(0,r.default)({site_id:u}).remove(e,t).then(function(e){return null!=n&&a({type:n,data:e}),e}).catch(function(e){throw e})}},createUser:function(e,t){return function(n){return(0,r.default)({site_id:u}).createUser(e).then(function(e){return null!=t&&n({type:t,data:e}),e}).catch(function(e){throw e})}},login:function(e,t){return function(n){return(0,r.default)({site_id:u}).login(e).then(function(e){return null!=t&&n({type:t,data:e}),e}).catch(function(e){throw e})}},currentUser:function(e){return function(t){return(0,r.default)({site_id:u}).currentUser().then(function(n){return null!=e&&t({type:e,data:n}),n}).catch(function(e){throw e})}},uploadFile:function(e){return(0,r.default)({site_id:u}).uploadFile(e)}}},176:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HTTPAsync=t.TurboClient=void 0;var r=u(n(175)),a=u(n(157));function u(e){return e&&e.__esModule?e:{default:e}}t.TurboClient=r.default,t.HTTPAsync=a.default},177:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(0),u=(r=a)&&r.__esModule?r:{default:r};t.default=function(e){var t=e.item;return u.default.createElement("div",{className:"row"},u.default.createElement("div",{id:"reservations"},u.default.createElement("div",{class:"reservation"},u.default.createElement("div",{style:o.itemImage},u.default.createElement("img",{style:o.itemImage,src:t.image})),u.default.createElement("h2",null,t.name),u.default.createElement("span",{class:"reservation-date"},"$",t.price," "),u.default.createElement("img",{style:o.icon,src:t.seller.image}))))};var o={icon:{width:28,borderRadius:14,float:"right"},itemImage:{width:"100%",padding:3,background:"#ffffa"}}},373:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),l=(r=o)&&r.__esModule?r:{default:r},i=n(372);var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={map:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),u(t,[{key:"mapMoved",value:function(){null!=this.props.locationChanged&&this.props.locationChanged(this.state.map.getCenter())}},{key:"zoomChanged",value:function(){}},{key:"mapLoaded",value:function(e){null==this.state.map&&(this.props.onMapReady(e),this.setState({map:e}))}},{key:"handleMarkerClick",value:function(e){null!=this.props.markerClicked&&this.props.markerClicked(e,this.state.map)}},{key:"render",value:function(){var e=this,t=this.props.markers||[];return l.default.createElement(i.GoogleMap,{ref:this.mapLoaded.bind(this),onDragEnd:this.mapMoved.bind(this),onZoomChanged:this.zoomChanged.bind(this),defaultZoom:this.props.zoom,defaultCenter:this.props.center},t.map(function(t,n){return l.default.createElement(i.Marker,a({key:n,clickable:!0,icon:t.icon,label:t.label,title:t.key,onClick:e.handleMarkerClick.bind(e,t)},t))}))}}]),t}();t.default=(0,i.withGoogleMap)(c)},374:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=c(a),o=n(149),l=n(39),i=c(n(94));function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={map:null,center:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentDidMount",value:function(){this.props.currentUser()}},{key:"centerChanged",value:function(e){this.props.locationChanged(e)}},{key:"render",value:function(){var e=this,t=[];return(this.props.item.all||[]).forEach(function(e,n){var r={key:e.id,label:e.name,position:e.position,defaultAnimation:2};t.push(r)}),u.default.createElement("div",null,u.default.createElement(o.Map,{onMapReady:function(t){null==e.state.map&&e.setState({map:t})},locationChanged:this.centerChanged.bind(this),markers:t,zoom:12,center:{lat:40.7224017,lng:-73.9896719},containerElement:u.default.createElement("div",{style:{height:"100%"}}),mapElement:u.default.createElement("div",{style:{height:"100vh"}})}))}}]),t}();t.default=(0,l.connect)(function(e){return{item:e.item,map:e.map}},function(e){return{locationChanged:function(t){return e(i.default.locationChanged(t))},currentUser:function(){return e(i.default.currentUser())}}})(s)},375:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Nav=t.Search=t.Results=void 0;var r=o(n(374)),a=o(n(156)),u=o(n(155));function o(e){return e&&e.__esModule?e:{default:e}}t.Results=a.default,t.Search=r.default,t.Nav=u.default},376:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),o=(r=u)&&r.__esModule?r:{default:r},l=n(375);var i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={map:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),a(t,[{key:"render",value:function(){return o.default.createElement("div",{className:"container"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-md-4"},o.default.createElement(l.Search,null)),o.default.createElement("div",{className:"col-md-5"},o.default.createElement(l.Nav,null),o.default.createElement(l.Results,null)),o.default.createElement("div",{className:"col-md-3"},"ACCOUNT")))}}]),t}();t.default=i},379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(38),u=(r=a)&&r.__esModule?r:{default:r};var o={currentUser:null};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1],n=Object.assign({},e);switch(t.type){case u.default.CURRENT_USER_RECEIVED:return n.currentUser=t.data.user,n;default:return e}}},38:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={ITEM_ADDED:"ITEM_ADDED",LOCATION_CHANGED:"LOCATION_CHANGED",CURRENT_USER_RECEIVED:"CURRENT_USER_RECEIVED",ITEMS_RECEIVED:"ITEMS_RECEIVED"}},380:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(38),u=(r=a)&&r.__esModule?r:{default:r};var o={currentLocation:{lat:40.72,lng:-73.98}};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1],n=Object.assign({},e);switch(t.type){case u.default.ITEM_ADDED:return n.currentLocation=t.data,n;default:return n}}},381:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(38),u=(r=a)&&r.__esModule?r:{default:r};var o={all:null};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1],n=Object.assign({},e);switch(t.type){case u.default.ITEM_ADDED:var r=t.data,a=n.all?Object.assign([],n.all):[];return a.push(r.data),n.all=a,n;case u.default.ITEMS_RECEIVED:return n.all=t.data.data,n;default:return n}}},382:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(38),u=(r=a)&&r.__esModule?r:{default:r};var o={all:null,currentUser:null};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1],n=Object.assign({},e);switch(t.type){case u.default.CURRENT_USER_RECEIVED:return n.currentUser=t.data,n;case u.default.USERS_RECEIVED:return n.all=t.data,n;case u.default.USER_CREATED:var r=n.all?Object.assign([],n.all):[];return r.unshift(t.data),n.all=r,n;default:return e}}},383:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.accountReducer=t.mapReducer=t.itemReducer=t.userReducer=void 0;var r=l(n(382)),a=l(n(381)),u=l(n(380)),o=l(n(379));function l(e){return e&&e.__esModule?e:{default:e}}t.userReducer=r.default,t.itemReducer=a.default,t.mapReducer=u.default,t.accountReducer=o.default},386:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a,u=n(87),o=n(384),l=(r=o)&&r.__esModule?r:{default:r},i=n(383);t.default={configure:function(e){var t=(0,u.combineReducers)({user:i.userReducer,item:i.itemReducer,map:i.mapReducer,account:i.accountReducer});return a=e?(0,u.createStore)(t,e,(0,u.applyMiddleware)(l.default)):(0,u.createStore)(t,(0,u.applyMiddleware)(l.default))},currentStore:function(){return a}}},394:function(e,t,n){"use strict";var r=i(n(0)),a=i(n(84)),u=i(n(386)),o=n(39),l=i(n(376));function i(e){return e&&e.__esModule?e:{default:e}}var c=r.default.createElement(o.Provider,{store:u.default.configure(null)},r.default.createElement(l.default,null));a.default.render(c,document.getElementById("root"))},94:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(38),u=(r=a)&&r.__esModule?r:{default:r},o=n(176);t.default={addItem:function(e){return function(t){return t(o.HTTPAsync.post("/api/item",e,u.default.ITEM_ADDED))}},fetchItems:function(e){return function(t){return t(o.HTTPAsync.get("/api/item",e,u.default.ITEMS_RECEIVED))}},locationChanged:function(e){return{type:u.default.LOCATION_CHANGED,data:e}},currentUser:function(){return function(e){return e(o.HTTPAsync.get("/auth/currentuser",null,u.default.CURRENT_USER_RECEIVED))}}}}});