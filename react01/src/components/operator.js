import React from 'react';

export default class Operator extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div className="col-xs-4">
                <div className="key btn btn-warning col-xs-12">+</div>
                <div className="key btn btn-warning col-xs-12">-</div>
                <div className="key btn btn-warning col-xs-12">÷</div>
                <div className="key btn btn-warning col-xs-12">x</div>
            </div>
        );
    }
}
