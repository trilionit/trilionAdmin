import React, {Component} from 'react';
class HeaderNav extends Component{
	render(){
		return(
			<div className="header-nav">
				<ul className="clearfix">
					<li><a href=""><i className="fa fa-user fa-2x"></i><span></span></a>
						<ul className="sub-menu">
							<li><a href="#">Profile</a></li>
							<li><a href="#">Settings</a></li>
							<li><a href="#">Logout</a></li>
						</ul>
					</li>
					<li><a href=""><i className="fa fa-bell-o fa-2x"></i></a>
						<ul className="sub-menu">
							<li className="sub-menu-header">You have 5 unread messages</li>
							<li><a href="#">1 new reservation</a></li>
							<li><a href="#">500 new visitors today</a></li>
							<li><a href="#">21 new reviews</a></li>
							<li><a href="#">5 requests</a></li>
						</ul>
					</li>
				</ul>
			</div>
		);
	}
}
export default HeaderNav;
