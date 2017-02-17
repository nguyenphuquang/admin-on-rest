'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _translate = require('../../i18n/translate');

var _translate2 = _interopRequireDefault(_translate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = function Title(_ref) {
    var defaultTitle = _ref.defaultTitle,
        record = _ref.record,
        title = _ref.title,
        translate = _ref.translate;

    if (!title) {
        return _react2.default.createElement(
            'span',
            null,
            defaultTitle
        );
    }
    if (typeof title === 'string') {
        return _react2.default.createElement(
            'span',
            null,
            translate(title, { _: title })
        );
    }
    return _react2.default.cloneElement(title, { record: record });
};

Title.propTypes = {
    defaultTitle: _react.PropTypes.string.isRequired,
    record: _react.PropTypes.object,
    translate: _react.PropTypes.func.isRequired,
    title: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element])
};

exports.default = (0, _translate2.default)(Title);
module.exports = exports['default'];