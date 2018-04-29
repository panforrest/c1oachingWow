"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

// <a class="nav-tab" href="#">Dashboard</a>
// <a class="nav-tab" href="#">Reservations</a>
// <a class="nav-tab" href="#"> Profiles </a>
var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var connect = require("react-redux").connect;
var Nav = (function (Component) {
	function Nav() {
		_classCallCheck(this, Nav);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(Nav, Component);

	_prototypeProperties(Nav, null, {
		render: {
			value: function render() {
				// const currentUser = (this.props.user.currentUser==null) ? null: <p>Welcome, {this.props.user.currentUser}</p>
				var currentUser = this.props.user.currentUser;

				return React.createElement(
					"nav",
					null,
					React.createElement(
						"span",
						{ "class": "navbar-brand mb-0 h1" },
						"CoachingWow"
					),
					React.createElement(
						"a",
						{ "class": "nav-tab", href: "#" },
						"Dashboard"
					),
					React.createElement(
						"a",
						{ "class": "nav-tab", href: "#" },
						"Reservations"
					),
					React.createElement(
						"a",
						{ "class": "nav-tab", href: "#" },
						" Profiles "
					),
					React.createElement(
						"a",
						{ "class": "nav-tab", href: "#" },
						" ",
						currentUser == null ? null : React.createElement(
							"p",
							null,
							"Welcome, ",
							currentUser.username
						),
						" "
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Nav;
})(Component);

var stateToProps = function (state) {
	return {
		user: state.account
	};
};

module.exports = connect(stateToProps)(Nav);