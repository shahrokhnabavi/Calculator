import React from 'react';

import KeyPad from './key-pad';
import Display from './display';

export default class Calculator extends React.Component {
    state = {
        currentDisplay: '0',
        operator: null
    }

    number( number ){
        let display = this.state.currentDisplay;
        this.setState({
            currentDisplay: display === '0' ? number : display + number
        });
    }

    numberSign(){
        let display = this.state.currentDisplay;
        if( display === '0' ) return;
        this.setState({
            currentDisplay: display.charAt(0) === '-' ? display.substr(1) : '-' + display
        });
    }

    decimalPoint(){
        let display = this.state.currentDisplay;
        this.setState({
            currentDisplay: display.indexOf('.') !== -1 ? display : display + '.'
        });
    }

    numCurrect(){
        const display   = this.state.currentDisplay,
              condition = display.length === 1 || (display.charAt(0) === '-' && display.length === 2);
        this.setState({
            currentDisplay: condition ? '0' : display.substr(0, display.length-1)
        });
    }

    commitOperator( operator ){
        console.log('op');
        const display   = this.state.currentDisplay,
              condition = display.length === 1 || (display.charAt(0) === '-' && display.length === 2);
        this.setState({
            currentDisplay: condition ? '0' : display.substr(0, display.length-1)
        });
    }
    
    render(){
        const { currentDisplay } = this.state;
        return (
            <div className="col-md-6 col-sm-8 col-xs-12">
                <Display current={currentDisplay} />
                <KeyPad
                    hdlNumberPad = {number => this.number( String(number) )}
                    hdlSignKeyPad = {() => this.numberSign()}
                    hdlPeriodPad  = {() => this.decimalPoint()}
                    hdlCurrectPad = {() => this.numCurrect()}
                    hdlOperatorPad = {() => this.commitOperator()} />

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
