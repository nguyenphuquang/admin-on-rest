'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeTags = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var removeTags = exports.removeTags = function removeTags(input) {
    return input.replace(/<[^>]+>/gm, '');
};

var RichTextField = function RichTextField(_ref) {
    var source = _ref.source,
        _ref$record = _ref.record,
        record = _ref$record === undefined ? {} : _ref$record,
        stripTags = _ref.stripTags,
        style = _ref.style;

    var value = (0, _lodash2.default)(record, source);
    if (stripTags) {
        return _react2.default.createElement(
            'div',
            { style: style },
            removeTags(value)
        );
    }

    return _react2.default.createElement('div', { style: style, dangerouslySetInnerHTML: { __html: value } });
};

RichTextField.defaultProps = {
    stripTags: false
};

RichTextField.propTypes = {
    label: _react.PropTypes.string,
    record: _react.PropTypes.object,
    source: _react.PropTypes.string.isRequired,
    stripTags: _react.PropTypes.bool,
    style: _react.PropTypes.object
};

exports.default = RichTextField;