import React, {Component} from 'react';
import Box from './Box';
import PropTypes from 'prop-types';
import './ListBox.css';

class ListBox extends Component {
    
    static propTypes = {
        boxes: PropTypes.arrayOf(PropTypes.object).isRequired,
        onClick: PropTypes.func.isRequired
    }
    
    render(){
        const {onClick} = this.props;
        const boxes = this.props.boxes.map((b, index) => (
            <Box key={b.id} {...b} onClick={onClick}/>
            ));
        return (
            <div className='box-list'>
                {boxes}
            </div>
            );
    }
}

export default ListBox;