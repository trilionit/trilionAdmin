import React, {Component} from 'react';

class ListAccounts extends Component{
	render(){
		return(
			<div className="column-70">
				<div className="page-container-white-bg">
					<div className="cs-table">
						<table>
							<tbody>
							<tr>
								<th></th>
								<th>Domain Name</th>
								<th>Username</th>
								<th>Contact Email</th>
								<th>Setup Date</th>
								<th>Status</th>
								<th></th>
							</tr>
							
							<tr className="togglePlus" id="1">								
								<td>
									<span>
										<i className="fa fa-plus" id="plus-1"></i>
									</span>
								</td>
								<td>designbyprince.com</td>
								<td>dezyn6</td>
								<td>prince@trilionit.com</td>
								<td>Aug 9, 2017</td>
								<td>Action</td>
								<td className="icon-color">
									<a href="editAccount.html">
										<span><i className="fa fa-pencil"></i></span>
									</a>
									<span><i className="fa fa-trash"></i></span>
								</td>								
							</tr>
						
							<tr className="cs-table-hidden-value" id="toggle-1">
								<td></td>
								<td colSpan={6}>
									<a href="package.html">view package</a>
								</td>
							</tr>
							<tr className="togglePlus" id="2">	
								<td>
									<span>
										<i className="fa fa-plus" id="plus-2"></i>
									</span>
								</td>
								<td>designbyprince.com</td>
								<td>dezyn6</td>
								<td>prince@trilionit.com</td>
								<td>Aug 9, 2017</td>
								<td>Action</td>
								<td className="icon-color">
									<span><i className="fa fa-pencil"></i></span>
									<span><i className="fa fa-trash"></i></span>
								</td>
							</tr>
							<tr className="cs-table-hidden-value" id="toggle-2">
								<td></td>
								<td colSpan={6}>
									view package
								</td>
							</tr>
							<tr className="togglePlus" id="3">	
								<td>
									<span>
										<i className="fa fa-plus" id="plus-3"></i>
									</span>
								</td>
								<td>trilionit.com</td>
								<td>dezyn6</td>
								<td>prince@trilionit.com</td>
								<td>Aug 9, 2017</td>
								<td>Action</td>
								<td className="icon-color">
									<span><i className="fa fa-pencil"></i></span>
									<span><i className="fa fa-trash"></i></span>
								</td>
							</tr>
							<tr className="cs-table-hidden-value" id="toggle-3">
								<td></td>
								<td colSpan={6}>
									view package
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}
export default ListAccounts;