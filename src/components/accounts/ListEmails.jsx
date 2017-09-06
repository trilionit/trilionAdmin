import React, {Component} from 'react';

class ListEmails extends Component{
	render(){
		return(
			<div className="column-30">
				<div className="page-container-white-bg">
					<div className="email-container">
						<div className="email-user-icon-container">
							<div className="email-user-icon">
								<i className="fa fa-user fa-2x"></i>
							</div>
						</div>
						<div className="email-text-container">
							<h5>11:20 am</h5>							
							<h3>Prince Osei-Akyeampong</h3>
							Domain and Hosting Registration
						</div>
					</div>
					<div className="email-container">
						<div className="email-user-icon-container">
							<div className="email-user-icon">
								<i className="fa fa-user fa-2x"></i>
							</div>
						</div>
						<div className="email-text-container">
							<h5>11:20 am</h5>							
							<h3>Prince Osei-Akyeampong</h3>
							Domain and Hosting Registration
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default ListEmails;