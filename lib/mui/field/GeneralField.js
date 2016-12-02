'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GeneralField = function GeneralField(_ref) {
    var value = _ref.value,
        _ref$record = _ref.record,
        record = _ref$record === undefined ? {} : _ref$record,
        _ref$style = _ref.style,
        style = _ref$style === undefined ? null : _ref$style;
    return _react2.default.createElement(
        'span',
        { style: style },
        value(record)
    );
};

GeneralField.propTypes = {
    record: _react.PropTypes.object,
    value: _react.PropTypes.func.isRequired,
    style: _react.PropTypes.object
};

exports.default = GeneralField;
module.exports = exports['default'];