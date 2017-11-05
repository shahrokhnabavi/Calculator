import React from 'react';

import KeyPad from './key-pad';
import Display from './display';

export default class Calculator extends React.Component {
    state = {
        currentDisplay: '0',
        wait: false,
        operator: null,
        result: null,
        operations:[]
    }

    number( number ){
        let display = this.state.currentDisplay,
            wait = this.state.wait;
        this.setState({
            currentDisplay: display === '0' || wait ? number : display + number,
            wait: false
        });
    }

    numberSign(){
        let display = this.state.currentDisplay,
            wait = this.state.wait;
        if( display === '0' ) return;
        if( wait ) display = '-0';
        this.setState({
            currentDisplay: display.charAt(0) === '-' ? display.substr(1) : '-' + display,
            wait: false
        });
    }

    decimalPoint(){
        let display = this.state.currentDisplay,
            wait = this.state.wait;
        if( wait ) display = '0';
        this.setState({
            currentDisplay: display.indexOf('.') !== -1 ? display : display + '.',
            wait: false
        });
    }


    numCurrect(){
        const display   = this.state.currentDisplay,
              wait      = this.state.wait,
              result    = this.state.result,
              condition = display.length === 1 || (display.charAt(0) === '-' && display.length === 2);

        if( wait && result ) return;

        this.setState({
            currentDisplay: condition ? '0' : display.substr(0, display.length-1)
        });
    }

    commitOperator( op ){
        const display  = this.state.currentDisplay,
              wait     = this.state.wait,
              operator = this.state.operator;
        let   result   = this.state.result,
              opt = this.state.operations.slice();

        if( result === null ) {
            result = parseFloat(display);
        } else if( !wait ) {
            result = this.calc(result, operator, parseFloat(display));
        }

        if( wait && result ){
            opt = [];
            opt.push(result);
        } else {
            opt.push(display);
        }
        opt.push(op);
        this.setState({
            operator: op,
            wait: true,
            result: result,
            operations:opt
        });
    }

    calc( number01, op, number02){
        console.log(number01, op, number02);

        switch( op ){
            case '+':
                return number01 + number02;
            case '-':
                return number01 - number02;
            case '÷':
                return number01 / number02;
            case 'x':
                return number01 * number02;
        }
    }

    equal(){
        const display  = this.state.currentDisplay,
              wait = this.state.wait,
              operator = this.state.operator;
        let result   = this.state.result,
            opt = this.state.operations.slice();
        if( wait ) return;

        result = this.calc(result, operator, parseFloat(display));

        opt.push(display);
        this.setState({
            currentDisplay: String(result),
            wait: true,
            result: result,
            operations:opt
        });
    }

    clean(){
        this.setState({
            currentDisplay: '0',
            operator: null,
            wait: false,
            result: null,
            operations:[]
        });
    }


    render(){
        const { currentDisplay, operations } = this.state;
        return (
            <div className="col-md-6 col-sm-8 col-xs-12">
                <Display current={currentDisplay} oprations={operations} />
                <KeyPad
                    hdlNumberPad = {number => this.number( String(number) )}
                    hdlSignKeyPad = {() => this.numberSign()}
                    hdlPeriodPad  = {() => this.decimalPoint()}
                    hdlCurrectPad = {() => this.numCurrect()}
                    hdlOperatorPad = {op => this.commitOperator( op )}
                    hdlEqualPad = {() => this.equal()}
                    hdlCleanPad = {() => this.clean()} />

				<div className="row text-center">
					<div className="col-xs-12">
						<a href="" id="myModal" data-toggle="modal" data-target="#exampleModal">Shortcuts</a>
						|
						<a href="https://github.com/shahrokhnabavi/calculator" target="_blank">Github</a>
						|
						<div className="btn-group">
							<button type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Themes
							</button>
							<div className="dropdown-menu">
								<a className="dropdown-item" href="sIndex.html">Simple</a>
								<a className="dropdown-item" href="index.html">Bootstrap</a>
							</div>
						</div>
					</div>
				</div>
		    </div>
        );
    }
}
