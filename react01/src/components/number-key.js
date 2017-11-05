import React from 'react';

export default class NumberKey extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div className="col-xs-8">
                <div className="row numpad">
                    <div className="key btn btn-default col-xs-4">1</div>
                    <div className="key btn btn-default col-xs-4">2</div>
                    <div className="key btn btn-default col-xs-4">3</div>
                    <div className="key btn btn-default col-xs-4">4</div>
                    <div className="key btn btn-default col-xs-4">5</div>
                    <div className="key btn btn-default col-xs-4">6</div>
                    <div className="key btn btn-default col-xs-4">7</div>
                    <div className="key btn btn-default col-xs-4">8</div>
                    <div className="key btn btn-default col-xs-4">9</div>
                    <div className="key btn btn-default col-xs-4">
                        -/+
                    </div>
                    <div className="key btn btn-default col-xs-4">0</div>
                    <div className="key btn btn-default col-xs-4">.</div>
                </div>
            </div>
        );
    }
}
