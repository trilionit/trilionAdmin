import React, {Component} from 'react';
class NavRight extends Component{
	render(){
		return(
			<div className="nav-right">
				<ul>
					<li><a href=""><i className="fa fa-users fa-1x"></i> Users</a></li>
					<li><a href=""><i className="fa fa-cog fa-1x"></i> Settings</a></li>
				</ul>
			</div>
		);
	}
}
export default NavRight;
