import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import bar from "../img/Group 90.png";
import "../App.css";

function NB() {
	return (
		<Navbar variant="dark" className="container">
			<img src={bar} alt="nav" className="bar" />
		</Navbar>
	);
}

export default NB;
