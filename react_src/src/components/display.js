import React from 'react';
import PropTypes from 'prop-types';

import '../css/cssDisplayer.css'

export default class Display extends React.Component {
    render(){
        let lcd = this.props.current;
        if( this.props.current === 'Infinity' || isNaN(this.props.current) )
            lcd = 'Error handler should be triggered';
        return (
            <div className="row" id="lcd">
                <div className="col-xs-12">
                    <div id="screen" className="text-left">
                        <div>{this.props.oprations.join('')}</div>
                        <hr />
                        <div className="calculation-result">{lcd}</div>
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
