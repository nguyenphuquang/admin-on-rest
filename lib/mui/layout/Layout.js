'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _autoprefixer = require('material-ui/utils/autoprefixer');

var _autoprefixer2 = _interopRequireDefault(_autoprefixer);

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _AppBar = require('./AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Notification = require('./Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _defaultTheme = require('../defaultTheme');

var _defaultTheme2 = _interopRequireDefault(_defaultTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactTapEventPlugin2.default)();

var Layout = function Layout(_ref) {
    var isLoading = _ref.isLoading,
        children = _ref.children,
        route = _ref.route,
        title = _ref.title,
        theme = _ref.theme,
        logout = _ref.logout;

    var muiTheme = (0, _getMuiTheme2.default)(theme);
    var prefix = (0, _autoprefixer2.default)(muiTheme);
    return _react2.default.createElement(
        _MuiThemeProvider2.default,
        { muiTheme: muiTheme },
        _react2.default.createElement(
            'div',
            { style: prefix({ display: 'flex', flexDirection: 'column', minHeight: '100vh' }) },
            _react2.default.createElement(_AppBar2.default, { title: title, isLoading: isLoading }),
            _react2.default.createElement(
                'div',
                { className: 'body', style: prefix({ display: 'flex', flex: '1', backgroundColor: '#edecec' }) },
                _react2.default.createElement(
                    'div',
                    { style: prefix({ flex: 1 }) },
                    children
                ),
                _react2.default.createElement(_Menu2.default, { resources: route.resources, logout: logout })
            ),
            _react2.default.createElement(_Notification2.default, null)
        )
    );
};

Layout.propTypes = {
    isLoading: _react.PropTypes.bool.isRequired,
    children: _react.PropTypes.node,
    logout: _react.PropTypes.element,
    route: _react.PropTypes.object.isRequired,
    title: _react.PropTypes.string.isRequired,
    theme: _react.PropTypes.object.isRequired
};

Layout.defaultProps = {
    theme: _defaultTheme2.default
};

function mapStateToProps(state) {
    return { isLoading: state.admin.loading > 0 };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Layout);
module.exports = exports['default'];