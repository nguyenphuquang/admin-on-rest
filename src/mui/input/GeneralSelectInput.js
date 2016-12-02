import React, { Component, PropTypes } from 'react';
import title from '../../util/title';
import SelectInput from './SelectInput';
import {MenuItem, SelectField} from 'material-ui';

class GeneralSelectInput extends SelectInput {

    render() {
        const { allowEmpty, input, label, choices, optionFunc, optionValue, options, source, style } = this.props;
        return (
            <SelectField
                menuStyle={{ maxHeight: '41px', overflowY: 'hidden' }}
                floatingLabelText={title(label, source)}
                value={input.value}
                onChange={this.onChange}
                autoWidth
                style={style}
                {...options}
                >
                {allowEmpty &&
                <MenuItem value={null} primaryText="" />
                }
                {choices.map(choice =>
                        <MenuItem key={choice[optionValue]} primaryText={optionFunc(choice)} value={choice[optionValue]} />
                )}
            </SelectField>
        );
    }
}

export default GeneralSelectInput;
