import React, {Component} from 'react';
import NavLeft from './navLeft.jsx';
import NavRight from './navRight.jsx';
class MainNav extends Component{
	render(){
		return(
			<div>
				<nav>
					<div className="container">
						<NavLeft/>
						<NavRight/>
					</div>
				</nav>
			</div>
		);
	}
}
export default MainNav;
