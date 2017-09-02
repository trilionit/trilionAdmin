import React, {Component} from 'react';

import Footer from './footer/index.jsx';
import TopHeader from './header/index.jsx';


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



