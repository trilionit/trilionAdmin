import React, {Component} from 'react';

class AddNewAccountButton extends Component{
	constructor(props){
		super(props)
		this.state={
			url:"/newAccount",
			buttonName:"New Account"
		}
	}
	handleClickedButton(event){
		event.preventDefault();

		this.setState({
			clickedButton:clickedButton
		})
	}
	render(){
		console.log(this.props);
		return(
			<div>
				<div className="container">
					<div className="grid-12" align="right">
						<div className="button-regular"><a href={this.state.url} onClick={this.handleClickedButton.bind(this)}>{this.state.buttonName}</a></div>
					</div>
				</div>
			</div>
		);
	}
}
export default AddNewAccountButton;