import React from "react";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../App.css";
import Img from "../img.jpg";

class Caro extends React.Component {
	render() {
		return (
			<Row className="first_carousel">
				<img src={Img} alt="first" />
			</Row>
		);
	}
}

export default Caro;

