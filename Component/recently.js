import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import recent from '../img/Group 79.png'

class Recent extends React.Component {
	

	render() {
		return (
			<div>
				<img src={recent} alt="recent" />
			</div>
		);
	}
}

export default Recent;
