import React from 'react';

import KeyPad from './key-pad';
import Displayer from './displayer';

export default class Calculator extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div className="col-md-6 col-sm-8 col-xs-12">
                <Displayer />
                <KeyPad />
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
