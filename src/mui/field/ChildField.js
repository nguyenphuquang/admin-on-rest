import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';
import { crudGetManyReference as crudGetManyReferenceAction } from '../../actions/dataActions';
import { getReferences, nameRelatedTo } from '../../reducer/references/oneToMany';

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
export class ChildField extends Component {
    componentDidMount() {
        //const relatedTo = nameRelatedTo(this.props.reference, this.props.record.id, this.props.resource, this.props.target);
        //this.props.crudGetManyReference(this.props.reference, this.props.target, this.props.record.id, relatedTo);
    }

    componentWillReceiveProps(nextProps) {
        //if (this.props.record.id !== nextProps.record.id) {
        //    const relatedTo = nameRelatedTo(nextProps.reference, nextProps.record.id, nextProps.resource, nextProps.target);
        //    this.props.crudGetManyReference(nextProps.reference, nextProps.target, nextProps.record.id, relatedTo);
        //relatedTo}
    }

    render() {
        const { resource, referenceRecords, children, basePath } = this.props;
        if (React.Children.count(children) !== 1) {
            throw new Error('<ChildField> only accepts a single child (like <Datagrid>)');
        }
        if (typeof referenceRecords === 'undefined') {
            return <LinearProgress style={{ marginTop: '1em' }} />;
        }
        // const referenceBasePath = basePath.replace(resource, reference); // FIXME obviously very weak
        return React.cloneElement(children, {
            resource: "",
            ids: Object.keys(referenceRecords),
            data: referenceRecords,
            basePath: "",
            currentSort: {},
        });
    }
}

ChildField.propTypes = {
    basePath: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    includesLabel: PropTypes.bool,
    label: PropTypes.string,
    record: PropTypes.object,
    referenceRecords: PropTypes.object,
    resource: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
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
export default ChildField;
