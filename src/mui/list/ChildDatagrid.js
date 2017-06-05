import React, { Component, PropTypes } from 'react';
import { TableHeaderColumn, TableRowColumn } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import title from '../../util/title';
import ChildRecordForm from '../detail/ChildRecordForm';

import {SimpleFormWithName} from '../form/SimpleForm';

import {reduxForm} from 'redux-form';
import {withRouter} from 'react-router';
import {stopSubmit} from 'redux-form';

const defaultStyles = {
    table: {
        backgroundColor: '#fff',
        padding: '0px 24px',
        width: '100%',
        borderCollapse: 'collapse',
        borderSpacing: 0,
    },
    tbody: {
        height: 'inherit',
    },
    tr: {
        borderBottom: '1px solid rgb(224, 224, 224)',
        color: 'rgba(0, 0, 0, 0.870588)',
        height: 48,
    },
    'th:first-child': {
        padding: '0 0 0 12px',
    },
    th: {
        padding: 0,
    },
    sortButton: {
        minWidth: 40,
    },
    'td:first-child': {
        padding: '0 12px 0 24px',
    },
    td: {
        padding: '0 12px',
    },
};

const ChildDatagrid = withRouter(
    class _ChildDatagrid extends Component {

        ChildRecordForm = null;

        constructor(props) {
            super(props);

            this.ChildRecordForm = ChildRecordForm(props.source);
            // this.ChildRecordForm = SimpleFormWithName(props.source);

            this.state = {
                open: false,
                confirm: false,
            };
        }

        onDelete(item, id) {
            this.setState({
                confirm: true,
                _currentId: id
            });
        }

        onConfirmDelete() {
            var id = this.state._currentId;
            if (id!==null) {
                var data = this.getData();
                data.splice(id, 1);
                this.props.input.onChange(data);
                this.setState({
                    confirm: false,
                    _currentId: null,
                })
            }
        }

        onClick(item, id, editTitle) {
            this.setState({
                _currentRecord: item,
                _currentId: id,
                open: true,
                editTitle,
            });
        }

        onSave(newData) {
            if (this.props.onChangeRow) {
                this.props.onChangeRow(newData);
            }
            // var data = this.props.data;
            var data = this.getData();
            var id = this.state._currentId;
            if (id===null) {
                data.push(newData);
            } else {
                data[id] = newData;
            }
            this.props.input.onChange(data);
            this.setState({
                open: false,
                _currentRecord: null,
                _currentId: null,
            });

            // turn off saving mode
            this.props.route.store.dispatch(stopSubmit());
        }

        getData() {
            const { input = {} } = this.props;
            return input.value || [];
        }

        render() {
            var { list, edit, input, canEdit = true, canDelete = true, canAdd = true, styles = defaultStyles } = this.props;
            if (typeof list == 'function') {
                list = list(this.props);
            }
            if (typeof edit == 'function') {
                edit = edit(this.props);
            }
            var listChildren = React.Children.toArray(list.props.children);
            var data = this.getData();
            return (
                <div>
                    <table style={styles.table}>
                        <thead>
                            <tr style={styles.tr}>
                                {listChildren.map((field, index) => (
                                    <TableHeaderColumn key={field.props.source || index} style={index ? styles.th : styles['th:first-child']} >
                                        {field.props.label || field.props.source}
                                    </TableHeaderColumn>
                                ))}
                                {canAdd && <TableRowColumn key={`add--1`} style={styles.td} >
                                    <FlatButton primary label="Add"
                                        onClick={this.onClick.bind(this, this.props.defaultRecord?(this.props.defaultRecord()):{}, null, 'Add new record')} />
                                </TableRowColumn>}
                            </tr>
                        </thead>
                        <tbody style={styles.tbody}>
                            {data.map((row, id) => (
                                <tr style={styles.tr} key={id}>
                                    {listChildren.map((field, index) => {
                                        return <TableRowColumn key={`${id}-${field.props.source || index}`} style={index ? styles.td : styles['td:first-child']} >
                                            <field.type {...field.props} record={data[id]} />
                                        </TableRowColumn>
                                    })}
                                    <TableRowColumn key={`${id}--1`} style={styles.td} >
                                        {canEdit && <FlatButton primary label="Edit" onClick={this.onClick.bind(this, row, id, 'Edit record')} />}
                                        {canDelete && <FlatButton primary label="Delete" onClick={this.onDelete.bind(this, row, id)} />}
                                    </TableRowColumn>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {this.state.open?(
                        <Dialog open={this.state.open} title={this.state.editTitle}
                                onRequestClose={() => {this.setState({open: false})}} >
                            <this.ChildRecordForm
                                onSubmit={this.onSave.bind(this)}
                                record={this.state._currentRecord}
                                initialValues={this.state._currentRecord}
                                resource={this.props.resource}
                                >
                                {edit.props.children}
                            </this.ChildRecordForm>
                        </Dialog>
                    ):null}
                    <Dialog open={this.state.confirm} title="Delete this record?"
                            actions={[
                                <FlatButton primary label="Yes" onClick={this.onConfirmDelete.bind(this)} />,
                                <FlatButton primary label="No" onClick={() => {this.setState({confirm: false})}} />
                            ]} />
                </div>
            );
        }
    }
);

/*
 */

ChildDatagrid.propTypes = {
    styles: PropTypes.object,
    addField: PropTypes.bool.isRequired,
};

ChildDatagrid.defaultProps = {
    addField: true,
};

export default ChildDatagrid;
