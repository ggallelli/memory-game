import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Box.css';

class Box extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired,
        status: PropTypes.number.isRequired, // 0: coperta; 1: scoperta; 2: match
        id: PropTypes.number.isRequired,
        onClick: PropTypes.func.isRequired
    }
    
    render() {
        const {color, status, id, onClick} = this.props;
        const style = {
            display: 'inline-block',
            backgroundColor: status === 0 ? "Black" : color
        };
        return (
            
            <div className="Box" style={style} onClick={() => onClick(id)}>
            </div>
            );
    }
}

export default Box;
