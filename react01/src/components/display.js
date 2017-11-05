import React from 'react';
import PropTypes from 'prop-types';

import '../css/cssDisplayer.css'

export default class Display extends React.Component {
    render(){
        return (
            <div className="row" id="lcd">
                <div className="col-xs-12">
                    <div id="screen" className="text-left">
                        <div>12+9÷2</div>
                        <hr />
                        <div className="calculation-result">{this.props.current}</div>
                    </div>
                </div>
            </div>
        );
    }
}

Display.defaultProps = {
    current: '0'
}

Display.propTypes = {
    current: PropTypes.string.isRequired
}
