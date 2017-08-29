import React, {Component} from 'react';
class NavLeft extends Component{
	render(){
		return(
			<div className="nav-left">
				<ul>
					<li className="active"><a href="/"><i className="fa fa-area-chart fa-1x"></i> Dashboard</a></li>
					<li><a href=""><i className="fa fa-comments fa-1x"></i> Feedback</a></li>
					<li><a href=""><i className="fa fa-camera fa-1x"></i> Gallery</a></li>
					<li><a href=""><i className="fa fa-money fa-1x"></i> Donations</a></li>
					<li><a href=""><i className="fa fa-credit-card fa-1x"></i> Invoicing</a></li>
					<li><a href=""><i className="fa fa-bed fa-1x" aria-hidden="true"></i> Reservations</a></li>
					<li><a href="/accounts"><i className="fa fa-address-card-o" aria-hidden="true"></i>
					Accounts</a></li>
				</ul>
			</div>
		);
	}
}
export default NavLeft;
