webpackHotUpdate(0,{39:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react);__webpack_require__(40);var _Title=__webpack_require__(45),_Title2=_interopRequireDefault(_Title),_ListItems=__webpack_require__(49),_ListItems2=_interopRequireDefault(_ListItems),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule=__webpack_require__(0).enterModule,enterModule&&enterModule(module);var App=function(_React$Component){function App(e){_classCallCheck(this,App);var t=_possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).call(this,e));return t.state={titleColor:"red"},t.onButtonClick=t.onButtonClick.bind(t),t}return _inherits(App,_React$Component),_createClass(App,[{key:"onButtonClick",value:function(){"red"===this.state.titleColor?this.setState({titleColor:"yellow"}):this.setState({titleColor:"red"})}},{key:"componentWillMount",value:function(){axios.get("").then}},{key:"render",value:function(){return _react2.default.createElement("div",null,_react2.default.createElement(_Title2.default,{color:this.state.titleColor}),["aaa","bbb","ccc"].map(function(e,t){return _react2.default.createElement(_ListItems2.default,{class:t},e)}),_react2.default.createElement("div",{className:"img"}),_react2.default.createElement("div",{className:"button",onClick:this.onButtonClick}," Press "))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),App}(_react2.default.Component),_default=App,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__(0).default,leaveModule=__webpack_require__(0).leaveModule,reactHotLoader&&(reactHotLoader.register(App,"App","/home/tjomik/uni/RIP/lab6/src/components/App/App.js"),reactHotLoader.register(_default,"default","/home/tjomik/uni/RIP/lab6/src/components/App/App.js"),leaveModule(module))}).call(this,__webpack_require__(3)(module))}});