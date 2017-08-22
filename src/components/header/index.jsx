import React, {Component} from 'react';
import LogoContainer from './logoContainer';
import HeaderNav from './headerNav';
class Header extends Component{
	render(){
		return(
			<div>
				<header>
					<div className="container">
						<LogoContainer />
						<HeaderNav />
					</div>
				</header>
			</div>
		);
	}
}
export default LoginForm;
