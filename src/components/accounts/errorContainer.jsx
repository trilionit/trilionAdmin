import React, {Component} from 'react';

class errorContainer extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		console.log(this.props);
		if(this.props.displayError.error ==1){	
			return(
				<div className="alert-container alert-error">
					<strong>{this.props.displayError.element} !</strong> {this.props.displayError.errorMessage}
				</div>
			);
		}
	}
	
}
export default errorContainer;



