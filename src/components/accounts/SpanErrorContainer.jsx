import React, {Component} from 'react';

class SpanErrorContainer extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		if(this.props.errors.length>0){
			return(
				<div>
					<span>{this.props.errors}</span>
				</div>
			);		
		}else{
			return(<span></span>)
		}		
	}
	
}
export default SpanErrorContainer;



