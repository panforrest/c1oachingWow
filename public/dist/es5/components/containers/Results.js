"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Item = require("../presentation").Item;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var Dropzone = _interopRequire(require("react-dropzone"));

var turbo = _interopRequire(require("turbo360"));

var Results = (function (Component) {
    function Results() {
        _classCallCheck(this, Results);

        _get(Object.getPrototypeOf(Results.prototype), "constructor", this).call(this);
        this.state = {
            item: {}
        };
    }

    _inherits(Results, Component);

    _prototypeProperties(Results, null, {
        componentDidMount: {
            value: function componentDidMount() {
                console.log("componentDidMount: ");
                this.props.fetchItems();
            },
            writable: true,
            configurable: true
        },
        updateItem: {
            value: function updateItem(attr, event) {
                event.preventDefault();
                console.log(attr + " == " + event.target.value);
                var updated = Object.assign({}, this.state.item);
                updated[attr] = event.target.value;
                this.setState({
                    item: updated
                });
            },
            writable: true,
            configurable: true
        },
        addItem: {
            value: function addItem() {
                // // console.log('ADD ITEM: ' + JSON.stringify(this.state.item))
                // let newItem = Object.assign({}, this.state.item)
                // const len = this.props.item.all.length+1
                // newItem['id'] = len.toString()
                // // newItem['id'] = 100
                // // newItem['key'] = '100'
                // // newItem['defaultAnimation'] = 2
                // newItem['position'] = this.props.map.currentLocation
                // this.props.addItem(newItem)
                if (this.props.account.currentUser == null) {
                    alert("Please log in or register to sell items");
                    return;
                }

                var currentUser = this.props.account.currentUser;
                var updated = Object.assign({}, this.state.itme);
                updated.seller = {
                    id: currentUser.id,
                    username: currentUser.username,
                    image: currentUser.image || ""
                };

                console.log("ADD ITEM: " + JSON.stringify(updated));
                this.props.addItem(updated).then(function (data) {
                    console.log("ITEM ADDED: " + JSON.stringify(data));
                })["catch"](function (err) {
                    console.log("ERR: " + err.message);
                });
            },
            writable: true,
            configurable: true
        },
        uploadImage: {
            value: function uploadImage(files) {
                var _this = this;
                var image = files[0];
                console.log("uploadImage: " + image.name);
                var turboClient = turbo({
                    site_id: "5ae5315e0d44f900146683d0"
                });

                turboClient.uploadFile(image).then(function (data) {
                    // console.log('FILE UPLOADED: ' + JSON.stringify(data))
                    // console.log('FILE UPLOADED: ' + data.result.url)
                    var updated = Object.assign({}, _this.state.item);
                    updated.image = data.result.url;
                    _this.setState({
                        item: updated
                    });
                })["catch"](function (err) {
                    console.log("UPLOAD ERROR: " + err.message);
                });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                // const items = [
                //     {id:1, key:'1', price:'10', defaultAnimation:2, label:'Nike Jordans', position:{lat:40.7224017, lng:-73.9896719}},
                //     {id:2, key:'2', price:'20', defaultAnimation:2, label:'Sofa', position:{lat:40.7124017, lng:-73.9896719}},
                //     {id:2, key:'2', price:'20', defaultAnimation:2, label:'Sofa', position:{lat:40.7124017, lng:-73.9896719}}
                // ]

                var items = this.props.item.all || [];

                return React.createElement(
                    "div",
                    { className: "container-fluid" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        items.map(function (item, i) {
                            return React.createElement(Item, { key: item.id, item: item });
                        })
                    ),
                    React.createElement("hr", null),
                    React.createElement("input", { onChange: this.updateItem.bind(this, "label"), className: "formControl", type: "text", placeholder: "Item" }),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("input", { onChange: this.updateItem.bind(this, "price"), className: "formControl", type: "text", placeholder: "Price" }),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    this.state.item.image == null ? null : React.createElement("img", { src: this.state.item.image + "=s120-c" }),
                    React.createElement("hr", null),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            Dropzone,
                            { onDrop: this.uploadImage.bind(this), className: "btn btn-info btn-fill", style: { marginRight: 16 } },
                            "Add Image"
                        ),
                        React.createElement(
                            "button",
                            { onClick: this.addItem.bind(this), className: "btn btn-success" },
                            "Add Item"
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Results;
})(Component);

var localStyle = {
    input: {
        border: "1px solid #ddd",
        marginBottom: 12
    }
};

var stateToProps = function (state) {
    return {
        item: state.item,
        map: state.map,
        account: state.account
    };
};

var dispatchToProps = function (dispatch) {
    return {
        addItem: function (item) {
            return dispatch(actions.addItem(item));
        },
        fetchItems: function (params) {
            return dispatch(actions.fetchItems(params));
        }
    };
};

module.exports = connect(stateToProps, dispatchToProps)(Results);
// position:{lat:40.70224017, lng:-73.9796719}