import React from 'react';
import PropTypes from 'prop-types';

const Picker = props => {
    let input;
    const { onSubmit } = props;
    return (
        <span className="search-span-block">
            <h1 className="search-header">Search for a Github username</h1>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (input.value !== '') {
                        onSubmit(input.value);
                    }
                }}
            >
                <input
                    className="search-input"
                    type="text"
                    ref={node => {
                        input = node;
                    }}
                />
                <input className="input-submit" type="submit" value="Search" />
            </form>
        </span>
    );
};

Picker.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Picker;
