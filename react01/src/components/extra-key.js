import React from 'react';

export default class ExtraKey extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div className="col-xs-12">
                <div className="row extera">
                    <div className="key btn normal btn-danger col-xs-3">CE</div>
                    <div className="key btn normal btn-default col-xs-3">BCK</div>
                    <div className="key btn equal btn-info col-xs-6">=</div>
                </div>
            </div>
        );
    }
}
