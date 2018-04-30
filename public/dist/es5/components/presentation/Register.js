"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Register = (function (Component) {
    function Register() {
        _classCallCheck(this, Register);

        _get(Object.getPrototypeOf(Register.prototype), "constructor", this).call(this);
        this.state = {
            registration: {
                username: "",
                password: ""
            }
        };
    }

    _inherits(Register, Component);

    _prototypeProperties(Register, null, {
        updateRegistration: {
            value: function updateRegistration(event) {
                var updated = Object.assign({}, this.state.registration);
                updated[event.target.id] = event.target.value;
                this.setState({
                    registration: updated
                });
            },
            writable: true,
            configurable: true
        },
        submitRegistration: {
            value: function submitRegistration(event) {
                event.preventDefault();

                if (this.state.registration.username.length == 0) {
                    alert("Please add your username.");
                    return;
                }

                if (this.state.registration.password.length == 0) {
                    alert("Please set your password.");
                    return;
                }

                this.props.onRegister(this.state.registration);
            },
            writable: true,
            configurable: true
        },
        submitLoginCredentials: {
            value: function submitLoginCredentials(event) {
                event.preventDefault();
                if (this.state.registration.username.length == 0) {
                    alert("Please add your username.");
                    return;
                }

                if (this.state.registration.password.length == 0) {
                    alert("Please set your password.");
                    return;
                }

                this.props.onLogin(this.state.registration);
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h2",
                        null,
                        "Sign Up"
                    ),
                    React.createElement("input", { onChange: this.updateRegistration.bind(this), id: "username", className: "formControl", type: "text", placeholder: "Username" }),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("input", { onChange: this.updateRegistration.bind(this), id: "password", className: "formControl", type: "password", placeholder: "Password" }),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        { onClick: this.submitRegistration.bind(this), className: "btn btn-info btn-fill", style: { marginRight: 16 } },
                        "Join"
                    ),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        { onClick: this.submitLoginCredentials.bind(this), className: "btn btn-success" },
                        "Sign In"
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Register;
})(Component);

var localStyle = {
    input: {
        border: "1px solid #ddd",
        marginBottom: 12
    }
};

module.exports = Register;