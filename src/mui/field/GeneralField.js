import React, { PropTypes } from 'react';

const GeneralField = ({ value, record = {}, style = null }) => <span style={style}>{value(record)}</span>;

GeneralField.propTypes = {
    record: PropTypes.object,
    value: PropTypes.func.isRequired,
    style: PropTypes.object,
};

export default GeneralField;