'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RecordForm = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _Toolbar = require('material-ui/Toolbar');

var _validate = require('../../util/validate');

var _button = require('../button');

var _Labeled = require('../input/Labeled');

var _Labeled2 = _interopRequireDefault(_Labeled);

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.set');

var _lodash4 = _interopRequireDefault(_lodash3);

var _FormField = require('../form/FormField');

var _FormField2 = _interopRequireDefault(_FormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @example
 * from the following fields:
 *     <TextField source="title" validation={{ minLength: 5 }} />
 *     <TextField source="age" validation={{ required: true, min: 18 }} />
 * produces the following output
 * {
 *    title: (value) => value.length < 5 ? ['title is too short'] : [],
 *    age:   (value) => {
 *       const errors = [];
 *       if (value) errors.push('age is required');
 *       if (value < 18) errors.push('age is under 18');
 *       return errors;
 *    }
 * }
 */
var getFieldConstraints = function getFieldConstraints(children) {
    return _react2.default.Children.toArray(children).map(function (_ref) {
        var _ref$props = _ref.props,
            fieldName = _ref$props.source,
            validation = _ref$props.validation;
        return { fieldName: fieldName, validation: validation };
    }).filter(function (_ref2) {
        var validation = _ref2.validation;
        return !!validation;
    }).reduce(function (constraints, _ref3) {
        var fieldName = _ref3.fieldName,
            validation = _ref3.validation;

        constraints[fieldName] = (0, _validate.getConstraintsFunctionFromFunctionOrObject)(validation);
        return constraints;
    }, {});
};

// export const validateForm = (values, { children, validation }) => {
//     const errors = typeof validation === 'function' ? validation(values) : {};
//
//     // warn user we expect an object here, in case of validation just returned an error message
//     if (errors === null || typeof errors !== 'object') {
//         throw new Error('Validation function given to form components should return an object.');
//     }
//
//     const fieldConstraints = getFieldConstraints(children);
//     Object.keys(fieldConstraints).forEach(fieldName => {
//         const error = fieldConstraints[fieldName](get(values, fieldName), values);
//         if (error.length > 0) {
//             /*
//             if (!errors[fieldName]) {
//                 errors[fieldName] = [];
//             }
//             errors[fieldName] = [...errors[fieldName], ...error];
//             */
//             if (!get(errors, fieldName)) {
//                 set(errors, fieldName, []);
//             }
//             set(errors, fieldName, [...get(errors, fieldName), ...error]);
//         }
//     });
//     return errors;
// };

var RecordForm = exports.RecordForm = function RecordForm(_ref4) {
    var children = _ref4.children,
        handleSubmit = _ref4.handleSubmit,
        record = _ref4.record,
        resource = _ref4.resource,
        basePath = _ref4.basePath,
        _ref4$buttons = _ref4.buttons,
        buttons = _ref4$buttons === undefined ? [_react2.default.createElement(_button.SaveButton, { key: 'save' })] : _ref4$buttons,
        _ref4$content = _ref4.content,
        content = _ref4$content === undefined ? null : _ref4$content;
    return _react2.default.createElement(
        'form',
        { onSubmit: handleSubmit },
        content ? _react2.default.createElement(
            'div',
            { style: { padding: '0 1em 1em 1em' } },
            content
        ) : null,
        _react2.default.createElement(
            'div',
            { style: { padding: '0 1em 1em 1em' } },
            _react2.default.Children.map(children, function (input) {
                return _react2.default.createElement(
                    'div',
                    { key: input.props.source },
                    _react2.default.createElement(_FormField2.default, { input: input, resource: resource, record: record, basePath: basePath })
                );
            })
        ),
        _react2.default.createElement(
            _Toolbar.Toolbar,
            null,
            _react2.default.createElement(
                _Toolbar.ToolbarGroup,
                null,
                buttons
            )
        )
    );
};

RecordForm.propTypes = {
    children: _react.PropTypes.node,
    handleSubmit: _react.PropTypes.func,
    record: _react.PropTypes.object,
    resource: _react.PropTypes.string,
    basePath: _react.PropTypes.string
};

exports.default = function (formName) {
    formName = 'record-form-' + formName;
    var ret = (0, _reduxForm.reduxForm)({
        form: formName,
        validate: _validate.validateForm
    })(RecordForm);
    ret.formName = formName;
    return ret;
};