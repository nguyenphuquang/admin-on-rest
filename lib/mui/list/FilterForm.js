'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FilterForm = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _reduxForm = require('redux-form');

var _Card = require('material-ui/Card');

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _highlightOff = require('material-ui/svg-icons/action/highlight-off');

var _highlightOff2 = _interopRequireDefault(_highlightOff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilterForm = exports.FilterForm = function (_Component) {
    (0, _inherits3.default)(FilterForm, _Component);

    function FilterForm() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, FilterForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FilterForm.__proto__ || Object.getPrototypeOf(FilterForm)).call.apply(_ref, [this].concat(args))), _this), _this.handleHide = function (event) {
            return _this.props.hideFilter(event.currentTarget.dataset.key);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(FilterForm, [{
        key: 'getShownFilters',
        value: function getShownFilters() {
            var _props = this.props,
                filters = _props.filters,
                displayedFilters = _props.displayedFilters,
                currentFilters = _props.currentFilters,
                initialValues = _props.initialValues;

            return filters.filter(function (filterElement) {
                return filterElement.props.alwaysOn || displayedFilters[filterElement.props.source] || currentFilters[filterElement.props.source] || initialValues[filterElement.props.source];
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                currentFilters = _props2.currentFilters,
                resource = _props2.resource;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Card.CardText,
                    { style: { float: 'right', marginTop: '-14px', paddingTop: 0 } },
                    this.getShownFilters().map(function (filterElement) {
                        return _react2.default.createElement(
                            'div',
                            { key: filterElement.props.source },
                            filterElement.props.alwaysOn ? _react2.default.createElement(
                                'div',
                                { style: { width: 48, display: 'inline-block' } },
                                '\xA0'
                            ) : _react2.default.createElement(
                                _IconButton2.default,
                                { iconStyle: { color: '#00bcd4' }, onTouchTap: _this2.handleHide, 'data-key': filterElement.props.source, tooltip: 'Remove this filter' },
                                _react2.default.createElement(_highlightOff2.default, null)
                            ),
                            _react2.default.createElement(_reduxForm.Field, (0, _extends3.default)({}, filterElement.props, {
                                name: filterElement.props.source,
                                component: filterElement.type,
                                resource: resource,
                                record: currentFilters
                            }))
                        );
                    })
                ),
                _react2.default.createElement('div', { style: { clear: 'right' } })
            );
        }
    }]);
    return FilterForm;
}(_react.Component);

FilterForm.propTypes = {
    resource: _react.PropTypes.string.isRequired,
    currentFilters: _react.PropTypes.object.isRequired,
    filters: _react.PropTypes.arrayOf(_react.PropTypes.node).isRequired,
    displayedFilters: _react.PropTypes.object.isRequired,
    hideFilter: _react.PropTypes.func.isRequired,
    initialValues: _react.PropTypes.object
};

FilterForm.defaultProps = {
    currentFilters: {}
};

exports.default = (0, _reduxForm.reduxForm)({
    form: 'filterForm'
})(FilterForm);