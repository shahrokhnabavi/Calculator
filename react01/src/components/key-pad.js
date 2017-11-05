import React from 'react';

import NumberKey from './number-key';
import Operator  from './operator';
import ExtraKey  from './extra-key';

export default class KeyPad extends React.Component {
    render(){
        const {
                hdlNumberPad, hdlSignKeyPad, hdlPeriodPad, hdlCurrectPad,
                hdlOperatorPad
              } = this.props;
        return (
            <div className="row">
                <NumberKey hdlNumberKey={hdlNumberPad} hdlSignKey={hdlSignKeyPad} hdlPeriod={hdlPeriodPad}/>
                <Operator hdlOperatorKey={hdlOperatorPad} />
                <ExtraKey hdlCurrectKey={hdlCurrectPad} />
            </div>
        );
    }
}
