import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import shakhsiat1 from "../img/Group 78.png";
import shakhsiat2 from "../img/Group 77.png";
import shakhsiat3 from "../img/Component 22 – 1.png";
import head from "../img/Group 72.svg";
function Shakhsiat() {
	return (
		<div>
			<div>
				{" "}
				<img src={head} alt="head" className="head" />
			</div>

			<Row className="shaksiat">
				
				<Col>
					<img src={shakhsiat3} alt="shakhsiat" />
				</Col>
				<Col>
					<img src={shakhsiat2} alt="shakhsiat" />
				</Col>
				<Col>
					<img src={shakhsiat1} alt="shakhsiat" />
				</Col>
			</Row>
		</div>
	);
}

export default Shakhsiat;
