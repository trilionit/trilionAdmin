import React, {Component} from 'react';

class EmailStats extends Component{
	
	render(){

			return(	
				<div className="grid-2">
					<div className="quick-container">
						<div className="quick-icon">
							<i className="fa fa-comments fa-2x"></i>
						</div>
						<div className="quick-text">
							<div className="quick-text-top">
								Emails
							</div>
							<div className="quick-text-bottom">
								210
							</div>
						</div>
						<div className="quick-last-update-container">
							<i className="fa fa-cog fa-1x"></i> 
								5 mins ago
						</div>
					</div>
				</div>
				);
	}
	
}
export default EmailStats;



