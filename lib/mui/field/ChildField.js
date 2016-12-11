'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChildField = undefined;

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

var _reactRedux = require('react-redux');

var _LinearProgress = require('material-ui/LinearProgress');

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

var _dataActions = require('../../actions/dataActions');

var _oneToMany = require('../../reducer/references/oneToMany');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render related records to the current one.
 *
 * You must define the fields to be passed to the iterator component as children.
 *
 * @example Display all the comments of the current post as a datagrid
 * <ReferenceManyField target="post_id">
 *     <Datagrid>
 *         <TextField source="id" />
 *         <TextField source="body" />
 *         <DateField source="created_at" />
 *         <EditButton />
 *         <DeleteButton />
 *     </Datagrid>
 * </ReferenceManyField>
 *
 */
var ChildField = exports.ChildField = function (_Component) {
    (0, _inherits3.default)(ChildField, _Component);

    function ChildField() {
        (0, _classCallCheck3.default)(this, ChildField);
        return (0, _possibleConstructorReturn3.default)(this, (ChildField.__proto__ || Object.getPrototypeOf(ChildField)).apply(this, arguments));
    }

    (0, _createClass3.default)(ChildField, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //const relatedTo = nameRelatedTo(this.props.reference, this.props.record.id, this.props.resource, this.props.target);
            //this.props.crudGetManyReference(this.props.reference, this.props.target, this.props.record.id, relatedTo);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            //if (this.props.record.id !== nextProps.record.id) {
            //    const relatedTo = nameRelatedTo(nextProps.reference, nextProps.record.id, nextProps.resource, nextProps.target);
            //    this.props.crudGetManyReference(nextProps.reference, nextProps.target, nextProps.record.id, relatedTo);
            //relatedTo}
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                resource = _props.resource,
                referenceRecords = _props.referenceRecords,
                children = _props.children,
                basePath = _props.basePath;

            if (_react2.default.Children.count(children) !== 1) {
                throw new Error('<ChildField> only accepts a single child (like <Datagrid>)');
            }
            if (typeof referenceRecords === 'undefined') {
                return _react2.default.createElement(_LinearProgress2.default, { style: { marginTop: '1em' } });
            }
            // const referenceBasePath = basePath.replace(resource, reference); // FIXME obviously very weak
            return _react2.default.cloneElement(children, {
                resource: "",
                ids: Object.keys(referenceRecords),
                data: referenceRecords,
                basePath: "",
                currentSort: {}
            });
        }
    }]);
    return ChildField;
}(_react.Component);

ChildField.propTypes = {
    basePath: _react.PropTypes.string.isRequired,
    children: _react.PropTypes.element.isRequired,
    includesLabel: _react.PropTypes.bool,
    label: _react.PropTypes.string,
    record: _react.PropTypes.object,
    referenceRecords: _react.PropTypes.object,
    resource: _react.PropTypes.string.isRequired,
    target: _react.PropTypes.string.isRequired
};

/*
function mapStateToProps(state, props) {
    const relatedTo = nameRelatedTo(props.reference, props.record.id, props.resource, props.target);
    return {
        referenceRecords: getReferences(state, props.reference, relatedTo),
    };
}

const ConnectedChildField = connect(mapStateToProps, {
    crudGetManyReference: crudGetManyReferenceAction,
})(ChildField);

ConnectedChildField.defaultProps = {
    includesLabel: false,
    source: '',
};

export default ConnectedChildField;
*/
exports.default = ChildField;