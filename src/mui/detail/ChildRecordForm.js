import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { getConstraintsFunctionFromFunctionOrObject } from '../../util/validate';
import { SaveButton } from '../button';
import Labeled from '../input/Labeled';
import get from 'lodash.get';
import set from 'lodash.set';
import FormField from '../form/FormField';

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
const getFieldConstraints = (children) => React.Children.toArray(children)
    .map(({ props: { source: fieldName, validation }}) => ({ fieldName, validation }))
    .filter(({ validation }) => !!validation)
    .reduce((constraints, { fieldName, validation }) => {
        constraints[fieldName] = getConstraintsFunctionFromFunctionOrObject(validation);
        return constraints;
    }, {});

import { validateForm } from '../../util/validate';
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

export const RecordForm = ({ children, handleSubmit, record, resource, basePath, buttons=[<SaveButton key="save" />], content=null }) => (
    <form onSubmit={handleSubmit}>
        {content?<div style={{ padding: '0 1em 1em 1em' }}>{content}</div>:null}
        <div style={{ padding: '0 1em 1em 1em' }}>
            {React.Children.map(children, input => (
                <div key={input.props.source}>
                    <FormField input={input} resource={resource} record={record} basePath={basePath} />
                </div>
            ))}
        </div>
        <Toolbar>
            <ToolbarGroup>
                {buttons}
            </ToolbarGroup>
        </Toolbar>
    </form>
);

RecordForm.propTypes = {
    children: PropTypes.node,
    handleSubmit: PropTypes.func,
    record: PropTypes.object,
    resource: PropTypes.string,
    basePath: PropTypes.string,
};

export default (formName) => {
    formName = 'record-form-' + formName;
    var ret = reduxForm({
        form: formName,
        validate: validateForm,
    })(RecordForm);
    ret.formName = formName;
    return ret;
}
