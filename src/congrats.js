import React from 'react';
import PropTypes from 'prop-types';

export default (props) => {
    if (props.success) {
        return <div data-test="component-congrats">
            <span data-test='congrats-msg'>got it</span>
        </div>
    }
    return (<div data-test="component-congrats"></div>)
}