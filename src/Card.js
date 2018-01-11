import React, {Componenet} from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
    let style = {};
    if (props.showing) {
        style.backgroundColor = props.backgroundColor;
    }
    return (
        <div className="card-container" style={style} >
        </div>
    );
};

Card.propTypes = {
    showing: PropTypes.bool.isRequired,
    backgroundColor: PropTypes.string.isRequired
};

export default Card;