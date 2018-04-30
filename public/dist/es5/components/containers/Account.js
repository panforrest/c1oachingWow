"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

// { (currentUser == null) ? <Register onRegister={this.register.bind(this)} onLogin={this.login.bind(this)} /> :
var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Register = require("../presentation").Register;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var Account = (function (Component) {
    function Account() {
        _classCallCheck(this, Account);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(Account, Component);

    _prototypeProperties(Account, null, {
        register: {

            // componentDidMount(){
            //     this.props.checkCurrentUser()
            // }

            value: function register(registration) {
                this.props.signup(registration);
            },
            writable: true,
            configurable: true
        },
        login: {
            value: function login(credentials) {
                this.props.login(credentials);
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                var currentUser = this.props.account.currentUser;

                return React.createElement(
                    "div",
                    null,
                    currentUser == null ? React.createElement(Register, { onRegister: this.register.bind(this), onLogin: this.login.bind(this) }) : React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "h2",
                            null,
                            "Welcome!"
                        ),
                        React.createElement(
                            "h2",
                            null,
                            currentUser.username
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Account;
})(Component);

var stateToProps = function (state) {
    return {
        account: state.account
    };
};

var dispatchToProps = function (dispatch) {
    return {
        signup: function (params) {
            return dispatch(actions.signup(params));
        },
        login: function (params) {
            return dispatch(actions.login(params));
        } };
};


module.exports = connect(stateToProps, dispatchToProps)(Account);
// checkCurrentUser: () => dispatch(actions.checkCurrentUser())