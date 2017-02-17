'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _CircularProgress = require('material-ui/CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppBar = function AppBar(_ref) {
    var title = _ref.title,
        isLoading = _ref.isLoading;

    var Title = _react2.default.createElement(
        _reactRouter.Link,
        { to: '/', style: { color: '#fff', textDecoration: 'none' } },
        title
    );
    var RightElement = isLoading ? _react2.default.createElement(_CircularProgress2.default, { color: '#fff', size: 30, thickness: 2, style: { margin: 8 } }) : _react2.default.createElement('span', null);
    return _react2.default.createElement(_AppBar2.default, { title: Title, iconElementRight: RightElement });
};

AppBar.propTypes = {
    isLoading: _react.PropTypes.bool.isRequired,
    title: _react.PropTypes.string.isRequired
};

exports.default = (0, _pure2.default)(AppBar);
module.exports = exports['default'];