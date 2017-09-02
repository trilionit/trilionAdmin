import React, {Component} from 'react';

class AccountStats extends Component{
	
	render(){

			return(	
				<div className="grid-2">
					<div className="quick-container">
						<div className="quick-icon">
							<i className="fa fa-file-text fa-2x"></i>
						</div>
						<div className="quick-text">
							<div className="quick-text-top">
								Accounts
							</div>
							<div className="quick-text-bottom">
								29
							</div>
						</div>
						<div className="quick-last-update-container">
							<i className="fa fa-cog fa-1x"></i> 
							last Updated: Aug 08, 17
						</div>
					</div>
				</div>
				);
	}
	
}
export default AccountStats;



