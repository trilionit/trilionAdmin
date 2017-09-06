import React, {Component} from 'react';

class AddNewAccountButton extends Component{
	render(){
		return(
			<div>
				<div className="container">
					<div className="grid-12" align="right">
						<div className="button-regular"><a href="/newAccount">New Account</a></div>
					</div>
				</div>
			</div>
		);
	}
}
export default AddNewAccountButton;