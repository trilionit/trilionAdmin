import React, {Component} from 'react';

class errorContainer extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		//console.log(this.props);
		if(this.props.formErrors[fieldName].length >0){	
			return(
				<div className="alert-container alert-error">
					<strong>Invalid !</strong> {this.props.formErrors}
				</div>
			);
		}
	}
	
}
export default errorContainer;



