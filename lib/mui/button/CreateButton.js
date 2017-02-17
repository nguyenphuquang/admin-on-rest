'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _onlyUpdateForKeys = require('recompose/onlyUpdateForKeys');

var _onlyUpdateForKeys2 = _interopRequireDefault(_onlyUpdateForKeys);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _add = require('material-ui/svg-icons/content/add');

var _add2 = _interopRequireDefault(_add);

var _translate = require('../../i18n/translate');

var _translate2 = _interopRequireDefault(_translate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateButton = function CreateButton(_ref) {
    var _ref$basePath = _ref.basePath,
        basePath = _ref$basePath === undefined ? '' : _ref$basePath,
        translate = _ref.translate,
        _ref$label = _ref.label,
        label = _ref$label === undefined ? 'aor.action.create' : _ref$label;
    return _react2.default.createElement(_FlatButton2.default, {
        primary: true,
        label: label && translate(label),
        icon: _react2.default.createElement(_add2.default, null),
        containerElement: _react2.default.createElement(_reactRouter.Link, { to: basePath + '/create' }),
        style: { overflow: 'inherit' }
    });
};

CreateButton.propTypes = {
    basePath: _react.PropTypes.string,
    label: _react.PropTypes.string,
    translate: _react.PropTypes.func.isRequired
};

exports.default = (0, _translate2.default)((0, _onlyUpdateForKeys2.default)(['basePath, label'])(CreateButton));
module.exports = exports['default'];