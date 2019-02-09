import React from 'react';
import '../../style.css';
import PropTypes from 'prop-types'

const Title = props =>{
    const className = 'title title_'+ props.color;

    return(
        <h1 className={className}>
            LAB 6
        </h1>
    )
};
Title.PropTypes={
    color: PropTypes.oneOf(['blue', 'red'])
};

export default Title;