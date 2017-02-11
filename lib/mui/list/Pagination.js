'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pagination = undefined;

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

var _chevronLeft = require('material-ui/svg-icons/navigation/chevron-left');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = require('material-ui/svg-icons/navigation/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

var _Toolbar = require('material-ui/Toolbar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonStyle = { margin: '10px 0' };

var Pagination = exports.Pagination = function (_Component) {
    (0, _inherits3.default)(Pagination, _Component);

    function Pagination() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Pagination);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call.apply(_ref, [this].concat(args))), _this), _this.prevPage = function (event) {
            event.stopPropagation();
            if (_this.props.page === 1) {
                throw new Error('Cannot go before page 1');
            }
            _this.props.setPage(_this.props.page - 1);
        }, _this.nextPage = function (event) {
            event.stopPropagation();
            if (_this.props.page > _this.getNbPages()) {
                throw new Error('Cannot after last page');
            }
            _this.props.setPage(_this.props.page + 1);
        }, _this.gotoPage = function (event) {
            event.stopPropagation();
            var page = event.currentTarget.dataset.page;
            if (page < 1 || page > _this.getNbPages()) {
                throw new Error('Page number ' + page + ' out of boundaries');
            }
            _this.props.setPage(page);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Pagination, [{
        key: 'range',
        value: function range() {
            var input = [];
            var _props = this.props,
                page = _props.page,
                perPage = _props.perPage,
                total = _props.total;

            if (isNaN(page)) return input;
            var nbPages = Math.ceil(total / perPage) || 1;

            // display page links around the current page
            if (page > 2) {
                input.push('1');
            }
            if (page === 4) {
                input.push('2');
            }
            if (page > 4) {
                input.push('.');
            }
            if (page > 1) {
                input.push(page - 1);
            }
            input.push(page);
            if (page < nbPages) {
                input.push(page + 1);
            }
            if (page === nbPages - 3) {
                input.push(nbPages - 1);
            }
            if (page < nbPages - 3) {
                input.push('.');
            }
            if (page < nbPages - 1) {
                input.push(nbPages);
            }

            return input;
        }
    }, {
        key: 'getNbPages',
        value: function getNbPages() {
            return Math.ceil(this.props.total / this.props.perPage) || 1;
        }
    }, {
        key: 'renderPageNums',
        value: function renderPageNums() {
            var _this2 = this;

            return this.range().map(function (pageNum, index) {
                return pageNum === '.' ? _react2.default.createElement(
                    'span',
                    { key: 'hyphen_' + index, style: { padding: '1.2em' } },
                    '\u2026'
                ) : _react2.default.createElement(_FlatButton2.default, { key: pageNum, label: pageNum, 'data-page': pageNum, onClick: _this2.gotoPage, primary: pageNum !== _this2.props.page, style: buttonStyle });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                page = _props2.page,
                perPage = _props2.perPage,
                total = _props2.total;

            if (total === 0) return null;
            var offsetEnd = Math.min(page * perPage, total);
            var offsetBegin = Math.min((page - 1) * perPage + 1, offsetEnd);
            var nbPages = this.getNbPages();

            return _react2.default.createElement(
                _Toolbar.Toolbar,
                null,
                _react2.default.createElement(
                    _Toolbar.ToolbarGroup,
                    { firstChild: true },
                    _react2.default.createElement(
                        'span',
                        { style: { padding: '1.2em' } },
                        offsetBegin,
                        '-',
                        offsetEnd,
                        ' of ',
                        total
                    )
                ),
                nbPages > 1 && _react2.default.createElement(
                    _Toolbar.ToolbarGroup,
                    null,
                    page > 1 && _react2.default.createElement(_FlatButton2.default, { primary: true, key: 'prev', label: 'Prev', icon: _react2.default.createElement(_chevronLeft2.default, null), onClick: this.prevPage, style: buttonStyle }),
                    this.renderPageNums(),
                    page !== nbPages && _react2.default.createElement(_FlatButton2.default, { primary: true, key: 'next', label: 'Next', icon: _react2.default.createElement(_chevronRight2.default, null), labelPosition: 'before', onClick: this.nextPage, style: buttonStyle })
                )
            );
        }
    }]);
    return Pagination;
}(_react.Component);

Pagination.propTypes = {
    page: _react.PropTypes.number,
    perPage: _react.PropTypes.number,
    total: _react.PropTypes.number,
    setPage: _react.PropTypes.func
};

exports.default = Pagination;