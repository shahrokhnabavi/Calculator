import React from 'react';

export default class Operator extends React.Component {
    render(){
        const btnClass = "key btn btn-warning col-xs-12",
              { hdlOperatorKey } = this.props;
        return (
            <div className="col-xs-4">
                <div className={btnClass} onClick={()=>hdlOperatorKey('+')}>+</div>
                <div className={btnClass} onClick={()=>hdlOperatorKey('-')}>-</div>
                <div className={btnClass} onClick={()=>hdlOperatorKey('÷')}>÷</div>
                <div className={btnClass} onClick={()=>hdlOperatorKey('x')}>x</div>
            </div>
        );
    }
}
