'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shouldUpdate = require('recompose/shouldUpdate');

var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);

var _DatagridCell = require('./DatagridCell');

var _DatagridCell2 = _interopRequireDefault(_DatagridCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatagridBody = function DatagridBody(_ref) {
    var resource = _ref.resource,
        children = _ref.children,
        ids = _ref.ids,
        data = _ref.data,
        basePath = _ref.basePath,
        styles = _ref.styles,
        rowStyle = _ref.rowStyle;
    return _react2.default.createElement(
        'tbody',
        { style: styles.tbody },
        ids.map(function (id, rowIndex) {
            return _react2.default.createElement(
                'tr',
                { style: rowStyle ? rowStyle(data[id], rowIndex) : styles.tr, key: id },
                _react2.default.Children.map(children, function (field, index) {
                    return _react2.default.createElement(_DatagridCell2.default, (0, _extends3.default)({
                        key: id + '-' + (field.props.source || index),
                        record: data[id],
                        defaultStyle: index === 0 ? styles.cell['td:first-child'] : styles.cell.td
                    }, { field: field, basePath: basePath, resource: resource }));
                })
            );
        })
    );
};

DatagridBody.propTypes = {
    ids: _react.PropTypes.arrayOf(_react.PropTypes.any).isRequired,
    isLoading: _react.PropTypes.bool,
    resource: _react.PropTypes.string,
    data: _react.PropTypes.object.isRequired,
    basePath: _react.PropTypes.string,
    styles: _react.PropTypes.object,
    rowStyle: _react.PropTypes.func
};

DatagridBody.defaultProps = {
    data: {},
    ids: []
};

exports.default = (0, _shouldUpdate2.default)(function (props, nextProps) {
    return nextProps.isLoading === false;
})(DatagridBody);
module.exports = exports['default'];