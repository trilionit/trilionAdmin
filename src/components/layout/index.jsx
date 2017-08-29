import React, {Component} from 'react';

import Footer from './footer/index.jsx';
import TopHeader from './header/index.jsx';
require('../../css/style.css');

class Layout extends Component{
	
	render(){

			return(
				<div>
					<TopHeader />
						{this.props.children}
					<Footer />
				</div>
			);
	}
	
}
export default Layout;



