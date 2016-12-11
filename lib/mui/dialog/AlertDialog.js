'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlertDialog = function (_Component) {
    (0, _inherits3.default)(AlertDialog, _Component);

    function AlertDialog(props) {
        (0, _classCallCheck3.default)(this, AlertDialog);

        var _this = (0, _possibleConstructorReturn3.default)(this, (AlertDialog.__proto__ || Object.getPrototypeOf(AlertDialog)).call(this, props));

        _this.state = {
            open: false
        };
        return _this;
    }

    (0, _createClass3.default)(AlertDialog, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(_Dialog2.default, { open: this.state.open, title: 'Edit record',
                onRequestClose: function onRequestClose() {
                    _this2.setState({ open: false });
                } });
        }
    }]);
    return AlertDialog;
}(_react.Component);

exports.default = AlertDialog;
module.exports = exports['default'];