import React, {Component} from 'react';
class Footer extends Component{
	render(){
		return(
			<div>
			<footer>
				<div className="footer">
					<div className="left">
						<ul>
							<li><a href="#">About TrilionAdmin</a></li>
							<li><a href="#">Privacy</a></li>
						</ul>
					</div>
					<div className="right">
						Copyright &copy 2017. Open Source Project
					</div>
				</div>
			</footer>
			</div>
		);
	}
}
export default Footer;
