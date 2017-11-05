import React from 'react';

export default class NumberKey extends React.Component {
    render(){
        const btnClass = "key btn btn-default col-xs-4",
              { hdlNumberKey, hdlSignKey, hdlPeriod } = this.props;

        return (
            <div className="col-xs-8">
                <div className="row numpad">
                    <div className={btnClass} onClick={()=>hdlNumberKey(1)}>1</div>
                    <div className={btnClass} onClick={()=>hdlNumberKey(2)}>2</div>
                    <div className={btnClass} onClick={()=>hdlNumberKey(3)}>3</div>
                    <div className={btnClass} onClick={()=>hdlNumberKey(4)}>4</div>
                    <div className={btnClass} onClick={()=>hdlNumberKey(5)}>5</div>
                    <div className={btnClass} onClick={()=>hdlNumberKey(6)}>6</div>
                    <div className={btnClass} onClick={()=>hdlNumberKey(7)}>7</div>
                    <div className={btnClass} onClick={()=>hdlNumberKey(8)}>8</div>
                    <div className={btnClass} onClick={()=>hdlNumberKey(9)}>9</div>
                    <div className={btnClass} onClick={()=>hdlSignKey()}>-/+</div>
                    <div className={btnClass} onClick={()=>hdlNumberKey(0)}>0</div>
                    <div className={btnClass} onClick={()=>hdlPeriod()}>.</div>
                </div>
            </div>
        );
    }
}
