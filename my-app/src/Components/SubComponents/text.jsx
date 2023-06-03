import './../../Styles/Components.scss'
import React from 'react';

const Text = ({value}) => {
    return (
        <p
            className='text-component margin-bottom-5'
        >{value}</p>
    );
};

export default Text;
