import React, {Component} from 'react';

class AddNewAccountButton extends Component{
	// constructor(props){
	// 	super(props)
	// 	this.state={
	// 		url:"/newAccount",
	// 		buttonName:"New Account"
	// 	}
	// }
	// handleClickedButton(event){
	// 	event.preventDefault();

	// 	this.setState({
	// 		clickedButton:clickedButton
	// 	})
	// }
	render(){
		return(
			<div>
				<div className="container">
					<div className="grid-12" align="right">
						<div className="button-regular"><a href={this.props.clickedButton.url}>{this.props.clickedButton.pageName}</a></div>
					</div>
				</div>
			</div>
		);
	}
}
export default AddNewAccountButton;