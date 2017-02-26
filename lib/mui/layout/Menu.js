'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _inflection = require('inflection');

var _inflection2 = _interopRequireDefault(_inflection);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _List = require('material-ui/List');

var _reactRouter = require('react-router');

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _translate = require('../../i18n/translate');

var _translate2 = _interopRequireDefault(_translate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
    flex: '0 0 15em',
    order: -1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
};

var translatedResourceName = function translatedResourceName(resource, translate) {
    return translate('resources.' + resource.name + '.name', {
        smart_count: 2,
        _: resource.options && resource.options.label ? translate(resource.options.label, { smart_count: 2, _: resource.options.label }) : _inflection2.default.humanize(_inflection2.default.pluralize(resource.name))
    });
};

var Menu = function Menu(_ref) {
    var resources = _ref.resources,
        translate = _ref.translate,
        logout = _ref.logout;
    return _react2.default.createElement(
        _Paper2.default,
        { style: style },
        _react2.default.createElement(
            _List.List,
            null,
            resources.filter(function (r) {
                return r.list;
            }).map(function (resource) {
                return _react2.default.createElement(_List.ListItem, {
                    key: resource.name,
                    containerElement: _react2.default.createElement(_reactRouter.Link, { to: '/' + resource.name }),
                    primaryText: translatedResourceName(resource, translate),
                    leftIcon: resource.icon && _react2.default.createElement(resource.icon, null)
                });
            })
        ),
        logout
    );
};

Menu.propTypes = {
    resources: _react.PropTypes.array.isRequired,
    translate: _react.PropTypes.func.isRequired,
    logout: _react.PropTypes.element
};

exports.default = (0, _translate2.default)((0, _pure2.default)(Menu));
module.exports = exports['default'];