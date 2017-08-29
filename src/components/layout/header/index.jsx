import React, {Component} from 'react';

import LogoContainer from './logoContainer.jsx';
import HeaderNav from './headerNav.jsx';
import MainNav from './mainNav.jsx';

class TopHeader extends Component{
	render(){
		return(
			<div>
				<header>
					<div className="container">
						<LogoContainer />
						<HeaderNav />
					</div>
					<MainNav />
				</header>
			</div>
		);
	}
}
export default TopHeader;
