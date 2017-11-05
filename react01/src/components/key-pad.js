import React from 'react';

import NumberKey from './number-key';
import Operator  from './operator';
import ExtraKey  from './extra-key';

export default class KeyPad extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div className="row">
                <NumberKey />
                <Operator />
                <ExtraKey />
            </div>
        );
    }
}
