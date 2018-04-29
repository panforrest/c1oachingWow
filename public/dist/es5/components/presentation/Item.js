"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
    var item = props.item;

    return React.createElement(
        "div",
        { className: "row" },
        React.createElement(
            "div",
            { id: "reservations" },
            React.createElement(
                "div",
                { "class": "reservation" },
                React.createElement(
                    "div",
                    { style: localStyle.itemImage },
                    React.createElement("img", { style: localStyle.itemImage, src: item.image })
                ),
                React.createElement(
                    "h2",
                    null,
                    item.name
                ),
                React.createElement(
                    "span",
                    { "class": "reservation-date" },
                    "$",
                    item.price,
                    " "
                ),
                React.createElement("img", { style: localStyle.icon, src: item.seller.image })
            )
        )
    );
};

var localStyle = {
    icon: {
        width: 28,
        borderRadius: 14,
        float: "right"
    },
    itemImage: {
        width: 100 + "%",
        padding: 3,
        // border:'1px solid #ddd',
        background: "#ffffa"
    }
};