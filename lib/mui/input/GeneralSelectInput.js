'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _title = require('../../util/title');

var _title2 = _interopRequireDefault(_title);

var _SelectInput2 = require('./SelectInput');

var _SelectInput3 = _interopRequireDefault(_SelectInput2);

var _materialUi = require('material-ui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GeneralSelectInput = function (_SelectInput) {
    (0, _inherits3.default)(GeneralSelectInput, _SelectInput);

    function GeneralSelectInput() {
        (0, _classCallCheck3.default)(this, GeneralSelectInput);
        return (0, _possibleConstructorReturn3.default)(this, (GeneralSelectInput.__proto__ || Object.getPrototypeOf(GeneralSelectInput)).apply(this, arguments));
    }

    (0, _createClass3.default)(GeneralSelectInput, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                allowEmpty = _props.allowEmpty,
                input = _props.input,
                label = _props.label,
                choices = _props.choices,
                optionFunc = _props.optionFunc,
                optionValue = _props.optionValue,
                options = _props.options,
                source = _props.source,
                style = _props.style;

            return _react2.default.createElement(
                _materialUi.SelectField,
                (0, _extends3.default)({
                    menuStyle: { maxHeight: '41px', overflowY: 'hidden' },
                    floatingLabelText: (0, _title2.default)(label, source),
                    value: input.value,
                    onChange: this.onChange,
                    autoWidth: true,
                    style: style
                }, options),
                allowEmpty && _react2.default.createElement(_materialUi.MenuItem, { value: null, primaryText: '' }),
                choices.map(function (choice) {
                    return _react2.default.createElement(_materialUi.MenuItem, { key: choice[optionValue], primaryText: optionFunc(choice), value: choice[optionValue] });
                })
            );
        }
    }]);
    return GeneralSelectInput;
}(_SelectInput3.default);

exports.default = GeneralSelectInput;
module.exports = exports['default'];