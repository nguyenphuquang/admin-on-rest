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

var _Table = require('material-ui/Table');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _title = require('../../util/title');

var _title2 = _interopRequireDefault(_title);

var _ChildRecordForm = require('../detail/ChildRecordForm');

var _ChildRecordForm2 = _interopRequireDefault(_ChildRecordForm);

var _reduxForm = require('redux-form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyles = {
    table: {
        backgroundColor: '#fff',
        padding: '0px 24px',
        width: '100%',
        borderCollapse: 'collapse',
        borderSpacing: 0
    },
    tbody: {
        height: 'inherit'
    },
    tr: {
        borderBottom: '1px solid rgb(224, 224, 224)',
        color: 'rgba(0, 0, 0, 0.870588)',
        height: 48
    },
    'th:first-child': {
        padding: '0 0 0 12px'
    },
    th: {
        padding: 0
    },
    sortButton: {
        minWidth: 40
    },
    'td:first-child': {
        padding: '0 12px 0 24px'
    },
    td: {
        padding: '0 12px'
    }
};

var ChildDatagrid = function (_Component) {
    (0, _inherits3.default)(ChildDatagrid, _Component);

    function ChildDatagrid(props) {
        (0, _classCallCheck3.default)(this, ChildDatagrid);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ChildDatagrid.__proto__ || Object.getPrototypeOf(ChildDatagrid)).call(this, props));

        _this.ChildRecordForm = null;


        _this.ChildRecordForm = (0, _ChildRecordForm2.default)(props.source);

        _this.state = {
            open: false,
            confirm: false
        };
        return _this;
    }

    (0, _createClass3.default)(ChildDatagrid, [{
        key: 'onDelete',
        value: function onDelete(item, id) {
            this.setState({
                confirm: true,
                _currentId: id
            });
        }
    }, {
        key: 'onConfirmDelete',
        value: function onConfirmDelete() {
            var id = this.state._currentId;
            if (id !== null) {
                var data = this.getData();
                data.splice(id, 1);
                this.props.input.onChange(data);
                this.setState({
                    confirm: false,
                    _currentId: null
                });
            }
        }
    }, {
        key: 'onClick',
        value: function onClick(item, id) {
            this.setState({
                _currentRecord: item,
                _currentId: id,
                open: true
            });
        }
    }, {
        key: 'onSave',
        value: function onSave(newData) {
            if (this.props.onChangeRow) {
                this.props.onChangeRow(newData);
            }
            // var data = this.props.data;
            var data = this.getData();
            var id = this.state._currentId;
            if (id === null) {
                data.push(newData);
            } else {
                data[id] = newData;
            }
            this.props.input.onChange(data);
            this.setState({
                open: false,
                _currentRecord: null,
                _currentId: null
            });
        }
    }, {
        key: 'getData',
        value: function getData() {
            var input = this.props.input;

            return input.value || [];
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                list = _props.list,
                edit = _props.edit,
                input = _props.input,
                _props$styles = _props.styles,
                styles = _props$styles === undefined ? defaultStyles : _props$styles;

            var listChildren = _react2.default.Children.toArray(list.props.children);
            var data = this.getData();
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'table',
                    { style: styles.table },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            { style: styles.tr },
                            listChildren.map(function (field, index) {
                                return _react2.default.createElement(
                                    _Table.TableHeaderColumn,
                                    { key: field.props.source || index, style: index ? styles.th : styles['th:first-child'] },
                                    field.props.label || field.props.source
                                );
                            }),
                            _react2.default.createElement(
                                _Table.TableRowColumn,
                                { key: 'add--1', style: styles.td },
                                _react2.default.createElement(_FlatButton2.default, { primary: true, label: 'Add', onClick: this.onClick.bind(this, {}, null) })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        { style: styles.tbody },
                        data.map(function (row, id) {
                            return _react2.default.createElement(
                                'tr',
                                { style: styles.tr, key: id },
                                listChildren.map(function (field, index) {
                                    return _react2.default.createElement(
                                        _Table.TableRowColumn,
                                        { key: id + '-' + (field.props.source || index), style: index ? styles.td : styles['td:first-child'] },
                                        _react2.default.createElement(field.type, (0, _extends3.default)({}, field.props, { record: data[id] }))
                                    );
                                }),
                                _react2.default.createElement(
                                    _Table.TableRowColumn,
                                    { key: id + '--1', style: styles.td },
                                    _react2.default.createElement(_FlatButton2.default, { primary: true, label: 'Edit', onClick: _this2.onClick.bind(_this2, row, id) }),
                                    _react2.default.createElement(_FlatButton2.default, { primary: true, label: 'Delete', onClick: _this2.onDelete.bind(_this2, row, id) })
                                )
                            );
                        })
                    )
                ),
                this.state.open ? _react2.default.createElement(
                    _Dialog2.default,
                    { open: this.state.open, title: 'Edit record',
                        onRequestClose: function onRequestClose() {
                            _this2.setState({ open: false });
                        } },
                    _react2.default.createElement(
                        this.ChildRecordForm,
                        {
                            onSubmit: this.onSave.bind(this),
                            record: this.state._currentRecord,
                            initialValues: this.state._currentRecord,
                            resource: this.props.resource
                        },
                        edit.props.children
                    )
                ) : null,
                _react2.default.createElement(_Dialog2.default, { open: this.state.confirm, title: 'Delete this record?',
                    actions: [_react2.default.createElement(_FlatButton2.default, { primary: true, label: 'Yes', onClick: this.onConfirmDelete.bind(this) }), _react2.default.createElement(_FlatButton2.default, { primary: true, label: 'No', onClick: function onClick() {
                            _this2.setState({ confirm: false });
                        } })] })
            );
        }
    }]);
    return ChildDatagrid;
}(_react.Component);

/*
 */

ChildDatagrid.propTypes = {
    styles: _react.PropTypes.object
};

ChildDatagrid.defaultProps = {};

exports.default = ChildDatagrid;
module.exports = exports['default'];