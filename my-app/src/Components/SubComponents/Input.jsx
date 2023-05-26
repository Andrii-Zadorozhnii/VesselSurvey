import './../../Styles/Components.scss'
import React from 'react';

const Input = ({ value, onChange }) => {
    return (
        <input
            type='number'
            className='input-Component'
            placeholder='Draft'
            value={value}
            onChange={onChange}
            step='0.01'

        />
    );
};

export default Input;
