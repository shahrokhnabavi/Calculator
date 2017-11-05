import React from 'react';

import '../css/cssDisplayer.css'

export default class Displayer extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div className="row" id="lcd">
                <div className="col-xs-12">
                    <div id="screen" className="text-left">
                        <div>12+9÷2</div>
                        <hr />
                        <div className="calculation-result">{this.props.}</div>
                    </div>
                </div>
            </div>
        );
    }
}
